/**
 * Page Object Model: Table
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const TablePOM_StandardSelector = '[data-slot="table-container"]';

export class TablePOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_tableContainer: string;
  private readonly selector_tableElement: string;
  private readonly selector_tableHeader: string;
  private readonly selector_tableBody: string;
  private readonly selector_tableFooter: string;
  private readonly selector_tableCaption: string;
  private readonly selector_tableHead: string;
  private readonly selector_tableCell: string;
  private readonly selector_tableRowInHeader: string;
  private readonly selector_tableRowInBody: string;
  private readonly selector_tableRowSelected: string;
  private readonly selector_tableRowInFooter: string;
  private readonly selector_tableHeadByIndex: (index: number) => string;
  private readonly selector_tableCellByIndex: (index: number) => string;
  private readonly selector_tableRowInBodyByIndex: (index: number) => string;
  private readonly selector_tableRowInFooterByIndex: (index: number) => string;
  private readonly selector_tableRowInHeaderByIndex: (index: number) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = TablePOM_StandardSelector;

    // Structural selectors
    this.selector_tableContainer = `${this.rootSelector}`;
    this.selector_tableElement = `${this.rootSelector} [data-slot="table"]`;
    this.selector_tableHeader = `${this.rootSelector} [data-slot="table-header"]`;
    this.selector_tableBody = `${this.rootSelector} [data-slot="table-body"]`;
    this.selector_tableFooter = `${this.rootSelector} [data-slot="table-footer"]`;
    this.selector_tableCaption = `${this.rootSelector} [data-slot="table-caption"]`;

    // Cell and head selectors
    this.selector_tableHead = `${this.rootSelector} [data-slot="table-head"]`;
    this.selector_tableCell = `${this.rootSelector} [data-slot="table-cell"]`;

    // Row selectors
    this.selector_tableRowInHeader = `${this.rootSelector} [data-slot="table-header"] [data-slot="table-row"]`;
    this.selector_tableRowInBody = `${this.rootSelector} [data-slot="table-body"] [data-slot="table-row"]`;
    this.selector_tableRowSelected = `${this.rootSelector} [data-slot="table-body"] [data-slot="table-row"][data-state="selected"]`;
    this.selector_tableRowInFooter = `${this.rootSelector} [data-slot="table-footer"] [data-slot="table-row"]`;

    // Dynamic selector functions
    this.selector_tableHeadByIndex = (index: number) =>
      `${this.rootSelector} [data-slot="table-head"]:nth-of-type(${index + 1})`;

    this.selector_tableCellByIndex = (index: number) =>
      `${this.rootSelector} [data-slot="table-cell"]:nth-of-type(${index + 1})`;

    this.selector_tableRowInBodyByIndex = (index: number) =>
      `${this.rootSelector} [data-slot="table-body"] [data-slot="table-row"]:nth-child(${index + 1})`;

    this.selector_tableRowInFooterByIndex = (index: number) =>
      `${this.rootSelector} [data-slot="table-footer"] [data-slot="table-row"]:nth-child(${index + 1})`;

    this.selector_tableRowInHeaderByIndex = (index: number) =>
      `${this.rootSelector} [data-slot="table-header"] [data-slot="table-row"]:nth-child(${index + 1})`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the Table component is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the table container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const tableContainer = page.locator(TablePOM_StandardSelector);
      return await tableContainer.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a TablePOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TablePOM>} A TablePOM instance
   * @throws {Error} When the table container is not visible
   */
  static async getPOM(page: Page): Promise<TablePOM> {
    const isVisible = await TablePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TablePOM: Cannot instantiate - table container is not visible. ' +
        `Expected element [${TablePOM_StandardSelector}] to be visible.`
      );
    }

    return new TablePOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the table container is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the table container is visible
   */
  async isTableContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tableContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the table caption is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the table caption is visible
   */
  async isTableCaptionVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tableCaption).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the table footer section is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the table footer is visible
   */
  async isTableFooterVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tableFooter).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the table body section is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the table body is visible
   */
  async isTableBodyVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tableBody).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the table header section is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the table header is visible
   */
  async isTableHeaderVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tableHeader).isVisible({ timeout });
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Horizontally scrolls the table container by a given pixel amount
   * Expected outcome is that the table content scrolls horizontally
   * @param {number} scrollX - The number of pixels to scroll horizontally
   */
  async scrollTableContainer(scrollX: number): Promise<void> {
    await this.page.locator(this.selector_tableContainer).evaluate(
      (el, x) => { el.scrollLeft += x; },
      scrollX
    );
  }

  /**
   * @desc Clicks a footer row by its zero-based index
   * Expected outcome is that footer-level interactions are triggered
   * @param {number} index - Zero-based index of the footer row to click
   */
  async clickTableRowInFooter(index: number): Promise<void> {
    await this.page.locator(this.selector_tableRowInFooterByIndex(index)).click();
  }

  /**
   * @desc Clicks a header cell by its zero-based index
   * Expected outcome is that sorting or column-level actions are triggered
   * @param {number} index - Zero-based index of the header cell to click
   */
  async clickTableHead(index: number): Promise<void> {
    await this.page.locator(this.selector_tableHeadByIndex(index)).click();
  }

  /**
   * @desc Clicks a data cell by its zero-based index
   * Expected outcome is that cell-level interactions such as inline editing or selection are triggered
   * @param {number} index - Zero-based index of the data cell to click
   */
  async clickTableCell(index: number): Promise<void> {
    await this.page.locator(this.selector_tableCellByIndex(index)).click();
  }

  /**
   * @desc Clicks a header row by its zero-based index
   * Expected outcome is that header-level actions such as select-all are triggered
   * @param {number} index - Zero-based index of the header row to click
   */
  async clickTableRowInHeader(index: number): Promise<void> {
    await this.page.locator(this.selector_tableRowInHeaderByIndex(index)).click();
  }

  /**
   * @desc Hovers over a table body row by its zero-based index
   * Expected outcome is that the hover highlight (bg-muted/50) styling is applied
   * @param {number} index - Zero-based index of the body row to hover
   */
  async hoverTableRowInBody(index: number): Promise<void> {
    await this.page.locator(this.selector_tableRowInBodyByIndex(index)).hover();
  }

  /**
   * @desc Clicks a table body row by its zero-based index
   * Expected outcome is that selection or row-level actions are triggered
   * @param {number} index - Zero-based index of the body row to click
   */
  async clickTableRowInBody(index: number): Promise<void> {
    await this.page.locator(this.selector_tableRowInBodyByIndex(index)).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the data-slot attribute value of the table scroll container
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the attribute content is not accessible or null
   */
  async getTableContainerDataSlot(): Promise<string> {
    await this.page.isVisible(this.selector_tableContainer);
    const value = await this.page.locator(this.selector_tableContainer).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `TablePOM: data-slot attribute is null on table container. Selector: ${this.selector_tableContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the bounding box (position and dimensions) of the table scroll container
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the container
   * @throws {Error} When the bounding box cannot be retrieved
   */
  async getTableContainerBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page.locator(this.selector_tableContainer).boundingBox();

    if (!box) {
      throw new Error(
        `TablePOM: Unable to get bounding box for table container. Selector: ${this.selector_tableContainer}`
      );
    }

    return box;
  }

  /**
   * @desc Counts the number of rows in the table footer
   * @returns {Promise<number>} The total number of footer rows
   */
  async getTableRowInFooterCount(): Promise<number> {
    return await this.page.locator(this.selector_tableRowInFooter).count();
  }

  /**
   * @desc Gets the data-slot attribute value of a footer row by its zero-based index
   * @param {number} index - Zero-based index of the footer row
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the attribute content is not accessible or null
   */
  async getTableRowInFooterDataSlot(index: number): Promise<string> {
    const selector = this.selector_tableRowInFooterByIndex(index);
    const value = await this.page.locator(selector).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `TablePOM: data-slot attribute is null on footer row at index ${index}. Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-slot attribute value of a header cell by its zero-based index
   * @param {number} index - Zero-based index of the header cell
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the attribute content is not accessible or null
   */
  async getTableHeadDataSlot(index: number): Promise<string> {
    const selector = this.selector_tableHeadByIndex(index);
    const value = await this.page.locator(selector).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `TablePOM: data-slot attribute is null on header cell at index ${index}. Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the visible text content of a header cell by its zero-based index
   * @param {number} index - Zero-based index of the header cell
   * @returns {Promise<string>} The text content exactly as it appears
   * @throws {Error} When the text content is not accessible or null
   */
  async getTableHeadText(index: number): Promise<string> {
    const selector = this.selector_tableHeadByIndex(index);
    await this.page.isVisible(selector);
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TablePOM: Text content is null for header cell at index ${index}. Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Counts the total number of header cells in the table
   * @returns {Promise<number>} The total number of header cells
   */
  async getTableHeadCount(): Promise<number> {
    return await this.page.locator(this.selector_tableHead).count();
  }

  /**
   * @desc Gets the inner HTML of a header cell by its zero-based index
   * @param {number} index - Zero-based index of the header cell
   * @returns {Promise<string>} The inner HTML exactly as it appears
   * @throws {Error} When the inner HTML is not accessible or null
   */
  async getTableHeadInnerHtml(index: number): Promise<string> {
    const selector = this.selector_tableHeadByIndex(index);
    await this.page.isVisible(selector);
    const html = await this.page.locator(selector).innerHTML();

    if (html === null) {
      throw new Error(
        `TablePOM: Inner HTML is null for header cell at index ${index}. Selector: ${selector}`
      );
    }

    return html;
  }

  /**
   * @desc Gets a list of all header cell text values across the table
   * @returns {Promise<string[]>} Array of header cell text values exactly as they appear
   */
  async getTableHeadTextList(): Promise<string[]> {
    const count = await this.page.locator(this.selector_tableHead).count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await this.page.locator(this.selector_tableHead).nth(i).textContent();
      texts.push(text ?? '');
    }

    return texts;
  }

  /**
   * @desc Gets the data-slot attribute value of a data cell by its zero-based index
   * @param {number} index - Zero-based index of the data cell
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the attribute content is not accessible or null
   */
  async getTableCellDataSlot(index: number): Promise<string> {
    const selector = this.selector_tableCellByIndex(index);
    const value = await this.page.locator(selector).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `TablePOM: data-slot attribute is null on data cell at index ${index}. Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Gets a list of all data cell text values across the table
   * @returns {Promise<string[]>} Array of data cell text values exactly as they appear
   */
  async getTableCellTextList(): Promise<string[]> {
    const count = await this.page.locator(this.selector_tableCell).count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await this.page.locator(this.selector_tableCell).nth(i).textContent();
      texts.push(text ?? '');
    }

    return texts;
  }

  /**
   * @desc Counts the total number of data cells in the table
   * @returns {Promise<number>} The total number of data cells
   */
  async getTableCellCount(): Promise<number> {
    return await this.page.locator(this.selector_tableCell).count();
  }

  /**
   * @desc Gets the inner HTML of a data cell by its zero-based index
   * @param {number} index - Zero-based index of the data cell
   * @returns {Promise<string>} The inner HTML exactly as it appears
   * @throws {Error} When the inner HTML is not accessible or null
   */
  async getTableCellInnerHtml(index: number): Promise<string> {
    const selector = this.selector_tableCellByIndex(index);
    await this.page.isVisible(selector);
    const html = await this.page.locator(selector).innerHTML();

    if (html === null) {
      throw new Error(
        `TablePOM: Inner HTML is null for data cell at index ${index}. Selector: ${selector}`
      );
    }

    return html;
  }

  /**
   * @desc Gets the visible text content of a data cell by its zero-based index
   * @param {number} index - Zero-based index of the data cell
   * @returns {Promise<string>} The text content exactly as it appears
   * @throws {Error} When the text content is not accessible or null
   */
  async getTableCellText(index: number): Promise<string> {
    const selector = this.selector_tableCellByIndex(index);
    await this.page.isVisible(selector);
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TablePOM: Text content is null for data cell at index ${index}. Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the table caption
   * @returns {Promise<string>} The caption text exactly as it appears
   * @throws {Error} When the caption text content is not accessible or null
   */
  async getTableCaptionText(): Promise<string> {
    await this.page.isVisible(this.selector_tableCaption);
    const text = await this.page.locator(this.selector_tableCaption).textContent();

    if (text === null) {
      throw new Error(
        `TablePOM: Text content is null for table caption. Selector: ${this.selector_tableCaption}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the data-slot attribute value of the caption element
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the attribute content is not accessible or null
   */
  async getTableCaptionDataSlot(): Promise<string> {
    const value = await this.page.locator(this.selector_tableCaption).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `TablePOM: data-slot attribute is null on table caption. Selector: ${this.selector_tableCaption}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-slot attribute value of the native table element
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the attribute content is not accessible or null
   */
  async getTableElementDataSlot(): Promise<string> {
    const value = await this.page.locator(this.selector_tableElement).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `TablePOM: data-slot attribute is null on table element. Selector: ${this.selector_tableElement}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the full inner HTML of the table element, capturing all rows, cells, and content
   * @returns {Promise<string>} The inner HTML exactly as it appears
   * @throws {Error} When the inner HTML is not accessible or null
   */
  async getTableElementInnerHtml(): Promise<string> {
    await this.page.isVisible(this.selector_tableElement);
    const html = await this.page.locator(this.selector_tableElement).innerHTML();

    if (html === null) {
      throw new Error(
        `TablePOM: Inner HTML is null for table element. Selector: ${this.selector_tableElement}`
      );
    }

    return html;
  }

  /**
   * @desc Gets the CSS class list applied to the native table element
   * @returns {Promise<string[]>} Array of CSS class names applied to the table element
   * @throws {Error} When the class attribute is not accessible
   */
  async getTableElementClassList(): Promise<string[]> {
    const classAttr = await this.page.locator(this.selector_tableElement).getAttribute('class');

    if (classAttr === null) {
      return [];
    }

    return classAttr.split(' ').filter((cls) => cls.length > 0);
  }

  /**
   * @desc Counts the number of rows in the table header
   * @returns {Promise<number>} The total number of header rows
   */
  async getTableRowInHeaderCount(): Promise<number> {
    return await this.page.locator(this.selector_tableRowInHeader).count();
  }

  /**
   * @desc Gets the data-slot attribute value of a header row by its zero-based index
   * @param {number} index - Zero-based index of the header row
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the attribute content is not accessible or null
   */
  async getTableRowInHeaderDataSlot(index: number): Promise<string> {
    const selector = this.selector_tableRowInHeaderByIndex(index);
    const value = await this.page.locator(selector).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `TablePOM: data-slot attribute is null on header row at index ${index}. Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Counts the number of currently selected rows in the table body
   * @returns {Promise<number>} The total number of selected body rows
   */
  async getTableRowSelectedCount(): Promise<number> {
    return await this.page.locator(this.selector_tableRowSelected).count();
  }

  /**
   * @desc Gets the data-slot attribute value of a body row by its zero-based index
   * @param {number} index - Zero-based index of the body row
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the attribute content is not accessible or null
   */
  async getTableRowInBodyDataSlot(index: number): Promise<string> {
    const selector = this.selector_tableRowInBodyByIndex(index);
    const value = await this.page.locator(selector).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `TablePOM: data-slot attribute is null on body row at index ${index}. Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the CSS class list of a body row by its zero-based index to inspect applied styles
   * @param {number} index - Zero-based index of the body row
   * @returns {Promise<string[]>} Array of CSS class names applied to the body row
   */
  async getTableRowInBodyClassList(index: number): Promise<string[]> {
    const selector = this.selector_tableRowInBodyByIndex(index);
    const classAttr = await this.page.locator(selector).getAttribute('class');

    if (classAttr === null) {
      return [];
    }

    return classAttr.split(' ').filter((cls) => cls.length > 0);
  }

  /**
   * @desc Counts the total number of data rows in the table body
   * @returns {Promise<number>} The total number of body rows
   */
  async getTableRowInBodyCount(): Promise<number> {
    return await this.page.locator(this.selector_tableRowInBody).count();
  }

  /**
   * @desc Gets the data-state attribute of a body row by its zero-based index to determine if it is selected
   * @param {number} index - Zero-based index of the body row
   * @returns {Promise<string | null>} The data-state attribute value, or null if not set
   */
  async getTableRowInBodyDataState(index: number): Promise<string | null> {
    const selector = this.selector_tableRowInBodyByIndex(index);
    return await this.page.locator(selector).getAttribute('data-state');
  }

  /**
   * @desc Gets the data-slot attribute value of the tfoot element
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the attribute content is not accessible or null
   */
  async getTableFooterDataSlot(): Promise<string> {
    const value = await this.page.locator(this.selector_tableFooter).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `TablePOM: data-slot attribute is null on table footer. Selector: ${this.selector_tableFooter}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-slot attribute value of the tbody element
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the attribute content is not accessible or null
   */
  async getTableBodyDataSlot(): Promise<string> {
    const value = await this.page.locator(this.selector_tableBody).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `TablePOM: data-slot attribute is null on table body. Selector: ${this.selector_tableBody}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-slot attribute value of the thead element
   * @returns {Promise<string>} The data-slot attribute value exactly as it appears
   * @throws {Error} When the attribute content is not accessible or null
   */
  async getTableHeaderDataSlot(): Promise<string> {
    const value = await this.page.locator(this.selector_tableHeader).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `TablePOM: data-slot attribute is null on table header. Selector: ${this.selector_tableHeader}`
      );
    }

    return value;
  }
}