/**
 * Page Object Model: DashboardPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const DashboardPagePOM_StandardSelector = "[data-testid='dashboard-page']";

export class DashboardPagePOM {
  private readonly page: Page;

  // =========================================================================
  // Selectors
  // =========================================================================

  private readonly rootSelector: string;

  // dashboardPage
  private readonly selector_dashboardContainer: string;

  // pageHeader
  private readonly selector_pageTitle: string;
  private readonly selector_pageHeaderContainer: string;

  // metricsSection
  private readonly selector_metricsSectionContainer: string;
  private readonly selector_metricCard: (metricId: string) => string;

  // filterBar
  private readonly selector_filterBarContainer: string;
  private readonly selector_resetFiltersButton: string;
  private readonly selector_applyFiltersButton: string;
  private readonly selector_dateRangePicker: string;

  // chartsSection
  private readonly selector_chartsSectionContainer: string;
  private readonly selector_chartWidget: (chartId: string) => string;

  // recentActivitySection
  private readonly selector_recentActivityList: string;
  private readonly selector_recentActivityContainer: string;
  private readonly selector_activityItem: (activityId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // =========================================================================
    // Selector Definitions — Single source of truth
    // =========================================================================

    this.rootSelector = DashboardPagePOM_StandardSelector;

    // dashboardPage
    this.selector_dashboardContainer = this.rootSelector;

    // pageHeader
    this.selector_pageTitle = `${this.rootSelector} [data-testid='dashboard-title']`;
    this.selector_pageHeaderContainer = `${this.rootSelector} [data-testid='dashboard-header']`;

    // metricsSection
    this.selector_metricsSectionContainer = `${this.rootSelector} [data-testid='metrics-section']`;
    this.selector_metricCard = (metricId: string) =>
      `${this.rootSelector} [data-testid='metric-card_${metricId}']`;

    // filterBar
    this.selector_filterBarContainer = `${this.rootSelector} [data-testid='dashboard-filter-bar']`;
    this.selector_resetFiltersButton = `${this.rootSelector} [data-testid='reset-filters-btn']`;
    this.selector_applyFiltersButton = `${this.rootSelector} [data-testid='apply-filters-btn']`;
    this.selector_dateRangePicker = `${this.rootSelector} [data-testid='date-range-picker']`;

    // chartsSection
    this.selector_chartsSectionContainer = `${this.rootSelector} [data-testid='charts-section']`;
    this.selector_chartWidget = (chartId: string) =>
      `${this.rootSelector} [data-testid='chart-widget_${chartId}']`;

    // recentActivitySection
    this.selector_recentActivityList = `${this.rootSelector} [data-testid='recent-activity-list']`;
    this.selector_recentActivityContainer = `${this.rootSelector} [data-testid='recent-activity-section']`;
    this.selector_activityItem = (activityId: string) =>
      `${this.rootSelector} [data-testid='activity-item_${activityId}']`;
  }

  // =========================================================================
  // Static Methods
  // =========================================================================

  /**
   * @desc Checks if the Dashboard page is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the dashboard page container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(DashboardPagePOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a DashboardPagePOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<DashboardPagePOM>} A DashboardPagePOM instance
   * @throws {Error} When the dashboard page container is not visible
   */
  static async getPOM(page: Page): Promise<DashboardPagePOM> {
    const isVisible = await DashboardPagePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        `DashboardPagePOM: Cannot instantiate - dashboard page is not visible. ` +
          `Expected element ${DashboardPagePOM_StandardSelector} to be visible.`
      );
    }

    return new DashboardPagePOM(page);
  }

  // =========================================================================
  // Visibility and State Methods
  // =========================================================================

  /**
   * @desc Check whether the main dashboard page container is visible
   * @returns {Promise<boolean>} True if the dashboard container is visible
   */
  async isDashboardContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_dashboardContainer).isVisible();
  }

  /**
   * @desc Check whether the dashboard header section is visible on screen
   * @returns {Promise<boolean>} True if the page header container is visible
   */
  async isPageHeaderVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_pageHeaderContainer).isVisible();
  }

  /**
   * @desc Check whether the metrics section is visible on the dashboard
   * @returns {Promise<boolean>} True if the metrics section container is visible
   */
  async isMetricsSectionVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_metricsSectionContainer).isVisible();
  }

  /**
   * @desc Check whether the filter bar is visible on the dashboard
   * @returns {Promise<boolean>} True if the filter bar container is visible
   */
  async isFilterBarVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_filterBarContainer).isVisible();
  }

  /**
   * @desc Check whether the charts section is visible on the dashboard
   * @returns {Promise<boolean>} True if the charts section container is visible
   */
  async isChartsSectionVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_chartsSectionContainer).isVisible();
  }

  /**
   * @desc Check whether the recent activity section is visible on the dashboard
   * @returns {Promise<boolean>} True if the recent activity container is visible
   */
  async isRecentActivitySectionVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_recentActivityContainer).isVisible();
  }

  /**
   * @desc Check whether the Reset Filters button is currently enabled
   * @returns {Promise<boolean>} True if the reset filters button is enabled
   */
  async isResetFiltersButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_resetFiltersButton).isEnabled();
  }

  /**
   * @desc Check whether the Apply Filters button is currently enabled
   * @returns {Promise<boolean>} True if the apply filters button is enabled
   */
  async isApplyFiltersButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_applyFiltersButton).isEnabled();
  }

  // =========================================================================
  // Action Methods
  // =========================================================================

  /**
   * @desc Scroll within the main dashboard container to reveal off-screen content
   * Expected outcome is that off-screen content becomes visible
   * @param scrollY - The number of pixels to scroll vertically
   */
  async scrollDashboardContainer(scrollY: number): Promise<void> {
    await this.page.locator(this.selector_dashboardContainer).evaluate(
      (el, y) => el.scrollBy(0, y),
      scrollY
    );
  }

  /**
   * @desc Click an individual metric card by its metricId to navigate or expand details
   * Expected outcome is that the metric card detail view opens or navigation occurs
   * @param metricId - The unique identifier of the metric card
   */
  async clickMetricCard(metricId: string): Promise<void> {
    await this.page.locator(this.selector_metricCard(metricId)).click();
  }

  /**
   * @desc Click the Reset Filters button to restore all filters to their default state
   * Expected outcome is that all dashboard filters are reset to defaults
   */
  async clickResetFiltersButton(): Promise<void> {
    await this.page.locator(this.selector_resetFiltersButton).click();
  }

  /**
   * @desc Click the filter bar container to interact with filter controls
   * Expected outcome is that the filter bar becomes active or a dropdown opens
   */
  async clickFilterBarContainer(): Promise<void> {
    await this.page.locator(this.selector_filterBarContainer).click();
  }

  /**
   * @desc Click the Apply Filters button to apply the currently selected filters
   * Expected outcome is that the dashboard data is filtered according to current selections
   */
  async clickApplyFiltersButton(): Promise<void> {
    await this.page.locator(this.selector_applyFiltersButton).click();
  }

  /**
   * @desc Fill in the date range picker input to filter dashboard data by date
   * Expected outcome is that the date range picker reflects the provided value
   * @param dateRange - The date range string to enter into the picker
   */
  async fillDateRangePicker(dateRange: string): Promise<void> {
    await this.page.locator(this.selector_dateRangePicker).fill(dateRange);
  }

  /**
   * @desc Click an individual chart widget by its chartId to interact with or expand the chart
   * Expected outcome is that the chart widget is interacted with or expanded
   * @param chartId - The unique identifier of the chart widget
   */
  async clickChartWidget(chartId: string): Promise<void> {
    await this.page.locator(this.selector_chartWidget(chartId)).click();
  }

  /**
   * @desc Click an individual activity item row by its activityId to view details
   * Expected outcome is that the activity detail view opens
   * @param activityId - The unique identifier of the activity item
   */
  async clickActivityItem(activityId: string): Promise<void> {
    await this.page.locator(this.selector_activityItem(activityId)).click();
  }

  // =========================================================================
  // Data Retrieval Methods
  // =========================================================================

  /**
   * @desc Get the CSS class list of the main dashboard container to detect state-based styling
   * @returns {Promise<string>} The full className string of the dashboard container
   * @throws {Error} When the dashboard container class list is not accessible
   */
  async getDashboardContainerClassList(): Promise<string> {
    await this.page.locator(this.selector_dashboardContainer).isVisible();
    const classList = await this.page
      .locator(this.selector_dashboardContainer)
      .getAttribute('class');

    if (classList === null) {
      throw new Error(
        `DashboardPagePOM: class list is null for dashboard container. ` +
          `Selector: ${this.selector_dashboardContainer}`
      );
    }

    return classList;
  }

  /**
   * @desc Extract the main title/heading text displayed on the dashboard
   * @returns {Promise<string>} The page title text exactly as it appears in the UI
   * @throws {Error} When the page title content is not accessible or null
   */
  async getPageTitleText(): Promise<string> {
    await this.page.locator(this.selector_pageTitle).isVisible();
    const text = await this.page.locator(this.selector_pageTitle).textContent();

    if (text === null) {
      throw new Error(
        `DashboardPagePOM: page title text content is null. ` +
          `Selector: ${this.selector_pageTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Count the total number of metric cards currently rendered in the metrics section
   * @returns {Promise<number>} The count of metric cards in the metrics section
   */
  async getMetricCardCount(): Promise<number> {
    return await this.page
      .locator(`${this.selector_metricsSectionContainer} [data-testid^='metric-card_']`)
      .count();
  }

  /**
   * @desc Extract the visible text content of a specific metric card by metricId
   * @param metricId - The unique identifier of the metric card
   * @returns {Promise<string>} The text content of the metric card exactly as it appears
   * @throws {Error} When the metric card text content is not accessible or null
   */
  async getMetricCardText(metricId: string): Promise<string> {
    const selector = this.selector_metricCard(metricId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `DashboardPagePOM: text content is null for metric card "${metricId}". ` +
          `Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the numeric or string value displayed on a specific metric card via the data-value attribute
   * @param metricId - The unique identifier of the metric card
   * @returns {Promise<string>} The data-value attribute of the metric card
   * @throws {Error} When the data-value attribute is not accessible or null
   */
  async getMetricCardValue(metricId: string): Promise<string> {
    const selector = this.selector_metricCard(metricId);
    await this.page.locator(selector).isVisible();
    const value = await this.page.locator(selector).getAttribute('data-value');

    if (value === null) {
      throw new Error(
        `DashboardPagePOM: data-value attribute is null for metric card "${metricId}". ` +
          `Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Extract the status indicator (e.g., up, down, neutral) of a specific metric card via the data-status attribute
   * @param metricId - The unique identifier of the metric card
   * @returns {Promise<string>} The data-status attribute of the metric card
   * @throws {Error} When the data-status attribute is not accessible or null
   */
  async getMetricCardStatus(metricId: string): Promise<string> {
    const selector = this.selector_metricCard(metricId);
    await this.page.locator(selector).isVisible();
    const status = await this.page.locator(selector).getAttribute('data-status');

    if (status === null) {
      throw new Error(
        `DashboardPagePOM: data-status attribute is null for metric card "${metricId}". ` +
          `Selector: ${selector}`
      );
    }

    return status;
  }

  /**
   * @desc Get the currently selected date range value from the date range picker input
   * @returns {Promise<string>} The current value of the date range picker
   * @throws {Error} When the date range picker value is not accessible or null
   */
  async getDateRangePickerValue(): Promise<string> {
    await this.page.locator(this.selector_dateRangePicker).isVisible();
    const value = await this.page.locator(this.selector_dateRangePicker).inputValue();

    if (value === null) {
      throw new Error(
        `DashboardPagePOM: date range picker value is null. ` +
          `Selector: ${this.selector_dateRangePicker}`
      );
    }

    return value;
  }

  /**
   * @desc Count the total number of chart widgets currently rendered in the charts section
   * @returns {Promise<number>} The count of chart widgets in the charts section
   */
  async getChartWidgetCount(): Promise<number> {
    return await this.page
      .locator(`${this.selector_chartsSectionContainer} [data-testid^='chart-widget_']`)
      .count();
  }

  /**
   * @desc Extract the chart type (e.g., bar, line, pie) from a specific chart widget via the data-chart-type attribute
   * @param chartId - The unique identifier of the chart widget
   * @returns {Promise<string>} The data-chart-type attribute of the chart widget
   * @throws {Error} When the data-chart-type attribute is not accessible or null
   */
  async getChartWidgetType(chartId: string): Promise<string> {
    const selector = this.selector_chartWidget(chartId);
    await this.page.locator(selector).isVisible();
    const chartType = await this.page.locator(selector).getAttribute('data-chart-type');

    if (chartType === null) {
      throw new Error(
        `DashboardPagePOM: data-chart-type attribute is null for chart widget "${chartId}". ` +
          `Selector: ${selector}`
      );
    }

    return chartType;
  }

  /**
   * @desc Count the total number of activity items currently rendered in the recent activity list
   * @returns {Promise<number>} The count of activity items in the recent activity list
   */
  async getActivityItemCount(): Promise<number> {
    return await this.page
      .locator(`${this.selector_recentActivityList} [data-testid^='activity-item_']`)
      .count();
  }

  /**
   * @desc Extract the status (e.g., completed, pending) of a specific activity item via the data-status attribute
   * @param activityId - The unique identifier of the activity item
   * @returns {Promise<string>} The data-status attribute of the activity item
   * @throws {Error} When the data-status attribute is not accessible or null
   */
  async getActivityItemStatus(activityId: string): Promise<string> {
    const selector = this.selector_activityItem(activityId);
    await this.page.locator(selector).isVisible();
    const status = await this.page.locator(selector).getAttribute('data-status');

    if (status === null) {
      throw new Error(
        `DashboardPagePOM: data-status attribute is null for activity item "${activityId}". ` +
          `Selector: ${selector}`
      );
    }

    return status;
  }

  /**
   * @desc Extract the type/category of a specific activity item via the data-activity-type attribute
   * @param activityId - The unique identifier of the activity item
   * @returns {Promise<string>} The data-activity-type attribute of the activity item
   * @throws {Error} When the data-activity-type attribute is not accessible or null
   */
  async getActivityItemType(activityId: string): Promise<string> {
    const selector = this.selector_activityItem(activityId);
    await this.page.locator(selector).isVisible();
    const activityType = await this.page.locator(selector).getAttribute('data-activity-type');

    if (activityType === null) {
      throw new Error(
        `DashboardPagePOM: data-activity-type attribute is null for activity item "${activityId}". ` +
          `Selector: ${selector}`
      );
    }

    return activityType;
  }

  /**
   * @desc Extract the visible text content of a specific activity item row by activityId
   * @param activityId - The unique identifier of the activity item
   * @returns {Promise<string>} The text content of the activity item exactly as it appears
   * @throws {Error} When the activity item text content is not accessible or null
   */
  async getActivityItemText(activityId: string): Promise<string> {
    const selector = this.selector_activityItem(activityId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `DashboardPagePOM: text content is null for activity item "${activityId}". ` +
          `Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get a list of all visible text values from all activity item rows in the recent activity list
   * @returns {Promise<string[]>} An array of text content strings from all activity items, exactly as they appear
   */
  async getAllActivityItemTexts(): Promise<string[]> {
    await this.page.locator(this.selector_recentActivityList).isVisible();
    const items = this.page.locator(
      `${this.selector_recentActivityList} [data-testid^='activity-item_']`
    );
    const count = await items.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await items.nth(i).textContent();
      texts.push(text ?? '');
    }

    return texts;
  }
}