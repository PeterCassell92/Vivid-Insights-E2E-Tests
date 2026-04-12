/**
 * Page Object Model: CategoryBreakdownTable
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class CategoryBreakdownTablePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_tableWrapper;
    private readonly selector_tableElement;
    private readonly selector_tableHead;
    private readonly selector_tableBody;
    private readonly selector_tableFoot;
    private readonly selector_categoryTotalsRow;
    private readonly selector_categoryHeaderCell;
    private readonly selector_expensesHeaderCell;
    private readonly selector_incomeHeaderCell;
    private readonly selector_transactionsHeaderCell;
    private readonly selector_percentageHeaderCell;
    private readonly selector_totalLabelCell;
    private readonly selector_totalDebitCell;
    private readonly selector_totalCreditCell;
    private readonly selector_totalCountCell;
    private readonly selector_totalPercentageCell;
    private readonly selector_categoryRow;
    private readonly selector_categoryName;
    private readonly selector_categoryNameText;
    private readonly selector_colorSwatch;
    private readonly selector_categoryExpenses;
    private readonly selector_categoryIncome;
    private readonly selector_categoryCount;
    private readonly selector_categoryPercentage;
    constructor(page: Page);
    /**
     * @desc Checks if the CategoryBreakdownTable is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the table wrapper is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method — validates visibility then returns a CategoryBreakdownTablePOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<CategoryBreakdownTablePOM>} A ready-to-use POM instance
     * @throws {Error} When the table wrapper is not visible
     */
    static getPOM(page: Page): Promise<CategoryBreakdownTablePOM>;
    /**
     * @desc Whether or not the table wrapper is visible on the page
     * @returns {Promise<boolean>} True if the table wrapper is visible
     */
    isTableVisible(): Promise<boolean>;
    /**
     * @desc Whether or not the totals footer row is visible on the page
     * @returns {Promise<boolean>} True if the totals row is visible
     */
    isTotalsRowVisible(): Promise<boolean>;
    /**
     * @desc Whether or not the category name cell is visible for a given category id
     * @param {string} id - The category's unique identifier
     * @returns {Promise<boolean>} True if the category name cell is visible
     */
    isCategoryNameVisible(id: string): Promise<boolean>;
    /**
     * @desc Whether or not the color swatch div is rendered for a given category id
     * Only present when category.color is non-null
     * @param {string} id - The category's unique identifier
     * @returns {Promise<boolean>} True if the color swatch is visible
     */
    isColorSwatchVisible(id: string): Promise<boolean>;
    /**
     * @desc Scrolls horizontally within the overflow-x-auto wrapper to reveal columns on smaller viewports
     * Expected outcome is that off-screen columns become visible
     * @param {number} scrollX - Horizontal scroll distance in pixels
     */
    scrollTableHorizontally(scrollX: number): Promise<void>;
    /**
     * @desc Hovers over the totals footer row to inspect summary values
     * Expected outcome is that any hover effects on the totals row are triggered
     */
    hoverTotalsRow(): Promise<void>;
    /**
     * @desc Hovers over a category name cell to trigger any tooltip or highlight effect
     * Expected outcome is that any hover effects on the category name cell are triggered
     * @param {string} id - The category's unique identifier
     */
    hoverCategoryNameCell(id: string): Promise<void>;
    /**
     * @desc Gets the formatted expenses (totalDebit) value displayed for a specific category
     * @param {string} id - The category's unique identifier
     * @returns {Promise<string>} The expenses value exactly as it appears in the UI
     * @throws {Error} When the expenses cell content is not accessible or null
     */
    getCategoryExpenses(id: string): Promise<string>;
    /**
     * @desc Gets the formatted income (totalCredit) value displayed for a specific category
     * @param {string} id - The category's unique identifier
     * @returns {Promise<string>} The income value exactly as it appears in the UI
     * @throws {Error} When the income cell content is not accessible or null
     */
    getCategoryIncome(id: string): Promise<string>;
    /**
     * @desc Gets the transaction count displayed for a specific category
     * @param {string} id - The category's unique identifier
     * @returns {Promise<string>} The transaction count exactly as it appears in the UI
     * @throws {Error} When the count cell content is not accessible or null
     */
    getCategoryCount(id: string): Promise<string>;
    /**
     * @desc Gets the percentage of total spend displayed for a specific category
     * @param {string} id - The category's unique identifier
     * @returns {Promise<string>} The percentage value exactly as it appears in the UI (e.g. '12.3%')
     * @throws {Error} When the percentage cell content is not accessible or null
     */
    getCategoryPercentage(id: string): Promise<string>;
    /**
     * @desc Gets the category name text from the name cell for a specific category
     * @param {string} id - The category's unique identifier
     * @returns {Promise<string>} The category name exactly as it appears in the UI
     * @throws {Error} When the category name text content is not accessible or null
     */
    getCategoryNameText(id: string): Promise<string>;
    /**
     * @desc Gets the data-testid attribute of the category name cell to extract the embedded category id
     * @param {string} id - The category's unique identifier
     * @returns {Promise<string>} The data-testid attribute value of the category name cell
     * @throws {Error} When the attribute is not accessible or null
     */
    getCategoryNameCellTestId(id: string): Promise<string>;
    /**
     * @desc Gets the CSS classes of the color swatch div to verify sizing and shape styling
     * @param {string} id - The category's unique identifier
     * @returns {Promise<string[]>} Array of CSS class names on the color swatch div
     * @throws {Error} When the class attribute is not accessible or null
     */
    getColorSwatchClassList(id: string): Promise<string[]>;
    /**
     * @desc Gets the inline background-color style of the color swatch div to verify the category colour
     * @param {string} id - The category's unique identifier
     * @returns {Promise<string>} The style attribute value of the color swatch div
     * @throws {Error} When the style attribute is not accessible or null
     */
    getColorSwatchBackgroundColor(id: string): Promise<string>;
    /**
     * @desc Counts the total number of category rows rendered inside tbody
     * @returns {Promise<number>} The number of category rows in the table body
     */
    getCategoryRowCount(): Promise<number>;
    /**
     * @desc Gets a list of all category row data-testid attribute values to enumerate rendered category ids
     * @returns {Promise<string[]>} Array of data-testid values for all category rows
     */
    getAllCategoryRowTestIds(): Promise<string[]>;
    /**
     * @desc Gets the CSS classes on the table wrapper to verify overflow/layout styling
     * @returns {Promise<string[]>} Array of CSS class names on the table wrapper
     * @throws {Error} When the class attribute is not accessible or null
     */
    getTableWrapperClassList(): Promise<string[]>;
    /**
     * @desc Gets the position and dimensions of the outermost scroll wrapper
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the table wrapper
     * @throws {Error} When the bounding box cannot be retrieved
     */
    getTableWrapperBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Gets the full inner HTML of the table wrapper for snapshot or structural assertions
     * @returns {Promise<string>} The inner HTML of the table wrapper
     * @throws {Error} When the inner HTML is not accessible or null
     */
    getTableWrapperInnerHtml(): Promise<string>;
    /**
     * @desc Gets the 'Total' label text from the first cell of the totals footer row
     * @returns {Promise<string>} The label text exactly as it appears in the UI
     * @throws {Error} When the total label cell content is not accessible or null
     */
    getTotalLabelText(): Promise<string>;
    /**
     * @desc Gets the summed total debit (expenses) value from the totals footer row
     * @returns {Promise<string>} The total debit value exactly as it appears in the UI
     * @throws {Error} When the total debit cell content is not accessible or null
     */
    getTotalDebitText(): Promise<string>;
    /**
     * @desc Gets the summed total credit (income) value from the totals footer row
     * @returns {Promise<string>} The total credit value exactly as it appears in the UI
     * @throws {Error} When the total credit cell content is not accessible or null
     */
    getTotalCreditText(): Promise<string>;
    /**
     * @desc Gets the summed transaction count from the totals footer row
     * @returns {Promise<string>} The total count value exactly as it appears in the UI
     * @throws {Error} When the total count cell content is not accessible or null
     */
    getTotalCountText(): Promise<string>;
    /**
     * @desc Gets the '100%' percentage value from the totals footer row
     * @returns {Promise<string>} The total percentage value exactly as it appears in the UI
     * @throws {Error} When the total percentage cell content is not accessible or null
     */
    getTotalPercentageText(): Promise<string>;
    /**
     * @desc Gets the full inner HTML of the totals row to assert all summary cells at once
     * @returns {Promise<string>} The inner HTML of the totals row
     * @throws {Error} When the inner HTML is not accessible or null
     */
    getTotalsRowInnerHtml(): Promise<string>;
    /**
     * @desc Gets the text content of the 'Category' column header
     * @returns {Promise<string>} The header text exactly as it appears in the UI
     * @throws {Error} When the header cell content is not accessible or null
     */
    getCategoryHeaderText(): Promise<string>;
    /**
     * @desc Gets the text content of the 'Expenses' column header
     * @returns {Promise<string>} The header text exactly as it appears in the UI
     * @throws {Error} When the header cell content is not accessible or null
     */
    getExpensesHeaderText(): Promise<string>;
    /**
     * @desc Gets the text content of the 'Income' column header
     * @returns {Promise<string>} The header text exactly as it appears in the UI
     * @throws {Error} When the header cell content is not accessible or null
     */
    getIncomeHeaderText(): Promise<string>;
    /**
     * @desc Gets the text content of the 'Transactions' column header
     * @returns {Promise<string>} The header text exactly as it appears in the UI
     * @throws {Error} When the header cell content is not accessible or null
     */
    getTransactionsHeaderText(): Promise<string>;
    /**
     * @desc Gets the text content of the '% of Total' column header
     * @returns {Promise<string>} The header text exactly as it appears in the UI
     * @throws {Error} When the header cell content is not accessible or null
     */
    getPercentageHeaderText(): Promise<string>;
    /**
     * @desc Gets a list of all column header texts in order from the thead
     * @returns {Promise<string[]>} Array of header text values in column order
     */
    getAllHeaderTexts(): Promise<string[]>;
}
