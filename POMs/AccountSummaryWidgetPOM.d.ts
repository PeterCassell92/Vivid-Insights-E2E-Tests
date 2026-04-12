/**
 * Page Object Model: AccountSummaryWidget
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class AccountSummaryWidgetPOM {
    private readonly page;
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
    protected readonly selector_accountRow: (accountId: string) => string;
    protected readonly selector_accountListItem: (accountId: string) => string;
    constructor(page: Page);
    /**
     * @desc Checks if the Account Summary Widget is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the widget is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns an AccountSummaryWidgetPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<AccountSummaryWidgetPOM>} AccountSummaryWidgetPOM instance
     * @throws {Error} When the Account Summary Widget is not visible on the page
     */
    static getPOM(page: Page): Promise<AccountSummaryWidgetPOM>;
    /**
     * @desc Whether or not the widget title is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the widget title is visible
     */
    isWidgetTitleVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the total balance value is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the total balance value is visible
     */
    isTotalBalanceValueVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the account status badge is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account status badge is visible
     */
    isAccountStatusBadgeVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the view details link is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the view details link is visible
     */
    isViewDetailsLinkVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the account list container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account list container is visible
     */
    isAccountListContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not a specific account row is visible
     * @param {string} accountId - The account ID to check
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account row is visible
     */
    isAccountRowVisible(accountId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not a specific account list item is visible
     * @param {string} accountId - The account ID to check
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account list item is visible
     */
    isAccountListItemVisible(accountId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the refresh button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the refresh button is visible
     */
    isRefreshButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the last updated timestamp is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the last updated timestamp is visible
     */
    isLastUpdatedTimestampVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the view details link to navigate to the full accounts page
     * Expected outcome is that the browser navigates to /accounts
     */
    clickViewDetailsLink(): Promise<void>;
    /**
     * @desc Clicks the refresh button in the summary footer
     * Expected outcome is that the widget data is refreshed
     */
    clickRefreshButton(): Promise<void>;
    /**
     * @desc Clicks a specific account row in the summary list
     * Expected outcome is that the account row is selected or expanded
     * @param {string} accountId - The ID of the account row to click
     */
    clickAccountRow(accountId: string): Promise<void>;
    /**
     * @desc Clicks a specific account list item
     * Expected outcome is that the account list item is selected or expanded
     * @param {string} accountId - The ID of the account list item to click
     */
    clickAccountListItem(accountId: string): Promise<void>;
    /**
     * @desc Gets the widget title text exactly as it appears in the UI
     * @returns {Promise<string>} The widget title text
     * @throws {Error} When the widget title content is not accessible or null
     */
    getWidgetTitle(): Promise<string>;
    /**
     * @desc Gets the total balance label text exactly as it appears in the UI
     * @returns {Promise<string>} The total balance label text
     * @throws {Error} When the total balance label content is not accessible or null
     */
    getTotalBalanceLabel(): Promise<string>;
    /**
     * @desc Gets the total balance value text exactly as it appears in the UI
     * @returns {Promise<string>} The total balance value text
     * @throws {Error} When the total balance value content is not accessible or null
     */
    getTotalBalanceValue(): Promise<string>;
    /**
     * @desc Gets the account status badge text exactly as it appears in the UI
     * @returns {Promise<string>} The account status badge text
     * @throws {Error} When the account status badge content is not accessible or null
     */
    getAccountStatusBadgeText(): Promise<string>;
    /**
     * @desc Gets the last updated timestamp text exactly as it appears in the UI
     * @returns {Promise<string>} The last updated timestamp text
     * @throws {Error} When the last updated timestamp content is not accessible or null
     */
    getLastUpdatedTimestamp(): Promise<string>;
    /**
     * @desc Gets the text content of a specific account row exactly as it appears in the UI
     * @param {string} accountId - The ID of the account row
     * @returns {Promise<string>} The account row text content
     * @throws {Error} When the account row content is not accessible or null
     */
    getAccountRowText(accountId: string): Promise<string>;
    /**
     * @desc Gets the data-account-id attribute value from the widget container
     * @returns {Promise<string>} The primary account ID stored in the data attribute
     * @throws {Error} When the data-account-id attribute is not present or null
     */
    getWidgetDataAccountId(): Promise<string>;
    /**
     * @desc Gets the data-status attribute value from the widget container
     * @returns {Promise<string>} The account status stored in the data attribute
     * @throws {Error} When the data-status attribute is not present or null
     */
    getWidgetDataStatus(): Promise<string>;
}
