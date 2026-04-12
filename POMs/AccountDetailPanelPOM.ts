/**
 * Page Object Model: AccountDetailPanel
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const AccountDetailPanelPOM_StandardSelector = "[data-testid='account-detail-panel']";

export class AccountDetailPanelPOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===

  protected readonly rootSelector: string;

  // accountDetailPanel
  protected readonly selector_panelContainer: string;

  // accountHeader
  protected readonly selector_accountName: string;
  protected readonly selector_accountId: string;
  protected readonly selector_accountStatus: string;
  protected readonly selector_accountHeaderContainer: string;

  // actionButtonsBar
  protected readonly selector_deleteAccountButton: string;
  protected readonly selector_actionBarContainer: string;
  protected readonly selector_closeButton: string;
  protected readonly selector_editAccountButton: string;

  // accountDetailsSection
  protected readonly selector_accountOwnerField: string;
  protected readonly selector_accountTypeField: string;
  protected readonly selector_accountCreatedDateField: string;
  protected readonly selector_accountBalanceField: string;
  protected readonly selector_detailsSectionContainer: string;

  // transactionsList
  protected readonly selector_transactionsListContainer: string;
  protected readonly selector_transactionsListTitle: string;
  protected readonly selector_transactionRow: (transactionId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = AccountDetailPanelPOM_StandardSelector;

    // accountDetailPanel
    this.selector_panelContainer = `${this.rootSelector}`;

    // accountHeader
    this.selector_accountHeaderContainer = `${this.rootSelector} [data-testid='account-header']`;
    this.selector_accountName = `${this.rootSelector} [data-testid='account-name']`;
    this.selector_accountId = `${this.rootSelector} [data-testid='account-id']`;
    this.selector_accountStatus = `${this.rootSelector} [data-testid='account-status']`;

    // actionButtonsBar
    this.selector_actionBarContainer = `${this.rootSelector} [data-testid='account-action-bar']`;
    this.selector_deleteAccountButton = `${this.rootSelector} [data-testid='delete-account-btn']`;
    this.selector_closeButton = `${this.rootSelector} [data-testid='close-panel-btn']`;
    this.selector_editAccountButton = `${this.rootSelector} [data-testid='edit-account-btn']`;

    // accountDetailsSection
    this.selector_detailsSectionContainer = `${this.rootSelector} [data-testid='account-details-section']`;
    this.selector_accountOwnerField = `${this.rootSelector} [data-testid='account-owner']`;
    this.selector_accountTypeField = `${this.rootSelector} [data-testid='account-type']`;
    this.selector_accountCreatedDateField = `${this.rootSelector} [data-testid='account-created-date']`;
    this.selector_accountBalanceField = `${this.rootSelector} [data-testid='account-balance']`;

    // transactionsList
    this.selector_transactionsListContainer = `${this.rootSelector} [data-testid='transactions-list']`;
    this.selector_transactionsListTitle = `${this.rootSelector} [data-testid='transactions-list-title']`;
    this.selector_transactionRow = (transactionId: string) =>
      `${this.rootSelector} [data-testid='transaction-row_${transactionId}']`;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the Account Detail Panel is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the panel is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const panel = page.locator(AccountDetailPanelPOM_StandardSelector);
      return await panel.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns an AccountDetailPanelPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<AccountDetailPanelPOM>} AccountDetailPanelPOM instance
   * @throws {Error} When the account detail panel is not visible
   */
  static async getPOM(page: Page): Promise<AccountDetailPanelPOM> {
    const isVisible = await AccountDetailPanelPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'AccountDetailPanelPOM: Cannot instantiate - account detail panel is not visible. ' +
          `Expected element ${AccountDetailPanelPOM_StandardSelector} to be visible.`
      );
    }

    return new AccountDetailPanelPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Check if the account detail panel container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the panel container is visible
   */
  async isPanelVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_panelContainer).isVisible({ timeout });
  }

  /**
   * @desc Check if the account header section is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account header container is visible
   */
  async isAccountHeaderVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountHeaderContainer).isVisible({ timeout });
  }

  /**
   * @desc Check if the delete account button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the delete account button is visible
   */
  async isDeleteAccountButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_deleteAccountButton).isVisible({ timeout });
  }

  /**
   * @desc Check if the edit account button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the edit account button is visible
   */
  async isEditAccountButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_editAccountButton).isVisible({ timeout });
  }

  /**
   * @desc Check if the close panel button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the close button is visible
   */
  async isCloseButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_closeButton).isVisible({ timeout });
  }

  /**
   * @desc Check if the edit account button is enabled (not disabled)
   * @returns {Promise<boolean>} True if the edit account button is enabled
   */
  async isEditAccountButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_editAccountButton).isEnabled();
  }

  /**
   * @desc Check if the delete account button is enabled (not disabled)
   * @returns {Promise<boolean>} True if the delete account button is enabled
   */
  async isDeleteAccountButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_deleteAccountButton).isEnabled();
  }

  /**
   * @desc Check if the account details section is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account details section container is visible
   */
  async isDetailsSectionVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_detailsSectionContainer).isVisible({ timeout });
  }

  /**
   * @desc Check if the transactions list container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the transactions list container is visible
   */
  async isTransactionsListVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_transactionsListContainer).isVisible({ timeout });
  }

  // === ACTION METHODS ===

  /**
   * @desc Clicks the delete account button to initiate account deletion
   * Expected outcome is that the delete account confirmation dialog or flow will be triggered
   */
  async clickDeleteAccountButton(): Promise<void> {
    await this.page.locator(this.selector_deleteAccountButton).click();
  }

  /**
   * @desc Clicks the close button to close/dismiss the detail panel
   * Expected outcome is that the account detail panel will be dismissed
   */
  async clickCloseButton(): Promise<void> {
    await this.page.locator(this.selector_closeButton).click();
  }

  /**
   * @desc Clicks the edit account button to open the edit account form
   * Expected outcome is that the edit account form or dialog will open
   */
  async clickEditAccountButton(): Promise<void> {
    await this.page.locator(this.selector_editAccountButton).click();
  }

  /**
   * @desc Clicks a specific transaction row by transaction ID
   * Expected outcome is that the transaction detail view or action will be triggered
   * @param {string} transactionId - The unique identifier of the transaction row to click
   */
  async clickTransactionRow(transactionId: string): Promise<void> {
    const selector = this.selector_transactionRow(transactionId);
    await this.page.locator(selector).click();
  }

  /**
   * @desc Scrolls within the main account detail panel container
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollPanel(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_panelContainer).evaluate(
      (el, { dx, dy }) => {
        el.scrollBy(dx, dy);
      },
      { dx: deltaX, dy: deltaY }
    );
  }

  /**
   * @desc Scrolls within the transactions list container
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollTransactionsList(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_transactionsListContainer).evaluate(
      (el, { dx, dy }) => {
        el.scrollBy(dx, dy);
      },
      { dx: deltaX, dy: deltaY }
    );
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Get the position and dimensions of the account detail panel container
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the panel
   * @throws {Error} When the panel container bounding box is not accessible
   */
  async getPanelBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const boundingBox = await this.page.locator(this.selector_panelContainer).boundingBox();

    if (!boundingBox) {
      throw new Error(
        `AccountDetailPanelPOM: Unable to get bounding box for panel container. Selector: ${this.selector_panelContainer}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Get the visible account name text
   * @returns {Promise<string>} The account name exactly as it appears in the UI
   * @throws {Error} When account name content is not accessible or null
   */
  async getAccountName(): Promise<string> {
    await this.page.locator(this.selector_accountName).isVisible();
    const text = await this.page.locator(this.selector_accountName).textContent();

    if (text === null) {
      throw new Error(
        `AccountDetailPanelPOM: Account name content is null. Selector: ${this.selector_accountName}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible account ID text
   * @returns {Promise<string>} The account ID exactly as it appears in the UI
   * @throws {Error} When account ID content is not accessible or null
   */
  async getAccountId(): Promise<string> {
    await this.page.locator(this.selector_accountId).isVisible();
    const text = await this.page.locator(this.selector_accountId).textContent();

    if (text === null) {
      throw new Error(
        `AccountDetailPanelPOM: Account ID content is null. Selector: ${this.selector_accountId}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible account status badge text
   * @returns {Promise<string>} The account status text exactly as it appears in the UI
   * @throws {Error} When account status content is not accessible or null
   */
  async getAccountStatusText(): Promise<string> {
    await this.page.locator(this.selector_accountStatus).isVisible();
    const text = await this.page.locator(this.selector_accountStatus).textContent();

    if (text === null) {
      throw new Error(
        `AccountDetailPanelPOM: Account status content is null. Selector: ${this.selector_accountStatus}`
      );
    }

    return text;
  }

  /**
   * @desc Get the CSS class list of the account status badge to determine styling state
   * @returns {Promise<string>} The full class attribute string of the account status element
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getAccountStatusClassList(): Promise<string> {
    await this.page.locator(this.selector_accountStatus).isVisible();
    const classList = await this.page.locator(this.selector_accountStatus).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `AccountDetailPanelPOM: Account status class attribute is null. Selector: ${this.selector_accountStatus}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the current status value from the data-status attribute of the account status badge
   * @returns {Promise<string>} The data-status attribute value (e.g. active, inactive, suspended)
   * @throws {Error} When the data-status attribute is not accessible or null
   */
  async getAccountStatusAttribute(): Promise<string> {
    await this.page.locator(this.selector_accountStatus).isVisible();
    const status = await this.page.locator(this.selector_accountStatus).getAttribute('data-status');

    if (status === null) {
      throw new Error(
        `AccountDetailPanelPOM: Account status data-status attribute is null. Selector: ${this.selector_accountStatus}`
      );
    }

    return status;
  }

  /**
   * @desc Get the account type label and value text
   * @returns {Promise<string>} The account type text exactly as it appears in the UI
   * @throws {Error} When account type content is not accessible or null
   */
  async getAccountTypeText(): Promise<string> {
    await this.page.locator(this.selector_accountTypeField).isVisible();
    const text = await this.page.locator(this.selector_accountTypeField).textContent();

    if (text === null) {
      throw new Error(
        `AccountDetailPanelPOM: Account type content is null. Selector: ${this.selector_accountTypeField}`
      );
    }

    return text;
  }

  /**
   * @desc Get the account type value from the data-account-type attribute
   * @returns {Promise<string>} The data-account-type attribute value
   * @throws {Error} When the data-account-type attribute is not accessible or null
   */
  async getAccountTypeAttribute(): Promise<string> {
    await this.page.locator(this.selector_accountTypeField).isVisible();
    const accountType = await this.page
      .locator(this.selector_accountTypeField)
      .getAttribute('data-account-type');

    if (accountType === null) {
      throw new Error(
        `AccountDetailPanelPOM: Account type data-account-type attribute is null. Selector: ${this.selector_accountTypeField}`
      );
    }

    return accountType;
  }

  /**
   * @desc Get the account balance display text
   * @returns {Promise<string>} The account balance text exactly as it appears in the UI
   * @throws {Error} When account balance content is not accessible or null
   */
  async getAccountBalanceText(): Promise<string> {
    await this.page.locator(this.selector_accountBalanceField).isVisible();
    const text = await this.page.locator(this.selector_accountBalanceField).textContent();

    if (text === null) {
      throw new Error(
        `AccountDetailPanelPOM: Account balance content is null. Selector: ${this.selector_accountBalanceField}`
      );
    }

    return text;
  }

  /**
   * @desc Get the account owner display text
   * @returns {Promise<string>} The account owner text exactly as it appears in the UI
   * @throws {Error} When account owner content is not accessible or null
   */
  async getAccountOwnerText(): Promise<string> {
    await this.page.locator(this.selector_accountOwnerField).isVisible();
    const text = await this.page.locator(this.selector_accountOwnerField).textContent();

    if (text === null) {
      throw new Error(
        `AccountDetailPanelPOM: Account owner content is null. Selector: ${this.selector_accountOwnerField}`
      );
    }

    return text;
  }

  /**
   * @desc Get the account creation date text
   * @returns {Promise<string>} The account created date text exactly as it appears in the UI
   * @throws {Error} When account created date content is not accessible or null
   */
  async getAccountCreatedDateText(): Promise<string> {
    await this.page.locator(this.selector_accountCreatedDateField).isVisible();
    const text = await this.page.locator(this.selector_accountCreatedDateField).textContent();

    if (text === null) {
      throw new Error(
        `AccountDetailPanelPOM: Account created date content is null. Selector: ${this.selector_accountCreatedDateField}`
      );
    }

    return text;
  }

  /**
   * @desc Get the transactions list title heading text
   * @returns {Promise<string>} The transactions list title text exactly as it appears in the UI
   * @throws {Error} When transactions list title content is not accessible or null
   */
  async getTransactionsListTitleText(): Promise<string> {
    await this.page.locator(this.selector_transactionsListTitle).isVisible();
    const text = await this.page.locator(this.selector_transactionsListTitle).textContent();

    if (text === null) {
      throw new Error(
        `AccountDetailPanelPOM: Transactions list title content is null. Selector: ${this.selector_transactionsListTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Get a list of all visible transaction row text contents from the transactions list
   * @returns {Promise<string[]>} Array of text content strings for each visible transaction row
   */
  async getAllTransactionRowTexts(): Promise<string[]> {
    await this.page.locator(this.selector_transactionsListContainer).isVisible();
    const rows = this.page.locator(
      `${this.selector_transactionsListContainer} [data-testid^='transaction-row_']`
    );
    const count = await rows.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await rows.nth(i).textContent();
      texts.push(text ?? '');
    }

    return texts;
  }

  /**
   * @desc Count the total number of transaction rows currently rendered in the list
   * @returns {Promise<number>} The number of transaction rows in the list
   */
  async getTransactionRowCount(): Promise<number> {
    await this.page.locator(this.selector_transactionsListContainer).isVisible();
    return await this.page
      .locator(`${this.selector_transactionsListContainer} [data-testid^='transaction-row_']`)
      .count();
  }

  /**
   * @desc Get the visible text content of a specific transaction row by transaction ID
   * @param {string} transactionId - The unique identifier of the transaction row
   * @returns {Promise<string>} The text content of the transaction row exactly as it appears
   * @throws {Error} When the transaction row content is not accessible or null
   */
  async getTransactionRowText(transactionId: string): Promise<string> {
    const selector = this.selector_transactionRow(transactionId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `AccountDetailPanelPOM: Transaction row content is null for transactionId "${transactionId}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the status from the data-status attribute of a specific transaction row
   * @param {string} transactionId - The unique identifier of the transaction row
   * @returns {Promise<string>} The data-status attribute value (e.g. pending, completed, failed)
   * @throws {Error} When the data-status attribute is not accessible or null
   */
  async getTransactionRowStatus(transactionId: string): Promise<string> {
    const selector = this.selector_transactionRow(transactionId);
    await this.page.locator(selector).isVisible();
    const status = await this.page.locator(selector).getAttribute('data-status');

    if (status === null) {
      throw new Error(
        `AccountDetailPanelPOM: Transaction row data-status attribute is null for transactionId "${transactionId}". Selector: ${selector}`
      );
    }

    return status;
  }

  /**
   * @desc Get the monetary amount from the data-amount attribute of a specific transaction row
   * @param {string} transactionId - The unique identifier of the transaction row
   * @returns {Promise<string>} The data-amount attribute value
   * @throws {Error} When the data-amount attribute is not accessible or null
   */
  async getTransactionRowAmount(transactionId: string): Promise<string> {
    const selector = this.selector_transactionRow(transactionId);
    await this.page.locator(selector).isVisible();
    const amount = await this.page.locator(selector).getAttribute('data-amount');

    if (amount === null) {
      throw new Error(
        `AccountDetailPanelPOM: Transaction row data-amount attribute is null for transactionId "${transactionId}". Selector: ${selector}`
      );
    }

    return amount;
  }

  /**
   * @desc Get the date from the data-date attribute of a specific transaction row
   * @param {string} transactionId - The unique identifier of the transaction row
   * @returns {Promise<string>} The data-date attribute value
   * @throws {Error} When the data-date attribute is not accessible or null
   */
  async getTransactionRowDate(transactionId: string): Promise<string> {
    const selector = this.selector_transactionRow(transactionId);
    await this.page.locator(selector).isVisible();
    const date = await this.page.locator(selector).getAttribute('data-date');

    if (date === null) {
      throw new Error(
        `AccountDetailPanelPOM: Transaction row data-date attribute is null for transactionId "${transactionId}". Selector: ${selector}`
      );
    }

    return date;
  }
}