/**
 * Page Object Model: AnalyticsPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class AnalyticsPagePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_analyticsLoadingScreen;
    private readonly selector_analyticsPage;
    private readonly selector_balanceOverTimeChart;
    private readonly selector_viewSelector;
    private readonly selector_transactionAnalyticsButton;
    private readonly selector_monthlyComparisonButton;
    private readonly selector_balanceOverTimeButton;
    private readonly selector_monthlyComparisonChart;
    private readonly selector_comparisonResetButton;
    private readonly selector_comparisonPrevButton;
    private readonly selector_comparisonNextButton;
    private readonly selector_realityCheckButton;
    private readonly selector_monthComparisonRow;
    private readonly selector_statTotalIncome;
    private readonly selector_statTotalExpenses;
    private readonly selector_statNetTotal;
    private readonly selector_statTotalEvents;
    private readonly selector_noAccountSelectedBanner;
    private readonly selector_accountSelector;
    private readonly selector_analyticsAccountSelect;
    private readonly selector_analyseByTypeToggle;
    private readonly selector_totalOutgoingCard;
    private readonly selector_totalIncomeCard;
    private readonly selector_netCard;
    private readonly selector_pageTitle;
    private readonly selector_analyticsDateRange;
    private readonly selector_analyticsApplyDateRange;
    private readonly selector_excludePassThroughToggle;
    private readonly selector_accountGroupInfoLoading;
    private readonly selector_accountGroupInfo;
    private readonly selector_manageRecordsLink;
    private readonly selector_backToDashboardLink;
    constructor(page: Page);
    /**
     * @desc Checks if the Analytics page is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the analytics page root container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method — validates that the analytics page is visible before returning an instance
     * @param page - Playwright Page instance
     * @returns {Promise<AnalyticsPagePOM>} An AnalyticsPagePOM instance
     * @throws {Error} When the analytics page root container is not visible
     */
    static getPOM(page: Page): Promise<AnalyticsPagePOM>;
    /**
     * @desc Check whether the analytics loading screen is currently visible (true when data is being fetched)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading screen is visible
     */
    isAnalyticsLoadingScreenVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the main analytics page container is visible (true when loading === false)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the analytics page container is visible
     */
    isAnalyticsPageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the balance-over-time chart container is visible (only rendered when viewType === 'balance-over-time')
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the balance-over-time chart is visible
     */
    isBalanceOverTimeChartVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the view-type switcher container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the view selector is visible
     */
    isViewSelectorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the monthly comparison chart container is visible (only rendered when viewType === 'monthly-comparison')
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the monthly comparison chart is visible
     */
    isMonthlyComparisonChartVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the 'no account selected' warning banner is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the no-account-selected banner is visible
     */
    isNoAccountSelectedBannerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the account selector card is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account selector is visible
     */
    isAccountSelectorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the date range filter card is visible (only rendered when viewType === 'transaction-analytics')
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the analytics date range card is visible
     */
    isAnalyticsDateRangeVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the account group info loading indicator is currently visible (shown while coverage data is being fetched)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account group info loading indicator is visible
     */
    isAccountGroupInfoLoadingVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the account group info panel is visible (shown when analyseByType is on and coverage data has loaded)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account group info panel is visible
     */
    isAccountGroupInfoVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the 'Projection: Balance Over Time' button to switch to the balance-over-time view
     * Expected outcome is that the balance-over-time chart will be rendered
     */
    clickBalanceOverTimeButton(): Promise<void>;
    /**
     * @desc Clicks the 'Projection: Income vs Expenses' button to switch to the monthly comparison view
     * Expected outcome is that the monthly comparison chart will be rendered
     */
    clickMonthlyComparisonButton(): Promise<void>;
    /**
     * @desc Clicks the 'Transaction Analytics' button to switch to the transaction analytics view
     * Expected outcome is that the transaction analytics section will be rendered
     */
    clickTransactionAnalyticsButton(): Promise<void>;
    /**
     * @desc Clicks the 'Back to current' reset button to reset the comparison window offset to 0 (current period)
     * Expected outcome is that the comparison window will return to the current 6-month period
     * @throws {Error} When the reset button is not visible (it is only rendered when comparisonOffset !== 0)
     */
    clickComparisonResetButton(): Promise<void>;
    /**
     * @desc Clicks the 'Previous 6 Months' navigation button to shift the comparison window back by 6 months
     * Expected outcome is that the comparison window will shift back by 6 months
     */
    clickComparisonPrevButton(): Promise<void>;
    /**
     * @desc Clicks the 'Reality Check' button to toggle reality check mode on/off, overlaying true transaction data on the projected bars
     * Expected outcome is that reality check mode will be toggled
     */
    clickRealityCheckButton(): Promise<void>;
    /**
     * @desc Clicks the 'Next 6 Months' navigation button to shift the comparison window forward by 6 months
     * Expected outcome is that the comparison window will shift forward by 6 months
     */
    clickComparisonNextButton(): Promise<void>;
    /**
     * @desc Unchecks the 'Analyse by Account Type' checkbox to disable group analysis mode
     * Expected outcome is that the account dropdown will be re-enabled and group analysis will be disabled
     */
    uncheckAnalyseByTypeToggle(): Promise<void>;
    /**
     * @desc Checks the 'Analyse by Account Type' checkbox to enable group analysis mode
     * Expected outcome is that the account dropdown will be disabled and group analysis will be enabled
     */
    checkAnalyseByTypeToggle(): Promise<void>;
    /**
     * @desc Selects a bank account from the account dropdown within the account selector card
     * Expected outcome is that the selected account will be used for analytics
     * @param {string} accountId - The value (account ID) to select in the dropdown
     */
    selectAnalyticsAccount(accountId: string): Promise<void>;
    /**
     * @desc Clicks the 'Apply' button to trigger a re-fetch of analytics data for the selected date range
     * Expected outcome is that analytics data will be re-fetched for the current date range
     */
    clickAnalyticsApplyDateRange(): Promise<void>;
    /**
     * @desc Checks the 'Exclude pass-through transactions' checkbox
     * Expected outcome is that pass-through transactions will be excluded from analytics
     */
    checkExcludePassThroughToggle(): Promise<void>;
    /**
     * @desc Unchecks the 'Exclude pass-through transactions' checkbox
     * Expected outcome is that pass-through transactions will be included in analytics
     */
    uncheckExcludePassThroughToggle(): Promise<void>;
    /**
     * @desc Clicks a 'Manage records' link for a specific account lacking full coverage, navigating to /bank-records
     * Expected outcome is that the browser will navigate to /bank-records
     * @param {string} accountId - The account ID whose manage-records link should be clicked
     * @throws {Error} When the manage-records link for the given accountId is not visible
     */
    clickManageRecordsLink(accountId: string): Promise<void>;
    /**
     * @desc Clicks the 'Back to Dashboard' link to navigate to the root dashboard page (/)
     * Expected outcome is that the browser will navigate to /
     */
    clickBackToDashboardLink(): Promise<void>;
    /**
     * @desc Gets the text content of the balance-over-time chart, including the heading and date range label beneath the SVG
     * @returns {Promise<string>} The text content exactly as it appears
     * @throws {Error} When the balance-over-time chart text content is null or inaccessible
     */
    getBalanceOverTimeChartText(): Promise<string>;
    /**
     * @desc Gets the inner HTML of the balance-over-time chart container to inspect the SVG polyline points and grid lines
     * @returns {Promise<string>} The inner HTML of the balance-over-time chart container
     * @throws {Error} When the balance-over-time chart inner HTML is null or inaccessible
     */
    getBalanceOverTimeChartInnerHtml(): Promise<string>;
    /**
     * @desc Gets the inner HTML of the view selector to determine which view button is currently active (has bg-blue-600 class)
     * @returns {Promise<string>} The inner HTML of the view selector container
     * @throws {Error} When the view selector inner HTML is null or inaccessible
     */
    getViewSelectorInnerHtml(): Promise<string>;
    /**
     * @desc Gets the text content of the monthly comparison chart header, including the date range label and navigation button labels
     * @returns {Promise<string>} The text content exactly as it appears
     * @throws {Error} When the monthly comparison chart text content is null or inaccessible
     */
    getMonthlyComparisonChartText(): Promise<string>;
    /**
     * @desc Gets the text content of the no-account-selected banner message
     * @returns {Promise<string>} The text content exactly as it appears
     * @throws {Error} When the no-account-selected banner text content is null or inaccessible
     */
    getNoAccountSelectedBannerText(): Promise<string>;
    /**
     * @desc Gets the inner HTML of the account selector to inspect the current state of the account dropdown and analyse-by-type toggle
     * @returns {Promise<string>} The inner HTML of the account selector container
     * @throws {Error} When the account selector inner HTML is null or inaccessible
     */
    getAccountSelectorInnerHtml(): Promise<string>;
    /**
     * @desc Gets the text content of the main h1 heading ('Data Views & Analytics')
     * @returns {Promise<string>} The page title text exactly as it appears
     * @throws {Error} When the page title text content is null or inaccessible
     */
    getPageTitleText(): Promise<string>;
    /**
     * @desc Gets the text content of the date range card, including the formatted date range label and checkbox label
     * @returns {Promise<string>} The date range card text exactly as it appears
     * @throws {Error} When the analytics date range text content is null or inaccessible
     */
    getAnalyticsDateRangeText(): Promise<string>;
    /**
     * @desc Gets the text content of the account group info loading indicator
     * @returns {Promise<string>} The loading indicator text exactly as it appears
     * @throws {Error} When the account group info loading text content is null or inaccessible
     */
    getAccountGroupInfoLoadingText(): Promise<string>;
    /**
     * @desc Gets the href URL of a specific 'Manage records' link for a given accountId (should be '/bank-records')
     * @param {string} accountId - The account ID whose manage-records link href should be retrieved
     * @returns {Promise<string>} The href attribute value of the manage-records link
     * @throws {Error} When the manage-records link for the given accountId is not found or has no href
     */
    getManageRecordsLinkUrl(accountId: string): Promise<string>;
    /**
     * @desc Counts the number of 'Manage records' links rendered within the account group info panel (one per account lacking full coverage)
     * @returns {Promise<number>} The count of manage-records links
     */
    countManageRecordsLinks(): Promise<number>;
    /**
     * @desc Gets the CSS class list of the account group info panel to determine its colour state (amber = warnings, blue = all good)
     * @returns {Promise<string>} The class attribute value of the account group info panel
     * @throws {Error} When the account group info panel class attribute is null or inaccessible
     */
    getAccountGroupInfoClassList(): Promise<string>;
    /**
     * @desc Gets the text content of the account group info panel, including account count, currency status, and coverage details
     * @returns {Promise<string>} The account group info text exactly as it appears
     * @throws {Error} When the account group info text content is null or inaccessible
     */
    getAccountGroupInfoText(): Promise<string>;
    /**
     * @desc Gets the href URL of the back-to-dashboard link (should be '/')
     * @returns {Promise<string>} The href attribute value of the back-to-dashboard link
     * @throws {Error} When the back-to-dashboard link href is null or inaccessible
     */
    getBackToDashboardLinkUrl(): Promise<string>;
    /**
     * @desc Gets the visible text of the back-to-dashboard link
     * @returns {Promise<string>} The back-to-dashboard link text exactly as it appears
     * @throws {Error} When the back-to-dashboard link text content is null or inaccessible
     */
    getBackToDashboardLinkText(): Promise<string>;
    /**
     * @desc Gets the text content of the stat-total-income summary card
     * @returns {Promise<string>} The total income stat text exactly as it appears
     * @throws {Error} When the stat-total-income text content is null or inaccessible
     */
    getStatTotalIncomeText(): Promise<string>;
    /**
     * @desc Gets the text content of the stat-total-expenses summary card
     * @returns {Promise<string>} The total expenses stat text exactly as it appears
     * @throws {Error} When the stat-total-expenses text content is null or inaccessible
     */
    getStatTotalExpensesText(): Promise<string>;
    /**
     * @desc Gets the text content of the stat-net-total summary card
     * @returns {Promise<string>} The net total stat text exactly as it appears
     * @throws {Error} When the stat-net-total text content is null or inaccessible
     */
    getStatNetTotalText(): Promise<string>;
    /**
     * @desc Gets the text content of the stat-total-events summary card
     * @returns {Promise<string>} The total events stat text exactly as it appears
     * @throws {Error} When the stat-total-events text content is null or inaccessible
     */
    getStatTotalEventsText(): Promise<string>;
    /**
     * @desc Gets the text content of a specific month comparison row by index
     * @param {number} index - The zero-based index of the month comparison row
     * @returns {Promise<string>} The month comparison row text exactly as it appears
     * @throws {Error} When the month comparison row text content is null or inaccessible
     */
    getMonthComparisonRowText(index: number): Promise<string>;
    /**
     * @desc Checks whether a specific month comparison row is visible by index
     * @param {number} index - The zero-based index of the month comparison row
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the month comparison row is visible
     */
    isMonthComparisonRowVisible(index: number, timeout?: number): Promise<boolean>;
}
