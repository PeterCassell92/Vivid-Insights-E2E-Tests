/**
 * Page Object Model: Button
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ButtonPOM_StandardSelector = '[data-slot="button"]';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';

export class ButtonPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_buttonRoot: string;
  private readonly selector_buttonBySize: (size: ButtonSize) => string;
  private readonly selector_buttonByVariant: (variant: ButtonVariant) => string;
  private readonly selector_buttonByVariantAndSize: (variant: ButtonVariant, size: ButtonSize) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = ButtonPOM_StandardSelector;

    this.selector_buttonRoot = this.rootSelector;

    this.selector_buttonBySize = (size: ButtonSize) =>
      `${this.rootSelector}[data-size="${size}"]`;

    this.selector_buttonByVariant = (variant: ButtonVariant) =>
      `${this.rootSelector}[data-variant="${variant}"]`;

    this.selector_buttonByVariantAndSize = (variant: ButtonVariant, size: ButtonSize) =>
      `${this.rootSelector}[data-variant="${variant}"][data-size="${size}"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if at least one Button instance is visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if a button is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(ButtonPOM_StandardSelector).first().isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a ButtonPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<ButtonPOM>} ButtonPOM instance
   * @throws {Error} When no Button element is visible on the page
   */
  static async getPOM(page: Page): Promise<ButtonPOM> {
    const isVisible = await ButtonPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ButtonPOM: Cannot instantiate - no Button element is visible. ' +
        `Expected element [${ButtonPOM_StandardSelector}] to be visible.`
      );
    }

    return new ButtonPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the button is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the button root is visible
   */
  async isButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_buttonRoot).first().isVisible({ timeout });
  }

  /**
   * @desc Check whether the button is enabled (not in a disabled state)
   * @returns {Promise<boolean>} True if the button is enabled
   */
  async isButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_buttonRoot).first().isEnabled();
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Click the button to trigger its action
   * Expected outcome is that the button's bound action will be executed
   */
  async clickButton(): Promise<void> {
    await this.page.locator(this.selector_buttonRoot).first().click();
  }

  /**
   * @desc Click a button precisely identified by both variant and size
   * Expected outcome is that the specific button's bound action will be executed
   * @param {ButtonVariant} variant - The visual variant of the button
   * @param {ButtonSize} size - The size variant of the button
   */
  async clickButtonByVariantAndSize(variant: ButtonVariant, size: ButtonSize): Promise<void> {
    await this.page.locator(this.selector_buttonByVariantAndSize(variant, size)).first().click();
  }

  /**
   * @desc Click a button of a specific size
   * Expected outcome is that the first matching button's bound action will be executed
   * @param {ButtonSize} size - The size variant of the button
   */
  async clickButtonBySize(size: ButtonSize): Promise<void> {
    await this.page.locator(this.selector_buttonBySize(size)).first().click();
  }

  /**
   * @desc Click a button of a specific variant
   * Expected outcome is that the first matching button's bound action will be executed
   * @param {ButtonVariant} variant - The visual variant of the button
   */
  async clickButtonByVariant(variant: ButtonVariant): Promise<void> {
    await this.page.locator(this.selector_buttonByVariant(variant)).first().click();
  }

  /**
   * @desc Hover over the button to trigger hover styles or tooltips
   * Expected outcome is that hover styles or tooltip will be activated
   */
  async hoverButton(): Promise<void> {
    await this.page.locator(this.selector_buttonRoot).first().hover();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Get the visible text label of the button
   * @returns {Promise<string>} The button text exactly as it appears in the UI
   * @throws {Error} When button text content is not accessible or null
   */
  async getButtonText(): Promise<string> {
    await this.page.locator(this.selector_buttonRoot).first().isVisible();
    const text = await this.page.locator(this.selector_buttonRoot).first().textContent();

    if (text === null) {
      throw new Error(
        `ButtonPOM: Button text content is null. Selector: ${this.selector_buttonRoot}`
      );
    }

    return text;
  }

  /**
   * @desc Get the full CSS class list applied to the button, reflecting the resolved CVA variant and size classes
   * @returns {Promise<string>} The full class attribute value
   * @throws {Error} When the class attribute is not accessible
   */
  async getButtonClassList(): Promise<string> {
    await this.page.locator(this.selector_buttonRoot).first().isVisible();
    const classList = await this.page.locator(this.selector_buttonRoot).first().getAttribute('class');

    if (classList === null) {
      throw new Error(
        `ButtonPOM: Button class attribute is null. Selector: ${this.selector_buttonRoot}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the inner HTML of the button, useful for inspecting icon or complex child content
   * @returns {Promise<string>} The inner HTML of the button element
   * @throws {Error} When the button inner HTML is not accessible
   */
  async getButtonInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_buttonRoot).first().isVisible();
    const innerHTML = await this.page.locator(this.selector_buttonRoot).first().innerHTML();

    if (innerHTML === null) {
      throw new Error(
        `ButtonPOM: Button innerHTML is null. Selector: ${this.selector_buttonRoot}`
      );
    }

    return innerHTML;
  }

  /**
   * @desc Get the data-slot attribute value to confirm component identity (always 'button')
   * @returns {Promise<string>} The data-slot attribute value
   * @throws {Error} When the data-slot attribute is not accessible
   */
  async getDataSlotAttribute(): Promise<string> {
    await this.page.locator(this.selector_buttonRoot).first().isVisible();
    const value = await this.page.locator(this.selector_buttonRoot).first().getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `ButtonPOM: data-slot attribute is null. Selector: ${this.selector_buttonRoot}`
      );
    }

    return value;
  }

  /**
   * @desc Get the data-variant attribute to confirm which visual variant is currently rendered
   * @returns {Promise<string>} The data-variant attribute value
   * @throws {Error} When the data-variant attribute is not accessible
   */
  async getDataVariantAttribute(): Promise<string> {
    await this.page.locator(this.selector_buttonRoot).first().isVisible();
    const value = await this.page.locator(this.selector_buttonRoot).first().getAttribute('data-variant');

    if (value === null) {
      throw new Error(
        `ButtonPOM: data-variant attribute is null. Selector: ${this.selector_buttonRoot}`
      );
    }

    return value;
  }

  /**
   * @desc Get the data-size attribute to confirm which size variant is currently rendered
   * @returns {Promise<string>} The data-size attribute value
   * @throws {Error} When the data-size attribute is not accessible
   */
  async getDataSizeAttribute(): Promise<string> {
    await this.page.locator(this.selector_buttonRoot).first().isVisible();
    const value = await this.page.locator(this.selector_buttonRoot).first().getAttribute('data-size');

    if (value === null) {
      throw new Error(
        `ButtonPOM: data-size attribute is null. Selector: ${this.selector_buttonRoot}`
      );
    }

    return value;
  }

  /**
   * @desc Get the position and dimensions of the button element
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the button
   * @throws {Error} When the button bounding box is not accessible
   */
  async getButtonBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const boundingBox = await this.page.locator(this.selector_buttonRoot).first().boundingBox();

    if (boundingBox === null) {
      throw new Error(
        `ButtonPOM: Button bounding box is null - element may not be visible. Selector: ${this.selector_buttonRoot}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Count how many Button instances are present in the current scope
   * @returns {Promise<number>} The total count of Button instances
   */
  async getButtonCount(): Promise<number> {
    return await this.page.locator(this.selector_buttonRoot).count();
  }

  /**
   * @desc Count how many Button instances of a specific size are present
   * @param {ButtonSize} size - The size variant to count
   * @returns {Promise<number>} The count of Button instances matching the given size
   */
  async getButtonCountBySize(size: ButtonSize): Promise<number> {
    return await this.page.locator(this.selector_buttonBySize(size)).count();
  }

  /**
   * @desc Count how many Button instances of a specific variant are present
   * @param {ButtonVariant} variant - The visual variant to count
   * @returns {Promise<number>} The count of Button instances matching the given variant
   */
  async getButtonCountByVariant(variant: ButtonVariant): Promise<number> {
    return await this.page.locator(this.selector_buttonByVariant(variant)).count();
  }
}