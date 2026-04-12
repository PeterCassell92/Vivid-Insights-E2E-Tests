/**
 * Page Object Model: RecurringEventsPanel
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const RecurringEventsPanelPOM_StandardSelector = '[data-testid="recurring-events-panel"]';

export class RecurringEventsPanelPOM {
  private readonly page: Page;

  // ============================================================
  // Selectors
  // ============================================================

  private readonly rootSelector: string;
  private readonly selector_panelContainer: string;
  private readonly selector_toggleButton: string;
  private readonly selector_panelHeader: string;
  private readonly selector_createRuleButton: string;
  private readonly selector_showExpiredToggle: string;
  private readonly selector_showExpiredCheckbox: string;
  private readonly selector_rulesListContainer: string;
  private readonly selector_rulesListWrapper: string;
  private readonly selector_loadingIndicator: string;
  private readonly selector_errorMessage: string;
  private readonly selector_retryButton: string;
  private readonly selector_emptyStateNoRules: string;
  private readonly selector_emptyStateAllExpired: string;
  private readonly selector_refreshButton: string;

  // Dynamic selectors
  private readonly selector_ruleCard: (ruleId: string) => string;
  private readonly selector_deleteRuleButton: (ruleId: string) => string;
  private readonly selector_expiredBadge: (ruleId: string) => string;
  private readonly selector_ruleCardCertaintyBadge: (ruleId: string) => string;
  private readonly selector_ruleCardNameHeading: (ruleId: string) => string;
  private readonly selector_ruleCardDateRangeText: (ruleId: string) => string;
  private readonly selector_ruleCardDescriptionText: (ruleId: string) => string;
  private readonly selector_ruleCardFrequencyLabel: (ruleId: string) => string;
  private readonly selector_ruleCardValueText: (ruleId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = RecurringEventsPanelPOM_StandardSelector;

    // Static selectors
    this.selector_panelContainer = this.rootSelector;
    this.selector_toggleButton = `[data-testid="recurring-events-panel-toggle"]`;
    this.selector_panelHeader = `${this.rootSelector} > div > div:first-child`;
    this.selector_createRuleButton = `[data-testid="create-recurring-rule-button"]`;
    this.selector_showExpiredToggle = `[data-testid="show-expired-toggle"]`;
    this.selector_showExpiredCheckbox = `[data-testid="show-expired-toggle"] input[type="checkbox"]`;
    this.selector_rulesListContainer = `${this.rootSelector} .flex-1.overflow-y-auto`;
    this.selector_rulesListWrapper = `${this.rootSelector} .space-y-2`;
    this.selector_loadingIndicator = `${this.rootSelector} .flex-1 .text-gray-500`;
    this.selector_errorMessage = `${this.rootSelector} .bg-red-50`;
    this.selector_retryButton = `${this.rootSelector} .bg-red-50 button`;
    this.selector_emptyStateNoRules = `${this.rootSelector} .flex-1 .flex-col:first-of-type`;
    this.selector_emptyStateAllExpired = `${this.rootSelector} .flex-1 .flex-col:last-of-type`;
    this.selector_refreshButton = `[data-testid="refresh-recurring-rules"]`;

    // Dynamic selectors
    this.selector_ruleCard = (ruleId: string) =>
      `[data-testid="recurring-rule-${ruleId}"]`;

    this.selector_deleteRuleButton = (ruleId: string) =>
      `[data-testid="delete-recurring-rule-${ruleId}"]`;

    this.selector_expiredBadge = (ruleId: string) =>
      `[data-testid="expired-badge-${ruleId}"]`;

    this.selector_ruleCardCertaintyBadge = (ruleId: string) =>
      `[data-testid="recurring-rule-${ruleId}"] span:first-of-type`;

    this.selector_ruleCardNameHeading = (ruleId: string) =>
      `[data-testid="recurring-rule-${ruleId}"] h3`;

    this.selector_ruleCardDateRangeText = (ruleId: string) =>
      `[data-testid="recurring-rule-${ruleId}"] .text-xs.text-gray-500:first-of-type`;

    this.selector_ruleCardDescriptionText = (ruleId: string) =>
      `[data-testid="recurring-rule-${ruleId}"] p.text-xs.text-gray-500`;

    this.selector_ruleCardFrequencyLabel = (ruleId: string) =>
      `[data-testid="recurring-rule-${ruleId}"] .flex.items-center.gap-1 span`;

    this.selector_ruleCardValueText = (ruleId: string) =>
      `[data-testid="recurring-rule-${ruleId}"] p.font-semibold`;
  }

  // ============================================================
  // STATIC METHODS
  // ============================================================

  /**
   * @desc Checks if the RecurringEventsPanel is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the panel container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const panel = page.locator(RecurringEventsPanelPOM_StandardSelector);
      return await panel.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a RecurringEventsPanelPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<RecurringEventsPanelPOM>} A RecurringEventsPanelPOM instance
   * @throws {Error} When the recurring events panel is not visible
   */
  static async getPOM(page: Page): Promise<RecurringEventsPanelPOM> {
    const isVisible = await RecurringEventsPanelPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'RecurringEventsPanelPOM: Cannot instantiate - panel is not visible. ' +
          `Expected element [${RecurringEventsPanelPOM_StandardSelector}] to be visible.`
      );
    }

    return new RecurringEventsPanelPOM(page);
  }

  // ============================================================
  // VISIBILITY AND STATE METHODS
  // ============================================================

  /**
   * @desc Whether the panel container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the panel container is visible
   */
  async isPanelVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_panelContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether the panel is in its expanded state (content visible)
   * @returns {Promise<boolean>} True if the panel header is visible (indicating expanded state)
   */
  async isPanelExpanded(): Promise<boolean> {
    return await this.page.locator(this.selector_panelHeader).isVisible();
  }

  /**
   * @desc Whether the toggle button is visible
   * @returns {Promise<boolean>} True if the toggle button is visible
   */
  async isToggleButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_toggleButton).isVisible();
  }

  /**
   * @desc Whether the Create Rule button is visible
   * @returns {Promise<boolean>} True if the create rule button is visible
   */
  async isCreateRuleButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_createRuleButton).isVisible();
  }

  /**
   * @desc Whether the loading indicator is visible
   * @returns {Promise<boolean>} True if the loading indicator is visible
   */
  async isLoadingIndicatorVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_loadingIndicator).isVisible();
  }

  /**
   * @desc Whether the error message block is visible
   * @returns {Promise<boolean>} True if the error state container is visible
   */
  async isErrorMessageVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_errorMessage).isVisible();
  }

  /**
   * @desc Whether the empty state for no rules is visible
   * @returns {Promise<boolean>} True if the no-rules empty state is visible
   */
  async isEmptyStateNoRulesVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_emptyStateNoRules).isVisible();
  }

  /**
   * @desc Whether the empty state for all-expired rules is visible
   * @returns {Promise<boolean>} True if the all-expired empty state is visible
   */
  async isEmptyStateAllExpiredVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_emptyStateAllExpired).isVisible();
  }

  /**
   * @desc Whether the rules list wrapper is visible (i.e. at least one rule card is rendered)
   * @returns {Promise<boolean>} True if the rules list wrapper is visible
   */
  async isRulesListVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_rulesListWrapper).isVisible();
  }

  /**
   * @desc Whether the refresh button is visible
   * @returns {Promise<boolean>} True if the refresh button is visible
   */
  async isRefreshButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_refreshButton).isVisible();
  }

  /**
   * @desc Whether a specific rule card is visible
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<boolean>} True if the rule card is visible
   */
  async isRuleCardVisible(ruleId: string): Promise<boolean> {
    return await this.page.locator(this.selector_ruleCard(ruleId)).isVisible();
  }

  /**
   * @desc Whether the expired badge is present for a given rule
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<boolean>} True if the expired badge is visible on the rule card
   */
  async isExpiredBadgeVisible(ruleId: string): Promise<boolean> {
    return await this.page.locator(this.selector_expiredBadge(ruleId)).isVisible();
  }

  /**
   * @desc Whether the delete button for a given rule is visible
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<boolean>} True if the delete button is visible
   */
  async isDeleteRuleButtonVisible(ruleId: string): Promise<boolean> {
    return await this.page.locator(this.selector_deleteRuleButton(ruleId)).isVisible();
  }

  /**
   * @desc Gets the current checked state of the Show Expired toggle
   * @returns {Promise<boolean>} True if the Show Expired checkbox is checked
   */
  async isShowExpiredChecked(): Promise<boolean> {
    return await this.page.locator(this.selector_showExpiredCheckbox).isChecked();
  }

  // ============================================================
  // ACTION METHODS
  // ============================================================

  /**
   * @desc Clicks the panel toggle button to expand or collapse the panel
   * Expected outcome is that the panel will toggle between expanded and collapsed states
   */
  async clickToggleButton(): Promise<void> {
    await this.page.locator(this.selector_toggleButton).click();
  }

  /**
   * @desc Clicks the Create Rule button in the panel header
   * Expected outcome is that the create rule flow will be triggered
   * @throws {Error} When the create rule button is not visible
   */
  async clickCreateRuleButton(): Promise<void> {
    const isVisible = await this.isCreateRuleButtonVisible();
    if (!isVisible) {
      throw new Error(
        `RecurringEventsPanelPOM: Cannot click Create Rule button - it is not visible. ` +
          `Selector: ${this.selector_createRuleButton}`
      );
    }
    await this.page.locator(this.selector_createRuleButton).click();
  }

  /**
   * @desc Clicks the Show Expired toggle label to toggle the expired filter
   * Expected outcome is that the Show Expired filter state will be toggled
   */
  async clickShowExpiredToggle(): Promise<void> {
    await this.page.locator(this.selector_showExpiredToggle).click();
  }

  /**
   * @desc Clicks the Refresh button in the panel footer
   * Expected outcome is that the recurring rules list will be re-fetched
   * @throws {Error} When the refresh button is not visible
   */
  async clickRefreshButton(): Promise<void> {
    const isVisible = await this.isRefreshButtonVisible();
    if (!isVisible) {
      throw new Error(
        `RecurringEventsPanelPOM: Cannot click Refresh button - it is not visible. ` +
          `Selector: ${this.selector_refreshButton}`
      );
    }
    await this.page.locator(this.selector_refreshButton).click();
  }

  /**
   * @desc Clicks the Retry button inside the error state block
   * Expected outcome is that the rules fetch will be retried
   * @throws {Error} When the retry button is not visible
   */
  async clickRetryButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_retryButton).isVisible();
    if (!isVisible) {
      throw new Error(
        `RecurringEventsPanelPOM: Cannot click Retry button - it is not visible. ` +
          `Selector: ${this.selector_retryButton}`
      );
    }
    await this.page.locator(this.selector_retryButton).click();
  }

  /**
   * @desc Double-clicks a rule card to trigger edit mode
   * Expected outcome is that the edit rule flow will be triggered for the given rule
   * @param {string} ruleId - The UUID of the rule to edit
   * @throws {Error} When the rule card is not visible
   */
  async doubleClickRuleCard(ruleId: string): Promise<void> {
    const selector = this.selector_ruleCard(ruleId);
    const isVisible = await this.page.locator(selector).isVisible();
    if (!isVisible) {
      throw new Error(
        `RecurringEventsPanelPOM: Cannot double-click rule card - it is not visible. ` +
          `RuleId: ${ruleId}. Selector: ${selector}`
      );
    }
    await this.page.locator(selector).dblclick();
  }

  /**
   * @desc Clicks the delete button for a specific rule card
   * Expected outcome is that the confirmation modal will open for deletion
   * @param {string} ruleId - The UUID of the rule to delete
   * @throws {Error} When the delete button is not visible
   */
  async clickDeleteRuleButton(ruleId: string): Promise<void> {
    const selector = this.selector_deleteRuleButton(ruleId);
    const isVisible = await this.page.locator(selector).isVisible();
    if (!isVisible) {
      throw new Error(
        `RecurringEventsPanelPOM: Cannot click delete button - it is not visible. ` +
          `RuleId: ${ruleId}. Selector: ${selector}`
      );
    }
    await this.page.locator(selector).click();
  }

  // ============================================================
  // DATA RETRIEVAL METHODS
  // ============================================================

  /**
   * @desc Gets the error message text from the error state block
   * @returns {Promise<string>} The error message text exactly as it appears
   * @throws {Error} When the error message element is not accessible or content is null
   */
  async getErrorMessageText(): Promise<string> {
    await this.page.locator(this.selector_errorMessage).isVisible();
    const text = await this.page.locator(this.selector_errorMessage).textContent();

    if (text === null) {
      throw new Error(
        `RecurringEventsPanelPOM: Error message content is null. ` +
          `Selector: ${this.selector_errorMessage}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the name heading text of a specific rule card
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<string>} The rule name exactly as it appears
   * @throws {Error} When the rule name heading is not accessible or content is null
   */
  async getRuleCardName(ruleId: string): Promise<string> {
    const selector = this.selector_ruleCardNameHeading(ruleId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `RecurringEventsPanelPOM: Rule name heading content is null. ` +
          `RuleId: ${ruleId}. Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the certainty badge text of a specific rule card
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<string>} The certainty badge text exactly as it appears
   * @throws {Error} When the certainty badge is not accessible or content is null
   */
  async getRuleCardCertaintyBadge(ruleId: string): Promise<string> {
    const selector = this.selector_ruleCardCertaintyBadge(ruleId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `RecurringEventsPanelPOM: Certainty badge content is null. ` +
          `RuleId: ${ruleId}. Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the value/amount text of a specific rule card
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<string>} The rule value text exactly as it appears (including currency symbol and sign)
   * @throws {Error} When the rule value element is not accessible or content is null
   */
  async getRuleCardValue(ruleId: string): Promise<string> {
    const selector = this.selector_ruleCardValueText(ruleId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `RecurringEventsPanelPOM: Rule value text content is null. ` +
          `RuleId: ${ruleId}. Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the frequency label text of a specific rule card
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<string>} The frequency label text exactly as it appears
   * @throws {Error} When the frequency label is not accessible or content is null
   */
  async getRuleCardFrequencyLabel(ruleId: string): Promise<string> {
    const selector = this.selector_ruleCardFrequencyLabel(ruleId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `RecurringEventsPanelPOM: Frequency label content is null. ` +
          `RuleId: ${ruleId}. Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the date range text of a specific rule card
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<string>} The date range text exactly as it appears
   * @throws {Error} When the date range element is not accessible or content is null
   */
  async getRuleCardDateRange(ruleId: string): Promise<string> {
    const selector = this.selector_ruleCardDateRangeText(ruleId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `RecurringEventsPanelPOM: Date range text content is null. ` +
          `RuleId: ${ruleId}. Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the description text of a specific rule card
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<string>} The description text exactly as it appears
   * @throws {Error} When the description element is not accessible or content is null
   */
  async getRuleCardDescription(ruleId: string): Promise<string> {
    const selector = this.selector_ruleCardDescriptionText(ruleId);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `RecurringEventsPanelPOM: Description text content is null. ` +
          `RuleId: ${ruleId}. Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the data-testid attribute value of the show-expired toggle wrapper
   * @returns {Promise<string>} The data-testid value exactly as it appears
   * @throws {Error} When the attribute is not accessible or null
   */
  async getShowExpiredToggleTestId(): Promise<string> {
    const value = await this.page
      .locator(this.selector_showExpiredToggle)
      .getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `RecurringEventsPanelPOM: data-testid attribute on show-expired toggle is null. ` +
          `Selector: ${this.selector_showExpiredToggle}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-testid attribute value of a specific rule card
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<string>} The data-testid value exactly as it appears
   * @throws {Error} When the attribute is not accessible or null
   */
  async getRuleCardTestId(ruleId: string): Promise<string> {
    const selector = this.selector_ruleCard(ruleId);
    const value = await this.page.locator(selector).getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `RecurringEventsPanelPOM: data-testid attribute on rule card is null. ` +
          `RuleId: ${ruleId}. Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-testid attribute value of a specific expired badge
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<string>} The data-testid value exactly as it appears
   * @throws {Error} When the attribute is not accessible or null
   */
  async getExpiredBadgeTestId(ruleId: string): Promise<string> {
    const selector = this.selector_expiredBadge(ruleId);
    const value = await this.page.locator(selector).getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `RecurringEventsPanelPOM: data-testid attribute on expired badge is null. ` +
          `RuleId: ${ruleId}. Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-testid attribute value of a specific delete rule button
   * @param {string} ruleId - The UUID of the rule
   * @returns {Promise<string>} The data-testid value exactly as it appears
   * @throws {Error} When the attribute is not accessible or null
   */
  async getDeleteRuleButtonTestId(ruleId: string): Promise<string> {
    const selector = this.selector_deleteRuleButton(ruleId);
    const value = await this.page.locator(selector).getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `RecurringEventsPanelPOM: data-testid attribute on delete rule button is null. ` +
          `RuleId: ${ruleId}. Selector: ${selector}`
      );
    }

    return value;
  }
}