/**
 * Page Object Model: CoverageDateRangeInput
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const CoverageDateRangeInputPOM_StandardSelector = '[data-testid="coverage-date-range-display"], [data-testid="coverage-date-range-editor"]';

export class CoverageDateRangeInputPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector_display: string;
  private readonly rootSelector_editor: string;

  // Display view selectors
  private readonly selector_displayContainer: string;
  private readonly selector_dateRangeLabelText: string;
  private readonly selector_dateRangeFormattedText: string;
  private readonly selector_widenedBadgeElement: string;
  private readonly selector_editButtonTestId: string;
  private readonly selector_editButtonAriaLabel: string;

  // Editor view selectors
  private readonly selector_editorContainer: string;
  private readonly selector_closeButtonTestId: string;
  private readonly selector_closeButtonAriaLabel: string;
  private readonly selector_resetButtonTestId: string;
  private readonly selector_startDatePickerWrapper: string;
  private readonly selector_endDatePickerWrapper: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Root selectors
    // ======================================================================
    this.rootSelector_display = '[data-testid="coverage-date-range-display"]';
    this.rootSelector_editor = '[data-testid="coverage-date-range-editor"]';

    // ======================================================================
    // Display view selectors
    // ======================================================================
    this.selector_displayContainer = this.rootSelector_display;
    this.selector_dateRangeLabelText = `${this.rootSelector_display} span:first-of-type`;
    this.selector_dateRangeFormattedText = `${this.rootSelector_display} span:nth-of-type(2)`;
    this.selector_widenedBadgeElement = `${this.rootSelector_display} .bg-blue-100`;
    this.selector_editButtonTestId = `${this.rootSelector_display} [data-testid="edit-coverage-dates-button"]`;
    this.selector_editButtonAriaLabel = `${this.rootSelector_display} [aria-label="Edit coverage date range"]`;

    // ======================================================================
    // Editor view selectors
    // ======================================================================
    this.selector_editorContainer = this.rootSelector_editor;
    this.selector_closeButtonTestId = `${this.rootSelector_editor} [data-testid="close-coverage-dates-button"]`;
    this.selector_closeButtonAriaLabel = `${this.rootSelector_editor} [aria-label="Close date range editor"]`;
    this.selector_resetButtonTestId = `${this.rootSelector_editor} [data-testid="reset-coverage-dates-button"]`;
    this.selector_startDatePickerWrapper = `${this.rootSelector_editor} [data-testid="coverage-start-date-picker"]`;
    this.selector_endDatePickerWrapper = `${this.rootSelector_editor} [data-testid="coverage-end-date-picker"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the CoverageDateRangeInput component is currently visible
   * (either in display or editor mode)
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if either the display or editor container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const displayVisible = await page.locator('[data-testid="coverage-date-range-display"]').isVisible();
      const editorVisible = await page.locator('[data-testid="coverage-date-range-editor"]').isVisible();
      return displayVisible || editorVisible;
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a CoverageDateRangeInputPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<CoverageDateRangeInputPOM>} CoverageDateRangeInputPOM instance
   * @throws {Error} When neither the display nor editor container is visible
   */
  static async getPOM(page: Page): Promise<CoverageDateRangeInputPOM> {
    const isVisible = await CoverageDateRangeInputPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'CoverageDateRangeInputPOM: Cannot instantiate - component is not visible. ' +
        'Expected either [data-testid="coverage-date-range-display"] or ' +
        '[data-testid="coverage-date-range-editor"] to be visible.'
      );
    }

    return new CoverageDateRangeInputPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the editor container is currently visible (rendered only when editing === true)
   * @returns {Promise<boolean>} True if the editor container is visible
   */
  async isEditorContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_editorContainer).isVisible();
  }

  /**
   * @desc Check whether the display container is currently visible (rendered only when editing === false)
   * @returns {Promise<boolean>} True if the display container is visible
   */
  async isDisplayContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_displayContainer).isVisible();
  }

  /**
   * @desc Check whether the close (X) button is visible within the editor
   * @returns {Promise<boolean>} True if the close button is visible
   */
  async isCloseButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_closeButtonTestId).isVisible();
  }

  /**
   * @desc Check whether the close button is enabled and interactable
   * @returns {Promise<boolean>} True if the close button is enabled
   */
  async isCloseButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_closeButtonTestId).isEnabled();
  }

  /**
   * @desc Check whether the reset button is visible (only rendered when isWidened === true)
   * @returns {Promise<boolean>} True if the reset button is visible
   */
  async isResetButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_resetButtonTestId).isVisible();
  }

  /**
   * @desc Check whether the reset button is enabled and interactable
   * @returns {Promise<boolean>} True if the reset button is enabled
   */
  async isResetButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_resetButtonTestId).isEnabled();
  }

  /**
   * @desc Check whether the start date picker wrapper is visible in the editor
   * @returns {Promise<boolean>} True if the start date picker wrapper is visible
   */
  async isStartDatePickerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_startDatePickerWrapper).isVisible();
  }

  /**
   * @desc Check whether the end date picker wrapper is visible in the editor
   * @returns {Promise<boolean>} True if the end date picker wrapper is visible
   */
  async isEndDatePickerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_endDatePickerWrapper).isVisible();
  }

  /**
   * @desc Check whether the 'Date Range:' label span is visible
   * @returns {Promise<boolean>} True if the date range label is visible
   */
  async isDateRangeLabelVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_dateRangeLabelText).isVisible();
  }

  /**
   * @desc Check whether the edit (pencil) button is visible in the display view
   * @returns {Promise<boolean>} True if the edit button is visible
   */
  async isEditButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_editButtonTestId).isVisible();
  }

  /**
   * @desc Check whether the edit button is enabled and interactable
   * @returns {Promise<boolean>} True if the edit button is enabled
   */
  async isEditButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_editButtonTestId).isEnabled();
  }

  /**
   * @desc Check whether the 'Widened' badge is visible
   * Only rendered when isWidened === true (coverageStartDate < earliestTransactionDate OR coverageEndDate > latestTransactionDate)
   * @returns {Promise<boolean>} True if the widened badge is visible
   */
  async isWidenedBadgeVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_widenedBadgeElement).isVisible();
  }

  /**
   * @desc Check whether the formatted date range span is visible in the display view
   * @returns {Promise<boolean>} True if the formatted date range text is visible
   */
  async isDateRangeTextVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_dateRangeFormattedText).isVisible();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Click the X icon button to close the date range editor and return to the display view
   * Expected outcome is that editing mode is exited and the display container becomes visible
   */
  async clickCloseButton(): Promise<void> {
    await this.page.locator(this.selector_closeButtonTestId).click();
  }

  /**
   * @desc Click the close button via aria-label selector to exit editing mode
   * Expected outcome is that editing mode is exited and the display container becomes visible
   */
  async clickCloseButtonByAriaLabel(): Promise<void> {
    await this.page.locator(this.selector_closeButtonAriaLabel).click();
  }

  /**
   * @desc Click the reset button to revert both coverage start and end dates to the originally detected
   * transaction dates and close the editor; only available when isWidened === true
   * Expected outcome is that both dates are reset and the editor is closed
   * @throws {Error} When the reset button is not visible (component is not in widened state)
   */
  async clickResetButton(): Promise<void> {
    const isVisible = await this.isResetButtonVisible();
    if (!isVisible) {
      throw new Error(
        'CoverageDateRangeInputPOM: Cannot click reset button - it is not visible. ' +
        `The reset button is only rendered when isWidened === true. Selector: ${this.selector_resetButtonTestId}`
      );
    }
    await this.page.locator(this.selector_resetButtonTestId).click();
  }

  /**
   * @desc Click the start date picker trigger button to open the ReactDatePicker calendar popup
   * for selecting a coverage start date (maxDate enforces widening-only — can only go earlier than earliestTransactionDate)
   * Expected outcome is that the ReactDatePicker calendar popup opens
   */
  async clickStartDatePicker(): Promise<void> {
    await this.page.locator(this.selector_startDatePickerWrapper).click();
  }

  /**
   * @desc Click the end date picker trigger button to open the ReactDatePicker calendar popup
   * for selecting a coverage end date (minDate enforces widening-only — can only go later than latestTransactionDate)
   * Expected outcome is that the ReactDatePicker calendar popup opens
   */
  async clickEndDatePicker(): Promise<void> {
    await this.page.locator(this.selector_endDatePickerWrapper).click();
  }

  /**
   * @desc Click the pencil icon button to switch the component into editing mode
   * Expected outcome is that the editor container becomes visible and the display container is hidden
   */
  async clickEditButton(): Promise<void> {
    await this.page.locator(this.selector_editButtonTestId).click();
  }

  /**
   * @desc Click the edit button via aria-label selector to enter editing mode
   * Expected outcome is that the editor container becomes visible and the display container is hidden
   */
  async clickEditButtonByAriaLabel(): Promise<void> {
    await this.page.locator(this.selector_editButtonAriaLabel).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the full inner HTML of the editor container to inspect its rendered structure
   * @returns {Promise<string>} The inner HTML of the editor container
   * @throws {Error} When the editor container inner HTML is not accessible or null
   */
  async getEditorContainerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_editorContainer).isVisible();
    const html = await this.page.locator(this.selector_editorContainer).innerHTML();
    if (html === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: Editor container inner HTML is null. Selector: ${this.selector_editorContainer}`
      );
    }
    return html;
  }

  /**
   * @desc Get the full inner HTML of the display container to inspect its rendered structure
   * @returns {Promise<string>} The inner HTML of the display container
   * @throws {Error} When the display container inner HTML is not accessible or null
   */
  async getDisplayContainerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_displayContainer).isVisible();
    const html = await this.page.locator(this.selector_displayContainer).innerHTML();
    if (html === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: Display container inner HTML is null. Selector: ${this.selector_displayContainer}`
      );
    }
    return html;
  }

  /**
   * @desc Get the aria-label attribute value of the close button to verify accessibility labeling
   * @returns {Promise<string>} The aria-label attribute value of the close button
   * @throws {Error} When the aria-label attribute is not accessible or null
   */
  async getCloseButtonAriaLabel(): Promise<string> {
    const value = await this.page.locator(this.selector_closeButtonAriaLabel).getAttribute('aria-label');
    if (value === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: Close button aria-label attribute is null. Selector: ${this.selector_closeButtonAriaLabel}`
      );
    }
    return value;
  }

  /**
   * @desc Get the text content of the reset button (expected: 'Reset to detected dates')
   * @returns {Promise<string>} The text content of the reset button exactly as it appears
   * @throws {Error} When the reset button text content is not accessible or null
   */
  async getResetButtonText(): Promise<string> {
    await this.page.locator(this.selector_resetButtonTestId).isVisible();
    const text = await this.page.locator(this.selector_resetButtonTestId).textContent();
    if (text === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: Reset button text content is null. Selector: ${this.selector_resetButtonTestId}`
      );
    }
    return text;
  }

  /**
   * @desc Get the currently displayed start date text from the date picker trigger button
   * @returns {Promise<string>} The start date text exactly as it appears in the picker
   * @throws {Error} When the start date picker text content is not accessible or null
   */
  async getStartDatePickerText(): Promise<string> {
    await this.page.locator(this.selector_startDatePickerWrapper).isVisible();
    const text = await this.page.locator(this.selector_startDatePickerWrapper).textContent();
    if (text === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: Start date picker text content is null. Selector: ${this.selector_startDatePickerWrapper}`
      );
    }
    return text;
  }

  /**
   * @desc Get the inner HTML of the start date picker wrapper to inspect the rendered ReactDatePicker structure
   * @returns {Promise<string>} The inner HTML of the start date picker wrapper
   * @throws {Error} When the start date picker inner HTML is not accessible or null
   */
  async getStartDatePickerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_startDatePickerWrapper).isVisible();
    const html = await this.page.locator(this.selector_startDatePickerWrapper).innerHTML();
    if (html === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: Start date picker inner HTML is null. Selector: ${this.selector_startDatePickerWrapper}`
      );
    }
    return html;
  }

  /**
   * @desc Get the currently displayed end date text from the date picker trigger button
   * @returns {Promise<string>} The end date text exactly as it appears in the picker
   * @throws {Error} When the end date picker text content is not accessible or null
   */
  async getEndDatePickerText(): Promise<string> {
    await this.page.locator(this.selector_endDatePickerWrapper).isVisible();
    const text = await this.page.locator(this.selector_endDatePickerWrapper).textContent();
    if (text === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: End date picker text content is null. Selector: ${this.selector_endDatePickerWrapper}`
      );
    }
    return text;
  }

  /**
   * @desc Get the inner HTML of the end date picker wrapper to inspect the rendered ReactDatePicker structure
   * @returns {Promise<string>} The inner HTML of the end date picker wrapper
   * @throws {Error} When the end date picker inner HTML is not accessible or null
   */
  async getEndDatePickerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_endDatePickerWrapper).isVisible();
    const html = await this.page.locator(this.selector_endDatePickerWrapper).innerHTML();
    if (html === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: End date picker inner HTML is null. Selector: ${this.selector_endDatePickerWrapper}`
      );
    }
    return html;
  }

  /**
   * @desc Get the static label text (expected: 'Date Range:')
   * @returns {Promise<string>} The label text exactly as it appears
   * @throws {Error} When the date range label text content is not accessible or null
   */
  async getDateRangeLabelText(): Promise<string> {
    await this.page.locator(this.selector_dateRangeLabelText).isVisible();
    const text = await this.page.locator(this.selector_dateRangeLabelText).textContent();
    if (text === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: Date range label text content is null. Selector: ${this.selector_dateRangeLabelText}`
      );
    }
    return text;
  }

  /**
   * @desc Get the aria-label attribute value of the edit button to verify accessibility labeling
   * @returns {Promise<string>} The aria-label attribute value of the edit button
   * @throws {Error} When the aria-label attribute is not accessible or null
   */
  async getEditButtonAriaLabel(): Promise<string> {
    const value = await this.page.locator(this.selector_editButtonAriaLabel).getAttribute('aria-label');
    if (value === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: Edit button aria-label attribute is null. Selector: ${this.selector_editButtonAriaLabel}`
      );
    }
    return value;
  }

  /**
   * @desc Get the text content of the widened badge (expected: 'Widened')
   * @returns {Promise<string>} The widened badge text exactly as it appears
   * @throws {Error} When the widened badge text content is not accessible or null
   */
  async getWidenedBadgeText(): Promise<string> {
    await this.page.locator(this.selector_widenedBadgeElement).isVisible();
    const text = await this.page.locator(this.selector_widenedBadgeElement).textContent();
    if (text === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: Widened badge text content is null. Selector: ${this.selector_widenedBadgeElement}`
      );
    }
    return text;
  }

  /**
   * @desc Get the CSS class list of the widened badge to verify styling (e.g. bg-blue-100, text-blue-700)
   * @returns {Promise<string[]>} Array of CSS class names on the widened badge element
   * @throws {Error} When the widened badge class attribute is not accessible or null
   */
  async getWidenedBadgeClassList(): Promise<string[]> {
    await this.page.locator(this.selector_widenedBadgeElement).isVisible();
    const classAttr = await this.page.locator(this.selector_widenedBadgeElement).getAttribute('class');
    if (classAttr === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: Widened badge class attribute is null. Selector: ${this.selector_widenedBadgeElement}`
      );
    }
    return classAttr.split(' ').filter((cls) => cls.length > 0);
  }

  /**
   * @desc Get the formatted date range text displayed to the user, e.g. '01/01/2024 – 12/31/2024'
   * @returns {Promise<string>} The formatted date range text exactly as it appears
   * @throws {Error} When the date range formatted text content is not accessible or null
   */
  async getDateRangeFormattedText(): Promise<string> {
    await this.page.locator(this.selector_dateRangeFormattedText).isVisible();
    const text = await this.page.locator(this.selector_dateRangeFormattedText).textContent();
    if (text === null) {
      throw new Error(
        `CoverageDateRangeInputPOM: Date range formatted text content is null. Selector: ${this.selector_dateRangeFormattedText}`
      );
    }
    return text;
  }
}