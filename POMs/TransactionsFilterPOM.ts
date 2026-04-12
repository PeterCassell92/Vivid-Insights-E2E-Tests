/**
 * Page Object Model: TransactionsFilter
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const TransactionsFilterPOM_StandardSelector = '[data-testid=transactions-filter]';

export class TransactionsFilterPOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===

  private readonly rootSelector: string;

  // Static selectors — transactionsFilter
  private readonly selector_filterContainer: string;
  private readonly selector_typeDropdown: string;
  private readonly selector_searchInput: string;
  private readonly selector_statusDropdown: string;
  private readonly selector_resetButton: string;
  private readonly selector_dateRangePickerStart: string;
  private readonly selector_applyButton: string;
  private readonly selector_dateRangePickerEnd: string;

  // Dynamic selectors — transactionsFilter
  private readonly selector_filterChip: (filterKey: string) => string;

  // Static selectors — filterChipList sub-component
  private readonly selector_filterChipListContainer: string;

  // Dynamic selectors — filterChipList sub-component
  private readonly selector_filterChipRemoveButton: (filterKey: string) => string;

  // Static selectors — dateRangePicker sub-component
  private readonly selector_dateRangePickerContainer: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = TransactionsFilterPOM_StandardSelector;

    // transactionsFilter — static
    this.selector_filterContainer = `${this.rootSelector}`;
    this.selector_typeDropdown = `${this.rootSelector} [data-testid='transactions-filter-type']`;
    this.selector_searchInput = `${this.rootSelector} [data-testid='transactions-filter-search']`;
    this.selector_statusDropdown = `${this.rootSelector} [data-testid='transactions-filter-status']`;
    this.selector_resetButton = `${this.rootSelector} [data-testid='transactions-filter-reset']`;
    this.selector_dateRangePickerStart = `${this.rootSelector} [data-testid='transactions-filter-date-start']`;
    this.selector_applyButton = `${this.rootSelector} [data-testid='transactions-filter-apply']`;
    this.selector_dateRangePickerEnd = `${this.rootSelector} [data-testid='transactions-filter-date-end']`;

    // transactionsFilter — dynamic
    this.selector_filterChip = (filterKey: string) =>
      `${this.rootSelector} [data-testid='transactions-filter-chip_${filterKey}']`;

    // filterChipList sub-component — static
    this.selector_filterChipListContainer = `${this.rootSelector} [data-testid='transactions-filter-chip-list']`;

    // filterChipList sub-component — dynamic
    this.selector_filterChipRemoveButton = (filterKey: string) =>
      `${this.rootSelector} [data-testid='transactions-filter-chip-remove_${filterKey}']`;

    // dateRangePicker sub-component — static
    this.selector_dateRangePickerContainer = `${this.rootSelector} [data-testid='transactions-filter-date-range']`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the TransactionsFilter component is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the filter container is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const filterContainer = page.locator(TransactionsFilterPOM_StandardSelector);
      return await filterContainer.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a TransactionsFilterPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TransactionsFilterPOM>} A TransactionsFilterPOM instance
   * @throws {Error} When the transactions filter container is not visible
   */
  static async getPOM(page: Page): Promise<TransactionsFilterPOM> {
    const isVisible = await TransactionsFilterPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TransactionsFilterPOM: Cannot instantiate - transactions filter is not visible. ' +
          `Expected element [${TransactionsFilterPOM_StandardSelector}] to be visible.`
      );
    }

    return new TransactionsFilterPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check if the main filter container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the filter container is visible
   */
  async isFilterContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_filterContainer).isVisible({ timeout });
  }

  /**
   * @desc Check if the apply button is enabled (i.e. filters have been changed and can be applied)
   * @returns {Promise<boolean>} True if the apply button is enabled
   */
  async isApplyButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_applyButton).isEnabled();
  }

  /**
   * @desc Check if the reset button is enabled (i.e. there are active filters to clear)
   * @returns {Promise<boolean>} True if the reset button is enabled
   */
  async isResetButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_resetButton).isEnabled();
  }

  /**
   * @desc Check if a specific active filter chip is visible by its filterKey
   * @param {string} filterKey - The key identifying the filter chip
   * @returns {Promise<boolean>} True if the filter chip is visible
   */
  async isFilterChipVisible(filterKey: string): Promise<boolean> {
    return await this.page.locator(this.selector_filterChip(filterKey)).isVisible();
  }

  /**
   * @desc Check if the filter chip list container is visible (i.e. there are active filters)
   * @returns {Promise<boolean>} True if the filter chip list container is visible
   */
  async isFilterChipListVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_filterChipListContainer).isVisible();
  }

  /**
   * @desc Check if the date range picker container is visible on screen
   * @returns {Promise<boolean>} True if the date range picker container is visible
   */
  async isDateRangePickerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_dateRangePickerContainer).isVisible();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc clicks the reset button to clear all active filters
   * Expected outcome is that all active filters will be cleared
   */
  async clickResetButton(): Promise<void> {
    await this.page.locator(this.selector_resetButton).click();
  }

  /**
   * @desc clicks the apply button to apply selected filters
   * Expected outcome is that the selected filters will be applied to the transactions list
   */
  async clickApplyButton(): Promise<void> {
    await this.page.locator(this.selector_applyButton).click();
  }

  /**
   * @desc clicks a specific active filter chip by its filterKey to interact with it
   * Expected outcome is that the filter chip will be interacted with
   * @param {string} filterKey - The key identifying the filter chip to click
   */
  async clickFilterChip(filterKey: string): Promise<void> {
    await this.page.locator(this.selector_filterChip(filterKey)).click();
  }

  /**
   * @desc clicks the remove/dismiss button on a specific active filter chip to remove that filter
   * Expected outcome is that the specified filter will be removed from the active filters
   * @param {string} filterKey - The key identifying the filter chip whose remove button should be clicked
   */
  async clickFilterChipRemoveButton(filterKey: string): Promise<void> {
    await this.page.locator(this.selector_filterChipRemoveButton(filterKey)).click();
  }

  /**
   * @desc Enter a start date into the date range start input
   * Expected outcome is that the start date field will be populated with the given value
   * @param {string} date - The start date value to enter
   */
  async fillDateRangePickerStart(date: string): Promise<void> {
    await this.page.locator(this.selector_dateRangePickerStart).fill(date);
  }

  /**
   * @desc Clear the start date input field
   * Expected outcome is that the start date field will be emptied
   */
  async clearDateRangePickerStart(): Promise<void> {
    await this.page.locator(this.selector_dateRangePickerStart).clear();
  }

  /**
   * @desc Enter an end date into the date range end input
   * Expected outcome is that the end date field will be populated with the given value
   * @param {string} date - The end date value to enter
   */
  async fillDateRangePickerEnd(date: string): Promise<void> {
    await this.page.locator(this.selector_dateRangePickerEnd).fill(date);
  }

  /**
   * @desc Clear the end date input field
   * Expected outcome is that the end date field will be emptied
   */
  async clearDateRangePickerEnd(): Promise<void> {
    await this.page.locator(this.selector_dateRangePickerEnd).clear();
  }

  /**
   * @desc Type a keyword into the search/filter text input
   * Expected outcome is that the search input will contain the provided keyword
   * @param {string} keyword - The keyword to enter into the search input
   */
  async fillSearchInput(keyword: string): Promise<void> {
    await this.page.locator(this.selector_searchInput).fill(keyword);
  }

  /**
   * @desc Clear the keyword search input field
   * Expected outcome is that the search input will be emptied
   */
  async clearSearchInput(): Promise<void> {
    await this.page.locator(this.selector_searchInput).clear();
  }

  /**
   * @desc Select a transaction type from the type dropdown filter
   * Expected outcome is that the type dropdown will reflect the selected value
   * @param {string} value - The option value to select from the type dropdown
   */
  async selectTypeDropdown(value: string): Promise<void> {
    await this.page.locator(this.selector_typeDropdown).selectOption(value);
  }

  /**
   * @desc Select a status from the status dropdown filter
   * Expected outcome is that the status dropdown will reflect the selected value
   * @param {string} value - The option value to select from the status dropdown
   */
  async selectStatusDropdown(value: string): Promise<void> {
    await this.page.locator(this.selector_statusDropdown).selectOption(value);
  }

  /**
   * @desc Scroll within the main filter container
   * Expected outcome is that the filter container will scroll to the specified position
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollFilterContainer(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_filterContainer).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  /**
   * @desc Scroll within the filter chip list container to view all active filter chips
   * Expected outcome is that the chip list will scroll to reveal additional chips
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollFilterChipList(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_filterChipListContainer).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the current value of the start date input
   * @returns {Promise<string>} The current value of the start date input exactly as it appears
   * @throws {Error} When the start date input value is not accessible
   */
  async getDateRangePickerStartValue(): Promise<string> {
    await this.page.locator(this.selector_dateRangePickerStart).isVisible();
    const value = await this.page.locator(this.selector_dateRangePickerStart).inputValue();

    if (value === null) {
      throw new Error(
        `TransactionsFilterPOM: Start date input value is not accessible. Selector: ${this.selector_dateRangePickerStart}`
      );
    }

    return value;
  }

  /**
   * @desc Get the current value of the end date input
   * @returns {Promise<string>} The current value of the end date input exactly as it appears
   * @throws {Error} When the end date input value is not accessible
   */
  async getDateRangePickerEndValue(): Promise<string> {
    await this.page.locator(this.selector_dateRangePickerEnd).isVisible();
    const value = await this.page.locator(this.selector_dateRangePickerEnd).inputValue();

    if (value === null) {
      throw new Error(
        `TransactionsFilterPOM: End date input value is not accessible. Selector: ${this.selector_dateRangePickerEnd}`
      );
    }

    return value;
  }

  /**
   * @desc Get the current text value entered in the keyword search input
   * @returns {Promise<string>} The current value of the search input exactly as it appears
   * @throws {Error} When the search input value is not accessible
   */
  async getSearchInputValue(): Promise<string> {
    await this.page.locator(this.selector_searchInput).isVisible();
    const value = await this.page.locator(this.selector_searchInput).inputValue();

    if (value === null) {
      throw new Error(
        `TransactionsFilterPOM: Search input value is not accessible. Selector: ${this.selector_searchInput}`
      );
    }

    return value;
  }

  /**
   * @desc Get the current value of the type dropdown filter
   * @returns {Promise<string>} The current selected value of the type dropdown exactly as it appears
   * @throws {Error} When the type dropdown value is not accessible
   */
  async getTypeDropdownValue(): Promise<string> {
    await this.page.locator(this.selector_typeDropdown).isVisible();
    const value = await this.page.locator(this.selector_typeDropdown).inputValue();

    if (value === null) {
      throw new Error(
        `TransactionsFilterPOM: Type dropdown value is not accessible. Selector: ${this.selector_typeDropdown}`
      );
    }

    return value;
  }

  /**
   * @desc Get the current value of the status dropdown filter
   * @returns {Promise<string>} The current selected value of the status dropdown exactly as it appears
   * @throws {Error} When the status dropdown value is not accessible
   */
  async getStatusDropdownValue(): Promise<string> {
    await this.page.locator(this.selector_statusDropdown).isVisible();
    const value = await this.page.locator(this.selector_statusDropdown).inputValue();

    if (value === null) {
      throw new Error(
        `TransactionsFilterPOM: Status dropdown value is not accessible. Selector: ${this.selector_statusDropdown}`
      );
    }

    return value;
  }

  /**
   * @desc Get the label text of a specific active filter chip by its filterKey
   * @param {string} filterKey - The key identifying the filter chip
   * @returns {Promise<string>} The text content of the filter chip exactly as it appears
   * @throws {Error} When the filter chip text content is null or not accessible
   */
  async getFilterChipText(filterKey: string): Promise<string> {
    const selector = this.selector_filterChip(filterKey);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsFilterPOM: Filter chip text content is null for filterKey "${filterKey}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the data-filter-count attribute to retrieve the number of currently active filters
   * @returns {Promise<string>} The value of the data-filter-count attribute
   * @throws {Error} When the data-filter-count attribute is not accessible
   */
  async getFilterCountAttribute(): Promise<string> {
    await this.page.locator(this.selector_filterContainer).isVisible();
    const value = await this.page
      .locator(this.selector_filterContainer)
      .getAttribute('data-filter-count');

    if (value === null) {
      throw new Error(
        `TransactionsFilterPOM: data-filter-count attribute is not accessible. Selector: ${this.selector_filterContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Get the data-filter-active attribute to determine if any filters are currently active
   * @returns {Promise<string>} The value of the data-filter-active attribute
   * @throws {Error} When the data-filter-active attribute is not accessible
   */
  async getFilterActiveAttribute(): Promise<string> {
    await this.page.locator(this.selector_filterContainer).isVisible();
    const value = await this.page
      .locator(this.selector_filterContainer)
      .getAttribute('data-filter-active');

    if (value === null) {
      throw new Error(
        `TransactionsFilterPOM: data-filter-active attribute is not accessible. Selector: ${this.selector_filterContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Get a list of all active filter chip label texts currently displayed
   * @returns {Promise<string[]>} An array of text content strings for each visible filter chip
   * @throws {Error} When the filter chip list container is not accessible
   */
  async getFilterChipListTexts(): Promise<string[]> {
    await this.page.locator(this.selector_filterChipListContainer).isVisible();
    const chips = this.page.locator(
      `${this.selector_filterChipListContainer} [data-testid^='transactions-filter-chip_']`
    );
    const count = await chips.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await chips.nth(i).textContent();
      texts.push(text ?? '');
    }

    return texts;
  }

  /**
   * @desc Count the total number of active filter chips currently displayed
   * @returns {Promise<number>} The number of active filter chips
   * @throws {Error} When the filter chip list container is not accessible
   */
  async getFilterChipCount(): Promise<number> {
    await this.page.locator(this.selector_filterChipListContainer).isVisible();
    const chips = this.page.locator(
      `${this.selector_filterChipListContainer} [data-testid^='transactions-filter-chip_']`
    );
    return await chips.count();
  }

  /**
   * @desc Get the full inner HTML of the filter chip list container to inspect all rendered chips
   * @returns {Promise<string>} The inner HTML of the filter chip list container
   * @throws {Error} When the filter chip list container inner HTML is not accessible
   */
  async getFilterChipListInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_filterChipListContainer).isVisible();
    const html = await this.page.locator(this.selector_filterChipListContainer).innerHTML();

    if (html === null) {
      throw new Error(
        `TransactionsFilterPOM: Filter chip list container inner HTML is not accessible. Selector: ${this.selector_filterChipListContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Get the position and dimensions of the date range picker container
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the date range picker container
   * @throws {Error} When the date range picker container bounding box is not accessible
   */
  async getDateRangePickerBoundingBox(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> {
    await this.page.locator(this.selector_dateRangePickerContainer).isVisible();
    const boundingBox = await this.page
      .locator(this.selector_dateRangePickerContainer)
      .boundingBox();

    if (boundingBox === null) {
      throw new Error(
        `TransactionsFilterPOM: Date range picker container bounding box is not accessible. Selector: ${this.selector_dateRangePickerContainer}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Get the data-start-date attribute reflecting the currently selected start date
   * @returns {Promise<string>} The value of the data-start-date attribute
   * @throws {Error} When the data-start-date attribute is not accessible
   */
  async getDateRangePickerStartDateAttribute(): Promise<string> {
    await this.page.locator(this.selector_dateRangePickerContainer).isVisible();
    const value = await this.page
      .locator(this.selector_dateRangePickerContainer)
      .getAttribute('data-start-date');

    if (value === null) {
      throw new Error(
        `TransactionsFilterPOM: data-start-date attribute is not accessible. Selector: ${this.selector_dateRangePickerContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Get the data-end-date attribute reflecting the currently selected end date
   * @returns {Promise<string>} The value of the data-end-date attribute
   * @throws {Error} When the data-end-date attribute is not accessible
   */
  async getDateRangePickerEndDateAttribute(): Promise<string> {
    await this.page.locator(this.selector_dateRangePickerContainer).isVisible();
    const value = await this.page
      .locator(this.selector_dateRangePickerContainer)
      .getAttribute('data-end-date');

    if (value === null) {
      throw new Error(
        `TransactionsFilterPOM: data-end-date attribute is not accessible. Selector: ${this.selector_dateRangePickerContainer}`
      );
    }

    return value;
  }
}