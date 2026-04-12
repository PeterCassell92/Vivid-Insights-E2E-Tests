/**
 * Page Object Model: TransactionCategoryPieChart
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TransactionCategoryPieChartPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_pieChartContainer;
    private readonly selector_tooltipContainer;
    private readonly selector_tooltipCategoryName;
    private readonly selector_tooltipAmount;
    private readonly selector_tooltipTransactionCount;
    private readonly selector_tooltipPercentage;
    private readonly selector_tooltipExpandHint;
    private readonly selector_emptyState;
    private readonly selector_drillDownHeader;
    private readonly selector_backButton;
    private readonly selector_pieChartCanvas;
    private readonly selector_otherSliceHint;
    private readonly selector_chartLegend;
    private readonly selector_pieSlice;
    private readonly selector_legendItem;
    private readonly selector_legendLabel;
    private readonly selector_legendColorSwatch;
    constructor(page: Page);
    /**
     * @desc Checks if the TransactionCategoryPieChart component is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the pie chart root container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method to get a TransactionCategoryPieChartPOM instance.
     * Validates that the component is visible before returning the instance.
     * @param page - Playwright Page instance
     * @returns {Promise<TransactionCategoryPieChartPOM>} POM instance
     * @throws {Error} When the pie chart root container is not visible
     */
    static getPOM(page: Page): Promise<TransactionCategoryPieChartPOM>;
    /**
     * @desc Whether or not the pie chart root container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the pie chart container is visible
     */
    isPieChartContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the empty-state message is visible, indicating no categorized transaction data is available
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the empty state element is visible
     */
    isEmptyStateVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the drill-down header is visible, confirming the chart is currently in drilled-down state
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the drill-down header is visible
     */
    isDrillDownHeaderVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the Recharts ResponsiveContainer (pie chart canvas) is visible and rendered
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the pie chart canvas is visible
     */
    isPieChartCanvasVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the 'Click the Other slice to expand' hint text is visible
     * Only shown when not drilled down and an Other entry exists.
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the other-slice hint is visible
     */
    isOtherSliceHintVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the legend container is visible below the chart
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the chart legend is visible
     */
    isChartLegendVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the back button inside the drill-down header to return to the overview
     * Expected outcome is that the chart returns to the overview state (drilledDown = false)
     * @throws {Error} When the drill-down header or back button is not visible
     */
    clickBackButton(): Promise<void>;
    /**
     * @desc Hovers over the pie chart canvas area to trigger Recharts tooltip rendering on individual slices
     * Expected outcome is that the tooltip becomes visible over the hovered slice
     * @throws {Error} When the pie chart canvas is not visible
     */
    hoverPieChartCanvas(): Promise<void>;
    /**
     * @desc Hovers over a specific pie slice by its 1-based index to trigger the tooltip
     * Expected outcome is that the tooltip becomes visible for the targeted slice
     * @param {number} sliceIndex - The 1-based index of the pie slice to hover
     * @throws {Error} When the specified pie slice is not visible
     */
    hoverPieSlice(sliceIndex: number): Promise<void>;
    /**
     * @desc Reads the empty-state message text ('No categorized transaction data available')
     * @returns {Promise<string>} The empty-state message text exactly as it appears in the UI
     * @throws {Error} When the empty-state element content is not accessible or null
     */
    getEmptyStateText(): Promise<string>;
    /**
     * @desc Reads the full text of the drill-down header, including the back button label
     * and the 'Other' summary label (category count and total amount)
     * @returns {Promise<string>} The drill-down header text exactly as it appears in the UI
     * @throws {Error} When the drill-down header content is not accessible or null
     */
    getDrillDownHeaderText(): Promise<string>;
    /**
     * @desc Gets the position and dimensions of the pie chart canvas to verify layout and sizing
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the pie chart canvas
     * @throws {Error} When the pie chart canvas is not visible or bounding box cannot be retrieved
     */
    getPieChartCanvasBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Reads the hint text content prompting the user to click the Other slice
     * @returns {Promise<string>} The other-slice hint text exactly as it appears in the UI
     * @throws {Error} When the other-slice hint content is not accessible or null
     */
    getOtherSliceHintText(): Promise<string>;
    /**
     * @desc Gets the text label of a legend item by its 1-based index
     * @param {number} itemIndex - The 1-based index of the legend item
     * @returns {Promise<string>} The legend label text exactly as it appears in the UI
     * @throws {Error} When the legend label content is not accessible or null
     */
    getLegendLabelText(itemIndex: number): Promise<string>;
    /**
     * @desc Gets the tooltip category name text when a tooltip is visible
     * @returns {Promise<string>} The tooltip category name exactly as it appears in the UI
     * @throws {Error} When the tooltip category name content is not accessible or null
     */
    getTooltipCategoryName(): Promise<string>;
    /**
     * @desc Gets the tooltip amount text when a tooltip is visible
     * @returns {Promise<string>} The tooltip amount text exactly as it appears in the UI
     * @throws {Error} When the tooltip amount content is not accessible or null
     */
    getTooltipAmount(): Promise<string>;
    /**
     * @desc Gets the tooltip transaction count text when a tooltip is visible
     * @returns {Promise<string>} The tooltip transaction count text exactly as it appears in the UI
     * @throws {Error} When the tooltip transaction count content is not accessible or null
     */
    getTooltipTransactionCount(): Promise<string>;
    /**
     * @desc Gets the tooltip percentage text when a tooltip is visible
     * @returns {Promise<string>} The tooltip percentage text exactly as it appears in the UI
     * @throws {Error} When the tooltip percentage content is not accessible or null
     */
    getTooltipPercentage(): Promise<string>;
    /**
     * @desc Gets the tooltip expand hint text ('Click to expand') when visible on the Other slice tooltip
     * @returns {Promise<string>} The tooltip expand hint text exactly as it appears in the UI
     * @throws {Error} When the tooltip expand hint content is not accessible or null
     */
    getTooltipExpandHintText(): Promise<string>;
    /**
     * @desc Whether or not the tooltip expand hint is visible (only shown when hovering the Other slice in overview mode)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the tooltip expand hint is visible
     */
    isTooltipExpandHintVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the tooltip container is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the tooltip container is visible
     */
    isTooltipVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not a specific legend item is visible by its 1-based index
     * @param {number} itemIndex - The 1-based index of the legend item
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the legend item is visible
     */
    isLegendItemVisible(itemIndex: number, timeout?: number): Promise<boolean>;
}
