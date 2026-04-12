/**
 * Page Object Model: AccountDetailPanel
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class AccountDetailPanelPOM {
    private readonly page;
    protected readonly rootSelector: string;
    protected readonly selector_panelContainer: string;
    protected readonly selector_accountName: string;
    protected readonly selector_accountId: string;
    protected readonly selector_accountStatus: string;
    protected readonly selector_accountHeaderContainer: string;
    protected readonly selector_deleteAccountButton: string;
    protected readonly selector_actionBarContainer: string;
    protected readonly selector_closeButton: string;
    protected readonly selector_editAccountButton: string;
    protected readonly selector_accountOwnerField: string;
    protected readonly selector_accountTypeField: string;
    protected readonly selector_accountCreatedDateField: string;
    protected readonly selector_accountBalanceField: string;
    protected readonly selector_detailsSectionContainer: string;
    protected readonly selector_transactionsListContainer: string;
    protected readonly selector_transactionsListTitle: string;
    protected readonly selector_transactionRow: (transactionId: string) => string;
    constructor(page: Page);
    /**
     * @desc Checks if the Account Detail Panel is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the panel is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns an AccountDetailPanelPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<AccountDetailPanelPOM>} AccountDetailPanelPOM instance
     * @throws {Error} When the account detail panel is not visible
     */
    static getPOM(page: Page): Promise<AccountDetailPanelPOM>;
    /**
     * @desc Check if the account detail panel container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the panel container is visible
     */
    isPanelVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check if the account header section is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account header container is visible
     */
    isAccountHeaderVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check if the delete account button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the delete account button is visible
     */
    isDeleteAccountButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check if the edit account button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the edit account button is visible
     */
    isEditAccountButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check if the close panel button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the close button is visible
     */
    isCloseButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check if the edit account button is enabled (not disabled)
     * @returns {Promise<boolean>} True if the edit account button is enabled
     */
    isEditAccountButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check if the delete account button is enabled (not disabled)
     * @returns {Promise<boolean>} True if the delete account button is enabled
     */
    isDeleteAccountButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check if the account details section is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account details section container is visible
     */
    isDetailsSectionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check if the transactions list container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the transactions list container is visible
     */
    isTransactionsListVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the delete account button to initiate account deletion
     * Expected outcome is that the delete account confirmation dialog or flow will be triggered
     */
    clickDeleteAccountButton(): Promise<void>;
    /**
     * @desc Clicks the close button to close/dismiss the detail panel
     * Expected outcome is that the account detail panel will be dismissed
     */
    clickCloseButton(): Promise<void>;
    /**
     * @desc Clicks the edit account button to open the edit account form
     * Expected outcome is that the edit account form or dialog will open
     */
    clickEditAccountButton(): Promise<void>;
    /**
     * @desc Clicks a specific transaction row by transaction ID
     * Expected outcome is that the transaction detail view or action will be triggered
     * @param {string} transactionId - The unique identifier of the transaction row to click
     */
    clickTransactionRow(transactionId: string): Promise<void>;
    /**
     * @desc Scrolls within the main account detail panel container
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollPanel(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Scrolls within the transactions list container
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollTransactionsList(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Get the position and dimensions of the account detail panel container
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the panel
     * @throws {Error} When the panel container bounding box is not accessible
     */
    getPanelBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the visible account name text
     * @returns {Promise<string>} The account name exactly as it appears in the UI
     * @throws {Error} When account name content is not accessible or null
     */
    getAccountName(): Promise<string>;
    /**
     * @desc Get the visible account ID text
     * @returns {Promise<string>} The account ID exactly as it appears in the UI
     * @throws {Error} When account ID content is not accessible or null
     */
    getAccountId(): Promise<string>;
    /**
     * @desc Get the visible account status badge text
     * @returns {Promise<string>} The account status text exactly as it appears in the UI
     * @throws {Error} When account status content is not accessible or null
     */
    getAccountStatusText(): Promise<string>;
    /**
     * @desc Get the CSS class list of the account status badge to determine styling state
     * @returns {Promise<string>} The full class attribute string of the account status element
     * @throws {Error} When the class attribute is not accessible or null
     */
    getAccountStatusClassList(): Promise<string>;
    /**
     * @desc Get the current status value from the data-status attribute of the account status badge
     * @returns {Promise<string>} The data-status attribute value (e.g. active, inactive, suspended)
     * @throws {Error} When the data-status attribute is not accessible or null
     */
    getAccountStatusAttribute(): Promise<string>;
    /**
     * @desc Get the account type label and value text
     * @returns {Promise<string>} The account type text exactly as it appears in the UI
     * @throws {Error} When account type content is not accessible or null
     */
    getAccountTypeText(): Promise<string>;
    /**
     * @desc Get the account type value from the data-account-type attribute
     * @returns {Promise<string>} The data-account-type attribute value
     * @throws {Error} When the data-account-type attribute is not accessible or null
     */
    getAccountTypeAttribute(): Promise<string>;
    /**
     * @desc Get the account balance display text
     * @returns {Promise<string>} The account balance text exactly as it appears in the UI
     * @throws {Error} When account balance content is not accessible or null
     */
    getAccountBalanceText(): Promise<string>;
    /**
     * @desc Get the account owner display text
     * @returns {Promise<string>} The account owner text exactly as it appears in the UI
     * @throws {Error} When account owner content is not accessible or null
     */
    getAccountOwnerText(): Promise<string>;
    /**
     * @desc Get the account creation date text
     * @returns {Promise<string>} The account created date text exactly as it appears in the UI
     * @throws {Error} When account created date content is not accessible or null
     */
    getAccountCreatedDateText(): Promise<string>;
    /**
     * @desc Get the transactions list title heading text
     * @returns {Promise<string>} The transactions list title text exactly as it appears in the UI
     * @throws {Error} When transactions list title content is not accessible or null
     */
    getTransactionsListTitleText(): Promise<string>;
    /**
     * @desc Get a list of all visible transaction row text contents from the transactions list
     * @returns {Promise<string[]>} Array of text content strings for each visible transaction row
     */
    getAllTransactionRowTexts(): Promise<string[]>;
    /**
     * @desc Count the total number of transaction rows currently rendered in the list
     * @returns {Promise<number>} The number of transaction rows in the list
     */
    getTransactionRowCount(): Promise<number>;
    /**
     * @desc Get the visible text content of a specific transaction row by transaction ID
     * @param {string} transactionId - The unique identifier of the transaction row
     * @returns {Promise<string>} The text content of the transaction row exactly as it appears
     * @throws {Error} When the transaction row content is not accessible or null
     */
    getTransactionRowText(transactionId: string): Promise<string>;
    /**
     * @desc Get the status from the data-status attribute of a specific transaction row
     * @param {string} transactionId - The unique identifier of the transaction row
     * @returns {Promise<string>} The data-status attribute value (e.g. pending, completed, failed)
     * @throws {Error} When the data-status attribute is not accessible or null
     */
    getTransactionRowStatus(transactionId: string): Promise<string>;
    /**
     * @desc Get the monetary amount from the data-amount attribute of a specific transaction row
     * @param {string} transactionId - The unique identifier of the transaction row
     * @returns {Promise<string>} The data-amount attribute value
     * @throws {Error} When the data-amount attribute is not accessible or null
     */
    getTransactionRowAmount(transactionId: string): Promise<string>;
    /**
     * @desc Get the date from the data-date attribute of a specific transaction row
     * @param {string} transactionId - The unique identifier of the transaction row
     * @returns {Promise<string>} The data-date attribute value
     * @throws {Error} When the data-date attribute is not accessible or null
     */
    getTransactionRowDate(transactionId: string): Promise<string>;
}
