/**
 * Page Object Model: TripsYearView
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TripsYearViewPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_tripsYearViewContainer;
    private readonly selector_tripsHeader;
    private readonly selector_tripsBackLink;
    private readonly selector_tripsPrevYearButton;
    private readonly selector_tripsYearTitle;
    private readonly selector_tripsNextYearButton;
    private readonly selector_tripsCreateButton;
    private readonly selector_tripsLoading;
    private readonly selector_tripsYearGrid;
    private readonly selector_tripsSummary;
    private readonly selector_createTripModalRoot;
    private readonly selector_emptyStateLabel;
    private readonly selector_monthNameHeading;
    private readonly selector_overflowCountLabel;
    private readonly selector_tripsMonthBox;
    private readonly selector_tripPill;
    constructor(page: Page);
    /**
     * @desc Checks if the Trips Year View page is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the trips year view is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a TripsYearViewPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TripsYearViewPOM>} TripsYearViewPOM instance
     * @throws {Error} When the trips year view container is not visible
     */
    static getPOM(page: Page): Promise<TripsYearViewPOM>;
    /**
     * @desc Whether or not the trips year view container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the container is visible
     */
    isTripsYearViewContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the loading indicator is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading indicator is visible
     */
    isTripsLoadingVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the year grid is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the year grid is visible
     */
    isTripsYearGridVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the trips summary text is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the summary is visible
     */
    isTripsSummaryVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the create trip modal is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the create trip modal is visible
     */
    isCreateTripModalVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not a specific month box is visible
     * @param {string} monthKey - The month key in yyyy-MM format (e.g. "2024-03")
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the month box is visible
     */
    isMonthBoxVisible(monthKey: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not a specific trip pill is visible
     * @param {string} tripId - The trip ID
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the trip pill is visible
     */
    isTripPillVisible(tripId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the back link to navigate to the Dashboard
     * Expected outcome is that the browser navigates to /
     */
    clickTripsBackLink(): Promise<void>;
    /**
     * @desc Clicks the previous year button to decrement the displayed year
     * Expected outcome is that the year title decrements by one and trips reload
     */
    clickTripsPrevYearButton(): Promise<void>;
    /**
     * @desc Clicks the next year button to increment the displayed year
     * Expected outcome is that the year title increments by one and trips reload
     */
    clickTripsNextYearButton(): Promise<void>;
    /**
     * @desc Clicks the New Trip button to open the create trip modal
     * Expected outcome is that the create trip modal becomes visible
     */
    clickTripsCreateButton(): Promise<void>;
    /**
     * @desc Clicks a month box cell to navigate to the month detail view
     * Expected outcome is that the browser navigates to /trips/{monthKey}
     * @param {string} monthKey - The month key in yyyy-MM format (e.g. "2024-03")
     */
    clickTripsMonthBox(monthKey: string): Promise<void>;
    /**
     * @desc Clicks a trip pill inside a month box to open the TripDetailModal
     * Expected outcome is that the TripDetailModal becomes visible for the selected trip
     * @param {string} tripId - The trip ID corresponding to the pill
     */
    clickTripPill(tripId: string): Promise<void>;
    /**
     * @desc Gets the currently displayed year from the year title heading
     * @returns {Promise<string>} The year text exactly as it appears in the UI
     * @throws {Error} When the year title content is not accessible or null
     */
    getTripsYearTitle(): Promise<string>;
    /**
     * @desc Gets the trips summary text rendered below the grid
     * @returns {Promise<string>} The summary text exactly as it appears in the UI
     * @throws {Error} When the summary content is not accessible or null
     */
    getTripsSummaryText(): Promise<string>;
    /**
     * @desc Gets the title attribute of a trip pill (carries trip name and location)
     * @param {string} tripId - The trip ID corresponding to the pill
     * @returns {Promise<string>} The title attribute value exactly as it appears
     * @throws {Error} When the trip pill is not found or the title attribute is null
     */
    getTripPillTitle(tripId: string): Promise<string>;
    /**
     * @desc Gets the month name heading text from a specific month box
     * @param {string} monthKey - The month key in yyyy-MM format (e.g. "2024-03")
     * @returns {Promise<string>} The month name text exactly as it appears
     * @throws {Error} When the month heading content is not accessible or null
     */
    getMonthNameHeading(monthKey: string): Promise<string>;
    /**
     * @desc Gets the overflow count label text from a specific month box (e.g. "+2 more")
     * @param {string} monthKey - The month key in yyyy-MM format (e.g. "2024-03")
     * @returns {Promise<string>} The overflow label text exactly as it appears
     * @throws {Error} When the overflow label content is not accessible or null
     */
    getOverflowCountLabel(monthKey: string): Promise<string>;
    /**
     * @desc Gets the empty state label text from a specific month box (e.g. "No trips")
     * @param {string} monthKey - The month key in yyyy-MM format (e.g. "2024-03")
     * @returns {Promise<string>} The empty state label text exactly as it appears
     * @throws {Error} When the empty state label content is not accessible or null
     */
    getEmptyStateLabelText(monthKey: string): Promise<string>;
}
