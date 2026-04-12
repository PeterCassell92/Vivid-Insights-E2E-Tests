/**
 * Page Object Model: Calendar
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class CalendarPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_calendarRoot;
    private readonly selector_dropdownsContainer;
    private readonly selector_captionLabel;
    private readonly selector_weekdaysRow;
    private readonly selector_calendarTable;
    private readonly selector_navNextButton;
    private readonly selector_navPreviousButton;
    private readonly selector_weekdayCell;
    private readonly selector_dayButton;
    private readonly selector_dayCell;
    private readonly selector_weekRow;
    private readonly selector_weekNumberCell;
    private readonly selector_allDayCells;
    private readonly selector_allWeekRows;
    constructor(page: Page);
    /**
     * @desc Checks if the Calendar component is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the calendar root is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a CalendarPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<CalendarPOM>} A CalendarPOM instance
     * @throws {Error} When the calendar root element is not visible
     */
    static getPOM(page: Page): Promise<CalendarPOM>;
    /**
     * @desc Check whether the calendar root container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the calendar root is visible
     */
    isCalendarRootVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the dropdowns container is visible (only shown when captionLayout is dropdown-based)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the dropdowns container is visible
     */
    isDropdownsContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the caption label is visible (it is hidden when captionLayout is dropdown-based)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the caption label is visible
     */
    isCaptionLabelVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the main calendar grid table is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the calendar table is visible
     */
    isCalendarTableVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the next navigation button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the next navigation button is visible
     */
    isNavNextButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the previous navigation button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the previous navigation button is visible
     */
    isNavPreviousButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the next navigation button is enabled (aria-disabled is not set)
     * @returns {Promise<boolean>} True if the next navigation button is enabled
     */
    isNavNextButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the previous navigation button is enabled (aria-disabled is not set)
     * @returns {Promise<boolean>} True if the previous navigation button is enabled
     */
    isNavPreviousButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether a specific day button is visible on screen
     * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the day button is visible
     */
    isDayButtonVisible(dateString: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether a specific day button is enabled (not disabled). Disabled days are styled with reduced opacity.
     * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
     * @returns {Promise<boolean>} True if the day button is enabled
     */
    isDayButtonEnabled(dateString: string): Promise<boolean>;
    /**
     * @desc Click a specific calendar day button to select that date. Supports single and range selection modes.
     * Expected outcome is that the date will be selected (or added to range selection).
     * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
     * @throws {Error} When the day button is not visible or not interactable
     */
    clickDayButton(dateString: string): Promise<void>;
    /**
     * @desc Click the next month/year navigation button to navigate to the next month (or year, depending on captionLayout).
     * Expected outcome is that the calendar will advance to the next month or year.
     * @throws {Error} When the next navigation button is not visible
     */
    clickNavNextButton(): Promise<void>;
    /**
     * @desc Click the previous month/year navigation button to navigate to the previous month (or year, depending on captionLayout).
     * Expected outcome is that the calendar will go back to the previous month or year.
     * @throws {Error} When the previous navigation button is not visible
     */
    clickNavPreviousButton(): Promise<void>;
    /**
     * @desc Select a month or year from the dropdown selects inside the dropdowns container when captionLayout is dropdown-based.
     * Expected outcome is that the calendar will navigate to the selected month or year.
     * @param {string} label - The visible label of the option to select (e.g. 'Jan' or '2025')
     * @throws {Error} When the dropdowns container is not visible
     */
    selectDropdownOption(label: string): Promise<void>;
    /**
     * @desc Scroll within the calendar root container if the calendar overflows its bounds.
     * Expected outcome is that the calendar content scrolls to the specified position.
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     * @throws {Error} When the calendar root is not visible
     */
    scrollCalendarRoot(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Get the value of the data-slot attribute on the calendar root, which is always 'calendar'.
     * @returns {Promise<string>} The data-slot attribute value
     * @throws {Error} When the data-slot attribute is not accessible or null
     */
    getCalendarRootDataSlot(): Promise<string>;
    /**
     * @desc Get the CSS class list of the calendar root container to inspect applied styles.
     * @returns {Promise<string[]>} Array of CSS class names applied to the calendar root
     * @throws {Error} When the class attribute is not accessible
     */
    getCalendarRootClassList(): Promise<string[]>;
    /**
     * @desc Get the inner HTML of the dropdowns container to inspect the month and year select elements.
     * @returns {Promise<string>} The inner HTML of the dropdowns container
     * @throws {Error} When the dropdowns container is not accessible
     */
    getDropdownsContainerInnerHtml(): Promise<string>;
    /**
     * @desc Get the visible month/year label text displayed in the caption area (e.g. 'January 2025').
     * @returns {Promise<string>} The caption label text exactly as it appears in the UI
     * @throws {Error} When the caption label text content is not accessible or null
     */
    getCaptionLabelText(): Promise<string>;
    /**
     * @desc Get a list of all individual weekday header label texts (e.g. ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']).
     * @returns {Promise<string[]>} Array of weekday label strings exactly as they appear
     * @throws {Error} When weekday cells are not accessible
     */
    getWeekdayLabelList(): Promise<string[]>;
    /**
     * @desc Get the full text content of the weekday header row (e.g. 'Sun Mon Tue Wed Thu Fri Sat').
     * @returns {Promise<string>} The full text content of the weekday row exactly as it appears
     * @throws {Error} When the weekday row text content is not accessible or null
     */
    getWeekdaysRowText(): Promise<string>;
    /**
     * @desc Get the visible text content of a specific day button (the day number displayed).
     * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
     * @returns {Promise<string>} The text content of the day button exactly as it appears
     * @throws {Error} When the day button text content is not accessible or null
     */
    getDayButtonText(dateString: string): Promise<string>;
    /**
     * @desc Get the CSS class list of a specific day button to inspect its current visual state (selected, range, today, etc.).
     * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
     * @returns {Promise<string[]>} Array of CSS class names applied to the day button
     * @throws {Error} When the class attribute is not accessible
     */
    getDayButtonClassList(dateString: string): Promise<string[]>;
    /**
     * @desc Get the data-day attribute value (locale date string) identifying the specific date this button represents.
     * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
     * @returns {Promise<string>} The data-day attribute value
     * @throws {Error} When the data-day attribute is not accessible or null
     */
    getDayButtonDataDay(dateString: string): Promise<string>;
    /**
     * @desc Get the data-selected-single attribute to determine if this day is selected as a single (non-range) date.
     * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
     * @returns {Promise<string | null>} The data-selected-single attribute value, or null if not present
     */
    getDayButtonDataSelectedSingle(dateString: string): Promise<string | null>;
    /**
     * @desc Get the data-range-start attribute to determine if this day is the start of a selected date range.
     * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
     * @returns {Promise<string | null>} The data-range-start attribute value, or null if not present
     */
    getDayButtonDataRangeStart(dateString: string): Promise<string | null>;
    /**
     * @desc Get the data-range-end attribute to determine if this day is the end of a selected date range.
     * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
     * @returns {Promise<string | null>} The data-range-end attribute value, or null if not present
     */
    getDayButtonDataRangeEnd(dateString: string): Promise<string | null>;
    /**
     * @desc Get the data-range-middle attribute to determine if this day falls between the range start and end.
     * @param {string} dateString - The locale date string identifying the day (e.g. '1/15/2025')
     * @returns {Promise<string | null>} The data-range-middle attribute value, or null if not present
     */
    getDayButtonDataRangeMiddle(dateString: string): Promise<string | null>;
    /**
     * @desc Get the full inner HTML of the calendar table to inspect all rendered week rows and day cells.
     * @returns {Promise<string>} The inner HTML of the calendar table
     * @throws {Error} When the calendar table is not accessible
     */
    getCalendarTableInnerHtml(): Promise<string>;
    /**
     * @desc Count the number of week rows rendered in the calendar grid.
     * @returns {Promise<number>} The number of week rows
     */
    getWeekRowCount(): Promise<number>;
    /**
     * @desc Count the number of day cells rendered in the calendar grid.
     * @returns {Promise<number>} The number of day cells
     */
    getDayCellCount(): Promise<number>;
    /**
     * @desc Get the CSS class list of the next navigation button.
     * @returns {Promise<string[]>} Array of CSS class names applied to the next navigation button
     * @throws {Error} When the class attribute is not accessible
     */
    getNavNextButtonClassList(): Promise<string[]>;
    /**
     * @desc Get the CSS class list of the previous navigation button.
     * @returns {Promise<string[]>} Array of CSS class names applied to the previous navigation button
     * @throws {Error} When the class attribute is not accessible
     */
    getNavPreviousButtonClassList(): Promise<string[]>;
}
