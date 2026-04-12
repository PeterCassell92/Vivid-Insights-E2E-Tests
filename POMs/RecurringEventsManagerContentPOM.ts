/**
 * Page Object Model: RecurringEventsManagerContent
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const RecurringEventsManagerContentPOM_StandardSelector =
  '[data-testid="recurring-events-manager"]';

export class RecurringEventsManagerContentPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_recurringEventsManagerContainer: string;
  private readonly selector_header: string;
  private readonly selector_headerTitle: string;
  private readonly selector_createRecurringRuleButton: string;
  private readonly selector_filterBar: string;
  private readonly selector_showExpiredToggle: string;
  private readonly selector_showExpiredCheckbox: string;
  private readonly selector_showExpiredToggleTrack: string;
  private readonly selector_rulesListContainer: string;
  private readonly selector_rulesList: string;
  private readonly selector_loadingIndicator: string;
  private readonly selector_errorBanner: string;
  private readonly selector_retryButton: string;
  private readonly selector_emptyState: string;
  private readonly selector_allExpiredState: string;
  private readonly selector_refreshButton: string;
  private readonly selector_recurringRuleCard: (ruleId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = RecurringEventsManagerContentPOM_StandardSelector;

    // Container
    this.selector_recurringEventsManagerContainer = this.rootSelector;

    // Header section
    this.selector_header = `${this.rootSelector} > .p-4.border-b`;
    this.selector_headerTitle = `${this.rootSelector} h2`;
    this.selector_createRecurringRuleButton = `[data-testid="create-recurring-rule-button"]`;

    // Filter bar section
    this.selector_filterBar = `${this.rootSelector} .px-4.py-2.border-b`;
    this.selector_showExpiredToggle = `[data-testid="show-expired-toggle"]`;
    this.selector_showExpiredCheckbox = `[data-testid="show-expired-toggle"] input[type="checkbox"]`;
    this.selector_showExpiredToggleTrack = `[data-testid="show-expired-toggle"] .w-9.h-5`;

    // Rules list container and states
    this.selector_rulesListContainer = `${this.rootSelector} .flex-1.overflow-y-auto`;
    this.selector_rulesList = `${this.rootSelector} .space-y-2`;
    this.selector_loadingIndicator = `[data-testid="recurring-events-loading"]`;
    this.selector_errorBanner = `[data-testid="recurring-events-error"]`;
    this.selector_retryButton = `[data-testid="recurring-events-retry-button"]`;
    this.selector_emptyState = `[data-testid="recurring-events-empty"]`;
    this.selector_allExpiredState = `[data-testid="recurring-events-all-expired"]`;

    // Refresh button
    this.selector_refreshButton = `[data-testid="refresh-recurring-rules"]`;

    // Dynamic selectors
    this.selector_recurringRuleCard = (ruleId: string) =>
      `[data-testid="recurring-rule-${ruleId}"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the RecurringEventsManagerContent panel is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the manager container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page
        .locator(RecurringEventsManagerContentPOM_StandardSelector)
        .isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method — validates visibility and returns a POM instance
   * @param page - Playwright Page instance
   * @returns {Promise<RecurringEventsManagerContentPOM>} POM instance
   * @throws {Error} When the recurring events manager panel is not visible
   */
  static async getPOM(page: Page): Promise<RecurringEventsManagerContentPOM> {
    const isVisible = await RecurringEventsManagerContentPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'RecurringEventsManagerContentPOM: Cannot instantiate — panel is not visible. ' +
          `Expected element [${RecurringEventsManagerContentPOM_StandardSelector}] to be visible.`
      );
    }

    return new RecurringEventsManagerContentPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Whether or not the recurring events manager container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the container is visible
   */
  async isRecurringEventsManagerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_recurringEventsManagerContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the header section is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the header is visible
   */
  async isHeaderVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_header).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the filter bar section is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the filter bar is visible
   */
  async isFilterBarVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_filterBar).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the scrollable rules list container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the rules list container is visible
   */
  async isRulesListContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_rulesListContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the loading indicator is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading indicator is visible
   */
  async isLoadingIndicatorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_loadingIndicator)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the error banner is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the error banner is visible
   */
  async isErrorBannerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_errorBanner).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the empty state view is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the empty state is visible
   */
  async isEmptyStateVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_emptyState).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the all-expired state view is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the all-expired state is visible
   */
  async isAllExpiredStateVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_allExpiredState)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the create recurring rule button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the create button is visible
   */
  async isCreateRecurringRuleButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_createRecurringRuleButton)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the refresh button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the refresh button is visible
   */
  async isRefreshButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_refreshButton)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not a specific recurring rule card is visible
   * @param {string} ruleId - The ID of the recurring rule
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the rule card is visible
   */
  async isRecurringRuleCardVisible(
    ruleId: string,
    timeout: number = 1500
  ): Promise<boolean> {
    return await this.page
      .locator(this.selector_recurringRuleCard(ruleId))
      .isVisible({ timeout });
  }

  /**
   * @desc Gets the checked state of the show-expired toggle
   * @returns {Promise<boolean>} True if the show-expired toggle is checked (expired rules visible)
   * @throws {Error} When the show-expired checkbox is not accessible
   */
  async isShowExpiredChecked(): Promise<boolean> {
    const checkbox = this.page.locator(this.selector_showExpiredCheckbox);
    const isVisible = await checkbox.isVisible();

    if (!isVisible) {
      throw new Error(
        `RecurringEventsManagerContentPOM: Show-expired checkbox is not visible. Selector: ${this.selector_showExpiredCheckbox}`
      );
    }

    return await checkbox.isChecked();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Gets the full text content of the header section
   * @returns {Promise<string>} The header text content exactly as it appears
   * @throws {Error} When the header content is not accessible or null
   */
  async getHeaderText(): Promise<string> {
    await this.page.locator(this.selector_header).isVisible();
    const text = await this.page.locator(this.selector_header).textContent();

    if (text === null) {
      throw new Error(
        `RecurringEventsManagerContentPOM: Header text content is null. Selector: ${this.selector_header}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the title heading text from the header
   * @returns {Promise<string>} The header title text exactly as it appears
   * @throws {Error} When the header title content is not accessible or null
   */
  async getHeaderTitleText(): Promise<string> {
    await this.page.locator(this.selector_headerTitle).isVisible();
    const text = await this.page.locator(this.selector_headerTitle).textContent();

    if (text === null) {
      throw new Error(
        `RecurringEventsManagerContentPOM: Header title text content is null. Selector: ${this.selector_headerTitle}`
      );
    }

    return text;
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Clicks the create recurring rule button
   * Expected outcome is that the create recurring rule form or modal will open
   */
  async clickCreateRecurringRuleButton(): Promise<void> {
    await this.page.locator(this.selector_createRecurringRuleButton).click();
  }

  /**
   * @desc Clicks the show-expired toggle to change its state
   * Expected outcome is that the toggle state will change and the rules list will update
   */
  async clickShowExpiredToggle(): Promise<void> {
    await this.page.locator(this.selector_showExpiredToggle).click();
  }

  /**
   * @desc Clicks the retry button inside the error banner
   * Expected outcome is that the recurring rules fetch will be retried
   */
  async clickRetryButton(): Promise<void> {
    await this.page.locator(this.selector_retryButton).click();
  }

  /**
   * @desc Clicks the refresh button to manually refresh the rules list
   * Expected outcome is that the recurring rules list will be refreshed
   */
  async clickRefreshButton(): Promise<void> {
    await this.page.locator(this.selector_refreshButton).click();
  }

  /**
   * @desc Double-clicks a recurring rule card to trigger the edit callback
   * Expected outcome is that the edit form or modal for the rule will open
   * @param {string} ruleId - The ID of the recurring rule to edit
   */
  async doubleClickRecurringRuleCard(ruleId: string): Promise<void> {
    await this.page.locator(this.selector_recurringRuleCard(ruleId)).dblclick();
  }

  /**
   * @desc Scrolls within the rules list container
   * Expected outcome is that the list scrolls to reveal more rules
   * @param {number} deltaY - The vertical scroll distance in pixels (positive scrolls down)
   */
  async scrollRulesListContainer(deltaY: number): Promise<void> {
    await this.page
      .locator(this.selector_rulesListContainer)
      .evaluate(
        (el: HTMLElement, delta: number) => el.scrollBy({ top: delta, behavior: 'smooth' }),
        deltaY
      );
  }

  // ========================================================================
  // Confirmation Modal Methods
  // ========================================================================

  /**
   * @desc Dismisses the delete confirmation modal without deleting
   * Expected outcome is that the modal will close and no deletion will occur
   * @throws {Error} When the confirmation modal dismiss action cannot be performed
   */
  async dismissConfirmationModal(): Promise<void> {
    const cancelButton = this.page.getByRole('button', { name: /cancel/i });
    const isVisible = await cancelButton.isVisible();

    if (!isVisible) {
      throw new Error(
        'RecurringEventsManagerContentPOM: Cannot dismiss confirmation modal — cancel button is not visible.'
      );
    }

    await cancelButton.click();
  }

  /**
   * @desc Confirms the delete action in the confirmation modal
   * Expected outcome is that the rule will be deleted and the modal will close
   * @throws {Error} When the confirmation modal confirm action cannot be performed
   */
  async confirmConfirmationModal(): Promise<void> {
    const confirmButton = this.page.getByRole('button', { name: /delete/i });
    const isVisible = await confirmButton.isVisible();

    if (!isVisible) {
      throw new Error(
        'RecurringEventsManagerContentPOM: Cannot confirm deletion — confirm button is not visible.'
      );
    }

    await confirmButton.click();
  }
}