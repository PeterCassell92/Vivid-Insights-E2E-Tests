/**
 * Page Object Model: AccountsPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class AccountsPagePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_pageTitle;
    private readonly selector_createAccountButton;
    private readonly selector_errorBanner;
    private readonly selector_errorDismissButton;
    private readonly selector_createAccountForm;
    private readonly selector_createNameInput;
    private readonly selector_createCurrencySelect;
    private readonly selector_createProviderSelect;
    private readonly selector_createAccountTypeSelect;
    private readonly selector_createSortCodeInput;
    private readonly selector_createAccountNumberInput;
    private readonly selector_createIbanInput;
    private readonly selector_createSwiftBicInput;
    private readonly selector_submitCreateAccountButton;
    private readonly selector_cancelCreateFormButton;
    private readonly selector_accountsList;
    private readonly selector_accountCard;
    private readonly selector_accountName;
    private readonly selector_accountProviderBadge;
    private readonly selector_accountCurrencyBadge;
    private readonly selector_accountTypeBadge;
    private readonly selector_accountSortCode;
    private readonly selector_accountNumber;
    private readonly selector_accountIban;
    private readonly selector_accountSwiftBic;
    private readonly selector_accountTransactionCount;
    private readonly selector_accountCoverage;
    private readonly selector_uploadTransactionsLink;
    private readonly selector_editAccountButton;
    private readonly selector_deleteAccountButton;
    private readonly selector_editAccountNameInput;
    private readonly selector_editAccountTypeSelect;
    private readonly selector_saveAccountNameButton;
    private readonly selector_cancelEditNameButton;
    private readonly selector_emptyState;
    private readonly selector_emptyStateAddButton;
    private readonly selector_loadingSpinner;
    constructor(page: Page);
    /**
     * @desc Checks if the Accounts page is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the accounts page title is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method — validates visibility then returns an AccountsPagePOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<AccountsPagePOM>} AccountsPagePOM instance
     * @throws {Error} When the accounts page title element is not visible
     */
    static getPOM(page: Page): Promise<AccountsPagePOM>;
    /**
     * @desc Whether the full-page loading spinner is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading spinner is visible
     */
    isLoadingSpinnerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether the empty state panel is currently visible (i.e. no accounts exist)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the empty state panel is visible
     */
    isEmptyStateVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether the error banner is currently visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the error banner is visible
     */
    isErrorBannerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether the create account form panel is currently rendered/visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the create account form is visible
     */
    isCreateAccountFormVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether the accounts list container is rendered (i.e. at least one account exists)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the accounts list is visible
     */
    isAccountsListVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether a specific account card is visible
     * @param {string} accountId - The UUID of the account
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account card is visible
     */
    isAccountCardVisible(accountId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Whether the account card for the given ID is currently in edit mode
     * @param {string} accountId - The UUID of the account
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the edit name input is visible for this account
     */
    isAccountCardInEditMode(accountId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Whether the IBAN field is visible in the create account form (EUR currency selected)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the IBAN input is visible
     */
    isCreateIbanInputVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether the sort code field is visible in the create account form (GBP currency selected)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the sort code input is visible
     */
    isCreateSortCodeInputVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Extracts the text content of the empty state panel (heading and description)
     * @returns {Promise<string>} The text content exactly as it appears in the empty state panel
     * @throws {Error} When the empty state panel content is not accessible or null
     */
    getEmptyStateText(): Promise<string>;
    /**
     * @desc Extracts the error message text displayed inside the error banner
     * @returns {Promise<string>} The error message text exactly as it appears
     * @throws {Error} When the error banner content is not accessible or null
     */
    getErrorBannerText(): Promise<string>;
    /**
     * @desc Gets the account name text for a specific account card
     * @param {string} accountId - The UUID of the account
     * @returns {Promise<string>} The account name exactly as it appears
     * @throws {Error} When the account name content is not accessible or null
     */
    getAccountName(accountId: string): Promise<string>;
    /**
     * @desc Gets the currency badge text for a specific account card
     * @param {string} accountId - The UUID of the account
     * @returns {Promise<string>} The currency badge text exactly as it appears
     * @throws {Error} When the currency badge content is not accessible or null
     */
    getAccountCurrency(accountId: string): Promise<string>;
    /**
     * @desc Gets the provider badge text for a specific account card
     * @param {string} accountId - The UUID of the account
     * @returns {Promise<string>} The provider badge text exactly as it appears
     * @throws {Error} When the provider badge content is not accessible or null
     */
    getAccountProvider(accountId: string): Promise<string>;
    /**
     * @desc Gets the account type badge text for a specific account card
     * @param {string} accountId - The UUID of the account
     * @returns {Promise<string>} The account type badge text exactly as it appears
     * @throws {Error} When the account type badge content is not accessible or null
     */
    getAccountType(accountId: string): Promise<string>;
    /**
     * @desc Gets the sort code text for a specific account card (GBP accounts only)
     * @param {string} accountId - The UUID of the account
     * @returns {Promise<string>} The sort code text exactly as it appears
     * @throws {Error} When the sort code content is not accessible or null
     */
    getAccountSortCode(accountId: string): Promise<string>;
    /**
     * @desc Gets the account number text for a specific account card (GBP accounts only)
     * @param {string} accountId - The UUID of the account
     * @returns {Promise<string>} The account number text exactly as it appears
     * @throws {Error} When the account number content is not accessible or null
     */
    getAccountNumber(accountId: string): Promise<string>;
    /**
     * @desc Gets the IBAN text for a specific account card (EUR accounts only)
     * @param {string} accountId - The UUID of the account
     * @returns {Promise<string>} The IBAN text exactly as it appears
     * @throws {Error} When the IBAN content is not accessible or null
     */
    getAccountIban(accountId: string): Promise<string>;
    /**
     * @desc Gets the SWIFT/BIC text for a specific account card (EUR accounts only, optional)
     * @param {string} accountId - The UUID of the account
     * @returns {Promise<string>} The SWIFT/BIC text exactly as it appears
     * @throws {Error} When the SWIFT/BIC content is not accessible or null
     */
    getAccountSwiftBic(accountId: string): Promise<string>;
    /**
     * @desc Gets the transaction count text for a specific account card
     * @param {string} accountId - The UUID of the account
     * @returns {Promise<string>} The transaction count text exactly as it appears
     * @throws {Error} When the transaction count content is not accessible or null
     */
    getAccountTransactionCount(accountId: string): Promise<string>;
    /**
     * @desc Gets the coverage indicator text for a specific account card
     * @param {string} accountId - The UUID of the account
     * @returns {Promise<string>} The coverage text exactly as it appears
     * @throws {Error} When the coverage content is not accessible or null
     */
    getAccountCoverageText(accountId: string): Promise<string>;
    /**
     * @desc Gets the currently selected value of the currency select in the create account form
     * @returns {Promise<string>} The selected currency value (e.g. "GBP" or "EUR")
     * @throws {Error} When the currency select is not accessible or its value is null
     */
    getCreateCurrencyValue(): Promise<string>;
    /**
     * @desc Clicks the "Add Account" button in the page header to open the create account form
     * Expected outcome is that the create account form will be shown
     */
    clickCreateAccountButton(): Promise<void>;
    /**
     * @desc Clicks the dismiss (X) button inside the error banner to clear the error
     * Expected outcome is that the error banner will be hidden
     */
    clickErrorDismissButton(): Promise<void>;
    /**
     * @desc Clicks the "Add Account" CTA button inside the empty state panel
     * Expected outcome is that the create account form will be shown
     */
    clickEmptyStateAddButton(): Promise<void>;
    /**
     * @desc Fills the account name input in the create account form
     * @param {string} name - The account name to enter
     */
    enterCreateAccountName(name: string): Promise<void>;
    /**
     * @desc Selects a currency in the create account form currency dropdown
     * Expected outcome is that currency-specific fields (sort code/account number or IBAN/SWIFT-BIC) will be shown or hidden accordingly
     * @param {'GBP' | 'EUR'} currency - The currency to select
     */
    selectCreateCurrency(currency: 'GBP' | 'EUR'): Promise<void>;
    /**
     * @desc Selects a provider in the create account form provider dropdown
     * @param {string} provider - The provider value to select (e.g. "HALIFAX", "OTHER")
     */
    selectCreateProvider(provider: string): Promise<void>;
    /**
     * @desc Selects an account type in the create account form account type dropdown
     * @param {string} accountType - The account type value to select (e.g. "PERSONAL_CURRENT", "SAVINGS")
     */
    selectCreateAccountType(accountType: string): Promise<void>;
    /**
     * @desc Fills the sort code input in the create account form (GBP currency only)
     * @param {string} sortCode - The sort code to enter (e.g. "11-22-33")
     */
    enterCreateSortCode(sortCode: string): Promise<void>;
    /**
     * @desc Fills the account number input in the create account form (GBP currency only)
     * @param {string} accountNumber - The account number to enter (e.g. "12345678")
     */
    enterCreateAccountNumber(accountNumber: string): Promise<void>;
    /**
     * @desc Fills the IBAN input in the create account form (EUR currency only)
     * @param {string} iban - The IBAN to enter (e.g. "DE89370400440532013000")
     */
    enterCreateIban(iban: string): Promise<void>;
    /**
     * @desc Fills the SWIFT/BIC input in the create account form (EUR currency only, optional)
     * @param {string} swiftBic - The SWIFT/BIC to enter (e.g. "DEUTDEFF")
     */
    enterCreateSwiftBic(swiftBic: string): Promise<void>;
    /**
     * @desc Clicks the submit button to create the new account
     * Expected outcome is that the new account will be created and the form will be dismissed
     */
    clickSubmitCreateAccount(): Promise<void>;
    /**
     * @desc Clicks the Cancel button to dismiss the create account form without saving
     * Expected outcome is that the create account form will be hidden
     */
    clickCancelCreateForm(): Promise<void>;
    /**
     * @desc Clicks the edit (pencil) button on an account card to enter edit mode
     * Expected outcome is that the inline edit fields will be shown for this account
     * @param {string} accountId - The UUID of the account
     */
    clickEditAccountButton(accountId: string): Promise<void>;
    /**
     * @desc Clicks the delete button on an account card to trigger the confirmation modal
     * Expected outcome is that the ConfirmationModal will be displayed
     * @param {string} accountId - The UUID of the account
     */
    clickDeleteAccountButton(accountId: string): Promise<void>;
    /**
     * @desc Clicks the "Upload transactions" link on an account card to navigate to the bank records page
     * Expected outcome is that the browser will navigate to /bank-records
     * @param {string} accountId - The UUID of the account
     */
    clickUploadTransactionsLink(accountId: string): Promise<void>;
    /**
     * @desc Fills the account name input while an account card is in edit mode
     * @param {string} accountId - The UUID of the account
     * @param {string} name - The new account name to enter
     */
    enterEditAccountName(accountId: string, name: string): Promise<void>;
    /**
     * @desc Selects an account type in the edit mode account type dropdown
     * @param {string} accountId - The UUID of the account
     * @param {string} accountType - The account type value to select (e.g. "PERSONAL_CURRENT", "SAVINGS")
     */
    selectEditAccountType(accountId: string, accountType: string): Promise<void>;
    /**
     * @desc Clicks the save (check) button to confirm the inline account name/type edit
     * Expected outcome is that the updated account details will be saved and display mode will be restored
     * @param {string} accountId - The UUID of the account
     */
    clickSaveAccountNameButton(accountId: string): Promise<void>;
    /**
     * @desc Clicks the cancel (X) button to discard the inline account name/type edit
     * Expected outcome is that the edit fields will be hidden and the original values will be restored
     * @param {string} accountId - The UUID of the account
     */
    clickCancelEditNameButton(accountId: string): Promise<void>;
    /**
     * @desc Fills and submits the create account form for a GBP account
     * A composite method that enters all required GBP fields and clicks submit
     * @param {{ name: string; sortCode: string; accountNumber: string; provider?: string; accountType?: string }} details - Account details
     */
    fillAndSubmitCreateAccountFormGBP(details: {
        name: string;
        sortCode: string;
        accountNumber: string;
        provider?: string;
        accountType?: string;
    }): Promise<void>;
    /**
     * @desc Fills and submits the create account form for a EUR account
     * A composite method that enters all required EUR fields and clicks submit
     * @param {{ name: string; iban: string; swiftBic?: string; provider?: string; accountType?: string }} details - Account details
     */
    fillAndSubmitCreateAccountFormEUR(details: {
        name: string;
        iban: string;
        swiftBic?: string;
        provider?: string;
        accountType?: string;
    }): Promise<void>;
    /**
     * @desc Enters a new name and account type for an account in edit mode, then saves
     * A composite method that fills the edit fields and clicks the save button
     * @param {string} accountId - The UUID of the account
     * @param {{ name: string; accountType?: string }} details - Updated account details
     */
    editAndSaveAccountDetails(accountId: string, details: {
        name: string;
        accountType?: string;
    }): Promise<void>;
}
