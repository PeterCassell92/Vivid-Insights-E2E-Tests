/**
 * Page Object Model: Input
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from 'playwright';

const InputPOM_StandardSelector = '[data-slot="input"]';

export class InputPOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===
  protected readonly rootSelector: string;
  protected readonly selector_inputSlot: string;
  protected readonly selector_inputByTestId: (testId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = InputPOM_StandardSelector;
    this.selector_inputSlot = `${this.rootSelector}`;
    this.selector_inputByTestId = (testId: string) => `[data-testid="${testId}"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if an Input element is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the input element is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const input = page.locator(InputPOM_StandardSelector);
      return await input.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns an InputPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<InputPOM>} InputPOM instance
   * @throws {Error} When the input element is not visible
   */
  static async getPOM(page: Page): Promise<InputPOM> {
    const isVisible = await InputPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'InputPOM: Cannot instantiate — input element is not visible. ' +
          `Expected element [${InputPOM_StandardSelector}] to be visible.`
      );
    }

    return new InputPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the input element is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the input is visible
   */
  async isInputVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_inputSlot, {
        state: 'visible',
        timeout,
      });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Checks whether the input is enabled (not disabled)
   * Reflects the disabled prop which applies reduced-opacity pointer-events-none styling
   * @returns {Promise<boolean>} True if the input is enabled
   */
  async isInputEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_inputSlot).isEnabled();
  }

  /**
   * @desc Gets the checked state of the input when rendered as type='checkbox' or type='radio'
   * @returns {Promise<boolean>} True if the input is checked
   */
  async isInputChecked(): Promise<boolean> {
    return await this.page.locator(this.selector_inputSlot).isChecked();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the input to focus it or trigger any attached click handlers
   * Expected outcome is that the input receives focus or a click handler fires
   */
  async clickInput(): Promise<void> {
    await this.page.locator(this.selector_inputSlot).click();
  }

  /**
   * @desc Types text or a value into the input field using the inputSlot selector
   * Expected outcome is that the input field contains the provided value
   * @param {string} value - The text or value to type into the input
   */
  async fillInput(value: string): Promise<void> {
    await this.page.locator(this.selector_inputSlot).fill(value);
  }

  /**
   * @desc Types text or a value into the input field targeted by consumer-supplied data-testid
   * Expected outcome is that the targeted input field contains the provided value
   * @param {string} testId - The data-testid attribute value of the target input
   * @param {string} value - The text or value to type into the input
   */
  async fillInputByTestId(testId: string, value: string): Promise<void> {
    await this.page.locator(this.selector_inputByTestId(testId)).fill(value);
  }

  /**
   * @desc Clears the current value of the input field
   * Expected outcome is that the input field is empty
   */
  async clearInput(): Promise<void> {
    await this.page.locator(this.selector_inputSlot).clear();
  }

  /**
   * @desc Checks the input when rendered as type='checkbox' or type='radio'
   * Expected outcome is that the input becomes checked
   */
  async checkInput(): Promise<void> {
    await this.page.locator(this.selector_inputSlot).check();
  }

  /**
   * @desc Unchecks the input when rendered as type='checkbox'
   * Expected outcome is that the input becomes unchecked
   */
  async uncheckInput(): Promise<void> {
    await this.page.locator(this.selector_inputSlot).uncheck();
  }

  /**
   * @desc Uploads a file when the input is rendered with type='file'
   * Expected outcome is that the file is selected in the file input
   * @param {string} filePath - The absolute or relative path to the file to upload
   */
  async uploadFile(filePath: string): Promise<void> {
    await this.page.locator(this.selector_inputSlot).setInputFiles(filePath);
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the current value entered in the input field
   * @returns {Promise<string>} The current input value exactly as it appears
   * @throws {Error} When the input value is not accessible
   */
  async getInputValue(): Promise<string> {
    await this.page.isVisible(this.selector_inputSlot);
    const value = await this.page.locator(this.selector_inputSlot).inputValue();

    if (value === null) {
      throw new Error(
        `InputPOM: Input value is null and not accessible. Selector: ${this.selector_inputSlot}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the current value of the input field targeted by consumer-supplied data-testid
   * @param {string} testId - The data-testid attribute value of the target input
   * @returns {Promise<string>} The current input value exactly as it appears
   * @throws {Error} When the input value is not accessible
   */
  async getInputValueByTestId(testId: string): Promise<string> {
    const selector = this.selector_inputByTestId(testId);
    await this.page.isVisible(selector);
    const value = await this.page.locator(selector).inputValue();

    if (value === null) {
      throw new Error(
        `InputPOM: Input value is null for testId "${testId}". Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the 'type' attribute to determine what kind of input is rendered
   * (e.g. text, email, password, file, checkbox, etc.)
   * @returns {Promise<string>} The type attribute value exactly as it appears
   * @throws {Error} When the type attribute is not accessible
   */
  async getInputType(): Promise<string> {
    await this.page.isVisible(this.selector_inputSlot);
    const type = await this.page.locator(this.selector_inputSlot).getAttribute('type');

    if (type === null) {
      throw new Error(
        `InputPOM: 'type' attribute is null and not accessible. Selector: ${this.selector_inputSlot}`
      );
    }

    return type;
  }

  /**
   * @desc Gets the 'placeholder' attribute text displayed when the input is empty
   * @returns {Promise<string>} The placeholder attribute value exactly as it appears
   * @throws {Error} When the placeholder attribute is not accessible
   */
  async getInputPlaceholder(): Promise<string> {
    await this.page.isVisible(this.selector_inputSlot);
    const placeholder = await this.page
      .locator(this.selector_inputSlot)
      .getAttribute('placeholder');

    if (placeholder === null) {
      throw new Error(
        `InputPOM: 'placeholder' attribute is null and not accessible. Selector: ${this.selector_inputSlot}`
      );
    }

    return placeholder;
  }

  /**
   * @desc Gets the 'data-slot' attribute value, which is always 'input'
   * Useful as a stable semantic marker
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the data-slot attribute is not accessible
   */
  async getDataSlot(): Promise<string> {
    await this.page.isVisible(this.selector_inputSlot);
    const dataSlot = await this.page.locator(this.selector_inputSlot).getAttribute('data-slot');

    if (dataSlot === null) {
      throw new Error(
        `InputPOM: 'data-slot' attribute is null and not accessible. Selector: ${this.selector_inputSlot}`
      );
    }

    return dataSlot;
  }

  /**
   * @desc Gets the 'aria-invalid' attribute to determine if the input is in an error/invalid state
   * @returns {Promise<string | null>} The aria-invalid attribute value, or null if not set
   */
  async getAriaInvalid(): Promise<string | null> {
    await this.page.isVisible(this.selector_inputSlot);
    return await this.page.locator(this.selector_inputSlot).getAttribute('aria-invalid');
  }

  /**
   * @desc Gets the full CSS class list applied to the input
   * Includes dynamic focus-ring, disabled, and aria-invalid variant classes
   * @returns {Promise<string>} The full class attribute value exactly as it appears
   * @throws {Error} When the class attribute is not accessible
   */
  async getInputClassList(): Promise<string> {
    await this.page.isVisible(this.selector_inputSlot);
    const classList = await this.page.locator(this.selector_inputSlot).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `InputPOM: 'class' attribute is null and not accessible. Selector: ${this.selector_inputSlot}`
      );
    }

    return classList;
  }

  /**
   * @desc Gets the position and dimensions of the input element
   * Useful for verifying layout or alignment
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the input
   * @throws {Error} When the bounding box is not accessible
   */
  async getInputBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    await this.page.isVisible(this.selector_inputSlot);
    const boundingBox = await this.page.locator(this.selector_inputSlot).boundingBox();

    if (boundingBox === null) {
      throw new Error(
        `InputPOM: Bounding box is null — element may not be rendered. Selector: ${this.selector_inputSlot}`
      );
    }

    return boundingBox;
  }
}