/**
 * Page Object Model: DatePicker
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const DatePickerPOM_StandardSelector = (testId: string) => `[data-testid='${testId}']`;

export class DatePickerPOM {
  private readonly page: Page;
  private readonly testId: string;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_datePickerContainer: string;
  private readonly selector_triggerButton: string;

  constructor(page: Page, testId: string) {
    this.page = page;
    this.testId = testId;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = DatePickerPOM_StandardSelector(testId);
    this.selector_datePickerContainer = this.rootSelector;
    this.selector_triggerButton = `${this.rootSelector} [data-testid='${testId}-trigger']`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if a DatePicker with the given testId is currently visible on screen
   * @param page - Playwright Page instance
   * @param testId - The consumer-supplied data-testid value applied to the root wrapper div
   * @returns {Promise<boolean>} True if the DatePicker root container is visible
   */
  static async isVisible(page: Page, testId: string): Promise<boolean> {
    try {
      const rootSelector = DatePickerPOM_StandardSelector(testId);
      return await page.locator(rootSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a DatePickerPOM instance
   * @param page - Playwright Page instance
   * @param testId - The consumer-supplied data-testid value applied to the root wrapper div
   * @returns {Promise<DatePickerPOM>} A DatePickerPOM instance
   * @throws {Error} When the DatePicker root container is not visible
   */
  static async getPOM(page: Page, testId: string): Promise<DatePickerPOM> {
    const isVisible = await DatePickerPOM.isVisible(page, testId);

    if (!isVisible) {
      throw new Error(
        `DatePickerPOM: Cannot instantiate - DatePicker root container is not visible. ` +
        `Expected element [data-testid='${testId}'] to be visible.`
      );
    }

    return new DatePickerPOM(page, testId);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Whether or not the DatePicker root container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the root container is visible
   */
  async isDatePickerContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_datePickerContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the trigger button is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the trigger button is visible
   */
  async isTriggerButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_triggerButton).isVisible({ timeout });
  }

  /**
   * @desc Check whether the trigger button is enabled (not disabled).
   * Reflects the disabled prop passed to DatePicker.
   * @returns {Promise<boolean>} True if the trigger button is enabled
   */
  async isTriggerButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_triggerButton).isEnabled();
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Clicks the calendar icon trigger button to open the ReactDatePicker calendar popover
   * Expected outcome is that the calendar popover will open
   */
  async clickTriggerButton(): Promise<void> {
    await this.page.locator(this.selector_triggerButton).click();
  }

  /**
   * @desc Scrolls within the date picker root container if content overflows
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollDatePickerContainer(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_datePickerContainer).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Gets the consumer-supplied data-testid attribute value from the root wrapper div
   * @returns {Promise<string>} The data-testid attribute value exactly as it appears
   * @throws {Error} When the data-testid attribute is not accessible or null
   */
  async getDatePickerContainerTestId(): Promise<string> {
    await this.page.locator(this.selector_datePickerContainer).isVisible();
    const value = await this.page.locator(this.selector_datePickerContainer).getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `DatePickerPOM: data-testid attribute is null on root container. Selector: ${this.selector_datePickerContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the CSS class list of the root wrapper div, including any consumer-supplied className
   * @returns {Promise<string>} The class attribute value exactly as it appears
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getDatePickerContainerClassList(): Promise<string> {
    await this.page.locator(this.selector_datePickerContainer).isVisible();
    const value = await this.page.locator(this.selector_datePickerContainer).getAttribute('class');

    if (value === null) {
      throw new Error(
        `DatePickerPOM: class attribute is null on root container. Selector: ${this.selector_datePickerContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the visible text content of the trigger button, which displays either
   * the formatted selected date or the placeholder string
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the trigger button text content is not accessible or null
   */
  async getTriggerButtonText(): Promise<string> {
    await this.page.locator(this.selector_triggerButton).isVisible();
    const text = await this.page.locator(this.selector_triggerButton).textContent();

    if (text === null) {
      throw new Error(
        `DatePickerPOM: Trigger button text content is null. Selector: ${this.selector_triggerButton}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the inner HTML of the trigger button, capturing both the CalendarIcon SVG
   * and the date/placeholder span
   * @returns {Promise<string>} The inner HTML of the trigger button exactly as it appears
   * @throws {Error} When the trigger button inner HTML is not accessible or null
   */
  async getTriggerButtonInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_triggerButton).isVisible();
    const html = await this.page.locator(this.selector_triggerButton).innerHTML();

    if (html === null) {
      throw new Error(
        `DatePickerPOM: Trigger button inner HTML is null. Selector: ${this.selector_triggerButton}`
      );
    }

    return html;
  }

  /**
   * @desc Gets the CSS class list of the trigger button to inspect styling states
   * (e.g. disabled, focused, hover)
   * @returns {Promise<string>} The class attribute value exactly as it appears
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getTriggerButtonClassList(): Promise<string> {
    await this.page.locator(this.selector_triggerButton).isVisible();
    const value = await this.page.locator(this.selector_triggerButton).getAttribute('class');

    if (value === null) {
      throw new Error(
        `DatePickerPOM: class attribute is null on trigger button. Selector: ${this.selector_triggerButton}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-testid attribute value from the trigger button
   * (auto-derived as '${testId}-trigger')
   * @returns {Promise<string>} The data-testid attribute value exactly as it appears
   * @throws {Error} When the data-testid attribute is not accessible or null
   */
  async getTriggerButtonTestId(): Promise<string> {
    await this.page.locator(this.selector_triggerButton).isVisible();
    const value = await this.page.locator(this.selector_triggerButton).getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `DatePickerPOM: data-testid attribute is null on trigger button. Selector: ${this.selector_triggerButton}`
      );
    }

    return value;
  }
}