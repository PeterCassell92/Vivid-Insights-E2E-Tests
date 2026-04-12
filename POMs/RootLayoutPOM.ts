/**
 * Page Object Model: RootLayout
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const RootLayoutPOM_StandardSelector = 'html[lang="en"]';

export class RootLayoutPOM {
  private readonly page: Page;

  // === SELECTORS ===
  private readonly rootSelector: string;
  private readonly selector_htmlElement: string;
  private readonly selector_bodyElement: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = RootLayoutPOM_StandardSelector;
    this.selector_htmlElement = this.rootSelector;
    this.selector_bodyElement = `${this.rootSelector} > body`;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the root HTML shell is present and visible in the DOM
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the root <html lang="en"> element is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const htmlElement = page.locator(RootLayoutPOM_StandardSelector);
      return await htmlElement.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a RootLayoutPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<RootLayoutPOM>} RootLayoutPOM instance
   * @throws {Error} When the root HTML element is not visible
   */
  static async getPOM(page: Page): Promise<RootLayoutPOM> {
    const isVisible = await RootLayoutPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'RootLayoutPOM: Cannot instantiate - root layout is not visible. ' +
          `Expected element [${RootLayoutPOM_StandardSelector}] to be visible.`
      );
    }

    return new RootLayoutPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Whether or not the root <html> element is visible in the DOM
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the html element is visible
   */
  async isHtmlElementVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_htmlElement).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the <body> element is visible in the DOM
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the body element is visible
   */
  async isBodyElementVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_bodyElement).isVisible({ timeout });
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Gets the 'lang' attribute value from the root <html> element
   * @returns {Promise<string>} The lang attribute value exactly as it appears (expected: 'en')
   * @throws {Error} When the lang attribute is not accessible or null
   */
  async getHtmlLangAttribute(): Promise<string> {
    await this.page.locator(this.selector_htmlElement).isVisible();
    const value = await this.page.locator(this.selector_htmlElement).getAttribute('lang');

    if (value === null) {
      throw new Error(
        `RootLayoutPOM: lang attribute is null on the root <html> element. ` +
          `Selector: ${this.selector_htmlElement}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the full 'class' attribute value from the <body> element
   * Includes Geist Sans variable, Geist Mono variable, and the Tailwind antialiased utility class
   * @returns {Promise<string>} The class attribute value exactly as it appears
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getBodyClassAttribute(): Promise<string> {
    await this.page.locator(this.selector_bodyElement).isVisible();
    const value = await this.page.locator(this.selector_bodyElement).getAttribute('class');

    if (value === null) {
      throw new Error(
        `RootLayoutPOM: class attribute is null on the <body> element. ` +
          `Selector: ${this.selector_bodyElement}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the full CSS class list of the <body> element as an array
   * Useful for inspecting individual font variable classes and the antialiased utility class
   * @returns {Promise<string[]>} Array of individual class names applied to the body element
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getBodyClassList(): Promise<string[]> {
    const classAttribute = await this.getBodyClassAttribute();
    return classAttribute.split(/\s+/).filter((cls) => cls.length > 0);
  }

  /**
   * @desc Gets the inner HTML of the <body> element
   * Useful for verifying that StoreProvider and ClientLayout composition are rendered correctly
   * @returns {Promise<string>} The inner HTML of the body element exactly as it appears
   * @throws {Error} When the body element inner HTML is not accessible or null
   */
  async getBodyInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_bodyElement).isVisible();
    const value = await this.page.locator(this.selector_bodyElement).innerHTML();

    if (value === null) {
      throw new Error(
        `RootLayoutPOM: innerHTML is null on the <body> element. ` +
          `Selector: ${this.selector_bodyElement}`
      );
    }

    return value;
  }
}