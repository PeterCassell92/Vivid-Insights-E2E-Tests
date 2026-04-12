/**
 * Page Object Model: Calendar
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const CalendarPOM_StandardSelector = '[data-slot="calendar"]';

export class CalendarPOM {
  private readonly page: Page;

  // =========================================================================
  // Selector Properties
  // =========================================================================

  private readonly rootSelector: string;
  private readonly selector_calendarRoot: string;
  private readonly selector_dropdownsContainer: string;
  private readonly selector_captionLabel: string;
  private readonly selector_weekdaysRow: string;
  private readonly selector_calendarTable: string;
  private readonly selector_navNextButton: string;
  private readonly selector_navPreviousButton: string;

  // Dynamic selector functions
  private readonly selector_weekdayCell: (index: number) => string;
  private readonly selector_dayButton: (dateString: string) => string;
  private readonly selector_dayCell: (dateString: string) => string;
  private readonly selector_weekRow: (rowIndex: number) => string;
  private readonly selector_weekNumberCell: (rowIndex: number) => string;
  private readonly selector_allDayCells: string;
  private readonly selector_allWeekRows: string;

  constructor(page: Page) {
    this.page = page;

    // =========================================================================
    // Selectors — Single source of truth
    // =========================================================================

    this.rootSelector = CalendarPOM_StandardSelector;

    // Static selectors
    this.selector_calendarRoot = this.rootSelector;
    this.selector_dropdownsContainer = `${this.rootSelector} .rdp-dropdowns`;
    this.selector_captionLabel = `${this.rootSelector} .rdp-caption_label`;
    this.selector_weekdaysRow = `${this.rootSelector} .rdp-weekdays`;
    this.selector_calendarTable = `${this.rootSelector} .rdp-month table`;
    this.selector_navNextButton = `${this.rootSelector} .rdp-button_next`;
    this.selector_navPreviousButton = `${this.rootSelector} .rdp-button_previous`;

    // Aggregate selectors used for counting
    this.selector_allDayCells = `${this.rootSelector} .rdp-day`;
    this.selector_allWeekRows = `${this.rootSelector} .rdp-week`;

    // Dynamic selector functions
    this.selector_weekdayCell = (index: number) =>
      `${this.rootSelector} .rdp-weekday:nth-child(${index})`;

    this.selector_dayButton = (dateString: string) =>
      `${this.rootSelector} [data-day="${dateString}"]`;

    this.selector_dayCell = (dateString: string) =>
      `${this.rootSelector} .rdp-day:has([data-day="${dateString}"])`;

    this.selector_weekRow = (rowIndex: number) =>
      `${this.rootSelector} .rdp-week:nth-child(${rowIndex})`;

    this.selector_weekNumberCell = (rowIndex: number) =>
      `${this.rootSelector} .rdp-week_number:nth-child(${rowIndex})`;
  }

  // =========================================================================
  // Static Methods
  // =========================================================================

  /**
   * @desc Checks if the Calendar component is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the calendar root is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const calendarRoot = page.locator(CalendarPOM_StandardSelector);
      return await calendarRoot.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a CalendarPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<CalendarPOM>} A CalendarPOM instance
   * @throws {Error} When the calendar root element is not visible
   */
  static async getPOM(page: Page): Promise<CalendarPOM> {
    const isVisible = await CalendarPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'CalendarPOM: Cannot instantiate - calendar is not visible. ' +
          `Expected element [${CalendarPOM_StandardSelector}] to be visible.`
      );
    }

    return new CalendarPOM(page);
  }

  // =========================================================================
  // Visibility and State Methods
  // =========================================================================

  /**
   * @desc Check whether the calendar root container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the calendar root is visible
   */
  async isCalendarRootVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_calendarRoot)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the dropdowns container is visible (only shown when captionLayout is dropdown-based)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the dropdowns container is visible
   */
  async isDropdownsContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_dropdownsContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the caption label is visible (it is hidden when captionLayout is dropdown-based)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the caption label is visible
   */
  async isCaptionLabelVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_captionLabel)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the main calendar grid table is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the calendar table is visible
   */
  async isCalendarTableVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_calendarTable)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the next navigation button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the next navigation button is visible
   */
  async isNavNextButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_navNextButton)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the previous navigation button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the previous navigation button is visible
   */
  async isNavPreviousButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_navPreviousButton)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the next navigation button is enabled (aria-disabled is not set)
   * @returns {Promise<boolean>} True if the next navigation button is enabled
   */
  async isNavNextButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_navNextButton).isEnabled();
  }

  /**
   * @desc Check whether the previous navigation button is enabled (aria-disabled is not set)
   * @returns {Promise<boolean>} True if the previous navigation button is enabled
   */
  async isNavPreviousButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_navPreviousButton).isEnabled();
  }

  /**
   * @desc Check whether a specific day button is visible on screen
   * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the day button is visible
   */
  async isDayButtonVisible(
    dateString: string,
    timeout: number = 1500
  ): Promise<boolean> {
    return await this.page
      .locator(this.selector_dayButton(dateString))
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether a specific day button is enabled (not disabled). Disabled days are styled with reduced opacity.
   * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
   * @returns {Promise<boolean>} True if the day button is enabled
   */
  async isDayButtonEnabled(dateString: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_dayButton(dateString))
      .isEnabled();
  }

  // =========================================================================
  // Action Methods
  // =========================================================================

  /**
   * @desc Click a specific calendar day button to select that date. Supports single and range selection modes.
   * Expected outcome is that the date will be selected (or added to range selection).
   * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
   * @throws {Error} When the day button is not visible or not interactable
   */
  async clickDayButton(dateString: string): Promise<void> {
    const selector = this.selector_dayButton(dateString);
    const isVisible = await this.page.locator(selector).isVisible();
    if (!isVisible) {
      throw new Error(
        `CalendarPOM: Cannot click day button - day "${dateString}" is not visible. Selector: ${selector}`
      );
    }
    await this.page.locator(selector).click();
  }

  /**
   * @desc Click the next month/year navigation button to navigate to the next month (or year, depending on captionLayout).
   * Expected outcome is that the calendar will advance to the next month or year.
   * @throws {Error} When the next navigation button is not visible
   */
  async clickNavNextButton(): Promise<void> {
    const isVisible = await this.page
      .locator(this.selector_navNextButton)
      .isVisible();
    if (!isVisible) {
      throw new Error(
        `CalendarPOM: Cannot click next navigation button - it is not visible. Selector: ${this.selector_navNextButton}`
      );
    }
    await this.page.locator(this.selector_navNextButton).click();
  }

  /**
   * @desc Click the previous month/year navigation button to navigate to the previous month (or year, depending on captionLayout).
   * Expected outcome is that the calendar will go back to the previous month or year.
   * @throws {Error} When the previous navigation button is not visible
   */
  async clickNavPreviousButton(): Promise<void> {
    const isVisible = await this.page
      .locator(this.selector_navPreviousButton)
      .isVisible();
    if (!isVisible) {
      throw new Error(
        `CalendarPOM: Cannot click previous navigation button - it is not visible. Selector: ${this.selector_navPreviousButton}`
      );
    }
    await this.page.locator(this.selector_navPreviousButton).click();
  }

  /**
   * @desc Select a month or year from the dropdown selects inside the dropdowns container when captionLayout is dropdown-based.
   * Expected outcome is that the calendar will navigate to the selected month or year.
   * @param {string} label - The visible label of the option to select (e.g. 'Jan' or '2025')
   * @throws {Error} When the dropdowns container is not visible
   */
  async selectDropdownOption(label: string): Promise<void> {
    const isVisible = await this.page
      .locator(this.selector_dropdownsContainer)
      .isVisible();
    if (!isVisible) {
      throw new Error(
        `CalendarPOM: Cannot select dropdown option - dropdowns container is not visible. Selector: ${this.selector_dropdownsContainer}`
      );
    }
    await this.page
      .locator(this.selector_dropdownsContainer)
      .locator('select')
      .selectOption({ label });
  }

  /**
   * @desc Scroll within the calendar root container if the calendar overflows its bounds.
   * Expected outcome is that the calendar content scrolls to the specified position.
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   * @throws {Error} When the calendar root is not visible
   */
  async scrollCalendarRoot(deltaX: number, deltaY: number): Promise<void> {
    const isVisible = await this.page
      .locator(this.selector_calendarRoot)
      .isVisible();
    if (!isVisible) {
      throw new Error(
        `CalendarPOM: Cannot scroll - calendar root is not visible. Selector: ${this.selector_calendarRoot}`
      );
    }
    await this.page
      .locator(this.selector_calendarRoot)
      .evaluate(
        (el, { dx, dy }) => {
          el.scrollBy(dx, dy);
        },
        { dx: deltaX, dy: deltaY }
      );
  }

  // =========================================================================
  // Data Retrieval Methods
  // =========================================================================

  /**
   * @desc Get the value of the data-slot attribute on the calendar root, which is always 'calendar'.
   * @returns {Promise<string>} The data-slot attribute value
   * @throws {Error} When the data-slot attribute is not accessible or null
   */
  async getCalendarRootDataSlot(): Promise<string> {
    await this.page.locator(this.selector_calendarRoot).isVisible();
    const value = await this.page
      .locator(this.selector_calendarRoot)
      .getAttribute('data-slot');
    if (value === null) {
      throw new Error(
        `CalendarPOM: data-slot attribute is null on calendar root. Selector: ${this.selector_calendarRoot}`
      );
    }
    return value;
  }

  /**
   * @desc Get the CSS class list of the calendar root container to inspect applied styles.
   * @returns {Promise<string[]>} Array of CSS class names applied to the calendar root
   * @throws {Error} When the class attribute is not accessible
   */
  async getCalendarRootClassList(): Promise<string[]> {
    await this.page.locator(this.selector_calendarRoot).isVisible();
    const classAttr = await this.page
      .locator(this.selector_calendarRoot)
      .getAttribute('class');
    if (classAttr === null) {
      throw new Error(
        `CalendarPOM: class attribute is null on calendar root. Selector: ${this.selector_calendarRoot}`
      );
    }
    return classAttr.split(/\s+/).filter((c) => c.length > 0);
  }

  /**
   * @desc Get the inner HTML of the dropdowns container to inspect the month and year select elements.
   * @returns {Promise<string>} The inner HTML of the dropdowns container
   * @throws {Error} When the dropdowns container is not accessible
   */
  async getDropdownsContainerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_dropdownsContainer).isVisible();
    const html = await this.page
      .locator(this.selector_dropdownsContainer)
      .innerHTML();
    if (html === null) {
      throw new Error(
        `CalendarPOM: innerHTML is null for dropdowns container. Selector: ${this.selector_dropdownsContainer}`
      );
    }
    return html;
  }

  /**
   * @desc Get the visible month/year label text displayed in the caption area (e.g. 'January 2025').
   * @returns {Promise<string>} The caption label text exactly as it appears in the UI
   * @throws {Error} When the caption label text content is not accessible or null
   */
  async getCaptionLabelText(): Promise<string> {
    await this.page.locator(this.selector_captionLabel).isVisible();
    const text = await this.page
      .locator(this.selector_captionLabel)
      .textContent();
    if (text === null) {
      throw new Error(
        `CalendarPOM: Caption label text content is null. Selector: ${this.selector_captionLabel}`
      );
    }
    return text;
  }

  /**
   * @desc Get a list of all individual weekday header label texts (e.g. ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']).
   * @returns {Promise<string[]>} Array of weekday label strings exactly as they appear
   * @throws {Error} When weekday cells are not accessible
   */
  async getWeekdayLabelList(): Promise<string[]> {
    await this.page.locator(this.selector_weekdaysRow).isVisible();
    const cells = this.page.locator(
      `${this.rootSelector} .rdp-weekday`
    );
    const count = await cells.count();
    const labels: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await cells.nth(i).textContent();
      if (text === null) {
        throw new Error(
          `CalendarPOM: Weekday cell at index ${i} has null text content. Selector: ${this.rootSelector} .rdp-weekday`
        );
      }
      labels.push(text);
    }

    return labels;
  }

  /**
   * @desc Get the full text content of the weekday header row (e.g. 'Sun Mon Tue Wed Thu Fri Sat').
   * @returns {Promise<string>} The full text content of the weekday row exactly as it appears
   * @throws {Error} When the weekday row text content is not accessible or null
   */
  async getWeekdaysRowText(): Promise<string> {
    await this.page.locator(this.selector_weekdaysRow).isVisible();
    const text = await this.page
      .locator(this.selector_weekdaysRow)
      .textContent();
    if (text === null) {
      throw new Error(
        `CalendarPOM: Weekdays row text content is null. Selector: ${this.selector_weekdaysRow}`
      );
    }
    return text;
  }

  /**
   * @desc Get the visible text content of a specific day button (the day number displayed).
   * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
   * @returns {Promise<string>} The text content of the day button exactly as it appears
   * @throws {Error} When the day button text content is not accessible or null
   */
  async getDayButtonText(dateString: string): Promise<string> {
    const selector = this.selector_dayButton(dateString);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();
    if (text === null) {
      throw new Error(
        `CalendarPOM: Day button text content is null for date "${dateString}". Selector: ${selector}`
      );
    }
    return text;
  }

  /**
   * @desc Get the CSS class list of a specific day button to inspect its current visual state (selected, range, today, etc.).
   * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
   * @returns {Promise<string[]>} Array of CSS class names applied to the day button
   * @throws {Error} When the class attribute is not accessible
   */
  async getDayButtonClassList(dateString: string): Promise<string[]> {
    const selector = this.selector_dayButton(dateString);
    await this.page.locator(selector).isVisible();
    const classAttr = await this.page.locator(selector).getAttribute('class');
    if (classAttr === null) {
      throw new Error(
        `CalendarPOM: class attribute is null for day button "${dateString}". Selector: ${selector}`
      );
    }
    return classAttr.split(/\s+/).filter((c) => c.length > 0);
  }

  /**
   * @desc Get the data-day attribute value (locale date string) identifying the specific date this button represents.
   * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
   * @returns {Promise<string>} The data-day attribute value
   * @throws {Error} When the data-day attribute is not accessible or null
   */
  async getDayButtonDataDay(dateString: string): Promise<string> {
    const selector = this.selector_dayButton(dateString);
    await this.page.locator(selector).isVisible();
    const value = await this.page.locator(selector).getAttribute('data-day');
    if (value === null) {
      throw new Error(
        `CalendarPOM: data-day attribute is null for day button "${dateString}". Selector: ${selector}`
      );
    }
    return value;
  }

  /**
   * @desc Get the data-selected-single attribute to determine if this day is selected as a single (non-range) date.
   * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
   * @returns {Promise<string | null>} The data-selected-single attribute value, or null if not present
   */
  async getDayButtonDataSelectedSingle(
    dateString: string
  ): Promise<string | null> {
    const selector = this.selector_dayButton(dateString);
    await this.page.locator(selector).isVisible();
    return await this.page
      .locator(selector)
      .getAttribute('data-selected-single');
  }

  /**
   * @desc Get the data-range-start attribute to determine if this day is the start of a selected date range.
   * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
   * @returns {Promise<string | null>} The data-range-start attribute value, or null if not present
   */
  async getDayButtonDataRangeStart(
    dateString: string
  ): Promise<string | null> {
    const selector = this.selector_dayButton(dateString);
    await this.page.locator(selector).isVisible();
    return await this.page.locator(selector).getAttribute('data-range-start');
  }

  /**
   * @desc Get the data-range-end attribute to determine if this day is the end of a selected date range.
   * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
   * @returns {Promise<string | null>} The data-range-end attribute value, or null if not present
   */
  async getDayButtonDataRangeEnd(dateString: string): Promise<string | null> {
    const selector = this.selector_dayButton(dateString);
    await this.page.locator(selector).isVisible();
    return await this.page.locator(selector).getAttribute('data-range-end');
  }

  /**
   * @desc Get the data-range-middle attribute to determine if this day falls between the range start and end.
   * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
   * @returns {Promise<string | null>} The data-range-middle attribute value, or null if not present
   */
  async getDayButtonDataRangeMiddle(
    dateString: string
  ): Promise<string | null> {
    const selector = this.selector_dayButton(dateString);
    await this.page.locator(selector).isVisible();
    return await this.page.locator(selector).getAttribute('data-range-middle');
  }

  /**
   * @desc Get the full inner HTML of the calendar table to inspect all rendered week rows and day cells.
   * @returns {Promise<string>} The inner HTML of the calendar table
   * @throws {Error} When the calendar table is not accessible
   */
  async getCalendarTableInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_calendarTable).isVisible();
    const html = await this.page
      .locator(this.selector_calendarTable)
      .innerHTML();
    if (html === null) {
      throw new Error(
        `CalendarPOM: innerHTML is null for calendar table. Selector: ${this.selector_calendarTable}`
      );
    }
    return html;
  }

  /**
   * @desc Count the number of week rows rendered in the calendar grid.
   * @returns {Promise<number>} The number of week rows
   */
  async getWeekRowCount(): Promise<number> {
    return await this.page.locator(this.selector_allWeekRows).count();
  }

  /**
   * @desc Count the number of day cells rendered in the calendar grid.
   * @returns {Promise<number>} The number of day cells
   */
  async getDayCellCount(): Promise<number> {
    return await this.page.locator(this.selector_allDayCells).count();
  }

  /**
   * @desc Get the CSS class list of the next navigation button.
   * @returns {Promise<string[]>} Array of CSS class names applied to the next navigation button
   * @throws {Error} When the class attribute is not accessible
   */
  async getNavNextButtonClassList(): Promise<string[]> {
    await this.page.locator(this.selector_navNextButton).isVisible();
    const classAttr = await this.page
      .locator(this.selector_navNextButton)
      .getAttribute('class');
    if (classAttr === null) {
      throw new Error(
        `CalendarPOM: class attribute is null for next navigation button. Selector: ${this.selector_navNextButton}`
      );
    }
    return classAttr.split(/\s+/).filter((c) => c.length > 0);
  }

  /**
   * @desc Get the CSS class list of the previous navigation button.
   * @returns {Promise<string[]>} Array of CSS class names applied to the previous navigation button
   * @throws {Error} When the class attribute is not accessible
   */
  async getNavPreviousButtonClassList(): Promise<string[]> {
    await this.page.locator(this.selector_navPreviousButton).isVisible();
    const classAttr = await this.page
      .locator(this.selector_navPreviousButton)
      .getAttribute('class');
    if (classAttr === null) {
      throw new Error(
        `CalendarPOM: class attribute is null for previous navigation button. Selector: ${this.selector_navPreviousButton}`
      );
    }
    return classAttr.split(/\s+/).filter((c) => c.length > 0);
  }
}