/**
 * Page Object Model: RecurringEventsPanel
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class RecurringEventsPanelPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_panelContainer;
    private readonly selector_toggleButton;
    private readonly selector_panelHeader;
    private readonly selector_createRuleButton;
    private readonly selector_showExpiredToggle;
    private readonly selector_showExpiredCheckbox;
    private readonly selector_rulesListContainer;
    private readonly selector_rulesListWrapper;
    private readonly selector_loadingIndicator;
    private readonly selector_errorMessage;
    private readonly selector_retryButton;
    private readonly selector_emptyStateNoRules;
    private readonly selector_emptyStateAllExpired;
    private readonly selector_refreshButton;
    private readonly selector_ruleCard;
    private readonly selector_deleteRuleButton;
    private readonly selector_expiredBadge;
    private readonly selector_ruleCardCertaintyBadge;
    private readonly selector_ruleCardNameHeading;
    private readonly selector_ruleCardDateRangeText;
    private readonly selector_ruleCardDescriptionText;
    private readonly selector_ruleCardFrequencyLabel;
    private readonly selector_ruleCardValueText;
    constructor(page: Page);
    /**
     * @desc Checks if the RecurringEventsPanel is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the panel container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a RecurringEventsPanelPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<RecurringEventsPanelPOM>} A RecurringEventsPanelPOM instance
     * @throws {Error} When the recurring events panel is not visible
     */
    static getPOM(page: Page): Promise<RecurringEventsPanelPOM>;
    /**
     * @desc Whether the panel container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the panel container is visible
     */
    isPanelVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether the panel is in its expanded state (content visible)
     * @returns {Promise<boolean>} True if the panel header is visible (indicating expanded state)
     */
    isPanelExpanded(): Promise<boolean>;
    /**
     * @desc Whether the toggle button is visible
     * @returns {Promise<boolean>} True if the toggle button is visible
     */
    isToggleButtonVisible(): Promise<boolean>;
    /**
     * @desc Whether the Create Rule button is visible
     * @returns {Promise<boolean>} True if the create rule button is visible
     */
    isCreateRuleButtonVisible(): Promise<boolean>;
    /**
     * @desc Whether the loading indicator is visible
     * @returns {Promise<boolean>} True if the loading indicator is visible
     */
    isLoadingIndicatorVisible(): Promise<boolean>;
    /**
     * @desc Whether the error message block is visible
     * @returns {Promise<boolean>} True if the error state container is visible
     */
    isErrorMessageVisible(): Promise<boolean>;
    /**
     * @desc Whether the empty state for no rules is visible
     * @returns {Promise<boolean>} True if the no-rules empty state is visible
     */
    isEmptyStateNoRulesVisible(): Promise<boolean>;
    /**
     * @desc Whether the empty state for all-expired rules is visible
     * @returns {Promise<boolean>} True if the all-expired empty state is visible
     */
    isEmptyStateAllExpiredVisible(): Promise<boolean>;
    /**
     * @desc Whether the rules list wrapper is visible (i.e. at least one rule card is rendered)
     * @returns {Promise<boolean>} True if the rules list wrapper is visible
     */
    isRulesListVisible(): Promise<boolean>;
    /**
     * @desc Whether the refresh button is visible
     * @returns {Promise<boolean>} True if the refresh button is visible
     */
    isRefreshButtonVisible(): Promise<boolean>;
    /**
     * @desc Whether a specific rule card is visible
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<boolean>} True if the rule card is visible
     */
    isRuleCardVisible(ruleId: string): Promise<boolean>;
    /**
     * @desc Whether the expired badge is present for a given rule
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<boolean>} True if the expired badge is visible on the rule card
     */
    isExpiredBadgeVisible(ruleId: string): Promise<boolean>;
    /**
     * @desc Whether the delete button for a given rule is visible
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<boolean>} True if the delete button is visible
     */
    isDeleteRuleButtonVisible(ruleId: string): Promise<boolean>;
    /**
     * @desc Gets the current checked state of the Show Expired toggle
     * @returns {Promise<boolean>} True if the Show Expired checkbox is checked
     */
    isShowExpiredChecked(): Promise<boolean>;
    /**
     * @desc Clicks the panel toggle button to expand or collapse the panel
     * Expected outcome is that the panel will toggle between expanded and collapsed states
     */
    clickToggleButton(): Promise<void>;
    /**
     * @desc Clicks the Create Rule button in the panel header
     * Expected outcome is that the create rule flow will be triggered
     * @throws {Error} When the create rule button is not visible
     */
    clickCreateRuleButton(): Promise<void>;
    /**
     * @desc Clicks the Show Expired toggle label to toggle the expired filter
     * Expected outcome is that the Show Expired filter state will be toggled
     */
    clickShowExpiredToggle(): Promise<void>;
    /**
     * @desc Clicks the Refresh button in the panel footer
     * Expected outcome is that the recurring rules list will be re-fetched
     * @throws {Error} When the refresh button is not visible
     */
    clickRefreshButton(): Promise<void>;
    /**
     * @desc Clicks the Retry button inside the error state block
     * Expected outcome is that the rules fetch will be retried
     * @throws {Error} When the retry button is not visible
     */
    clickRetryButton(): Promise<void>;
    /**
     * @desc Double-clicks a rule card to trigger edit mode
     * Expected outcome is that the edit rule flow will be triggered for the given rule
     * @param {string} ruleId - The UUID of the rule to edit
     * @throws {Error} When the rule card is not visible
     */
    doubleClickRuleCard(ruleId: string): Promise<void>;
    /**
     * @desc Clicks the delete button for a specific rule card
     * Expected outcome is that the confirmation modal will open for deletion
     * @param {string} ruleId - The UUID of the rule to delete
     * @throws {Error} When the delete button is not visible
     */
    clickDeleteRuleButton(ruleId: string): Promise<void>;
    /**
     * @desc Gets the error message text from the error state block
     * @returns {Promise<string>} The error message text exactly as it appears
     * @throws {Error} When the error message element is not accessible or content is null
     */
    getErrorMessageText(): Promise<string>;
    /**
     * @desc Gets the name heading text of a specific rule card
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<string>} The rule name exactly as it appears
     * @throws {Error} When the rule name heading is not accessible or content is null
     */
    getRuleCardName(ruleId: string): Promise<string>;
    /**
     * @desc Gets the certainty badge text of a specific rule card
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<string>} The certainty badge text exactly as it appears
     * @throws {Error} When the certainty badge is not accessible or content is null
     */
    getRuleCardCertaintyBadge(ruleId: string): Promise<string>;
    /**
     * @desc Gets the value/amount text of a specific rule card
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<string>} The rule value text exactly as it appears (including currency symbol and sign)
     * @throws {Error} When the rule value element is not accessible or content is null
     */
    getRuleCardValue(ruleId: string): Promise<string>;
    /**
     * @desc Gets the frequency label text of a specific rule card
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<string>} The frequency label text exactly as it appears
     * @throws {Error} When the frequency label is not accessible or content is null
     */
    getRuleCardFrequencyLabel(ruleId: string): Promise<string>;
    /**
     * @desc Gets the date range text of a specific rule card
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<string>} The date range text exactly as it appears
     * @throws {Error} When the date range element is not accessible or content is null
     */
    getRuleCardDateRange(ruleId: string): Promise<string>;
    /**
     * @desc Gets the description text of a specific rule card
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<string>} The description text exactly as it appears
     * @throws {Error} When the description element is not accessible or content is null
     */
    getRuleCardDescription(ruleId: string): Promise<string>;
    /**
     * @desc Gets the data-testid attribute value of the show-expired toggle wrapper
     * @returns {Promise<string>} The data-testid value exactly as it appears
     * @throws {Error} When the attribute is not accessible or null
     */
    getShowExpiredToggleTestId(): Promise<string>;
    /**
     * @desc Gets the data-testid attribute value of a specific rule card
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<string>} The data-testid value exactly as it appears
     * @throws {Error} When the attribute is not accessible or null
     */
    getRuleCardTestId(ruleId: string): Promise<string>;
    /**
     * @desc Gets the data-testid attribute value of a specific expired badge
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<string>} The data-testid value exactly as it appears
     * @throws {Error} When the attribute is not accessible or null
     */
    getExpiredBadgeTestId(ruleId: string): Promise<string>;
    /**
     * @desc Gets the data-testid attribute value of a specific delete rule button
     * @param {string} ruleId - The UUID of the rule
     * @returns {Promise<string>} The data-testid value exactly as it appears
     * @throws {Error} When the attribute is not accessible or null
     */
    getDeleteRuleButtonTestId(ruleId: string): Promise<string>;
}
