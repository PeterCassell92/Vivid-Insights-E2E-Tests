/**
 * Page Object Model: CategoryBreakdownTable
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const CategoryBreakdownTablePOM_StandardSelector = '[data-testid="category-breakdown-table"]';

export class CategoryBreakdownTablePOM {
  private readonly page: Page;

  // === SELECTORS ===

  private readonly rootSelector: string;

  // Static selectors — table structure
  private readonly selector_tableWrapper: string;
  private readonly selector_tableElement: string;
  private readonly selector_tableHead: string;
  private readonly selector_tableBody: string;
  private readonly selector_tableFoot: string;
  private readonly selector_categoryTotalsRow: string;

  // Static selectors — thead columns
  private readonly selector_categoryHeaderCell: string;
  private readonly selector_expensesHeaderCell: string;
  private readonly selector_incomeHeaderCell: string;
  private readonly selector_transactionsHeaderCell: string;
  private readonly selector_percentageHeaderCell: string;

  // Static selectors — totals footer cells
  private readonly selector_totalLabelCell: string;
  private readonly selector_totalDebitCell: string;
  private readonly selector_totalCreditCell: string;
  private readonly selector_totalCountCell: string;
  private readonly selector_totalPercentageCell: string;

  // Dynamic selector functions — per-category row and cells
  private readonly selector_categoryRow: (id: string) => string;
  private readonly selector_categoryName: (id: string) => string;
  private readonly selector_categoryNameText: (id: string) => string;
  private readonly selector_colorSwatch: (id: string) => string;
  private readonly selector_categoryExpenses: (id: string) => string;
  private readonly selector_categoryIncome: (id: string) => string;
  private readonly selector_categoryCount: (id: string) => string;
  private readonly selector_categoryPercentage: (id: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = CategoryBreakdownTablePOM_StandardSelector;

    // Table structure
    this.selector_tableWrapper = this.rootSelector;
    this.selector_tableElement = `${this.rootSelector} table`;
    this.selector_tableHead = `${this.rootSelector} thead`;
    this.selector_tableBody = `${this.rootSelector} tbody`;
    this.selector_tableFoot = `${this.rootSelector} tfoot`;
    this.selector_categoryTotalsRow = '[data-testid="category-totals-row"]';

    // thead column headers
    this.selector_categoryHeaderCell = `${this.rootSelector} thead th:nth-child(1)`;
    this.selector_expensesHeaderCell = `${this.rootSelector} thead th:nth-child(2)`;
    this.selector_incomeHeaderCell = `${this.rootSelector} thead th:nth-child(3)`;
    this.selector_transactionsHeaderCell = `${this.rootSelector} thead th:nth-child(4)`;
    this.selector_percentageHeaderCell = `${this.rootSelector} thead th:nth-child(5)`;

    // Totals footer cells
    this.selector_totalLabelCell = '[data-testid="category-totals-row"] td:nth-child(1)';
    this.selector_totalDebitCell = '[data-testid="category-totals-row"] td:nth-child(2)';
    this.selector_totalCreditCell = '[data-testid="category-totals-row"] td:nth-child(3)';
    this.selector_totalCountCell = '[data-testid="category-totals-row"] td:nth-child(4)';
    this.selector_totalPercentageCell = '[data-testid="category-totals-row"] td:nth-child(5)';

    // Dynamic per-category selectors
    this.selector_categoryRow = (id: string) => `[data-testid="category-row__${id}"]`;
    this.selector_categoryName = (id: string) => `[data-testid="category-name__${id}"]`;
    this.selector_categoryNameText = (id: string) => `[data-testid="category-name__${id}"] span`;
    this.selector_colorSwatch = (id: string) => `[data-testid="category-name__${id}"] div`;
    this.selector_categoryExpenses = (id: string) => `[data-testid="category-expenses__${id}"]`;
    this.selector_categoryIncome = (id: string) => `[data-testid="category-income__${id}"]`;
    this.selector_categoryCount = (id: string) => `[data-testid="category-count__${id}"]`;
    this.selector_categoryPercentage = (id: string) => `[data-testid="category-percentage__${id}"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the CategoryBreakdownTable is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the table wrapper is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const tableWrapper = page.locator(CategoryBreakdownTablePOM_StandardSelector);
      return await tableWrapper.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method — validates visibility then returns a CategoryBreakdownTablePOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<CategoryBreakdownTablePOM>} A ready-to-use POM instance
   * @throws {Error} When the table wrapper is not visible
   */
  static async getPOM(page: Page): Promise<CategoryBreakdownTablePOM> {
    const isVisible = await CategoryBreakdownTablePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'CategoryBreakdownTablePOM: Cannot instantiate — table is not visible. ' +
          `Expected element ${CategoryBreakdownTablePOM_StandardSelector} to be visible.`
      );
    }

    return new CategoryBreakdownTablePOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the table wrapper is visible on the page
   * @returns {Promise<boolean>} True if the table wrapper is visible
   */
  async isTableVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_tableWrapper).isVisible();
  }

  /**
   * @desc Whether or not the totals footer row is visible on the page
   * @returns {Promise<boolean>} True if the totals row is visible
   */
  async isTotalsRowVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_categoryTotalsRow).isVisible();
  }

  /**
   * @desc Whether or not the category name cell is visible for a given category id
   * @param {string} id - The category's unique identifier
   * @returns {Promise<boolean>} True if the category name cell is visible
   */
  async isCategoryNameVisible(id: string): Promise<boolean> {
    return await this.page.locator(this.selector_categoryName(id)).isVisible();
  }

  /**
   * @desc Whether or not the color swatch div is rendered for a given category id
   * Only present when category.color is non-null
   * @param {string} id - The category's unique identifier
   * @returns {Promise<boolean>} True if the color swatch is visible
   */
  async isColorSwatchVisible(id: string): Promise<boolean> {
    return await this.page.locator(this.selector_colorSwatch(id)).isVisible();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Scrolls horizontally within the overflow-x-auto wrapper to reveal columns on smaller viewports
   * Expected outcome is that off-screen columns become visible
   * @param {number} scrollX - Horizontal scroll distance in pixels
   */
  async scrollTableHorizontally(scrollX: number): Promise<void> {
    await this.page.locator(this.selector_tableWrapper).evaluate(
      (el: Element, x: number) => {
        el.scrollLeft = x;
      },
      scrollX
    );
  }

  /**
   * @desc Hovers over the totals footer row to inspect summary values
   * Expected outcome is that any hover effects on the totals row are triggered
   */
  async hoverTotalsRow(): Promise<void> {
    await this.page.locator(this.selector_categoryTotalsRow).hover();
  }

  /**
   * @desc Hovers over a category name cell to trigger any tooltip or highlight effect
   * Expected outcome is that any hover effects on the category name cell are triggered
   * @param {string} id - The category's unique identifier
   */
  async hoverCategoryNameCell(id: string): Promise<void> {
    await this.page.locator(this.selector_categoryName(id)).hover();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the formatted expenses (totalDebit) value displayed for a specific category
   * @param {string} id - The category's unique identifier
   * @returns {Promise<string>} The expenses value exactly as it appears in the UI
   * @throws {Error} When the expenses cell content is not accessible or null
   */
  async getCategoryExpenses(id: string): Promise<string> {
    await this.page.locator(this.selector_categoryExpenses(id)).isVisible();
    const text = await this.page.locator(this.selector_categoryExpenses(id)).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Expenses cell content is null for category id "${id}". ` +
          `Selector: ${this.selector_categoryExpenses(id)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the formatted income (totalCredit) value displayed for a specific category
   * @param {string} id - The category's unique identifier
   * @returns {Promise<string>} The income value exactly as it appears in the UI
   * @throws {Error} When the income cell content is not accessible or null
   */
  async getCategoryIncome(id: string): Promise<string> {
    await this.page.locator(this.selector_categoryIncome(id)).isVisible();
    const text = await this.page.locator(this.selector_categoryIncome(id)).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Income cell content is null for category id "${id}". ` +
          `Selector: ${this.selector_categoryIncome(id)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the transaction count displayed for a specific category
   * @param {string} id - The category's unique identifier
   * @returns {Promise<string>} The transaction count exactly as it appears in the UI
   * @throws {Error} When the count cell content is not accessible or null
   */
  async getCategoryCount(id: string): Promise<string> {
    await this.page.locator(this.selector_categoryCount(id)).isVisible();
    const text = await this.page.locator(this.selector_categoryCount(id)).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Count cell content is null for category id "${id}". ` +
          `Selector: ${this.selector_categoryCount(id)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the percentage of total spend displayed for a specific category
   * @param {string} id - The category's unique identifier
   * @returns {Promise<string>} The percentage value exactly as it appears in the UI (e.g. '12.3%')
   * @throws {Error} When the percentage cell content is not accessible or null
   */
  async getCategoryPercentage(id: string): Promise<string> {
    await this.page.locator(this.selector_categoryPercentage(id)).isVisible();
    const text = await this.page.locator(this.selector_categoryPercentage(id)).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Percentage cell content is null for category id "${id}". ` +
          `Selector: ${this.selector_categoryPercentage(id)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the category name text from the name cell for a specific category
   * @param {string} id - The category's unique identifier
   * @returns {Promise<string>} The category name exactly as it appears in the UI
   * @throws {Error} When the category name text content is not accessible or null
   */
  async getCategoryNameText(id: string): Promise<string> {
    await this.page.locator(this.selector_categoryNameText(id)).isVisible();
    const text = await this.page.locator(this.selector_categoryNameText(id)).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Category name text content is null for category id "${id}". ` +
          `Selector: ${this.selector_categoryNameText(id)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the data-testid attribute of the category name cell to extract the embedded category id
   * @param {string} id - The category's unique identifier
   * @returns {Promise<string>} The data-testid attribute value of the category name cell
   * @throws {Error} When the attribute is not accessible or null
   */
  async getCategoryNameCellTestId(id: string): Promise<string> {
    const attr = await this.page.locator(this.selector_categoryName(id)).getAttribute('data-testid');

    if (attr === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: data-testid attribute is null for category name cell with id "${id}". ` +
          `Selector: ${this.selector_categoryName(id)}`
      );
    }

    return attr;
  }

  /**
   * @desc Gets the CSS classes of the color swatch div to verify sizing and shape styling
   * @param {string} id - The category's unique identifier
   * @returns {Promise<string[]>} Array of CSS class names on the color swatch div
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getColorSwatchClassList(id: string): Promise<string[]> {
    const classAttr = await this.page.locator(this.selector_colorSwatch(id)).getAttribute('class');

    if (classAttr === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: class attribute is null for color swatch with category id "${id}". ` +
          `Selector: ${this.selector_colorSwatch(id)}`
      );
    }

    return classAttr.split(' ').filter((c) => c.length > 0);
  }

  /**
   * @desc Gets the inline background-color style of the color swatch div to verify the category colour
   * @param {string} id - The category's unique identifier
   * @returns {Promise<string>} The style attribute value of the color swatch div
   * @throws {Error} When the style attribute is not accessible or null
   */
  async getColorSwatchBackgroundColor(id: string): Promise<string> {
    const style = await this.page.locator(this.selector_colorSwatch(id)).getAttribute('style');

    if (style === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: style attribute is null for color swatch with category id "${id}". ` +
          `Selector: ${this.selector_colorSwatch(id)}`
      );
    }

    return style;
  }

  /**
   * @desc Counts the total number of category rows rendered inside tbody
   * @returns {Promise<number>} The number of category rows in the table body
   */
  async getCategoryRowCount(): Promise<number> {
    return await this.page.locator(`${this.selector_tableBody} tr`).count();
  }

  /**
   * @desc Gets a list of all category row data-testid attribute values to enumerate rendered category ids
   * @returns {Promise<string[]>} Array of data-testid values for all category rows
   */
  async getAllCategoryRowTestIds(): Promise<string[]> {
    const rows = this.page.locator(`${this.selector_tableBody} tr`);
    const count = await rows.count();
    const testIds: string[] = [];

    for (let i = 0; i < count; i++) {
      const testId = await rows.nth(i).getAttribute('data-testid');
      if (testId) {
        testIds.push(testId);
      }
    }

    return testIds;
  }

  /**
   * @desc Gets the CSS classes on the table wrapper to verify overflow/layout styling
   * @returns {Promise<string[]>} Array of CSS class names on the table wrapper
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getTableWrapperClassList(): Promise<string[]> {
    const classAttr = await this.page.locator(this.selector_tableWrapper).getAttribute('class');

    if (classAttr === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: class attribute is null for table wrapper. ` +
          `Selector: ${this.selector_tableWrapper}`
      );
    }

    return classAttr.split(' ').filter((c) => c.length > 0);
  }

  /**
   * @desc Gets the position and dimensions of the outermost scroll wrapper
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the table wrapper
   * @throws {Error} When the bounding box cannot be retrieved
   */
  async getTableWrapperBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page.locator(this.selector_tableWrapper).boundingBox();

    if (!box) {
      throw new Error(
        `CategoryBreakdownTablePOM: Could not retrieve bounding box for table wrapper. ` +
          `Selector: ${this.selector_tableWrapper}`
      );
    }

    return box;
  }

  /**
   * @desc Gets the full inner HTML of the table wrapper for snapshot or structural assertions
   * @returns {Promise<string>} The inner HTML of the table wrapper
   * @throws {Error} When the inner HTML is not accessible or null
   */
  async getTableWrapperInnerHtml(): Promise<string> {
    const html = await this.page.locator(this.selector_tableWrapper).innerHTML();

    if (html === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: innerHTML is null for table wrapper. ` +
          `Selector: ${this.selector_tableWrapper}`
      );
    }

    return html;
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — TOTALS FOOTER
  // ========================================================================

  /**
   * @desc Gets the 'Total' label text from the first cell of the totals footer row
   * @returns {Promise<string>} The label text exactly as it appears in the UI
   * @throws {Error} When the total label cell content is not accessible or null
   */
  async getTotalLabelText(): Promise<string> {
    await this.page.locator(this.selector_totalLabelCell).isVisible();
    const text = await this.page.locator(this.selector_totalLabelCell).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Total label cell content is null. ` +
          `Selector: ${this.selector_totalLabelCell}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the summed total debit (expenses) value from the totals footer row
   * @returns {Promise<string>} The total debit value exactly as it appears in the UI
   * @throws {Error} When the total debit cell content is not accessible or null
   */
  async getTotalDebitText(): Promise<string> {
    await this.page.locator(this.selector_totalDebitCell).isVisible();
    const text = await this.page.locator(this.selector_totalDebitCell).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Total debit cell content is null. ` +
          `Selector: ${this.selector_totalDebitCell}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the summed total credit (income) value from the totals footer row
   * @returns {Promise<string>} The total credit value exactly as it appears in the UI
   * @throws {Error} When the total credit cell content is not accessible or null
   */
  async getTotalCreditText(): Promise<string> {
    await this.page.locator(this.selector_totalCreditCell).isVisible();
    const text = await this.page.locator(this.selector_totalCreditCell).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Total credit cell content is null. ` +
          `Selector: ${this.selector_totalCreditCell}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the summed transaction count from the totals footer row
   * @returns {Promise<string>} The total count value exactly as it appears in the UI
   * @throws {Error} When the total count cell content is not accessible or null
   */
  async getTotalCountText(): Promise<string> {
    await this.page.locator(this.selector_totalCountCell).isVisible();
    const text = await this.page.locator(this.selector_totalCountCell).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Total count cell content is null. ` +
          `Selector: ${this.selector_totalCountCell}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the '100%' percentage value from the totals footer row
   * @returns {Promise<string>} The total percentage value exactly as it appears in the UI
   * @throws {Error} When the total percentage cell content is not accessible or null
   */
  async getTotalPercentageText(): Promise<string> {
    await this.page.locator(this.selector_totalPercentageCell).isVisible();
    const text = await this.page.locator(this.selector_totalPercentageCell).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Total percentage cell content is null. ` +
          `Selector: ${this.selector_totalPercentageCell}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the full inner HTML of the totals row to assert all summary cells at once
   * @returns {Promise<string>} The inner HTML of the totals row
   * @throws {Error} When the inner HTML is not accessible or null
   */
  async getTotalsRowInnerHtml(): Promise<string> {
    const html = await this.page.locator(this.selector_categoryTotalsRow).innerHTML();

    if (html === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: innerHTML is null for totals row. ` +
          `Selector: ${this.selector_categoryTotalsRow}`
      );
    }

    return html;
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — COLUMN HEADERS
  // ========================================================================

  /**
   * @desc Gets the text content of the 'Category' column header
   * @returns {Promise<string>} The header text exactly as it appears in the UI
   * @throws {Error} When the header cell content is not accessible or null
   */
  async getCategoryHeaderText(): Promise<string> {
    const text = await this.page.locator(this.selector_categoryHeaderCell).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Category header cell content is null. ` +
          `Selector: ${this.selector_categoryHeaderCell}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text content of the 'Expenses' column header
   * @returns {Promise<string>} The header text exactly as it appears in the UI
   * @throws {Error} When the header cell content is not accessible or null
   */
  async getExpensesHeaderText(): Promise<string> {
    const text = await this.page.locator(this.selector_expensesHeaderCell).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Expenses header cell content is null. ` +
          `Selector: ${this.selector_expensesHeaderCell}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text content of the 'Income' column header
   * @returns {Promise<string>} The header text exactly as it appears in the UI
   * @throws {Error} When the header cell content is not accessible or null
   */
  async getIncomeHeaderText(): Promise<string> {
    const text = await this.page.locator(this.selector_incomeHeaderCell).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Income header cell content is null. ` +
          `Selector: ${this.selector_incomeHeaderCell}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text content of the 'Transactions' column header
   * @returns {Promise<string>} The header text exactly as it appears in the UI
   * @throws {Error} When the header cell content is not accessible or null
   */
  async getTransactionsHeaderText(): Promise<string> {
    const text = await this.page.locator(this.selector_transactionsHeaderCell).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Transactions header cell content is null. ` +
          `Selector: ${this.selector_transactionsHeaderCell}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text content of the '% of Total' column header
   * @returns {Promise<string>} The header text exactly as it appears in the UI
   * @throws {Error} When the header cell content is not accessible or null
   */
  async getPercentageHeaderText(): Promise<string> {
    const text = await this.page.locator(this.selector_percentageHeaderCell).textContent();

    if (text === null) {
      throw new Error(
        `CategoryBreakdownTablePOM: Percentage header cell content is null. ` +
          `Selector: ${this.selector_percentageHeaderCell}`
      );
    }

    return text;
  }

  /**
   * @desc Gets a list of all column header texts in order from the thead
   * @returns {Promise<string[]>} Array of header text values in column order
   */
  async getAllHeaderTexts(): Promise<string[]> {
    const headers = this.page.locator(`${this.selector_tableHead} th`);
    const count = await headers.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await headers.nth(i).textContent();
      texts.push(text ?? '');
    }

    return texts;
  }
}