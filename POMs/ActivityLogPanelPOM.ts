/**
 * Page Object Model: ActivityLogPanel
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ActivityLogPanelPOM_StandardSelector = '[data-testid="activity-log-panel"]';

export class ActivityLogPanelPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_panelContainer: string;
  private readonly selector_streamingConnectedIcon: string;
  private readonly selector_streamingDisconnectedIcon: string;
  private readonly selector_refreshButton: string;
  private readonly selector_closeButton: string;
  private readonly selector_loadingIndicator: string;
  private readonly selector_emptyState: string;
  private readonly selector_errorMessage: string;
  private readonly selector_filterTab: (filterKey: 'all' | 'ongoing' | 'success' | 'failed') => string;
  private readonly selector_activityItemRow: (activityId: string) => string;
  private readonly selector_allActivityItemRows: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = ActivityLogPanelPOM_StandardSelector;

    // Static selectors
    this.selector_panelContainer = this.rootSelector;
    this.selector_streamingConnectedIcon = `${this.rootSelector} [data-testid="activity-log-streaming-connected"]`;
    this.selector_streamingDisconnectedIcon = `${this.rootSelector} [data-testid="activity-log-streaming-disconnected"]`;
    this.selector_refreshButton = `${this.rootSelector} [data-testid="activity-log-refresh-button"]`;
    this.selector_closeButton = `${this.rootSelector} [data-testid="activity-log-close-button"]`;
    this.selector_loadingIndicator = `${this.rootSelector} [data-testid="activity-log-loading"]`;
    this.selector_emptyState = `${this.rootSelector} [data-testid="activity-log-empty"]`;
    this.selector_errorMessage = `${this.rootSelector} [data-testid="activity-log-error"]`;
    this.selector_allActivityItemRows = `${this.rootSelector} [data-testid^="activity-log-item__"]`;

    // Dynamic selector functions
    this.selector_filterTab = (filterKey: 'all' | 'ongoing' | 'success' | 'failed') =>
      `${this.rootSelector} [data-testid="activity-log-filter__${filterKey}"]`;

    this.selector_activityItemRow = (activityId: string) =>
      `${this.rootSelector} [data-testid="activity-log-item__${activityId}"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the ActivityLogPanel is currently visible/rendered
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the panel is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const panel = page.locator(ActivityLogPanelPOM_StandardSelector);
      return await panel.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method to get an ActivityLogPanelPOM instance
   * Validates that the panel is visible before returning instance
   * @param page - Playwright Page instance
   * @returns {Promise<ActivityLogPanelPOM>} ActivityLogPanelPOM instance
   * @throws {Error} When the activity log panel is not visible
   */
  static async getPOM(page: Page): Promise<ActivityLogPanelPOM> {
    const isVisible = await ActivityLogPanelPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ActivityLogPanelPOM: Cannot instantiate - activity log panel is not visible. ' +
        `Expected element [${ActivityLogPanelPOM_StandardSelector}] to be visible. ` +
        'Ensure the panel is open (isOpen === true) before calling getPOM().'
      );
    }

    return new ActivityLogPanelPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the activity log panel container is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the panel is visible
   */
  async isPanelVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_panelContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the streaming connected icon (Wifi) is visible, indicating SSE is connected
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the streaming connected icon is visible (isStreaming === true)
   */
  async isStreamingConnectedIconVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_streamingConnectedIcon).isVisible({ timeout });
  }

  /**
   * @desc Check whether the streaming disconnected icon (WifiOff) is visible, indicating SSE is disconnected
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the streaming disconnected icon is visible (isStreaming === false)
   */
  async isStreamingDisconnectedIconVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_streamingDisconnectedIcon).isVisible({ timeout });
  }

  /**
   * @desc Check whether the loading indicator is visible (shown when isLoading is true and activities.length === 0)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading indicator is visible
   */
  async isLoadingIndicatorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_loadingIndicator).isVisible({ timeout });
  }

  /**
   * @desc Check whether the empty state message is visible (shown when filteredActivities.length === 0 and not loading)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the empty state is visible
   */
  async isEmptyStateVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_emptyState).isVisible({ timeout });
  }

  /**
   * @desc Check whether the error message banner is visible (rendered when Redux error state is non-null)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the error message is visible
   */
  async isErrorMessageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_errorMessage).isVisible({ timeout });
  }

  /**
   * @desc Check whether the refresh button is enabled (not disabled). It is disabled when isLoading === true.
   * @returns {Promise<boolean>} True if the refresh button is enabled
   */
  async isRefreshButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_refreshButton).isEnabled();
  }

  /**
   * @desc Check whether a specific activity log item row is visible in the panel
   * @param {string} activityId - The ID of the activity log item
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the activity item row is visible
   */
  async isActivityItemRowVisible(activityId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_activityItemRow(activityId)).isVisible({ timeout });
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Click the refresh button to manually re-fetch recent activity log entries
   * Expected outcome is that the activity log will be refreshed
   * @throws {Error} When the refresh button is not visible or not clickable
   */
  async clickRefreshButton(): Promise<void> {
    await this.page.locator(this.selector_refreshButton).click();
  }

  /**
   * @desc Click the close button to dismiss the activity log panel via the onClose prop
   * Expected outcome is that the panel will be dismissed
   * @throws {Error} When the close button is not visible or not clickable
   */
  async clickCloseButton(): Promise<void> {
    await this.page.locator(this.selector_closeButton).click();
  }

  /**
   * @desc Click a filter tab to filter the activity list by status
   * Expected outcome is that the activity list will be filtered by the selected status
   * @param {'all' | 'ongoing' | 'success' | 'failed'} filterKey - The filter tab to click
   * @throws {Error} When the filter tab is not visible or not clickable
   */
  async clickFilterTab(filterKey: 'all' | 'ongoing' | 'success' | 'failed'): Promise<void> {
    await this.page.locator(this.selector_filterTab(filterKey)).click();
  }

  /**
   * @desc Scroll through the activity log list within the panel's scrollable content area
   * Expected outcome is that the panel scrolls to reveal more activity entries
   * @param {number} deltaY - The number of pixels to scroll vertically (positive = down)
   */
  async scrollPanel(deltaY: number): Promise<void> {
    await this.page.locator(this.selector_panelContainer).hover();
    await this.page.mouse.wheel(0, deltaY);
  }

  /**
   * @desc Click on an individual activity log item row to interact with it (e.g., expand error/metadata details)
   * Expected outcome is that the activity item row will be clicked (may expand details)
   * @param {string} activityId - The ID of the activity log item to click
   * @throws {Error} When the activity item row is not visible or not clickable
   */
  async clickActivityItemRow(activityId: string): Promise<void> {
    await this.page.locator(this.selector_activityItemRow(activityId)).click();
  }

  /**
   * @desc Dismiss the panel by clicking outside of it (click-outside handler)
   * Expected outcome is that the panel will be dismissed via the click-outside handler
   */
  async dismissByClickingOutside(): Promise<void> {
    await this.page.mouse.click(0, 0);
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Get the title attribute of the streaming connected icon to assert its connection state label
   * @returns {Promise<string>} The title attribute value (e.g., 'Connected')
   * @throws {Error} When the streaming connected icon title attribute is not accessible
   */
  async getStreamingConnectedIconTitle(): Promise<string> {
    const element = this.page.locator(this.selector_streamingConnectedIcon);
    await element.isVisible();
    const title = await element.getAttribute('title');

    if (title === null) {
      throw new Error(
        `ActivityLogPanelPOM: title attribute is null on streaming connected icon. Selector: ${this.selector_streamingConnectedIcon}`
      );
    }

    return title;
  }

  /**
   * @desc Get the title attribute of the streaming disconnected icon to assert its disconnection state label
   * @returns {Promise<string>} The title attribute value (e.g., 'Disconnected')
   * @throws {Error} When the streaming disconnected icon title attribute is not accessible
   */
  async getStreamingDisconnectedIconTitle(): Promise<string> {
    const element = this.page.locator(this.selector_streamingDisconnectedIcon);
    await element.isVisible();
    const title = await element.getAttribute('title');

    if (title === null) {
      throw new Error(
        `ActivityLogPanelPOM: title attribute is null on streaming disconnected icon. Selector: ${this.selector_streamingDisconnectedIcon}`
      );
    }

    return title;
  }

  /**
   * @desc Get the disabled attribute of the refresh button to assert its loading-disabled state
   * @returns {Promise<string | null>} The disabled attribute value, or null if not present
   */
  async getRefreshButtonDisabledAttribute(): Promise<string | null> {
    return await this.page.locator(this.selector_refreshButton).getAttribute('disabled');
  }

  /**
   * @desc Get the text content of the empty state message
   * @returns {Promise<string>} The empty state text exactly as it appears in the UI
   * @throws {Error} When the empty state text content is not accessible
   */
  async getEmptyStateText(): Promise<string> {
    await this.page.locator(this.selector_emptyState).isVisible();
    const text = await this.page.locator(this.selector_emptyState).textContent();

    if (text === null) {
      throw new Error(
        `ActivityLogPanelPOM: empty state text content is null. Selector: ${this.selector_emptyState}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text content of the loading indicator
   * @returns {Promise<string>} The loading indicator text exactly as it appears in the UI
   * @throws {Error} When the loading indicator text content is not accessible
   */
  async getLoadingIndicatorText(): Promise<string> {
    await this.page.locator(this.selector_loadingIndicator).isVisible();
    const text = await this.page.locator(this.selector_loadingIndicator).textContent();

    if (text === null) {
      throw new Error(
        `ActivityLogPanelPOM: loading indicator text content is null. Selector: ${this.selector_loadingIndicator}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text content of the error message banner
   * @returns {Promise<string>} The error message text exactly as it appears in the UI
   * @throws {Error} When the error message text content is not accessible
   */
  async getErrorMessageText(): Promise<string> {
    await this.page.locator(this.selector_errorMessage).isVisible();
    const text = await this.page.locator(this.selector_errorMessage).textContent();

    if (text === null) {
      throw new Error(
        `ActivityLogPanelPOM: error message text content is null. Selector: ${this.selector_errorMessage}`
      );
    }

    return text;
  }

  /**
   * @desc Get the label text of a specific filter tab button
   * @param {'all' | 'ongoing' | 'success' | 'failed'} filterKey - The filter tab key
   * @returns {Promise<string>} The filter tab label text exactly as it appears in the UI
   * @throws {Error} When the filter tab text content is not accessible
   */
  async getFilterTabText(filterKey: 'all' | 'ongoing' | 'success' | 'failed'): Promise<string> {
    const selector = this.selector_filterTab(filterKey);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `ActivityLogPanelPOM: filter tab text content is null for filterKey "${filterKey}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the CSS class list of a filter tab to determine if it is currently active
   * (e.g., presence of 'text-blue-600' and 'border-blue-600' indicates active state)
   * @param {'all' | 'ongoing' | 'success' | 'failed'} filterKey - The filter tab key
   * @returns {Promise<string[]>} Array of CSS class names on the filter tab element
   * @throws {Error} When the filter tab class attribute is not accessible
   */
  async getFilterTabClassList(filterKey: 'all' | 'ongoing' | 'success' | 'failed'): Promise<string[]> {
    const selector = this.selector_filterTab(filterKey);
    await this.page.locator(selector).isVisible();
    const classAttr = await this.page.locator(selector).getAttribute('class');

    if (classAttr === null) {
      throw new Error(
        `ActivityLogPanelPOM: class attribute is null on filter tab "${filterKey}". Selector: ${selector}`
      );
    }

    return classAttr.split(' ').filter((cls) => cls.length > 0);
  }

  /**
   * @desc Get the full inner HTML of the panel container to inspect all rendered content
   * @returns {Promise<string>} The inner HTML of the panel container
   * @throws {Error} When the panel container inner HTML is not accessible
   */
  async getPanelContainerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_panelContainer).isVisible();
    const html = await this.page.locator(this.selector_panelContainer).innerHTML();

    if (html === null) {
      throw new Error(
        `ActivityLogPanelPOM: inner HTML is null for panel container. Selector: ${this.selector_panelContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Get the full visible text content of an activity log item row (title, message, timestamp, duration, progress, etc.)
   * @param {string} activityId - The ID of the activity log item
   * @returns {Promise<string>} The text content of the activity item row exactly as it appears
   * @throws {Error} When the activity item row text content is not accessible
   */
  async getActivityItemRowText(activityId: string): Promise<string> {
    const selector = this.selector_activityItemRow(activityId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `ActivityLogPanelPOM: text content is null for activity item row with id "${activityId}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the class attribute of an activity item row to assert its dynamic status-based background and border color classes
   * @param {string} activityId - The ID of the activity log item
   * @returns {Promise<string | null>} The class attribute value, or null if not present
   */
  async getActivityItemRowClassAttribute(activityId: string): Promise<string | null> {
    const selector = this.selector_activityItemRow(activityId);
    return await this.page.locator(selector).getAttribute('class');
  }

  /**
   * @desc Get the CSS class list of an activity item row to determine its status color
   * (bg-blue-50 = ONGOING, bg-green-50 = SUCCESS, bg-red-50 = FAILED, bg-gray-50 = CANCELLED/default)
   * @param {string} activityId - The ID of the activity log item
   * @returns {Promise<string[]>} Array of CSS class names on the activity item row
   * @throws {Error} When the activity item row class attribute is not accessible
   */
  async getActivityItemRowClassList(activityId: string): Promise<string[]> {
    const selector = this.selector_activityItemRow(activityId);
    await this.page.locator(selector).isVisible();
    const classAttr = await this.page.locator(selector).getAttribute('class');

    if (classAttr === null) {
      throw new Error(
        `ActivityLogPanelPOM: class attribute is null for activity item row with id "${activityId}". Selector: ${selector}`
      );
    }

    return classAttr.split(' ').filter((cls) => cls.length > 0);
  }

  /**
   * @desc Count the total number of activity log item rows currently rendered in the panel
   * @returns {Promise<number>} The count of activity item rows
   */
  async getActivityItemRowCount(): Promise<number> {
    return await this.page.locator(this.selector_allActivityItemRows).count();
  }

  /**
   * @desc Get the inner HTML of an activity log item row to inspect all rendered sub-elements
   * including status icon, progress bar, error details, and metadata
   * @param {string} activityId - The ID of the activity log item
   * @returns {Promise<string>} The inner HTML of the activity item row
   * @throws {Error} When the activity item row inner HTML is not accessible
   */
  async getActivityItemRowInnerHtml(activityId: string): Promise<string> {
    const selector = this.selector_activityItemRow(activityId);
    await this.page.locator(selector).isVisible();
    const html = await this.page.locator(selector).innerHTML();

    if (html === null) {
      throw new Error(
        `ActivityLogPanelPOM: inner HTML is null for activity item row with id "${activityId}". Selector: ${selector}`
      );
    }

    return html;
  }
}