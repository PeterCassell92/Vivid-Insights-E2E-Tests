/**
 * Page Object Model: AccountsList
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const AccountsListPOM_StandardSelector = '[data-testid=accounts-list]';

export class AccountsListPOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===

  protected readonly rootSelector: string;

  // Static selectors — accountsList
  protected readonly selector_addAccountButton: string;
  protected readonly selector_emptyState: string;
  protected readonly selector_loadingSpinner: string;
  protected readonly selector_searchInput: string;
  protected readonly selector_accountsTableHead: string;
  protected readonly selector_accountsTableBody: string;
  protected readonly selector_accountsListContainer: string;
  protected readonly selector_accountsTable: string;
  protected readonly selector_accountsListHeader: string;

  // Dynamic selectors — accountsList
  protected readonly selector_accountRow: (accountId: string) => string;

  // Static selectors — accountRowCells (scoped within an account row)
  protected readonly selector_accountStatusCell: string;
  protected readonly selector_accountNameCell: string;
  protected readonly selector_accountActionsCell: string;
  protected readonly selector_accountTypeCell: string;
  protected readonly selector_editAccountButton: string;
  protected readonly selector_deleteAccountButton: string;

  // Scoped cell selectors — relative to a specific account row
  protected readonly selector_accountStatusCellInRow: (accountId: string) => string;
  protected readonly selector_accountNameCellInRow: (accountId: string) => string;
  protected readonly selector_accountActionsCellInRow: (accountId: string) => string;
  protected readonly selector_accountTypeCellInRow: (accountId: string) => string;
  protected readonly selector_editAccountButtonInRow: (accountId: string) => string;
  protected readonly selector_deleteAccountButtonInRow: (accountId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = AccountsListPOM_StandardSelector;

    // accountsList — static
    this.selector_addAccountButton = `${this.rootSelector} [data-testid='add-account-btn']`;
    this.selector_emptyState = `${this.rootSelector} [data-testid='accounts-empty-state']`;
    this.selector_loadingSpinner = `${this.rootSelector} [data-testid='accounts-loading']`;
    this.selector_searchInput = `${this.rootSelector} [data-testid='accounts-search-input']`;
    this.selector_accountsTableHead = `${this.rootSelector} [data-testid='accounts-table-head']`;
    this.selector_accountsTableBody = `${this.rootSelector} [data-testid='accounts-table-body']`;
    this.selector_accountsListContainer = `${this.rootSelector} [data-testid='accounts-list']`;
    this.selector_accountsTable = `${this.rootSelector} [data-testid='accounts-table']`;
    this.selector_accountsListHeader = `${this.rootSelector} [data-testid='accounts-list-header']`;

    // accountsList — dynamic
    this.selector_accountRow = (accountId: string) =>
      `${this.rootSelector} [data-testid='account-row_${accountId}']`;

    // accountRowCells — global (all rows)
    this.selector_accountStatusCell = `${this.rootSelector} [data-testid='account-status-cell']`;
    this.selector_accountNameCell = `${this.rootSelector} [data-testid='account-name-cell']`;
    this.selector_accountActionsCell = `${this.rootSelector} [data-testid='account-actions-cell']`;
    this.selector_accountTypeCell = `${this.rootSelector} [data-testid='account-type-cell']`;
    this.selector_editAccountButton = `${this.rootSelector} [data-testid='edit-account-btn']`;
    this.selector_deleteAccountButton = `${this.rootSelector} [data-testid='delete-account-btn']`;

    // accountRowCells — scoped to a specific account row
    this.selector_accountStatusCellInRow = (accountId: string) =>
      `${this.selector_accountRow(accountId)} [data-testid='account-status-cell']`;
    this.selector_accountNameCellInRow = (accountId: string) =>
      `${this.selector_accountRow(accountId)} [data-testid='account-name-cell']`;
    this.selector_accountActionsCellInRow = (accountId: string) =>
      `${this.selector_accountRow(accountId)} [data-testid='account-actions-cell']`;
    this.selector_accountTypeCellInRow = (accountId: string) =>
      `${this.selector_accountRow(accountId)} [data-testid='account-type-cell']`;
    this.selector_editAccountButtonInRow = (accountId: string) =>
      `${this.selector_accountRow(accountId)} [data-testid='edit-account-btn']`;
    this.selector_deleteAccountButtonInRow = (accountId: string) =>
      `${this.selector_accountRow(accountId)} [data-testid='delete-account-btn']`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the AccountsList component is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the accounts list container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(AccountsListPOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns an AccountsListPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<AccountsListPOM>} A new AccountsListPOM instance
   * @throws {Error} When the accounts list container is not visible
   */
  static async getPOM(page: Page): Promise<AccountsListPOM> {
    const isVisible = await AccountsListPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'AccountsListPOM: Cannot instantiate - accounts list is not visible. ' +
          `Expected element [${AccountsListPOM_StandardSelector}] to be visible.`
      );
    }

    return new AccountsListPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the accounts list container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the accounts list container is visible
   */
  async isAccountsListContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountsListContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the loading spinner is currently visible, indicating accounts are being fetched
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading spinner is visible
   */
  async isLoadingSpinnerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_loadingSpinner).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the empty state message is visible, indicating no accounts exist
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the empty state element is visible
   */
  async isEmptyStateVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_emptyState).isVisible({ timeout });
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the add account button
   * Expected outcome is that the add account dialog or form will open
   */
  async clickAddAccountButton(): Promise<void> {
    await this.page.locator(this.selector_addAccountButton).click();
  }

  /**
   * @desc Clicks a specific account row by accountId to select or navigate to that account
   * Expected outcome is that the account row is selected or the account detail view opens
   * @param {string} accountId - The unique identifier of the account row to click
   * @throws {Error} When the account row with the given accountId is not visible
   */
  async clickAccountRow(accountId: string): Promise<void> {
    const selector = this.selector_accountRow(accountId);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `AccountsListPOM: Cannot click account row - row is not visible. ` +
          `accountId: "${accountId}". Selector: ${selector}`
      );
    }

    await this.page.locator(selector).click();
  }

  /**
   * @desc Clicks the edit account button within a specific account row
   * Expected outcome is that the edit account dialog or form will open for that account
   * @param {string} accountId - The unique identifier of the account row
   * @throws {Error} When the edit button within the given account row is not visible
   */
  async clickEditAccountButton(accountId: string): Promise<void> {
    const selector = this.selector_editAccountButtonInRow(accountId);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `AccountsListPOM: Cannot click edit button - element is not visible. ` +
          `accountId: "${accountId}". Selector: ${selector}`
      );
    }

    await this.page.locator(selector).click();
  }

  /**
   * @desc Clicks the delete account button within a specific account row
   * Expected outcome is that the delete confirmation dialog will open for that account
   * @param {string} accountId - The unique identifier of the account row
   * @throws {Error} When the delete button within the given account row is not visible
   */
  async clickDeleteAccountButton(accountId: string): Promise<void> {
    const selector = this.selector_deleteAccountButtonInRow(accountId);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `AccountsListPOM: Cannot click delete button - element is not visible. ` +
          `accountId: "${accountId}". Selector: ${selector}`
      );
    }

    await this.page.locator(selector).click();
  }

  /**
   * @desc Scrolls within the accounts list container to navigate through many account rows
   * Expected outcome is that the list scrolls by the specified delta
   * @param {number} deltaX - Horizontal scroll distance in pixels
   * @param {number} deltaY - Vertical scroll distance in pixels
   */
  async scrollAccountsList(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_accountsListContainer).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Count the total number of account rows currently rendered in the accounts table body
   * @returns {Promise<number>} The number of account rows in the table
   */
  async getAccountRowCount(): Promise<number> {
    return await this.page.locator(`${this.selector_accountsTableBody} [data-testid^='account-row_']`).count();
  }

  /**
   * @desc Get the unique account ID (data-account-id) from a specific account row
   * @param {string} accountId - The accountId used to locate the row
   * @returns {Promise<string>} The data-account-id attribute value of the row
   * @throws {Error} When the attribute is not accessible or null
   */
  async getAccountIdAttribute(accountId: string): Promise<string> {
    const selector = this.selector_accountRow(accountId);
    await this.page.locator(selector).isVisible();
    const value = await this.page.locator(selector).getAttribute('data-account-id');

    if (value === null) {
      throw new Error(
        `AccountsListPOM: data-account-id attribute is null for account row. ` +
          `accountId: "${accountId}". Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Get the status (data-status) of a specific account row (e.g., active, inactive, suspended)
   * @param {string} accountId - The accountId used to locate the row
   * @returns {Promise<string>} The data-status attribute value of the row
   * @throws {Error} When the attribute is not accessible or null
   */
  async getAccountStatusAttribute(accountId: string): Promise<string> {
    const selector = this.selector_accountRow(accountId);
    await this.page.locator(selector).isVisible();
    const value = await this.page.locator(selector).getAttribute('data-status');

    if (value === null) {
      throw new Error(
        `AccountsListPOM: data-status attribute is null for account row. ` +
          `accountId: "${accountId}". Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Get the text content of the empty state message
   * @returns {Promise<string>} The text content of the empty state element exactly as it appears
   * @throws {Error} When the empty state element content is not accessible or null
   */
  async getEmptyStateText(): Promise<string> {
    await this.page.locator(this.selector_emptyState).isVisible();
    const text = await this.page.locator(this.selector_emptyState).textContent();

    if (text === null) {
      throw new Error(
        `AccountsListPOM: Empty state text content is null. Selector: ${this.selector_emptyState}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text content of the accounts list header section
   * @returns {Promise<string>} The text content of the accounts list header exactly as it appears
   * @throws {Error} When the header content is not accessible or null
   */
  async getAccountsListHeaderText(): Promise<string> {
    await this.page.locator(this.selector_accountsListHeader).isVisible();
    const text = await this.page.locator(this.selector_accountsListHeader).textContent();

    if (text === null) {
      throw new Error(
        `AccountsListPOM: Accounts list header text content is null. Selector: ${this.selector_accountsListHeader}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text content of the accounts table header row (column labels)
   * @returns {Promise<string>} The text content of the table head exactly as it appears
   * @throws {Error} When the table head content is not accessible or null
   */
  async getAccountsTableHeadText(): Promise<string> {
    await this.page.locator(this.selector_accountsTableHead).isVisible();
    const text = await this.page.locator(this.selector_accountsTableHead).textContent();

    if (text === null) {
      throw new Error(
        `AccountsListPOM: Accounts table head text content is null. Selector: ${this.selector_accountsTableHead}`
      );
    }

    return text;
  }

  /**
   * @desc Get the full inner HTML of the accounts list container for deep inspection
   * @returns {Promise<string>} The inner HTML of the accounts list container
   * @throws {Error} When the accounts list container inner HTML is not accessible or null
   */
  async getAccountsListContainerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_accountsListContainer).isVisible();
    const html = await this.page.locator(this.selector_accountsListContainer).innerHTML();

    if (html === null) {
      throw new Error(
        `AccountsListPOM: Accounts list container innerHTML is null. Selector: ${this.selector_accountsListContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Get the visible text content of the account status cell for a specific account row
   * @param {string} accountId - The unique identifier of the account row
   * @returns {Promise<string>} The text content of the account status cell exactly as it appears
   * @throws {Error} When the account status cell content is not accessible or null
   */
  async getAccountStatusCellText(accountId: string): Promise<string> {
    const selector = this.selector_accountStatusCellInRow(accountId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `AccountsListPOM: Account status cell text content is null. ` +
          `accountId: "${accountId}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text content of the account name cell for a specific account row
   * @param {string} accountId - The unique identifier of the account row
   * @returns {Promise<string>} The text content of the account name cell exactly as it appears
   * @throws {Error} When the account name cell content is not accessible or null
   */
  async getAccountNameCellText(accountId: string): Promise<string> {
    const selector = this.selector_accountNameCellInRow(accountId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `AccountsListPOM: Account name cell text content is null. ` +
          `accountId: "${accountId}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text content of the account type cell for a specific account row
   * @param {string} accountId - The unique identifier of the account row
   * @returns {Promise<string>} The text content of the account type cell exactly as it appears
   * @throws {Error} When the account type cell content is not accessible or null
   */
  async getAccountTypeCellText(accountId: string): Promise<string> {
    const selector = this.selector_accountTypeCellInRow(accountId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `AccountsListPOM: Account type cell text content is null. ` +
          `accountId: "${accountId}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the data-account-type attribute value from an account type cell for a specific account row
   * @param {string} accountId - The unique identifier of the account row
   * @returns {Promise<string>} The data-account-type attribute value (e.g., checking, savings, credit)
   * @throws {Error} When the attribute is not accessible or null
   */
  async getAccountTypeCellAttribute(accountId: string): Promise<string> {
    const selector = this.selector_accountTypeCellInRow(accountId);
    await this.page.locator(selector).isVisible();
    const value = await this.page.locator(selector).getAttribute('data-account-type');

    if (value === null) {
      throw new Error(
        `AccountsListPOM: data-account-type attribute is null for account type cell. ` +
          `accountId: "${accountId}". Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Get a list of all account status text values from all account status cells in the table
   * @returns {Promise<string[]>} Array of account status text values exactly as they appear
   */
  async getAllAccountStatusCellTexts(): Promise<string[]> {
    const locator = this.page.locator(this.selector_accountStatusCell);
    const count = await locator.count();
    const results: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await locator.nth(i).textContent();
      results.push(text ?? '');
    }

    return results;
  }

  /**
   * @desc Get a list of all account name text values from all account name cells in the table
   * @returns {Promise<string[]>} Array of account name text values exactly as they appear
   */
  async getAllAccountNameCellTexts(): Promise<string[]> {
    const locator = this.page.locator(this.selector_accountNameCell);
    const count = await locator.count();
    const results: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await locator.nth(i).textContent();
      results.push(text ?? '');
    }

    return results;
  }

  /**
   * @desc Get a list of all account type text values from all account type cells in the table
   * @returns {Promise<string[]>} Array of account type text values exactly as they appear
   */
  async getAllAccountTypeCellTexts(): Promise<string[]> {
    const locator = this.page.locator(this.selector_accountTypeCell);
    const count = await locator.count();
    const results: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await locator.nth(i).textContent();
      results.push(text ?? '');
    }

    return results;
  }
}