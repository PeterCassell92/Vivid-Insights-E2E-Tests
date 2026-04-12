/**
 * Page Object Model: SpendingOverTimeChart
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class SpendingOverTimeChartPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_chartContainer;
    private readonly selector_emptyState;
    private readonly selector_legendWrapper;
    private readonly selector_barChartSvg;
    private readonly selector_yAxis;
    private readonly selector_xAxis;
    private readonly selector_cartesianGrid;
    private readonly selector_responsiveContainerWrapper;
    private readonly selector_creditBarSeries;
    private readonly selector_investmentDebitBarSeries;
    private readonly selector_trueDebitBarSeries;
    private readonly selector_tooltipWrapper;
    private readonly selector_tooltipContainer;
    private readonly selector_tooltipMonthLabel;
    private readonly selector_tooltipExpensesRow;
    private readonly selector_tooltipInvestmentRow;
    private readonly selector_tooltipTotalOutgoingRow;
    private readonly selector_tooltipIncomeRow;
    private readonly selector_tooltipNetRow;
    private readonly selector_tooltipTransactionCount;
    private readonly selector_creditBarCell;
    private readonly selector_investmentDebitBarCell;
    private readonly selector_trueDebitBarCell;
    constructor(page: Page);
    /**
     * @desc Checks if the SpendingOverTimeChart is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the chart root wrapper is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a SpendingOverTimeChartPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<SpendingOverTimeChartPOM>} A SpendingOverTimeChartPOM instance
     * @throws {Error} When the chart root wrapper is not visible
     */
    static getPOM(page: Page): Promise<SpendingOverTimeChartPOM>;
    /**
     * @desc Check whether the chart root wrapper is visible (i.e. data is present and chart is rendered)
     * @returns {Promise<boolean>} True if the chart container is visible
     */
    isChartContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the empty state element is visible (i.e. data.length === 0)
     * @returns {Promise<boolean>} True if the empty state is visible
     */
    isEmptyStateVisible(): Promise<boolean>;
    /**
     * @desc Check whether the legend is visible in the chart
     * @returns {Promise<boolean>} True if the legend wrapper is visible
     */
    isLegendVisible(): Promise<boolean>;
    /**
     * @desc Check whether the Recharts BarChart SVG wrapper is visible
     * @returns {Promise<boolean>} True if the bar chart SVG wrapper is visible
     */
    isBarChartSvgVisible(): Promise<boolean>;
    /**
     * @desc Check whether the Y-axis is visible in the chart
     * @returns {Promise<boolean>} True if the Y-axis is visible
     */
    isYAxisVisible(): Promise<boolean>;
    /**
     * @desc Check whether the X-axis is visible in the chart
     * @returns {Promise<boolean>} True if the X-axis is visible
     */
    isXAxisVisible(): Promise<boolean>;
    /**
     * @desc Check whether the CartesianGrid is visible in the chart
     * @returns {Promise<boolean>} True if the cartesian grid is visible
     */
    isCartesianGridVisible(): Promise<boolean>;
    /**
     * @desc Check whether the ResponsiveContainer wrapper is visible
     * @returns {Promise<boolean>} True if the responsive container is visible
     */
    isResponsiveContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the credit/income bar series is visible in the chart
     * @returns {Promise<boolean>} True if the credit bar series is visible
     */
    isCreditBarSeriesVisible(): Promise<boolean>;
    /**
     * @desc Check whether the investmentDebit bar series is visible in the chart
     * @returns {Promise<boolean>} True if the investmentDebit bar series is visible
     */
    isInvestmentDebitBarSeriesVisible(): Promise<boolean>;
    /**
     * @desc Check whether the trueDebit/expenses bar series is visible in the chart
     * @returns {Promise<boolean>} True if the trueDebit bar series is visible
     */
    isTrueDebitBarSeriesVisible(): Promise<boolean>;
    /**
     * @desc Check whether the tooltip wrapper is currently visible (i.e. a bar is being hovered)
     * @returns {Promise<boolean>} True if the tooltip wrapper is visible
     */
    isTooltipVisible(): Promise<boolean>;
    /**
     * @desc Check whether the investment row is conditionally rendered in the tooltip
     * @returns {Promise<boolean>} True if the investment row is visible in the tooltip
     */
    isTooltipInvestmentRowVisible(): Promise<boolean>;
    /**
     * @desc Check whether the total outgoing row is conditionally rendered in the tooltip
     * @returns {Promise<boolean>} True if the total outgoing row is visible in the tooltip
     */
    isTooltipTotalOutgoingRowVisible(): Promise<boolean>;
    /**
     * @desc Hover over the BarChart SVG wrapper to trigger the custom inline tooltip
     * Expected outcome is that the tooltip will appear displaying monthly spending breakdown
     */
    hoverBarChartSvg(): Promise<void>;
    /**
     * @desc Hover over the credit/income bar series to activate the tooltip for that month
     * Expected outcome is that the tooltip will appear for the hovered month
     */
    hoverCreditBarSeries(): Promise<void>;
    /**
     * @desc Hover over an individual credit bar rectangle for a specific month to trigger the tooltip
     * Expected outcome is that the tooltip will appear for that specific month
     * @param {number} rowIndex - The 1-based index of the bar rectangle to hover
     */
    hoverCreditBarCell(rowIndex: number): Promise<void>;
    /**
     * @desc Hover over the investmentDebit bar series to activate the tooltip for that month
     * Expected outcome is that the tooltip will appear for the hovered month
     */
    hoverInvestmentDebitBarSeries(): Promise<void>;
    /**
     * @desc Hover over an individual investmentDebit bar rectangle for a specific month to trigger the tooltip
     * Expected outcome is that the tooltip will appear for that specific month
     * @param {number} rowIndex - The 1-based index of the bar rectangle to hover
     */
    hoverInvestmentDebitBarCell(rowIndex: number): Promise<void>;
    /**
     * @desc Hover over the trueDebit/expenses bar series to activate the tooltip for that month
     * Expected outcome is that the tooltip will appear for the hovered month
     */
    hoverTrueDebitBarSeries(): Promise<void>;
    /**
     * @desc Hover over an individual trueDebit bar rectangle for a specific month to trigger the tooltip
     * Expected outcome is that the tooltip will appear for that specific month
     * @param {number} rowIndex - The 1-based index of the bar rectangle to hover
     */
    hoverTrueDebitBarCell(rowIndex: number): Promise<void>;
    /**
     * @desc Scroll within the responsive container if chart overflows its bounds
     * Expected outcome is that the chart scrolls within the responsive container
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollResponsiveContainer(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Read the data-testid attribute value from the chart root wrapper
     * @returns {Promise<string>} The data-testid attribute value
     * @throws {Error} When the attribute is not accessible or null
     */
    getChartContainerTestId(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the chart root container
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the chart container
     * @throws {Error} When the bounding box cannot be retrieved
     */
    getChartContainerBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Read the empty state message text ('No transaction data available')
     * @returns {Promise<string>} The empty state message text exactly as it appears
     * @throws {Error} When the empty state text content is not accessible or null
     */
    getEmptyStateText(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the empty state container to verify h-[400px] height
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the empty state container
     * @throws {Error} When the bounding box cannot be retrieved
     */
    getEmptyStateBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Read the data-testid attribute value from the empty state element
     * @returns {Promise<string>} The data-testid attribute value
     * @throws {Error} When the attribute is not accessible or null
     */
    getEmptyStateTestId(): Promise<string>;
    /**
     * @desc Read the visible legend label text (Expenses, Investment, Income)
     * @returns {Promise<string>} The legend text exactly as it appears
     * @throws {Error} When the legend text content is not accessible or null
     */
    getLegendText(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the legend wrapper to inspect rendered legend items
     * @returns {Promise<string>} The inner HTML of the legend wrapper
     * @throws {Error} When the inner HTML cannot be retrieved
     */
    getLegendInnerHtml(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the BarChart wrapper
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the bar chart wrapper
     * @throws {Error} When the bounding box cannot be retrieved
     */
    getBarChartSvgBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the inner HTML of the BarChart wrapper to inspect rendered SVG structure
     * @returns {Promise<string>} The inner HTML of the bar chart wrapper
     * @throws {Error} When the inner HTML cannot be retrieved
     */
    getBarChartSvgInnerHtml(): Promise<string>;
    /**
     * @desc Read the currency-formatted tick label text rendered on the Y-axis
     * @returns {Promise<string>} The Y-axis text exactly as it appears
     * @throws {Error} When the Y-axis text content is not accessible or null
     */
    getYAxisText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the Y-axis to inspect all tick labels
     * @returns {Promise<string>} The inner HTML of the Y-axis
     * @throws {Error} When the inner HTML cannot be retrieved
     */
    getYAxisInnerHtml(): Promise<string>;
    /**
     * @desc Read the month label text rendered on the X-axis (formatted via formatMonth)
     * @returns {Promise<string>} The X-axis text exactly as it appears
     * @throws {Error} When the X-axis text content is not accessible or null
     */
    getXAxisText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the X-axis to inspect all rendered month tick labels
     * @returns {Promise<string>} The inner HTML of the X-axis
     * @throws {Error} When the inner HTML cannot be retrieved
     */
    getXAxisInnerHtml(): Promise<string>;
    /**
     * @desc Read the strokeDasharray attribute of the CartesianGrid to verify '3 3' dashed pattern
     * @returns {Promise<string>} The strokeDasharray attribute value
     * @throws {Error} When the attribute is not accessible or null
     */
    getCartesianGridStrokeDasharray(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the ResponsiveContainer to verify 100% width × 400px height
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the responsive container
     * @throws {Error} When the bounding box cannot be retrieved
     */
    getResponsiveContainerBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Read the fill color attribute of the credit bar series to verify green (#10B981)
     * @returns {Promise<string>} The fill attribute value of the credit bar series
     * @throws {Error} When the fill attribute is not accessible or null
     */
    getCreditBarSeriesFillAttribute(): Promise<string>;
    /**
     * @desc Count the number of individual credit bar rectangles rendered (one per month)
     * @returns {Promise<number>} The count of credit bar rectangles
     */
    getCreditBarCount(): Promise<number>;
    /**
     * @desc Get the bounding box of a specific month's credit bar rectangle
     * @param {number} rowIndex - The 1-based index of the bar rectangle
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the credit bar cell
     * @throws {Error} When the bounding box cannot be retrieved
     */
    getCreditBarCellBoundingBox(rowIndex: number): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Read the fill color attribute of the investmentDebit bar series to verify silver (#C0C0C0)
     * @returns {Promise<string>} The fill attribute value of the investmentDebit bar series
     * @throws {Error} When the fill attribute is not accessible or null
     */
    getInvestmentDebitBarSeriesFillAttribute(): Promise<string>;
    /**
     * @desc Count the number of individual investmentDebit bar rectangles rendered (one per month)
     * @returns {Promise<number>} The count of investmentDebit bar rectangles
     */
    getInvestmentDebitBarCount(): Promise<number>;
    /**
     * @desc Get the bounding box of a specific month's investmentDebit bar rectangle
     * @param {number} rowIndex - The 1-based index of the bar rectangle
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the investmentDebit bar cell
     * @throws {Error} When the bounding box cannot be retrieved
     */
    getInvestmentDebitBarCellBoundingBox(rowIndex: number): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Read the fill color attribute of the trueDebit bar series to verify red (#EF4444)
     * @returns {Promise<string>} The fill attribute value of the trueDebit bar series
     * @throws {Error} When the fill attribute is not accessible or null
     */
    getTrueDebitBarSeriesFillAttribute(): Promise<string>;
    /**
     * @desc Count the number of individual trueDebit bar rectangles rendered (one per month)
     * @returns {Promise<number>} The count of trueDebit bar rectangles
     */
    getTrueDebitBarCount(): Promise<number>;
    /**
     * @desc Get the bounding box of a specific month's trueDebit bar rectangle
     * @param {number} rowIndex - The 1-based index of the bar rectangle
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the trueDebit bar cell
     * @throws {Error} When the bounding box cannot be retrieved
     */
    getTrueDebitBarCellBoundingBox(rowIndex: number): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the full inner HTML of the tooltip white card container to inspect all rendered rows
     * @returns {Promise<string>} The inner HTML of the tooltip container
     * @throws {Error} When the inner HTML cannot be retrieved
     */
    getTooltipContainerInnerHtml(): Promise<string>;
    /**
     * @desc Read the formatted month heading text from the tooltip
     * @returns {Promise<string>} The tooltip month label text exactly as it appears
     * @throws {Error} When the tooltip month label text content is not accessible or null
     */
    getTooltipMonthLabelText(): Promise<string>;
    /**
     * @desc Read the expenses row text (e.g. 'Expenses: £X') from the tooltip
     * @returns {Promise<string>} The tooltip expenses row text exactly as it appears
     * @throws {Error} When the tooltip expenses row text content is not accessible or null
     */
    getTooltipExpensesRowText(): Promise<string>;
    /**
     * @desc Read the investment row text (e.g. 'Investment: £X') from the tooltip — conditionally rendered when investmentDebit > 0
     * @returns {Promise<string>} The tooltip investment row text exactly as it appears
     * @throws {Error} When the tooltip investment row text content is not accessible or null
     */
    getTooltipInvestmentRowText(): Promise<string>;
    /**
     * @desc Read the total outgoing row text (e.g. 'Total outgoing: £X') from the tooltip — conditionally rendered when investmentDebit > 0
     * @returns {Promise<string>} The tooltip total outgoing row text exactly as it appears
     * @throws {Error} When the tooltip total outgoing row text content is not accessible or null
     */
    getTooltipTotalOutgoingRowText(): Promise<string>;
    /**
     * @desc Read the income row text (e.g. 'Income: £X') from the tooltip
     * @returns {Promise<string>} The tooltip income row text exactly as it appears
     * @throws {Error} When the tooltip income row text content is not accessible or null
     */
    getTooltipIncomeRowText(): Promise<string>;
    /**
     * @desc Read the net row text (e.g. 'Net: £X') from the tooltip
     * @returns {Promise<string>} The tooltip net row text exactly as it appears
     * @throws {Error} When the tooltip net row text content is not accessible or null
     */
    getTooltipNetRowText(): Promise<string>;
    /**
     * @desc Read the transaction count text (e.g. 'N transactions') from the tooltip
     * @returns {Promise<string>} The tooltip transaction count text exactly as it appears
     * @throws {Error} When the tooltip transaction count text content is not accessible or null
     */
    getTooltipTransactionCountText(): Promise<string>;
}
