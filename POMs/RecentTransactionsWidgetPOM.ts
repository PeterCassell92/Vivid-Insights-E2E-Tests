/**
 * Page Object Model: RecentTransactionsWidget
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const RecentTransactionsWidgetPOM_StandardSelector = '[data-testid="recent-transactions-widget"]';

export class RecentTransactionsWidgetPOM {
  private readonly page: Page;

  // === SELECTORS ===
  private readonly rootSelector: string;
  private readonly selector_widgetContainer: string;
  private readonly selector_widgetTitle: string;
  private readonly selector_transactionsList: string;
  private readonly selector_emptyState: string;
  private readonly selector_loadingSpinner: string;
  private readonly selector_errorMessage: string;
  private readonly selector_viewAllLink: string;
  private readonly selector_transactionRow: (transactionId: string) => string;
  private readonly selector_transactionCategory: string;
  private readonly selector_transactionDescription: string;
  private readonly selector_transactionIcon: string;
  private readonly selector_transactionAmount: string;
  private readonly selector_transactionDate: string;
  private readonly selector_transactionStatus: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = RecentTransactionsWidgetPOM_StandardSelector;

    // Static selectors
    this.selector_widgetContainer = `${this.rootSelector}`;
    this.selector_widgetTitle = `${this.rootSelector} [data-testid="recent-transactions-title"]`;
    this.selector_transactionsList = `${this.rootSelector} [data-testid="transactions-list"]`;
    this.selector_emptyState = `${this.rootSelector} [data-testid="transactions-empty-state"]`;
    this.selector_loadingSpinner = `${this.rootSelector} [data-testid="transactions-loading"]`;
    this.selector_errorMessage = `${this.rootSelector} [data-testid="transactions-error"]`;
    this.selector_viewAllLink = `${this.rootSelector} [data-testid="view-all-transactions-link"]`;

    // Sub-element selectors (scoped within transaction items)
    this.selector_transactionCategory = `[data-testid="transaction-category"]`;
    this.selector_transactionDescription = `[data-testid="transaction-description"]`;
    this.selector_transactionIcon = `[data-testid="transaction-icon"]`;
    this.selector_transactionAmount = `[data-testid="transaction-amount"]`;
    this.selector_transactionDate = `[data-testid="transaction-date"]`;
    this.selector_transactionStatus = `[data-testid="transaction-status"]`;

    // Dynamic selectors
    this.selector_transactionRow = (transactionId: string) =>
      `${this.rootSelector} [data-testid="transaction-item-${transactionId}"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the Recent Transactions Widget is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the widget container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const widget = page.locator(RecentTransactionsWidgetPOM_StandardSelector);
      return await widget.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a RecentTransactionsWidgetPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<RecentTransactionsWidgetPOM>} A new RecentTransactionsWidgetPOM instance
   * @throws {Error} When the widget container is not visible
   */
  static async getPOM(page: Page): Promise<RecentTransactionsWidgetPOM> {
    const isVisible = await RecentTransactionsWidgetPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'RecentTransactionsWidgetPOM: Cannot instantiate - widget is not visible. ' +
        `Expected element [${RecentTransactionsWidgetPOM_StandardSelector}] to be visible.`
      );
    }

    return new RecentTransactionsWidgetPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the root widget container is visible on screen
   * @returns {Promise<boolean>} True if the widget container is visible
   */
  async isWidgetContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_widgetContainer).isVisible();
  }

  /**
   * @desc Check whether the loading spinner is currently visible
   * @returns {Promise<boolean>} True if the loading spinner is visible
   */
  async isLoadingSpinnerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_loadingSpinner).isVisible();
  }

  /**
   * @desc Check whether the empty state message is currently visible (no transactions)
   * @returns {Promise<boolean>} True if the empty state message is visible
   */
  async isEmptyStateVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_emptyState).isVisible();
  }

  /**
   * @desc Check whether the error message is currently visible
   * @returns {Promise<boolean>} True if the error message is visible
   */
  async isErrorMessageVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_errorMessage).isVisible();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks on an individual transaction row item
   * Expected outcome is that the transaction detail view or modal will open
   * @param {string} transactionId - The unique identifier of the transaction to click
   * @throws {Error} When the transaction row with the given ID is not visible
   */
  async clickTransactionRow(transactionId: string): Promise<void> {
    const selector = this.selector_transactionRow(transactionId);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `RecentTransactionsWidgetPOM: Cannot click transaction row - element is not visible. ` +
        `Transaction ID: "${transactionId}". Selector: ${selector}`
      );
    }

    await this.page.locator(selector).click();
  }

  /**
   * @desc Clicks the "View All Transactions" link to navigate to the full transactions page
   * Expected outcome is that the TransactionsPage will be navigated to
   * @throws {Error} When the view all link is not visible
   */
  async clickViewAllLink(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_viewAllLink).isVisible();

    if (!isVisible) {
      throw new Error(
        `RecentTransactionsWidgetPOM: Cannot click view all link - element is not visible. ` +
        `Selector: ${this.selector_viewAllLink}`
      );
    }

    await this.page.locator(this.selector_viewAllLink).click();
  }

  /**
   * @desc Scroll within the transactions widget container
   * Expected outcome is that the widget scrolls to reveal more content
   * @param {number} deltaX - Horizontal scroll distance in pixels
   * @param {number} deltaY - Vertical scroll distance in pixels
   * @throws {Error} When the widget container is not visible
   */
  async scrollWidget(deltaX: number, deltaY: number): Promise<void> {
    const isVisible = await this.page.locator(this.selector_widgetContainer).isVisible();

    if (!isVisible) {
      throw new Error(
        `RecentTransactionsWidgetPOM: Cannot scroll widget - container is not visible. ` +
        `Selector: ${this.selector_widgetContainer}`
      );
    }

    await this.page.locator(this.selector_widgetContainer).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the visible title/heading text of the Recent Transactions Widget
   * @returns {Promise<string>} The widget title text exactly as it appears in the UI
   * @throws {Error} When the widget title content is not accessible or null
   */
  async getWidgetTitle(): Promise<string> {
    await this.page.locator(this.selector_widgetTitle).isVisible();
    const text = await this.page.locator(this.selector_widgetTitle).textContent();

    if (text === null) {
      throw new Error(
        `RecentTransactionsWidgetPOM: Widget title content is null. ` +
        `Selector: ${this.selector_widgetTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text content of the empty state message
   * @returns {Promise<string>} The empty state message text exactly as it appears in the UI
   * @throws {Error} When the empty state content is not accessible or null
   */
  async getEmptyStateText(): Promise<string> {
    await this.page.locator(this.selector_emptyState).isVisible();
    const text = await this.page.locator(this.selector_emptyState).textContent();

    if (text === null) {
      throw new Error(
        `RecentTransactionsWidgetPOM: Empty state content is null. ` +
        `Selector: ${this.selector_emptyState}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text content of the error message shown when transactions fail to load
   * @returns {Promise<string>} The error message text exactly as it appears in the UI
   * @throws {Error} When the error message content is not accessible or null
   */
  async getErrorMessageText(): Promise<string> {
    await this.page.locator(this.selector_errorMessage).isVisible();
    const text = await this.page.locator(this.selector_errorMessage).textContent();

    if (text === null) {
      throw new Error(
        `RecentTransactionsWidgetPOM: Error message content is null. ` +
        `Selector: ${this.selector_errorMessage}`
      );
    }

    return text;
  }

  /**
   * @desc Get the current loading state of the widget from the data-loading-state attribute
   * @returns {Promise<string>} The loading state value (e.g., 'loading', 'loaded', 'error')
   * @throws {Error} When the data-loading-state attribute is not accessible or null
   */
  async getWidgetLoadingState(): Promise<string> {
    const value = await this.page
      .locator(this.selector_widgetContainer)
      .getAttribute('data-loading-state');

    if (value === null) {
      throw new Error(
        `RecentTransactionsWidgetPOM: data-loading-state attribute is null or not present. ` +
        `Selector: ${this.selector_widgetContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Count the total number of transaction row items currently rendered in the list
   * @returns {Promise<number>} The number of transaction items in the list
   */
  async getTransactionCount(): Promise<number> {
    return await this.page
      .locator(`${this.selector_transactionsList} [data-testid^="transaction-item-"]`)
      .count();
  }

  /**
   * @desc Get a list of all transaction description texts currently rendered in the transactions list
   * @returns {Promise<string[]>} Array of transaction description texts exactly as they appear in the UI
   * @throws {Error} When the transactions list is not accessible
   */
  async getAllTransactionDescriptions(): Promise<string[]> {
    await this.page.locator(this.selector_transactionsList).isVisible();

    const items = this.page.locator(
      `${this.selector_transactionsList} ${this.selector_transactionDescription}`
    );
    const count = await items.count();
    const descriptions: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await items.nth(i).textContent();
      descriptions.push(text ?? '');
    }

    return descriptions;
  }

  /**
   * @desc Get a list of all formatted transaction amounts currently rendered in the transactions list
   * @returns {Promise<string[]>} Array of transaction amount texts exactly as they appear in the UI
   * @throws {Error} When the transactions list is not accessible
   */
  async getAllTransactionAmounts(): Promise<string[]> {
    await this.page.locator(this.selector_transactionsList).isVisible();

    const items = this.page.locator(
      `${this.selector_transactionsList} ${this.selector_transactionAmount}`
    );
    const count = await items.count();
    const amounts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await items.nth(i).textContent();
      amounts.push(text ?? '');
    }

    return amounts;
  }

  /**
   * @desc Get the unique transaction ID from the data-transaction-id attribute of a transaction row
   * @param {string} transactionId - The transaction ID used to locate the row
   * @returns {Promise<string>} The data-transaction-id attribute value
   * @throws {Error} When the attribute is not accessible or null
   */
  async getTransactionIdAttribute(transactionId: string): Promise<string> {
    const selector = this.selector_transactionRow(transactionId);
    const value = await this.page.locator(selector).getAttribute('data-transaction-id');

    if (value === null) {
      throw new Error(
        `RecentTransactionsWidgetPOM: data-transaction-id attribute is null for transaction "${transactionId}". ` +
        `Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Get the category identifier from the data-category attribute of a transaction row
   * @param {string} transactionId - The transaction ID used to locate the row
   * @returns {Promise<string>} The data-category attribute value
   * @throws {Error} When the attribute is not accessible or null
   */
  async getTransactionCategoryAttribute(transactionId: string): Promise<string> {
    const selector = this.selector_transactionRow(transactionId);
    const value = await this.page.locator(selector).getAttribute('data-category');

    if (value === null) {
      throw new Error(
        `RecentTransactionsWidgetPOM: data-category attribute is null for transaction "${transactionId}". ` +
        `Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Get the status value from the data-status attribute of a transaction row
   * @param {string} transactionId - The transaction ID used to locate the row
   * @returns {Promise<string>} The data-status attribute value (e.g., 'pending', 'completed', 'failed')
   * @throws {Error} When the attribute is not accessible or null
   */
  async getTransactionStatusAttribute(transactionId: string): Promise<string> {
    const selector = this.selector_transactionRow(transactionId);
    const value = await this.page.locator(selector).getAttribute('data-status');

    if (value === null) {
      throw new Error(
        `RecentTransactionsWidgetPOM: data-status attribute is null for transaction "${transactionId}". ` +
        `Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Get the transaction type from the data-transaction-type attribute of a transaction row
   * @param {string} transactionId - The transaction ID used to locate the row
   * @returns {Promise<string>} The data-transaction-type attribute value (e.g., 'debit' or 'credit')
   * @throws {Error} When the attribute is not accessible or null
   */
  async getTransactionTypeAttribute(transactionId: string): Promise<string> {
    const selector = this.selector_transactionRow(transactionId);
    const value = await this.page.locator(selector).getAttribute('data-transaction-type');

    if (value === null) {
      throw new Error(
        `RecentTransactionsWidgetPOM: data-transaction-type attribute is null for transaction "${transactionId}". ` +
        `Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Get the raw numeric transaction amount from the data-amount attribute of a transaction row
   * @param {string} transactionId - The transaction ID used to locate the row
   * @returns {Promise<string>} The data-amount attribute value
   * @throws {Error} When the attribute is not accessible or null
   */
  async getTransactionAmountAttribute(transactionId: string): Promise<string> {
    const selector = this.selector_transactionRow(transactionId);
    const value = await this.page.locator(selector).getAttribute('data-amount');

    if (value === null) {
      throw new Error(
        `RecentTransactionsWidgetPOM: data-amount attribute is null for transaction "${transactionId}". ` +
        `Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Get the position and dimensions of a specific transaction row
   * @param {string} transactionId - The transaction ID used to locate the row
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the transaction row
   * @throws {Error} When the transaction row is not visible or bounding box cannot be retrieved
   */
  async getTransactionRowBoundingBox(
    transactionId: string
  ): Promise<{ x: number; y: number; width: number; height: number }> {
    const selector = this.selector_transactionRow(transactionId);
    const boundingBox = await this.page.locator(selector).boundingBox();

    if (boundingBox === null) {
      throw new Error(
        `RecentTransactionsWidgetPOM: Could not retrieve bounding box for transaction "${transactionId}". ` +
        `Element may not be visible. Selector: ${selector}`
      );
    }

    return boundingBox;
  }
}