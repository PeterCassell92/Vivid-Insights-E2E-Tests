/**
 * Page Object Model: TransactionsPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const TransactionsPagePOM_StandardSelector = '[data-testid="transactions-page"]';

export class TransactionsPagePOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===

  private readonly rootSelector: string;

  // pageHeader
  private readonly selector_backToDashboardButton: string;
  private readonly selector_pageTitle: string;
  private readonly selector_uploadTransactionsLink: string;

  // filterSection
  private readonly selector_filterSectionContainer: string;
  private readonly selector_bankAccountFilterTrigger: string;
  private readonly selector_accountSettingsButton: string;

  // transactionsSection
  private readonly selector_transactionsSectionContainer: string;
  private readonly selector_transactionsTable: string;
  private readonly selector_uploadCsvCta: string;

  // transactionsTableBody (dynamic)
  private readonly selector_tripLinkButton: (transactionId: string) => string;
  private readonly selector_allTripLinkButtons: string;

  // paginationControls
  private readonly selector_firstPageButton: string;
  private readonly selector_prevPageButton: string;
  private readonly selector_nextPageButton: string;
  private readonly selector_lastPageButton: string;
  private readonly selector_pageSizeSelect: string;

  // sidebar
  private readonly selector_coverageLink: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = TransactionsPagePOM_StandardSelector;

    // pageHeader
    this.selector_backToDashboardButton = `${this.rootSelector} [data-testid="back-to-dashboard"]`;
    this.selector_pageTitle = `${this.rootSelector} [data-testid="page-title"]`;
    this.selector_uploadTransactionsLink = `${this.rootSelector} [data-testid="upload-transactions-link"]`;

    // filterSection
    this.selector_filterSectionContainer = `${this.rootSelector} [data-testid="filter-section"]`;
    this.selector_bankAccountFilterTrigger = `${this.rootSelector} [data-testid="bank-account-filter"]`;
    this.selector_accountSettingsButton = `${this.rootSelector} [data-testid="account-settings-button"]`;

    // transactionsSection
    this.selector_transactionsSectionContainer = `${this.rootSelector} [data-testid="transactions-section"]`;
    this.selector_transactionsTable = `${this.rootSelector} [data-testid="transactions-table"]`;
    this.selector_uploadCsvCta = `${this.rootSelector} [data-testid="upload-csv-cta"]`;

    // transactionsTableBody — dynamic trip link buttons
    this.selector_tripLinkButton = (transactionId: string) =>
      `${this.rootSelector} [data-testid="trip-link-${transactionId}"]`;
    this.selector_allTripLinkButtons = `${this.rootSelector} [data-testid^="trip-link-"]`;

    // paginationControls
    this.selector_firstPageButton = `${this.rootSelector} [data-testid="first-page-button"]`;
    this.selector_prevPageButton = `${this.rootSelector} [data-testid="prev-page-button"]`;
    this.selector_nextPageButton = `${this.rootSelector} [data-testid="next-page-button"]`;
    this.selector_lastPageButton = `${this.rootSelector} [data-testid="last-page-button"]`;
    this.selector_pageSizeSelect = `${this.rootSelector} [data-testid="page-size-select"]`;

    // sidebar
    this.selector_coverageLink = `${this.rootSelector} [data-testid="coverage-link"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the Transactions page is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the transactions page root element is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(TransactionsPagePOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method — validates visibility and returns a TransactionsPagePOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TransactionsPagePOM>} A TransactionsPagePOM instance
   * @throws {Error} When the transactions page root element is not visible
   */
  static async getPOM(page: Page): Promise<TransactionsPagePOM> {
    const isVisible = await TransactionsPagePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TransactionsPagePOM: Cannot instantiate — transactions page is not visible. ' +
          `Expected element [${TransactionsPagePOM_StandardSelector}] to be visible.`
      );
    }

    return new TransactionsPagePOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the page title is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the page title is visible
   */
  async isPageTitleVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_pageTitle).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the filter section container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the filter section is visible
   */
  async isFilterSectionVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_filterSectionContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the bank account filter trigger is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the bank account filter trigger is visible
   */
  async isBankAccountFilterVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_bankAccountFilterTrigger).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the account settings button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account settings button is visible
   */
  async isAccountSettingsButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountSettingsButton).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the transactions section container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the transactions section is visible
   */
  async isTransactionsSectionVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_transactionsSectionContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the transactions table is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the transactions table is visible
   */
  async isTransactionsTableVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_transactionsTable).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the upload CSV CTA (empty state) is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the upload CSV CTA is visible
   */
  async isUploadCsvCtaVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_uploadCsvCta).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the coverage link in the sidebar is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the coverage link is visible
   */
  async isCoverageLinkVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageLink).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the first page button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the first page button is visible
   */
  async isFirstPageButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_firstPageButton).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the trip link button for a specific transaction is visible
   * @param {string} transactionId - The transaction ID to check
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the trip link button is visible
   */
  async isTripLinkButtonVisible(transactionId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tripLinkButton(transactionId)).isVisible({ timeout });
  }

  // ========================================================================
  // ACTION METHODS — pageHeader
  // ========================================================================

  /**
   * @desc Clicks the back to dashboard button in the page header
   * Expected outcome is that the user is navigated to the dashboard (/)
   */
  async clickBackToDashboardButton(): Promise<void> {
    await this.page.locator(this.selector_backToDashboardButton).click();
  }

  /**
   * @desc Clicks the upload transactions link button in the page header
   * Expected outcome is that the user is navigated to /bank-records
   */
  async clickUploadTransactionsLink(): Promise<void> {
    await this.page.locator(this.selector_uploadTransactionsLink).click();
  }

  // ========================================================================
  // ACTION METHODS — filterSection
  // ========================================================================

  /**
   * @desc Clicks the bank account filter dropdown trigger
   * Expected outcome is that the bank account dropdown opens
   */
  async clickBankAccountFilterTrigger(): Promise<void> {
    await this.page.locator(this.selector_bankAccountFilterTrigger).click();
  }

  /**
   * @desc Clicks the account settings button (gear icon)
   * Expected outcome is that the account settings modal opens
   */
  async clickAccountSettingsButton(): Promise<void> {
    await this.page.locator(this.selector_accountSettingsButton).click();
  }

  // ========================================================================
  // ACTION METHODS — transactionsSection
  // ========================================================================

  /**
   * @desc Clicks the upload CSV CTA button in the empty state
   * Expected outcome is that the user is navigated to /bank-records
   */
  async clickUploadCsvCta(): Promise<void> {
    await this.page.locator(this.selector_uploadCsvCta).click();
  }

  /**
   * @desc Clicks the trip link button for a specific transaction
   * Expected outcome is that the trip detail modal opens for the associated trip
   * @param {string} transactionId - The ID of the transaction whose trip link to click
   * @throws {Error} When the trip link button for the given transactionId is not visible
   */
  async clickTripLinkButton(transactionId: string): Promise<void> {
    const selector = this.selector_tripLinkButton(transactionId);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `TransactionsPagePOM: Trip link button not visible for transactionId "${transactionId}". ` +
          `Selector: ${selector}`
      );
    }

    await this.page.locator(selector).click();
  }

  // ========================================================================
  // ACTION METHODS — paginationControls
  // ========================================================================

  /**
   * @desc Clicks the first page button in the pagination controls
   * Expected outcome is that the transactions list navigates to the first page
   */
  async clickFirstPageButton(): Promise<void> {
    await this.page.locator(this.selector_firstPageButton).click();
  }

  /**
   * @desc Clicks the previous page button in the pagination controls
   * Expected outcome is that the transactions list navigates to the previous page
   */
  async clickPrevPageButton(): Promise<void> {
    await this.page.locator(this.selector_prevPageButton).click();
  }

  /**
   * @desc Clicks the next page button in the pagination controls
   * Expected outcome is that the transactions list navigates to the next page
   */
  async clickNextPageButton(): Promise<void> {
    await this.page.locator(this.selector_nextPageButton).click();
  }

  /**
   * @desc Clicks the last page button in the pagination controls
   * Expected outcome is that the transactions list navigates to the last page
   */
  async clickLastPageButton(): Promise<void> {
    await this.page.locator(this.selector_lastPageButton).click();
  }

  /**
   * @desc Clicks the page size select dropdown
   * Expected outcome is that the page size dropdown opens
   */
  async clickPageSizeSelect(): Promise<void> {
    await this.page.locator(this.selector_pageSizeSelect).click();
  }

  /**
   * @desc Selects a page size option from the page size dropdown
   * Expected outcome is that the number of transactions displayed per page changes
   * @param {20 | 50 | 100 | 200} pageSize - The number of records to display per page
   */
  async selectPageSize(pageSize: 20 | 50 | 100 | 200): Promise<void> {
    await this.page.locator(this.selector_pageSizeSelect).click();
    await this.page.getByRole('option', { name: pageSize.toString() }).click();
  }

  // ========================================================================
  // ACTION METHODS — sidebar
  // ========================================================================

  /**
   * @desc Clicks the coverage link in the sidebar
   * Expected outcome is that the user is navigated to /bank-records/coverage
   */
  async clickCoverageLink(): Promise<void> {
    await this.page.locator(this.selector_coverageLink).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the page title text exactly as it appears in the UI
   * @returns {Promise<string>} The page title text
   * @throws {Error} When the page title content is not accessible or null
   */
  async getPageTitle(): Promise<string> {
    await this.page.locator(this.selector_pageTitle).isVisible();
    const text = await this.page.locator(this.selector_pageTitle).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsPagePOM: Page title content is null. Selector: ${this.selector_pageTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Counts the number of trip link buttons rendered in the transactions table body
   * Used to verify how many transactions have associated trips
   * @returns {Promise<number>} The count of trip link buttons currently visible in the table
   */
  async countTripLinkButtons(): Promise<number> {
    return await this.page.locator(this.selector_allTripLinkButtons).count();
  }
}