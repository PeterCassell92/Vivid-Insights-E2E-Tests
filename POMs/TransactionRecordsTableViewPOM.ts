/**
 * Page Object Model: TransactionRecordsTableView
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const TransactionRecordsTableViewPOM_StandardSelector =
  '[data-testid="transactions-table-container"]';

export class TransactionRecordsTableViewPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_transactionsTableContainer: string;
  private readonly selector_transactionsTable: string;
  private readonly selector_transactionsPaginationInfo: string;
  private readonly selector_previousPageButton: string;
  private readonly selector_transactionsPageIndicator: string;
  private readonly selector_nextPageButton: string;
  private readonly selector_transactionsTableLoading: string;
  private readonly selector_transactionsTableEmpty: string;
  private readonly selector_transactionsTableNoAccount: string;
  private readonly selector_transactionRow: (transactionId: string) => string;
  private readonly selector_deleteTransactionButton: (transactionId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = TransactionRecordsTableViewPOM_StandardSelector;

    // Static selectors — children of the main container
    this.selector_transactionsTableContainer = this.rootSelector;
    this.selector_transactionsTable = `${this.rootSelector} [data-testid="transactions-table"]`;
    this.selector_transactionsPaginationInfo = `${this.rootSelector} [data-testid="transactions-pagination-info"]`;
    this.selector_previousPageButton = `${this.rootSelector} [data-testid="previous-page-button"]`;
    this.selector_transactionsPageIndicator = `${this.rootSelector} [data-testid="transactions-page-indicator"]`;
    this.selector_nextPageButton = `${this.rootSelector} [data-testid="next-page-button"]`;

    // Conditional state selectors — mutually exclusive with the main container; scoped to page
    this.selector_transactionsTableLoading = '[data-testid="transactions-table-loading"]';
    this.selector_transactionsTableEmpty = '[data-testid="transactions-table-empty"]';
    this.selector_transactionsTableNoAccount = '[data-testid="transactions-table-no-account"]';

    // Dynamic selectors
    this.selector_transactionRow = (transactionId: string) =>
      `${this.rootSelector} [data-testid="transaction-row-${transactionId}"]`;

    this.selector_deleteTransactionButton = (transactionId: string) =>
      `${this.rootSelector} [data-testid="delete-transaction-${transactionId}"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the TransactionRecordsTableView main container is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the transactions table container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const container = page.locator(TransactionRecordsTableViewPOM_StandardSelector);
      return await container.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a TransactionRecordsTableViewPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TransactionRecordsTableViewPOM>} POM instance
   * @throws {Error} When the transactions table container is not visible
   */
  static async getPOM(page: Page): Promise<TransactionRecordsTableViewPOM> {
    const isVisible = await TransactionRecordsTableViewPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TransactionRecordsTableViewPOM: Cannot instantiate - transactions table container is not visible. ' +
          `Expected element [${TransactionRecordsTableViewPOM_StandardSelector}] to be visible.`
      );
    }

    return new TransactionRecordsTableViewPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the main table container is visible — it is only rendered when transactions
   *       are loaded and a bank account is selected
   * @returns {Promise<boolean>} True if the transactions table container is visible
   */
  async isTransactionsTableContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_transactionsTableContainer).isVisible();
  }

  /**
   * @desc Check whether the loading state element is visible — rendered only while transactions
   *       are loading and the list is empty
   * @returns {Promise<boolean>} True if the loading state element is visible
   */
  async isTransactionsTableLoadingVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_transactionsTableLoading).isVisible();
  }

  /**
   * @desc Check whether the empty state element is visible — rendered when there are no
   *       transactions and loading is complete
   * @returns {Promise<boolean>} True if the empty state element is visible
   */
  async isTransactionsTableEmptyVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_transactionsTableEmpty).isVisible();
  }

  /**
   * @desc Check whether the no-account state element is visible — rendered when no bank
   *       account is selected
   * @returns {Promise<boolean>} True if the no-account state element is visible
   */
  async isTransactionsTableNoAccountVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_transactionsTableNoAccount).isVisible();
  }

  /**
   * @desc Check whether the transactions table is visible on screen
   * @returns {Promise<boolean>} True if the transactions table element is visible
   */
  async isTransactionsTableVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_transactionsTable).isVisible();
  }

  /**
   * @desc Check whether the pagination info element is visible on screen
   * @returns {Promise<boolean>} True if the pagination info element is visible
   */
  async isTransactionsPaginationInfoVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_transactionsPaginationInfo).isVisible();
  }

  /**
   * @desc Check whether the page indicator element is visible on screen
   * @returns {Promise<boolean>} True if the page indicator element is visible
   */
  async isTransactionsPageIndicatorVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_transactionsPageIndicator).isVisible();
  }

  /**
   * @desc Check whether the delete button for a specific transaction is visible —
   *       only rendered when enableTransactionDeletion is true
   * @param {string} transactionId - The ID of the transaction
   * @returns {Promise<boolean>} True if the delete button is visible
   */
  async isDeleteTransactionButtonVisible(transactionId: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_deleteTransactionButton(transactionId))
      .isVisible();
  }

  /**
   * @desc Check whether the Previous page button is enabled — it is disabled when
   *       currentPage === 1 or loading is true
   * @returns {Promise<boolean>} True if the Previous page button is enabled
   */
  async isPreviousPageButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_previousPageButton).isEnabled();
  }

  /**
   * @desc Check whether the Next page button is enabled — it is disabled when
   *       currentPage === totalPages or loading is true
   * @returns {Promise<boolean>} True if the Next page button is enabled
   */
  async isNextPageButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_nextPageButton).isEnabled();
  }

  /**
   * @desc Check whether the delete button for a specific transaction is enabled (not disabled)
   * @param {string} transactionId - The ID of the transaction
   * @returns {Promise<boolean>} True if the delete button is enabled
   */
  async isDeleteTransactionButtonEnabled(transactionId: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_deleteTransactionButton(transactionId))
      .isEnabled();
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc clicks the Previous page button to navigate to the previous page of transactions
   * Expected outcome is that the previous page of transactions will be loaded.
   * Note: the button is disabled when currentPage === 1 or loading is true.
   */
  async clickPreviousPageButton(): Promise<void> {
    await this.page.locator(this.selector_previousPageButton).click();
  }

  /**
   * @desc clicks the Next page button to navigate to the next page of transactions
   * Expected outcome is that the next page of transactions will be loaded.
   * Note: the button is disabled when currentPage === totalPages or loading is true.
   */
  async clickNextPageButton(): Promise<void> {
    await this.page.locator(this.selector_nextPageButton).click();
  }

  /**
   * @desc clicks the delete button for a specific transaction row to trigger a confirmation
   *       dialog and, upon confirmation, delete the transaction
   * Expected outcome is that a browser confirmation dialog will appear; if confirmed, the
   * transaction will be deleted and the table will refresh.
   * Note: only rendered when enableTransactionDeletion is true.
   * @param {string} transactionId - The ID of the transaction to delete
   */
  async clickDeleteTransactionButton(transactionId: string): Promise<void> {
    await this.page.locator(this.selector_deleteTransactionButton(transactionId)).click();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Extract the text content of the loading state element (e.g. 'Loading transactions...')
   * @returns {Promise<string>} The loading state text exactly as it appears in the UI
   * @throws {Error} When the loading state text content is null or not accessible
   */
  async getTransactionsTableLoadingText(): Promise<string> {
    await this.page.locator(this.selector_transactionsTableLoading).isVisible();
    const text = await this.page
      .locator(this.selector_transactionsTableLoading)
      .textContent();

    if (text === null) {
      throw new Error(
        `TransactionRecordsTableViewPOM: Loading state text content is null. ` +
          `Selector: ${this.selector_transactionsTableLoading}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the text content of the empty state element (e.g. 'No transactions found')
   * @returns {Promise<string>} The empty state text exactly as it appears in the UI
   * @throws {Error} When the empty state text content is null or not accessible
   */
  async getTransactionsTableEmptyText(): Promise<string> {
    await this.page.locator(this.selector_transactionsTableEmpty).isVisible();
    const text = await this.page
      .locator(this.selector_transactionsTableEmpty)
      .textContent();

    if (text === null) {
      throw new Error(
        `TransactionRecordsTableViewPOM: Empty state text content is null. ` +
          `Selector: ${this.selector_transactionsTableEmpty}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the text content of the no-account state element
   *       (e.g. 'Please select a bank account')
   * @returns {Promise<string>} The no-account state text exactly as it appears in the UI
   * @throws {Error} When the no-account state text content is null or not accessible
   */
  async getTransactionsTableNoAccountText(): Promise<string> {
    await this.page.locator(this.selector_transactionsTableNoAccount).isVisible();
    const text = await this.page
      .locator(this.selector_transactionsTableNoAccount)
      .textContent();

    if (text === null) {
      throw new Error(
        `TransactionRecordsTableViewPOM: No-account state text content is null. ` +
          `Selector: ${this.selector_transactionsTableNoAccount}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the full inner HTML of the transactions table, including all rendered
   *       header and body rows
   * @returns {Promise<string>} The inner HTML of the transactions table
   * @throws {Error} When the transactions table inner HTML is null or not accessible
   */
  async getTransactionsTableInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_transactionsTable).isVisible();
    const html = await this.page
      .locator(this.selector_transactionsTable)
      .innerHTML();

    if (html === null) {
      throw new Error(
        `TransactionRecordsTableViewPOM: Transactions table inner HTML is null. ` +
          `Selector: ${this.selector_transactionsTable}`
      );
    }

    return html;
  }

  /**
   * @desc Extract the pagination info text showing the current record range and total count
   *       (e.g. 'Showing 1 to 25 of 100 transactions')
   * @returns {Promise<string>} The pagination info text exactly as it appears in the UI
   * @throws {Error} When the pagination info text content is null or not accessible
   */
  async getTransactionsPaginationInfoText(): Promise<string> {
    await this.page.locator(this.selector_transactionsPaginationInfo).isVisible();
    const text = await this.page
      .locator(this.selector_transactionsPaginationInfo)
      .textContent();

    if (text === null) {
      throw new Error(
        `TransactionRecordsTableViewPOM: Pagination info text content is null. ` +
          `Selector: ${this.selector_transactionsPaginationInfo}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the visible text label of the Previous page button
   * @returns {Promise<string>} The Previous page button text exactly as it appears in the UI
   * @throws {Error} When the Previous page button text content is null or not accessible
   */
  async getPreviousPageButtonText(): Promise<string> {
    await this.page.locator(this.selector_previousPageButton).isVisible();
    const text = await this.page
      .locator(this.selector_previousPageButton)
      .textContent();

    if (text === null) {
      throw new Error(
        `TransactionRecordsTableViewPOM: Previous page button text content is null. ` +
          `Selector: ${this.selector_previousPageButton}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the page indicator text showing the current page position
   *       (e.g. 'Page 2 of 5')
   * @returns {Promise<string>} The page indicator text exactly as it appears in the UI
   * @throws {Error} When the page indicator text content is null or not accessible
   */
  async getTransactionsPageIndicatorText(): Promise<string> {
    await this.page.locator(this.selector_transactionsPageIndicator).isVisible();
    const text = await this.page
      .locator(this.selector_transactionsPageIndicator)
      .textContent();

    if (text === null) {
      throw new Error(
        `TransactionRecordsTableViewPOM: Page indicator text content is null. ` +
          `Selector: ${this.selector_transactionsPageIndicator}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the visible text label of the Next page button
   * @returns {Promise<string>} The Next page button text exactly as it appears in the UI
   * @throws {Error} When the Next page button text content is null or not accessible
   */
  async getNextPageButtonText(): Promise<string> {
    await this.page.locator(this.selector_nextPageButton).isVisible();
    const text = await this.page
      .locator(this.selector_nextPageButton)
      .textContent();

    if (text === null) {
      throw new Error(
        `TransactionRecordsTableViewPOM: Next page button text content is null. ` +
          `Selector: ${this.selector_nextPageButton}`
      );
    }

    return text;
  }
}