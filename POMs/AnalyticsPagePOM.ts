/**
 * Page Object Model: AnalyticsPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant (defined outside class)
const AnalyticsPagePOM_StandardSelector = '[data-testid="analytics"]';

export class AnalyticsPagePOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===

  private readonly rootSelector: string;

  // Loading screen
  private readonly selector_analyticsLoadingScreen: string;

  // Root page container
  private readonly selector_analyticsPage: string;

  // Balance over time chart
  private readonly selector_balanceOverTimeChart: string;

  // View selector
  private readonly selector_viewSelector: string;
  private readonly selector_transactionAnalyticsButton: string;
  private readonly selector_monthlyComparisonButton: string;
  private readonly selector_balanceOverTimeButton: string;

  // Monthly comparison chart
  private readonly selector_monthlyComparisonChart: string;
  private readonly selector_comparisonResetButton: string;
  private readonly selector_comparisonPrevButton: string;
  private readonly selector_comparisonNextButton: string;
  private readonly selector_realityCheckButton: string;
  private readonly selector_monthComparisonRow: (index: number) => string;

  // Summary stats footer
  private readonly selector_statTotalIncome: string;
  private readonly selector_statTotalExpenses: string;
  private readonly selector_statNetTotal: string;
  private readonly selector_statTotalEvents: string;

  // No account selected banner
  private readonly selector_noAccountSelectedBanner: string;

  // Account selector
  private readonly selector_accountSelector: string;
  private readonly selector_analyticsAccountSelect: string;
  private readonly selector_analyseByTypeToggle: string;

  // Summary cards
  private readonly selector_totalOutgoingCard: string;
  private readonly selector_totalIncomeCard: string;
  private readonly selector_netCard: string;

  // Page title
  private readonly selector_pageTitle: string;

  // Analytics date range
  private readonly selector_analyticsDateRange: string;
  private readonly selector_analyticsApplyDateRange: string;
  private readonly selector_excludePassThroughToggle: string;

  // Account group info loading
  private readonly selector_accountGroupInfoLoading: string;

  // Account group info
  private readonly selector_accountGroupInfo: string;
  private readonly selector_manageRecordsLink: (accountId: string) => string;

  // Back to dashboard link
  private readonly selector_backToDashboardLink: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = AnalyticsPagePOM_StandardSelector;

    // Loading screen
    this.selector_analyticsLoadingScreen = '[data-testid="analytics-loading"]';

    // Root page container
    this.selector_analyticsPage = this.rootSelector;

    // Balance over time chart
    this.selector_balanceOverTimeChart = `${this.rootSelector} [data-testid="balance-over-time-chart"]`;

    // View selector
    this.selector_viewSelector = `${this.rootSelector} [data-testid="view-selector"]`;
    this.selector_transactionAnalyticsButton = `${this.rootSelector} [data-testid="transaction-analytics-button"]`;
    this.selector_monthlyComparisonButton = `${this.rootSelector} [data-testid="monthly-comparison-button"]`;
    this.selector_balanceOverTimeButton = `${this.rootSelector} [data-testid="balance-over-time-button"]`;

    // Monthly comparison chart
    this.selector_monthlyComparisonChart = `${this.rootSelector} [data-testid="monthly-comparison-chart"]`;
    this.selector_comparisonResetButton = `${this.rootSelector} [data-testid="comparison-reset-button"]`;
    this.selector_comparisonPrevButton = `${this.rootSelector} [data-testid="comparison-prev-button"]`;
    this.selector_comparisonNextButton = `${this.rootSelector} [data-testid="comparison-next-button"]`;
    this.selector_realityCheckButton = `${this.rootSelector} [data-testid="reality-check-button"]`;
    this.selector_monthComparisonRow = (index: number) =>
      `${this.rootSelector} [data-testid="month-comparison__${index}"]`;

    // Summary stats footer
    this.selector_statTotalIncome = `${this.rootSelector} [data-testid="stat-total-income"]`;
    this.selector_statTotalExpenses = `${this.rootSelector} [data-testid="stat-total-expenses"]`;
    this.selector_statNetTotal = `${this.rootSelector} [data-testid="stat-net-total"]`;
    this.selector_statTotalEvents = `${this.rootSelector} [data-testid="stat-total-events"]`;

    // No account selected banner
    this.selector_noAccountSelectedBanner = `${this.rootSelector} [data-testid="no-account-selected-banner"]`;

    // Account selector
    this.selector_accountSelector = `${this.rootSelector} [data-testid="account-selector"]`;
    this.selector_analyticsAccountSelect = `${this.rootSelector} [data-testid="analytics-account-select"]`;
    this.selector_analyseByTypeToggle = `${this.rootSelector} [data-testid="analyse-by-type-toggle"]`;

    // Summary cards
    this.selector_totalOutgoingCard = `${this.rootSelector} .grid-cols-3 > div:nth-child(1)`;
    this.selector_totalIncomeCard = `${this.rootSelector} .grid-cols-3 > div:nth-child(2)`;
    this.selector_netCard = `${this.rootSelector} .grid-cols-3 > div:nth-child(3)`;

    // Page title
    this.selector_pageTitle = `${this.rootSelector} [data-testid="page-title"]`;

    // Analytics date range
    this.selector_analyticsDateRange = `${this.rootSelector} [data-testid="analytics-date-range"]`;
    this.selector_analyticsApplyDateRange = `${this.rootSelector} [data-testid="analytics-apply-date-range"]`;
    this.selector_excludePassThroughToggle = `${this.rootSelector} [data-testid="exclude-pass-through-toggle"]`;

    // Account group info loading
    this.selector_accountGroupInfoLoading = `${this.rootSelector} [data-testid="account-group-info-loading"]`;

    // Account group info
    this.selector_accountGroupInfo = `${this.rootSelector} [data-testid="account-group-info"]`;
    this.selector_manageRecordsLink = (accountId: string) =>
      `${this.rootSelector} [data-testid="manage-records-link__${accountId}"]`;

    // Back to dashboard link
    this.selector_backToDashboardLink = `${this.rootSelector} [data-testid="back-to-dashboard"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the Analytics page is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the analytics page root container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(AnalyticsPagePOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method — validates that the analytics page is visible before returning an instance
   * @param page - Playwright Page instance
   * @returns {Promise<AnalyticsPagePOM>} An AnalyticsPagePOM instance
   * @throws {Error} When the analytics page root container is not visible
   */
  static async getPOM(page: Page): Promise<AnalyticsPagePOM> {
    const isVisible = await AnalyticsPagePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'AnalyticsPagePOM: Cannot instantiate — analytics page is not visible. ' +
          `Expected element [${AnalyticsPagePOM_StandardSelector}] to be visible.`
      );
    }

    return new AnalyticsPagePOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the analytics loading screen is currently visible (true when data is being fetched)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading screen is visible
   */
  async isAnalyticsLoadingScreenVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_analyticsLoadingScreen).isVisible({ timeout });
  }

  /**
   * @desc Check whether the main analytics page container is visible (true when loading === false)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the analytics page container is visible
   */
  async isAnalyticsPageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_analyticsPage).isVisible({ timeout });
  }

  /**
   * @desc Check whether the balance-over-time chart container is visible (only rendered when viewType === 'balance-over-time')
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the balance-over-time chart is visible
   */
  async isBalanceOverTimeChartVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_balanceOverTimeChart).isVisible({ timeout });
  }

  /**
   * @desc Check whether the view-type switcher container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the view selector is visible
   */
  async isViewSelectorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_viewSelector).isVisible({ timeout });
  }

  /**
   * @desc Check whether the monthly comparison chart container is visible (only rendered when viewType === 'monthly-comparison')
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the monthly comparison chart is visible
   */
  async isMonthlyComparisonChartVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_monthlyComparisonChart).isVisible({ timeout });
  }

  /**
   * @desc Check whether the 'no account selected' warning banner is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the no-account-selected banner is visible
   */
  async isNoAccountSelectedBannerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_noAccountSelectedBanner).isVisible({ timeout });
  }

  /**
   * @desc Check whether the account selector card is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account selector is visible
   */
  async isAccountSelectorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountSelector).isVisible({ timeout });
  }

  /**
   * @desc Check whether the date range filter card is visible (only rendered when viewType === 'transaction-analytics')
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the analytics date range card is visible
   */
  async isAnalyticsDateRangeVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_analyticsDateRange).isVisible({ timeout });
  }

  /**
   * @desc Check whether the account group info loading indicator is currently visible (shown while coverage data is being fetched)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account group info loading indicator is visible
   */
  async isAccountGroupInfoLoadingVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountGroupInfoLoading).isVisible({ timeout });
  }

  /**
   * @desc Check whether the account group info panel is visible (shown when analyseByType is on and coverage data has loaded)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account group info panel is visible
   */
  async isAccountGroupInfoVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountGroupInfo).isVisible({ timeout });
  }

  // ========================================================================
  // ACTION METHODS — View Selector
  // ========================================================================

  /**
   * @desc Clicks the 'Projection: Balance Over Time' button to switch to the balance-over-time view
   * Expected outcome is that the balance-over-time chart will be rendered
   */
  async clickBalanceOverTimeButton(): Promise<void> {
    await this.page.locator(this.selector_balanceOverTimeButton).click();
  }

  /**
   * @desc Clicks the 'Projection: Income vs Expenses' button to switch to the monthly comparison view
   * Expected outcome is that the monthly comparison chart will be rendered
   */
  async clickMonthlyComparisonButton(): Promise<void> {
    await this.page.locator(this.selector_monthlyComparisonButton).click();
  }

  /**
   * @desc Clicks the 'Transaction Analytics' button to switch to the transaction analytics view
   * Expected outcome is that the transaction analytics section will be rendered
   */
  async clickTransactionAnalyticsButton(): Promise<void> {
    await this.page.locator(this.selector_transactionAnalyticsButton).click();
  }

  // ========================================================================
  // ACTION METHODS — Monthly Comparison Chart
  // ========================================================================

  /**
   * @desc Clicks the 'Back to current' reset button to reset the comparison window offset to 0 (current period)
   * Expected outcome is that the comparison window will return to the current 6-month period
   * @throws {Error} When the reset button is not visible (it is only rendered when comparisonOffset !== 0)
   */
  async clickComparisonResetButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_comparisonResetButton).isVisible();
    if (!isVisible) {
      throw new Error(
        `AnalyticsPagePOM: Cannot click comparison reset button — element is not visible. ` +
          `Selector: ${this.selector_comparisonResetButton}. ` +
          `The reset button is only rendered when the comparison offset is not 0.`
      );
    }
    await this.page.locator(this.selector_comparisonResetButton).click();
  }

  /**
   * @desc Clicks the 'Previous 6 Months' navigation button to shift the comparison window back by 6 months
   * Expected outcome is that the comparison window will shift back by 6 months
   */
  async clickComparisonPrevButton(): Promise<void> {
    await this.page.locator(this.selector_comparisonPrevButton).click();
  }

  /**
   * @desc Clicks the 'Reality Check' button to toggle reality check mode on/off, overlaying true transaction data on the projected bars
   * Expected outcome is that reality check mode will be toggled
   */
  async clickRealityCheckButton(): Promise<void> {
    await this.page.locator(this.selector_realityCheckButton).click();
  }

  /**
   * @desc Clicks the 'Next 6 Months' navigation button to shift the comparison window forward by 6 months
   * Expected outcome is that the comparison window will shift forward by 6 months
   */
  async clickComparisonNextButton(): Promise<void> {
    await this.page.locator(this.selector_comparisonNextButton).click();
  }

  // ========================================================================
  // ACTION METHODS — Account Selector
  // ========================================================================

  /**
   * @desc Unchecks the 'Analyse by Account Type' checkbox to disable group analysis mode
   * Expected outcome is that the account dropdown will be re-enabled and group analysis will be disabled
   */
  async uncheckAnalyseByTypeToggle(): Promise<void> {
    await this.page.locator(this.selector_analyseByTypeToggle).uncheck();
  }

  /**
   * @desc Checks the 'Analyse by Account Type' checkbox to enable group analysis mode
   * Expected outcome is that the account dropdown will be disabled and group analysis will be enabled
   */
  async checkAnalyseByTypeToggle(): Promise<void> {
    await this.page.locator(this.selector_analyseByTypeToggle).check();
  }

  /**
   * @desc Selects a bank account from the account dropdown within the account selector card
   * Expected outcome is that the selected account will be used for analytics
   * @param {string} accountId - The value (account ID) to select in the dropdown
   */
  async selectAnalyticsAccount(accountId: string): Promise<void> {
    await this.page.locator(this.selector_analyticsAccountSelect).selectOption(accountId);
  }

  // ========================================================================
  // ACTION METHODS — Analytics Date Range
  // ========================================================================

  /**
   * @desc Clicks the 'Apply' button to trigger a re-fetch of analytics data for the selected date range
   * Expected outcome is that analytics data will be re-fetched for the current date range
   */
  async clickAnalyticsApplyDateRange(): Promise<void> {
    await this.page.locator(this.selector_analyticsApplyDateRange).click();
  }

  /**
   * @desc Checks the 'Exclude pass-through transactions' checkbox
   * Expected outcome is that pass-through transactions will be excluded from analytics
   */
  async checkExcludePassThroughToggle(): Promise<void> {
    await this.page.locator(this.selector_excludePassThroughToggle).check();
  }

  /**
   * @desc Unchecks the 'Exclude pass-through transactions' checkbox
   * Expected outcome is that pass-through transactions will be included in analytics
   */
  async uncheckExcludePassThroughToggle(): Promise<void> {
    await this.page.locator(this.selector_excludePassThroughToggle).uncheck();
  }

  // ========================================================================
  // ACTION METHODS — Account Group Info / Navigation
  // ========================================================================

  /**
   * @desc Clicks a 'Manage records' link for a specific account lacking full coverage, navigating to /bank-records
   * Expected outcome is that the browser will navigate to /bank-records
   * @param {string} accountId - The account ID whose manage-records link should be clicked
   * @throws {Error} When the manage-records link for the given accountId is not visible
   */
  async clickManageRecordsLink(accountId: string): Promise<void> {
    const selector = this.selector_manageRecordsLink(accountId);
    const isVisible = await this.page.locator(selector).isVisible();
    if (!isVisible) {
      throw new Error(
        `AnalyticsPagePOM: Cannot click manage-records link — element is not visible. ` +
          `Selector: ${selector}. ` +
          `Ensure the account group info panel is visible and the account lacks full coverage.`
      );
    }
    await this.page.locator(selector).click();
  }

  /**
   * @desc Clicks the 'Back to Dashboard' link to navigate to the root dashboard page (/)
   * Expected outcome is that the browser will navigate to /
   */
  async clickBackToDashboardLink(): Promise<void> {
    await this.page.locator(this.selector_backToDashboardLink).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the text content of the balance-over-time chart, including the heading and date range label beneath the SVG
   * @returns {Promise<string>} The text content exactly as it appears
   * @throws {Error} When the balance-over-time chart text content is null or inaccessible
   */
  async getBalanceOverTimeChartText(): Promise<string> {
    await this.page.locator(this.selector_balanceOverTimeChart).isVisible();
    const text = await this.page.locator(this.selector_balanceOverTimeChart).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: Balance-over-time chart text content is null. ` +
          `Selector: ${this.selector_balanceOverTimeChart}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the inner HTML of the balance-over-time chart container to inspect the SVG polyline points and grid lines
   * @returns {Promise<string>} The inner HTML of the balance-over-time chart container
   * @throws {Error} When the balance-over-time chart inner HTML is null or inaccessible
   */
  async getBalanceOverTimeChartInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_balanceOverTimeChart).isVisible();
    const html = await this.page.locator(this.selector_balanceOverTimeChart).innerHTML();
    if (html === null) {
      throw new Error(
        `AnalyticsPagePOM: Balance-over-time chart inner HTML is null. ` +
          `Selector: ${this.selector_balanceOverTimeChart}`
      );
    }
    return html;
  }

  /**
   * @desc Gets the inner HTML of the view selector to determine which view button is currently active (has bg-blue-600 class)
   * @returns {Promise<string>} The inner HTML of the view selector container
   * @throws {Error} When the view selector inner HTML is null or inaccessible
   */
  async getViewSelectorInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_viewSelector).isVisible();
    const html = await this.page.locator(this.selector_viewSelector).innerHTML();
    if (html === null) {
      throw new Error(
        `AnalyticsPagePOM: View selector inner HTML is null. ` +
          `Selector: ${this.selector_viewSelector}`
      );
    }
    return html;
  }

  /**
   * @desc Gets the text content of the monthly comparison chart header, including the date range label and navigation button labels
   * @returns {Promise<string>} The text content exactly as it appears
   * @throws {Error} When the monthly comparison chart text content is null or inaccessible
   */
  async getMonthlyComparisonChartText(): Promise<string> {
    await this.page.locator(this.selector_monthlyComparisonChart).isVisible();
    const text = await this.page.locator(this.selector_monthlyComparisonChart).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: Monthly comparison chart text content is null. ` +
          `Selector: ${this.selector_monthlyComparisonChart}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of the no-account-selected banner message
   * @returns {Promise<string>} The text content exactly as it appears
   * @throws {Error} When the no-account-selected banner text content is null or inaccessible
   */
  async getNoAccountSelectedBannerText(): Promise<string> {
    await this.page.locator(this.selector_noAccountSelectedBanner).isVisible();
    const text = await this.page.locator(this.selector_noAccountSelectedBanner).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: No-account-selected banner text content is null. ` +
          `Selector: ${this.selector_noAccountSelectedBanner}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the inner HTML of the account selector to inspect the current state of the account dropdown and analyse-by-type toggle
   * @returns {Promise<string>} The inner HTML of the account selector container
   * @throws {Error} When the account selector inner HTML is null or inaccessible
   */
  async getAccountSelectorInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_accountSelector).isVisible();
    const html = await this.page.locator(this.selector_accountSelector).innerHTML();
    if (html === null) {
      throw new Error(
        `AnalyticsPagePOM: Account selector inner HTML is null. ` +
          `Selector: ${this.selector_accountSelector}`
      );
    }
    return html;
  }

  /**
   * @desc Gets the text content of the main h1 heading ('Data Views & Analytics')
   * @returns {Promise<string>} The page title text exactly as it appears
   * @throws {Error} When the page title text content is null or inaccessible
   */
  async getPageTitleText(): Promise<string> {
    await this.page.locator(this.selector_pageTitle).isVisible();
    const text = await this.page.locator(this.selector_pageTitle).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: Page title text content is null. ` +
          `Selector: ${this.selector_pageTitle}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of the date range card, including the formatted date range label and checkbox label
   * @returns {Promise<string>} The date range card text exactly as it appears
   * @throws {Error} When the analytics date range text content is null or inaccessible
   */
  async getAnalyticsDateRangeText(): Promise<string> {
    await this.page.locator(this.selector_analyticsDateRange).isVisible();
    const text = await this.page.locator(this.selector_analyticsDateRange).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: Analytics date range text content is null. ` +
          `Selector: ${this.selector_analyticsDateRange}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of the account group info loading indicator
   * @returns {Promise<string>} The loading indicator text exactly as it appears
   * @throws {Error} When the account group info loading text content is null or inaccessible
   */
  async getAccountGroupInfoLoadingText(): Promise<string> {
    await this.page.locator(this.selector_accountGroupInfoLoading).isVisible();
    const text = await this.page.locator(this.selector_accountGroupInfoLoading).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: Account group info loading text content is null. ` +
          `Selector: ${this.selector_accountGroupInfoLoading}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the href URL of a specific 'Manage records' link for a given accountId (should be '/bank-records')
   * @param {string} accountId - The account ID whose manage-records link href should be retrieved
   * @returns {Promise<string>} The href attribute value of the manage-records link
   * @throws {Error} When the manage-records link for the given accountId is not found or has no href
   */
  async getManageRecordsLinkUrl(accountId: string): Promise<string> {
    const selector = this.selector_manageRecordsLink(accountId);
    await this.page.locator(selector).isVisible();
    const href = await this.page.locator(selector).getAttribute('href');
    if (href === null) {
      throw new Error(
        `AnalyticsPagePOM: Manage records link href is null for accountId "${accountId}". ` +
          `Selector: ${selector}`
      );
    }
    return href;
  }

  /**
   * @desc Counts the number of 'Manage records' links rendered within the account group info panel (one per account lacking full coverage)
   * @returns {Promise<number>} The count of manage-records links
   */
  async countManageRecordsLinks(): Promise<number> {
    const selector = `${this.selector_accountGroupInfo} [data-testid^="manage-records-link__"]`;
    return await this.page.locator(selector).count();
  }

  /**
   * @desc Gets the CSS class list of the account group info panel to determine its colour state (amber = warnings, blue = all good)
   * @returns {Promise<string>} The class attribute value of the account group info panel
   * @throws {Error} When the account group info panel class attribute is null or inaccessible
   */
  async getAccountGroupInfoClassList(): Promise<string> {
    await this.page.locator(this.selector_accountGroupInfo).isVisible();
    const classList = await this.page.locator(this.selector_accountGroupInfo).getAttribute('class');
    if (classList === null) {
      throw new Error(
        `AnalyticsPagePOM: Account group info class attribute is null. ` +
          `Selector: ${this.selector_accountGroupInfo}`
      );
    }
    return classList;
  }

  /**
   * @desc Gets the text content of the account group info panel, including account count, currency status, and coverage details
   * @returns {Promise<string>} The account group info text exactly as it appears
   * @throws {Error} When the account group info text content is null or inaccessible
   */
  async getAccountGroupInfoText(): Promise<string> {
    await this.page.locator(this.selector_accountGroupInfo).isVisible();
    const text = await this.page.locator(this.selector_accountGroupInfo).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: Account group info text content is null. ` +
          `Selector: ${this.selector_accountGroupInfo}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the href URL of the back-to-dashboard link (should be '/')
   * @returns {Promise<string>} The href attribute value of the back-to-dashboard link
   * @throws {Error} When the back-to-dashboard link href is null or inaccessible
   */
  async getBackToDashboardLinkUrl(): Promise<string> {
    await this.page.locator(this.selector_backToDashboardLink).isVisible();
    const href = await this.page.locator(this.selector_backToDashboardLink).getAttribute('href');
    if (href === null) {
      throw new Error(
        `AnalyticsPagePOM: Back-to-dashboard link href is null. ` +
          `Selector: ${this.selector_backToDashboardLink}`
      );
    }
    return href;
  }

  /**
   * @desc Gets the visible text of the back-to-dashboard link
   * @returns {Promise<string>} The back-to-dashboard link text exactly as it appears
   * @throws {Error} When the back-to-dashboard link text content is null or inaccessible
   */
  async getBackToDashboardLinkText(): Promise<string> {
    await this.page.locator(this.selector_backToDashboardLink).isVisible();
    const text = await this.page.locator(this.selector_backToDashboardLink).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: Back-to-dashboard link text content is null. ` +
          `Selector: ${this.selector_backToDashboardLink}`
      );
    }
    return text;
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — Summary Stats
  // ========================================================================

  /**
   * @desc Gets the text content of the stat-total-income summary card
   * @returns {Promise<string>} The total income stat text exactly as it appears
   * @throws {Error} When the stat-total-income text content is null or inaccessible
   */
  async getStatTotalIncomeText(): Promise<string> {
    await this.page.locator(this.selector_statTotalIncome).isVisible();
    const text = await this.page.locator(this.selector_statTotalIncome).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: stat-total-income text content is null. ` +
          `Selector: ${this.selector_statTotalIncome}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of the stat-total-expenses summary card
   * @returns {Promise<string>} The total expenses stat text exactly as it appears
   * @throws {Error} When the stat-total-expenses text content is null or inaccessible
   */
  async getStatTotalExpensesText(): Promise<string> {
    await this.page.locator(this.selector_statTotalExpenses).isVisible();
    const text = await this.page.locator(this.selector_statTotalExpenses).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: stat-total-expenses text content is null. ` +
          `Selector: ${this.selector_statTotalExpenses}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of the stat-net-total summary card
   * @returns {Promise<string>} The net total stat text exactly as it appears
   * @throws {Error} When the stat-net-total text content is null or inaccessible
   */
  async getStatNetTotalText(): Promise<string> {
    await this.page.locator(this.selector_statNetTotal).isVisible();
    const text = await this.page.locator(this.selector_statNetTotal).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: stat-net-total text content is null. ` +
          `Selector: ${this.selector_statNetTotal}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of the stat-total-events summary card
   * @returns {Promise<string>} The total events stat text exactly as it appears
   * @throws {Error} When the stat-total-events text content is null or inaccessible
   */
  async getStatTotalEventsText(): Promise<string> {
    await this.page.locator(this.selector_statTotalEvents).isVisible();
    const text = await this.page.locator(this.selector_statTotalEvents).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: stat-total-events text content is null. ` +
          `Selector: ${this.selector_statTotalEvents}`
      );
    }
    return text;
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — Monthly Comparison Rows
  // ========================================================================

  /**
   * @desc Gets the text content of a specific month comparison row by index
   * @param {number} index - The zero-based index of the month comparison row
   * @returns {Promise<string>} The month comparison row text exactly as it appears
   * @throws {Error} When the month comparison row text content is null or inaccessible
   */
  async getMonthComparisonRowText(index: number): Promise<string> {
    const selector = this.selector_monthComparisonRow(index);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();
    if (text === null) {
      throw new Error(
        `AnalyticsPagePOM: Month comparison row text content is null for index ${index}. ` +
          `Selector: ${selector}`
      );
    }
    return text;
  }

  /**
   * @desc Checks whether a specific month comparison row is visible by index
   * @param {number} index - The zero-based index of the month comparison row
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the month comparison row is visible
   */
  async isMonthComparisonRowVisible(index: number, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_monthComparisonRow(index)).isVisible({ timeout });
  }
}