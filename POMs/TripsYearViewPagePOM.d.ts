/**
 * Page Object Model: TripsYearViewPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TripsYearViewPagePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_tripsYearViewContainer;
    private readonly selector_tripsYearGrid;
    private readonly selector_monthBox;
    private readonly selector_tripPill;
    private readonly selector_allMonthBoxes;
    private readonly selector_tripsSummary;
    private readonly selector_backLink;
    private readonly selector_yearTitle;
    private readonly selector_prevYearButton;
    private readonly selector_createTripButton;
    private readonly selector_nextYearButton;
    private readonly selector_tripsLoading;
    constructor(page: Page);
    /**
     * @desc Checks if the TripsYearViewPage is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the year view root container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a TripsYearViewPagePOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TripsYearViewPagePOM>} A TripsYearViewPagePOM instance
     * @throws {Error} When the trips year view root container is not visible
     */
    static getPOM(page: Page): Promise<TripsYearViewPagePOM>;
    /**
     * @desc Check whether the root year-view container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the root container is visible
     */
    isTripsYearViewContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the 12-month grid is visible (rendered only when loading is false)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the year grid is visible
     */
    isTripsYearGridVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the trips summary footer is visible (rendered only when loading is false)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the trips summary is visible
     */
    isTripsSummaryVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the loading indicator is currently visible (true only while trips are being fetched)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading indicator is visible
     */
    isTripsLoadingVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the back link to navigate to the Dashboard (/)
     * Expected outcome is that the browser navigates to the home/dashboard page
     */
    clickBackLink(): Promise<void>;
    /**
     * @desc Clicks the previous year button to decrement the displayed year
     * Expected outcome is that the year view updates to show the previous year
     */
    clickPrevYearButton(): Promise<void>;
    /**
     * @desc Clicks the next year button to increment the displayed year
     * Expected outcome is that the year view updates to show the next year
     */
    clickNextYearButton(): Promise<void>;
    /**
     * @desc Clicks the 'New Trip' create button to open the create trip modal
     * Expected outcome is that the create trip modal becomes visible
     */
    clickCreateTripButton(): Promise<void>;
    /**
     * @desc Clicks a specific month box (Link) to navigate to /trips/{monthKey}
     * Expected outcome is that the browser navigates to the month view for the given month
     * @param {string} monthKey - The month key in 'yyyy-MM' format (e.g. '2024-03')
     */
    clickMonthBox(monthKey: string): Promise<void>;
    /**
     * @desc Clicks a specific trip pill to open the trip detail modal
     * Expected outcome is that the trip detail modal becomes visible for the selected trip
     * @param {string} tripId - The unique identifier of the trip
     */
    clickTripPill(tripId: string): Promise<void>;
    /**
     * @desc Scrolls within the 12-month calendar grid container
     * Expected outcome is that the grid scrolls by the specified delta
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollYearGrid(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Get the href of a specific month box Link to verify it navigates to /trips/{monthKey}
     * @param {string} monthKey - The month key in 'yyyy-MM' format (e.g. '2024-03')
     * @returns {Promise<string>} The href attribute value of the month box link
     * @throws {Error} When the href attribute is not accessible or null
     */
    getMonthBoxHref(monthKey: string): Promise<string>;
    /**
     * @desc Get a list of all month box test-id attribute values to verify all 12 months are present
     * @returns {Promise<string[]>} Array of data-testid attribute values for all rendered month boxes
     * @throws {Error} When data-testid attributes are not accessible
     */
    getAllMonthBoxTestIds(): Promise<string[]>;
    /**
     * @desc Count the number of month box cells rendered in the grid (should be 12)
     * @returns {Promise<number>} The number of month box elements currently rendered
     */
    getMonthBoxCount(): Promise<number>;
    /**
     * @desc Get the summary text — either 'No trips planned for this year' or 'N trip(s) in YYYY'
     * @returns {Promise<string>} The trips summary text exactly as it appears in the UI
     * @throws {Error} When the trips summary content is not accessible or null
     */
    getTripsSummaryText(): Promise<string>;
    /**
     * @desc Get the loading indicator text ('Loading trips...')
     * @returns {Promise<string>} The loading indicator text exactly as it appears in the UI
     * @throws {Error} When the loading indicator content is not accessible or null
     */
    getTripsLoadingText(): Promise<string>;
    /**
     * @desc Get the currently displayed year title text
     * @returns {Promise<string>} The year title text exactly as it appears in the UI
     * @throws {Error} When the year title content is not accessible or null
     */
    getYearTitleText(): Promise<string>;
}
