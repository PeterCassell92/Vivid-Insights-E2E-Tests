/**
 * Page Object Model: SpendingOverTimeChart
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const SpendingOverTimeChartPOM_StandardSelector = '[data-testid="spending-over-time-chart"]';

export class SpendingOverTimeChartPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_chartContainer: string;
  private readonly selector_emptyState: string;
  private readonly selector_legendWrapper: string;
  private readonly selector_barChartSvg: string;
  private readonly selector_yAxis: string;
  private readonly selector_xAxis: string;
  private readonly selector_cartesianGrid: string;
  private readonly selector_responsiveContainerWrapper: string;
  private readonly selector_creditBarSeries: string;
  private readonly selector_investmentDebitBarSeries: string;
  private readonly selector_trueDebitBarSeries: string;
  private readonly selector_tooltipWrapper: string;
  private readonly selector_tooltipContainer: string;
  private readonly selector_tooltipMonthLabel: string;
  private readonly selector_tooltipExpensesRow: string;
  private readonly selector_tooltipInvestmentRow: string;
  private readonly selector_tooltipTotalOutgoingRow: string;
  private readonly selector_tooltipIncomeRow: string;
  private readonly selector_tooltipNetRow: string;
  private readonly selector_tooltipTransactionCount: string;

  // Dynamic selector functions
  private readonly selector_creditBarCell: (rowIndex: number) => string;
  private readonly selector_investmentDebitBarCell: (rowIndex: number) => string;
  private readonly selector_trueDebitBarCell: (rowIndex: number) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = SpendingOverTimeChartPOM_StandardSelector;

    // Chart root and empty state
    this.selector_chartContainer = this.rootSelector;
    this.selector_emptyState = '[data-testid="spending-over-time-chart-empty"]';

    // Chart structural elements
    this.selector_legendWrapper = `${this.rootSelector} .recharts-legend-wrapper`;
    this.selector_barChartSvg = `${this.rootSelector} .recharts-wrapper`;
    this.selector_yAxis = `${this.rootSelector} .recharts-yAxis`;
    this.selector_xAxis = `${this.rootSelector} .recharts-xAxis`;
    this.selector_cartesianGrid = `${this.rootSelector} .recharts-cartesian-grid`;
    this.selector_responsiveContainerWrapper = `${this.rootSelector} .recharts-responsive-container`;

    // Bar series
    this.selector_creditBarSeries = `${this.rootSelector} .recharts-bar[name="credit"]`;
    this.selector_investmentDebitBarSeries = `${this.rootSelector} .recharts-bar[name="investmentDebit"]`;
    this.selector_trueDebitBarSeries = `${this.rootSelector} .recharts-bar[name="trueDebit"]`;

    // Tooltip elements
    this.selector_tooltipWrapper = `${this.rootSelector} .recharts-tooltip-wrapper`;
    this.selector_tooltipContainer = `${this.rootSelector} .recharts-tooltip-wrapper .bg-white`;
    this.selector_tooltipMonthLabel = `${this.rootSelector} .recharts-tooltip-wrapper p.font-semibold`;
    this.selector_tooltipExpensesRow = `${this.rootSelector} .recharts-tooltip-wrapper p.text-red-600`;
    this.selector_tooltipInvestmentRow = `${this.rootSelector} .recharts-tooltip-wrapper p.text-gray-500:first-of-type`;
    this.selector_tooltipTotalOutgoingRow = `${this.rootSelector} .recharts-tooltip-wrapper p.text-gray-700`;
    this.selector_tooltipIncomeRow = `${this.rootSelector} .recharts-tooltip-wrapper p.text-green-600`;
    this.selector_tooltipNetRow = `${this.rootSelector} .recharts-tooltip-wrapper p.text-gray-600`;
    this.selector_tooltipTransactionCount = `${this.rootSelector} .recharts-tooltip-wrapper p.text-gray-500:last-of-type`;

    // Dynamic selectors
    this.selector_creditBarCell = (rowIndex: number) =>
      `${this.rootSelector} .recharts-bar[name="credit"] .recharts-bar-rectangle:nth-child(${rowIndex})`;

    this.selector_investmentDebitBarCell = (rowIndex: number) =>
      `${this.rootSelector} .recharts-bar[name="investmentDebit"] .recharts-bar-rectangle:nth-child(${rowIndex})`;

    this.selector_trueDebitBarCell = (rowIndex: number) =>
      `${this.rootSelector} .recharts-bar[name="trueDebit"] .recharts-bar-rectangle:nth-child(${rowIndex})`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the SpendingOverTimeChart is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the chart root wrapper is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(SpendingOverTimeChartPOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a SpendingOverTimeChartPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<SpendingOverTimeChartPOM>} A SpendingOverTimeChartPOM instance
   * @throws {Error} When the chart root wrapper is not visible
   */
  static async getPOM(page: Page): Promise<SpendingOverTimeChartPOM> {
    const isVisible = await SpendingOverTimeChartPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'SpendingOverTimeChartPOM: Cannot instantiate - chart is not visible. ' +
          `Expected element [${SpendingOverTimeChartPOM_StandardSelector}] to be visible.`
      );
    }

    return new SpendingOverTimeChartPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the chart root wrapper is visible (i.e. data is present and chart is rendered)
   * @returns {Promise<boolean>} True if the chart container is visible
   */
  async isChartContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_chartContainer).isVisible();
  }

  /**
   * @desc Check whether the empty state element is visible (i.e. data.length === 0)
   * @returns {Promise<boolean>} True if the empty state is visible
   */
  async isEmptyStateVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_emptyState).isVisible();
  }

  /**
   * @desc Check whether the legend is visible in the chart
   * @returns {Promise<boolean>} True if the legend wrapper is visible
   */
  async isLegendVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_legendWrapper).isVisible();
  }

  /**
   * @desc Check whether the Recharts BarChart SVG wrapper is visible
   * @returns {Promise<boolean>} True if the bar chart SVG wrapper is visible
   */
  async isBarChartSvgVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_barChartSvg).isVisible();
  }

  /**
   * @desc Check whether the Y-axis is visible in the chart
   * @returns {Promise<boolean>} True if the Y-axis is visible
   */
  async isYAxisVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_yAxis).isVisible();
  }

  /**
   * @desc Check whether the X-axis is visible in the chart
   * @returns {Promise<boolean>} True if the X-axis is visible
   */
  async isXAxisVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_xAxis).isVisible();
  }

  /**
   * @desc Check whether the CartesianGrid is visible in the chart
   * @returns {Promise<boolean>} True if the cartesian grid is visible
   */
  async isCartesianGridVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_cartesianGrid).isVisible();
  }

  /**
   * @desc Check whether the ResponsiveContainer wrapper is visible
   * @returns {Promise<boolean>} True if the responsive container is visible
   */
  async isResponsiveContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_responsiveContainerWrapper).isVisible();
  }

  /**
   * @desc Check whether the credit/income bar series is visible in the chart
   * @returns {Promise<boolean>} True if the credit bar series is visible
   */
  async isCreditBarSeriesVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_creditBarSeries).isVisible();
  }

  /**
   * @desc Check whether the investmentDebit bar series is visible in the chart
   * @returns {Promise<boolean>} True if the investmentDebit bar series is visible
   */
  async isInvestmentDebitBarSeriesVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_investmentDebitBarSeries).isVisible();
  }

  /**
   * @desc Check whether the trueDebit/expenses bar series is visible in the chart
   * @returns {Promise<boolean>} True if the trueDebit bar series is visible
   */
  async isTrueDebitBarSeriesVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_trueDebitBarSeries).isVisible();
  }

  /**
   * @desc Check whether the tooltip wrapper is currently visible (i.e. a bar is being hovered)
   * @returns {Promise<boolean>} True if the tooltip wrapper is visible
   */
  async isTooltipVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_tooltipWrapper).isVisible();
  }

  /**
   * @desc Check whether the investment row is conditionally rendered in the tooltip
   * @returns {Promise<boolean>} True if the investment row is visible in the tooltip
   */
  async isTooltipInvestmentRowVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_tooltipInvestmentRow).isVisible();
  }

  /**
   * @desc Check whether the total outgoing row is conditionally rendered in the tooltip
   * @returns {Promise<boolean>} True if the total outgoing row is visible in the tooltip
   */
  async isTooltipTotalOutgoingRowVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_tooltipTotalOutgoingRow).isVisible();
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Hover over the BarChart SVG wrapper to trigger the custom inline tooltip
   * Expected outcome is that the tooltip will appear displaying monthly spending breakdown
   */
  async hoverBarChartSvg(): Promise<void> {
    await this.page.locator(this.selector_barChartSvg).hover();
  }

  /**
   * @desc Hover over the credit/income bar series to activate the tooltip for that month
   * Expected outcome is that the tooltip will appear for the hovered month
   */
  async hoverCreditBarSeries(): Promise<void> {
    await this.page.locator(this.selector_creditBarSeries).hover();
  }

  /**
   * @desc Hover over an individual credit bar rectangle for a specific month to trigger the tooltip
   * Expected outcome is that the tooltip will appear for that specific month
   * @param {number} rowIndex - The 1-based index of the bar rectangle to hover
   */
  async hoverCreditBarCell(rowIndex: number): Promise<void> {
    await this.page.locator(this.selector_creditBarCell(rowIndex)).hover();
  }

  /**
   * @desc Hover over the investmentDebit bar series to activate the tooltip for that month
   * Expected outcome is that the tooltip will appear for the hovered month
   */
  async hoverInvestmentDebitBarSeries(): Promise<void> {
    await this.page.locator(this.selector_investmentDebitBarSeries).hover();
  }

  /**
   * @desc Hover over an individual investmentDebit bar rectangle for a specific month to trigger the tooltip
   * Expected outcome is that the tooltip will appear for that specific month
   * @param {number} rowIndex - The 1-based index of the bar rectangle to hover
   */
  async hoverInvestmentDebitBarCell(rowIndex: number): Promise<void> {
    await this.page.locator(this.selector_investmentDebitBarCell(rowIndex)).hover();
  }

  /**
   * @desc Hover over the trueDebit/expenses bar series to activate the tooltip for that month
   * Expected outcome is that the tooltip will appear for the hovered month
   */
  async hoverTrueDebitBarSeries(): Promise<void> {
    await this.page.locator(this.selector_trueDebitBarSeries).hover();
  }

  /**
   * @desc Hover over an individual trueDebit bar rectangle for a specific month to trigger the tooltip
   * Expected outcome is that the tooltip will appear for that specific month
   * @param {number} rowIndex - The 1-based index of the bar rectangle to hover
   */
  async hoverTrueDebitBarCell(rowIndex: number): Promise<void> {
    await this.page.locator(this.selector_trueDebitBarCell(rowIndex)).hover();
  }

  /**
   * @desc Scroll within the responsive container if chart overflows its bounds
   * Expected outcome is that the chart scrolls within the responsive container
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollResponsiveContainer(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_responsiveContainerWrapper).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Read the data-testid attribute value from the chart root wrapper
   * @returns {Promise<string>} The data-testid attribute value
   * @throws {Error} When the attribute is not accessible or null
   */
  async getChartContainerTestId(): Promise<string> {
    await this.page.locator(this.selector_chartContainer).isVisible();
    const value = await this.page.locator(this.selector_chartContainer).getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: data-testid attribute is null on chart container. Selector: ${this.selector_chartContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Get the position and dimensions of the chart root container
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the chart container
   * @throws {Error} When the bounding box cannot be retrieved
   */
  async getChartContainerBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page.locator(this.selector_chartContainer).boundingBox();

    if (!box) {
      throw new Error(
        `SpendingOverTimeChartPOM: Could not get bounding box for chart container. Selector: ${this.selector_chartContainer}`
      );
    }

    return box;
  }

  /**
   * @desc Read the empty state message text ('No transaction data available')
   * @returns {Promise<string>} The empty state message text exactly as it appears
   * @throws {Error} When the empty state text content is not accessible or null
   */
  async getEmptyStateText(): Promise<string> {
    await this.page.locator(this.selector_emptyState).isVisible();
    const text = await this.page.locator(this.selector_emptyState).textContent();

    if (text === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: Empty state text content is null. Selector: ${this.selector_emptyState}`
      );
    }

    return text;
  }

  /**
   * @desc Get the position and dimensions of the empty state container to verify h-[400px] height
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the empty state container
   * @throws {Error} When the bounding box cannot be retrieved
   */
  async getEmptyStateBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page.locator(this.selector_emptyState).boundingBox();

    if (!box) {
      throw new Error(
        `SpendingOverTimeChartPOM: Could not get bounding box for empty state container. Selector: ${this.selector_emptyState}`
      );
    }

    return box;
  }

  /**
   * @desc Read the data-testid attribute value from the empty state element
   * @returns {Promise<string>} The data-testid attribute value
   * @throws {Error} When the attribute is not accessible or null
   */
  async getEmptyStateTestId(): Promise<string> {
    await this.page.locator(this.selector_emptyState).isVisible();
    const value = await this.page.locator(this.selector_emptyState).getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: data-testid attribute is null on empty state element. Selector: ${this.selector_emptyState}`
      );
    }

    return value;
  }

  /**
   * @desc Read the visible legend label text (Expenses, Investment, Income)
   * @returns {Promise<string>} The legend text exactly as it appears
   * @throws {Error} When the legend text content is not accessible or null
   */
  async getLegendText(): Promise<string> {
    await this.page.locator(this.selector_legendWrapper).isVisible();
    const text = await this.page.locator(this.selector_legendWrapper).textContent();

    if (text === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: Legend text content is null. Selector: ${this.selector_legendWrapper}`
      );
    }

    return text;
  }

  /**
   * @desc Get the full inner HTML of the legend wrapper to inspect rendered legend items
   * @returns {Promise<string>} The inner HTML of the legend wrapper
   * @throws {Error} When the inner HTML cannot be retrieved
   */
  async getLegendInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_legendWrapper).isVisible();
    const html = await this.page.locator(this.selector_legendWrapper).innerHTML();

    if (!html) {
      throw new Error(
        `SpendingOverTimeChartPOM: Legend inner HTML is empty or inaccessible. Selector: ${this.selector_legendWrapper}`
      );
    }

    return html;
  }

  /**
   * @desc Get the position and dimensions of the BarChart wrapper
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the bar chart wrapper
   * @throws {Error} When the bounding box cannot be retrieved
   */
  async getBarChartSvgBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page.locator(this.selector_barChartSvg).boundingBox();

    if (!box) {
      throw new Error(
        `SpendingOverTimeChartPOM: Could not get bounding box for bar chart SVG wrapper. Selector: ${this.selector_barChartSvg}`
      );
    }

    return box;
  }

  /**
   * @desc Get the inner HTML of the BarChart wrapper to inspect rendered SVG structure
   * @returns {Promise<string>} The inner HTML of the bar chart wrapper
   * @throws {Error} When the inner HTML cannot be retrieved
   */
  async getBarChartSvgInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_barChartSvg).isVisible();
    const html = await this.page.locator(this.selector_barChartSvg).innerHTML();

    if (!html) {
      throw new Error(
        `SpendingOverTimeChartPOM: Bar chart SVG inner HTML is empty or inaccessible. Selector: ${this.selector_barChartSvg}`
      );
    }

    return html;
  }

  /**
   * @desc Read the currency-formatted tick label text rendered on the Y-axis
   * @returns {Promise<string>} The Y-axis text exactly as it appears
   * @throws {Error} When the Y-axis text content is not accessible or null
   */
  async getYAxisText(): Promise<string> {
    await this.page.locator(this.selector_yAxis).isVisible();
    const text = await this.page.locator(this.selector_yAxis).textContent();

    if (text === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: Y-axis text content is null. Selector: ${this.selector_yAxis}`
      );
    }

    return text;
  }

  /**
   * @desc Get the inner HTML of the Y-axis to inspect all tick labels
   * @returns {Promise<string>} The inner HTML of the Y-axis
   * @throws {Error} When the inner HTML cannot be retrieved
   */
  async getYAxisInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_yAxis).isVisible();
    const html = await this.page.locator(this.selector_yAxis).innerHTML();

    if (!html) {
      throw new Error(
        `SpendingOverTimeChartPOM: Y-axis inner HTML is empty or inaccessible. Selector: ${this.selector_yAxis}`
      );
    }

    return html;
  }

  /**
   * @desc Read the month label text rendered on the X-axis (formatted via formatMonth)
   * @returns {Promise<string>} The X-axis text exactly as it appears
   * @throws {Error} When the X-axis text content is not accessible or null
   */
  async getXAxisText(): Promise<string> {
    await this.page.locator(this.selector_xAxis).isVisible();
    const text = await this.page.locator(this.selector_xAxis).textContent();

    if (text === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: X-axis text content is null. Selector: ${this.selector_xAxis}`
      );
    }

    return text;
  }

  /**
   * @desc Get the inner HTML of the X-axis to inspect all rendered month tick labels
   * @returns {Promise<string>} The inner HTML of the X-axis
   * @throws {Error} When the inner HTML cannot be retrieved
   */
  async getXAxisInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_xAxis).isVisible();
    const html = await this.page.locator(this.selector_xAxis).innerHTML();

    if (!html) {
      throw new Error(
        `SpendingOverTimeChartPOM: X-axis inner HTML is empty or inaccessible. Selector: ${this.selector_xAxis}`
      );
    }

    return html;
  }

  /**
   * @desc Read the strokeDasharray attribute of the CartesianGrid to verify '3 3' dashed pattern
   * @returns {Promise<string>} The strokeDasharray attribute value
   * @throws {Error} When the attribute is not accessible or null
   */
  async getCartesianGridStrokeDasharray(): Promise<string> {
    await this.page.locator(this.selector_cartesianGrid).isVisible();
    const value = await this.page
      .locator(`${this.selector_cartesianGrid} line, ${this.selector_cartesianGrid} .recharts-cartesian-grid-horizontal line`)
      .first()
      .getAttribute('stroke-dasharray');

    if (value === null) {
      // Fallback: try reading from the cartesian grid element itself
      const gridValue = await this.page.locator(this.selector_cartesianGrid).getAttribute('stroke-dasharray');
      if (gridValue === null) {
        throw new Error(
          `SpendingOverTimeChartPOM: strokeDasharray attribute is null on CartesianGrid. Selector: ${this.selector_cartesianGrid}`
        );
      }
      return gridValue;
    }

    return value;
  }

  /**
   * @desc Get the position and dimensions of the ResponsiveContainer to verify 100% width × 400px height
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the responsive container
   * @throws {Error} When the bounding box cannot be retrieved
   */
  async getResponsiveContainerBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page.locator(this.selector_responsiveContainerWrapper).boundingBox();

    if (!box) {
      throw new Error(
        `SpendingOverTimeChartPOM: Could not get bounding box for responsive container. Selector: ${this.selector_responsiveContainerWrapper}`
      );
    }

    return box;
  }

  /**
   * @desc Read the fill color attribute of the credit bar series to verify green (#10B981)
   * @returns {Promise<string>} The fill attribute value of the credit bar series
   * @throws {Error} When the fill attribute is not accessible or null
   */
  async getCreditBarSeriesFillAttribute(): Promise<string> {
    await this.page.locator(this.selector_creditBarSeries).isVisible();
    const value = await this.page.locator(this.selector_creditBarSeries).getAttribute('fill');

    if (value === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: fill attribute is null on credit bar series. Selector: ${this.selector_creditBarSeries}`
      );
    }

    return value;
  }

  /**
   * @desc Count the number of individual credit bar rectangles rendered (one per month)
   * @returns {Promise<number>} The count of credit bar rectangles
   */
  async getCreditBarCount(): Promise<number> {
    return await this.page.locator(`${this.selector_creditBarSeries} .recharts-bar-rectangle`).count();
  }

  /**
   * @desc Get the bounding box of a specific month's credit bar rectangle
   * @param {number} rowIndex - The 1-based index of the bar rectangle
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the credit bar cell
   * @throws {Error} When the bounding box cannot be retrieved
   */
  async getCreditBarCellBoundingBox(rowIndex: number): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page.locator(this.selector_creditBarCell(rowIndex)).boundingBox();

    if (!box) {
      throw new Error(
        `SpendingOverTimeChartPOM: Could not get bounding box for credit bar cell at index ${rowIndex}. Selector: ${this.selector_creditBarCell(rowIndex)}`
      );
    }

    return box;
  }

  /**
   * @desc Read the fill color attribute of the investmentDebit bar series to verify silver (#C0C0C0)
   * @returns {Promise<string>} The fill attribute value of the investmentDebit bar series
   * @throws {Error} When the fill attribute is not accessible or null
   */
  async getInvestmentDebitBarSeriesFillAttribute(): Promise<string> {
    await this.page.locator(this.selector_investmentDebitBarSeries).isVisible();
    const value = await this.page.locator(this.selector_investmentDebitBarSeries).getAttribute('fill');

    if (value === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: fill attribute is null on investmentDebit bar series. Selector: ${this.selector_investmentDebitBarSeries}`
      );
    }

    return value;
  }

  /**
   * @desc Count the number of individual investmentDebit bar rectangles rendered (one per month)
   * @returns {Promise<number>} The count of investmentDebit bar rectangles
   */
  async getInvestmentDebitBarCount(): Promise<number> {
    return await this.page.locator(`${this.selector_investmentDebitBarSeries} .recharts-bar-rectangle`).count();
  }

  /**
   * @desc Get the bounding box of a specific month's investmentDebit bar rectangle
   * @param {number} rowIndex - The 1-based index of the bar rectangle
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the investmentDebit bar cell
   * @throws {Error} When the bounding box cannot be retrieved
   */
  async getInvestmentDebitBarCellBoundingBox(rowIndex: number): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page.locator(this.selector_investmentDebitBarCell(rowIndex)).boundingBox();

    if (!box) {
      throw new Error(
        `SpendingOverTimeChartPOM: Could not get bounding box for investmentDebit bar cell at index ${rowIndex}. Selector: ${this.selector_investmentDebitBarCell(rowIndex)}`
      );
    }

    return box;
  }

  /**
   * @desc Read the fill color attribute of the trueDebit bar series to verify red (#EF4444)
   * @returns {Promise<string>} The fill attribute value of the trueDebit bar series
   * @throws {Error} When the fill attribute is not accessible or null
   */
  async getTrueDebitBarSeriesFillAttribute(): Promise<string> {
    await this.page.locator(this.selector_trueDebitBarSeries).isVisible();
    const value = await this.page.locator(this.selector_trueDebitBarSeries).getAttribute('fill');

    if (value === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: fill attribute is null on trueDebit bar series. Selector: ${this.selector_trueDebitBarSeries}`
      );
    }

    return value;
  }

  /**
   * @desc Count the number of individual trueDebit bar rectangles rendered (one per month)
   * @returns {Promise<number>} The count of trueDebit bar rectangles
   */
  async getTrueDebitBarCount(): Promise<number> {
    return await this.page.locator(`${this.selector_trueDebitBarSeries} .recharts-bar-rectangle`).count();
  }

  /**
   * @desc Get the bounding box of a specific month's trueDebit bar rectangle
   * @param {number} rowIndex - The 1-based index of the bar rectangle
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the trueDebit bar cell
   * @throws {Error} When the bounding box cannot be retrieved
   */
  async getTrueDebitBarCellBoundingBox(rowIndex: number): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page.locator(this.selector_trueDebitBarCell(rowIndex)).boundingBox();

    if (!box) {
      throw new Error(
        `SpendingOverTimeChartPOM: Could not get bounding box for trueDebit bar cell at index ${rowIndex}. Selector: ${this.selector_trueDebitBarCell(rowIndex)}`
      );
    }

    return box;
  }

  /**
   * @desc Get the full inner HTML of the tooltip white card container to inspect all rendered rows
   * @returns {Promise<string>} The inner HTML of the tooltip container
   * @throws {Error} When the inner HTML cannot be retrieved
   */
  async getTooltipContainerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_tooltipContainer).isVisible();
    const html = await this.page.locator(this.selector_tooltipContainer).innerHTML();

    if (!html) {
      throw new Error(
        `SpendingOverTimeChartPOM: Tooltip container inner HTML is empty or inaccessible. Selector: ${this.selector_tooltipContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Read the formatted month heading text from the tooltip
   * @returns {Promise<string>} The tooltip month label text exactly as it appears
   * @throws {Error} When the tooltip month label text content is not accessible or null
   */
  async getTooltipMonthLabelText(): Promise<string> {
    await this.page.locator(this.selector_tooltipMonthLabel).isVisible();
    const text = await this.page.locator(this.selector_tooltipMonthLabel).textContent();

    if (text === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: Tooltip month label text content is null. Selector: ${this.selector_tooltipMonthLabel}`
      );
    }

    return text;
  }

  /**
   * @desc Read the expenses row text (e.g. 'Expenses: £X') from the tooltip
   * @returns {Promise<string>} The tooltip expenses row text exactly as it appears
   * @throws {Error} When the tooltip expenses row text content is not accessible or null
   */
  async getTooltipExpensesRowText(): Promise<string> {
    await this.page.locator(this.selector_tooltipExpensesRow).isVisible();
    const text = await this.page.locator(this.selector_tooltipExpensesRow).textContent();

    if (text === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: Tooltip expenses row text content is null. Selector: ${this.selector_tooltipExpensesRow}`
      );
    }

    return text;
  }

  /**
   * @desc Read the investment row text (e.g. 'Investment: £X') from the tooltip — conditionally rendered when investmentDebit > 0
   * @returns {Promise<string>} The tooltip investment row text exactly as it appears
   * @throws {Error} When the tooltip investment row text content is not accessible or null
   */
  async getTooltipInvestmentRowText(): Promise<string> {
    await this.page.locator(this.selector_tooltipInvestmentRow).isVisible();
    const text = await this.page.locator(this.selector_tooltipInvestmentRow).textContent();

    if (text === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: Tooltip investment row text content is null. Selector: ${this.selector_tooltipInvestmentRow}`
      );
    }

    return text;
  }

  /**
   * @desc Read the total outgoing row text (e.g. 'Total outgoing: £X') from the tooltip — conditionally rendered when investmentDebit > 0
   * @returns {Promise<string>} The tooltip total outgoing row text exactly as it appears
   * @throws {Error} When the tooltip total outgoing row text content is not accessible or null
   */
  async getTooltipTotalOutgoingRowText(): Promise<string> {
    await this.page.locator(this.selector_tooltipTotalOutgoingRow).isVisible();
    const text = await this.page.locator(this.selector_tooltipTotalOutgoingRow).textContent();

    if (text === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: Tooltip total outgoing row text content is null. Selector: ${this.selector_tooltipTotalOutgoingRow}`
      );
    }

    return text;
  }

  /**
   * @desc Read the income row text (e.g. 'Income: £X') from the tooltip
   * @returns {Promise<string>} The tooltip income row text exactly as it appears
   * @throws {Error} When the tooltip income row text content is not accessible or null
   */
  async getTooltipIncomeRowText(): Promise<string> {
    await this.page.locator(this.selector_tooltipIncomeRow).isVisible();
    const text = await this.page.locator(this.selector_tooltipIncomeRow).textContent();

    if (text === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: Tooltip income row text content is null. Selector: ${this.selector_tooltipIncomeRow}`
      );
    }

    return text;
  }

  /**
   * @desc Read the net row text (e.g. 'Net: £X') from the tooltip
   * @returns {Promise<string>} The tooltip net row text exactly as it appears
   * @throws {Error} When the tooltip net row text content is not accessible or null
   */
  async getTooltipNetRowText(): Promise<string> {
    await this.page.locator(this.selector_tooltipNetRow).isVisible();
    const text = await this.page.locator(this.selector_tooltipNetRow).textContent();

    if (text === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: Tooltip net row text content is null. Selector: ${this.selector_tooltipNetRow}`
      );
    }

    return text;
  }

  /**
   * @desc Read the transaction count text (e.g. 'N transactions') from the tooltip
   * @returns {Promise<string>} The tooltip transaction count text exactly as it appears
   * @throws {Error} When the tooltip transaction count text content is not accessible or null
   */
  async getTooltipTransactionCountText(): Promise<string> {
    await this.page.locator(this.selector_tooltipTransactionCount).isVisible();
    const text = await this.page.locator(this.selector_tooltipTransactionCount).textContent();

    if (text === null) {
      throw new Error(
        `SpendingOverTimeChartPOM: Tooltip transaction count text content is null. Selector: ${this.selector_tooltipTransactionCount}`
      );
    }

    return text;
  }
}