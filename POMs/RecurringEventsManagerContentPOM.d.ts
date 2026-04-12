/**
 * Page Object Model: RecurringEventsManagerContent
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class RecurringEventsManagerContentPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_recurringEventsManagerContainer;
    private readonly selector_header;
    private readonly selector_headerTitle;
    private readonly selector_createRecurringRuleButton;
    private readonly selector_filterBar;
    private readonly selector_showExpiredToggle;
    private readonly selector_showExpiredCheckbox;
    private readonly selector_showExpiredToggleTrack;
    private readonly selector_rulesListContainer;
    private readonly selector_rulesList;
    private readonly selector_loadingIndicator;
    private readonly selector_errorBanner;
    private readonly selector_retryButton;
    private readonly selector_emptyState;
    private readonly selector_allExpiredState;
    private readonly selector_refreshButton;
    private readonly selector_recurringRuleCard;
    constructor(page: Page);
    /**
     * @desc Checks if the RecurringEventsManagerContent panel is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the manager container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method — validates visibility and returns a POM instance
     * @param page - Playwright Page instance
     * @returns {Promise<RecurringEventsManagerContentPOM>} POM instance
     * @throws {Error} When the recurring events manager panel is not visible
     */
    static getPOM(page: Page): Promise<RecurringEventsManagerContentPOM>;
    /**
     * @desc Whether or not the recurring events manager container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the container is visible
     */
    isRecurringEventsManagerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the header section is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the header is visible
     */
    isHeaderVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the filter bar section is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the filter bar is visible
     */
    isFilterBarVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the scrollable rules list container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the rules list container is visible
     */
    isRulesListContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the loading indicator is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading indicator is visible
     */
    isLoadingIndicatorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the error banner is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the error banner is visible
     */
    isErrorBannerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the empty state view is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the empty state is visible
     */
    isEmptyStateVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the all-expired state view is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the all-expired state is visible
     */
    isAllExpiredStateVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the create recurring rule button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the create button is visible
     */
    isCreateRecurringRuleButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the refresh button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the refresh button is visible
     */
    isRefreshButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not a specific recurring rule card is visible
     * @param {string} ruleId - The ID of the recurring rule
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the rule card is visible
     */
    isRecurringRuleCardVisible(ruleId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Gets the checked state of the show-expired toggle
     * @returns {Promise<boolean>} True if the show-expired toggle is checked (expired rules visible)
     * @throws {Error} When the show-expired checkbox is not accessible
     */
    isShowExpiredChecked(): Promise<boolean>;
    /**
     * @desc Gets the full text content of the header section
     * @returns {Promise<string>} The header text content exactly as it appears
     * @throws {Error} When the header content is not accessible or null
     */
    getHeaderText(): Promise<string>;
    /**
     * @desc Gets the title heading text from the header
     * @returns {Promise<string>} The header title text exactly as it appears
     * @throws {Error} When the header title content is not accessible or null
     */
    getHeaderTitleText(): Promise<string>;
    /**
     * @desc Clicks the create recurring rule button
     * Expected outcome is that the create recurring rule form or modal will open
     */
    clickCreateRecurringRuleButton(): Promise<void>;
    /**
     * @desc Clicks the show-expired toggle to change its state
     * Expected outcome is that the toggle state will change and the rules list will update
     */
    clickShowExpiredToggle(): Promise<void>;
    /**
     * @desc Clicks the retry button inside the error banner
     * Expected outcome is that the recurring rules fetch will be retried
     */
    clickRetryButton(): Promise<void>;
    /**
     * @desc Clicks the refresh button to manually refresh the rules list
     * Expected outcome is that the recurring rules list will be refreshed
     */
    clickRefreshButton(): Promise<void>;
    /**
     * @desc Double-clicks a recurring rule card to trigger the edit callback
     * Expected outcome is that the edit form or modal for the rule will open
     * @param {string} ruleId - The ID of the recurring rule to edit
     */
    doubleClickRecurringRuleCard(ruleId: string): Promise<void>;
    /**
     * @desc Scrolls within the rules list container
     * Expected outcome is that the list scrolls to reveal more rules
     * @param {number} deltaY - The vertical scroll distance in pixels (positive scrolls down)
     */
    scrollRulesListContainer(deltaY: number): Promise<void>;
    /**
     * @desc Dismisses the delete confirmation modal without deleting
     * Expected outcome is that the modal will close and no deletion will occur
     * @throws {Error} When the confirmation modal dismiss action cannot be performed
     */
    dismissConfirmationModal(): Promise<void>;
    /**
     * @desc Confirms the delete action in the confirmation modal
     * Expected outcome is that the rule will be deleted and the modal will close
     * @throws {Error} When the confirmation modal confirm action cannot be performed
     */
    confirmConfirmationModal(): Promise<void>;
}
