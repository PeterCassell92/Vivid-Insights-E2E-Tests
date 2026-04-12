/**
 * Page Object Model: Dashboard
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class DashboardPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_dashboardLoadingContainer;
    private readonly selector_dashboardContainer;
    private readonly selector_infoCardBalanceContainer;
    private readonly selector_showFirstSixBtn;
    private readonly selector_defaultAccountNotificationText;
    private readonly selector_showNextSixBtn;
    private readonly selector_bankAccountSelectorContainer;
    private readonly selector_monthlyProjectionsCardContainer;
    private readonly selector_bankAccountSelectTrigger;
    private readonly selector_monthLinkItem;
    private readonly selector_analyticsCardContainer;
    private readonly selector_analyticsNavLink;
    private readonly selector_tripsCardContainer;
    private readonly selector_tripsNavLink;
    private readonly selector_infoCardProjectionsContainer;
    private readonly selector_bankRecordsCardContainer;
    private readonly selector_viewTransactionRecordsNavLink;
    private readonly selector_manageTransactionRecordsNavLink;
    private readonly selector_infoCardRecurringContainer;
    private readonly selector_dashboardErrorWrapper;
    constructor(page: Page);
    /**
     * @desc Checks if the Dashboard page is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the dashboard container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates the Dashboard is visible and returns a POM instance
     * @param page - Playwright Page instance
     * @returns {Promise<DashboardPOM>} A DashboardPOM instance
     * @throws {Error} When the dashboard container is not visible
     */
    static getPOM(page: Page): Promise<DashboardPOM>;
    /**
     * @desc Check whether the full-page loading state is currently visible (shown while settings are being fetched)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading container is visible
     */
    isDashboardLoadingVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the main dashboard container is visible (rendered when settings have loaded without a DB connection error)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the dashboard container is visible
     */
    isDashboardContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Daily Balances info card is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the info card balance container is visible
     */
    isInfoCardBalanceVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Analytics card is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the analytics card container is visible
     */
    isAnalyticsCardVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Trips card is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the trips card container is visible
     */
    isTripsCardVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Projection Events info card is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the info card projections container is visible
     */
    isInfoCardProjectionsVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Bank Records card is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the bank records card container is visible
     */
    isBankRecordsCardVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Recurring Events info card is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the info card recurring container is visible
     */
    isInfoCardRecurringVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the inline error wrapper is visible (shown when a non-DB-connection settings error exists)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the dashboard error wrapper is visible
     */
    isDashboardErrorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the show-first-six button is visible (shown when monthOffset > 0)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the show-first-six button is visible
     */
    isShowFirstSixButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the show-next-six button is visible (shown when monthOffset === 0)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the show-next-six button is visible
     */
    isShowNextSixButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the default account notification text is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the default account notification is visible
     */
    isDefaultAccountNotificationVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether a specific month link item is visible by its index
     * @param {number} index - Zero-based index of the month link (0–5)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the month link at the given index is visible
     */
    isMonthLinkVisible(index: number, timeout?: number): Promise<boolean>;
    /**
     * @desc Get the visible text content of the Daily Balances informational card
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the info card balance content is not accessible or null
     */
    getInfoCardBalanceText(): Promise<string>;
    /**
     * @desc Get the full text content of the Monthly Projections card, including the current viewing range label (e.g. 'Viewing months 1-6')
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the monthly projections card content is not accessible or null
     */
    getMonthlyProjectionsCardText(): Promise<string>;
    /**
     * @desc Get the visible text content of the Analytics navigation card
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the analytics card content is not accessible or null
     */
    getAnalyticsCardText(): Promise<string>;
    /**
     * @desc Get the visible text content of the Trips navigation card
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the trips card content is not accessible or null
     */
    getTripsCardText(): Promise<string>;
    /**
     * @desc Get the visible text content of the Projection Events informational card
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the info card projections content is not accessible or null
     */
    getInfoCardProjectionsText(): Promise<string>;
    /**
     * @desc Get the visible text content of the Bank Records navigation card
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the bank records card content is not accessible or null
     */
    getBankRecordsCardText(): Promise<string>;
    /**
     * @desc Get the visible text content of the Recurring Events informational card
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the info card recurring content is not accessible or null
     */
    getInfoCardRecurringText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the dashboard error wrapper to inspect the rendered ErrorDisplay content
     * @returns {Promise<string>} The inner HTML of the dashboard error wrapper
     * @throws {Error} When the dashboard error wrapper content is not accessible or null
     */
    getDashboardErrorInnerHtml(): Promise<string>;
    /**
     * @desc Get the text label of a specific month link by its index
     * @param {number} index - Zero-based index of the month link (0–5)
     * @returns {Promise<string>} The text content of the month link exactly as it appears
     * @throws {Error} When the month link content is not accessible or null
     */
    getMonthLinkText(index: number): Promise<string>;
    /**
     * @desc Clicks the "Next 6 →" button to advance the monthly projections view to months 7–12
     * Expected outcome is that the month links update to show the next six months and the "First 6" button appears
     */
    clickShowNextSixButton(): Promise<void>;
    /**
     * @desc Clicks the "First 6" button to return the monthly projections view to months 1–6
     * Expected outcome is that the month links update to show the first six months and the "Next 6 →" button appears
     */
    clickShowFirstSixButton(): Promise<void>;
    /**
     * @desc Clicks the bank account select trigger to open the account dropdown
     * Expected outcome is that the bank account selection dropdown opens
     */
    clickBankAccountSelectTrigger(): Promise<void>;
    /**
     * @desc Clicks a month link by its zero-based index to navigate to that month's projections page
     * Expected outcome is that the browser navigates to /projections/{yyyy-MM} for the selected month
     * @param {number} index - Zero-based index of the month link to click (0–5)
     */
    clickMonthLink(index: number): Promise<void>;
    /**
     * @desc Clicks the Analytics navigation link to navigate to the Analytics page
     * Expected outcome is that the browser navigates to /analytics
     */
    clickAnalyticsNavLink(): Promise<void>;
    /**
     * @desc Clicks the Trips navigation link to navigate to the Trips page
     * Expected outcome is that the browser navigates to /trips
     */
    clickTripsNavLink(): Promise<void>;
    /**
     * @desc Clicks the "Manage Transaction Records" link to navigate to the Bank Records management page
     * Expected outcome is that the browser navigates to /bank-records
     */
    clickManageTransactionRecordsNavLink(): Promise<void>;
    /**
     * @desc Clicks the "View Transaction Records" link to navigate to the Bank Records transactions page
     * Expected outcome is that the browser navigates to /bank-records/transactions
     */
    clickViewTransactionRecordsNavLink(): Promise<void>;
}
