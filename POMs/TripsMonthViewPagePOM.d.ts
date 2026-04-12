/**
 * Page Object Model: TripsMonthViewPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TripsMonthViewPagePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_pageContainer;
    private readonly selector_createTripModalRoot;
    private readonly selector_calendarWrapper;
    private readonly selector_tripEventBar;
    private readonly selector_dayCell;
    private readonly selector_monthTitle;
    private readonly selector_headerRow;
    private readonly selector_backLink;
    private readonly selector_prevMonthLink;
    private readonly selector_nextMonthLink;
    private readonly selector_createButton;
    private readonly selector_legendContainer;
    private readonly selector_legendItem;
    private readonly selector_allLegendItems;
    private readonly selector_loadingMessage;
    constructor(page: Page);
    /**
     * @desc Checks if the TripsMonthViewPage is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the month view page container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method to get a TripsMonthViewPagePOM instance
     * Validates that the month view page is visible before returning instance
     * @param page - Playwright Page instance
     * @returns {Promise<TripsMonthViewPagePOM>} TripsMonthViewPagePOM instance
     * @throws {Error} When the month view page container is not visible
     */
    static getPOM(page: Page): Promise<TripsMonthViewPagePOM>;
    /**
     * @desc Whether or not the root month view page container is visible on screen
     * @returns {Promise<boolean>} True if the page container is visible
     */
    isPageContainerVisible(): Promise<boolean>;
    /**
     * @desc Whether or not the create trip modal is currently visible/open
     * @returns {Promise<boolean>} True if the create trip modal is visible
     */
    isCreateTripModalVisible(): Promise<boolean>;
    /**
     * @desc Whether or not the calendar wrapper is visible (i.e. not in a loading state)
     * @returns {Promise<boolean>} True if the calendar wrapper is visible
     */
    isCalendarWrapperVisible(): Promise<boolean>;
    /**
     * @desc Whether or not a specific day cell is visible in the calendar by date
     * @param {string} date - The date string in yyyy-MM-dd format
     * @returns {Promise<boolean>} True if the day cell is visible
     */
    isDayCellVisible(date: string): Promise<boolean>;
    /**
     * @desc Whether or not a specific trip event bar is visible in the calendar by tripId
     * @param {string} tripId - The trip ID
     * @returns {Promise<boolean>} True if the trip event bar is visible
     */
    isTripEventBarVisible(tripId: string): Promise<boolean>;
    /**
     * @desc Whether or not the month title heading is visible
     * @returns {Promise<boolean>} True if the month title is visible
     */
    isMonthTitleVisible(): Promise<boolean>;
    /**
     * @desc Whether or not the 'New Trip' create button is enabled and not disabled
     * @returns {Promise<boolean>} True if the create button is enabled
     */
    isCreateButtonEnabled(): Promise<boolean>;
    /**
     * @desc Whether or not the trip legend container is visible
     * @returns {Promise<boolean>} True if the legend container is visible
     */
    isLegendContainerVisible(): Promise<boolean>;
    /**
     * @desc Whether or not a specific trip legend item is visible by tripId
     * @param {string} tripId - The trip ID
     * @returns {Promise<boolean>} True if the legend item is visible
     */
    isLegendItemVisible(tripId: string): Promise<boolean>;
    /**
     * @desc Whether or not the loading message indicator is currently visible
     * @returns {Promise<boolean>} True if the loading message is visible
     */
    isLoadingMessageVisible(): Promise<boolean>;
    /**
     * @desc Clicks the 'New Trip' create button to open the create trip modal
     * Expected outcome is that the create trip modal will open
     */
    clickCreateButton(): Promise<void>;
    /**
     * @desc Clicks the previous month navigation link
     * Expected outcome is that the page will navigate to the previous month
     */
    clickPrevMonthLink(): Promise<void>;
    /**
     * @desc Clicks the next month navigation link
     * Expected outcome is that the page will navigate to the next month
     */
    clickNextMonthLink(): Promise<void>;
    /**
     * @desc Clicks the back link to navigate to the year view
     * Expected outcome is that the page will navigate to /trips
     */
    clickBackLink(): Promise<void>;
    /**
     * @desc Clicks a FullCalendar day cell to open the trip detail modal if a trip exists on that day
     * @param {string} date - The date string in yyyy-MM-dd format
     * Expected outcome is that the trip detail modal will open if a trip exists on that day
     */
    clickDayCell(date: string): Promise<void>;
    /**
     * @desc Clicks a FullCalendar event bar to open the trip detail modal for the corresponding trip
     * @param {string} tripId - The trip ID
     * Expected outcome is that the trip detail modal will open for the corresponding trip
     */
    clickTripEventBar(tripId: string): Promise<void>;
    /**
     * @desc Clicks a specific trip legend button to open the trip detail modal for that trip
     * @param {string} tripId - The trip ID
     * Expected outcome is that the trip detail modal will open for the corresponding trip
     */
    clickLegendItem(tripId: string): Promise<void>;
    /**
     * @desc Clicks the legend container area to interact with individual trip legend buttons
     * Expected outcome is that the legend container area receives the click event
     */
    clickLegendContainer(): Promise<void>;
    /**
     * @desc Dismisses/closes the create trip modal by triggering its onClose handler
     * Expected outcome is that the create trip modal will close
     */
    dismissCreateTripModal(): Promise<void>;
    /**
     * @desc Gets the position and dimensions of the root month view page container
     * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>} Bounding box or null if not visible
     * @throws {Error} When the page container is not accessible
     */
    getPageContainerBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    } | null>;
    /**
     * @desc Gets the visible text content of a specific trip event bar (trip name) by tripId
     * @param {string} tripId - The trip ID
     * @returns {Promise<string>} The text content of the trip event bar exactly as it appears
     * @throws {Error} When the trip event bar text content is null or not accessible
     */
    getTripEventBarText(tripId: string): Promise<string>;
    /**
     * @desc Counts the total number of trip event bars rendered in the calendar
     * @returns {Promise<number>} The count of trip event bars
     */
    getTripEventBarCount(): Promise<number>;
    /**
     * @desc Gets the inner HTML of the calendar wrapper to inspect rendered FullCalendar markup
     * @returns {Promise<string>} The inner HTML of the calendar wrapper
     * @throws {Error} When the calendar wrapper inner HTML is not accessible
     */
    getCalendarWrapperInnerHtml(): Promise<string>;
    /**
     * @desc Gets the data-testid attribute of a specific trip event bar to confirm it is correctly mounted
     * @param {string} tripId - The trip ID
     * @returns {Promise<string>} The data-testid attribute value
     * @throws {Error} When the attribute is null or not accessible
     */
    getTripEventBarTestId(tripId: string): Promise<string>;
    /**
     * @desc Gets the data-testid attribute of a specific day cell to confirm it is correctly mounted
     * @param {string} date - The date string in yyyy-MM-dd format
     * @returns {Promise<string>} The data-testid attribute value
     * @throws {Error} When the attribute is null or not accessible
     */
    getDayCellTestId(date: string): Promise<string>;
    /**
     * @desc Gets the current month and year text displayed in the heading (e.g. 'January 2025')
     * @returns {Promise<string>} The month title text exactly as it appears
     * @throws {Error} When the month title text content is null or not accessible
     */
    getMonthTitleText(): Promise<string>;
    /**
     * @desc Gets the aria-label attribute value of the previous month navigation link for accessibility verification
     * @returns {Promise<string>} The aria-label attribute value
     * @throws {Error} When the attribute is null or not accessible
     */
    getPrevMonthLinkAriaLabel(): Promise<string>;
    /**
     * @desc Gets the href URL of the previous month navigation link to verify the target month
     * @returns {Promise<string>} The href URL of the previous month link
     * @throws {Error} When the href attribute is null or not accessible
     */
    getPrevMonthLinkHref(): Promise<string>;
    /**
     * @desc Gets the href URL of the next month navigation link to verify the target month
     * @returns {Promise<string>} The href URL of the next month link
     * @throws {Error} When the href attribute is null or not accessible
     */
    getNextMonthLinkHref(): Promise<string>;
    /**
     * @desc Gets the aria-label attribute value of the next month navigation link for accessibility verification
     * @returns {Promise<string>} The aria-label attribute value
     * @throws {Error} When the attribute is null or not accessible
     */
    getNextMonthLinkAriaLabel(): Promise<string>;
    /**
     * @desc Gets the href URL of the back link to confirm it points to /trips
     * @returns {Promise<string>} The href URL of the back link
     * @throws {Error} When the href attribute is null or not accessible
     */
    getBackLinkHref(): Promise<string>;
    /**
     * @desc Gets the visible text of the back link (e.g. 'Year View')
     * @returns {Promise<string>} The back link text exactly as it appears
     * @throws {Error} When the back link text content is null or not accessible
     */
    getBackLinkText(): Promise<string>;
    /**
     * @desc Gets the visible text of the 'New Trip' create button
     * @returns {Promise<string>} The create button text exactly as it appears
     * @throws {Error} When the create button text content is null or not accessible
     */
    getCreateButtonText(): Promise<string>;
    /**
     * @desc Counts the number of trip legend items rendered in the legend list
     * @returns {Promise<number>} The count of legend items
     */
    getLegendItemCount(): Promise<number>;
    /**
     * @desc Gets the visible text of a specific trip legend item (trip name and location) by tripId
     * @param {string} tripId - The trip ID
     * @returns {Promise<string>} The legend item text exactly as it appears
     * @throws {Error} When the legend item text content is null or not accessible
     */
    getLegendItemText(tripId: string): Promise<string>;
    /**
     * @desc Gets a list of text content from all trip legend items to verify all trips are represented
     * @returns {Promise<string[]>} Array of legend item text values exactly as they appear
     * @throws {Error} When any legend item text content is null
     */
    getAllLegendItemTexts(): Promise<string[]>;
    /**
     * @desc Gets the text content of the loading indicator (e.g. 'Loading...')
     * @returns {Promise<string>} The loading message text exactly as it appears
     * @throws {Error} When the loading message text content is null or not accessible
     */
    getLoadingMessageText(): Promise<string>;
}
