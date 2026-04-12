/**
 * Page Object Model: MonthlyProjectionPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class MonthlyProjectionPagePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_monthlyProjectionRoot;
    private readonly selector_summaryExpenses;
    private readonly selector_summaryEvents;
    private readonly selector_summaryIncome;
    private readonly selector_calendarContainer;
    private readonly selector_nextMonthButton;
    private readonly selector_prevMonthButton;
    private readonly selector_monthTitle;
    private readonly selector_backToDashboard;
    private readonly selector_projectFromDateRow;
    private readonly selector_projectionLoadingContainer;
    constructor(page: Page);
    /**
     * @desc Checks if the Monthly Projection page is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the monthly projection root container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a MonthlyProjectionPagePOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<MonthlyProjectionPagePOM>} A MonthlyProjectionPagePOM instance
     * @throws {Error} When the monthly projection page is not visible
     */
    static getPOM(page: Page): Promise<MonthlyProjectionPagePOM>;
    /**
     * @desc Check whether the main monthly projection page container is visible (i.e. data has finished loading)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the monthly projection root container is visible
     */
    isMonthlyProjectionRootVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the loading state container is currently visible (true while data is being fetched)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the projection loading container is visible
     */
    isProjectionLoadingVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the summary stats bar section is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the summary expenses element is visible
     */
    isSummaryBarVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the calendar container is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the calendar container is visible
     */
    isCalendarVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the 'Project from:' date picker row is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the project-from date row is visible
     */
    isProjectFromDateRowVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the next month navigation button
     * Expected outcome is that the page navigates to the next month's projection
     */
    clickNextMonthButton(): Promise<void>;
    /**
     * @desc Clicks the previous month navigation button
     * Expected outcome is that the page navigates to the previous month's projection
     */
    clickPrevMonthButton(): Promise<void>;
    /**
     * @desc Clicks the back to dashboard link
     * Expected outcome is that the page navigates to the root dashboard route
     */
    clickBackToDashboard(): Promise<void>;
    /**
     * @desc Clicks within the project-from date row to interact with the DatePicker child component
     * Expected outcome is that the DatePicker is activated or its value is changed
     */
    clickProjectFromDateRow(): Promise<void>;
    /**
     * @desc Get the CSS class list of the top-level page container
     * @returns {Promise<string>} The className attribute value of the monthly projection root element
     * @throws {Error} When the class list content is not accessible or null
     */
    getMonthlyProjectionRootClassList(): Promise<string>;
    /**
     * @desc Get the loading message text displayed while projection data is being fetched
     * @returns {Promise<string>} The text content of the projection loading container exactly as it appears
     * @throws {Error} When the loading container text content is not accessible or null
     */
    getProjectionLoadingText(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the calendar container
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the calendar container
     * @throws {Error} When the calendar container is not visible or its bounding box cannot be retrieved
     */
    getCalendarBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the full inner HTML of the calendar container, including day headers and all day cells
     * @returns {Promise<string>} The inner HTML of the calendar container exactly as rendered
     * @throws {Error} When the calendar container inner HTML is not accessible or null
     */
    getCalendarInnerHtml(): Promise<string>;
    /**
     * @desc Get the full text content of the project-from date row, including the label and any helper text
     * @returns {Promise<string>} The text content of the project-from date row exactly as it appears
     * @throws {Error} When the project-from date row text content is not accessible or null
     */
    getProjectFromDateRowText(): Promise<string>;
    /**
     * @desc Get the current month title text as displayed in the page header
     * @returns {Promise<string>} The month title text exactly as it appears
     * @throws {Error} When the month title text content is not accessible or null
     */
    getMonthTitleText(): Promise<string>;
}
