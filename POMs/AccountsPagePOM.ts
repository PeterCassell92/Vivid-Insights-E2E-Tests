/**
 * Page Object Model: AccountsPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const AccountsPagePOM_StandardSelector = '[data-testid="accounts-page-title"]';

export class AccountsPagePOM {
  private readonly page: Page;

  // ============================================================
  // Selector Properties
  // ============================================================

  private readonly rootSelector: string;

  // pageHeader
  private readonly selector_pageTitle: string;
  private readonly selector_createAccountButton: string;

  // errorBanner
  private readonly selector_errorBanner: string;
  private readonly selector_errorDismissButton: string;

  // createAccountForm
  private readonly selector_createAccountForm: string;
  private readonly selector_createNameInput: string;
  private readonly selector_createCurrencySelect: string;
  private readonly selector_createProviderSelect: string;
  private readonly selector_createAccountTypeSelect: string;
  private readonly selector_createSortCodeInput: string;
  private readonly selector_createAccountNumberInput: string;
  private readonly selector_createIbanInput: string;
  private readonly selector_createSwiftBicInput: string;
  private readonly selector_submitCreateAccountButton: string;
  private readonly selector_cancelCreateFormButton: string;

  // accountsList
  private readonly selector_accountsList: string;
  private readonly selector_accountCard: (accountId: string) => string;

  // accountCardDisplayMode — dynamic per accountId
  private readonly selector_accountName: (accountId: string) => string;
  private readonly selector_accountProviderBadge: (accountId: string) => string;
  private readonly selector_accountCurrencyBadge: (accountId: string) => string;
  private readonly selector_accountTypeBadge: (accountId: string) => string;
  private readonly selector_accountSortCode: (accountId: string) => string;
  private readonly selector_accountNumber: (accountId: string) => string;
  private readonly selector_accountIban: (accountId: string) => string;
  private readonly selector_accountSwiftBic: (accountId: string) => string;
  private readonly selector_accountTransactionCount: (accountId: string) => string;
  private readonly selector_accountCoverage: (accountId: string) => string;
  private readonly selector_uploadTransactionsLink: (accountId: string) => string;
  private readonly selector_editAccountButton: (accountId: string) => string;
  private readonly selector_deleteAccountButton: (accountId: string) => string;

  // accountCardEditMode — dynamic per accountId
  private readonly selector_editAccountNameInput: (accountId: string) => string;
  private readonly selector_editAccountTypeSelect: (accountId: string) => string;
  private readonly selector_saveAccountNameButton: (accountId: string) => string;
  private readonly selector_cancelEditNameButton: (accountId: string) => string;

  // emptyState
  private readonly selector_emptyState: string;
  private readonly selector_emptyStateAddButton: string;

  // loadingSpinner
  private readonly selector_loadingSpinner: string;

  constructor(page: Page) {
    this.page = page;

    // ============================================================
    // Selectors — Single source of truth
    // ============================================================

    this.rootSelector = AccountsPagePOM_StandardSelector;

    // pageHeader
    this.selector_pageTitle = `[data-testid="accounts-page-title"]`;
    this.selector_createAccountButton = `[data-testid="create-account-button"]`;

    // errorBanner
    this.selector_errorBanner = `.bg-red-50.border.border-red-200.rounded-lg`;
    this.selector_errorDismissButton = `.bg-red-50 button`;

    // createAccountForm
    this.selector_createAccountForm = `[data-testid="create-account-form"]`;
    this.selector_createNameInput = `[data-testid="create-account-name"]`;
    this.selector_createCurrencySelect = `[data-testid="create-account-currency"]`;
    this.selector_createProviderSelect = `[data-testid="create-account-provider"]`;
    this.selector_createAccountTypeSelect = `[data-testid="create-account-type"]`;
    this.selector_createSortCodeInput = `[data-testid="create-account-sort-code"]`;
    this.selector_createAccountNumberInput = `[data-testid="create-account-number"]`;
    this.selector_createIbanInput = `[data-testid="create-account-iban"]`;
    this.selector_createSwiftBicInput = `[data-testid="create-account-swift-bic"]`;
    this.selector_submitCreateAccountButton = `[data-testid="submit-create-account"]`;
    this.selector_cancelCreateFormButton = `[data-testid="create-account-form"] button:has-text("Cancel")`;

    // accountsList
    this.selector_accountsList = `.space-y-3`;
    this.selector_accountCard = (accountId: string) =>
      `[data-testid="account-card-${accountId}"]`;

    // accountCardDisplayMode
    this.selector_accountName = (accountId: string) =>
      `[data-testid="account-name-${accountId}"]`;
    this.selector_accountProviderBadge = (accountId: string) =>
      `[data-testid="account-provider-${accountId}"]`;
    this.selector_accountCurrencyBadge = (accountId: string) =>
      `[data-testid="account-currency-${accountId}"]`;
    this.selector_accountTypeBadge = (accountId: string) =>
      `[data-testid="account-type-${accountId}"]`;
    this.selector_accountSortCode = (accountId: string) =>
      `[data-testid="account-sort-code-${accountId}"]`;
    this.selector_accountNumber = (accountId: string) =>
      `[data-testid="account-number-${accountId}"]`;
    this.selector_accountIban = (accountId: string) =>
      `[data-testid="account-iban-${accountId}"]`;
    this.selector_accountSwiftBic = (accountId: string) =>
      `[data-testid="account-swift-${accountId}"]`;
    this.selector_accountTransactionCount = (accountId: string) =>
      `[data-testid="account-transactions-${accountId}"]`;
    this.selector_accountCoverage = (accountId: string) =>
      `[data-testid="account-coverage-${accountId}"]`;
    this.selector_uploadTransactionsLink = (accountId: string) =>
      `[data-testid="upload-transactions-${accountId}"]`;
    this.selector_editAccountButton = (accountId: string) =>
      `[data-testid="edit-account-button-${accountId}"]`;
    this.selector_deleteAccountButton = (accountId: string) =>
      `[data-testid="delete-account-button-${accountId}"]`;

    // accountCardEditMode
    this.selector_editAccountNameInput = (accountId: string) =>
      `[data-testid="edit-account-name-${accountId}"]`;
    this.selector_editAccountTypeSelect = (accountId: string) =>
      `[data-testid="edit-account-type-${accountId}"]`;
    this.selector_saveAccountNameButton = (accountId: string) =>
      `[data-testid="save-account-name-${accountId}"]`;
    this.selector_cancelEditNameButton = (accountId: string) =>
      `[data-testid="cancel-edit-name-${accountId}"]`;

    // emptyState
    this.selector_emptyState = `.bg-white.rounded-lg.shadow:has(h3)`;
    this.selector_emptyStateAddButton = `.bg-white.rounded-lg.shadow button`;

    // loadingSpinner
    this.selector_loadingSpinner = `.animate-spin`;
  }

  // ============================================================
  // Static Methods
  // ============================================================

  /**
   * @desc Checks if the Accounts page is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the accounts page title is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(AccountsPagePOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method — validates visibility then returns an AccountsPagePOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<AccountsPagePOM>} AccountsPagePOM instance
   * @throws {Error} When the accounts page title element is not visible
   */
  static async getPOM(page: Page): Promise<AccountsPagePOM> {
    const isVisible = await AccountsPagePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'AccountsPagePOM: Cannot instantiate — accounts page is not visible. ' +
          `Expected element [${AccountsPagePOM_StandardSelector}] to be visible.`
      );
    }

    return new AccountsPagePOM(page);
  }

  // ============================================================
  // Visibility and State Methods
  // ============================================================

  /**
   * @desc Whether the full-page loading spinner is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading spinner is visible
   */
  async isLoadingSpinnerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_loadingSpinner).isVisible({ timeout });
  }

  /**
   * @desc Whether the empty state panel is currently visible (i.e. no accounts exist)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the empty state panel is visible
   */
  async isEmptyStateVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_emptyState).isVisible({ timeout });
  }

  /**
   * @desc Whether the error banner is currently visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the error banner is visible
   */
  async isErrorBannerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_errorBanner).isVisible({ timeout });
  }

  /**
   * @desc Whether the create account form panel is currently rendered/visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the create account form is visible
   */
  async isCreateAccountFormVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_createAccountForm).isVisible({ timeout });
  }

  /**
   * @desc Whether the accounts list container is rendered (i.e. at least one account exists)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the accounts list is visible
   */
  async isAccountsListVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountsList).isVisible({ timeout });
  }

  /**
   * @desc Whether a specific account card is visible
   * @param {string} accountId - The UUID of the account
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account card is visible
   */
  async isAccountCardVisible(accountId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountCard(accountId)).isVisible({ timeout });
  }

  /**
   * @desc Whether the account card for the given ID is currently in edit mode
   * @param {string} accountId - The UUID of the account
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the edit name input is visible for this account
   */
  async isAccountCardInEditMode(accountId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_editAccountNameInput(accountId))
      .isVisible({ timeout });
  }

  /**
   * @desc Whether the IBAN field is visible in the create account form (EUR currency selected)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the IBAN input is visible
   */
  async isCreateIbanInputVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_createIbanInput).isVisible({ timeout });
  }

  /**
   * @desc Whether the sort code field is visible in the create account form (GBP currency selected)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the sort code input is visible
   */
  async isCreateSortCodeInputVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_createSortCodeInput).isVisible({ timeout });
  }

  // ============================================================
  // Data Retrieval Methods
  // ============================================================

  /**
   * @desc Extracts the text content of the empty state panel (heading and description)
   * @returns {Promise<string>} The text content exactly as it appears in the empty state panel
   * @throws {Error} When the empty state panel content is not accessible or null
   */
  async getEmptyStateText(): Promise<string> {
    await this.page.locator(this.selector_emptyState).isVisible();
    const text = await this.page.locator(this.selector_emptyState).textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Empty state text content is null. Selector: ${this.selector_emptyState}`
      );
    }

    return text;
  }

  /**
   * @desc Extracts the error message text displayed inside the error banner
   * @returns {Promise<string>} The error message text exactly as it appears
   * @throws {Error} When the error banner content is not accessible or null
   */
  async getErrorBannerText(): Promise<string> {
    await this.page.locator(this.selector_errorBanner).isVisible();
    const text = await this.page.locator(this.selector_errorBanner).textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Error banner text content is null. Selector: ${this.selector_errorBanner}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the account name text for a specific account card
   * @param {string} accountId - The UUID of the account
   * @returns {Promise<string>} The account name exactly as it appears
   * @throws {Error} When the account name content is not accessible or null
   */
  async getAccountName(accountId: string): Promise<string> {
    await this.page.locator(this.selector_accountName(accountId)).isVisible();
    const text = await this.page.locator(this.selector_accountName(accountId)).textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Account name text is null for account "${accountId}". Selector: ${this.selector_accountName(accountId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the currency badge text for a specific account card
   * @param {string} accountId - The UUID of the account
   * @returns {Promise<string>} The currency badge text exactly as it appears
   * @throws {Error} When the currency badge content is not accessible or null
   */
  async getAccountCurrency(accountId: string): Promise<string> {
    await this.page.locator(this.selector_accountCurrencyBadge(accountId)).isVisible();
    const text = await this.page
      .locator(this.selector_accountCurrencyBadge(accountId))
      .textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Account currency text is null for account "${accountId}". Selector: ${this.selector_accountCurrencyBadge(accountId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the provider badge text for a specific account card
   * @param {string} accountId - The UUID of the account
   * @returns {Promise<string>} The provider badge text exactly as it appears
   * @throws {Error} When the provider badge content is not accessible or null
   */
  async getAccountProvider(accountId: string): Promise<string> {
    await this.page.locator(this.selector_accountProviderBadge(accountId)).isVisible();
    const text = await this.page
      .locator(this.selector_accountProviderBadge(accountId))
      .textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Account provider text is null for account "${accountId}". Selector: ${this.selector_accountProviderBadge(accountId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the account type badge text for a specific account card
   * @param {string} accountId - The UUID of the account
   * @returns {Promise<string>} The account type badge text exactly as it appears
   * @throws {Error} When the account type badge content is not accessible or null
   */
  async getAccountType(accountId: string): Promise<string> {
    await this.page.locator(this.selector_accountTypeBadge(accountId)).isVisible();
    const text = await this.page
      .locator(this.selector_accountTypeBadge(accountId))
      .textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Account type text is null for account "${accountId}". Selector: ${this.selector_accountTypeBadge(accountId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the sort code text for a specific account card (GBP accounts only)
   * @param {string} accountId - The UUID of the account
   * @returns {Promise<string>} The sort code text exactly as it appears
   * @throws {Error} When the sort code content is not accessible or null
   */
  async getAccountSortCode(accountId: string): Promise<string> {
    await this.page.locator(this.selector_accountSortCode(accountId)).isVisible();
    const text = await this.page
      .locator(this.selector_accountSortCode(accountId))
      .textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Account sort code text is null for account "${accountId}". Selector: ${this.selector_accountSortCode(accountId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the account number text for a specific account card (GBP accounts only)
   * @param {string} accountId - The UUID of the account
   * @returns {Promise<string>} The account number text exactly as it appears
   * @throws {Error} When the account number content is not accessible or null
   */
  async getAccountNumber(accountId: string): Promise<string> {
    await this.page.locator(this.selector_accountNumber(accountId)).isVisible();
    const text = await this.page.locator(this.selector_accountNumber(accountId)).textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Account number text is null for account "${accountId}". Selector: ${this.selector_accountNumber(accountId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the IBAN text for a specific account card (EUR accounts only)
   * @param {string} accountId - The UUID of the account
   * @returns {Promise<string>} The IBAN text exactly as it appears
   * @throws {Error} When the IBAN content is not accessible or null
   */
  async getAccountIban(accountId: string): Promise<string> {
    await this.page.locator(this.selector_accountIban(accountId)).isVisible();
    const text = await this.page.locator(this.selector_accountIban(accountId)).textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Account IBAN text is null for account "${accountId}". Selector: ${this.selector_accountIban(accountId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the SWIFT/BIC text for a specific account card (EUR accounts only, optional)
   * @param {string} accountId - The UUID of the account
   * @returns {Promise<string>} The SWIFT/BIC text exactly as it appears
   * @throws {Error} When the SWIFT/BIC content is not accessible or null
   */
  async getAccountSwiftBic(accountId: string): Promise<string> {
    await this.page.locator(this.selector_accountSwiftBic(accountId)).isVisible();
    const text = await this.page
      .locator(this.selector_accountSwiftBic(accountId))
      .textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Account SWIFT/BIC text is null for account "${accountId}". Selector: ${this.selector_accountSwiftBic(accountId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the transaction count text for a specific account card
   * @param {string} accountId - The UUID of the account
   * @returns {Promise<string>} The transaction count text exactly as it appears
   * @throws {Error} When the transaction count content is not accessible or null
   */
  async getAccountTransactionCount(accountId: string): Promise<string> {
    await this.page.locator(this.selector_accountTransactionCount(accountId)).isVisible();
    const text = await this.page
      .locator(this.selector_accountTransactionCount(accountId))
      .textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Account transaction count text is null for account "${accountId}". Selector: ${this.selector_accountTransactionCount(accountId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the coverage indicator text for a specific account card
   * @param {string} accountId - The UUID of the account
   * @returns {Promise<string>} The coverage text exactly as it appears
   * @throws {Error} When the coverage content is not accessible or null
   */
  async getAccountCoverageText(accountId: string): Promise<string> {
    await this.page.locator(this.selector_accountCoverage(accountId)).isVisible();
    const text = await this.page
      .locator(this.selector_accountCoverage(accountId))
      .textContent();

    if (text === null) {
      throw new Error(
        `AccountsPagePOM: Account coverage text is null for account "${accountId}". Selector: ${this.selector_accountCoverage(accountId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the currently selected value of the currency select in the create account form
   * @returns {Promise<string>} The selected currency value (e.g. "GBP" or "EUR")
   * @throws {Error} When the currency select is not accessible or its value is null
   */
  async getCreateCurrencyValue(): Promise<string> {
    await this.page.locator(this.selector_createCurrencySelect).isVisible();
    const value = await this.page
      .locator(this.selector_createCurrencySelect)
      .inputValue();

    if (value === null) {
      throw new Error(
        `AccountsPagePOM: Create currency select value is null. Selector: ${this.selector_createCurrencySelect}`
      );
    }

    return value;
  }

  // ============================================================
  // Action Methods — Page Header
  // ============================================================

  /**
   * @desc Clicks the "Add Account" button in the page header to open the create account form
   * Expected outcome is that the create account form will be shown
   */
  async clickCreateAccountButton(): Promise<void> {
    await this.page.locator(this.selector_createAccountButton).click();
  }

  // ============================================================
  // Action Methods — Error Banner
  // ============================================================

  /**
   * @desc Clicks the dismiss (X) button inside the error banner to clear the error
   * Expected outcome is that the error banner will be hidden
   */
  async clickErrorDismissButton(): Promise<void> {
    await this.page.locator(this.selector_errorDismissButton).click();
  }

  // ============================================================
  // Action Methods — Empty State
  // ============================================================

  /**
   * @desc Clicks the "Add Account" CTA button inside the empty state panel
   * Expected outcome is that the create account form will be shown
   */
  async clickEmptyStateAddButton(): Promise<void> {
    await this.page.locator(this.selector_emptyStateAddButton).click();
  }

  // ============================================================
  // Action Methods — Create Account Form
  // ============================================================

  /**
   * @desc Fills the account name input in the create account form
   * @param {string} name - The account name to enter
   */
  async enterCreateAccountName(name: string): Promise<void> {
    await this.page.locator(this.selector_createNameInput).fill(name);
  }

  /**
   * @desc Selects a currency in the create account form currency dropdown
   * Expected outcome is that currency-specific fields (sort code/account number or IBAN/SWIFT-BIC) will be shown or hidden accordingly
   * @param {'GBP' | 'EUR'} currency - The currency to select
   */
  async selectCreateCurrency(currency: 'GBP' | 'EUR'): Promise<void> {
    await this.page.locator(this.selector_createCurrencySelect).selectOption(currency);
  }

  /**
   * @desc Selects a provider in the create account form provider dropdown
   * @param {string} provider - The provider value to select (e.g. "HALIFAX", "OTHER")
   */
  async selectCreateProvider(provider: string): Promise<void> {
    await this.page.locator(this.selector_createProviderSelect).selectOption(provider);
  }

  /**
   * @desc Selects an account type in the create account form account type dropdown
   * @param {string} accountType - The account type value to select (e.g. "PERSONAL_CURRENT", "SAVINGS")
   */
  async selectCreateAccountType(accountType: string): Promise<void> {
    await this.page.locator(this.selector_createAccountTypeSelect).selectOption(accountType);
  }

  /**
   * @desc Fills the sort code input in the create account form (GBP currency only)
   * @param {string} sortCode - The sort code to enter (e.g. "11-22-33")
   */
  async enterCreateSortCode(sortCode: string): Promise<void> {
    await this.page.locator(this.selector_createSortCodeInput).fill(sortCode);
  }

  /**
   * @desc Fills the account number input in the create account form (GBP currency only)
   * @param {string} accountNumber - The account number to enter (e.g. "12345678")
   */
  async enterCreateAccountNumber(accountNumber: string): Promise<void> {
    await this.page.locator(this.selector_createAccountNumberInput).fill(accountNumber);
  }

  /**
   * @desc Fills the IBAN input in the create account form (EUR currency only)
   * @param {string} iban - The IBAN to enter (e.g. "DE89370400440532013000")
   */
  async enterCreateIban(iban: string): Promise<void> {
    await this.page.locator(this.selector_createIbanInput).fill(iban);
  }

  /**
   * @desc Fills the SWIFT/BIC input in the create account form (EUR currency only, optional)
   * @param {string} swiftBic - The SWIFT/BIC to enter (e.g. "DEUTDEFF")
   */
  async enterCreateSwiftBic(swiftBic: string): Promise<void> {
    await this.page.locator(this.selector_createSwiftBicInput).fill(swiftBic);
  }

  /**
   * @desc Clicks the submit button to create the new account
   * Expected outcome is that the new account will be created and the form will be dismissed
   */
  async clickSubmitCreateAccount(): Promise<void> {
    await this.page.locator(this.selector_submitCreateAccountButton).click();
  }

  /**
   * @desc Clicks the Cancel button to dismiss the create account form without saving
   * Expected outcome is that the create account form will be hidden
   */
  async clickCancelCreateForm(): Promise<void> {
    await this.page.locator(this.selector_cancelCreateFormButton).click();
  }

  // ============================================================
  // Action Methods — Account Card Display Mode
  // ============================================================

  /**
   * @desc Clicks the edit (pencil) button on an account card to enter edit mode
   * Expected outcome is that the inline edit fields will be shown for this account
   * @param {string} accountId - The UUID of the account
   */
  async clickEditAccountButton(accountId: string): Promise<void> {
    await this.page.locator(this.selector_editAccountButton(accountId)).click();
  }

  /**
   * @desc Clicks the delete button on an account card to trigger the confirmation modal
   * Expected outcome is that the ConfirmationModal will be displayed
   * @param {string} accountId - The UUID of the account
   */
  async clickDeleteAccountButton(accountId: string): Promise<void> {
    await this.page.locator(this.selector_deleteAccountButton(accountId)).click();
  }

  /**
   * @desc Clicks the "Upload transactions" link on an account card to navigate to the bank records page
   * Expected outcome is that the browser will navigate to /bank-records
   * @param {string} accountId - The UUID of the account
   */
  async clickUploadTransactionsLink(accountId: string): Promise<void> {
    await this.page.locator(this.selector_uploadTransactionsLink(accountId)).click();
  }

  // ============================================================
  // Action Methods — Account Card Edit Mode
  // ============================================================

  /**
   * @desc Fills the account name input while an account card is in edit mode
   * @param {string} accountId - The UUID of the account
   * @param {string} name - The new account name to enter
   */
  async enterEditAccountName(accountId: string, name: string): Promise<void> {
    await this.page.locator(this.selector_editAccountNameInput(accountId)).fill(name);
  }

  /**
   * @desc Selects an account type in the edit mode account type dropdown
   * @param {string} accountId - The UUID of the account
   * @param {string} accountType - The account type value to select (e.g. "PERSONAL_CURRENT", "SAVINGS")
   */
  async selectEditAccountType(accountId: string, accountType: string): Promise<void> {
    await this.page
      .locator(this.selector_editAccountTypeSelect(accountId))
      .selectOption(accountType);
  }

  /**
   * @desc Clicks the save (check) button to confirm the inline account name/type edit
   * Expected outcome is that the updated account details will be saved and display mode will be restored
   * @param {string} accountId - The UUID of the account
   */
  async clickSaveAccountNameButton(accountId: string): Promise<void> {
    await this.page.locator(this.selector_saveAccountNameButton(accountId)).click();
  }

  /**
   * @desc Clicks the cancel (X) button to discard the inline account name/type edit
   * Expected outcome is that the edit fields will be hidden and the original values will be restored
   * @param {string} accountId - The UUID of the account
   */
  async clickCancelEditNameButton(accountId: string): Promise<void> {
    await this.page.locator(this.selector_cancelEditNameButton(accountId)).click();
  }

  // ============================================================
  // Composite Methods
  // ============================================================

  /**
   * @desc Fills and submits the create account form for a GBP account
   * A composite method that enters all required GBP fields and clicks submit
   * @param {{ name: string; sortCode: string; accountNumber: string; provider?: string; accountType?: string }} details - Account details
   */
  async fillAndSubmitCreateAccountFormGBP(details: {
    name: string;
    sortCode: string;
    accountNumber: string;
    provider?: string;
    accountType?: string;
  }): Promise<void> {
    await this.enterCreateAccountName(details.name);
    await this.selectCreateCurrency('GBP');
    if (details.provider) {
      await this.selectCreateProvider(details.provider);
    }
    if (details.accountType) {
      await this.selectCreateAccountType(details.accountType);
    }
    await this.enterCreateSortCode(details.sortCode);
    await this.enterCreateAccountNumber(details.accountNumber);
    await this.clickSubmitCreateAccount();
  }

  /**
   * @desc Fills and submits the create account form for a EUR account
   * A composite method that enters all required EUR fields and clicks submit
   * @param {{ name: string; iban: string; swiftBic?: string; provider?: string; accountType?: string }} details - Account details
   */
  async fillAndSubmitCreateAccountFormEUR(details: {
    name: string;
    iban: string;
    swiftBic?: string;
    provider?: string;
    accountType?: string;
  }): Promise<void> {
    await this.enterCreateAccountName(details.name);
    await this.selectCreateCurrency('EUR');
    if (details.provider) {
      await this.selectCreateProvider(details.provider);
    }
    if (details.accountType) {
      await this.selectCreateAccountType(details.accountType);
    }
    await this.enterCreateIban(details.iban);
    if (details.swiftBic) {
      await this.enterCreateSwiftBic(details.swiftBic);
    }
    await this.clickSubmitCreateAccount();
  }

  /**
   * @desc Enters a new name and account type for an account in edit mode, then saves
   * A composite method that fills the edit fields and clicks the save button
   * @param {string} accountId - The UUID of the account
   * @param {{ name: string; accountType?: string }} details - Updated account details
   */
  async editAndSaveAccountDetails(
    accountId: string,
    details: { name: string; accountType?: string }
  ): Promise<void> {
    await this.enterEditAccountName(accountId, details.name);
    if (details.accountType !== undefined) {
      await this.selectEditAccountType(accountId, details.accountType);
    }
    await this.clickSaveAccountNameButton(accountId);
  }
}