/**
 * Page Object Model: DatePicker
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class DatePickerPOM {
    private readonly page;
    private readonly testId;
    private readonly rootSelector;
    private readonly selector_datePickerContainer;
    private readonly selector_triggerButton;
    constructor(page: Page, testId: string);
    /**
     * @desc Checks if a DatePicker with the given testId is currently visible on screen
     * @param page - Playwright Page instance
     * @param testId - The consumer-supplied data-testid value applied to the root wrapper div
     * @returns {Promise<boolean>} True if the DatePicker root container is visible
     */
    static isVisible(page: Page, testId: string): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a DatePickerPOM instance
     * @param page - Playwright Page instance
     * @param testId - The consumer-supplied data-testid value applied to the root wrapper div
     * @returns {Promise<DatePickerPOM>} A DatePickerPOM instance
     * @throws {Error} When the DatePicker root container is not visible
     */
    static getPOM(page: Page, testId: string): Promise<DatePickerPOM>;
    /**
     * @desc Whether or not the DatePicker root container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the root container is visible
     */
    isDatePickerContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the trigger button is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the trigger button is visible
     */
    isTriggerButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the trigger button is enabled (not disabled).
     * Reflects the disabled prop passed to DatePicker.
     * @returns {Promise<boolean>} True if the trigger button is enabled
     */
    isTriggerButtonEnabled(): Promise<boolean>;
    /**
     * @desc Clicks the calendar icon trigger button to open the ReactDatePicker calendar popover
     * Expected outcome is that the calendar popover will open
     */
    clickTriggerButton(): Promise<void>;
    /**
     * @desc Scrolls within the date picker root container if content overflows
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollDatePickerContainer(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Gets the consumer-supplied data-testid attribute value from the root wrapper div
     * @returns {Promise<string>} The data-testid attribute value exactly as it appears
     * @throws {Error} When the data-testid attribute is not accessible or null
     */
    getDatePickerContainerTestId(): Promise<string>;
    /**
     * @desc Gets the CSS class list of the root wrapper div, including any consumer-supplied className
     * @returns {Promise<string>} The class attribute value exactly as it appears
     * @throws {Error} When the class attribute is not accessible or null
     */
    getDatePickerContainerClassList(): Promise<string>;
    /**
     * @desc Gets the visible text content of the trigger button, which displays either
     * the formatted selected date or the placeholder string
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the trigger button text content is not accessible or null
     */
    getTriggerButtonText(): Promise<string>;
    /**
     * @desc Gets the inner HTML of the trigger button, capturing both the CalendarIcon SVG
     * and the date/placeholder span
     * @returns {Promise<string>} The inner HTML of the trigger button exactly as it appears
     * @throws {Error} When the trigger button inner HTML is not accessible or null
     */
    getTriggerButtonInnerHtml(): Promise<string>;
    /**
     * @desc Gets the CSS class list of the trigger button to inspect styling states
     * (e.g. disabled, focused, hover)
     * @returns {Promise<string>} The class attribute value exactly as it appears
     * @throws {Error} When the class attribute is not accessible or null
     */
    getTriggerButtonClassList(): Promise<string>;
    /**
     * @desc Gets the data-testid attribute value from the trigger button
     * (auto-derived as '${testId}-trigger')
     * @returns {Promise<string>} The data-testid attribute value exactly as it appears
     * @throws {Error} When the data-testid attribute is not accessible or null
     */
    getTriggerButtonTestId(): Promise<string>;
}
