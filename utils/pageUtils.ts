import { Page } from '@playwright/test';

/**
 * Options for enhanced click handling
 */
interface EnhancedClickOptions {
  awaitLoadingCleared?: boolean;
  loadingClearanceTimeout?: number;
  actionDescription?: string;
  clickType?: 'click' | 'dblclick' | 'rightclick';
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  preclickDelay?: number;
  postclickDelay?: number;
  force?: boolean;
}

/**
 * Page utilities for handling notifications, dialogs, and safe interactions
 * Compatible with both playwright and playwright-core pages
 */
class PageUtils {
  protected page: Page;
  protected notificationSelectors: {
    bar: string;
    closeBtn: string;
  };
  protected dialogSelectors: {
    modalMask: string;
    dialogClose: string;
  };

  constructor(page: Page) {
    this.page = page;
    this.notificationSelectors = {
      bar: '[data-testid=notificationBar]',
      closeBtn: '[data-testid=notificationBar] button .close-icon'
    };
    this.dialogSelectors = {
      modalMask: '.modal-mask',
      dialogClose: '[data-testid="DialogClose"]'
    };
  }

  /**
   * @desc Waits for loading overlays to complete by checking for loading containers
   * @param timeout - Optional timeout in milliseconds (default: 10000)
   * @param checkInterval - Optional check interval in milliseconds (default: 500)
   * @returns Promise that resolves when loading is complete
   * @throws Error when loading doesn't complete within timeout
   */
  public async waitForLoadingCompletion(timeout: number = 10000, checkInterval: number = 500): Promise<void> {
    const loadingSelectors = '.loading-container, .loading';
    const startTime = Date.now();
    
    console.log('⏳ Waiting for loading completion...');
    
    try {
      // First, wait a short time for any loading to start
      await this.page.waitForTimeout(100);
      
      while (Date.now() - startTime < timeout) {
        try {
          
          // Check if any loading elements are visible
          const loadingElements = await this.page.locator(loadingSelectors).all();
          let hasVisibleLoading = false;
          
          for (const element of loadingElements) {
            const isVisible = await element.isVisible();
            if (isVisible) {
              hasVisibleLoading = true;
              break;
            }
          }
          
          if (!hasVisibleLoading) {
            console.log('✅ Loading completed');
            return;
          }
          
          // Wait before checking again
          await this.page.waitForTimeout(checkInterval);
          
        } catch (error) {
          // If elements don't exist, consider loading complete
          console.log('✅ Loading completed (no loading elements found)');
          return;
        }
      }
      
      // If we get here, timeout was reached
      const elapsedTime = Date.now() - startTime;
      throw new Error(`Loading did not complete within ${timeout}ms (elapsed: ${elapsedTime}ms). Loading selectors: ${loadingSelectors}`);
      
    } catch (error) {
      if (error instanceof Error && error.message.includes('Loading did not complete')) {
        throw error;
      }
      // For other errors, assume loading is complete
      console.log('✅ Loading completion check completed (with minor errors)');
    }
  }

  /**
   * @desc Check if notifications are visible
   * @param timeout - Optional timeout in milliseconds
   * @returns True if notifications are visible
   */
  public async notificationIsVisible(timeout: number = 3000): Promise<boolean> {
    try {
      const el = await this.page.$(this.notificationSelectors.bar);
      if (!el) return false;

      return await el.isVisible();
    } catch (error) {
      console.warn(`Notification check failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return false;
    }
  }

  /**
   * @desc Waits for a notification containing specific text to appear and closes it
   * @param expectedText - The text to search for in the notification (case-sensitive partial match)
   * @param timeout - Maximum time to wait in milliseconds
   * @param checkInterval - Optional check interval in milliseconds (default: 500)
   * @returns True if notification with expected text is found and closed, false if timeout expires
   */
  public async waitForNotificationWithText(
    expectedText: string,
    timeout: number,
    checkInterval: number = 500
  ): Promise<boolean> {
    const startTime = Date.now();

    console.log(`⏳ Waiting for notification containing text: "${expectedText}" (timeout: ${timeout}ms)`);

    while (Date.now() - startTime < timeout) {
      try {
        // Check if notification bar is visible
        const notificationElement = await this.page.$(this.notificationSelectors.bar);

        if (notificationElement) {
          const isVisible = await notificationElement.isVisible();

          if (isVisible) {
            // Get the text content of the notification
            const notificationText = await notificationElement.textContent();

            if (notificationText && notificationText.includes(expectedText)) {
              const elapsedTime = Date.now() - startTime;
              console.log(`✅ Found notification with text "${expectedText}" after ${elapsedTime}ms`);

              // Close the notification
              await this.closeNotification();

              return true;
            } else {
              console.log(`   Notification visible but text doesn't match. Expected: "${expectedText}", Got: "${notificationText}"`);
            }
          }
        }

        // Wait before checking again
        await this.page.waitForTimeout(checkInterval);

      } catch (error) {
        // Log error but continue checking until timeout
        console.warn(`   Error checking notification: ${error instanceof Error ? error.message : 'Unknown error'}`);
        await this.page.waitForTimeout(checkInterval);
      }
    }

    // Timeout reached without finding the expected text
    const elapsedTime = Date.now() - startTime;
    console.log(`⏱️  Notification with text "${expectedText}" not found within ${timeout}ms (elapsed: ${elapsedTime}ms)`);
    return false;
  }

  /**
   * @desc Close notifications if visible
   * @param delay - Optional delay for the click
   */
  public async closeNotification(delay?: number): Promise<void> {
    try {
      const closeBtn = await this.page.$(this.notificationSelectors.closeBtn);
      if (closeBtn) {
        const isVisible = await closeBtn.isVisible();
        if (isVisible) {
          console.log('🔘 Closing notification...');

          // Scroll the notification bar into view first
          const notificationBar = await this.page.$(this.notificationSelectors.bar);
          if (notificationBar) {
            await notificationBar.scrollIntoViewIfNeeded();
            await this.page.waitForTimeout(100); // Small delay after scroll
          }

          await closeBtn.click({ force: true, delay, timeout: 2000 });
          console.log('✅ Notification closed successfully');
        } else {
          console.log(`⚠️  Notification close button found but not visible. Selector: ${this.notificationSelectors.closeBtn}`);
        }
      } else {
        console.log(`⚠️  Notification close button not found in DOM. Selector: ${this.notificationSelectors.closeBtn}`);
      }
    } catch (err) {
      console.warn('❌ Notification close button was not clickable:', err instanceof Error ? err.message : String(err));
      console.warn('Full error details:', err);
    }
  }

  /**
   * @desc Check if there are any visible dialogs on the page
   * @returns True if dialogs are visible
   */
  public async dialogsAreVisible(): Promise<boolean> {
    try {
      const visibleDialogs = await this.page.$$eval(this.dialogSelectors.modalMask,
        (dialogs: Element[]) => dialogs.filter((dialog: Element) => {
          const style = window.getComputedStyle(dialog as HTMLElement);
          return style.display !== 'none';
        })
      );
      return visibleDialogs.length > 0;
    } catch (err) {
      // No dialogs found
      console.warn('Dialog check failed:', err instanceof Error ? err.message : 'Unknown error');
      return false;
    }
  }

  /**
   * @desc Dismiss all visible dialogs by clicking their close buttons
   * @param delay ms to delay such that it is viable for popups that are still animating on screen to become visible
   * @returns Number of dialogs dismissed
   */
  public async dismissAllDialogs( delay : number | undefined | null = 500 ): Promise<number> {
    let dismissedCount = 0;
    if(delay){
      this.page.waitForTimeout(delay)
    }
    try {
      // Find all visible modal masks
      const visibleDialogs = await this.page.$$eval(this.dialogSelectors.modalMask,
        (dialogs: Element[]) => dialogs
          .filter((dialog: Element) => {
            const style = window.getComputedStyle(dialog as HTMLElement);
            return style.display !== 'none';
          })
          .map((dialog: Element) => {
            const closeBtn = dialog.querySelector('[data-testid="DialogClose"]');
            return closeBtn ? true : false;
          })
      );

      if (visibleDialogs.length === 0) {
        return dismissedCount;
      }

      // Get all visible close buttons
      const closeButtons = await this.page.locator(
        `${this.dialogSelectors.modalMask}:not([style*="display: none"]) ${this.dialogSelectors.dialogClose}`
      ).all();

      // Click each close button
      for (const closeBtn of closeButtons) {
        try {
          const isVisible = await closeBtn.isVisible();
          if (isVisible) {
            await closeBtn.click({ force: true, timeout: 2000 });
            dismissedCount++;

            // Small delay between clicks to allow dialog animations
            await this.page.waitForTimeout(100);
          }
        } catch (err) {
          console.warn('Failed to click dialog close button:', err instanceof Error ? err.message : 'Unknown error');
        }
      }

      // Wait a bit for any closing animations
      if (dismissedCount > 0) {
        await this.page.waitForTimeout(300);
      }

    } catch (err) {
      console.warn('Error while dismissing dialogs:', err instanceof Error ? err.message : 'Unknown error');
    }

    return dismissedCount;
  }

  /**
   * @desc Enhanced click method that handles overlaying notifications and dialogs
   * @param selector - The selector to click
   */
  public async safeClick(selector: string): Promise<void> {
    // First, dismiss any open dialogs
    const dialogsDismissed = await this.dismissAllDialogs();
    if (dialogsDismissed > 0) {
      console.log(`Dismissed ${dialogsDismissed} dialog(s) before clicking`);
    }

    // Then handle notifications
    const notificationVisible = await this.notificationIsVisible();
    if (notificationVisible) {
      await this.closeNotification(100);

      const notification2Visible = await this.notificationIsVisible();
      if (notification2Visible) {
        await this.closeNotification(100);
      }
    }

    // Wait for the target element to be clickable
    await this.page.waitForSelector(selector, { state: 'visible' });

    // Additional check: ensure element is not covered
    const element = await this.page.$(selector);
    if (element) {
      const isEnabled = await element.isEnabled();
      const isVisible = await element.isVisible();

      if (!isEnabled || !isVisible) {
        throw new Error(`Element ${selector} is not clickable (enabled: ${isEnabled}, visible: ${isVisible})`);
      }
    }

    // Perform the click
    await this.page.click(selector, {
      force: true,
      timeout: 2000,
    });
  }

  /**
   * @desc Safe fill method that handles notifications and dialogs before filling
   * @param selector - The selector to fill
   * @param value - The value to fill
   */
  public async safeFill(selector: string, value: string): Promise<void> {
    // Dismiss dialogs and notifications first
    await this.dismissAllDialogs();

    const notificationVisible = await this.notificationIsVisible();
    if (notificationVisible) {
      await this.closeNotification(100);
    }

    // Wait for the element and fill
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.fill(selector, value);
  }

  /**
   * @desc Safe select method that handles notifications and dialogs before selecting
   * @param selector - The selector to select from
   * @param values - The value(s) to select
   */
  public async safeSelectOption(selector: string, values: string | string[]): Promise<void> {
    // Dismiss dialogs and notifications first
    await this.dismissAllDialogs();

    const notificationVisible = await this.notificationIsVisible();
    if (notificationVisible) {
      await this.closeNotification(100);
    }

    // Wait for the element and select
    await this.page.waitForSelector(selector, { state: 'visible' });
    await this.page.selectOption(selector, values);
  }

  /**
   * @desc Enhanced click method that handles loading overlays after click events
   * This is a reusable pattern for any click action that may trigger a loading overlay
   * @param {string} selector - The selector to click
   * @param {EnhancedClickOptions} [options] - Options for click behavior and loading handling
   * @throws {Error} When click fails or loading doesn't complete within timeout
   */
  public async clickWithEnhancedHandling(
    selector: string,
    options: EnhancedClickOptions = {}
  ): Promise<void> {
    // Set defaults for all options
    const {
      awaitLoadingCleared = true,
      loadingClearanceTimeout = 5000,
      actionDescription = 'action',
      clickType = 'click',
      ctrlKey = false,
      shiftKey = false,
      altKey = false,
      preclickDelay = 100,
      postclickDelay = 300,
      force = false
    } = options;

    // Platform detection for cross-platform modifier key support
    // On macOS, Ctrl+Click behavior typically uses Cmd (Meta) key
    // On Windows/Linux, it uses Control key
    // embedded Chromium 88, even though manual Cmd+Click works in the app
    const isMac = process.platform === 'darwin';
    const primaryModifierKey = isMac  ? 'Meta' : 'Control';
    const primaryModifierLabel = isMac  ? 'Cmd' : 'Ctrl';

    // Build modifier description for logging
    const modifiers = [];
    if (ctrlKey) modifiers.push(primaryModifierLabel);
    if (shiftKey) modifiers.push('Shift');
    if (altKey) modifiers.push('Alt');
    const modifierText = modifiers.length > 0 ? `+${modifiers.join('+')}` : '';
    const clickTypeText = clickType === 'dblclick' ? 'Double-click' :
                         clickType === 'rightclick' ? 'Right-click' : 'Click';

    console.log(`🖱️ ${actionDescription}: ${clickTypeText}${modifierText} element...`);

    // Ensure element is visible before clicking
    await this.page.waitForSelector(selector, { state: 'visible' });

    // Build click options for Playwright
    // Map ctrlKey to the platform's primary modifier (Cmd on Mac, Ctrl elsewhere)
    const playwrightClickOptions = {
      force,
      delay: preclickDelay,
      modifiers: [
        ...(ctrlKey ? [primaryModifierKey] : []),
        ...(shiftKey ? ['Shift'] : []),
        ...(altKey ? ['Alt'] : [])
      ] as ('Alt' | 'Control' | 'Meta' | 'Shift')[]
    };
    
    // Perform the appropriate click type
    switch (clickType) {
      case 'dblclick':
        await this.page.dblclick(selector, playwrightClickOptions);
        break;
      case 'rightclick':
        await this.page.click(selector, { ...playwrightClickOptions, button: 'right' });
        break;
      default: // 'click'
        await this.page.click(selector, playwrightClickOptions);
        break;
    }
    
    // Handle loading overlay if requested
    if (awaitLoadingCleared) {
      console.log(`⏳ ${actionDescription}: Waiting for loading overlay to clear...`);
      // Wait 100ms to allow loading overlay to appear
      await this.page.waitForTimeout(100);
      
      // Wait for loading completion - let errors propagate
      await this.waitForLoadingCompletion(loadingClearanceTimeout);
      console.log(`✅ ${actionDescription}: Loading overlay cleared`);
    } else {
      // Standard wait without loading monitoring
      await this.page.waitForTimeout(postclickDelay);
    }
  }
}

export { PageUtils };
export type { EnhancedClickOptions };
