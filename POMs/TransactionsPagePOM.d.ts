/**
 * Page Object Model: TransactionsPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TransactionsPagePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_backToDashboardButton;
    private readonly selector_pageTitle;
    private readonly selector_uploadTransactionsLink;
    private readonly selector_filterSectionContainer;
    private readonly selector_bankAccountFilterTrigger;
    private readonly selector_accountSettingsButton;
    private readonly selector_transactionsSectionContainer;
    private readonly selector_transactionsTable;
    private readonly selector_uploadCsvCta;
    private readonly selector_tripLinkButton;
    private readonly selector_allTripLinkButtons;
    private readonly selector_firstPageButton;
    private readonly selector_prevPageButton;
    private readonly selector_nextPageButton;
    private readonly selector_lastPageButton;
    private readonly selector_pageSizeSelect;
    private readonly selector_coverageLink;
    constructor(page: Page);
    /**
     * @desc Checks if the Transactions page is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the transactions page root element is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method — validates visibility and returns a TransactionsPagePOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TransactionsPagePOM>} A TransactionsPagePOM instance
     * @throws {Error} When the transactions page root element is not visible
     */
    static getPOM(page: Page): Promise<TransactionsPagePOM>;
    /**
     * @desc Whether or not the page title is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the page title is visible
     */
    isPageTitleVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the filter section container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the filter section is visible
     */
    isFilterSectionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the bank account filter trigger is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the bank account filter trigger is visible
     */
    isBankAccountFilterVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the account settings button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account settings button is visible
     */
    isAccountSettingsButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the transactions section container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the transactions section is visible
     */
    isTransactionsSectionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the transactions table is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the transactions table is visible
     */
    isTransactionsTableVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the upload CSV CTA (empty state) is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the upload CSV CTA is visible
     */
    isUploadCsvCtaVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the coverage link in the sidebar is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the coverage link is visible
     */
    isCoverageLinkVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the first page button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the first page button is visible
     */
    isFirstPageButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the trip link button for a specific transaction is visible
     * @param {string} transactionId - The transaction ID to check
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the trip link button is visible
     */
    isTripLinkButtonVisible(transactionId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the back to dashboard button in the page header
     * Expected outcome is that the user is navigated to the dashboard (/)
     */
    clickBackToDashboardButton(): Promise<void>;
    /**
     * @desc Clicks the upload transactions link button in the page header
     * Expected outcome is that the user is navigated to /bank-records
     */
    clickUploadTransactionsLink(): Promise<void>;
    /**
     * @desc Clicks the bank account filter dropdown trigger
     * Expected outcome is that the bank account dropdown opens
     */
    clickBankAccountFilterTrigger(): Promise<void>;
    /**
     * @desc Clicks the account settings button (gear icon)
     * Expected outcome is that the account settings modal opens
     */
    clickAccountSettingsButton(): Promise<void>;
    /**
     * @desc Clicks the upload CSV CTA button in the empty state
     * Expected outcome is that the user is navigated to /bank-records
     */
    clickUploadCsvCta(): Promise<void>;
    /**
     * @desc Clicks the trip link button for a specific transaction
     * Expected outcome is that the trip detail modal opens for the associated trip
     * @param {string} transactionId - The ID of the transaction whose trip link to click
     * @throws {Error} When the trip link button for the given transactionId is not visible
     */
    clickTripLinkButton(transactionId: string): Promise<void>;
    /**
     * @desc Clicks the first page button in the pagination controls
     * Expected outcome is that the transactions list navigates to the first page
     */
    clickFirstPageButton(): Promise<void>;
    /**
     * @desc Clicks the previous page button in the pagination controls
     * Expected outcome is that the transactions list navigates to the previous page
     */
    clickPrevPageButton(): Promise<void>;
    /**
     * @desc Clicks the next page button in the pagination controls
     * Expected outcome is that the transactions list navigates to the next page
     */
    clickNextPageButton(): Promise<void>;
    /**
     * @desc Clicks the last page button in the pagination controls
     * Expected outcome is that the transactions list navigates to the last page
     */
    clickLastPageButton(): Promise<void>;
    /**
     * @desc Clicks the page size select dropdown
     * Expected outcome is that the page size dropdown opens
     */
    clickPageSizeSelect(): Promise<void>;
    /**
     * @desc Selects a page size option from the page size dropdown
     * Expected outcome is that the number of transactions displayed per page changes
     * @param {20 | 50 | 100 | 200} pageSize - The number of records to display per page
     */
    selectPageSize(pageSize: 20 | 50 | 100 | 200): Promise<void>;
    /**
     * @desc Clicks the coverage link in the sidebar
     * Expected outcome is that the user is navigated to /bank-records/coverage
     */
    clickCoverageLink(): Promise<void>;
    /**
     * @desc Gets the page title text exactly as it appears in the UI
     * @returns {Promise<string>} The page title text
     * @throws {Error} When the page title content is not accessible or null
     */
    getPageTitle(): Promise<string>;
    /**
     * @desc Counts the number of trip link buttons rendered in the transactions table body
     * Used to verify how many transactions have associated trips
     * @returns {Promise<number>} The count of trip link buttons currently visible in the table
     */
    countTripLinkButtons(): Promise<number>;
}
