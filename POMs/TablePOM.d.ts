/**
 * Page Object Model: Table
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TablePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_tableContainer;
    private readonly selector_tableElement;
    private readonly selector_tableHeader;
    private readonly selector_tableBody;
    private readonly selector_tableFooter;
    private readonly selector_tableCaption;
    private readonly selector_tableHead;
    private readonly selector_tableCell;
    private readonly selector_tableRowInHeader;
    private readonly selector_tableRowInBody;
    private readonly selector_tableRowSelected;
    private readonly selector_tableRowInFooter;
    private readonly selector_tableHeadByIndex;
    private readonly selector_tableCellByIndex;
    private readonly selector_tableRowInBodyByIndex;
    private readonly selector_tableRowInFooterByIndex;
    private readonly selector_tableRowInHeaderByIndex;
    constructor(page: Page);
    /**
     * @desc Checks if the Table component is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the table container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a TablePOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TablePOM>} A TablePOM instance
     * @throws {Error} When the table container is not visible
     */
    static getPOM(page: Page): Promise<TablePOM>;
    /**
     * @desc Whether or not the table container is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the table container is visible
     */
    isTableContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the table caption is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the table caption is visible
     */
    isTableCaptionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the table footer section is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the table footer is visible
     */
    isTableFooterVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the table body section is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the table body is visible
     */
    isTableBodyVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the table header section is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the table header is visible
     */
    isTableHeaderVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Horizontally scrolls the table container by a given pixel amount
     * Expected outcome is that the table content scrolls horizontally
     * @param {number} scrollX - The number of pixels to scroll horizontally
     */
    scrollTableContainer(scrollX: number): Promise<void>;
    /**
     * @desc Clicks a footer row by its zero-based index
     * Expected outcome is that footer-level interactions are triggered
     * @param {number} index - Zero-based index of the footer row to click
     */
    clickTableRowInFooter(index: number): Promise<void>;
    /**
     * @desc Clicks a header cell by its zero-based index
     * Expected outcome is that sorting or column-level actions are triggered
     * @param {number} index - Zero-based index of the header cell to click
     */
    clickTableHead(index: number): Promise<void>;
    /**
     * @desc Clicks a data cell by its zero-based index
     * Expected outcome is that cell-level interactions such as inline editing or selection are triggered
     * @param {number} index - Zero-based index of the data cell to click
     */
    clickTableCell(index: number): Promise<void>;
    /**
     * @desc Clicks a header row by its zero-based index
     * Expected outcome is that header-level actions such as select-all are triggered
     * @param {number} index - Zero-based index of the header row to click
     */
    clickTableRowInHeader(index: number): Promise<void>;
    /**
     * @desc Hovers over a table body row by its zero-based index
     * Expected outcome is that the hover highlight (bg-muted/50) styling is applied
     * @param {number} index - Zero-based index of the body row to hover
     */
    hoverTableRowInBody(index: number): Promise<void>;
    /**
     * @desc Clicks a table body row by its zero-based index
     * Expected outcome is that selection or row-level actions are triggered
     * @param {number} index - Zero-based index of the body row to click
     */
    clickTableRowInBody(index: number): Promise<void>;
    /**
     * @desc Gets the data-slot attribute value of the table scroll container
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the attribute content is not accessible or null
     */
    getTableContainerDataSlot(): Promise<string>;
    /**
     * @desc Gets the bounding box (position and dimensions) of the table scroll container
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the container
     * @throws {Error} When the bounding box cannot be retrieved
     */
    getTableContainerBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Counts the number of rows in the table footer
     * @returns {Promise<number>} The total number of footer rows
     */
    getTableRowInFooterCount(): Promise<number>;
    /**
     * @desc Gets the data-slot attribute value of a footer row by its zero-based index
     * @param {number} index - Zero-based index of the footer row
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the attribute content is not accessible or null
     */
    getTableRowInFooterDataSlot(index: number): Promise<string>;
    /**
     * @desc Gets the data-slot attribute value of a header cell by its zero-based index
     * @param {number} index - Zero-based index of the header cell
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the attribute content is not accessible or null
     */
    getTableHeadDataSlot(index: number): Promise<string>;
    /**
     * @desc Gets the visible text content of a header cell by its zero-based index
     * @param {number} index - Zero-based index of the header cell
     * @returns {Promise<string>} The text content exactly as it appears
     * @throws {Error} When the text content is not accessible or null
     */
    getTableHeadText(index: number): Promise<string>;
    /**
     * @desc Counts the total number of header cells in the table
     * @returns {Promise<number>} The total number of header cells
     */
    getTableHeadCount(): Promise<number>;
    /**
     * @desc Gets the inner HTML of a header cell by its zero-based index
     * @param {number} index - Zero-based index of the header cell
     * @returns {Promise<string>} The inner HTML exactly as it appears
     * @throws {Error} When the inner HTML is not accessible or null
     */
    getTableHeadInnerHtml(index: number): Promise<string>;
    /**
     * @desc Gets a list of all header cell text values across the table
     * @returns {Promise<string[]>} Array of header cell text values exactly as they appear
     */
    getTableHeadTextList(): Promise<string[]>;
    /**
     * @desc Gets the data-slot attribute value of a data cell by its zero-based index
     * @param {number} index - Zero-based index of the data cell
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the attribute content is not accessible or null
     */
    getTableCellDataSlot(index: number): Promise<string>;
    /**
     * @desc Gets a list of all data cell text values across the table
     * @returns {Promise<string[]>} Array of data cell text values exactly as they appear
     */
    getTableCellTextList(): Promise<string[]>;
    /**
     * @desc Counts the total number of data cells in the table
     * @returns {Promise<number>} The total number of data cells
     */
    getTableCellCount(): Promise<number>;
    /**
     * @desc Gets the inner HTML of a data cell by its zero-based index
     * @param {number} index - Zero-based index of the data cell
     * @returns {Promise<string>} The inner HTML exactly as it appears
     * @throws {Error} When the inner HTML is not accessible or null
     */
    getTableCellInnerHtml(index: number): Promise<string>;
    /**
     * @desc Gets the visible text content of a data cell by its zero-based index
     * @param {number} index - Zero-based index of the data cell
     * @returns {Promise<string>} The text content exactly as it appears
     * @throws {Error} When the text content is not accessible or null
     */
    getTableCellText(index: number): Promise<string>;
    /**
     * @desc Gets the visible text content of the table caption
     * @returns {Promise<string>} The caption text exactly as it appears
     * @throws {Error} When the caption text content is not accessible or null
     */
    getTableCaptionText(): Promise<string>;
    /**
     * @desc Gets the data-slot attribute value of the caption element
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the attribute content is not accessible or null
     */
    getTableCaptionDataSlot(): Promise<string>;
    /**
     * @desc Gets the data-slot attribute value of the native table element
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the attribute content is not accessible or null
     */
    getTableElementDataSlot(): Promise<string>;
    /**
     * @desc Gets the full inner HTML of the table element, capturing all rows, cells, and content
     * @returns {Promise<string>} The inner HTML exactly as it appears
     * @throws {Error} When the inner HTML is not accessible or null
     */
    getTableElementInnerHtml(): Promise<string>;
    /**
     * @desc Gets the CSS class list applied to the native table element
     * @returns {Promise<string[]>} Array of CSS class names applied to the table element
     * @throws {Error} When the class attribute is not accessible
     */
    getTableElementClassList(): Promise<string[]>;
    /**
     * @desc Counts the number of rows in the table header
     * @returns {Promise<number>} The total number of header rows
     */
    getTableRowInHeaderCount(): Promise<number>;
    /**
     * @desc Gets the data-slot attribute value of a header row by its zero-based index
     * @param {number} index - Zero-based index of the header row
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the attribute content is not accessible or null
     */
    getTableRowInHeaderDataSlot(index: number): Promise<string>;
    /**
     * @desc Counts the number of currently selected rows in the table body
     * @returns {Promise<number>} The total number of selected body rows
     */
    getTableRowSelectedCount(): Promise<number>;
    /**
     * @desc Gets the data-slot attribute value of a body row by its zero-based index
     * @param {number} index - Zero-based index of the body row
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the attribute content is not accessible or null
     */
    getTableRowInBodyDataSlot(index: number): Promise<string>;
    /**
     * @desc Gets the CSS class list of a body row by its zero-based index to inspect applied styles
     * @param {number} index - Zero-based index of the body row
     * @returns {Promise<string[]>} Array of CSS class names applied to the body row
     */
    getTableRowInBodyClassList(index: number): Promise<string[]>;
    /**
     * @desc Counts the total number of data rows in the table body
     * @returns {Promise<number>} The total number of body rows
     */
    getTableRowInBodyCount(): Promise<number>;
    /**
     * @desc Gets the data-state attribute of a body row by its zero-based index to determine if it is selected
     * @param {number} index - Zero-based index of the body row
     * @returns {Promise<string | null>} The data-state attribute value, or null if not set
     */
    getTableRowInBodyDataState(index: number): Promise<string | null>;
    /**
     * @desc Gets the data-slot attribute value of the tfoot element
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the attribute content is not accessible or null
     */
    getTableFooterDataSlot(): Promise<string>;
    /**
     * @desc Gets the data-slot attribute value of the tbody element
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the attribute content is not accessible or null
     */
    getTableBodyDataSlot(): Promise<string>;
    /**
     * @desc Gets the data-slot attribute value of the thead element
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the attribute content is not accessible or null
     */
    getTableHeaderDataSlot(): Promise<string>;
}
