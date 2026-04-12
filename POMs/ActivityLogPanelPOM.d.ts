/**
 * Page Object Model: ActivityLogPanel
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ActivityLogPanelPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_panelContainer;
    private readonly selector_streamingConnectedIcon;
    private readonly selector_streamingDisconnectedIcon;
    private readonly selector_refreshButton;
    private readonly selector_closeButton;
    private readonly selector_loadingIndicator;
    private readonly selector_emptyState;
    private readonly selector_errorMessage;
    private readonly selector_filterTab;
    private readonly selector_activityItemRow;
    private readonly selector_allActivityItemRows;
    constructor(page: Page);
    /**
     * @desc Checks if the ActivityLogPanel is currently visible/rendered
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the panel is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method to get an ActivityLogPanelPOM instance
     * Validates that the panel is visible before returning instance
     * @param page - Playwright Page instance
     * @returns {Promise<ActivityLogPanelPOM>} ActivityLogPanelPOM instance
     * @throws {Error} When the activity log panel is not visible
     */
    static getPOM(page: Page): Promise<ActivityLogPanelPOM>;
    /**
     * @desc Check whether the activity log panel container is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the panel is visible
     */
    isPanelVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the streaming connected icon (Wifi) is visible, indicating SSE is connected
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the streaming connected icon is visible (isStreaming === true)
     */
    isStreamingConnectedIconVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the streaming disconnected icon (WifiOff) is visible, indicating SSE is disconnected
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the streaming disconnected icon is visible (isStreaming === false)
     */
    isStreamingDisconnectedIconVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the loading indicator is visible (shown when isLoading is true and activities.length === 0)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading indicator is visible
     */
    isLoadingIndicatorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the empty state message is visible (shown when filteredActivities.length === 0 and not loading)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the empty state is visible
     */
    isEmptyStateVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the error message banner is visible (rendered when Redux error state is non-null)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the error message is visible
     */
    isErrorMessageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the refresh button is enabled (not disabled). It is disabled when isLoading === true.
     * @returns {Promise<boolean>} True if the refresh button is enabled
     */
    isRefreshButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether a specific activity log item row is visible in the panel
     * @param {string} activityId - The ID of the activity log item
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the activity item row is visible
     */
    isActivityItemRowVisible(activityId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Click the refresh button to manually re-fetch recent activity log entries
     * Expected outcome is that the activity log will be refreshed
     * @throws {Error} When the refresh button is not visible or not clickable
     */
    clickRefreshButton(): Promise<void>;
    /**
     * @desc Click the close button to dismiss the activity log panel via the onClose prop
     * Expected outcome is that the panel will be dismissed
     * @throws {Error} When the close button is not visible or not clickable
     */
    clickCloseButton(): Promise<void>;
    /**
     * @desc Click a filter tab to filter the activity list by status
     * Expected outcome is that the activity list will be filtered by the selected status
     * @param {'all' | 'ongoing' | 'success' | 'failed'} filterKey - The filter tab to click
     * @throws {Error} When the filter tab is not visible or not clickable
     */
    clickFilterTab(filterKey: 'all' | 'ongoing' | 'success' | 'failed'): Promise<void>;
    /**
     * @desc Scroll through the activity log list within the panel's scrollable content area
     * Expected outcome is that the panel scrolls to reveal more activity entries
     * @param {number} deltaY - The number of pixels to scroll vertically (positive = down)
     */
    scrollPanel(deltaY: number): Promise<void>;
    /**
     * @desc Click on an individual activity log item row to interact with it (e.g., expand error/metadata details)
     * Expected outcome is that the activity item row will be clicked (may expand details)
     * @param {string} activityId - The ID of the activity log item to click
     * @throws {Error} When the activity item row is not visible or not clickable
     */
    clickActivityItemRow(activityId: string): Promise<void>;
    /**
     * @desc Dismiss the panel by clicking outside of it (click-outside handler)
     * Expected outcome is that the panel will be dismissed via the click-outside handler
     */
    dismissByClickingOutside(): Promise<void>;
    /**
     * @desc Get the title attribute of the streaming connected icon to assert its connection state label
     * @returns {Promise<string>} The title attribute value (e.g., 'Connected')
     * @throws {Error} When the streaming connected icon title attribute is not accessible
     */
    getStreamingConnectedIconTitle(): Promise<string>;
    /**
     * @desc Get the title attribute of the streaming disconnected icon to assert its disconnection state label
     * @returns {Promise<string>} The title attribute value (e.g., 'Disconnected')
     * @throws {Error} When the streaming disconnected icon title attribute is not accessible
     */
    getStreamingDisconnectedIconTitle(): Promise<string>;
    /**
     * @desc Get the disabled attribute of the refresh button to assert its loading-disabled state
     * @returns {Promise<string | null>} The disabled attribute value, or null if not present
     */
    getRefreshButtonDisabledAttribute(): Promise<string | null>;
    /**
     * @desc Get the text content of the empty state message
     * @returns {Promise<string>} The empty state text exactly as it appears in the UI
     * @throws {Error} When the empty state text content is not accessible
     */
    getEmptyStateText(): Promise<string>;
    /**
     * @desc Get the text content of the loading indicator
     * @returns {Promise<string>} The loading indicator text exactly as it appears in the UI
     * @throws {Error} When the loading indicator text content is not accessible
     */
    getLoadingIndicatorText(): Promise<string>;
    /**
     * @desc Get the text content of the error message banner
     * @returns {Promise<string>} The error message text exactly as it appears in the UI
     * @throws {Error} When the error message text content is not accessible
     */
    getErrorMessageText(): Promise<string>;
    /**
     * @desc Get the label text of a specific filter tab button
     * @param {'all' | 'ongoing' | 'success' | 'failed'} filterKey - The filter tab key
     * @returns {Promise<string>} The filter tab label text exactly as it appears in the UI
     * @throws {Error} When the filter tab text content is not accessible
     */
    getFilterTabText(filterKey: 'all' | 'ongoing' | 'success' | 'failed'): Promise<string>;
    /**
     * @desc Get the CSS class list of a filter tab to determine if it is currently active
     * (e.g., presence of 'text-blue-600' and 'border-blue-600' indicates active state)
     * @param {'all' | 'ongoing' | 'success' | 'failed'} filterKey - The filter tab key
     * @returns {Promise<string[]>} Array of CSS class names on the filter tab element
     * @throws {Error} When the filter tab class attribute is not accessible
     */
    getFilterTabClassList(filterKey: 'all' | 'ongoing' | 'success' | 'failed'): Promise<string[]>;
    /**
     * @desc Get the full inner HTML of the panel container to inspect all rendered content
     * @returns {Promise<string>} The inner HTML of the panel container
     * @throws {Error} When the panel container inner HTML is not accessible
     */
    getPanelContainerInnerHtml(): Promise<string>;
    /**
     * @desc Get the full visible text content of an activity log item row (title, message, timestamp, duration, progress, etc.)
     * @param {string} activityId - The ID of the activity log item
     * @returns {Promise<string>} The text content of the activity item row exactly as it appears
     * @throws {Error} When the activity item row text content is not accessible
     */
    getActivityItemRowText(activityId: string): Promise<string>;
    /**
     * @desc Get the class attribute of an activity item row to assert its dynamic status-based background and border color classes
     * @param {string} activityId - The ID of the activity log item
     * @returns {Promise<string | null>} The class attribute value, or null if not present
     */
    getActivityItemRowClassAttribute(activityId: string): Promise<string | null>;
    /**
     * @desc Get the CSS class list of an activity item row to determine its status color
     * (bg-blue-50 = ONGOING, bg-green-50 = SUCCESS, bg-red-50 = FAILED, bg-gray-50 = CANCELLED/default)
     * @param {string} activityId - The ID of the activity log item
     * @returns {Promise<string[]>} Array of CSS class names on the activity item row
     * @throws {Error} When the activity item row class attribute is not accessible
     */
    getActivityItemRowClassList(activityId: string): Promise<string[]>;
    /**
     * @desc Count the total number of activity log item rows currently rendered in the panel
     * @returns {Promise<number>} The count of activity item rows
     */
    getActivityItemRowCount(): Promise<number>;
    /**
     * @desc Get the inner HTML of an activity log item row to inspect all rendered sub-elements
     * including status icon, progress bar, error details, and metadata
     * @param {string} activityId - The ID of the activity log item
     * @returns {Promise<string>} The inner HTML of the activity item row
     * @throws {Error} When the activity item row inner HTML is not accessible
     */
    getActivityItemRowInnerHtml(activityId: string): Promise<string>;
}
