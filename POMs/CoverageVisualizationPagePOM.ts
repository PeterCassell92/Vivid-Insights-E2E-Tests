/**
 * Page Object Model: CoverageVisualizationPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const CoverageVisualizationPagePOM_StandardSelector = '[data-testid="coverage-page"]';

export class CoverageVisualizationPagePOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_coveragePage: string;
  private readonly selector_backToTransactionsLink: string;
  private readonly selector_noAccountSelectedBanner: string;
  private readonly selector_coverageError: string;
  private readonly selector_coverageEmpty: string;
  private readonly selector_coverageLoading: string;
  private readonly selector_coverageTimeline: string;
  private readonly selector_coverageLegend: string;
  private readonly selector_coverageGapsDetail: string;
  private readonly selector_coverageStats: string;
  private readonly selector_statEarliestDate: string;
  private readonly selector_statLatestDate: string;
  private readonly selector_statTotalCoveredDays: string;
  private readonly selector_statCompleteCoverage: string;
  private readonly selector_coverageAccountSelector: string;
  private readonly selector_coverageBankAccountSelect: string;
  private readonly selector_pageTitle: string;

  // Dynamic selector functions
  private readonly selector_coverageGapRow: (index: number) => string;
  private readonly selector_coverageGapHeader: (index: number) => string;
  private readonly selector_coverageGapDetails: (index: number) => string;
  private readonly selector_coverageGapLoading: (index: number) => string;
  private readonly selector_coverageGapBalanceBefore: (index: number) => string;
  private readonly selector_coverageGapBalanceAfter: (index: number) => string;
  private readonly selector_coverageGapFillButton: (index: number) => string;
  private readonly selector_coverageGapMismatch: (index: number) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = CoverageVisualizationPagePOM_StandardSelector;

    // Static selectors
    this.selector_coveragePage = this.rootSelector;
    this.selector_backToTransactionsLink = `${this.rootSelector} [data-testid="back-to-transactions"]`;
    this.selector_noAccountSelectedBanner = `${this.rootSelector} [data-testid="no-account-selected-banner"]`;
    this.selector_coverageError = `${this.rootSelector} [data-testid="coverage-error"]`;
    this.selector_coverageEmpty = `${this.rootSelector} [data-testid="coverage-empty"]`;
    this.selector_coverageLoading = `${this.rootSelector} [data-testid="coverage-loading"]`;
    this.selector_coverageTimeline = `${this.rootSelector} [data-testid="coverage-timeline"]`;
    this.selector_coverageLegend = `${this.rootSelector} [data-testid="coverage-legend"]`;
    this.selector_coverageGapsDetail = `${this.rootSelector} [data-testid="coverage-gaps-detail"]`;
    this.selector_coverageStats = `${this.rootSelector} [data-testid="coverage-stats"]`;
    this.selector_statEarliestDate = `${this.rootSelector} [data-testid="stat-earliest-date"]`;
    this.selector_statLatestDate = `${this.rootSelector} [data-testid="stat-latest-date"]`;
    this.selector_statTotalCoveredDays = `${this.rootSelector} [data-testid="stat-total-covered-days"]`;
    this.selector_statCompleteCoverage = `${this.rootSelector} [data-testid="stat-complete-coverage"]`;
    this.selector_coverageAccountSelector = `${this.rootSelector} [data-testid="coverage-account-selector"]`;
    this.selector_coverageBankAccountSelect = `${this.rootSelector} [data-testid="coverage-bank-account-select"]`;
    this.selector_pageTitle = `${this.rootSelector} [data-testid="page-title"]`;

    // Dynamic selector functions
    this.selector_coverageGapRow = (index: number) =>
      `${this.rootSelector} [data-testid="coverage-gap__${index}"]`;
    this.selector_coverageGapHeader = (index: number) =>
      `${this.rootSelector} [data-testid="coverage-gap-header__${index}"]`;
    this.selector_coverageGapDetails = (index: number) =>
      `${this.rootSelector} [data-testid="coverage-gap-details__${index}"]`;
    this.selector_coverageGapLoading = (index: number) =>
      `${this.rootSelector} [data-testid="coverage-gap-loading__${index}"]`;
    this.selector_coverageGapBalanceBefore = (index: number) =>
      `${this.rootSelector} [data-testid="coverage-gap-balance-before__${index}"]`;
    this.selector_coverageGapBalanceAfter = (index: number) =>
      `${this.rootSelector} [data-testid="coverage-gap-balance-after__${index}"]`;
    this.selector_coverageGapFillButton = (index: number) =>
      `${this.rootSelector} [data-testid="coverage-gap-fill-button__${index}"]`;
    this.selector_coverageGapMismatch = (index: number) =>
      `${this.rootSelector} [data-testid="coverage-gap-mismatch__${index}"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the Coverage Visualization page is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the coverage page root element is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const root = page.locator(CoverageVisualizationPagePOM_StandardSelector);
      return await root.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method to get a CoverageVisualizationPagePOM instance
   * Validates that the coverage page is visible before returning the instance
   * @param page - Playwright Page instance
   * @returns {Promise<CoverageVisualizationPagePOM>} POM instance
   * @throws {Error} When the coverage page root element is not visible
   */
  static async getPOM(page: Page): Promise<CoverageVisualizationPagePOM> {
    const isVisible = await CoverageVisualizationPagePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'CoverageVisualizationPagePOM: Cannot instantiate - coverage page is not visible. ' +
          `Expected element [${CoverageVisualizationPagePOM_StandardSelector}] to be visible.`
      );
    }

    return new CoverageVisualizationPagePOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the root coverage page wrapper is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the coverage page root element is visible
   */
  async isCoveragePageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coveragePage).isVisible({ timeout });
  }

  /**
   * @desc Check whether the back-to-transactions link is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the back-to-transactions link is visible
   */
  async isBackToTransactionsLinkVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_backToTransactionsLink).isVisible({ timeout });
  }

  /**
   * @desc Check whether the 'no account selected' informational banner is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the no-account-selected banner is visible
   */
  async isNoAccountSelectedBannerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_noAccountSelectedBanner).isVisible({ timeout });
  }

  /**
   * @desc Check whether the coverage error banner is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the coverage error banner is visible
   */
  async isCoverageErrorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageError).isVisible({ timeout });
  }

  /**
   * @desc Check whether the empty-state panel is visible (totalCoveredDays === 0)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the empty-state panel is visible
   */
  async isCoverageEmptyVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageEmpty).isVisible({ timeout });
  }

  /**
   * @desc Check whether the coverage loading indicator is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the coverage loading indicator is visible
   */
  async isCoverageLoadingVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageLoading).isVisible({ timeout });
  }

  /**
   * @desc Check whether the coverage timeline card panel is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the coverage timeline panel is visible
   */
  async isCoverageTimelineVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageTimeline).isVisible({ timeout });
  }

  /**
   * @desc Check whether the coverage legend element is visible within the timeline card
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the coverage legend is visible
   */
  async isCoverageLegendVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageLegend).isVisible({ timeout });
  }

  /**
   * @desc Check whether the coverage gaps detail panel is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the coverage gaps detail panel is visible
   */
  async isCoverageGapsDetailVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageGapsDetail).isVisible({ timeout });
  }

  /**
   * @desc Check whether a specific gap row's expanded details section is visible by index
   * @param {number} index - Zero-based index of the gap row
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the gap details section is visible
   */
  async isCoverageGapDetailsVisible(index: number, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageGapDetails(index)).isVisible({ timeout });
  }

  /**
   * @desc Check whether the loading indicator inside a specific gap's details section is visible by index
   * @param {number} index - Zero-based index of the gap row
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the gap loading indicator is visible
   */
  async isCoverageGapLoadingVisible(index: number, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageGapLoading(index)).isVisible({ timeout });
  }

  /**
   * @desc Check whether the fill-gap button is visible for a specific gap row by index
   * @param {number} index - Zero-based index of the gap row
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the fill-gap button is visible
   */
  async isCoverageGapFillButtonVisible(index: number, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageGapFillButton(index)).isVisible({ timeout });
  }

  /**
   * @desc Check whether the fill-gap button is enabled (not disabled/filling) for a specific gap row by index
   * @param {number} index - Zero-based index of the gap row
   * @returns {Promise<boolean>} True if the fill-gap button is enabled
   */
  async isCoverageGapFillButtonEnabled(index: number): Promise<boolean> {
    return await this.page.locator(this.selector_coverageGapFillButton(index)).isEnabled();
  }

  /**
   * @desc Check whether the balance mismatch warning is visible for a specific gap row by index
   * @param {number} index - Zero-based index of the gap row
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the balance mismatch warning is visible
   */
  async isCoverageGapMismatchVisible(index: number, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageGapMismatch(index)).isVisible({ timeout });
  }

  /**
   * @desc Check whether the summary stats grid is visible (coverage data exists and is non-empty)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the coverage stats grid is visible
   */
  async isCoverageStatsVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageStats).isVisible({ timeout });
  }

  /**
   * @desc Check whether the earliest date stat card is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the earliest date stat card is visible
   */
  async isStatEarliestDateVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_statEarliestDate).isVisible({ timeout });
  }

  /**
   * @desc Check whether the latest date stat card is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the latest date stat card is visible
   */
  async isStatLatestDateVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_statLatestDate).isVisible({ timeout });
  }

  /**
   * @desc Check whether the total covered days stat card is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the total covered days stat card is visible
   */
  async isStatTotalCoveredDaysVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_statTotalCoveredDays).isVisible({ timeout });
  }

  /**
   * @desc Check whether the complete coverage stat card is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the complete coverage stat card is visible
   */
  async isStatCompleteCoverageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_statCompleteCoverage).isVisible({ timeout });
  }

  /**
   * @desc Check whether the bank account selector card panel is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account selector panel is visible
   */
  async isCoverageAccountSelectorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_coverageAccountSelector).isVisible({ timeout });
  }

  /**
   * @desc Check whether the bank account Select dropdown is enabled (not disabled)
   * @returns {Promise<boolean>} True if the bank account select is enabled
   */
  async isCoverageBankAccountSelectEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_coverageBankAccountSelect).isEnabled();
  }

  /**
   * @desc Check whether the page title heading is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the page title is visible
   */
  async isPageTitleVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_pageTitle).isVisible({ timeout });
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Clicks the 'Back to Transactions' navigation link to navigate to /bank-records/transactions
   * Expected outcome is that the browser navigates to the transactions page
   */
  async clickBackToTransactionsLink(): Promise<void> {
    await this.page.locator(this.selector_backToTransactionsLink).click();
  }

  /**
   * @desc Clicks a coverage gap header row to expand or collapse its details section
   * Expected outcome is that the gap details section toggles expanded/collapsed state
   * @param {number} index - Zero-based index of the gap row to click
   */
  async clickCoverageGapHeader(index: number): Promise<void> {
    await this.page.locator(this.selector_coverageGapHeader(index)).click();
  }

  /**
   * @desc Clicks the 'Fill Gap with Zero-Transaction Days' button to fill a specific coverage gap
   * Expected outcome is that the gap fill operation is triggered for the specified gap
   * @param {number} index - Zero-based index of the gap row whose fill button to click
   * @throws {Error} When the fill-gap button is not visible or not enabled for the given index
   */
  async clickCoverageGapFillButton(index: number): Promise<void> {
    const selector = this.selector_coverageGapFillButton(index);
    const isVisible = await this.page.locator(selector).isVisible();
    if (!isVisible) {
      throw new Error(
        `CoverageVisualizationPagePOM: Fill-gap button is not visible for gap index ${index}. Selector: ${selector}`
      );
    }
    await this.page.locator(selector).click();
  }

  /**
   * @desc Selects a bank account from the dropdown to load coverage data for that account
   * Expected outcome is that coverage data for the selected account is loaded
   * @param {string} accountValue - The value attribute of the account option to select
   * @throws {Error} When the bank account select trigger is not visible
   */
  async selectBankAccount(accountValue: string): Promise<void> {
    const triggerSelector = this.selector_coverageBankAccountSelect;
    const isVisible = await this.page.locator(triggerSelector).isVisible();
    if (!isVisible) {
      throw new Error(
        `CoverageVisualizationPagePOM: Bank account select trigger is not visible. Selector: ${triggerSelector}`
      );
    }
    await this.page.locator(triggerSelector).click();
    await this.page.locator(`[data-value="${accountValue}"]`).click();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Get the bounding box (position and dimensions) of the root coverage page container
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the root element
   * @throws {Error} When the coverage page root element is not accessible or bounding box is null
   */
  async getCoveragePageBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    await this.page.locator(this.selector_coveragePage).isVisible();
    const box = await this.page.locator(this.selector_coveragePage).boundingBox();
    if (!box) {
      throw new Error(
        `CoverageVisualizationPagePOM: Bounding box is null for coverage page root. Selector: ${this.selector_coveragePage}`
      );
    }
    return box;
  }

  /**
   * @desc Get the visible text of the back-navigation link
   * @returns {Promise<string>} The text content of the back-to-transactions link exactly as it appears
   * @throws {Error} When the back-to-transactions link text content is not accessible or null
   */
  async getBackToTransactionsLinkText(): Promise<string> {
    await this.page.locator(this.selector_backToTransactionsLink).isVisible();
    const text = await this.page.locator(this.selector_backToTransactionsLink).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Back-to-transactions link text content is null. Selector: ${this.selector_backToTransactionsLink}`
      );
    }
    return text;
  }

  /**
   * @desc Get the href URL of the back-to-transactions navigation link
   * @returns {Promise<string>} The href attribute value of the back-to-transactions link
   * @throws {Error} When the href attribute is not accessible or null
   */
  async getBackToTransactionsLinkUrl(): Promise<string> {
    await this.page.locator(this.selector_backToTransactionsLink).isVisible();
    const href = await this.page.locator(this.selector_backToTransactionsLink).getAttribute('href');
    if (href === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Back-to-transactions link href attribute is null. Selector: ${this.selector_backToTransactionsLink}`
      );
    }
    return href;
  }

  /**
   * @desc Get the text content of the no-account-selected banner
   * @returns {Promise<string>} The text content of the no-account-selected banner exactly as it appears
   * @throws {Error} When the banner text content is not accessible or null
   */
  async getNoAccountSelectedBannerText(): Promise<string> {
    await this.page.locator(this.selector_noAccountSelectedBanner).isVisible();
    const text = await this.page.locator(this.selector_noAccountSelectedBanner).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: No-account-selected banner text content is null. Selector: ${this.selector_noAccountSelectedBanner}`
      );
    }
    return text;
  }

  /**
   * @desc Get the error message text displayed in the coverage error banner
   * @returns {Promise<string>} The text content of the coverage error banner exactly as it appears
   * @throws {Error} When the coverage error banner text content is not accessible or null
   */
  async getCoverageErrorText(): Promise<string> {
    await this.page.locator(this.selector_coverageError).isVisible();
    const text = await this.page.locator(this.selector_coverageError).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Coverage error banner text content is null. Selector: ${this.selector_coverageError}`
      );
    }
    return text;
  }

  /**
   * @desc Get the text content of the empty-state panel
   * @returns {Promise<string>} The text content of the empty-state panel exactly as it appears
   * @throws {Error} When the empty-state panel text content is not accessible or null
   */
  async getCoverageEmptyText(): Promise<string> {
    await this.page.locator(this.selector_coverageEmpty).isVisible();
    const text = await this.page.locator(this.selector_coverageEmpty).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Coverage empty-state panel text content is null. Selector: ${this.selector_coverageEmpty}`
      );
    }
    return text;
  }

  /**
   * @desc Get the text content of the loading state indicator
   * @returns {Promise<string>} The text content of the coverage loading indicator exactly as it appears
   * @throws {Error} When the loading indicator text content is not accessible or null
   */
  async getCoverageLoadingText(): Promise<string> {
    await this.page.locator(this.selector_coverageLoading).isVisible();
    const text = await this.page.locator(this.selector_coverageLoading).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Coverage loading indicator text content is null. Selector: ${this.selector_coverageLoading}`
      );
    }
    return text;
  }

  /**
   * @desc Get the text content of the coverage legend (e.g. 'Covered', 'Gap (no data)')
   * @returns {Promise<string>} The text content of the coverage legend exactly as it appears
   * @throws {Error} When the coverage legend text content is not accessible or null
   */
  async getCoverageLegendText(): Promise<string> {
    await this.page.locator(this.selector_coverageLegend).isVisible();
    const text = await this.page.locator(this.selector_coverageLegend).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Coverage legend text content is null. Selector: ${this.selector_coverageLegend}`
      );
    }
    return text;
  }

  /**
   * @desc Get the inner HTML of the coverage timeline card to inspect rendered timeline items
   * @returns {Promise<string>} The inner HTML of the coverage timeline card
   * @throws {Error} When the coverage timeline element is not accessible
   */
  async getCoverageTimelineInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_coverageTimeline).isVisible();
    const html = await this.page.locator(this.selector_coverageTimeline).innerHTML();
    if (html === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Coverage timeline inner HTML is null. Selector: ${this.selector_coverageTimeline}`
      );
    }
    return html;
  }

  /**
   * @desc Get the text content of a specific gap row header (date range label and day count) by index
   * @param {number} index - Zero-based index of the gap row
   * @returns {Promise<string>} The text content of the gap header exactly as it appears
   * @throws {Error} When the gap header text content is not accessible or null
   */
  async getCoverageGapHeaderText(index: number): Promise<string> {
    await this.page.locator(this.selector_coverageGapHeader(index)).isVisible();
    const text = await this.page.locator(this.selector_coverageGapHeader(index)).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Coverage gap header text content is null for index ${index}. Selector: ${this.selector_coverageGapHeader(index)}`
      );
    }
    return text;
  }

  /**
   * @desc Get the formatted balance-before-gap text for a specific gap row by index
   * @param {number} index - Zero-based index of the gap row
   * @returns {Promise<string>} The text content of the balance-before element exactly as it appears
   * @throws {Error} When the balance-before element text content is not accessible or null
   */
  async getCoverageGapBalanceBeforeText(index: number): Promise<string> {
    await this.page.locator(this.selector_coverageGapBalanceBefore(index)).isVisible();
    const text = await this.page.locator(this.selector_coverageGapBalanceBefore(index)).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Coverage gap balance-before text content is null for index ${index}. Selector: ${this.selector_coverageGapBalanceBefore(index)}`
      );
    }
    return text;
  }

  /**
   * @desc Get the formatted balance-after-gap text for a specific gap row by index
   * @param {number} index - Zero-based index of the gap row
   * @returns {Promise<string>} The text content of the balance-after element exactly as it appears
   * @throws {Error} When the balance-after element text content is not accessible or null
   */
  async getCoverageGapBalanceAfterText(index: number): Promise<string> {
    await this.page.locator(this.selector_coverageGapBalanceAfter(index)).isVisible();
    const text = await this.page.locator(this.selector_coverageGapBalanceAfter(index)).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Coverage gap balance-after text content is null for index ${index}. Selector: ${this.selector_coverageGapBalanceAfter(index)}`
      );
    }
    return text;
  }

  /**
   * @desc Get the text content of the fill-gap button for a specific gap row by index
   * (e.g. 'Fill Gap with Zero-Transaction Days' or 'Filling...')
   * @param {number} index - Zero-based index of the gap row
   * @returns {Promise<string>} The text content of the fill-gap button exactly as it appears
   * @throws {Error} When the fill-gap button text content is not accessible or null
   */
  async getCoverageGapFillButtonText(index: number): Promise<string> {
    await this.page.locator(this.selector_coverageGapFillButton(index)).isVisible();
    const text = await this.page.locator(this.selector_coverageGapFillButton(index)).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Coverage gap fill-button text content is null for index ${index}. Selector: ${this.selector_coverageGapFillButton(index)}`
      );
    }
    return text;
  }

  /**
   * @desc Get the text content of the balance mismatch warning for a specific gap row by index
   * @param {number} index - Zero-based index of the gap row
   * @returns {Promise<string>} The text content of the mismatch warning exactly as it appears
   * @throws {Error} When the mismatch warning text content is not accessible or null
   */
  async getCoverageGapMismatchText(index: number): Promise<string> {
    await this.page.locator(this.selector_coverageGapMismatch(index)).isVisible();
    const text = await this.page.locator(this.selector_coverageGapMismatch(index)).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Coverage gap mismatch warning text content is null for index ${index}. Selector: ${this.selector_coverageGapMismatch(index)}`
      );
    }
    return text;
  }

  /**
   * @desc Count the total number of coverage gap rows rendered in the gaps detail panel
   * @returns {Promise<number>} The count of coverage gap rows
   */
  async getCoverageGapRowCount(): Promise<number> {
    return await this.page.locator(`${this.rootSelector} [data-testid^="coverage-gap__"]`).count();
  }

  /**
   * @desc Get the text content of the earliest covered date stat card
   * @returns {Promise<string>} The text content of the earliest date stat card exactly as it appears
   * @throws {Error} When the earliest date stat card text content is not accessible or null
   */
  async getStatEarliestDateText(): Promise<string> {
    await this.page.locator(this.selector_statEarliestDate).isVisible();
    const text = await this.page.locator(this.selector_statEarliestDate).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Earliest date stat card text content is null. Selector: ${this.selector_statEarliestDate}`
      );
    }
    return text;
  }

  /**
   * @desc Get the text content of the latest covered date stat card
   * @returns {Promise<string>} The text content of the latest date stat card exactly as it appears
   * @throws {Error} When the latest date stat card text content is not accessible or null
   */
  async getStatLatestDateText(): Promise<string> {
    await this.page.locator(this.selector_statLatestDate).isVisible();
    const text = await this.page.locator(this.selector_statLatestDate).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Latest date stat card text content is null. Selector: ${this.selector_statLatestDate}`
      );
    }
    return text;
  }

  /**
   * @desc Get the text content of the total covered days stat card
   * @returns {Promise<string>} The text content of the total covered days stat card exactly as it appears
   * @throws {Error} When the total covered days stat card text content is not accessible or null
   */
  async getStatTotalCoveredDaysText(): Promise<string> {
    await this.page.locator(this.selector_statTotalCoveredDays).isVisible();
    const text = await this.page.locator(this.selector_statTotalCoveredDays).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Total covered days stat card text content is null. Selector: ${this.selector_statTotalCoveredDays}`
      );
    }
    return text;
  }

  /**
   * @desc Get the text content of the complete coverage stat card (shows 'Yes'/'No' and gap count)
   * @returns {Promise<string>} The text content of the complete coverage stat card exactly as it appears
   * @throws {Error} When the complete coverage stat card text content is not accessible or null
   */
  async getStatCompleteCoverageText(): Promise<string> {
    await this.page.locator(this.selector_statCompleteCoverage).isVisible();
    const text = await this.page.locator(this.selector_statCompleteCoverage).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Complete coverage stat card text content is null. Selector: ${this.selector_statCompleteCoverage}`
      );
    }
    return text;
  }

  /**
   * @desc Get the displayed placeholder or selected account text shown in the Select trigger
   * @returns {Promise<string>} The text content of the bank account select trigger exactly as it appears
   * @throws {Error} When the bank account select trigger text content is not accessible or null
   */
  async getCoverageBankAccountSelectText(): Promise<string> {
    await this.page.locator(this.selector_coverageBankAccountSelect).isVisible();
    const text = await this.page.locator(this.selector_coverageBankAccountSelect).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Bank account select trigger text content is null. Selector: ${this.selector_coverageBankAccountSelect}`
      );
    }
    return text;
  }

  /**
   * @desc Get the currently selected bank account value from the Select dropdown
   * @returns {Promise<string>} The value attribute of the bank account select trigger
   * @throws {Error} When the bank account select value attribute is not accessible or null
   */
  async getCoverageBankAccountSelectValue(): Promise<string> {
    await this.page.locator(this.selector_coverageBankAccountSelect).isVisible();
    const value = await this.page.locator(this.selector_coverageBankAccountSelect).getAttribute('value');
    if (value === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Bank account select value attribute is null. Selector: ${this.selector_coverageBankAccountSelect}`
      );
    }
    return value;
  }

  /**
   * @desc Get the page heading text ('Transaction Coverage')
   * @returns {Promise<string>} The text content of the page title exactly as it appears
   * @throws {Error} When the page title text content is not accessible or null
   */
  async getPageTitleText(): Promise<string> {
    await this.page.locator(this.selector_pageTitle).isVisible();
    const text = await this.page.locator(this.selector_pageTitle).textContent();
    if (text === null) {
      throw new Error(
        `CoverageVisualizationPagePOM: Page title text content is null. Selector: ${this.selector_pageTitle}`
      );
    }
    return text;
  }
}