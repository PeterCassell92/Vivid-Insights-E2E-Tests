/**
 * Page Object Model: AccountsList
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class AccountsListPOM {
    private readonly page;
    protected readonly rootSelector: string;
    protected readonly selector_addAccountButton: string;
    protected readonly selector_emptyState: string;
    protected readonly selector_loadingSpinner: string;
    protected readonly selector_searchInput: string;
    protected readonly selector_accountsTableHead: string;
    protected readonly selector_accountsTableBody: string;
    protected readonly selector_accountsListContainer: string;
    protected readonly selector_accountsTable: string;
    protected readonly selector_accountsListHeader: string;
    protected readonly selector_accountRow: (accountId: string) => string;
    protected readonly selector_accountStatusCell: string;
    protected readonly selector_accountNameCell: string;
    protected readonly selector_accountActionsCell: string;
    protected readonly selector_accountTypeCell: string;
    protected readonly selector_editAccountButton: string;
    protected readonly selector_deleteAccountButton: string;
    protected readonly selector_accountStatusCellInRow: (accountId: string) => string;
    protected readonly selector_accountNameCellInRow: (accountId: string) => string;
    protected readonly selector_accountActionsCellInRow: (accountId: string) => string;
    protected readonly selector_accountTypeCellInRow: (accountId: string) => string;
    protected readonly selector_editAccountButtonInRow: (accountId: string) => string;
    protected readonly selector_deleteAccountButtonInRow: (accountId: string) => string;
    constructor(page: Page);
    /**
     * @desc Checks if the AccountsList component is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the accounts list container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns an AccountsListPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<AccountsListPOM>} A new AccountsListPOM instance
     * @throws {Error} When the accounts list container is not visible
     */
    static getPOM(page: Page): Promise<AccountsListPOM>;
    /**
     * @desc Whether or not the accounts list container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the accounts list container is visible
     */
    isAccountsListContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the loading spinner is currently visible, indicating accounts are being fetched
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading spinner is visible
     */
    isLoadingSpinnerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the empty state message is visible, indicating no accounts exist
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the empty state element is visible
     */
    isEmptyStateVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the add account button
     * Expected outcome is that the add account dialog or form will open
     */
    clickAddAccountButton(): Promise<void>;
    /**
     * @desc Clicks a specific account row by accountId to select or navigate to that account
     * Expected outcome is that the account row is selected or the account detail view opens
     * @param {string} accountId - The unique identifier of the account row to click
     * @throws {Error} When the account row with the given accountId is not visible
     */
    clickAccountRow(accountId: string): Promise<void>;
    /**
     * @desc Clicks the edit account button within a specific account row
     * Expected outcome is that the edit account dialog or form will open for that account
     * @param {string} accountId - The unique identifier of the account row
     * @throws {Error} When the edit button within the given account row is not visible
     */
    clickEditAccountButton(accountId: string): Promise<void>;
    /**
     * @desc Clicks the delete account button within a specific account row
     * Expected outcome is that the delete confirmation dialog will open for that account
     * @param {string} accountId - The unique identifier of the account row
     * @throws {Error} When the delete button within the given account row is not visible
     */
    clickDeleteAccountButton(accountId: string): Promise<void>;
    /**
     * @desc Scrolls within the accounts list container to navigate through many account rows
     * Expected outcome is that the list scrolls by the specified delta
     * @param {number} deltaX - Horizontal scroll distance in pixels
     * @param {number} deltaY - Vertical scroll distance in pixels
     */
    scrollAccountsList(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Count the total number of account rows currently rendered in the accounts table body
     * @returns {Promise<number>} The number of account rows in the table
     */
    getAccountRowCount(): Promise<number>;
    /**
     * @desc Get the unique account ID (data-account-id) from a specific account row
     * @param {string} accountId - The accountId used to locate the row
     * @returns {Promise<string>} The data-account-id attribute value of the row
     * @throws {Error} When the attribute is not accessible or null
     */
    getAccountIdAttribute(accountId: string): Promise<string>;
    /**
     * @desc Get the status (data-status) of a specific account row (e.g., active, inactive, suspended)
     * @param {string} accountId - The accountId used to locate the row
     * @returns {Promise<string>} The data-status attribute value of the row
     * @throws {Error} When the attribute is not accessible or null
     */
    getAccountStatusAttribute(accountId: string): Promise<string>;
    /**
     * @desc Get the text content of the empty state message
     * @returns {Promise<string>} The text content of the empty state element exactly as it appears
     * @throws {Error} When the empty state element content is not accessible or null
     */
    getEmptyStateText(): Promise<string>;
    /**
     * @desc Get the text content of the accounts list header section
     * @returns {Promise<string>} The text content of the accounts list header exactly as it appears
     * @throws {Error} When the header content is not accessible or null
     */
    getAccountsListHeaderText(): Promise<string>;
    /**
     * @desc Get the text content of the accounts table header row (column labels)
     * @returns {Promise<string>} The text content of the table head exactly as it appears
     * @throws {Error} When the table head content is not accessible or null
     */
    getAccountsTableHeadText(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the accounts list container for deep inspection
     * @returns {Promise<string>} The inner HTML of the accounts list container
     * @throws {Error} When the accounts list container inner HTML is not accessible or null
     */
    getAccountsListContainerInnerHtml(): Promise<string>;
    /**
     * @desc Get the visible text content of the account status cell for a specific account row
     * @param {string} accountId - The unique identifier of the account row
     * @returns {Promise<string>} The text content of the account status cell exactly as it appears
     * @throws {Error} When the account status cell content is not accessible or null
     */
    getAccountStatusCellText(accountId: string): Promise<string>;
    /**
     * @desc Get the visible text content of the account name cell for a specific account row
     * @param {string} accountId - The unique identifier of the account row
     * @returns {Promise<string>} The text content of the account name cell exactly as it appears
     * @throws {Error} When the account name cell content is not accessible or null
     */
    getAccountNameCellText(accountId: string): Promise<string>;
    /**
     * @desc Get the visible text content of the account type cell for a specific account row
     * @param {string} accountId - The unique identifier of the account row
     * @returns {Promise<string>} The text content of the account type cell exactly as it appears
     * @throws {Error} When the account type cell content is not accessible or null
     */
    getAccountTypeCellText(accountId: string): Promise<string>;
    /**
     * @desc Get the data-account-type attribute value from an account type cell for a specific account row
     * @param {string} accountId - The unique identifier of the account row
     * @returns {Promise<string>} The data-account-type attribute value (e.g., checking, savings, credit)
     * @throws {Error} When the attribute is not accessible or null
     */
    getAccountTypeCellAttribute(accountId: string): Promise<string>;
    /**
     * @desc Get a list of all account status text values from all account status cells in the table
     * @returns {Promise<string[]>} Array of account status text values exactly as they appear
     */
    getAllAccountStatusCellTexts(): Promise<string[]>;
    /**
     * @desc Get a list of all account name text values from all account name cells in the table
     * @returns {Promise<string[]>} Array of account name text values exactly as they appear
     */
    getAllAccountNameCellTexts(): Promise<string[]>;
    /**
     * @desc Get a list of all account type text values from all account type cells in the table
     * @returns {Promise<string[]>} Array of account type text values exactly as they appear
     */
    getAllAccountTypeCellTexts(): Promise<string[]>;
}
