/**
 * Page Object Model: ActivityLogSSEProvider
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ActivityLogSSEProviderPOM_StandardSelector = '[data-testid=activity-log-sse-provider]';

export class ActivityLogSSEProviderPOM {
  private readonly page: Page;

  private readonly rootSelector: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = ActivityLogSSEProviderPOM_StandardSelector;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the ActivityLogSSEProvider is mounted in the DOM.
   * Because this component renders null, visibility is determined by
   * confirming the page itself is loaded and the SSE infrastructure is
   * in place rather than a visible DOM element.
   * @param {Page} page - Playwright Page instance
   * @returns {Promise<boolean>} True if the page is accessible (provider is mounted at app root)
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      // ActivityLogSSEProvider renders nothing — it is a headless provider.
      // We verify the page is loaded and accessible as a proxy for the
      // provider being mounted at the app root.
      const readyState = await page.evaluate(() => document.readyState);
      return readyState === 'complete' || readyState === 'interactive';
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates the provider is mounted and returns
   * an ActivityLogSSEProviderPOM instance.
   * @param {Page} page - Playwright Page instance
   * @returns {Promise<ActivityLogSSEProviderPOM>} ActivityLogSSEProviderPOM instance
   * @throws {Error} When the page is not accessible, indicating the provider
   * cannot be confirmed as mounted
   */
  static async getPOM(page: Page): Promise<ActivityLogSSEProviderPOM> {
    const isVisible = await ActivityLogSSEProviderPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ActivityLogSSEProviderPOM: Cannot instantiate - page is not accessible. ' +
          'ActivityLogSSEProvider is a headless provider that renders no DOM elements; ' +
          'the page must be loaded and accessible for the provider to be considered mounted.'
      );
    }

    return new ActivityLogSSEProviderPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Checks whether an active SSE connection has been established by
   * verifying that the browser has an open EventSource connection to the
   * expected activity log SSE endpoint.
   * @returns {Promise<boolean>} True if an SSE connection is active
   */
  async isSSEConnectionActive(): Promise<boolean> {
    try {
      const hasActiveConnection = await this.page.evaluate(() => {
        // Check for any open EventSource connections on the page
        // EventSource connections are tracked via the global performance entries
        const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        return resources.some(
          (entry) =>
            entry.initiatorType === 'other' &&
            (entry.name.includes('/api/activity') || entry.name.includes('sse'))
        );
      });
      return hasActiveConnection;
    } catch {
      return false;
    }
  }

  /**
   * @desc Waits for an SSE connection request to be made to the activity log
   * endpoint within the given timeout period.
   * @param {number} [timeout=5000] - Timeout in milliseconds to wait for the SSE request
   * @returns {Promise<boolean>} True if an SSE connection request was observed
   */
  async waitForSSEConnectionRequest(timeout: number = 5000): Promise<boolean> {
    try {
      await this.page.waitForRequest(
        (request) =>
          request.url().includes('/api/activity') || request.url().includes('sse'),
        { timeout }
      );
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Waits for the page to reach a fully loaded state, confirming the
   * ActivityLogSSEProvider has had the opportunity to mount and initiate its
   * SSE connection.
   * @param {number} [timeout=5000] - Timeout in milliseconds
   * @returns {Promise<void>}
   * @throws {Error} When the page does not reach a loaded state within the timeout
   */
  async waitForProviderMount(timeout: number = 5000): Promise<void> {
    try {
      await this.page.waitForLoadState('domcontentloaded', { timeout });
    } catch {
      throw new Error(
        `ActivityLogSSEProviderPOM: Page did not reach loaded state within ${timeout}ms. ` +
          'Cannot confirm ActivityLogSSEProvider has mounted.'
      );
    }
  }
}