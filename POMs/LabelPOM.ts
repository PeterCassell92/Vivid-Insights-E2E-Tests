/**
 * Page Object Model: LabelPOM
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const LabelPOM_StandardSelector = '[data-slot="label"]';

export class LabelPOM {
  private readonly page: Page;

  // === SELECTORS ===
  protected readonly rootSelector: string;
  protected readonly selector_labelRoot: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = LabelPOM_StandardSelector;
    this.selector_labelRoot = LabelPOM_StandardSelector;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if at least one Label component is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if a label element with data-slot="label" is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const label = page.locator(LabelPOM_StandardSelector).first();
      return await label.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a LabelPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<LabelPOM>} LabelPOM instance
   * @throws {Error} When no label element with data-slot="label" is visible on the page
   */
  static async getPOM(page: Page): Promise<LabelPOM> {
    const isVisible = await LabelPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'LabelPOM: Cannot instantiate - no Label component is visible. ' +
          `Expected element [${LabelPOM_StandardSelector}] to be visible.`
      );
    }

    return new LabelPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Whether or not the label element is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the label is visible
   */
  async isLabelVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.locator(this.selector_labelRoot).first().waitFor({ state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  // === ACTION METHODS ===

  /**
   * @desc Hovers over the label element to trigger any tooltip or visual state changes
   * Expected outcome is that any hover-dependent styles or tooltips become visible
   */
  async hoverLabelRoot(): Promise<void> {
    await this.page.locator(this.selector_labelRoot).first().hover();
  }

  /**
   * @desc Clicks the label element, which typically focuses its associated form control
   * Expected outcome is that the associated form control (via htmlFor/for linkage) receives focus
   */
  async clickLabelRoot(): Promise<void> {
    await this.page.locator(this.selector_labelRoot).first().click();
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Gets the full CSS class list of the label to assert applied CVA variant classes or peer-disabled/group-disabled styling states
   * @returns {Promise<string>} The full class attribute value exactly as it appears
   * @throws {Error} When the class attribute is not accessible or the element is not found
   */
  async getLabelClassList(): Promise<string> {
    const classValue = await this.page
      .locator(this.selector_labelRoot)
      .first()
      .getAttribute('class');

    if (classValue === null) {
      throw new Error(
        `LabelPOM: class attribute is null on label element. Selector: ${this.selector_labelRoot}`
      );
    }

    return classValue;
  }

  /**
   * @desc Retrieves the 'data-slot' attribute value to assert this element is a Label component rendered by this BUENT
   * @returns {Promise<string>} The data-slot attribute value, always 'label'
   * @throws {Error} When the data-slot attribute is not accessible or the element is not found
   */
  async getLabelDataSlot(): Promise<string> {
    const value = await this.page
      .locator(this.selector_labelRoot)
      .first()
      .getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `LabelPOM: data-slot attribute is null on label element. Selector: ${this.selector_labelRoot}`
      );
    }

    return value;
  }

  /**
   * @desc Retrieves the 'for' (htmlFor) attribute to identify which form control this label is associated with
   * @returns {Promise<string | null>} The for attribute value, or null if not set
   */
  async getLabelForAttribute(): Promise<string | null> {
    return await this.page.locator(this.selector_labelRoot).first().getAttribute('for');
  }

  /**
   * @desc Extracts the visible text content of the label (e.g., the field name or description it represents)
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When text content is not accessible or the element is not found
   */
  async getLabelText(): Promise<string> {
    const text = await this.page.locator(this.selector_labelRoot).first().textContent();

    if (text === null) {
      throw new Error(
        `LabelPOM: text content is null on label element. Selector: ${this.selector_labelRoot}`
      );
    }

    return text;
  }

  /**
   * @desc Extracts the inner HTML of the label, useful when the label contains rich content such as icons, spans, or nested elements alongside text
   * @returns {Promise<string>} The inner HTML exactly as it appears
   * @throws {Error} When inner HTML is not accessible or the element is not found
   */
  async getLabelInnerHtml(): Promise<string> {
    const html = await this.page.locator(this.selector_labelRoot).first().innerHTML();

    if (html === null) {
      throw new Error(
        `LabelPOM: innerHTML is null on label element. Selector: ${this.selector_labelRoot}`
      );
    }

    return html;
  }

  /**
   * @desc Gets the position and dimensions of the label element for layout and alignment assertions
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the label
   * @throws {Error} When the bounding box cannot be retrieved (element not visible or not in DOM)
   */
  async getLabelBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page.locator(this.selector_labelRoot).first().boundingBox();

    if (box === null) {
      throw new Error(
        `LabelPOM: bounding box is null - label element may not be visible or in the DOM. Selector: ${this.selector_labelRoot}`
      );
    }

    return box;
  }

  /**
   * @desc Counts the number of Label instances rendered on the page using the data-slot='label' selector
   * @returns {Promise<number>} The count of label elements currently in the DOM
   */
  async getLabelCount(): Promise<number> {
    return await this.page.locator(this.selector_labelRoot).count();
  }
}