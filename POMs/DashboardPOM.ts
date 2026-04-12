/**
 * Page Object Model: Dashboard
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const DashboardPOM_StandardSelector = '[data-testid="dashboard"]';

export class DashboardPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;

  // dashboardLoading
  private readonly selector_dashboardLoadingContainer: string;

  // dashboardRoot
  private readonly selector_dashboardContainer: string;

  // infoCardBalance
  private readonly selector_infoCardBalanceContainer: string;

  // monthlyProjectionsCard
  private readonly selector_showFirstSixBtn: string;
  private readonly selector_defaultAccountNotificationText: string;
  private readonly selector_showNextSixBtn: string;
  private readonly selector_bankAccountSelectorContainer: string;
  private readonly selector_monthlyProjectionsCardContainer: string;
  private readonly selector_bankAccountSelectTrigger: string;
  private readonly selector_monthLinkItem: (index: number) => string;

  // analyticsCard
  private readonly selector_analyticsCardContainer: string;
  private readonly selector_analyticsNavLink: string;

  // tripsCard
  private readonly selector_tripsCardContainer: string;
  private readonly selector_tripsNavLink: string;

  // infoCardProjections
  private readonly selector_infoCardProjectionsContainer: string;

  // bankRecordsCard
  private readonly selector_bankRecordsCardContainer: string;
  private readonly selector_viewTransactionRecordsNavLink: string;
  private readonly selector_manageTransactionRecordsNavLink: string;

  // infoCardRecurring
  private readonly selector_infoCardRecurringContainer: string;

  // dashboardError
  private readonly selector_dashboardErrorWrapper: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = DashboardPOM_StandardSelector;

    // dashboardLoading — full-page loading state (outside root, rendered instead of root)
    this.selector_dashboardLoadingContainer = '[data-testid="dashboard-loading"]';

    // dashboardRoot
    this.selector_dashboardContainer = this.rootSelector;

    // infoCardBalance
    this.selector_infoCardBalanceContainer = `${this.rootSelector} [data-testid="info-card__balance"]`;

    // monthlyProjectionsCard
    this.selector_monthlyProjectionsCardContainer = `${this.rootSelector} [data-testid="monthly-projections-card"]`;
    this.selector_showFirstSixBtn = `${this.rootSelector} [data-testid="show-first-six-button"]`;
    this.selector_showNextSixBtn = `${this.rootSelector} [data-testid="show-next-six-button"]`;
    this.selector_bankAccountSelectorContainer = `${this.rootSelector} [data-testid="bank-account-selector"]`;
    this.selector_bankAccountSelectTrigger = `${this.rootSelector} [data-testid="bank-account-select"]`;
    this.selector_defaultAccountNotificationText = `${this.rootSelector} [data-testid="default-account-notification"]`;
    this.selector_monthLinkItem = (index: number) =>
      `${this.rootSelector} [data-testid="month-link__${index}"]`;

    // analyticsCard
    this.selector_analyticsCardContainer = `${this.rootSelector} [data-testid="analytics-card"]`;
    this.selector_analyticsNavLink = `${this.rootSelector} [data-testid="analytics-link"]`;

    // tripsCard
    this.selector_tripsCardContainer = `${this.rootSelector} [data-testid="trips-card"]`;
    this.selector_tripsNavLink = `${this.rootSelector} [data-testid="trips-link"]`;

    // infoCardProjections
    this.selector_infoCardProjectionsContainer = `${this.rootSelector} [data-testid="info-card__projections"]`;

    // bankRecordsCard
    this.selector_bankRecordsCardContainer = `${this.rootSelector} [data-testid="bank-records-card"]`;
    this.selector_manageTransactionRecordsNavLink = `${this.rootSelector} [data-testid="manage-transaction-records-link"]`;
    this.selector_viewTransactionRecordsNavLink = `${this.rootSelector} [data-testid="view-transaction-records-link"]`;

    // infoCardRecurring
    this.selector_infoCardRecurringContainer = `${this.rootSelector} [data-testid="info-card__recurring"]`;

    // dashboardError
    this.selector_dashboardErrorWrapper = `${this.rootSelector} [data-testid="dashboard-error"]`;
  }

  // ==========================================================================
  // STATIC METHODS
  // ==========================================================================

  /**
   * @desc Checks if the Dashboard page is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the dashboard container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(DashboardPOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates the Dashboard is visible and returns a POM instance
   * @param page - Playwright Page instance
   * @returns {Promise<DashboardPOM>} A DashboardPOM instance
   * @throws {Error} When the dashboard container is not visible
   */
  static async getPOM(page: Page): Promise<DashboardPOM> {
    const isVisible = await DashboardPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'DashboardPOM: Cannot instantiate - dashboard page is not visible. ' +
          `Expected element [${DashboardPOM_StandardSelector}] to be visible.`
      );
    }

    return new DashboardPOM(page);
  }

  // ==========================================================================
  // VISIBILITY AND STATE METHODS
  // ==========================================================================

  /**
   * @desc Check whether the full-page loading state is currently visible (shown while settings are being fetched)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading container is visible
   */
  async isDashboardLoadingVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_dashboardLoadingContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the main dashboard container is visible (rendered when settings have loaded without a DB connection error)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the dashboard container is visible
   */
  async isDashboardContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_dashboardContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the Daily Balances info card is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the info card balance container is visible
   */
  async isInfoCardBalanceVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_infoCardBalanceContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the Analytics card is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the analytics card container is visible
   */
  async isAnalyticsCardVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_analyticsCardContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the Trips card is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the trips card container is visible
   */
  async isTripsCardVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_tripsCardContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the Projection Events info card is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the info card projections container is visible
   */
  async isInfoCardProjectionsVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_infoCardProjectionsContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the Bank Records card is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the bank records card container is visible
   */
  async isBankRecordsCardVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_bankRecordsCardContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the Recurring Events info card is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the info card recurring container is visible
   */
  async isInfoCardRecurringVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_infoCardRecurringContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the inline error wrapper is visible (shown when a non-DB-connection settings error exists)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the dashboard error wrapper is visible
   */
  async isDashboardErrorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_dashboardErrorWrapper)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the show-first-six button is visible (shown when monthOffset > 0)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the show-first-six button is visible
   */
  async isShowFirstSixButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_showFirstSixBtn)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the show-next-six button is visible (shown when monthOffset === 0)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the show-next-six button is visible
   */
  async isShowNextSixButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_showNextSixBtn)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the default account notification text is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the default account notification is visible
   */
  async isDefaultAccountNotificationVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_defaultAccountNotificationText)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether a specific month link item is visible by its index
   * @param {number} index - Zero-based index of the month link (0–5)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the month link at the given index is visible
   */
  async isMonthLinkVisible(index: number, timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_monthLinkItem(index))
      .isVisible({ timeout });
  }

  // ==========================================================================
  // DATA RETRIEVAL METHODS
  // ==========================================================================

  /**
   * @desc Get the visible text content of the Daily Balances informational card
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the info card balance content is not accessible or null
   */
  async getInfoCardBalanceText(): Promise<string> {
    await this.page.locator(this.selector_infoCardBalanceContainer).isVisible();
    const text = await this.page
      .locator(this.selector_infoCardBalanceContainer)
      .textContent();

    if (text === null) {
      throw new Error(
        `DashboardPOM: Info card balance content is null. Selector: ${this.selector_infoCardBalanceContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the full text content of the Monthly Projections card, including the current viewing range label (e.g. 'Viewing months 1-6')
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the monthly projections card content is not accessible or null
   */
  async getMonthlyProjectionsCardText(): Promise<string> {
    await this.page.locator(this.selector_monthlyProjectionsCardContainer).isVisible();
    const text = await this.page
      .locator(this.selector_monthlyProjectionsCardContainer)
      .textContent();

    if (text === null) {
      throw new Error(
        `DashboardPOM: Monthly projections card content is null. Selector: ${this.selector_monthlyProjectionsCardContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text content of the Analytics navigation card
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the analytics card content is not accessible or null
   */
  async getAnalyticsCardText(): Promise<string> {
    await this.page.locator(this.selector_analyticsCardContainer).isVisible();
    const text = await this.page
      .locator(this.selector_analyticsCardContainer)
      .textContent();

    if (text === null) {
      throw new Error(
        `DashboardPOM: Analytics card content is null. Selector: ${this.selector_analyticsCardContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text content of the Trips navigation card
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the trips card content is not accessible or null
   */
  async getTripsCardText(): Promise<string> {
    await this.page.locator(this.selector_tripsCardContainer).isVisible();
    const text = await this.page
      .locator(this.selector_tripsCardContainer)
      .textContent();

    if (text === null) {
      throw new Error(
        `DashboardPOM: Trips card content is null. Selector: ${this.selector_tripsCardContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text content of the Projection Events informational card
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the info card projections content is not accessible or null
   */
  async getInfoCardProjectionsText(): Promise<string> {
    await this.page.locator(this.selector_infoCardProjectionsContainer).isVisible();
    const text = await this.page
      .locator(this.selector_infoCardProjectionsContainer)
      .textContent();

    if (text === null) {
      throw new Error(
        `DashboardPOM: Info card projections content is null. Selector: ${this.selector_infoCardProjectionsContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text content of the Bank Records navigation card
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the bank records card content is not accessible or null
   */
  async getBankRecordsCardText(): Promise<string> {
    await this.page.locator(this.selector_bankRecordsCardContainer).isVisible();
    const text = await this.page
      .locator(this.selector_bankRecordsCardContainer)
      .textContent();

    if (text === null) {
      throw new Error(
        `DashboardPOM: Bank records card content is null. Selector: ${this.selector_bankRecordsCardContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text content of the Recurring Events informational card
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the info card recurring content is not accessible or null
   */
  async getInfoCardRecurringText(): Promise<string> {
    await this.page.locator(this.selector_infoCardRecurringContainer).isVisible();
    const text = await this.page
      .locator(this.selector_infoCardRecurringContainer)
      .textContent();

    if (text === null) {
      throw new Error(
        `DashboardPOM: Info card recurring content is null. Selector: ${this.selector_infoCardRecurringContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the inner HTML of the dashboard error wrapper to inspect the rendered ErrorDisplay content
   * @returns {Promise<string>} The inner HTML of the dashboard error wrapper
   * @throws {Error} When the dashboard error wrapper content is not accessible or null
   */
  async getDashboardErrorInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_dashboardErrorWrapper).isVisible();
    const html = await this.page
      .locator(this.selector_dashboardErrorWrapper)
      .innerHTML();

    if (html === null) {
      throw new Error(
        `DashboardPOM: Dashboard error wrapper inner HTML is null. Selector: ${this.selector_dashboardErrorWrapper}`
      );
    }

    return html;
  }

  /**
   * @desc Get the text label of a specific month link by its index
   * @param {number} index - Zero-based index of the month link (0–5)
   * @returns {Promise<string>} The text content of the month link exactly as it appears
   * @throws {Error} When the month link content is not accessible or null
   */
  async getMonthLinkText(index: number): Promise<string> {
    const selector = this.selector_monthLinkItem(index);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `DashboardPOM: Month link text at index ${index} is null. Selector: ${selector}`
      );
    }

    return text;
  }

  // ==========================================================================
  // ACTION METHODS
  // ==========================================================================

  /**
   * @desc Clicks the "Next 6 →" button to advance the monthly projections view to months 7–12
   * Expected outcome is that the month links update to show the next six months and the "First 6" button appears
   */
  async clickShowNextSixButton(): Promise<void> {
    await this.page.locator(this.selector_showNextSixBtn).click();
  }

  /**
   * @desc Clicks the "First 6" button to return the monthly projections view to months 1–6
   * Expected outcome is that the month links update to show the first six months and the "Next 6 →" button appears
   */
  async clickShowFirstSixButton(): Promise<void> {
    await this.page.locator(this.selector_showFirstSixBtn).click();
  }

  /**
   * @desc Clicks the bank account select trigger to open the account dropdown
   * Expected outcome is that the bank account selection dropdown opens
   */
  async clickBankAccountSelectTrigger(): Promise<void> {
    await this.page.locator(this.selector_bankAccountSelectTrigger).click();
  }

  /**
   * @desc Clicks a month link by its zero-based index to navigate to that month's projections page
   * Expected outcome is that the browser navigates to /projections/{yyyy-MM} for the selected month
   * @param {number} index - Zero-based index of the month link to click (0–5)
   */
  async clickMonthLink(index: number): Promise<void> {
    await this.page.locator(this.selector_monthLinkItem(index)).click();
  }

  /**
   * @desc Clicks the Analytics navigation link to navigate to the Analytics page
   * Expected outcome is that the browser navigates to /analytics
   */
  async clickAnalyticsNavLink(): Promise<void> {
    await this.page.locator(this.selector_analyticsNavLink).click();
  }

  /**
   * @desc Clicks the Trips navigation link to navigate to the Trips page
   * Expected outcome is that the browser navigates to /trips
   */
  async clickTripsNavLink(): Promise<void> {
    await this.page.locator(this.selector_tripsNavLink).click();
  }

  /**
   * @desc Clicks the "Manage Transaction Records" link to navigate to the Bank Records management page
   * Expected outcome is that the browser navigates to /bank-records
   */
  async clickManageTransactionRecordsNavLink(): Promise<void> {
    await this.page.locator(this.selector_manageTransactionRecordsNavLink).click();
  }

  /**
   * @desc Clicks the "View Transaction Records" link to navigate to the Bank Records transactions page
   * Expected outcome is that the browser navigates to /bank-records/transactions
   */
  async clickViewTransactionRecordsNavLink(): Promise<void> {
    await this.page.locator(this.selector_viewTransactionRecordsNavLink).click();
  }
}