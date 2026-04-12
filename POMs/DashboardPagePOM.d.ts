/**
 * Page Object Model: DashboardPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class DashboardPagePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_dashboardContainer;
    private readonly selector_pageTitle;
    private readonly selector_pageHeaderContainer;
    private readonly selector_metricsSectionContainer;
    private readonly selector_metricCard;
    private readonly selector_filterBarContainer;
    private readonly selector_resetFiltersButton;
    private readonly selector_applyFiltersButton;
    private readonly selector_dateRangePicker;
    private readonly selector_chartsSectionContainer;
    private readonly selector_chartWidget;
    private readonly selector_recentActivityList;
    private readonly selector_recentActivityContainer;
    private readonly selector_activityItem;
    constructor(page: Page);
    /**
     * @desc Checks if the Dashboard page is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the dashboard page container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a DashboardPagePOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<DashboardPagePOM>} A DashboardPagePOM instance
     * @throws {Error} When the dashboard page container is not visible
     */
    static getPOM(page: Page): Promise<DashboardPagePOM>;
    /**
     * @desc Check whether the main dashboard page container is visible
     * @returns {Promise<boolean>} True if the dashboard container is visible
     */
    isDashboardContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the dashboard header section is visible on screen
     * @returns {Promise<boolean>} True if the page header container is visible
     */
    isPageHeaderVisible(): Promise<boolean>;
    /**
     * @desc Check whether the metrics section is visible on the dashboard
     * @returns {Promise<boolean>} True if the metrics section container is visible
     */
    isMetricsSectionVisible(): Promise<boolean>;
    /**
     * @desc Check whether the filter bar is visible on the dashboard
     * @returns {Promise<boolean>} True if the filter bar container is visible
     */
    isFilterBarVisible(): Promise<boolean>;
    /**
     * @desc Check whether the charts section is visible on the dashboard
     * @returns {Promise<boolean>} True if the charts section container is visible
     */
    isChartsSectionVisible(): Promise<boolean>;
    /**
     * @desc Check whether the recent activity section is visible on the dashboard
     * @returns {Promise<boolean>} True if the recent activity container is visible
     */
    isRecentActivitySectionVisible(): Promise<boolean>;
    /**
     * @desc Check whether the Reset Filters button is currently enabled
     * @returns {Promise<boolean>} True if the reset filters button is enabled
     */
    isResetFiltersButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the Apply Filters button is currently enabled
     * @returns {Promise<boolean>} True if the apply filters button is enabled
     */
    isApplyFiltersButtonEnabled(): Promise<boolean>;
    /**
     * @desc Scroll within the main dashboard container to reveal off-screen content
     * Expected outcome is that off-screen content becomes visible
     * @param scrollY - The number of pixels to scroll vertically
     */
    scrollDashboardContainer(scrollY: number): Promise<void>;
    /**
     * @desc Click an individual metric card by its metricId to navigate or expand details
     * Expected outcome is that the metric card detail view opens or navigation occurs
     * @param metricId - The unique identifier of the metric card
     */
    clickMetricCard(metricId: string): Promise<void>;
    /**
     * @desc Click the Reset Filters button to restore all filters to their default state
     * Expected outcome is that all dashboard filters are reset to defaults
     */
    clickResetFiltersButton(): Promise<void>;
    /**
     * @desc Click the filter bar container to interact with filter controls
     * Expected outcome is that the filter bar becomes active or a dropdown opens
     */
    clickFilterBarContainer(): Promise<void>;
    /**
     * @desc Click the Apply Filters button to apply the currently selected filters
     * Expected outcome is that the dashboard data is filtered according to current selections
     */
    clickApplyFiltersButton(): Promise<void>;
    /**
     * @desc Fill in the date range picker input to filter dashboard data by date
     * Expected outcome is that the date range picker reflects the provided value
     * @param dateRange - The date range string to enter into the picker
     */
    fillDateRangePicker(dateRange: string): Promise<void>;
    /**
     * @desc Click an individual chart widget by its chartId to interact with or expand the chart
     * Expected outcome is that the chart widget is interacted with or expanded
     * @param chartId - The unique identifier of the chart widget
     */
    clickChartWidget(chartId: string): Promise<void>;
    /**
     * @desc Click an individual activity item row by its activityId to view details
     * Expected outcome is that the activity detail view opens
     * @param activityId - The unique identifier of the activity item
     */
    clickActivityItem(activityId: string): Promise<void>;
    /**
     * @desc Get the CSS class list of the main dashboard container to detect state-based styling
     * @returns {Promise<string>} The full className string of the dashboard container
     * @throws {Error} When the dashboard container class list is not accessible
     */
    getDashboardContainerClassList(): Promise<string>;
    /**
     * @desc Extract the main title/heading text displayed on the dashboard
     * @returns {Promise<string>} The page title text exactly as it appears in the UI
     * @throws {Error} When the page title content is not accessible or null
     */
    getPageTitleText(): Promise<string>;
    /**
     * @desc Count the total number of metric cards currently rendered in the metrics section
     * @returns {Promise<number>} The count of metric cards in the metrics section
     */
    getMetricCardCount(): Promise<number>;
    /**
     * @desc Extract the visible text content of a specific metric card by metricId
     * @param metricId - The unique identifier of the metric card
     * @returns {Promise<string>} The text content of the metric card exactly as it appears
     * @throws {Error} When the metric card text content is not accessible or null
     */
    getMetricCardText(metricId: string): Promise<string>;
    /**
     * @desc Extract the numeric or string value displayed on a specific metric card via the data-value attribute
     * @param metricId - The unique identifier of the metric card
     * @returns {Promise<string>} The data-value attribute of the metric card
     * @throws {Error} When the data-value attribute is not accessible or null
     */
    getMetricCardValue(metricId: string): Promise<string>;
    /**
     * @desc Extract the status indicator (e.g., up, down, neutral) of a specific metric card via the data-status attribute
     * @param metricId - The unique identifier of the metric card
     * @returns {Promise<string>} The data-status attribute of the metric card
     * @throws {Error} When the data-status attribute is not accessible or null
     */
    getMetricCardStatus(metricId: string): Promise<string>;
    /**
     * @desc Get the currently selected date range value from the date range picker input
     * @returns {Promise<string>} The current value of the date range picker
     * @throws {Error} When the date range picker value is not accessible or null
     */
    getDateRangePickerValue(): Promise<string>;
    /**
     * @desc Count the total number of chart widgets currently rendered in the charts section
     * @returns {Promise<number>} The count of chart widgets in the charts section
     */
    getChartWidgetCount(): Promise<number>;
    /**
     * @desc Extract the chart type (e.g., bar, line, pie) from a specific chart widget via the data-chart-type attribute
     * @param chartId - The unique identifier of the chart widget
     * @returns {Promise<string>} The data-chart-type attribute of the chart widget
     * @throws {Error} When the data-chart-type attribute is not accessible or null
     */
    getChartWidgetType(chartId: string): Promise<string>;
    /**
     * @desc Count the total number of activity items currently rendered in the recent activity list
     * @returns {Promise<number>} The count of activity items in the recent activity list
     */
    getActivityItemCount(): Promise<number>;
    /**
     * @desc Extract the status (e.g., completed, pending) of a specific activity item via the data-status attribute
     * @param activityId - The unique identifier of the activity item
     * @returns {Promise<string>} The data-status attribute of the activity item
     * @throws {Error} When the data-status attribute is not accessible or null
     */
    getActivityItemStatus(activityId: string): Promise<string>;
    /**
     * @desc Extract the type/category of a specific activity item via the data-activity-type attribute
     * @param activityId - The unique identifier of the activity item
     * @returns {Promise<string>} The data-activity-type attribute of the activity item
     * @throws {Error} When the data-activity-type attribute is not accessible or null
     */
    getActivityItemType(activityId: string): Promise<string>;
    /**
     * @desc Extract the visible text content of a specific activity item row by activityId
     * @param activityId - The unique identifier of the activity item
     * @returns {Promise<string>} The text content of the activity item exactly as it appears
     * @throws {Error} When the activity item text content is not accessible or null
     */
    getActivityItemText(activityId: string): Promise<string>;
    /**
     * @desc Get a list of all visible text values from all activity item rows in the recent activity list
     * @returns {Promise<string[]>} An array of text content strings from all activity items, exactly as they appear
     */
    getAllActivityItemTexts(): Promise<string[]>;
}
