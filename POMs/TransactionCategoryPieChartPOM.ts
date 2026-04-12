/**
 * Page Object Model: TransactionCategoryPieChart
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const TransactionCategoryPieChartPOM_StandardSelector = '[data-testid="transaction-category-pie-chart"]';

export class TransactionCategoryPieChartPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_pieChartContainer: string;
  private readonly selector_tooltipContainer: string;
  private readonly selector_tooltipCategoryName: string;
  private readonly selector_tooltipAmount: string;
  private readonly selector_tooltipTransactionCount: string;
  private readonly selector_tooltipPercentage: string;
  private readonly selector_tooltipExpandHint: string;
  private readonly selector_emptyState: string;
  private readonly selector_drillDownHeader: string;
  private readonly selector_backButton: string;
  private readonly selector_pieChartCanvas: string;
  private readonly selector_otherSliceHint: string;
  private readonly selector_chartLegend: string;
  private readonly selector_pieSlice: (sliceIndex: number) => string;
  private readonly selector_legendItem: (itemIndex: number) => string;
  private readonly selector_legendLabel: (itemIndex: number) => string;
  private readonly selector_legendColorSwatch: (itemIndex: number) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = TransactionCategoryPieChartPOM_StandardSelector;

    // Root container
    this.selector_pieChartContainer = this.rootSelector;

    // Tooltip selectors
    this.selector_tooltipContainer = `.recharts-tooltip-wrapper .bg-white.p-3.border.border-gray-200.rounded-lg`;
    this.selector_tooltipCategoryName = `.recharts-tooltip-wrapper p.font-semibold.text-gray-900`;
    this.selector_tooltipAmount = `.recharts-tooltip-wrapper p.text-sm.text-gray-600:nth-child(2)`;
    this.selector_tooltipTransactionCount = `.recharts-tooltip-wrapper p.text-sm.text-gray-600:nth-child(3)`;
    this.selector_tooltipPercentage = `.recharts-tooltip-wrapper p.text-sm.text-gray-600:nth-child(4)`;
    this.selector_tooltipExpandHint = `.recharts-tooltip-wrapper p.text-xs.text-blue-600`;

    // Empty state
    this.selector_emptyState = `div.flex.items-center.justify-center.h-\\[400px\\].text-gray-500`;

    // Drill-down header and back button
    this.selector_drillDownHeader = `${this.rootSelector} > div:has([data-testid="pie-chart-back-button"])`;
    this.selector_backButton = `[data-testid="pie-chart-back-button"]`;

    // Pie chart canvas
    this.selector_pieChartCanvas = `${this.rootSelector} .recharts-responsive-container`;

    // Other slice hint
    this.selector_otherSliceHint = `${this.rootSelector} p.text-gray-400`;

    // Legend
    this.selector_chartLegend = `${this.rootSelector} .flex.flex-wrap.gap-x-4`;

    // Dynamic selectors
    this.selector_pieSlice = (sliceIndex: number) =>
      `${this.rootSelector} .recharts-pie-sector:nth-child(${sliceIndex})`;

    this.selector_legendItem = (itemIndex: number) =>
      `${this.rootSelector} .flex.flex-wrap.gap-x-4 > div:nth-child(${itemIndex})`;

    this.selector_legendLabel = (itemIndex: number) =>
      `${this.rootSelector} .flex.flex-wrap.gap-x-4 > div:nth-child(${itemIndex}) span`;

    this.selector_legendColorSwatch = (itemIndex: number) =>
      `${this.rootSelector} .flex.flex-wrap.gap-x-4 > div:nth-child(${itemIndex}) .w-2\\.5.h-2\\.5`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the TransactionCategoryPieChart component is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the pie chart root container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const container = page.locator(TransactionCategoryPieChartPOM_StandardSelector);
      return await container.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method to get a TransactionCategoryPieChartPOM instance.
   * Validates that the component is visible before returning the instance.
   * @param page - Playwright Page instance
   * @returns {Promise<TransactionCategoryPieChartPOM>} POM instance
   * @throws {Error} When the pie chart root container is not visible
   */
  static async getPOM(page: Page): Promise<TransactionCategoryPieChartPOM> {
    const isVisible = await TransactionCategoryPieChartPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TransactionCategoryPieChartPOM: Cannot instantiate - pie chart component is not visible. ' +
        `Expected element [${TransactionCategoryPieChartPOM_StandardSelector}] to be visible.`
      );
    }

    return new TransactionCategoryPieChartPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Whether or not the pie chart root container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the pie chart container is visible
   */
  async isPieChartContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_pieChartContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the empty-state message is visible, indicating no categorized transaction data is available
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the empty state element is visible
   */
  async isEmptyStateVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_emptyState).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the drill-down header is visible, confirming the chart is currently in drilled-down state
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the drill-down header is visible
   */
  async isDrillDownHeaderVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_drillDownHeader).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the Recharts ResponsiveContainer (pie chart canvas) is visible and rendered
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the pie chart canvas is visible
   */
  async isPieChartCanvasVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_pieChartCanvas).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the 'Click the Other slice to expand' hint text is visible
   * Only shown when not drilled down and an Other entry exists.
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the other-slice hint is visible
   */
  async isOtherSliceHintVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_otherSliceHint).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the legend container is visible below the chart
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the chart legend is visible
   */
  async isChartLegendVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_chartLegend).isVisible({ timeout });
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Clicks the back button inside the drill-down header to return to the overview
   * Expected outcome is that the chart returns to the overview state (drilledDown = false)
   * @throws {Error} When the drill-down header or back button is not visible
   */
  async clickBackButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_backButton).isVisible();
    if (!isVisible) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Cannot click back button - drill-down header is not visible. ` +
        `Selector: ${this.selector_backButton}`
      );
    }
    await this.page.locator(this.selector_backButton).click();
  }

  /**
   * @desc Hovers over the pie chart canvas area to trigger Recharts tooltip rendering on individual slices
   * Expected outcome is that the tooltip becomes visible over the hovered slice
   * @throws {Error} When the pie chart canvas is not visible
   */
  async hoverPieChartCanvas(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_pieChartCanvas).isVisible();
    if (!isVisible) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Cannot hover pie chart canvas - canvas is not visible. ` +
        `Selector: ${this.selector_pieChartCanvas}`
      );
    }
    await this.page.locator(this.selector_pieChartCanvas).hover();
  }

  /**
   * @desc Hovers over a specific pie slice by its 1-based index to trigger the tooltip
   * Expected outcome is that the tooltip becomes visible for the targeted slice
   * @param {number} sliceIndex - The 1-based index of the pie slice to hover
   * @throws {Error} When the specified pie slice is not visible
   */
  async hoverPieSlice(sliceIndex: number): Promise<void> {
    const selector = this.selector_pieSlice(sliceIndex);
    const isVisible = await this.page.locator(selector).isVisible();
    if (!isVisible) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Cannot hover pie slice at index ${sliceIndex} - slice is not visible. ` +
        `Selector: ${selector}`
      );
    }
    await this.page.locator(selector).hover();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Reads the empty-state message text ('No categorized transaction data available')
   * @returns {Promise<string>} The empty-state message text exactly as it appears in the UI
   * @throws {Error} When the empty-state element content is not accessible or null
   */
  async getEmptyStateText(): Promise<string> {
    await this.page.locator(this.selector_emptyState).isVisible();
    const text = await this.page.locator(this.selector_emptyState).textContent();

    if (text === null) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Empty state text content is null. ` +
        `Selector: ${this.selector_emptyState}`
      );
    }

    return text;
  }

  /**
   * @desc Reads the full text of the drill-down header, including the back button label
   * and the 'Other' summary label (category count and total amount)
   * @returns {Promise<string>} The drill-down header text exactly as it appears in the UI
   * @throws {Error} When the drill-down header content is not accessible or null
   */
  async getDrillDownHeaderText(): Promise<string> {
    await this.page.locator(this.selector_drillDownHeader).isVisible();
    const text = await this.page.locator(this.selector_drillDownHeader).textContent();

    if (text === null) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Drill-down header text content is null. ` +
        `Selector: ${this.selector_drillDownHeader}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the position and dimensions of the pie chart canvas to verify layout and sizing
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the pie chart canvas
   * @throws {Error} When the pie chart canvas is not visible or bounding box cannot be retrieved
   */
  async getPieChartCanvasBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const isVisible = await this.page.locator(this.selector_pieChartCanvas).isVisible();
    if (!isVisible) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Cannot get bounding box - pie chart canvas is not visible. ` +
        `Selector: ${this.selector_pieChartCanvas}`
      );
    }

    const boundingBox = await this.page.locator(this.selector_pieChartCanvas).boundingBox();
    if (!boundingBox) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Bounding box returned null for pie chart canvas. ` +
        `Selector: ${this.selector_pieChartCanvas}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Reads the hint text content prompting the user to click the Other slice
   * @returns {Promise<string>} The other-slice hint text exactly as it appears in the UI
   * @throws {Error} When the other-slice hint content is not accessible or null
   */
  async getOtherSliceHintText(): Promise<string> {
    await this.page.locator(this.selector_otherSliceHint).isVisible();
    const text = await this.page.locator(this.selector_otherSliceHint).textContent();

    if (text === null) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Other slice hint text content is null. ` +
        `Selector: ${this.selector_otherSliceHint}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text label of a legend item by its 1-based index
   * @param {number} itemIndex - The 1-based index of the legend item
   * @returns {Promise<string>} The legend label text exactly as it appears in the UI
   * @throws {Error} When the legend label content is not accessible or null
   */
  async getLegendLabelText(itemIndex: number): Promise<string> {
    const selector = this.selector_legendLabel(itemIndex);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Legend label text content is null at index ${itemIndex}. ` +
        `Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the tooltip category name text when a tooltip is visible
   * @returns {Promise<string>} The tooltip category name exactly as it appears in the UI
   * @throws {Error} When the tooltip category name content is not accessible or null
   */
  async getTooltipCategoryName(): Promise<string> {
    await this.page.locator(this.selector_tooltipCategoryName).isVisible();
    const text = await this.page.locator(this.selector_tooltipCategoryName).textContent();

    if (text === null) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Tooltip category name content is null. ` +
        `Selector: ${this.selector_tooltipCategoryName}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the tooltip amount text when a tooltip is visible
   * @returns {Promise<string>} The tooltip amount text exactly as it appears in the UI
   * @throws {Error} When the tooltip amount content is not accessible or null
   */
  async getTooltipAmount(): Promise<string> {
    await this.page.locator(this.selector_tooltipAmount).isVisible();
    const text = await this.page.locator(this.selector_tooltipAmount).textContent();

    if (text === null) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Tooltip amount content is null. ` +
        `Selector: ${this.selector_tooltipAmount}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the tooltip transaction count text when a tooltip is visible
   * @returns {Promise<string>} The tooltip transaction count text exactly as it appears in the UI
   * @throws {Error} When the tooltip transaction count content is not accessible or null
   */
  async getTooltipTransactionCount(): Promise<string> {
    await this.page.locator(this.selector_tooltipTransactionCount).isVisible();
    const text = await this.page.locator(this.selector_tooltipTransactionCount).textContent();

    if (text === null) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Tooltip transaction count content is null. ` +
        `Selector: ${this.selector_tooltipTransactionCount}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the tooltip percentage text when a tooltip is visible
   * @returns {Promise<string>} The tooltip percentage text exactly as it appears in the UI
   * @throws {Error} When the tooltip percentage content is not accessible or null
   */
  async getTooltipPercentage(): Promise<string> {
    await this.page.locator(this.selector_tooltipPercentage).isVisible();
    const text = await this.page.locator(this.selector_tooltipPercentage).textContent();

    if (text === null) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Tooltip percentage content is null. ` +
        `Selector: ${this.selector_tooltipPercentage}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the tooltip expand hint text ('Click to expand') when visible on the Other slice tooltip
   * @returns {Promise<string>} The tooltip expand hint text exactly as it appears in the UI
   * @throws {Error} When the tooltip expand hint content is not accessible or null
   */
  async getTooltipExpandHintText(): Promise<string> {
    await this.page.locator(this.selector_tooltipExpandHint).isVisible();
    const text = await this.page.locator(this.selector_tooltipExpandHint).textContent();

    if (text === null) {
      throw new Error(
        `TransactionCategoryPieChartPOM: Tooltip expand hint content is null. ` +
        `Selector: ${this.selector_tooltipExpandHint}`
      );
    }

    return text;
  }

  /**
   * @desc Whether or not the tooltip expand hint is visible (only shown when hovering the Other slice in overview mode)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the tooltip expand hint is visible
   */
  async isTooltipExpandHintVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tooltipExpandHint).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the tooltip container is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the tooltip container is visible
   */
  async isTooltipVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tooltipContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not a specific legend item is visible by its 1-based index
   * @param {number} itemIndex - The 1-based index of the legend item
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the legend item is visible
   */
  async isLegendItemVisible(itemIndex: number, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_legendItem(itemIndex)).isVisible({ timeout });
  }
}