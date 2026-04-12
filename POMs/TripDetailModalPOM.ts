/**
 * Page Object Model: TripDetailModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const TripDetailModalPOM_StandardSelector = '[data-testid="trip-detail-modal"]';

export class TripDetailModalPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_modalContainer: string;
  private readonly selector_locationText: string;
  private readonly selector_editButton: string;
  private readonly selector_costSummaryContainer: string;
  private readonly selector_deleteButton: string;
  private readonly selector_datesText: string;
  private readonly selector_descriptionText: string;
  private readonly selector_budgetBreakdownContainer: string;
  private readonly selector_costCategoryRow: (categoryKey: string) => string;
  private readonly selector_budgetCategoryRow: (rowIndex: number) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = TripDetailModalPOM_StandardSelector;

    // Static selectors
    this.selector_modalContainer = this.rootSelector;
    this.selector_locationText = `${this.rootSelector} [data-testid="trip-detail-location"]`;
    this.selector_editButton = `${this.rootSelector} [data-testid="trip-detail-edit"]`;
    this.selector_costSummaryContainer = `${this.rootSelector} [data-testid="trip-cost-summary"]`;
    this.selector_deleteButton = `${this.rootSelector} [data-testid="trip-detail-delete"]`;
    this.selector_datesText = `${this.rootSelector} [data-testid="trip-detail-dates"]`;
    this.selector_descriptionText = `${this.rootSelector} [data-testid="trip-detail-description"]`;
    this.selector_budgetBreakdownContainer = `${this.rootSelector} [data-testid="trip-budget-breakdown"]`;

    // Dynamic selectors
    this.selector_costCategoryRow = (categoryKey: string) =>
      `${this.rootSelector} [data-testid="trip-cost-category-${categoryKey}"]`;

    this.selector_budgetCategoryRow = (rowIndex: number) =>
      `${this.rootSelector} [data-testid="trip-budget-breakdown"] .grid.grid-cols-2 > div:nth-child(${rowIndex})`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the TripDetailModal is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const modal = page.locator(TripDetailModalPOM_StandardSelector);
      return await modal.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a TripDetailModalPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TripDetailModalPOM>} A TripDetailModalPOM instance
   * @throws {Error} When the modal is not visible
   */
  static async getPOM(page: Page): Promise<TripDetailModalPOM> {
    const isVisible = await TripDetailModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TripDetailModalPOM: Cannot instantiate - modal is not visible. ' +
          `Expected element [${TripDetailModalPOM_StandardSelector}] to be visible.`
      );
    }

    return new TripDetailModalPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the TripDetailModal is currently visible/open
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  async isModalVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_modalContainer).isVisible();
  }

  /**
   * @desc Check whether the location paragraph is visible (only present in view mode, not edit mode)
   * @returns {Promise<boolean>} True if the location text element is visible
   */
  async isLocationVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_locationText).isVisible();
  }

  /**
   * @desc Check whether the Edit Trip button is visible (only rendered in view mode)
   * @returns {Promise<boolean>} True if the edit button is visible
   */
  async isEditButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_editButton).isVisible();
  }

  /**
   * @desc Check whether the Edit Trip button is enabled
   * @returns {Promise<boolean>} True if the edit button is enabled
   */
  async isEditButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_editButton).isEnabled();
  }

  /**
   * @desc Check whether the cost summary container is visible
   * @returns {Promise<boolean>} True if the cost summary container is visible
   */
  async isCostSummaryVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_costSummaryContainer).isVisible();
  }

  /**
   * @desc Check whether a specific cost category row is rendered
   * Only present when cat.costEstimate is not null or cat.actualCost > 0
   * @param {string} categoryKey - The category key (e.g. 'primary_travel', 'accommodation', 'activities', 'general')
   * @returns {Promise<boolean>} True if the cost category row is visible
   */
  async isCostCategoryRowVisible(categoryKey: string): Promise<boolean> {
    return await this.page.locator(this.selector_costCategoryRow(categoryKey)).isVisible();
  }

  /**
   * @desc Check whether the delete button is visible in view mode
   * @returns {Promise<boolean>} True if the delete button is visible
   */
  async isDeleteButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_deleteButton).isVisible();
  }

  /**
   * @desc Check whether the delete button is enabled (disabled while isDeleting is true)
   * @returns {Promise<boolean>} True if the delete button is enabled
   */
  async isDeleteButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_deleteButton).isEnabled();
  }

  /**
   * @desc Check whether the dates paragraph is visible in view mode
   * @returns {Promise<boolean>} True if the dates text element is visible
   */
  async isDatesVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_datesText).isVisible();
  }

  /**
   * @desc Check whether the description paragraph is rendered (conditionally present based on trip.description)
   * @returns {Promise<boolean>} True if the description text element is visible
   */
  async isDescriptionVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_descriptionText).isVisible();
  }

  /**
   * @desc Check whether the budget breakdown container is rendered (only present when totalBudget is not null)
   * @returns {Promise<boolean>} True if the budget breakdown container is visible
   */
  async isBudgetBreakdownVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_budgetBreakdownContainer).isVisible();
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Close/dismiss the TripDetailModal overlay
   * Expected outcome is that the modal will close
   */
  async clickDismiss(): Promise<void> {
    await this.page.locator(this.selector_modalContainer).press('Escape');
  }

  /**
   * @desc Click the Edit Trip button to switch the modal from view mode to edit mode, rendering the TripForm
   * Expected outcome is that the modal will switch to edit mode and TripForm will be rendered
   */
  async clickEditButton(): Promise<void> {
    await this.page.locator(this.selector_editButton).click();
  }

  /**
   * @desc Click the Delete Trip button to trigger handleDelete; disabled while isDeleting is true
   * Expected outcome is that the trip deletion flow will be initiated
   */
  async clickDeleteButton(): Promise<void> {
    await this.page.locator(this.selector_deleteButton).click();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Get the full inner HTML content of the modal container
   * @returns {Promise<string>} The inner HTML of the modal container
   * @throws {Error} When the modal container inner HTML is not accessible
   */
  async getModalInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_modalContainer).isVisible();
    const html = await this.page.locator(this.selector_modalContainer).innerHTML();

    if (html === null) {
      throw new Error(
        `TripDetailModalPOM: Modal container inner HTML is not accessible. Selector: ${this.selector_modalContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Get the trip location text displayed in view mode
   * @returns {Promise<string>} The location text exactly as it appears in the UI
   * @throws {Error} When the location text content is not accessible
   */
  async getLocationText(): Promise<string> {
    await this.page.locator(this.selector_locationText).isVisible();
    const text = await this.page.locator(this.selector_locationText).textContent();

    if (text === null) {
      throw new Error(
        `TripDetailModalPOM: Location text content is null. Selector: ${this.selector_locationText}`
      );
    }

    return text;
  }

  /**
   * @desc Get the label text of the edit button (always 'Edit Trip')
   * @returns {Promise<string>} The edit button label text exactly as it appears
   * @throws {Error} When the edit button text content is not accessible
   */
  async getEditButtonText(): Promise<string> {
    await this.page.locator(this.selector_editButton).isVisible();
    const text = await this.page.locator(this.selector_editButton).textContent();

    if (text === null) {
      throw new Error(
        `TripDetailModalPOM: Edit button text content is null. Selector: ${this.selector_editButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text content of a specific cost category row
   * (e.g. primary_travel, accommodation, activities, general) using the dynamic categoryKey parameter
   * @param {string} categoryKey - The category key identifying the row
   * @returns {Promise<string>} The cost category row text exactly as it appears
   * @throws {Error} When the cost category row text content is not accessible
   */
  async getCostCategoryRowText(categoryKey: string): Promise<string> {
    const selector = this.selector_costCategoryRow(categoryKey);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TripDetailModalPOM: Cost category row text content is null for key "${categoryKey}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the full text content of the cost summary section,
   * including loading state, populated summary, or empty state message
   * @returns {Promise<string>} The cost summary container text exactly as it appears
   * @throws {Error} When the cost summary container text content is not accessible
   */
  async getCostSummaryText(): Promise<string> {
    await this.page.locator(this.selector_costSummaryContainer).isVisible();
    const text = await this.page.locator(this.selector_costSummaryContainer).textContent();

    if (text === null) {
      throw new Error(
        `TripDetailModalPOM: Cost summary container text content is null. Selector: ${this.selector_costSummaryContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the inner HTML of the cost summary container to inspect all rendered cost data
   * @returns {Promise<string>} The inner HTML of the cost summary container
   * @throws {Error} When the cost summary container inner HTML is not accessible
   */
  async getCostSummaryInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_costSummaryContainer).isVisible();
    const html = await this.page.locator(this.selector_costSummaryContainer).innerHTML();

    if (html === null) {
      throw new Error(
        `TripDetailModalPOM: Cost summary container inner HTML is not accessible. Selector: ${this.selector_costSummaryContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Count the number of cost category rows currently rendered in the by-category breakdown table
   * @returns {Promise<number>} The count of rendered cost category rows
   */
  async getCostCategoryRowCount(): Promise<number> {
    return await this.page.locator(`${this.rootSelector} [data-testid^="trip-cost-category-"]`).count();
  }

  /**
   * @desc Read the 'disabled' HTML boolean attribute to determine if a deletion is currently in progress
   * @returns {Promise<string | null>} The value of the disabled attribute, or null if not present
   */
  async getDeleteButtonDisabledAttribute(): Promise<string | null> {
    return await this.page.locator(this.selector_deleteButton).getAttribute('disabled');
  }

  /**
   * @desc Get the label text of the delete button — 'Delete Trip' normally, 'Deleting...' while deletion is in progress
   * @returns {Promise<string>} The delete button label text exactly as it appears
   * @throws {Error} When the delete button text content is not accessible
   */
  async getDeleteButtonText(): Promise<string> {
    await this.page.locator(this.selector_deleteButton).isVisible();
    const text = await this.page.locator(this.selector_deleteButton).textContent();

    if (text === null) {
      throw new Error(
        `TripDetailModalPOM: Delete button text content is null. Selector: ${this.selector_deleteButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the formatted trip date range text (e.g. '01 Jan 2024 - 15 Jan 2024')
   * @returns {Promise<string>} The dates text exactly as it appears in the UI
   * @throws {Error} When the dates text content is not accessible
   */
  async getDatesText(): Promise<string> {
    await this.page.locator(this.selector_datesText).isVisible();
    const text = await this.page.locator(this.selector_datesText).textContent();

    if (text === null) {
      throw new Error(
        `TripDetailModalPOM: Dates text content is null. Selector: ${this.selector_datesText}`
      );
    }

    return text;
  }

  /**
   * @desc Get the trip description text; only present when trip.description is truthy
   * @returns {Promise<string>} The description text exactly as it appears in the UI
   * @throws {Error} When the description text content is not accessible
   */
  async getDescriptionText(): Promise<string> {
    await this.page.locator(this.selector_descriptionText).isVisible();
    const text = await this.page.locator(this.selector_descriptionText).textContent();

    if (text === null) {
      throw new Error(
        `TripDetailModalPOM: Description text content is null. Selector: ${this.selector_descriptionText}`
      );
    }

    return text;
  }

  /**
   * @desc Get the full text content of the budget breakdown section, including total and per-category values
   * @returns {Promise<string>} The budget breakdown container text exactly as it appears
   * @throws {Error} When the budget breakdown container text content is not accessible
   */
  async getBudgetBreakdownText(): Promise<string> {
    await this.page.locator(this.selector_budgetBreakdownContainer).isVisible();
    const text = await this.page.locator(this.selector_budgetBreakdownContainer).textContent();

    if (text === null) {
      throw new Error(
        `TripDetailModalPOM: Budget breakdown container text content is null. Selector: ${this.selector_budgetBreakdownContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the inner HTML of the budget breakdown container to inspect all rendered budget rows
   * @returns {Promise<string>} The inner HTML of the budget breakdown container
   * @throws {Error} When the budget breakdown container inner HTML is not accessible
   */
  async getBudgetBreakdownInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_budgetBreakdownContainer).isVisible();
    const html = await this.page.locator(this.selector_budgetBreakdownContainer).innerHTML();

    if (html === null) {
      throw new Error(
        `TripDetailModalPOM: Budget breakdown container inner HTML is not accessible. Selector: ${this.selector_budgetBreakdownContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Count the number of budget category rows rendered inside the breakdown grid
   * @returns {Promise<number>} The count of rendered budget category rows
   */
  async getBudgetCategoryRowCount(): Promise<number> {
    return await this.page
      .locator(`${this.rootSelector} [data-testid="trip-budget-breakdown"] .grid.grid-cols-2 > div`)
      .count();
  }

  /**
   * @desc Get the text content of a specific budget category row by its nth-child position within the grid
   * @param {number} rowIndex - The 1-based nth-child index of the budget category row
   * @returns {Promise<string>} The budget category row text exactly as it appears
   * @throws {Error} When the budget category row text content is not accessible
   */
  async getBudgetCategoryRowText(rowIndex: number): Promise<string> {
    const selector = this.selector_budgetCategoryRow(rowIndex);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TripDetailModalPOM: Budget category row text content is null for rowIndex ${rowIndex}. Selector: ${selector}`
      );
    }

    return text;
  }
}