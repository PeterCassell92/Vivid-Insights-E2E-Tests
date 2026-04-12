/**
 * Page Object Model: TransactionsTable
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TransactionsTablePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_loadingSpinner;
    private readonly selector_tableContainer;
    private readonly selector_tableElement;
    private readonly selector_tableHeader;
    private readonly selector_tableBody;
    private readonly selector_emptyState;
    private readonly selector_headerCell;
    private readonly selector_transactionRow;
    private readonly selector_descriptionCell;
    private readonly selector_dateCell;
    private readonly selector_categoryCell;
    private readonly selector_actionsCell;
    private readonly selector_statusCell;
    private readonly selector_amountCell;
    private readonly selector_filtersContainer;
    private readonly selector_dateRangeFilter;
    private readonly selector_searchInput;
    private readonly selector_statusFilterDropdown;
    private readonly selector_clearFiltersButton;
    private readonly selector_paginationContainer;
    private readonly selector_previousPageButton;
    private readonly selector_nextPageButton;
    private readonly selector_pageInfo;
    private readonly selector_pageNumberButton;
    private readonly selector_viewDetailsButton;
    private readonly selector_editButton;
    private readonly selector_deleteButton;
    constructor(page: Page);
    /**
     * @desc Checks if the TransactionsTable component is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the table container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a TransactionsTablePOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TransactionsTablePOM>} A TransactionsTablePOM instance
     * @throws {Error} When the transactions table container is not visible
     */
    static getPOM(page: Page): Promise<TransactionsTablePOM>;
    /**
     * @desc Check whether the loading spinner is currently visible
     * @returns {Promise<boolean>} True if the loading spinner is visible
     */
    isLoadingSpinnerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the main table element is visible
     * @returns {Promise<boolean>} True if the table element is visible
     */
    isTableElementVisible(): Promise<boolean>;
    /**
     * @desc Check whether the empty state message is visible (no transactions present)
     * @returns {Promise<boolean>} True if the empty state element is visible
     */
    isEmptyStateVisible(): Promise<boolean>;
    /**
     * @desc Check whether a specific transaction row is visible in the table
     * @param {string} transactionId - The transaction ID to check
     * @returns {Promise<boolean>} True if the transaction row is visible
     */
    isTransactionRowVisible(transactionId: string): Promise<boolean>;
    /**
     * @desc Check whether the filters container bar is visible
     * @returns {Promise<boolean>} True if the filters container is visible
     */
    isFiltersContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the clear filters button is visible (indicating active filters)
     * @returns {Promise<boolean>} True if the clear filters button is visible
     */
    isClearFiltersButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the clear filters button is enabled
     * @returns {Promise<boolean>} True if the clear filters button is enabled
     */
    isClearFiltersButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the next page button is enabled (i.e. not on the last page)
     * @returns {Promise<boolean>} True if the next page button is enabled
     */
    isNextPageButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the previous page button is enabled (i.e. not on the first page)
     * @returns {Promise<boolean>} True if the previous page button is enabled
     */
    isPreviousPageButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the view details button is visible for a transaction row
     * @param {string} transactionId - The transaction ID whose row contains the button
     * @returns {Promise<boolean>} True if the view details button is visible
     */
    isViewDetailsButtonVisible(transactionId: string): Promise<boolean>;
    /**
     * @desc Check whether the edit button is visible for a transaction row
     * @param {string} transactionId - The transaction ID whose row contains the button
     * @returns {Promise<boolean>} True if the edit button is visible
     */
    isEditButtonVisible(transactionId: string): Promise<boolean>;
    /**
     * @desc Check whether the delete button is visible for a transaction row
     * @param {string} transactionId - The transaction ID whose row contains the button
     * @returns {Promise<boolean>} True if the delete button is visible
     */
    isDeleteButtonVisible(transactionId: string): Promise<boolean>;
    /**
     * @desc Check whether the view details button is enabled for a transaction row
     * @param {string} transactionId - The transaction ID whose row contains the button
     * @returns {Promise<boolean>} True if the view details button is enabled
     */
    isViewDetailsButtonEnabled(transactionId: string): Promise<boolean>;
    /**
     * @desc Check whether the edit button is enabled for a transaction row
     * @param {string} transactionId - The transaction ID whose row contains the button
     * @returns {Promise<boolean>} True if the edit button is enabled
     */
    isEditButtonEnabled(transactionId: string): Promise<boolean>;
    /**
     * @desc Check whether the delete button is enabled for a transaction row
     * @param {string} transactionId - The transaction ID whose row contains the button
     * @returns {Promise<boolean>} True if the delete button is enabled
     */
    isDeleteButtonEnabled(transactionId: string): Promise<boolean>;
    /**
     * @desc clicks a specific column header cell to trigger sorting
     * Expected outcome is that the table will be sorted by the selected column
     * @param {string} columnKey - The column key identifying the header cell
     */
    clickHeaderCell(columnKey: string): Promise<void>;
    /**
     * @desc clicks a specific transaction row to open transaction detail
     * Expected outcome is that the transaction detail view or modal will open
     * @param {string} transactionId - The transaction ID of the row to click
     */
    clickTransactionRow(transactionId: string): Promise<void>;
    /**
     * @desc Scroll within the transactions table container
     * Expected outcome is that the table content scrolls
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollTableContainer(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Select a status option from the status filter dropdown
     * Expected outcome is that the table will be filtered by the selected status
     * @param {string} statusValue - The status value to select
     */
    selectStatusFilter(statusValue: string): Promise<void>;
    /**
     * @desc clicks the date range filter to open the date picker
     * Expected outcome is that the date picker will open
     */
    clickDateRangeFilter(): Promise<void>;
    /**
     * @desc Clear the current text in the search input field
     * Expected outcome is that the search input will be empty and results reset
     */
    clearSearchInput(): Promise<void>;
    /**
     * @desc clicks the clear filters button to reset all active filters
     * Expected outcome is that all active filters will be cleared
     */
    clickClearFiltersButton(): Promise<void>;
    /**
     * @desc Type a keyword into the search input to filter transactions
     * Expected outcome is that the table will be filtered by the entered keyword
     * @param {string} keyword - The search keyword to enter
     */
    fillSearchInput(keyword: string): Promise<void>;
    /**
     * @desc clicks the previous page button to navigate to the previous page of transactions
     * Expected outcome is that the table will display the previous page of results
     */
    clickPreviousPageButton(): Promise<void>;
    /**
     * @desc clicks the next page button to navigate to the next page of transactions
     * Expected outcome is that the table will display the next page of results
     */
    clickNextPageButton(): Promise<void>;
    /**
     * @desc clicks a specific page number button to navigate directly to that page
     * Expected outcome is that the table will display the selected page of results
     * @param {number | string} pageNumber - The page number to navigate to
     */
    clickPageNumberButton(pageNumber: number | string): Promise<void>;
    /**
     * @desc clicks the view details button to open the full transaction detail view
     * Expected outcome is that the transaction detail view or modal will open
     * @param {string} transactionId - The transaction ID whose row contains the button
     */
    clickViewDetailsButton(transactionId: string): Promise<void>;
    /**
     * @desc clicks the edit button to edit or annotate a transaction
     * Expected outcome is that the edit form or modal will open
     * @param {string} transactionId - The transaction ID whose row contains the button
     */
    clickEditButton(transactionId: string): Promise<void>;
    /**
     * @desc clicks the delete button to delete a transaction
     * Expected outcome is that the transaction will be deleted or a confirmation dialog will appear
     * @param {string} transactionId - The transaction ID whose row contains the button
     */
    clickDeleteButton(transactionId: string): Promise<void>;
    /**
     * @desc Get the full inner HTML of the table body to inspect all rendered rows
     * @returns {Promise<string>} The inner HTML of the table body element
     * @throws {Error} When the table body inner HTML is not accessible
     */
    getTableBodyInnerHtml(): Promise<string>;
    /**
     * @desc Count the total number of transaction rows currently rendered in the table body
     * @returns {Promise<number>} The number of transaction rows rendered
     */
    countTransactionRows(): Promise<number>;
    /**
     * @desc Get the CSS classes of a column header cell to determine current sort state (e.g. asc/desc)
     * @param {string} columnKey - The column key identifying the header cell
     * @returns {Promise<string>} The class attribute value of the header cell
     * @throws {Error} When the header cell class attribute is not accessible
     */
    getHeaderCellClassList(columnKey: string): Promise<string>;
    /**
     * @desc Get the text label of a specific column header cell
     * @param {string} columnKey - The column key identifying the header cell
     * @returns {Promise<string>} The text content of the header cell exactly as it appears
     * @throws {Error} When the header cell text content is not accessible
     */
    getHeaderCellText(columnKey: string): Promise<string>;
    /**
     * @desc Get the text content of the empty state message
     * @returns {Promise<string>} The empty state message text exactly as it appears
     * @throws {Error} When the empty state text content is not accessible
     */
    getEmptyStateText(): Promise<string>;
    /**
     * @desc Get the transaction date text from the date cell of a specific row
     * @param {string} transactionId - The transaction ID of the row
     * @returns {Promise<string>} The date text exactly as it appears
     * @throws {Error} When the date cell text content is not accessible
     */
    getTransactionDateText(transactionId: string): Promise<string>;
    /**
     * @desc Get the displayed transaction amount from the amount cell of a specific row
     * @param {string} transactionId - The transaction ID of the row
     * @returns {Promise<string>} The amount text exactly as it appears
     * @throws {Error} When the amount cell text content is not accessible
     */
    getTransactionAmountText(transactionId: string): Promise<string>;
    /**
     * @desc Get the raw numeric transaction amount from the data-amount attribute of a specific row
     * @param {string} transactionId - The transaction ID of the row
     * @returns {Promise<string>} The raw data-amount attribute value
     * @throws {Error} When the data-amount attribute is not accessible
     */
    getTransactionAmountAttribute(transactionId: string): Promise<string>;
    /**
     * @desc Get the transaction status text from the status cell of a specific row
     * @param {string} transactionId - The transaction ID of the row
     * @returns {Promise<string>} The status text exactly as it appears (e.g. pending, completed)
     * @throws {Error} When the status cell text content is not accessible
     */
    getTransactionStatusText(transactionId: string): Promise<string>;
    /**
     * @desc Get the machine-readable transaction status from the data-status attribute of a specific row
     * @param {string} transactionId - The transaction ID of the row
     * @returns {Promise<string>} The raw data-status attribute value
     * @throws {Error} When the data-status attribute is not accessible
     */
    getTransactionStatusAttribute(transactionId: string): Promise<string>;
    /**
     * @desc Get the transaction category text from the category cell of a specific row
     * @param {string} transactionId - The transaction ID of the row
     * @returns {Promise<string>} The category text exactly as it appears
     * @throws {Error} When the category cell text content is not accessible
     */
    getTransactionCategoryText(transactionId: string): Promise<string>;
    /**
     * @desc Get the transaction description or merchant name from the description cell of a specific row
     * @param {string} transactionId - The transaction ID of the row
     * @returns {Promise<string>} The description text exactly as it appears
     * @throws {Error} When the description cell text content is not accessible
     */
    getTransactionDescriptionText(transactionId: string): Promise<string>;
    /**
     * @desc Get the raw transaction type (debit/credit) from the data-type attribute of the actions cell
     * @param {string} transactionId - The transaction ID of the row
     * @returns {Promise<string>} The raw data-type attribute value
     * @throws {Error} When the data-type attribute is not accessible
     */
    getTransactionTypeAttribute(transactionId: string): Promise<string>;
    /**
     * @desc Get the current text value entered in the search input field
     * @returns {Promise<string>} The current value of the search input
     * @throws {Error} When the search input value is not accessible
     */
    getSearchInputValue(): Promise<string>;
    /**
     * @desc Get the currently selected value in the status filter dropdown
     * @returns {Promise<string>} The currently selected status filter value
     * @throws {Error} When the status filter dropdown value is not accessible
     */
    getStatusFilterValue(): Promise<string>;
    /**
     * @desc Get the CSS classes of a specific page number button to determine if it is the active page
     * @param {number | string} pageNumber - The page number of the button
     * @returns {Promise<string>} The class attribute value of the page number button
     * @throws {Error} When the page number button class attribute is not accessible
     */
    getPageNumberButtonClassList(pageNumber: number | string): Promise<string>;
    /**
     * @desc Get the current page info text (e.g. 'Page 2 of 10')
     * @returns {Promise<string>} The page info text exactly as it appears
     * @throws {Error} When the page info text content is not accessible
     */
    getPageInfoText(): Promise<string>;
    /**
     * @desc Get the total number of pages from the data-total-pages attribute on the pagination container
     * @returns {Promise<string>} The raw data-total-pages attribute value
     * @throws {Error} When the data-total-pages attribute is not accessible
     */
    getPaginationTotalPagesAttribute(): Promise<string>;
    /**
     * @desc Get the currently active page number from the data-current-page attribute on the pagination container
     * @returns {Promise<string>} The raw data-current-page attribute value
     * @throws {Error} When the data-current-page attribute is not accessible
     */
    getPaginationCurrentPageAttribute(): Promise<string>;
    /**
     * @desc Count the total number of page number buttons rendered in the pagination control
     * @returns {Promise<number>} The number of page number buttons rendered
     */
    countPageNumberButtons(): Promise<number>;
}
