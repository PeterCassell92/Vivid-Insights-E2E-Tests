/**
 * Page Object Model: TripsMonthView
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TripsMonthViewPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_tripsMonthViewContainer;
    private readonly selector_pageHeader;
    private readonly selector_nextMonthLink;
    private readonly selector_prevMonthLink;
    private readonly selector_createTripButton;
    private readonly selector_monthTitle;
    private readonly selector_backLink;
    private readonly selector_calendarContainer;
    private readonly selector_loadingIndicator;
    private readonly selector_createTripModal;
    private readonly selector_tripsLegend;
    private readonly selector_calendarDayCell;
    private readonly selector_tripEventBar;
    private readonly selector_tripLegendItem;
    constructor(page: Page);
    /**
     * @desc Checks if the TripsMonthView page is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the month view root container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method to get a TripsMonthViewPOM instance
     * Validates that the month view page is visible before returning instance
     * @param page - Playwright Page instance
     * @returns {Promise<TripsMonthViewPOM>} TripsMonthViewPOM instance
     * @throws {Error} When the month view root container is not visible
     */
    static getPOM(page: Page): Promise<TripsMonthViewPOM>;
    /**
     * @desc Check whether the root month view container is visible on screen
     * @returns {Promise<boolean>} True if the trips month view container is visible
     */
    isTripsMonthViewVisible(): Promise<boolean>;
    /**
     * @desc Check whether the page header bar containing navigation controls is visible
     * @returns {Promise<boolean>} True if the page header is visible
     */
    isPageHeaderVisible(): Promise<boolean>;
    /**
     * @desc Check whether the FullCalendar container is visible (only rendered when loading is false)
     * @returns {Promise<boolean>} True if the calendar container is visible
     */
    isCalendarContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the loading indicator is visible (only shown while trips data is loading)
     * @returns {Promise<boolean>} True if the loading indicator is visible
     */
    isLoadingIndicatorVisible(): Promise<boolean>;
    /**
     * @desc Check whether the New Trip create modal is currently visible/open
     * @returns {Promise<boolean>} True if the create trip modal is visible
     */
    isCreateTripModalVisible(): Promise<boolean>;
    /**
     * @desc Check whether the trips legend is visible (only rendered when not loading and trips.length > 0)
     * @returns {Promise<boolean>} True if the trips legend is visible
     */
    isTripsLegendVisible(): Promise<boolean>;
    /**
     * @desc Clicks the back link to navigate to the year view (/trips)
     * Expected outcome is that the browser navigates to the trips year view
     */
    clickBackLink(): Promise<void>;
    /**
     * @desc Clicks the previous month navigation link
     * Expected outcome is that the browser navigates to the previous month's detail page
     */
    clickPrevMonthLink(): Promise<void>;
    /**
     * @desc Clicks the next month navigation link
     * Expected outcome is that the browser navigates to the next month's detail page
     */
    clickNextMonthLink(): Promise<void>;
    /**
     * @desc Clicks the 'New Trip' create button to open the create trip modal
     * Expected outcome is that the create trip modal becomes visible
     */
    clickCreateTripButton(): Promise<void>;
    /**
     * @desc Clicks a specific trip event bar in the calendar by trip ID
     * Expected outcome is that the trip detail modal opens for the selected trip
     * @param {string} tripId - The ID of the trip whose event bar to click
     */
    clickTripEventBar(tripId: string): Promise<void>;
    /**
     * @desc Clicks a specific day cell in the calendar by date string
     * Expected outcome is that if a trip exists on that day, the trip detail modal opens
     * @param {string} date - The date string in yyyy-MM-dd format
     */
    clickCalendarDayCell(date: string): Promise<void>;
    /**
     * @desc Clicks a trip legend item by trip ID
     * Expected outcome is that the trip detail modal opens for the selected trip
     * @param {string} tripId - The ID of the trip whose legend item to click
     */
    clickTripLegendItem(tripId: string): Promise<void>;
    /**
     * @desc Submit the New Trip form within the modal to create a new trip
     * Confirms/submits the create trip modal form
     * Expected outcome is that the trip is created and the modal closes
     * @throws {Error} When the create trip modal is not visible
     */
    confirmCreateTripModal(): Promise<void>;
    /**
     * @desc Dismiss/close the New Trip create modal, setting showCreateModal state to false
     * Expected outcome is that the create trip modal is no longer visible
     * @throws {Error} When the create trip modal is not visible
     */
    dismissCreateTripModal(): Promise<void>;
    /**
     * @desc Get the text content of the month title element
     * @returns {Promise<string>} The month title text exactly as it appears in the UI
     * @throws {Error} When the month title content is not accessible or null
     */
    getMonthTitleText(): Promise<string>;
    /**
     * @desc Get the text content of the loading indicator element
     * @returns {Promise<string>} The loading indicator text exactly as it appears in the UI
     * @throws {Error} When the loading indicator content is not accessible or null
     */
    getLoadingIndicatorText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the calendar container to inspect rendered calendar structure
     * @returns {Promise<string>} The inner HTML of the calendar container
     * @throws {Error} When the calendar container is not visible or inner HTML is not accessible
     */
    getCalendarContainerInnerHtml(): Promise<string>;
    /**
     * @desc Get the inner HTML of the create trip modal to inspect its form contents
     * @returns {Promise<string>} The inner HTML of the create trip modal
     * @throws {Error} When the create trip modal is not visible or inner HTML is not accessible
     */
    getCreateTripModalInnerHtml(): Promise<string>;
    /**
     * @desc Count the number of legend items rendered in the trips legend container
     * @returns {Promise<number>} The count of trip legend items currently rendered
     */
    getTripsLegendItemCount(): Promise<number>;
}
