/**
 * Page Object Model: RecentTransactionsWidget
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class RecentTransactionsWidgetPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_widgetContainer;
    private readonly selector_widgetTitle;
    private readonly selector_transactionsList;
    private readonly selector_emptyState;
    private readonly selector_loadingSpinner;
    private readonly selector_errorMessage;
    private readonly selector_viewAllLink;
    private readonly selector_transactionRow;
    private readonly selector_transactionCategory;
    private readonly selector_transactionDescription;
    private readonly selector_transactionIcon;
    private readonly selector_transactionAmount;
    private readonly selector_transactionDate;
    private readonly selector_transactionStatus;
    constructor(page: Page);
    /**
     * @desc Checks if the Recent Transactions Widget is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the widget container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a RecentTransactionsWidgetPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<RecentTransactionsWidgetPOM>} A new RecentTransactionsWidgetPOM instance
     * @throws {Error} When the widget container is not visible
     */
    static getPOM(page: Page): Promise<RecentTransactionsWidgetPOM>;
    /**
     * @desc Check whether the root widget container is visible on screen
     * @returns {Promise<boolean>} True if the widget container is visible
     */
    isWidgetContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the loading spinner is currently visible
     * @returns {Promise<boolean>} True if the loading spinner is visible
     */
    isLoadingSpinnerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the empty state message is currently visible (no transactions)
     * @returns {Promise<boolean>} True if the empty state message is visible
     */
    isEmptyStateVisible(): Promise<boolean>;
    /**
     * @desc Check whether the error message is currently visible
     * @returns {Promise<boolean>} True if the error message is visible
     */
    isErrorMessageVisible(): Promise<boolean>;
    /**
     * @desc Clicks on an individual transaction row item
     * Expected outcome is that the transaction detail view or modal will open
     * @param {string} transactionId - The unique identifier of the transaction to click
     * @throws {Error} When the transaction row with the given ID is not visible
     */
    clickTransactionRow(transactionId: string): Promise<void>;
    /**
     * @desc Clicks the "View All Transactions" link to navigate to the full transactions page
     * Expected outcome is that the TransactionsPage will be navigated to
     * @throws {Error} When the view all link is not visible
     */
    clickViewAllLink(): Promise<void>;
    /**
     * @desc Scroll within the transactions widget container
     * Expected outcome is that the widget scrolls to reveal more content
     * @param {number} deltaX - Horizontal scroll distance in pixels
     * @param {number} deltaY - Vertical scroll distance in pixels
     * @throws {Error} When the widget container is not visible
     */
    scrollWidget(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Get the visible title/heading text of the Recent Transactions Widget
     * @returns {Promise<string>} The widget title text exactly as it appears in the UI
     * @throws {Error} When the widget title content is not accessible or null
     */
    getWidgetTitle(): Promise<string>;
    /**
     * @desc Get the text content of the empty state message
     * @returns {Promise<string>} The empty state message text exactly as it appears in the UI
     * @throws {Error} When the empty state content is not accessible or null
     */
    getEmptyStateText(): Promise<string>;
    /**
     * @desc Get the text content of the error message shown when transactions fail to load
     * @returns {Promise<string>} The error message text exactly as it appears in the UI
     * @throws {Error} When the error message content is not accessible or null
     */
    getErrorMessageText(): Promise<string>;
    /**
     * @desc Get the current loading state of the widget from the data-loading-state attribute
     * @returns {Promise<string>} The loading state value (e.g., 'loading', 'loaded', 'error')
     * @throws {Error} When the data-loading-state attribute is not accessible or null
     */
    getWidgetLoadingState(): Promise<string>;
    /**
     * @desc Count the total number of transaction row items currently rendered in the list
     * @returns {Promise<number>} The number of transaction items in the list
     */
    getTransactionCount(): Promise<number>;
    /**
     * @desc Get a list of all transaction description texts currently rendered in the transactions list
     * @returns {Promise<string[]>} Array of transaction description texts exactly as they appear in the UI
     * @throws {Error} When the transactions list is not accessible
     */
    getAllTransactionDescriptions(): Promise<string[]>;
    /**
     * @desc Get a list of all formatted transaction amounts currently rendered in the transactions list
     * @returns {Promise<string[]>} Array of transaction amount texts exactly as they appear in the UI
     * @throws {Error} When the transactions list is not accessible
     */
    getAllTransactionAmounts(): Promise<string[]>;
    /**
     * @desc Get the unique transaction ID from the data-transaction-id attribute of a transaction row
     * @param {string} transactionId - The transaction ID used to locate the row
     * @returns {Promise<string>} The data-transaction-id attribute value
     * @throws {Error} When the attribute is not accessible or null
     */
    getTransactionIdAttribute(transactionId: string): Promise<string>;
    /**
     * @desc Get the category identifier from the data-category attribute of a transaction row
     * @param {string} transactionId - The transaction ID used to locate the row
     * @returns {Promise<string>} The data-category attribute value
     * @throws {Error} When the attribute is not accessible or null
     */
    getTransactionCategoryAttribute(transactionId: string): Promise<string>;
    /**
     * @desc Get the status value from the data-status attribute of a transaction row
     * @param {string} transactionId - The transaction ID used to locate the row
     * @returns {Promise<string>} The data-status attribute value (e.g., 'pending', 'completed', 'failed')
     * @throws {Error} When the attribute is not accessible or null
     */
    getTransactionStatusAttribute(transactionId: string): Promise<string>;
    /**
     * @desc Get the transaction type from the data-transaction-type attribute of a transaction row
     * @param {string} transactionId - The transaction ID used to locate the row
     * @returns {Promise<string>} The data-transaction-type attribute value (e.g., 'debit' or 'credit')
     * @throws {Error} When the attribute is not accessible or null
     */
    getTransactionTypeAttribute(transactionId: string): Promise<string>;
    /**
     * @desc Get the raw numeric transaction amount from the data-amount attribute of a transaction row
     * @param {string} transactionId - The transaction ID used to locate the row
     * @returns {Promise<string>} The data-amount attribute value
     * @throws {Error} When the attribute is not accessible or null
     */
    getTransactionAmountAttribute(transactionId: string): Promise<string>;
    /**
     * @desc Get the position and dimensions of a specific transaction row
     * @param {string} transactionId - The transaction ID used to locate the row
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the transaction row
     * @throws {Error} When the transaction row is not visible or bounding box cannot be retrieved
     */
    getTransactionRowBoundingBox(transactionId: string): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
}
