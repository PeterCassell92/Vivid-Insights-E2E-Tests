/**
 * Page Object Model: Form
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from 'playwright';

const FormPOM_StandardSelector = '[data-slot="form-item"]';

export class FormPOM {
  private readonly page: Page;

  // === SELECTORS ===
  private readonly rootSelector: string;
  private readonly selector_formItemSlot: string;
  private readonly selector_formMessageSlot: string;
  private readonly selector_formControlSlot: string;
  private readonly selector_formControlInvalid: string;
  private readonly selector_formLabelSlot: string;
  private readonly selector_formLabelError: string;
  private readonly selector_formDescriptionSlot: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = FormPOM_StandardSelector;

    this.selector_formItemSlot = `[data-slot="form-item"]`;
    this.selector_formMessageSlot = `[data-slot="form-message"]`;
    this.selector_formControlSlot = `[data-slot="form-control"]`;
    this.selector_formControlInvalid = `[data-slot="form-control"][aria-invalid="true"]`;
    this.selector_formLabelSlot = `[data-slot="form-label"]`;
    this.selector_formLabelError = `[data-slot="form-label"][data-error="true"]`;
    this.selector_formDescriptionSlot = `[data-slot="form-description"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if at least one form item is visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if a form item is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const formItem = page.locator(FormPOM_StandardSelector).first();
      return await formItem.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a FormPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<FormPOM>} FormPOM instance
   * @throws {Error} When no form item is visible on the page
   */
  static async getPOM(page: Page): Promise<FormPOM> {
    const isVisible = await FormPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'FormPOM: Cannot instantiate - form is not visible. ' +
        `Expected element [data-slot="form-item"] to be visible.`
      );
    }

    return new FormPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the form item container is visible on screen
   * @param {number} [index=0] - Zero-based index of the form item to check
   * @returns {Promise<boolean>} True if the form item is visible
   */
  async isFormItemVisible(index: number = 0): Promise<boolean> {
    return await this.page.locator(this.selector_formItemSlot).nth(index).isVisible();
  }

  /**
   * @desc Check whether the validation message paragraph is present and visible
   * @param {number} [index=0] - Zero-based index of the form message to check
   * @returns {Promise<boolean>} True if the form message is visible
   */
  async isFormMessageVisible(index: number = 0): Promise<boolean> {
    return await this.page.locator(this.selector_formMessageSlot).nth(index).isVisible();
  }

  /**
   * @desc Check whether the control is in an invalid state (element only present when aria-invalid=true)
   * @returns {Promise<boolean>} True if any form control is in an invalid state
   */
  async isFormControlInvalid(): Promise<boolean> {
    return await this.page.locator(this.selector_formControlInvalid).first().isVisible();
  }

  /**
   * @desc Check whether the form control wrapper is visible on screen
   * @param {number} [index=0] - Zero-based index of the form control to check
   * @returns {Promise<boolean>} True if the form control is visible
   */
  async isFormControlVisible(index: number = 0): Promise<boolean> {
    return await this.page.locator(this.selector_formControlSlot).nth(index).isVisible();
  }

  /**
   * @desc Check whether the form label is visible on screen
   * @param {number} [index=0] - Zero-based index of the form label to check
   * @returns {Promise<boolean>} True if the form label is visible
   */
  async isFormLabelVisible(index: number = 0): Promise<boolean> {
    return await this.page.locator(this.selector_formLabelSlot).nth(index).isVisible();
  }

  /**
   * @desc Check whether the form description paragraph is visible on screen
   * @param {number} [index=0] - Zero-based index of the form description to check
   * @returns {Promise<boolean>} True if the form description is visible
   */
  async isFormDescriptionVisible(index: number = 0): Promise<boolean> {
    return await this.page.locator(this.selector_formDescriptionSlot).nth(index).isVisible();
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Click the control slot wrapper to interact with the wrapped input element
   * Expected outcome is that the wrapped input element receives focus or interaction
   * @param {number} [index=0] - Zero-based index of the form control to click
   */
  async clickFormControl(index: number = 0): Promise<void> {
    await this.page.locator(this.selector_formControlSlot).nth(index).click();
  }

  /**
   * @desc Click the form label to focus its associated input control (via htmlFor binding to formItemId)
   * Expected outcome is that the associated input control receives focus
   * @param {number} [index=0] - Zero-based index of the form label to click
   */
  async clickFormLabel(index: number = 0): Promise<void> {
    await this.page.locator(this.selector_formLabelSlot).nth(index).click();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Get the position and dimensions of the form item container
   * @param {number} [index=0] - Zero-based index of the form item
   * @returns {Promise<{x: number, y: number, width: number, height: number} | null>} Bounding box or null
   * @throws {Error} When the form item element is not accessible
   */
  async getFormItemBoundingBox(
    index: number = 0
  ): Promise<{ x: number; y: number; width: number; height: number } | null> {
    const element = this.page.locator(this.selector_formItemSlot).nth(index);
    const box = await element.boundingBox();

    if (!box) {
      throw new Error(
        `FormPOM: Unable to get bounding box for form item at index ${index}. ` +
        `Selector: ${this.selector_formItemSlot}`
      );
    }

    return box;
  }

  /**
   * @desc Count the total number of form item containers rendered in the form
   * @returns {Promise<number>} Total count of form item containers
   */
  async getFormItemCount(): Promise<number> {
    return await this.page.locator(this.selector_formItemSlot).count();
  }

  /**
   * @desc Get the data-slot attribute value of a form item to confirm it is a form field container
   * @param {number} [index=0] - Zero-based index of the form item
   * @returns {Promise<string>} The data-slot attribute value, always 'form-item'
   * @throws {Error} When the attribute is not accessible or null
   */
  async getFormItemDataSlotAttribute(index: number = 0): Promise<string> {
    const element = this.page.locator(this.selector_formItemSlot).nth(index);
    const value = await element.getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `FormPOM: data-slot attribute is null for form item at index ${index}. ` +
        `Selector: ${this.selector_formItemSlot}`
      );
    }

    return value;
  }

  /**
   * @desc Get a list of all validation error message texts currently rendered across all form fields
   * @returns {Promise<string[]>} Array of validation error message texts
   */
  async getFormMessageList(): Promise<string[]> {
    const elements = this.page.locator(this.selector_formMessageSlot);
    const count = await elements.count();
    const messages: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await elements.nth(i).textContent();
      messages.push(text ?? '');
    }

    return messages;
  }

  /**
   * @desc Get the CSS class list of the message paragraph to verify destructive/error styling is applied
   * @param {number} [index=0] - Zero-based index of the form message
   * @returns {Promise<string>} The class attribute value of the message paragraph
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getFormMessageClassList(index: number = 0): Promise<string> {
    const element = this.page.locator(this.selector_formMessageSlot).nth(index);
    const value = await element.getAttribute('class');

    if (value === null) {
      throw new Error(
        `FormPOM: class attribute is null for form message at index ${index}. ` +
        `Selector: ${this.selector_formMessageSlot}`
      );
    }

    return value;
  }

  /**
   * @desc Get the data-slot attribute value of a form message to confirm element identity
   * @param {number} [index=0] - Zero-based index of the form message
   * @returns {Promise<string>} The data-slot attribute value, always 'form-message'
   * @throws {Error} When the attribute is not accessible or null
   */
  async getFormMessageDataSlotAttribute(index: number = 0): Promise<string> {
    const element = this.page.locator(this.selector_formMessageSlot).nth(index);
    const value = await element.getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `FormPOM: data-slot attribute is null for form message at index ${index}. ` +
        `Selector: ${this.selector_formMessageSlot}`
      );
    }

    return value;
  }

  /**
   * @desc Get the validation error message text or custom children text rendered in the message paragraph
   * @param {number} [index=0] - Zero-based index of the form message
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the text content is not accessible or null
   */
  async getFormMessageText(index: number = 0): Promise<string> {
    const element = this.page.locator(this.selector_formMessageSlot).nth(index);
    const text = await element.textContent();

    if (text === null) {
      throw new Error(
        `FormPOM: text content is null for form message at index ${index}. ` +
        `Selector: ${this.selector_formMessageSlot}`
      );
    }

    return text;
  }

  /**
   * @desc Count how many form message elements are currently rendered in the DOM
   * @returns {Promise<number>} Count of rendered form message elements
   */
  async getFormMessageCount(): Promise<number> {
    return await this.page.locator(this.selector_formMessageSlot).count();
  }

  /**
   * @desc Get the aria-invalid attribute value to determine if the control is currently in an invalid/error state
   * @param {number} [index=0] - Zero-based index of the form control
   * @returns {Promise<string | null>} The aria-invalid attribute value ('true' or 'false'), or null if absent
   */
  async getFormControlAriaInvalidAttribute(index: number = 0): Promise<string | null> {
    return await this.page.locator(this.selector_formControlSlot).nth(index).getAttribute('aria-invalid');
  }

  /**
   * @desc Get the aria-describedby attribute to verify it references the correct description and/or message element IDs
   * @param {number} [index=0] - Zero-based index of the form control
   * @returns {Promise<string | null>} The aria-describedby attribute value, or null if absent
   */
  async getFormControlAriaDescribedByAttribute(index: number = 0): Promise<string | null> {
    return await this.page.locator(this.selector_formControlSlot).nth(index).getAttribute('aria-describedby');
  }

  /**
   * @desc Get the data-slot attribute value of a form control to confirm the element is the control wrapper
   * @param {number} [index=0] - Zero-based index of the form control
   * @returns {Promise<string>} The data-slot attribute value, always 'form-control'
   * @throws {Error} When the attribute is not accessible or null
   */
  async getFormControlDataSlotAttribute(index: number = 0): Promise<string> {
    const element = this.page.locator(this.selector_formControlSlot).nth(index);
    const value = await element.getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `FormPOM: data-slot attribute is null for form control at index ${index}. ` +
        `Selector: ${this.selector_formControlSlot}`
      );
    }

    return value;
  }

  /**
   * @desc Get the CSS class list of the label to verify error styling (e.g. text-destructive) is applied
   * @param {number} [index=0] - Zero-based index of the form label
   * @returns {Promise<string>} The class attribute value of the label
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getFormLabelClassList(index: number = 0): Promise<string> {
    const element = this.page.locator(this.selector_formLabelSlot).nth(index);
    const value = await element.getAttribute('class');

    if (value === null) {
      throw new Error(
        `FormPOM: class attribute is null for form label at index ${index}. ` +
        `Selector: ${this.selector_formLabelSlot}`
      );
    }

    return value;
  }

  /**
   * @desc Get the data-slot attribute value of a form label to confirm element identity
   * @param {number} [index=0] - Zero-based index of the form label
   * @returns {Promise<string>} The data-slot attribute value, always 'form-label'
   * @throws {Error} When the attribute is not accessible or null
   */
  async getFormLabelDataSlotAttribute(index: number = 0): Promise<string> {
    const element = this.page.locator(this.selector_formLabelSlot).nth(index);
    const value = await element.getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `FormPOM: data-slot attribute is null for form label at index ${index}. ` +
        `Selector: ${this.selector_formLabelSlot}`
      );
    }

    return value;
  }

  /**
   * @desc Get the data-error attribute value specifically when the field is in an error state
   * @param {number} [index=0] - Zero-based index of the form label in error state
   * @returns {Promise<string | null>} The data-error attribute value, or null if absent
   */
  async getFormLabelErrorDataErrorAttribute(index: number = 0): Promise<string | null> {
    return await this.page.locator(this.selector_formLabelError).nth(index).getAttribute('data-error');
  }

  /**
   * @desc Get the data-error attribute value ('true' or 'false') to determine if the field has a validation error
   * @param {number} [index=0] - Zero-based index of the form label
   * @returns {Promise<string | null>} The data-error attribute value, or null if absent
   */
  async getFormLabelDataErrorAttribute(index: number = 0): Promise<string | null> {
    return await this.page.locator(this.selector_formLabelSlot).nth(index).getAttribute('data-error');
  }

  /**
   * @desc Get the visible label text for the form field
   * @param {number} [index=0] - Zero-based index of the form label
   * @returns {Promise<string>} The label text exactly as it appears in the UI
   * @throws {Error} When the text content is not accessible or null
   */
  async getFormLabelText(index: number = 0): Promise<string> {
    const element = this.page.locator(this.selector_formLabelSlot).nth(index);
    const text = await element.textContent();

    if (text === null) {
      throw new Error(
        `FormPOM: text content is null for form label at index ${index}. ` +
        `Selector: ${this.selector_formLabelSlot}`
      );
    }

    return text;
  }

  /**
   * @desc Get the helper/hint text content displayed below the form control
   * @param {number} [index=0] - Zero-based index of the form description
   * @returns {Promise<string>} The description text exactly as it appears in the UI
   * @throws {Error} When the text content is not accessible or null
   */
  async getFormDescriptionText(index: number = 0): Promise<string> {
    const element = this.page.locator(this.selector_formDescriptionSlot).nth(index);
    const text = await element.textContent();

    if (text === null) {
      throw new Error(
        `FormPOM: text content is null for form description at index ${index}. ` +
        `Selector: ${this.selector_formDescriptionSlot}`
      );
    }

    return text;
  }

  /**
   * @desc Get the data-slot attribute value of a form description to confirm element identity
   * @param {number} [index=0] - Zero-based index of the form description
   * @returns {Promise<string>} The data-slot attribute value, always 'form-description'
   * @throws {Error} When the attribute is not accessible or null
   */
  async getFormDescriptionDataSlotAttribute(index: number = 0): Promise<string> {
    const element = this.page.locator(this.selector_formDescriptionSlot).nth(index);
    const value = await element.getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `FormPOM: data-slot attribute is null for form description at index ${index}. ` +
        `Selector: ${this.selector_formDescriptionSlot}`
      );
    }

    return value;
  }
}