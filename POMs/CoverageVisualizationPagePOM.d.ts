/**
 * Page Object Model: CoverageVisualizationPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class CoverageVisualizationPagePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_coveragePage;
    private readonly selector_backToTransactionsLink;
    private readonly selector_noAccountSelectedBanner;
    private readonly selector_coverageError;
    private readonly selector_coverageEmpty;
    private readonly selector_coverageLoading;
    private readonly selector_coverageTimeline;
    private readonly selector_coverageLegend;
    private readonly selector_coverageGapsDetail;
    private readonly selector_coverageStats;
    private readonly selector_statEarliestDate;
    private readonly selector_statLatestDate;
    private readonly selector_statTotalCoveredDays;
    private readonly selector_statCompleteCoverage;
    private readonly selector_coverageAccountSelector;
    private readonly selector_coverageBankAccountSelect;
    private readonly selector_pageTitle;
    private readonly selector_coverageGapRow;
    private readonly selector_coverageGapHeader;
    private readonly selector_coverageGapDetails;
    private readonly selector_coverageGapLoading;
    private readonly selector_coverageGapBalanceBefore;
    private readonly selector_coverageGapBalanceAfter;
    private readonly selector_coverageGapFillButton;
    private readonly selector_coverageGapMismatch;
    constructor(page: Page);
    /**
     * @desc Checks if the Coverage Visualization page is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the coverage page root element is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method to get a CoverageVisualizationPagePOM instance
     * Validates that the coverage page is visible before returning the instance
     * @param page - Playwright Page instance
     * @returns {Promise<CoverageVisualizationPagePOM>} POM instance
     * @throws {Error} When the coverage page root element is not visible
     */
    static getPOM(page: Page): Promise<CoverageVisualizationPagePOM>;
    /**
     * @desc Check whether the root coverage page wrapper is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the coverage page root element is visible
     */
    isCoveragePageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the back-to-transactions link is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the back-to-transactions link is visible
     */
    isBackToTransactionsLinkVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the 'no account selected' informational banner is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the no-account-selected banner is visible
     */
    isNoAccountSelectedBannerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the coverage error banner is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the coverage error banner is visible
     */
    isCoverageErrorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the empty-state panel is visible (totalCoveredDays === 0)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the empty-state panel is visible
     */
    isCoverageEmptyVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the coverage loading indicator is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the coverage loading indicator is visible
     */
    isCoverageLoadingVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the coverage timeline card panel is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the coverage timeline panel is visible
     */
    isCoverageTimelineVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the coverage legend element is visible within the timeline card
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the coverage legend is visible
     */
    isCoverageLegendVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the coverage gaps detail panel is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the coverage gaps detail panel is visible
     */
    isCoverageGapsDetailVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether a specific gap row's expanded details section is visible by index
     * @param {number} index - Zero-based index of the gap row
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the gap details section is visible
     */
    isCoverageGapDetailsVisible(index: number, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the loading indicator inside a specific gap's details section is visible by index
     * @param {number} index - Zero-based index of the gap row
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the gap loading indicator is visible
     */
    isCoverageGapLoadingVisible(index: number, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the fill-gap button is visible for a specific gap row by index
     * @param {number} index - Zero-based index of the gap row
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the fill-gap button is visible
     */
    isCoverageGapFillButtonVisible(index: number, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the fill-gap button is enabled (not disabled/filling) for a specific gap row by index
     * @param {number} index - Zero-based index of the gap row
     * @returns {Promise<boolean>} True if the fill-gap button is enabled
     */
    isCoverageGapFillButtonEnabled(index: number): Promise<boolean>;
    /**
     * @desc Check whether the balance mismatch warning is visible for a specific gap row by index
     * @param {number} index - Zero-based index of the gap row
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the balance mismatch warning is visible
     */
    isCoverageGapMismatchVisible(index: number, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the summary stats grid is visible (coverage data exists and is non-empty)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the coverage stats grid is visible
     */
    isCoverageStatsVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the earliest date stat card is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the earliest date stat card is visible
     */
    isStatEarliestDateVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the latest date stat card is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the latest date stat card is visible
     */
    isStatLatestDateVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the total covered days stat card is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the total covered days stat card is visible
     */
    isStatTotalCoveredDaysVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the complete coverage stat card is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the complete coverage stat card is visible
     */
    isStatCompleteCoverageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the bank account selector card panel is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account selector panel is visible
     */
    isCoverageAccountSelectorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the bank account Select dropdown is enabled (not disabled)
     * @returns {Promise<boolean>} True if the bank account select is enabled
     */
    isCoverageBankAccountSelectEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the page title heading is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the page title is visible
     */
    isPageTitleVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the 'Back to Transactions' navigation link to navigate to /bank-records/transactions
     * Expected outcome is that the browser navigates to the transactions page
     */
    clickBackToTransactionsLink(): Promise<void>;
    /**
     * @desc Clicks a coverage gap header row to expand or collapse its details section
     * Expected outcome is that the gap details section toggles expanded/collapsed state
     * @param {number} index - Zero-based index of the gap row to click
     */
    clickCoverageGapHeader(index: number): Promise<void>;
    /**
     * @desc Clicks the 'Fill Gap with Zero-Transaction Days' button to fill a specific coverage gap
     * Expected outcome is that the gap fill operation is triggered for the specified gap
     * @param {number} index - Zero-based index of the gap row whose fill button to click
     * @throws {Error} When the fill-gap button is not visible or not enabled for the given index
     */
    clickCoverageGapFillButton(index: number): Promise<void>;
    /**
     * @desc Selects a bank account from the dropdown to load coverage data for that account
     * Expected outcome is that coverage data for the selected account is loaded
     * @param {string} accountValue - The value attribute of the account option to select
     * @throws {Error} When the bank account select trigger is not visible
     */
    selectBankAccount(accountValue: string): Promise<void>;
    /**
     * @desc Get the bounding box (position and dimensions) of the root coverage page container
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the root element
     * @throws {Error} When the coverage page root element is not accessible or bounding box is null
     */
    getCoveragePageBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the visible text of the back-navigation link
     * @returns {Promise<string>} The text content of the back-to-transactions link exactly as it appears
     * @throws {Error} When the back-to-transactions link text content is not accessible or null
     */
    getBackToTransactionsLinkText(): Promise<string>;
    /**
     * @desc Get the href URL of the back-to-transactions navigation link
     * @returns {Promise<string>} The href attribute value of the back-to-transactions link
     * @throws {Error} When the href attribute is not accessible or null
     */
    getBackToTransactionsLinkUrl(): Promise<string>;
    /**
     * @desc Get the text content of the no-account-selected banner
     * @returns {Promise<string>} The text content of the no-account-selected banner exactly as it appears
     * @throws {Error} When the banner text content is not accessible or null
     */
    getNoAccountSelectedBannerText(): Promise<string>;
    /**
     * @desc Get the error message text displayed in the coverage error banner
     * @returns {Promise<string>} The text content of the coverage error banner exactly as it appears
     * @throws {Error} When the coverage error banner text content is not accessible or null
     */
    getCoverageErrorText(): Promise<string>;
    /**
     * @desc Get the text content of the empty-state panel
     * @returns {Promise<string>} The text content of the empty-state panel exactly as it appears
     * @throws {Error} When the empty-state panel text content is not accessible or null
     */
    getCoverageEmptyText(): Promise<string>;
    /**
     * @desc Get the text content of the loading state indicator
     * @returns {Promise<string>} The text content of the coverage loading indicator exactly as it appears
     * @throws {Error} When the loading indicator text content is not accessible or null
     */
    getCoverageLoadingText(): Promise<string>;
    /**
     * @desc Get the text content of the coverage legend (e.g. 'Covered', 'Gap (no data)')
     * @returns {Promise<string>} The text content of the coverage legend exactly as it appears
     * @throws {Error} When the coverage legend text content is not accessible or null
     */
    getCoverageLegendText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the coverage timeline card to inspect rendered timeline items
     * @returns {Promise<string>} The inner HTML of the coverage timeline card
     * @throws {Error} When the coverage timeline element is not accessible
     */
    getCoverageTimelineInnerHtml(): Promise<string>;
    /**
     * @desc Get the text content of a specific gap row header (date range label and day count) by index
     * @param {number} index - Zero-based index of the gap row
     * @returns {Promise<string>} The text content of the gap header exactly as it appears
     * @throws {Error} When the gap header text content is not accessible or null
     */
    getCoverageGapHeaderText(index: number): Promise<string>;
    /**
     * @desc Get the formatted balance-before-gap text for a specific gap row by index
     * @param {number} index - Zero-based index of the gap row
     * @returns {Promise<string>} The text content of the balance-before element exactly as it appears
     * @throws {Error} When the balance-before element text content is not accessible or null
     */
    getCoverageGapBalanceBeforeText(index: number): Promise<string>;
    /**
     * @desc Get the formatted balance-after-gap text for a specific gap row by index
     * @param {number} index - Zero-based index of the gap row
     * @returns {Promise<string>} The text content of the balance-after element exactly as it appears
     * @throws {Error} When the balance-after element text content is not accessible or null
     */
    getCoverageGapBalanceAfterText(index: number): Promise<string>;
    /**
     * @desc Get the text content of the fill-gap button for a specific gap row by index
     * (e.g. 'Fill Gap with Zero-Transaction Days' or 'Filling...')
     * @param {number} index - Zero-based index of the gap row
     * @returns {Promise<string>} The text content of the fill-gap button exactly as it appears
     * @throws {Error} When the fill-gap button text content is not accessible or null
     */
    getCoverageGapFillButtonText(index: number): Promise<string>;
    /**
     * @desc Get the text content of the balance mismatch warning for a specific gap row by index
     * @param {number} index - Zero-based index of the gap row
     * @returns {Promise<string>} The text content of the mismatch warning exactly as it appears
     * @throws {Error} When the mismatch warning text content is not accessible or null
     */
    getCoverageGapMismatchText(index: number): Promise<string>;
    /**
     * @desc Count the total number of coverage gap rows rendered in the gaps detail panel
     * @returns {Promise<number>} The count of coverage gap rows
     */
    getCoverageGapRowCount(): Promise<number>;
    /**
     * @desc Get the text content of the earliest covered date stat card
     * @returns {Promise<string>} The text content of the earliest date stat card exactly as it appears
     * @throws {Error} When the earliest date stat card text content is not accessible or null
     */
    getStatEarliestDateText(): Promise<string>;
    /**
     * @desc Get the text content of the latest covered date stat card
     * @returns {Promise<string>} The text content of the latest date stat card exactly as it appears
     * @throws {Error} When the latest date stat card text content is not accessible or null
     */
    getStatLatestDateText(): Promise<string>;
    /**
     * @desc Get the text content of the total covered days stat card
     * @returns {Promise<string>} The text content of the total covered days stat card exactly as it appears
     * @throws {Error} When the total covered days stat card text content is not accessible or null
     */
    getStatTotalCoveredDaysText(): Promise<string>;
    /**
     * @desc Get the text content of the complete coverage stat card (shows 'Yes'/'No' and gap count)
     * @returns {Promise<string>} The text content of the complete coverage stat card exactly as it appears
     * @throws {Error} When the complete coverage stat card text content is not accessible or null
     */
    getStatCompleteCoverageText(): Promise<string>;
    /**
     * @desc Get the displayed placeholder or selected account text shown in the Select trigger
     * @returns {Promise<string>} The text content of the bank account select trigger exactly as it appears
     * @throws {Error} When the bank account select trigger text content is not accessible or null
     */
    getCoverageBankAccountSelectText(): Promise<string>;
    /**
     * @desc Get the currently selected bank account value from the Select dropdown
     * @returns {Promise<string>} The value attribute of the bank account select trigger
     * @throws {Error} When the bank account select value attribute is not accessible or null
     */
    getCoverageBankAccountSelectValue(): Promise<string>;
    /**
     * @desc Get the page heading text ('Transaction Coverage')
     * @returns {Promise<string>} The text content of the page title exactly as it appears
     * @throws {Error} When the page title text content is not accessible or null
     */
    getPageTitleText(): Promise<string>;
}
