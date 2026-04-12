/**
 * Page Object Model: ApiDocsClient
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ApiDocsClientPOM_StandardSelector = '[data-testid="api-docs-client"]';

export class ApiDocsClientPOM {
  private readonly page: Page;

  // === SELECTORS ===
  private readonly rootSelector: string;
  private readonly selector_apiDocsClientRoot: string;
  private readonly selector_failedState: string;
  private readonly selector_loadingState: string;
  private readonly selector_generatingState: string;
  private readonly selector_headerBar: string;
  private readonly selector_regenerateButton: string;
  private readonly selector_tryAgainButton: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = ApiDocsClientPOM_StandardSelector;
    this.selector_apiDocsClientRoot = this.rootSelector;
    this.selector_failedState = `${this.rootSelector} [data-testid="api-docs-failed"]`;
    this.selector_loadingState = `${this.rootSelector} [data-testid="api-docs-loading"]`;
    this.selector_generatingState = `${this.rootSelector} [data-testid="api-docs-generating"]`;
    this.selector_headerBar = `${this.rootSelector} > div.mb-6`;
    this.selector_regenerateButton = `${this.rootSelector} [data-testid="regenerate-openapi-button"]`;
    this.selector_tryAgainButton = `${this.selector_failedState} button`;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the ApiDocsClient root container is visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the root container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const root = page.locator(ApiDocsClientPOM_StandardSelector);
      return await root.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns an ApiDocsClientPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<ApiDocsClientPOM>} ApiDocsClientPOM instance
   * @throws {Error} When the ApiDocsClient root container is not visible
   */
  static async getPOM(page: Page): Promise<ApiDocsClientPOM> {
    const isVisible = await ApiDocsClientPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ApiDocsClientPOM: Cannot instantiate - root container is not visible. ' +
        `Expected element [${ApiDocsClientPOM_StandardSelector}] to be visible.`
      );
    }

    return new ApiDocsClientPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Check if the root ApiDocsClient container is visible on screen
   * @returns {Promise<boolean>} True if the root container is visible
   */
  async isApiDocsClientRootVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_apiDocsClientRoot).isVisible();
  }

  /**
   * @desc Check if the failed/error state panel is currently visible (pageState === 'failed')
   * @returns {Promise<boolean>} True if the failed state panel is visible
   */
  async isFailedStateVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_failedState).isVisible();
  }

  /**
   * @desc Check if the loading state panel is currently visible (pageState === 'loading')
   * @returns {Promise<boolean>} True if the loading state panel is visible
   */
  async isLoadingStateVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_loadingState).isVisible();
  }

  /**
   * @desc Check if the generating state panel is currently visible (pageState === 'generating')
   * @returns {Promise<boolean>} True if the generating state panel is visible
   */
  async isGeneratingStateVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_generatingState).isVisible();
  }

  /**
   * @desc Check if the header bar is visible on screen
   * @returns {Promise<boolean>} True if the header bar is visible
   */
  async isHeaderBarVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_headerBar).isVisible();
  }

  /**
   * @desc Check if the Regenerate Spec button inside the header bar is enabled
   * The button is disabled when pageState === 'generating'
   * @returns {Promise<boolean>} True if the Regenerate Spec button is enabled
   */
  async isRegenerateButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_regenerateButton).isEnabled();
  }

  // === ACTION METHODS ===

  /**
   * @desc Scrolls within the root container to navigate through the API documentation content
   * Expected outcome is that the visible portion of the API documentation changes
   * @param scrollOptions - Options for the scroll action (e.g. deltaY for vertical scroll amount)
   */
  async scrollApiDocsClientRoot(scrollOptions: { deltaX?: number; deltaY?: number }): Promise<void> {
    await this.page.locator(this.selector_apiDocsClientRoot).hover();
    await this.page.mouse.wheel(scrollOptions.deltaX ?? 0, scrollOptions.deltaY ?? 0);
  }

  /**
   * @desc Clicks the 'Try Again' button inside the failed state panel to retry spec generation
   * Expected outcome is that spec generation is retried and the state transitions away from 'failed'
   * @throws {Error} When the failed state panel is not visible
   */
  async clickTryAgainButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_failedState).isVisible();
    if (!isVisible) {
      throw new Error(
        `ApiDocsClientPOM: Cannot click 'Try Again' - failed state panel is not visible. ` +
        `Selector: ${this.selector_failedState}`
      );
    }
    await this.page.locator(this.selector_tryAgainButton).click();
  }

  /**
   * @desc Clicks the Regenerate Spec button inside the header bar to trigger OpenAPI spec regeneration
   * Expected outcome is that spec regeneration is triggered and the state transitions to 'generating'
   * @throws {Error} When the header bar is not visible or the regenerate button is not enabled
   */
  async clickRegenerateSpecButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_headerBar).isVisible();
    if (!isVisible) {
      throw new Error(
        `ApiDocsClientPOM: Cannot click 'Regenerate Spec' - header bar is not visible. ` +
        `Selector: ${this.selector_headerBar}`
      );
    }

    const isEnabled = await this.page.locator(this.selector_regenerateButton).isEnabled();
    if (!isEnabled) {
      throw new Error(
        `ApiDocsClientPOM: Cannot click 'Regenerate Spec' - button is disabled (pageState may be 'generating'). ` +
        `Selector: ${this.selector_regenerateButton}`
      );
    }

    await this.page.locator(this.selector_regenerateButton).click();
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Get the full inner HTML of the ApiDocsClient root to inspect current rendered state
   * @returns {Promise<string>} The inner HTML of the root container exactly as rendered
   * @throws {Error} When the root container content is not accessible
   */
  async getApiDocsClientRootInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_apiDocsClientRoot).isVisible();
    const html = await this.page.locator(this.selector_apiDocsClientRoot).innerHTML();

    if (html === null) {
      throw new Error(
        `ApiDocsClientPOM: Inner HTML is null for root container. ` +
        `Selector: ${this.selector_apiDocsClientRoot}`
      );
    }

    return html;
  }

  /**
   * @desc Extract the error message text displayed in the failed state panel
   * @returns {Promise<string>} The text content of the failed state panel exactly as it appears
   * @throws {Error} When the failed state panel content is not accessible
   */
  async getFailedStateText(): Promise<string> {
    await this.page.locator(this.selector_failedState).isVisible();
    const text = await this.page.locator(this.selector_failedState).textContent();

    if (text === null) {
      throw new Error(
        `ApiDocsClientPOM: Text content is null for failed state panel. ` +
        `Selector: ${this.selector_failedState}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the loading message text (e.g. 'Loading API docs…')
   * @returns {Promise<string>} The text content of the loading state panel exactly as it appears
   * @throws {Error} When the loading state panel content is not accessible
   */
  async getLoadingStateText(): Promise<string> {
    await this.page.locator(this.selector_loadingState).isVisible();
    const text = await this.page.locator(this.selector_loadingState).textContent();

    if (text === null) {
      throw new Error(
        `ApiDocsClientPOM: Text content is null for loading state panel. ` +
        `Selector: ${this.selector_loadingState}`
      );
    }

    return text;
  }

  /**
   * @desc Extract all text content from the generating panel, including status message and elapsed timer
   * @returns {Promise<string>} The full text content of the generating state panel exactly as it appears
   * @throws {Error} When the generating state panel content is not accessible
   */
  async getGeneratingStateText(): Promise<string> {
    await this.page.locator(this.selector_generatingState).isVisible();
    const text = await this.page.locator(this.selector_generatingState).textContent();

    if (text === null) {
      throw new Error(
        `ApiDocsClientPOM: Text content is null for generating state panel. ` +
        `Selector: ${this.selector_generatingState}`
      );
    }

    return text;
  }

  /**
   * @desc Extract all text from the header bar, including the title, version number, generation timestamp, and button label
   * @returns {Promise<string>} The full text content of the header bar exactly as it appears
   * @throws {Error} When the header bar content is not accessible
   */
  async getHeaderBarText(): Promise<string> {
    await this.page.locator(this.selector_headerBar).isVisible();
    const text = await this.page.locator(this.selector_headerBar).textContent();

    if (text === null) {
      throw new Error(
        `ApiDocsClientPOM: Text content is null for header bar. ` +
        `Selector: ${this.selector_headerBar}`
      );
    }

    return text;
  }
}