/**
 * Page Object Model: Dialog
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const DialogPOM_StandardSelector = '[data-slot="dialog"]';

export class DialogPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_dialogRoot: string;
  private readonly selector_dialogTrigger: string;
  private readonly selector_dialogPortal: string;
  private readonly selector_dialogOverlay: string;
  private readonly selector_dialogContent: string;
  private readonly selector_dialogClose: string;
  private readonly selector_dialogHeader: string;
  private readonly selector_dialogFooter: string;
  private readonly selector_dialogTitle: string;
  private readonly selector_dialogDescription: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = DialogPOM_StandardSelector;

    this.selector_dialogRoot = `[data-slot="dialog"]`;
    this.selector_dialogTrigger = `[data-slot="dialog-trigger"]`;
    this.selector_dialogPortal = `[data-slot="dialog-portal"]`;
    this.selector_dialogOverlay = `[data-slot="dialog-overlay"]`;
    this.selector_dialogContent = `[data-slot="dialog-content"]`;
    this.selector_dialogClose = `[data-slot="dialog-close"]`;
    this.selector_dialogHeader = `[data-slot="dialog-header"]`;
    this.selector_dialogFooter = `[data-slot="dialog-footer"]`;
    this.selector_dialogTitle = `[data-slot="dialog-title"]`;
    this.selector_dialogDescription = `[data-slot="dialog-description"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the Dialog root component is currently visible in the DOM
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the dialog root element is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const dialogRoot = page.locator('[data-slot="dialog"]');
      return await dialogRoot.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a DialogPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<DialogPOM>} DialogPOM instance
   * @throws {Error} When the dialog root element is not visible
   */
  static async getPOM(page: Page): Promise<DialogPOM> {
    const isVisible = await DialogPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'DialogPOM: Cannot instantiate - dialog root is not visible. ' +
        'Expected element [data-slot="dialog"] to be visible.'
      );
    }

    return new DialogPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the dialog root element is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the dialog root is visible
   */
  async isDialogRootVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_dialogRoot, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the dialog trigger element is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the dialog trigger is visible
   */
  async isDialogTriggerVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_dialogTrigger, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the dialog portal wrapper is present in the DOM
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the dialog portal is visible
   */
  async isDialogPortalVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_dialogPortal, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the overlay backdrop is currently visible (dialog is open)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the dialog overlay is visible
   */
  async isDialogOverlayVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_dialogOverlay, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the dialog content panel is currently visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the dialog content is visible
   */
  async isDialogContentVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_dialogContent, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the standalone DialogClose element is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the dialog close element is visible
   */
  async isDialogCloseVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_dialogClose, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the dialog trigger element is enabled and can be interacted with
   * @returns {Promise<boolean>} True if the trigger is enabled
   */
  async isDialogTriggerEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_dialogTrigger).isEnabled();
  }

  /**
   * @desc Whether or not the DialogClose button is enabled (not disabled via pointer-events-none)
   * @returns {Promise<boolean>} True if the close button is enabled
   */
  async isDialogCloseEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_dialogClose).first().isEnabled();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the trigger element to open the dialog modal
   * Expected outcome is that the dialog will open and the overlay/content will become visible
   */
  async clickDialogTrigger(): Promise<void> {
    await this.page.locator(this.selector_dialogTrigger).click();
  }

  /**
   * @desc Clicks the standalone DialogClose component to close/dismiss the dialog
   * Expected outcome is that the dialog will close and the overlay/content will become hidden
   */
  async clickDialogClose(): Promise<void> {
    await this.page.locator(this.selector_dialogClose).first().click();
  }

  /**
   * @desc Clicks the backdrop overlay to dismiss the dialog (default Radix behavior)
   * Expected outcome is that the dialog will close when the overlay is clicked
   */
  async clickDialogOverlay(): Promise<void> {
    await this.page.locator(this.selector_dialogOverlay).click({ force: true });
  }

  /**
   * @desc Scrolls within the dialog content panel if its contents overflow
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollDialogContent(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_dialogContent).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  /**
   * @desc Dismisses the dialog by clicking the built-in close button (X icon) inside DialogContent
   * Expected outcome is that the dialog will close via the embedded close button when showCloseButton=true
   * @throws {Error} When the embedded close button inside dialog content is not visible
   */
  async dismissDialogContent(): Promise<void> {
    const closeButtonSelector = `${this.selector_dialogContent} ${this.selector_dialogClose}`;
    const isVisible = await this.page.locator(closeButtonSelector).isVisible();

    if (!isVisible) {
      throw new Error(
        `DialogPOM: Cannot dismiss dialog content - embedded close button is not visible. ` +
        `Selector: ${closeButtonSelector}`
      );
    }

    await this.page.locator(closeButtonSelector).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the data-slot attribute value of the dialog root to confirm component identity
   * @returns {Promise<string>} The data-slot attribute value
   * @throws {Error} When the attribute is not accessible or null
   */
  async getDialogRootSlotAttribute(): Promise<string> {
    const value = await this.page.locator(this.selector_dialogRoot).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `DialogPOM: data-slot attribute is null on dialog root. Selector: ${this.selector_dialogRoot}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-slot attribute value of the dialog portal to confirm portal identity
   * @returns {Promise<string>} The data-slot attribute value
   * @throws {Error} When the attribute is not accessible or null
   */
  async getDialogPortalSlotAttribute(): Promise<string> {
    const value = await this.page.locator(this.selector_dialogPortal).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `DialogPOM: data-slot attribute is null on dialog portal. Selector: ${this.selector_dialogPortal}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-slot attribute value of the dialog close element to confirm close component identity
   * @returns {Promise<string>} The data-slot attribute value
   * @throws {Error} When the attribute is not accessible or null
   */
  async getDialogCloseSlotAttribute(): Promise<string> {
    const value = await this.page.locator(this.selector_dialogClose).first().getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `DialogPOM: data-slot attribute is null on dialog close. Selector: ${this.selector_dialogClose}`
      );
    }

    return value;
  }

  /**
   * @desc Counts how many DialogClose elements are present (standalone + embedded close button inside DialogContent)
   * @returns {Promise<number>} The count of dialog close elements
   */
  async getDialogCloseCount(): Promise<number> {
    return await this.page.locator(this.selector_dialogClose).count();
  }

  /**
   * @desc Gets the data-state attribute value of the overlay to determine the current animation state
   * @returns {Promise<string>} The data-state attribute value ('open' | 'closed')
   * @throws {Error} When the attribute is not accessible or null
   */
  async getDialogOverlayDataState(): Promise<string> {
    const value = await this.page.locator(this.selector_dialogOverlay).getAttribute('data-state');

    if (value === null) {
      throw new Error(
        `DialogPOM: data-state attribute is null on dialog overlay. Selector: ${this.selector_dialogOverlay}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the CSS class list of the overlay to inspect animation state classes (e.g. animate-in, fade-in-0)
   * @returns {Promise<string>} The full class attribute string of the overlay element
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getDialogOverlayClassList(): Promise<string> {
    const value = await this.page.locator(this.selector_dialogOverlay).getAttribute('class');

    if (value === null) {
      throw new Error(
        `DialogPOM: class attribute is null on dialog overlay. Selector: ${this.selector_dialogOverlay}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-state attribute value of the dialog content to determine the current animation state
   * @returns {Promise<string>} The data-state attribute value ('open' | 'closed')
   * @throws {Error} When the attribute is not accessible or null
   */
  async getDialogContentDataState(): Promise<string> {
    const value = await this.page.locator(this.selector_dialogContent).getAttribute('data-state');

    if (value === null) {
      throw new Error(
        `DialogPOM: data-state attribute is null on dialog content. Selector: ${this.selector_dialogContent}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the CSS class list of the dialog content panel to inspect animation and zoom state classes
   * @returns {Promise<string>} The full class attribute string of the dialog content element
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getDialogContentClassList(): Promise<string> {
    const value = await this.page.locator(this.selector_dialogContent).getAttribute('class');

    if (value === null) {
      throw new Error(
        `DialogPOM: class attribute is null on dialog content. Selector: ${this.selector_dialogContent}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the full inner HTML of the dialog content panel, including header, body, footer, and close button
   * @returns {Promise<string>} The inner HTML of the dialog content element
   * @throws {Error} When the inner HTML is not accessible or null
   */
  async getDialogContentInnerHtml(): Promise<string> {
    const value = await this.page.locator(this.selector_dialogContent).innerHTML();

    if (value === null) {
      throw new Error(
        `DialogPOM: innerHTML is null on dialog content. Selector: ${this.selector_dialogContent}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the position and dimensions of the dialog content panel (centered modal)
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the dialog content
   * @throws {Error} When the bounding box is not accessible or null
   */
  async getDialogContentBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const boundingBox = await this.page.locator(this.selector_dialogContent).boundingBox();

    if (boundingBox === null) {
      throw new Error(
        `DialogPOM: boundingBox is null on dialog content - element may not be visible. Selector: ${this.selector_dialogContent}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Gets the visible text content of the dialog trigger element
   * @returns {Promise<string>} The text content of the trigger element exactly as it appears
   * @throws {Error} When the text content is not accessible or null
   */
  async getDialogTriggerText(): Promise<string> {
    const value = await this.page.locator(this.selector_dialogTrigger).textContent();

    if (value === null) {
      throw new Error(
        `DialogPOM: textContent is null on dialog trigger. Selector: ${this.selector_dialogTrigger}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-slot attribute value of the dialog trigger to confirm trigger element identity
   * @returns {Promise<string>} The data-slot attribute value
   * @throws {Error} When the attribute is not accessible or null
   */
  async getDialogTriggerSlotAttribute(): Promise<string> {
    const value = await this.page.locator(this.selector_dialogTrigger).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `DialogPOM: data-slot attribute is null on dialog trigger. Selector: ${this.selector_dialogTrigger}`
      );
    }

    return value;
  }
}