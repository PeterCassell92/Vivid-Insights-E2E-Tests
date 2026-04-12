/**
 * Page Object Model: TransactionRecordsTableView
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TransactionRecordsTableViewPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_transactionsTableContainer;
    private readonly selector_transactionsTable;
    private readonly selector_transactionsPaginationInfo;
    private readonly selector_previousPageButton;
    private readonly selector_transactionsPageIndicator;
    private readonly selector_nextPageButton;
    private readonly selector_transactionsTableLoading;
    private readonly selector_transactionsTableEmpty;
    private readonly selector_transactionsTableNoAccount;
    private readonly selector_transactionRow;
    private readonly selector_deleteTransactionButton;
    constructor(page: Page);
    /**
     * @desc Checks if the TransactionRecordsTableView main container is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the transactions table container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a TransactionRecordsTableViewPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TransactionRecordsTableViewPOM>} POM instance
     * @throws {Error} When the transactions table container is not visible
     */
    static getPOM(page: Page): Promise<TransactionRecordsTableViewPOM>;
    /**
     * @desc Check whether the main table container is visible — it is only rendered when transactions
     *       are loaded and a bank account is selected
     * @returns {Promise<boolean>} True if the transactions table container is visible
     */
    isTransactionsTableContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the loading state element is visible — rendered only while transactions
     *       are loading and the list is empty
     * @returns {Promise<boolean>} True if the loading state element is visible
     */
    isTransactionsTableLoadingVisible(): Promise<boolean>;
    /**
     * @desc Check whether the empty state element is visible — rendered when there are no
     *       transactions and loading is complete
     * @returns {Promise<boolean>} True if the empty state element is visible
     */
    isTransactionsTableEmptyVisible(): Promise<boolean>;
    /**
     * @desc Check whether the no-account state element is visible — rendered when no bank
     *       account is selected
     * @returns {Promise<boolean>} True if the no-account state element is visible
     */
    isTransactionsTableNoAccountVisible(): Promise<boolean>;
    /**
     * @desc Check whether the transactions table is visible on screen
     * @returns {Promise<boolean>} True if the transactions table element is visible
     */
    isTransactionsTableVisible(): Promise<boolean>;
    /**
     * @desc Check whether the pagination info element is visible on screen
     * @returns {Promise<boolean>} True if the pagination info element is visible
     */
    isTransactionsPaginationInfoVisible(): Promise<boolean>;
    /**
     * @desc Check whether the page indicator element is visible on screen
     * @returns {Promise<boolean>} True if the page indicator element is visible
     */
    isTransactionsPageIndicatorVisible(): Promise<boolean>;
    /**
     * @desc Check whether the delete button for a specific transaction is visible —
     *       only rendered when enableTransactionDeletion is true
     * @param {string} transactionId - The ID of the transaction
     * @returns {Promise<boolean>} True if the delete button is visible
     */
    isDeleteTransactionButtonVisible(transactionId: string): Promise<boolean>;
    /**
     * @desc Check whether the Previous page button is enabled — it is disabled when
     *       currentPage === 1 or loading is true
     * @returns {Promise<boolean>} True if the Previous page button is enabled
     */
    isPreviousPageButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the Next page button is enabled — it is disabled when
     *       currentPage === totalPages or loading is true
     * @returns {Promise<boolean>} True if the Next page button is enabled
     */
    isNextPageButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the delete button for a specific transaction is enabled (not disabled)
     * @param {string} transactionId - The ID of the transaction
     * @returns {Promise<boolean>} True if the delete button is enabled
     */
    isDeleteTransactionButtonEnabled(transactionId: string): Promise<boolean>;
    /**
     * @desc clicks the Previous page button to navigate to the previous page of transactions
     * Expected outcome is that the previous page of transactions will be loaded.
     * Note: the button is disabled when currentPage === 1 or loading is true.
     */
    clickPreviousPageButton(): Promise<void>;
    /**
     * @desc clicks the Next page button to navigate to the next page of transactions
     * Expected outcome is that the next page of transactions will be loaded.
     * Note: the button is disabled when currentPage === totalPages or loading is true.
     */
    clickNextPageButton(): Promise<void>;
    /**
     * @desc clicks the delete button for a specific transaction row to trigger a confirmation
     *       dialog and, upon confirmation, delete the transaction
     * Expected outcome is that a browser confirmation dialog will appear; if confirmed, the
     * transaction will be deleted and the table will refresh.
     * Note: only rendered when enableTransactionDeletion is true.
     * @param {string} transactionId - The ID of the transaction to delete
     */
    clickDeleteTransactionButton(transactionId: string): Promise<void>;
    /**
     * @desc Extract the text content of the loading state element (e.g. 'Loading transactions...')
     * @returns {Promise<string>} The loading state text exactly as it appears in the UI
     * @throws {Error} When the loading state text content is null or not accessible
     */
    getTransactionsTableLoadingText(): Promise<string>;
    /**
     * @desc Extract the text content of the empty state element (e.g. 'No transactions found')
     * @returns {Promise<string>} The empty state text exactly as it appears in the UI
     * @throws {Error} When the empty state text content is null or not accessible
     */
    getTransactionsTableEmptyText(): Promise<string>;
    /**
     * @desc Extract the text content of the no-account state element
     *       (e.g. 'Please select a bank account')
     * @returns {Promise<string>} The no-account state text exactly as it appears in the UI
     * @throws {Error} When the no-account state text content is null or not accessible
     */
    getTransactionsTableNoAccountText(): Promise<string>;
    /**
     * @desc Extract the full inner HTML of the transactions table, including all rendered
     *       header and body rows
     * @returns {Promise<string>} The inner HTML of the transactions table
     * @throws {Error} When the transactions table inner HTML is null or not accessible
     */
    getTransactionsTableInnerHtml(): Promise<string>;
    /**
     * @desc Extract the pagination info text showing the current record range and total count
     *       (e.g. 'Showing 1 to 25 of 100 transactions')
     * @returns {Promise<string>} The pagination info text exactly as it appears in the UI
     * @throws {Error} When the pagination info text content is null or not accessible
     */
    getTransactionsPaginationInfoText(): Promise<string>;
    /**
     * @desc Extract the visible text label of the Previous page button
     * @returns {Promise<string>} The Previous page button text exactly as it appears in the UI
     * @throws {Error} When the Previous page button text content is null or not accessible
     */
    getPreviousPageButtonText(): Promise<string>;
    /**
     * @desc Extract the page indicator text showing the current page position
     *       (e.g. 'Page 2 of 5')
     * @returns {Promise<string>} The page indicator text exactly as it appears in the UI
     * @throws {Error} When the page indicator text content is null or not accessible
     */
    getTransactionsPageIndicatorText(): Promise<string>;
    /**
     * @desc Extract the visible text label of the Next page button
     * @returns {Promise<string>} The Next page button text exactly as it appears in the UI
     * @throws {Error} When the Next page button text content is null or not accessible
     */
    getNextPageButtonText(): Promise<string>;
}
