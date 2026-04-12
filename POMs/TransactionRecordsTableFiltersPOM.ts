/**
 * Page Object Model: TransactionRecordsTableFilters
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const TransactionRecordsTableFiltersPOM_StandardSelector = '[data-testid="transaction-filters"]';

export class TransactionRecordsTableFiltersPOM {
  private readonly page: Page;

  // ============================================================
  // Selectors
  // ============================================================

  private readonly rootSelector: string;

  // Root
  private readonly selector_transactionFiltersContainer: string;

  // Collapse / header
  private readonly selector_collapseFiltersButton: string;
  private readonly selector_activeFiltersBadge: string;

  // Description filter section
  private readonly selector_showDescriptionFilterCheckbox: string;
  private readonly selector_descriptionFilterInput: string;

  // Date range filter section
  private readonly selector_showDateFilterCheckbox: string;
  private readonly selector_startDateFilterInput: string;
  private readonly selector_endDateFilterInput: string;

  // Spending type filter section
  private readonly selector_showSpendingTypeFilterCheckbox: string;
  private readonly selector_spendingTypeFilterPanel: string;
  private readonly selector_spendingTypeTag: (spendingTypeId: string) => string;

  // Amount filter section
  private readonly selector_showAmountFilterCheckbox: string;
  private readonly selector_amountOperatorGreaterThanButton: string;
  private readonly selector_amountOperatorLessThanButton: string;
  private readonly selector_amountValueFilterInput: string;

  // Action buttons
  private readonly selector_applyFiltersButton: string;
  private readonly selector_clearFiltersButton: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — single source of truth
    // ======================================================================

    this.rootSelector = TransactionRecordsTableFiltersPOM_StandardSelector;

    // Root container
    this.selector_transactionFiltersContainer = this.rootSelector;

    // Collapse / header
    this.selector_collapseFiltersButton = `${this.rootSelector} [data-testid="collapse-filters-button"]`;
    this.selector_activeFiltersBadge = `${this.rootSelector} span:has-text("Active")`;

    // Description filter section
    this.selector_showDescriptionFilterCheckbox = `${this.rootSelector} [data-testid="show-description-filter-checkbox"]`;
    this.selector_descriptionFilterInput = `${this.rootSelector} [data-testid="description-filter-input"]`;

    // Date range filter section
    this.selector_showDateFilterCheckbox = `${this.rootSelector} [data-testid="show-date-filter-checkbox"]`;
    this.selector_startDateFilterInput = `${this.rootSelector} [data-testid="start-date-filter-input"]`;
    this.selector_endDateFilterInput = `${this.rootSelector} [data-testid="end-date-filter-input"]`;

    // Spending type filter section
    this.selector_showSpendingTypeFilterCheckbox = `${this.rootSelector} [data-testid="show-spending-type-filter-checkbox"]`;
    this.selector_spendingTypeFilterPanel = `${this.rootSelector} div.p-3.bg-gray-50.rounded-md.border.border-gray-200`;
    this.selector_spendingTypeTag = (spendingTypeId: string) =>
      `${this.rootSelector} span.bg-blue-100.text-blue-800.rounded-full:has-text("${spendingTypeId}")`;

    // Amount filter section
    this.selector_showAmountFilterCheckbox = `${this.rootSelector} [data-testid="show-amount-filter-checkbox"]`;
    this.selector_amountOperatorGreaterThanButton = `${this.rootSelector} [data-testid="amount-operator-greater-than"]`;
    this.selector_amountOperatorLessThanButton = `${this.rootSelector} [data-testid="amount-operator-less-than"]`;
    this.selector_amountValueFilterInput = `${this.rootSelector} [data-testid="amount-value-filter-input"]`;

    // Action buttons
    this.selector_applyFiltersButton = `${this.rootSelector} [data-testid="apply-filters-button"]`;
    this.selector_clearFiltersButton = `${this.rootSelector} [data-testid="clear-filters-button"]`;
  }

  // ============================================================
  // Static Methods
  // ============================================================

  /**
   * @desc Checks if the transaction filters panel is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the filters panel root element is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page
        .locator(TransactionRecordsTableFiltersPOM_StandardSelector)
        .isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method — validates visibility then returns a POM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TransactionRecordsTableFiltersPOM>} A ready-to-use POM instance
   * @throws {Error} When the transaction filters panel is not visible
   */
  static async getPOM(page: Page): Promise<TransactionRecordsTableFiltersPOM> {
    const isVisible = await TransactionRecordsTableFiltersPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TransactionRecordsTableFiltersPOM: Cannot instantiate — filters panel is not visible. ' +
          `Expected element [${TransactionRecordsTableFiltersPOM_StandardSelector}] to be visible.`
      );
    }

    return new TransactionRecordsTableFiltersPOM(page);
  }

  // ============================================================
  // Visibility and State Methods
  // ============================================================

  /**
   * @desc Whether or not the root transaction filters container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the filters container is visible
   */
  async isTransactionFiltersContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_transactionFiltersContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the "Active" filters badge is visible, indicating at least one filter is applied
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the active filters badge is visible
   */
  async isActiveFiltersBadgeVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_activeFiltersBadge)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the description filter input is visible (i.e. the description section is expanded)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the description filter input is visible
   */
  async isDescriptionFilterInputVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_descriptionFilterInput)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the start date filter input is visible (i.e. the date range section is expanded)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the start date filter input is visible
   */
  async isStartDateFilterInputVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_startDateFilterInput)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the end date filter input is visible (i.e. the date range section is expanded)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the end date filter input is visible
   */
  async isEndDateFilterInputVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_endDateFilterInput)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the spending type filter panel is visible (i.e. the spending type section is expanded)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the spending type filter panel is visible
   */
  async isSpendingTypeFilterPanelVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_spendingTypeFilterPanel)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not a specific spending type tag is visible inside the spending type filter panel
   * @param {string} spendingTypeId - The spending type ID whose tag to check
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the spending type tag is visible
   */
  async isSpendingTypeTagVisible(
    spendingTypeId: string,
    timeout: number = 1500
  ): Promise<boolean> {
    return await this.page
      .locator(this.selector_spendingTypeTag(spendingTypeId))
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the amount value filter input is visible (i.e. the amount section is expanded)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the amount value filter input is visible
   */
  async isAmountValueFilterInputVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_amountValueFilterInput)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the show-description-filter checkbox is checked
   * @returns {Promise<boolean>} True if the checkbox is checked
   */
  async isShowDescriptionFilterCheckboxChecked(): Promise<boolean> {
    return await this.page
      .locator(this.selector_showDescriptionFilterCheckbox)
      .isChecked();
  }

  /**
   * @desc Whether or not the show-date-filter checkbox is checked
   * @returns {Promise<boolean>} True if the checkbox is checked
   */
  async isShowDateFilterCheckboxChecked(): Promise<boolean> {
    return await this.page
      .locator(this.selector_showDateFilterCheckbox)
      .isChecked();
  }

  /**
   * @desc Whether or not the show-spending-type-filter checkbox is checked
   * @returns {Promise<boolean>} True if the checkbox is checked
   */
  async isShowSpendingTypeFilterCheckboxChecked(): Promise<boolean> {
    return await this.page
      .locator(this.selector_showSpendingTypeFilterCheckbox)
      .isChecked();
  }

  /**
   * @desc Whether or not the show-amount-filter checkbox is checked
   * @returns {Promise<boolean>} True if the checkbox is checked
   */
  async isShowAmountFilterCheckboxChecked(): Promise<boolean> {
    return await this.page
      .locator(this.selector_showAmountFilterCheckbox)
      .isChecked();
  }

  // ============================================================
  // Action Methods — Collapse / Expand
  // ============================================================

  /**
   * @desc Clicks the collapse/expand toggle button on the filters panel header
   * Expected outcome is that the filters panel body will toggle between collapsed and expanded states
   */
  async clickCollapseFiltersButton(): Promise<void> {
    await this.page.locator(this.selector_collapseFiltersButton).click();
  }

  // ============================================================
  // Action Methods — Description Filter Section
  // ============================================================

  /**
   * @desc Clicks the show-description-filter checkbox to toggle the description filter section visibility
   * Expected outcome is that the description filter input will appear or disappear
   */
  async clickShowDescriptionFilterCheckbox(): Promise<void> {
    await this.page.locator(this.selector_showDescriptionFilterCheckbox).click();
  }

  /**
   * @desc Fills the description filter input with the given text
   * Expected outcome is that the description field value is updated
   * @param {string} description - The description text to filter by
   */
  async enterTextDescriptionFilterInput(description: string): Promise<void> {
    await this.page.locator(this.selector_descriptionFilterInput).fill(description);
  }

  /**
   * @desc Clears the description filter input
   * Expected outcome is that the description field is empty
   */
  async clearDescriptionFilterInput(): Promise<void> {
    await this.page.locator(this.selector_descriptionFilterInput).clear();
  }

  // ============================================================
  // Action Methods — Date Range Filter Section
  // ============================================================

  /**
   * @desc Clicks the show-date-filter checkbox to toggle the date range filter section visibility
   * Expected outcome is that the start and end date inputs will appear or disappear
   */
  async clickShowDateFilterCheckbox(): Promise<void> {
    await this.page.locator(this.selector_showDateFilterCheckbox).click();
  }

  /**
   * @desc Clicks the start date filter input to open the date picker
   * Expected outcome is that the DatePicker component will open
   */
  async clickStartDateFilterInput(): Promise<void> {
    await this.page.locator(this.selector_startDateFilterInput).click();
  }

  /**
   * @desc Clicks the end date filter input to open the date picker
   * Expected outcome is that the DatePicker component will open
   */
  async clickEndDateFilterInput(): Promise<void> {
    await this.page.locator(this.selector_endDateFilterInput).click();
  }

  // ============================================================
  // Action Methods — Spending Type Filter Section
  // ============================================================

  /**
   * @desc Clicks the show-spending-type-filter checkbox to toggle the spending type filter section visibility
   * Expected outcome is that the spending type filter panel will appear or disappear
   */
  async clickShowSpendingTypeFilterCheckbox(): Promise<void> {
    await this.page.locator(this.selector_showSpendingTypeFilterCheckbox).click();
  }

  // ============================================================
  // Action Methods — Amount Filter Section
  // ============================================================

  /**
   * @desc Clicks the show-amount-filter checkbox to toggle the amount filter section visibility
   * Expected outcome is that the amount operator buttons and value input will appear or disappear
   */
  async clickShowAmountFilterCheckbox(): Promise<void> {
    await this.page.locator(this.selector_showAmountFilterCheckbox).click();
  }

  /**
   * @desc Clicks the 'Greater Than' amount operator toggle button
   * Expected outcome is that the 'Greater Than' operator is selected (button variant becomes 'default')
   */
  async clickAmountOperatorGreaterThanButton(): Promise<void> {
    await this.page.locator(this.selector_amountOperatorGreaterThanButton).click();
  }

  /**
   * @desc Clicks the 'Less Than' amount operator toggle button
   * Expected outcome is that the 'Less Than' operator is selected (button variant becomes 'default')
   */
  async clickAmountOperatorLessThanButton(): Promise<void> {
    await this.page.locator(this.selector_amountOperatorLessThanButton).click();
  }

  /**
   * @desc Fills the amount value filter input with the given numeric value
   * Expected outcome is that the amount threshold field is updated
   * @param {string} amount - The amount value to filter by (e.g. '100.00')
   */
  async enterTextAmountValueFilterInput(amount: string): Promise<void> {
    await this.page.locator(this.selector_amountValueFilterInput).fill(amount);
  }

  /**
   * @desc Clears the amount value filter input
   * Expected outcome is that the amount threshold field is empty
   */
  async clearAmountValueFilterInput(): Promise<void> {
    await this.page.locator(this.selector_amountValueFilterInput).clear();
  }

  // ============================================================
  // Action Methods — Filter Action Buttons
  // ============================================================

  /**
   * @desc Clicks the 'Apply Filters' button to submit the active filter selections
   * Expected outcome is that the filters are applied and the transactions table is refreshed
   */
  async clickApplyFiltersButton(): Promise<void> {
    await this.page.locator(this.selector_applyFiltersButton).click();
  }

  /**
   * @desc Clicks the 'Clear' button to reset all filters and re-fetch unfiltered data
   * Expected outcome is that all filter inputs are reset and the transactions table shows unfiltered results
   */
  async clickClearFiltersButton(): Promise<void> {
    await this.page.locator(this.selector_clearFiltersButton).click();
  }

  // ============================================================
  // Data Retrieval Methods
  // ============================================================

  /**
   * @desc Gets the current value of the description filter input exactly as it appears in the UI
   * @returns {Promise<string>} The description filter input value
   * @throws {Error} When the description filter input value is not accessible
   */
  async getDescriptionFilterInputValue(): Promise<string> {
    await this.page.locator(this.selector_descriptionFilterInput).isVisible();
    const value = await this.page
      .locator(this.selector_descriptionFilterInput)
      .inputValue();

    if (value === null) {
      throw new Error(
        `TransactionRecordsTableFiltersPOM: Description filter input value is null. ` +
          `Selector: ${this.selector_descriptionFilterInput}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the current value of the amount value filter input exactly as it appears in the UI
   * @returns {Promise<string>} The amount value filter input value
   * @throws {Error} When the amount value filter input value is not accessible
   */
  async getAmountValueFilterInputValue(): Promise<string> {
    await this.page.locator(this.selector_amountValueFilterInput).isVisible();
    const value = await this.page
      .locator(this.selector_amountValueFilterInput)
      .inputValue();

    if (value === null) {
      throw new Error(
        `TransactionRecordsTableFiltersPOM: Amount value filter input value is null. ` +
          `Selector: ${this.selector_amountValueFilterInput}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the text content of the active filters badge exactly as it appears in the UI
   * @returns {Promise<string>} The badge text content
   * @throws {Error} When the active filters badge is not visible or its content is null
   */
  async getActiveFiltersBadgeText(): Promise<string> {
    await this.page.locator(this.selector_activeFiltersBadge).isVisible();
    const text = await this.page
      .locator(this.selector_activeFiltersBadge)
      .textContent();

    if (text === null) {
      throw new Error(
        `TransactionRecordsTableFiltersPOM: Active filters badge text content is null. ` +
          `Selector: ${this.selector_activeFiltersBadge}`
      );
    }

    return text;
  }

  /**
   * @desc Gets all visible spending type tag texts from the spending type filter panel
   * @returns {Promise<string[]>} Array of spending type tag text values exactly as they appear
   * @throws {Error} When the spending type filter panel is not visible
   */
  async getSpendingTypeTagTexts(): Promise<string[]> {
    await this.page.locator(this.selector_spendingTypeFilterPanel).isVisible();

    const tags = this.page.locator(
      `${this.selector_spendingTypeFilterPanel} span.bg-blue-100.text-blue-800.rounded-full`
    );

    const count = await tags.count();
    const results: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await tags.nth(i).textContent();
      if (text !== null) {
        results.push(text);
      }
    }

    return results;
  }
}