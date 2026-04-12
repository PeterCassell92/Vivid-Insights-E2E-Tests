/**
 * Page Object Model: ApiDocsPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ApiDocsPagePOM_StandardSelector = '[data-testid="api-docs-page"]';

export class ApiDocsPagePOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_apiDocsPageSection: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = ApiDocsPagePOM_StandardSelector;
    this.selector_apiDocsPageSection = `${this.rootSelector}`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the API docs page is currently visible
   * @param {Page} page - Playwright Page instance
   * @returns {Promise<boolean>} True if the root section element is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const section = page.locator(ApiDocsPagePOM_StandardSelector);
      return await section.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method to get an ApiDocsPagePOM instance
   * Validates that the API docs page is visible before returning the instance
   * @param {Page} page - Playwright Page instance
   * @returns {Promise<ApiDocsPagePOM>} ApiDocsPagePOM instance
   * @throws {Error} When the API docs page root section is not visible
   */
  static async getPOM(page: Page): Promise<ApiDocsPagePOM> {
    const isVisible = await ApiDocsPagePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ApiDocsPagePOM: Cannot instantiate - API docs page is not visible. ' +
          `Expected element [${ApiDocsPagePOM_StandardSelector}] to be visible.`
      );
    }

    return new ApiDocsPagePOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the root API docs page section is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the root section element is visible
   */
  async isApiDocsPageSectionVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_apiDocsPageSection, {
        state: 'visible',
        timeout,
      });
      return true;
    } catch {
      return false;
    }
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the CSS class list of the root section element (e.g. container, mx-auto, py-8)
   * @returns {Promise<string>} The full class attribute value exactly as it appears
   * @throws {Error} When the classList attribute is not accessible or null
   */
  async getClassList(): Promise<string> {
    await this.page.waitForSelector(this.selector_apiDocsPageSection, { state: 'visible' });
    const classList = await this.page.getAttribute(this.selector_apiDocsPageSection, 'class');

    if (classList === null) {
      throw new Error(
        `ApiDocsPagePOM: classList attribute is null for root section element. ` +
          `Selector: ${this.selector_apiDocsPageSection}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the data-testid attribute value of the root section element
   * @returns {Promise<string>} The data-testid attribute value exactly as it appears
   * @throws {Error} When the data-testid attribute is not accessible or null
   */
  async getTestIdAttribute(): Promise<string> {
    await this.page.waitForSelector(this.selector_apiDocsPageSection, { state: 'visible' });
    const testId = await this.page.getAttribute(this.selector_apiDocsPageSection, 'data-testid');

    if (testId === null) {
      throw new Error(
        `ApiDocsPagePOM: data-testid attribute is null for root section element. ` +
          `Selector: ${this.selector_apiDocsPageSection}`
      );
    }

    return testId;
  }

  /**
   * @desc Get the full inner HTML content of the API docs page section, including the rendered ApiDocsClient output
   * @returns {Promise<string>} The inner HTML content exactly as it appears
   * @throws {Error} When the inner HTML content is not accessible or null
   */
  async getInnerHtml(): Promise<string> {
    await this.page.waitForSelector(this.selector_apiDocsPageSection, { state: 'visible' });
    const innerHTML = await this.page.innerHTML(this.selector_apiDocsPageSection);

    if (innerHTML === null) {
      throw new Error(
        `ApiDocsPagePOM: innerHTML is null for root section element. ` +
          `Selector: ${this.selector_apiDocsPageSection}`
      );
    }

    return innerHTML;
  }

  /**
   * @desc Get the position and dimensions of the root section element on the page
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the root section element
   * @throws {Error} When the bounding box is not accessible or the element is not visible
   */
  async getBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    await this.page.waitForSelector(this.selector_apiDocsPageSection, { state: 'visible' });
    const locator = this.page.locator(this.selector_apiDocsPageSection);
    const boundingBox = await locator.boundingBox();

    if (boundingBox === null) {
      throw new Error(
        `ApiDocsPagePOM: boundingBox is null for root section element - element may not be visible or rendered. ` +
          `Selector: ${this.selector_apiDocsPageSection}`
      );
    }

    return boundingBox;
  }
}