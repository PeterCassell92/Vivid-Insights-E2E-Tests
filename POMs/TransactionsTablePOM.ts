/**
 * Page Object Model: TransactionsTable
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const TransactionsTablePOM_StandardSelector = '[data-testid=transactions-table-container]';

export class TransactionsTablePOM {
  private readonly page: Page;

  // === ROOT SELECTOR ===
  private readonly rootSelector: string;

  // === TRANSACTIONS TABLE SELECTORS ===
  private readonly selector_loadingSpinner: string;
  private readonly selector_tableContainer: string;
  private readonly selector_tableElement: string;
  private readonly selector_tableHeader: string;
  private readonly selector_tableBody: string;
  private readonly selector_emptyState: string;
  private readonly selector_headerCell: (columnKey: string) => string;
  private readonly selector_transactionRow: (transactionId: string) => string;

  // === TRANSACTION ROW CELL SELECTORS ===
  private readonly selector_descriptionCell: string;
  private readonly selector_dateCell: string;
  private readonly selector_categoryCell: string;
  private readonly selector_actionsCell: string;
  private readonly selector_statusCell: string;
  private readonly selector_amountCell: string;

  // === FILTERS BAR SELECTORS ===
  private readonly selector_filtersContainer: string;
  private readonly selector_dateRangeFilter: string;
  private readonly selector_searchInput: string;
  private readonly selector_statusFilterDropdown: string;
  private readonly selector_clearFiltersButton: string;

  // === PAGINATION SELECTORS ===
  private readonly selector_paginationContainer: string;
  private readonly selector_previousPageButton: string;
  private readonly selector_nextPageButton: string;
  private readonly selector_pageInfo: string;
  private readonly selector_pageNumberButton: (pageNumber: number | string) => string;

  // === ROW ACTION BUTTON SELECTORS ===
  private readonly selector_viewDetailsButton: string;
  private readonly selector_editButton: string;
  private readonly selector_deleteButton: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = TransactionsTablePOM_StandardSelector;

    // Transactions table
    this.selector_loadingSpinner = `${this.rootSelector} [data-testid='transactions-table-loading']`;
    this.selector_tableContainer = `${this.rootSelector}`;
    this.selector_tableElement = `${this.rootSelector} [data-testid='transactions-table']`;
    this.selector_tableHeader = `${this.rootSelector} [data-testid='transactions-table-header']`;
    this.selector_tableBody = `${this.rootSelector} [data-testid='transactions-table-body']`;
    this.selector_emptyState = `${this.rootSelector} [data-testid='transactions-table-empty-state']`;
    this.selector_headerCell = (columnKey: string) =>
      `${this.rootSelector} [data-testid='transactions-table-header-${columnKey}']`;
    this.selector_transactionRow = (transactionId: string) =>
      `${this.rootSelector} [data-testid='transaction-row-${transactionId}']`;

    // Transaction row cells (scoped within a row context)
    this.selector_descriptionCell = `[data-testid='transaction-cell-description']`;
    this.selector_dateCell = `[data-testid='transaction-cell-date']`;
    this.selector_categoryCell = `[data-testid='transaction-cell-category']`;
    this.selector_actionsCell = `[data-testid='transaction-cell-actions']`;
    this.selector_statusCell = `[data-testid='transaction-cell-status']`;
    this.selector_amountCell = `[data-testid='transaction-cell-amount']`;

    // Filters bar
    this.selector_filtersContainer = `${this.rootSelector} [data-testid='transactions-table-filters']`;
    this.selector_dateRangeFilter = `${this.rootSelector} [data-testid='transactions-filter-date-range']`;
    this.selector_searchInput = `${this.rootSelector} [data-testid='transactions-filter-search']`;
    this.selector_statusFilterDropdown = `${this.rootSelector} [data-testid='transactions-filter-status']`;
    this.selector_clearFiltersButton = `${this.rootSelector} [data-testid='transactions-filter-clear']`;

    // Pagination
    this.selector_paginationContainer = `${this.rootSelector} [data-testid='transactions-table-pagination']`;
    this.selector_previousPageButton = `${this.rootSelector} [data-testid='transactions-pagination-prev']`;
    this.selector_nextPageButton = `${this.rootSelector} [data-testid='transactions-pagination-next']`;
    this.selector_pageInfo = `${this.rootSelector} [data-testid='transactions-pagination-page-info']`;
    this.selector_pageNumberButton = (pageNumber: number | string) =>
      `${this.rootSelector} [data-testid='transactions-pagination-page-${pageNumber}']`;

    // Row action buttons
    this.selector_viewDetailsButton = `[data-testid='transaction-action-view']`;
    this.selector_editButton = `[data-testid='transaction-action-edit']`;
    this.selector_deleteButton = `[data-testid='transaction-action-delete']`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the TransactionsTable component is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the table container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(TransactionsTablePOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a TransactionsTablePOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TransactionsTablePOM>} A TransactionsTablePOM instance
   * @throws {Error} When the transactions table container is not visible
   */
  static async getPOM(page: Page): Promise<TransactionsTablePOM> {
    const isVisible = await TransactionsTablePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TransactionsTablePOM: Cannot instantiate - transactions table is not visible. ' +
          `Expected element [${TransactionsTablePOM_StandardSelector}] to be visible.`
      );
    }

    return new TransactionsTablePOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the loading spinner is currently visible
   * @returns {Promise<boolean>} True if the loading spinner is visible
   */
  async isLoadingSpinnerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_loadingSpinner).isVisible();
  }

  /**
   * @desc Check whether the main table element is visible
   * @returns {Promise<boolean>} True if the table element is visible
   */
  async isTableElementVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_tableElement).isVisible();
  }

  /**
   * @desc Check whether the empty state message is visible (no transactions present)
   * @returns {Promise<boolean>} True if the empty state element is visible
   */
  async isEmptyStateVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_emptyState).isVisible();
  }

  /**
   * @desc Check whether a specific transaction row is visible in the table
   * @param {string} transactionId - The transaction ID to check
   * @returns {Promise<boolean>} True if the transaction row is visible
   */
  async isTransactionRowVisible(transactionId: string): Promise<boolean> {
    return await this.page.locator(this.selector_transactionRow(transactionId)).isVisible();
  }

  /**
   * @desc Check whether the filters container bar is visible
   * @returns {Promise<boolean>} True if the filters container is visible
   */
  async isFiltersContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_filtersContainer).isVisible();
  }

  /**
   * @desc Check whether the clear filters button is visible (indicating active filters)
   * @returns {Promise<boolean>} True if the clear filters button is visible
   */
  async isClearFiltersButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_clearFiltersButton).isVisible();
  }

  /**
   * @desc Check whether the clear filters button is enabled
   * @returns {Promise<boolean>} True if the clear filters button is enabled
   */
  async isClearFiltersButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_clearFiltersButton).isEnabled();
  }

  /**
   * @desc Check whether the next page button is enabled (i.e. not on the last page)
   * @returns {Promise<boolean>} True if the next page button is enabled
   */
  async isNextPageButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_nextPageButton).isEnabled();
  }

  /**
   * @desc Check whether the previous page button is enabled (i.e. not on the first page)
   * @returns {Promise<boolean>} True if the previous page button is enabled
   */
  async isPreviousPageButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_previousPageButton).isEnabled();
  }

  /**
   * @desc Check whether the view details button is visible for a transaction row
   * @param {string} transactionId - The transaction ID whose row contains the button
   * @returns {Promise<boolean>} True if the view details button is visible
   */
  async isViewDetailsButtonVisible(transactionId: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_transactionRow(transactionId))
      .locator(this.selector_viewDetailsButton)
      .isVisible();
  }

  /**
   * @desc Check whether the edit button is visible for a transaction row
   * @param {string} transactionId - The transaction ID whose row contains the button
   * @returns {Promise<boolean>} True if the edit button is visible
   */
  async isEditButtonVisible(transactionId: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_transactionRow(transactionId))
      .locator(this.selector_editButton)
      .isVisible();
  }

  /**
   * @desc Check whether the delete button is visible for a transaction row
   * @param {string} transactionId - The transaction ID whose row contains the button
   * @returns {Promise<boolean>} True if the delete button is visible
   */
  async isDeleteButtonVisible(transactionId: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_transactionRow(transactionId))
      .locator(this.selector_deleteButton)
      .isVisible();
  }

  /**
   * @desc Check whether the view details button is enabled for a transaction row
   * @param {string} transactionId - The transaction ID whose row contains the button
   * @returns {Promise<boolean>} True if the view details button is enabled
   */
  async isViewDetailsButtonEnabled(transactionId: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_transactionRow(transactionId))
      .locator(this.selector_viewDetailsButton)
      .isEnabled();
  }

  /**
   * @desc Check whether the edit button is enabled for a transaction row
   * @param {string} transactionId - The transaction ID whose row contains the button
   * @returns {Promise<boolean>} True if the edit button is enabled
   */
  async isEditButtonEnabled(transactionId: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_transactionRow(transactionId))
      .locator(this.selector_editButton)
      .isEnabled();
  }

  /**
   * @desc Check whether the delete button is enabled for a transaction row
   * @param {string} transactionId - The transaction ID whose row contains the button
   * @returns {Promise<boolean>} True if the delete button is enabled
   */
  async isDeleteButtonEnabled(transactionId: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_transactionRow(transactionId))
      .locator(this.selector_deleteButton)
      .isEnabled();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc clicks a specific column header cell to trigger sorting
   * Expected outcome is that the table will be sorted by the selected column
   * @param {string} columnKey - The column key identifying the header cell
   */
  async clickHeaderCell(columnKey: string): Promise<void> {
    await this.page.locator(this.selector_headerCell(columnKey)).click();
  }

  /**
   * @desc clicks a specific transaction row to open transaction detail
   * Expected outcome is that the transaction detail view or modal will open
   * @param {string} transactionId - The transaction ID of the row to click
   */
  async clickTransactionRow(transactionId: string): Promise<void> {
    await this.page.locator(this.selector_transactionRow(transactionId)).click();
  }

  /**
   * @desc Scroll within the transactions table container
   * Expected outcome is that the table content scrolls
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollTableContainer(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_tableContainer).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  /**
   * @desc Select a status option from the status filter dropdown
   * Expected outcome is that the table will be filtered by the selected status
   * @param {string} statusValue - The status value to select
   */
  async selectStatusFilter(statusValue: string): Promise<void> {
    await this.page.locator(this.selector_statusFilterDropdown).selectOption(statusValue);
  }

  /**
   * @desc clicks the date range filter to open the date picker
   * Expected outcome is that the date picker will open
   */
  async clickDateRangeFilter(): Promise<void> {
    await this.page.locator(this.selector_dateRangeFilter).click();
  }

  /**
   * @desc Clear the current text in the search input field
   * Expected outcome is that the search input will be empty and results reset
   */
  async clearSearchInput(): Promise<void> {
    await this.page.locator(this.selector_searchInput).clear();
  }

  /**
   * @desc clicks the clear filters button to reset all active filters
   * Expected outcome is that all active filters will be cleared
   */
  async clickClearFiltersButton(): Promise<void> {
    await this.page.locator(this.selector_clearFiltersButton).click();
  }

  /**
   * @desc Type a keyword into the search input to filter transactions
   * Expected outcome is that the table will be filtered by the entered keyword
   * @param {string} keyword - The search keyword to enter
   */
  async fillSearchInput(keyword: string): Promise<void> {
    await this.page.locator(this.selector_searchInput).fill(keyword);
  }

  /**
   * @desc clicks the previous page button to navigate to the previous page of transactions
   * Expected outcome is that the table will display the previous page of results
   */
  async clickPreviousPageButton(): Promise<void> {
    await this.page.locator(this.selector_previousPageButton).click();
  }

  /**
   * @desc clicks the next page button to navigate to the next page of transactions
   * Expected outcome is that the table will display the next page of results
   */
  async clickNextPageButton(): Promise<void> {
    await this.page.locator(this.selector_nextPageButton).click();
  }

  /**
   * @desc clicks a specific page number button to navigate directly to that page
   * Expected outcome is that the table will display the selected page of results
   * @param {number | string} pageNumber - The page number to navigate to
   */
  async clickPageNumberButton(pageNumber: number | string): Promise<void> {
    await this.page.locator(this.selector_pageNumberButton(pageNumber)).click();
  }

  /**
   * @desc clicks the view details button to open the full transaction detail view
   * Expected outcome is that the transaction detail view or modal will open
   * @param {string} transactionId - The transaction ID whose row contains the button
   */
  async clickViewDetailsButton(transactionId: string): Promise<void> {
    await this.page
      .locator(this.selector_transactionRow(transactionId))
      .locator(this.selector_viewDetailsButton)
      .click();
  }

  /**
   * @desc clicks the edit button to edit or annotate a transaction
   * Expected outcome is that the edit form or modal will open
   * @param {string} transactionId - The transaction ID whose row contains the button
   */
  async clickEditButton(transactionId: string): Promise<void> {
    await this.page
      .locator(this.selector_transactionRow(transactionId))
      .locator(this.selector_editButton)
      .click();
  }

  /**
   * @desc clicks the delete button to delete a transaction
   * Expected outcome is that the transaction will be deleted or a confirmation dialog will appear
   * @param {string} transactionId - The transaction ID whose row contains the button
   */
  async clickDeleteButton(transactionId: string): Promise<void> {
    await this.page
      .locator(this.selector_transactionRow(transactionId))
      .locator(this.selector_deleteButton)
      .click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the full inner HTML of the table body to inspect all rendered rows
   * @returns {Promise<string>} The inner HTML of the table body element
   * @throws {Error} When the table body inner HTML is not accessible
   */
  async getTableBodyInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_tableBody).isVisible();
    const html = await this.page.locator(this.selector_tableBody).innerHTML();

    if (html === null) {
      throw new Error(
        `TransactionsTablePOM: Table body inner HTML is not accessible. Selector: ${this.selector_tableBody}`
      );
    }

    return html;
  }

  /**
   * @desc Count the total number of transaction rows currently rendered in the table body
   * @returns {Promise<number>} The number of transaction rows rendered
   */
  async countTransactionRows(): Promise<number> {
    return await this.page.locator(`${this.rootSelector} [data-testid^='transaction-row-']`).count();
  }

  /**
   * @desc Get the CSS classes of a column header cell to determine current sort state (e.g. asc/desc)
   * @param {string} columnKey - The column key identifying the header cell
   * @returns {Promise<string>} The class attribute value of the header cell
   * @throws {Error} When the header cell class attribute is not accessible
   */
  async getHeaderCellClassList(columnKey: string): Promise<string> {
    const selector = this.selector_headerCell(columnKey);
    await this.page.locator(selector).isVisible();
    const classList = await this.page.locator(selector).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `TransactionsTablePOM: Header cell class attribute is not accessible for column "${columnKey}". Selector: ${selector}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the text label of a specific column header cell
   * @param {string} columnKey - The column key identifying the header cell
   * @returns {Promise<string>} The text content of the header cell exactly as it appears
   * @throws {Error} When the header cell text content is not accessible
   */
  async getHeaderCellText(columnKey: string): Promise<string> {
    const selector = this.selector_headerCell(columnKey);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsTablePOM: Header cell text content is null for column "${columnKey}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text content of the empty state message
   * @returns {Promise<string>} The empty state message text exactly as it appears
   * @throws {Error} When the empty state text content is not accessible
   */
  async getEmptyStateText(): Promise<string> {
    await this.page.locator(this.selector_emptyState).isVisible();
    const text = await this.page.locator(this.selector_emptyState).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsTablePOM: Empty state text content is null. Selector: ${this.selector_emptyState}`
      );
    }

    return text;
  }

  /**
   * @desc Get the transaction date text from the date cell of a specific row
   * @param {string} transactionId - The transaction ID of the row
   * @returns {Promise<string>} The date text exactly as it appears
   * @throws {Error} When the date cell text content is not accessible
   */
  async getTransactionDateText(transactionId: string): Promise<string> {
    const rowLocator = this.page.locator(this.selector_transactionRow(transactionId));
    const text = await rowLocator.locator(this.selector_dateCell).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsTablePOM: Date cell text content is null for transaction "${transactionId}". Selector: ${this.selector_dateCell}`
      );
    }

    return text;
  }

  /**
   * @desc Get the displayed transaction amount from the amount cell of a specific row
   * @param {string} transactionId - The transaction ID of the row
   * @returns {Promise<string>} The amount text exactly as it appears
   * @throws {Error} When the amount cell text content is not accessible
   */
  async getTransactionAmountText(transactionId: string): Promise<string> {
    const rowLocator = this.page.locator(this.selector_transactionRow(transactionId));
    const text = await rowLocator.locator(this.selector_amountCell).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsTablePOM: Amount cell text content is null for transaction "${transactionId}". Selector: ${this.selector_amountCell}`
      );
    }

    return text;
  }

  /**
   * @desc Get the raw numeric transaction amount from the data-amount attribute of a specific row
   * @param {string} transactionId - The transaction ID of the row
   * @returns {Promise<string>} The raw data-amount attribute value
   * @throws {Error} When the data-amount attribute is not accessible
   */
  async getTransactionAmountAttribute(transactionId: string): Promise<string> {
    const rowLocator = this.page.locator(this.selector_transactionRow(transactionId));
    const value = await rowLocator.locator(this.selector_amountCell).getAttribute('data-amount');

    if (value === null) {
      throw new Error(
        `TransactionsTablePOM: data-amount attribute is null for transaction "${transactionId}". Selector: ${this.selector_amountCell}`
      );
    }

    return value;
  }

  /**
   * @desc Get the transaction status text from the status cell of a specific row
   * @param {string} transactionId - The transaction ID of the row
   * @returns {Promise<string>} The status text exactly as it appears (e.g. pending, completed)
   * @throws {Error} When the status cell text content is not accessible
   */
  async getTransactionStatusText(transactionId: string): Promise<string> {
    const rowLocator = this.page.locator(this.selector_transactionRow(transactionId));
    const text = await rowLocator.locator(this.selector_statusCell).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsTablePOM: Status cell text content is null for transaction "${transactionId}". Selector: ${this.selector_statusCell}`
      );
    }

    return text;
  }

  /**
   * @desc Get the machine-readable transaction status from the data-status attribute of a specific row
   * @param {string} transactionId - The transaction ID of the row
   * @returns {Promise<string>} The raw data-status attribute value
   * @throws {Error} When the data-status attribute is not accessible
   */
  async getTransactionStatusAttribute(transactionId: string): Promise<string> {
    const rowLocator = this.page.locator(this.selector_transactionRow(transactionId));
    const value = await rowLocator.locator(this.selector_statusCell).getAttribute('data-status');

    if (value === null) {
      throw new Error(
        `TransactionsTablePOM: data-status attribute is null for transaction "${transactionId}". Selector: ${this.selector_statusCell}`
      );
    }

    return value;
  }

  /**
   * @desc Get the transaction category text from the category cell of a specific row
   * @param {string} transactionId - The transaction ID of the row
   * @returns {Promise<string>} The category text exactly as it appears
   * @throws {Error} When the category cell text content is not accessible
   */
  async getTransactionCategoryText(transactionId: string): Promise<string> {
    const rowLocator = this.page.locator(this.selector_transactionRow(transactionId));
    const text = await rowLocator.locator(this.selector_categoryCell).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsTablePOM: Category cell text content is null for transaction "${transactionId}". Selector: ${this.selector_categoryCell}`
      );
    }

    return text;
  }

  /**
   * @desc Get the transaction description or merchant name from the description cell of a specific row
   * @param {string} transactionId - The transaction ID of the row
   * @returns {Promise<string>} The description text exactly as it appears
   * @throws {Error} When the description cell text content is not accessible
   */
  async getTransactionDescriptionText(transactionId: string): Promise<string> {
    const rowLocator = this.page.locator(this.selector_transactionRow(transactionId));
    const text = await rowLocator.locator(this.selector_descriptionCell).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsTablePOM: Description cell text content is null for transaction "${transactionId}". Selector: ${this.selector_descriptionCell}`
      );
    }

    return text;
  }

  /**
   * @desc Get the raw transaction type (debit/credit) from the data-type attribute of the actions cell
   * @param {string} transactionId - The transaction ID of the row
   * @returns {Promise<string>} The raw data-type attribute value
   * @throws {Error} When the data-type attribute is not accessible
   */
  async getTransactionTypeAttribute(transactionId: string): Promise<string> {
    const rowLocator = this.page.locator(this.selector_transactionRow(transactionId));
    const value = await rowLocator.locator(this.selector_actionsCell).getAttribute('data-type');

    if (value === null) {
      throw new Error(
        `TransactionsTablePOM: data-type attribute is null for transaction "${transactionId}". Selector: ${this.selector_actionsCell}`
      );
    }

    return value;
  }

  /**
   * @desc Get the current text value entered in the search input field
   * @returns {Promise<string>} The current value of the search input
   * @throws {Error} When the search input value is not accessible
   */
  async getSearchInputValue(): Promise<string> {
    await this.page.locator(this.selector_searchInput).isVisible();
    const value = await this.page.locator(this.selector_searchInput).inputValue();

    if (value === null) {
      throw new Error(
        `TransactionsTablePOM: Search input value is not accessible. Selector: ${this.selector_searchInput}`
      );
    }

    return value;
  }

  /**
   * @desc Get the currently selected value in the status filter dropdown
   * @returns {Promise<string>} The currently selected status filter value
   * @throws {Error} When the status filter dropdown value is not accessible
   */
  async getStatusFilterValue(): Promise<string> {
    await this.page.locator(this.selector_statusFilterDropdown).isVisible();
    const value = await this.page.locator(this.selector_statusFilterDropdown).inputValue();

    if (value === null) {
      throw new Error(
        `TransactionsTablePOM: Status filter dropdown value is not accessible. Selector: ${this.selector_statusFilterDropdown}`
      );
    }

    return value;
  }

  /**
   * @desc Get the CSS classes of a specific page number button to determine if it is the active page
   * @param {number | string} pageNumber - The page number of the button
   * @returns {Promise<string>} The class attribute value of the page number button
   * @throws {Error} When the page number button class attribute is not accessible
   */
  async getPageNumberButtonClassList(pageNumber: number | string): Promise<string> {
    const selector = this.selector_pageNumberButton(pageNumber);
    await this.page.locator(selector).isVisible();
    const classList = await this.page.locator(selector).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `TransactionsTablePOM: Page number button class attribute is not accessible for page "${pageNumber}". Selector: ${selector}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the current page info text (e.g. 'Page 2 of 10')
   * @returns {Promise<string>} The page info text exactly as it appears
   * @throws {Error} When the page info text content is not accessible
   */
  async getPageInfoText(): Promise<string> {
    await this.page.locator(this.selector_pageInfo).isVisible();
    const text = await this.page.locator(this.selector_pageInfo).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsTablePOM: Page info text content is null. Selector: ${this.selector_pageInfo}`
      );
    }

    return text;
  }

  /**
   * @desc Get the total number of pages from the data-total-pages attribute on the pagination container
   * @returns {Promise<string>} The raw data-total-pages attribute value
   * @throws {Error} When the data-total-pages attribute is not accessible
   */
  async getPaginationTotalPagesAttribute(): Promise<string> {
    await this.page.locator(this.selector_paginationContainer).isVisible();
    const value = await this.page
      .locator(this.selector_paginationContainer)
      .getAttribute('data-total-pages');

    if (value === null) {
      throw new Error(
        `TransactionsTablePOM: data-total-pages attribute is null on pagination container. Selector: ${this.selector_paginationContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Get the currently active page number from the data-current-page attribute on the pagination container
   * @returns {Promise<string>} The raw data-current-page attribute value
   * @throws {Error} When the data-current-page attribute is not accessible
   */
  async getPaginationCurrentPageAttribute(): Promise<string> {
    await this.page.locator(this.selector_paginationContainer).isVisible();
    const value = await this.page
      .locator(this.selector_paginationContainer)
      .getAttribute('data-current-page');

    if (value === null) {
      throw new Error(
        `TransactionsTablePOM: data-current-page attribute is null on pagination container. Selector: ${this.selector_paginationContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Count the total number of page number buttons rendered in the pagination control
   * @returns {Promise<number>} The number of page number buttons rendered
   */
  async countPageNumberButtons(): Promise<number> {
    return await this.page
      .locator(`${this.rootSelector} [data-testid^='transactions-pagination-page-']`)
      .count();
  }
}