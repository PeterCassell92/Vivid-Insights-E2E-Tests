/**
 * Page Object Model: StoreProvider
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

/**
 * StoreProvider is a pure infrastructure/app-root wrapper component.
 * It renders no user-facing UI of its own — it is a client-side Redux
 * <Provider> wrapper that also mounts the render-null ActivityLogSSEProvider.
 *
 * Because this component has no data-testid attributes, visible text, or
 * interactive elements of its own, visibility is inferred by confirming that
 * the DOM contains at least one child element rendered inside the Provider
 * tree (i.e. the document body has content), which is the only observable
 * signal available for a render-null infrastructure wrapper.
 *
 * The POM exposes state-inspection helpers that allow tests to verify the
 * Redux bootstrap lifecycle (settings loaded, SSE connection established)
 * via the application's network activity and Redux-driven DOM side-effects.
 */

// Root selector constant.
// StoreProvider renders <Provider> which has no DOM node of its own.
// The closest stable anchor is the document body — any child content
// confirms the Provider tree is mounted.
const StoreProviderPOM_StandardSelector = 'body';

export class StoreProviderPOM {
  private readonly page: Page;

  // =========================================================================
  // Selectors
  // =========================================================================

  private readonly rootSelector: string;

  /**
   * The ActivityLogSSEProvider renders null — there is no DOM element for it.
   * Its presence is confirmed indirectly via network requests to the SSE
   * endpoint rather than a DOM selector.
   */
  private readonly selector_body: string;

  constructor(page: Page) {
    this.page = page;

    // =========================================================================
    // Selector definitions — single source of truth
    // =========================================================================

    this.rootSelector = StoreProviderPOM_StandardSelector;

    // The Provider tree root is the document body (Provider has no DOM node).
    this.selector_body = this.rootSelector;
  }

  // =========================================================================
  // Static Methods
  // =========================================================================

  /**
   * @desc Checks whether the StoreProvider tree is mounted and visible.
   * Because StoreProvider renders no DOM node of its own, visibility is
   * confirmed by the presence of a non-empty document body — the minimum
   * observable signal for a render-null infrastructure wrapper.
   *
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} true if the Provider tree appears to be mounted
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const body = page.locator(StoreProviderPOM_StandardSelector);
      return await body.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates the StoreProvider tree is mounted
   * and returns a StoreProviderPOM instance.
   *
   * @param page - Playwright Page instance
   * @returns {Promise<StoreProviderPOM>} StoreProviderPOM instance
   * @throws {Error} When the Provider tree is not visible (body not present)
   */
  static async getPOM(page: Page): Promise<StoreProviderPOM> {
    const isVisible = await StoreProviderPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'StoreProviderPOM: Cannot instantiate — Provider tree is not visible. ' +
          `Expected element [${StoreProviderPOM_StandardSelector}] to be visible.`
      );
    }

    return new StoreProviderPOM(page);
  }

  // =========================================================================
  // Visibility and State Methods
  // =========================================================================

  /**
   * @desc Whether the document body (Provider tree root) is visible.
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} true if the body element is visible
   */
  async isProviderTreeVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.locator(this.selector_body).waitFor({ state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Waits for the Redux settings bootstrap to complete by observing
   * the network response from the /api/settings endpoint that fetchSettings()
   * dispatches on mount.
   *
   * @param {number} [timeout=10000] - Timeout in milliseconds to wait for the
   *   settings API response
   * @returns {Promise<boolean>} true if the settings API responded successfully
   * @throws {Error} When the settings API response is not received within the
   *   timeout period
   */
  async waitForSettingsBootstrap(timeout: number = 10000): Promise<boolean> {
    try {
      const response = await this.page.waitForResponse(
        (resp) => resp.url().includes('/api/settings') && resp.status() === 200,
        { timeout }
      );
      const body = await response.json();
      return body?.success === true;
    } catch {
      throw new Error(
        `StoreProviderPOM: Settings bootstrap did not complete within ${timeout}ms. ` +
          'Expected a successful response from /api/settings.'
      );
    }
  }

  /**
   * @desc Checks whether the /api/settings endpoint has been called, indicating
   * that fetchSettings() was dispatched on mount.
   *
   * @param {number} [timeout=5000] - Timeout in milliseconds
   * @returns {Promise<boolean>} true if the settings request was observed
   */
  async hasSettingsRequestBeenDispatched(timeout: number = 5000): Promise<boolean> {
    try {
      await this.page.waitForRequest(
        (req) => req.url().includes('/api/settings'),
        { timeout }
      );
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Waits for the ActivityLogSSEProvider to establish its SSE connection
   * by observing a request to the activity-log SSE endpoint.
   * ActivityLogSSEProvider renders null — this is the only observable signal
   * of its presence.
   *
   * @param {number} [timeout=10000] - Timeout in milliseconds
   * @returns {Promise<boolean>} true if the SSE connection request was observed
   */
  async waitForActivityLogSSEConnection(timeout: number = 10000): Promise<boolean> {
    try {
      await this.page.waitForRequest(
        (req) =>
          req.url().includes('/api/activity-log') ||
          req.url().includes('activity-log') ||
          req.headers()['accept'] === 'text/event-stream',
        { timeout }
      );
      return true;
    } catch {
      return false;
    }
  }

  // =========================================================================
  // Data Retrieval Methods
  // =========================================================================

  /**
   * @desc Retrieves the HTTP response body from the /api/settings endpoint
   * to inspect the bootstrapped settings state (currency, dateFormat,
   * defaultBankAccountId).
   *
   * @param {number} [timeout=10000] - Timeout in milliseconds
   * @returns {Promise<Record<string, unknown>>} The parsed JSON response data
   *   from the settings API exactly as returned
   * @throws {Error} When the settings API response is not received within the
   *   timeout or the response body cannot be parsed
   */
  async getBootstrappedSettingsResponse(
    timeout: number = 10000
  ): Promise<Record<string, unknown>> {
    let responseBody: Record<string, unknown> | null = null;

    try {
      const response = await this.page.waitForResponse(
        (resp) => resp.url().includes('/api/settings') && resp.status() === 200,
        { timeout }
      );
      responseBody = await response.json();
    } catch {
      throw new Error(
        `StoreProviderPOM: Could not retrieve bootstrapped settings response within ${timeout}ms. ` +
          'Expected a response from /api/settings.'
      );
    }

    if (!responseBody) {
      throw new Error(
        'StoreProviderPOM: Settings API response body is null. ' +
          'Expected a valid JSON response from /api/settings.'
      );
    }

    return responseBody;
  }
}