/**
 * Page Object Model: ThisMonthsEventsManagerContent
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ThisMonthsEventsManagerContentPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_eventsManagerContainer;
    private readonly selector_headerSection;
    private readonly selector_headerTitle;
    private readonly selector_filterBar;
    private readonly selector_decisionPathFilterLabel;
    private readonly selector_decisionPathFilter;
    private readonly selector_decisionPathAllOption;
    private readonly selector_decisionPathNoneOption;
    private readonly selector_eventsListArea;
    private readonly selector_eventsListContainer;
    private readonly selector_loadingIndicator;
    private readonly selector_emptyState;
    private readonly selector_noMatchesState;
    private readonly selector_decisionPathOption;
    private readonly selector_projectionEventCard;
    constructor(page: Page);
    /**
     * @desc Checks if the ThisMonthsEventsManagerContent panel is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the root container is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a POM instance
     * @param page - Playwright Page instance
     * @returns {Promise<ThisMonthsEventsManagerContentPOM>} POM instance
     * @throws {Error} When the events manager container is not visible
     */
    static getPOM(page: Page): Promise<ThisMonthsEventsManagerContentPOM>;
    /**
     * @desc Whether or not the root events manager container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the container is visible
     */
    isEventsManagerContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the scrollable events list area is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the events list area is visible
     */
    isEventsListAreaVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the decision path filter bar is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the filter bar is visible
     */
    isFilterBarVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the header section bar is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the header section is visible
     */
    isHeaderSectionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the loading indicator is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading indicator is visible
     */
    isLoadingIndicatorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the empty state message is visible (no events for this month)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the empty state is visible
     */
    isEmptyStateVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the no-matches state message is visible (events exist but none match filters)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the no-matches state is visible
     */
    isNoMatchesStateVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not a specific projection event card is visible
     * @param {string} eventId - The ID of the projection event
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the event card is visible
     */
    isProjectionEventCardVisible(eventId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Scrolls within the events list area
     * Expected outcome is that additional event cards become visible if the list overflows
     * @param {number} deltaY - Pixels to scroll vertically (positive = down, negative = up)
     */
    scrollEventsListArea(deltaY: number): Promise<void>;
    /**
     * @desc Clicks within the events list area
     * Expected outcome is that child elements within the list area respond to the click
     */
    clickEventsListArea(): Promise<void>;
    /**
     * @desc Scrolls within the filter bar area
     * Expected outcome is that overflowing filter bar content becomes accessible
     * @param {number} deltaY - Pixels to scroll vertically (positive = down, negative = up)
     */
    scrollFilterBar(deltaY: number): Promise<void>;
    /**
     * @desc Selects a value in the decision path filter dropdown
     * Expected outcome is that the events list is filtered to show only events matching the selected decision path
     * @param {'all' | 'none'} value - The filter value to select
     */
    selectDecisionPathFilter(value: 'all' | 'none'): Promise<void>;
    /**
     * @desc Selects a specific decision path by its ID in the decision path filter dropdown
     * Expected outcome is that the events list is filtered to show only events on the specified decision path
     * @param {string} pathId - The ID of the decision path to filter by
     */
    selectDecisionPathFilterById(pathId: string): Promise<void>;
    /**
     * @desc Double-clicks a projection event card to open the edit modal
     * Expected outcome is that the ProjectionEventEditModal opens for the specified event
     * @param {string} eventId - The ID of the projection event to edit
     */
    doubleClickProjectionEventCard(eventId: string): Promise<void>;
    /**
     * @desc Gets the data-testid attribute value of the root component wrapper
     * @returns {Promise<string>} The data-testid attribute value exactly as it appears
     * @throws {Error} When the attribute is not accessible or null
     */
    getEventsManagerContainerTestId(): Promise<string>;
    /**
     * @desc Gets the bounding box of the scrollable events list area to verify layout dimensions
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the events list area
     * @throws {Error} When the events list area is not visible or bounding box cannot be retrieved
     */
    getEventsListAreaBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Gets a list of all option values currently available in the decision path filter dropdown
     * @returns {Promise<string[]>} Array of option values from the decision path filter
     * @throws {Error} When the decision path filter is not accessible
     */
    getDecisionPathFilterOptions(): Promise<string[]>;
    /**
     * @desc Gets the currently selected value of the decision path filter dropdown
     * @returns {Promise<string>} The currently selected option value exactly as it appears
     * @throws {Error} When the decision path filter is not accessible or value is null
     */
    getSelectedDecisionPathFilterValue(): Promise<string>;
    /**
     * @desc Gets the inner HTML of the header section to inspect icon, title, and subtitle content
     * @returns {Promise<string>} The inner HTML of the header section exactly as it appears
     * @throws {Error} When the header section is not accessible or inner HTML is null
     */
    getHeaderSectionInnerHtml(): Promise<string>;
    /**
     * @desc Gets the text content of the header title
     * @returns {Promise<string>} The header title text exactly as it appears
     * @throws {Error} When the header title is not accessible or text content is null
     */
    getHeaderTitleText(): Promise<string>;
}
