/**
 * Page Object Model: AccountSummaryWidget
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const AccountSummaryWidgetPOM_StandardSelector = '[data-testid=account-summary-widget]';

export class AccountSummaryWidgetPOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===

  protected readonly rootSelector: string;
  protected readonly selector_accountStatusBadge: string;
  protected readonly selector_widgetTitle: string;
  protected readonly selector_widgetContainer: string;
  protected readonly selector_totalBalanceLabel: string;
  protected readonly selector_totalBalanceValue: string;
  protected readonly selector_viewDetailsLink: string;
  protected readonly selector_accountListContainer: string;
  protected readonly selector_refreshButton: string;
  protected readonly selector_footerContainer: string;
  protected readonly selector_lastUpdatedTimestamp: string;

  // Dynamic selectors
  protected readonly selector_accountRow: (accountId: string) => string;
  protected readonly selector_accountListItem: (accountId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = AccountSummaryWidgetPOM_StandardSelector;

    // Static selectors
    this.selector_accountStatusBadge = `${this.rootSelector} [data-testid='account-status-badge']`;
    this.selector_widgetTitle = `${this.rootSelector} [data-testid='account-summary-title']`;
    this.selector_widgetContainer = `${this.rootSelector}`;
    this.selector_totalBalanceLabel = `${this.rootSelector} [data-testid='total-balance-label']`;
    this.selector_totalBalanceValue = `${this.rootSelector} [data-testid='total-balance-value']`;
    this.selector_viewDetailsLink = `${this.rootSelector} [data-testid='view-details-link']`;
    this.selector_accountListContainer = `${this.rootSelector} [data-testid='account-list']`;
    this.selector_refreshButton = `${this.rootSelector} [data-testid='refresh-button']`;
    this.selector_footerContainer = `${this.rootSelector} [data-testid='account-summary-footer']`;
    this.selector_lastUpdatedTimestamp = `${this.rootSelector} [data-testid='last-updated-timestamp']`;

    // Dynamic selectors
    this.selector_accountRow = (accountId: string) =>
      `${this.rootSelector} [data-testid='account-row_${accountId}']`;

    this.selector_accountListItem = (accountId: string) =>
      `${this.rootSelector} [data-testid='account-list-item_${accountId}']`;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the Account Summary Widget is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the widget is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const widget = page.locator(AccountSummaryWidgetPOM_StandardSelector);
      return await widget.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns an AccountSummaryWidgetPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<AccountSummaryWidgetPOM>} AccountSummaryWidgetPOM instance
   * @throws {Error} When the Account Summary Widget is not visible on the page
   */
  static async getPOM(page: Page): Promise<AccountSummaryWidgetPOM> {
    const isVisible = await AccountSummaryWidgetPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'AccountSummaryWidgetPOM: Cannot instantiate - widget is not visible. ' +
        `Expected element [${AccountSummaryWidgetPOM_StandardSelector}] to be visible.`
      );
    }

    return new AccountSummaryWidgetPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Whether or not the widget title is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the widget title is visible
   */
  async isWidgetTitleVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_widgetTitle).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the total balance value is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the total balance value is visible
   */
  async isTotalBalanceValueVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_totalBalanceValue).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the account status badge is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account status badge is visible
   */
  async isAccountStatusBadgeVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountStatusBadge).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the view details link is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the view details link is visible
   */
  async isViewDetailsLinkVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_viewDetailsLink).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the account list container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account list container is visible
   */
  async isAccountListContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountListContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not a specific account row is visible
   * @param {string} accountId - The account ID to check
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account row is visible
   */
  async isAccountRowVisible(accountId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountRow(accountId)).isVisible({ timeout });
  }

  /**
   * @desc Whether or not a specific account list item is visible
   * @param {string} accountId - The account ID to check
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account list item is visible
   */
  async isAccountListItemVisible(accountId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountListItem(accountId)).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the refresh button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the refresh button is visible
   */
  async isRefreshButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_refreshButton).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the last updated timestamp is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the last updated timestamp is visible
   */
  async isLastUpdatedTimestampVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_lastUpdatedTimestamp).isVisible({ timeout });
  }

  // === ACTION METHODS ===

  /**
   * @desc Clicks the view details link to navigate to the full accounts page
   * Expected outcome is that the browser navigates to /accounts
   */
  async clickViewDetailsLink(): Promise<void> {
    await this.page.locator(this.selector_viewDetailsLink).click();
  }

  /**
   * @desc Clicks the refresh button in the summary footer
   * Expected outcome is that the widget data is refreshed
   */
  async clickRefreshButton(): Promise<void> {
    await this.page.locator(this.selector_refreshButton).click();
  }

  /**
   * @desc Clicks a specific account row in the summary list
   * Expected outcome is that the account row is selected or expanded
   * @param {string} accountId - The ID of the account row to click
   */
  async clickAccountRow(accountId: string): Promise<void> {
    await this.page.locator(this.selector_accountRow(accountId)).click();
  }

  /**
   * @desc Clicks a specific account list item
   * Expected outcome is that the account list item is selected or expanded
   * @param {string} accountId - The ID of the account list item to click
   */
  async clickAccountListItem(accountId: string): Promise<void> {
    await this.page.locator(this.selector_accountListItem(accountId)).click();
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Gets the widget title text exactly as it appears in the UI
   * @returns {Promise<string>} The widget title text
   * @throws {Error} When the widget title content is not accessible or null
   */
  async getWidgetTitle(): Promise<string> {
    await this.page.locator(this.selector_widgetTitle).isVisible();
    const text = await this.page.locator(this.selector_widgetTitle).textContent();

    if (text === null) {
      throw new Error(
        `AccountSummaryWidgetPOM: Widget title content is null. Selector: ${this.selector_widgetTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the total balance label text exactly as it appears in the UI
   * @returns {Promise<string>} The total balance label text
   * @throws {Error} When the total balance label content is not accessible or null
   */
  async getTotalBalanceLabel(): Promise<string> {
    await this.page.locator(this.selector_totalBalanceLabel).isVisible();
    const text = await this.page.locator(this.selector_totalBalanceLabel).textContent();

    if (text === null) {
      throw new Error(
        `AccountSummaryWidgetPOM: Total balance label content is null. Selector: ${this.selector_totalBalanceLabel}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the total balance value text exactly as it appears in the UI
   * @returns {Promise<string>} The total balance value text
   * @throws {Error} When the total balance value content is not accessible or null
   */
  async getTotalBalanceValue(): Promise<string> {
    await this.page.locator(this.selector_totalBalanceValue).isVisible();
    const text = await this.page.locator(this.selector_totalBalanceValue).textContent();

    if (text === null) {
      throw new Error(
        `AccountSummaryWidgetPOM: Total balance value content is null. Selector: ${this.selector_totalBalanceValue}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the account status badge text exactly as it appears in the UI
   * @returns {Promise<string>} The account status badge text
   * @throws {Error} When the account status badge content is not accessible or null
   */
  async getAccountStatusBadgeText(): Promise<string> {
    await this.page.locator(this.selector_accountStatusBadge).isVisible();
    const text = await this.page.locator(this.selector_accountStatusBadge).textContent();

    if (text === null) {
      throw new Error(
        `AccountSummaryWidgetPOM: Account status badge content is null. Selector: ${this.selector_accountStatusBadge}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the last updated timestamp text exactly as it appears in the UI
   * @returns {Promise<string>} The last updated timestamp text
   * @throws {Error} When the last updated timestamp content is not accessible or null
   */
  async getLastUpdatedTimestamp(): Promise<string> {
    await this.page.locator(this.selector_lastUpdatedTimestamp).isVisible();
    const text = await this.page.locator(this.selector_lastUpdatedTimestamp).textContent();

    if (text === null) {
      throw new Error(
        `AccountSummaryWidgetPOM: Last updated timestamp content is null. Selector: ${this.selector_lastUpdatedTimestamp}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text content of a specific account row exactly as it appears in the UI
   * @param {string} accountId - The ID of the account row
   * @returns {Promise<string>} The account row text content
   * @throws {Error} When the account row content is not accessible or null
   */
  async getAccountRowText(accountId: string): Promise<string> {
    await this.page.locator(this.selector_accountRow(accountId)).isVisible();
    const text = await this.page.locator(this.selector_accountRow(accountId)).textContent();

    if (text === null) {
      throw new Error(
        `AccountSummaryWidgetPOM: Account row content is null for accountId "${accountId}". Selector: ${this.selector_accountRow(accountId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the data-account-id attribute value from the widget container
   * @returns {Promise<string>} The primary account ID stored in the data attribute
   * @throws {Error} When the data-account-id attribute is not present or null
   */
  async getWidgetDataAccountId(): Promise<string> {
    await this.page.locator(this.selector_widgetContainer).isVisible();
    const value = await this.page.locator(this.selector_widgetContainer).getAttribute('data-account-id');

    if (value === null) {
      throw new Error(
        `AccountSummaryWidgetPOM: data-account-id attribute is null on widget container. Selector: ${this.selector_widgetContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-status attribute value from the widget container
   * @returns {Promise<string>} The account status stored in the data attribute
   * @throws {Error} When the data-status attribute is not present or null
   */
  async getWidgetDataStatus(): Promise<string> {
    await this.page.locator(this.selector_widgetContainer).isVisible();
    const value = await this.page.locator(this.selector_widgetContainer).getAttribute('data-status');

    if (value === null) {
      throw new Error(
        `AccountSummaryWidgetPOM: data-status attribute is null on widget container. Selector: ${this.selector_widgetContainer}`
      );
    }

    return value;
  }
}