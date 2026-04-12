/**
 * Page Object Model: TransactionsPagination
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const TransactionsPaginationPOM_StandardSelector = '[data-testid=transactions-pagination]';

export class TransactionsPaginationPOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===
  private readonly rootSelector: string;
  private readonly selector_paginationContainer: string;
  private readonly selector_previousPageButton: string;
  private readonly selector_nextPageButton: string;
  private readonly selector_pageButtonsListContainer: string;
  private readonly selector_pageButton: (pageNumber: number | string) => string;
  private readonly selector_pageButtonItem: (pageNumber: number | string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = TransactionsPaginationPOM_StandardSelector;

    // Static selectors
    this.selector_paginationContainer = `${this.rootSelector}[data-testid='transactions-pagination']`;
    this.selector_previousPageButton = `${this.rootSelector} [data-testid='previous-page-button']`;
    this.selector_nextPageButton = `${this.rootSelector} [data-testid='next-page-button']`;
    this.selector_pageButtonsListContainer = `${this.rootSelector} [data-testid='page-buttons-list']`;

    // Dynamic selectors
    this.selector_pageButton = (pageNumber: number | string) =>
      `${this.rootSelector} [data-testid='page-button-${pageNumber}']`;

    this.selector_pageButtonItem = (pageNumber: number | string) =>
      `${this.rootSelector} [data-testid='page-button-item-${pageNumber}']`;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the TransactionsPagination component is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the pagination container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const container = page.locator(TransactionsPaginationPOM_StandardSelector);
      return await container.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a TransactionsPaginationPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TransactionsPaginationPOM>} A TransactionsPaginationPOM instance
   * @throws {Error} When the pagination container is not visible
   */
  static async getPOM(page: Page): Promise<TransactionsPaginationPOM> {
    const isVisible = await TransactionsPaginationPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TransactionsPaginationPOM: Cannot instantiate - pagination container is not visible. ' +
        `Expected element [${TransactionsPaginationPOM_StandardSelector}] to be visible.`
      );
    }

    return new TransactionsPaginationPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Check if the pagination container is visible on screen
   * @returns {Promise<boolean>} True if the pagination container is visible
   */
  async isPaginationContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_paginationContainer).isVisible();
  }

  /**
   * @desc Check if the previous page button is enabled (not disabled, i.e. not on the first page)
   * @returns {Promise<boolean>} True if the previous page button is enabled
   */
  async isPreviousPageButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_previousPageButton).isEnabled();
  }

  /**
   * @desc Check if the next page button is enabled (not disabled, i.e. not on the last page)
   * @returns {Promise<boolean>} True if the next page button is enabled
   */
  async isNextPageButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_nextPageButton).isEnabled();
  }

  /**
   * @desc Check if a specific page number button is visible in the pagination
   * @param {number | string} pageNumber - The page number to check
   * @returns {Promise<boolean>} True if the page button is visible
   */
  async isPageButtonVisible(pageNumber: number | string): Promise<boolean> {
    return await this.page.locator(this.selector_pageButton(pageNumber)).isVisible();
  }

  /**
   * @desc Check if the page buttons list container is visible
   * @returns {Promise<boolean>} True if the page buttons list container is visible
   */
  async isPageButtonsListContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_pageButtonsListContainer).isVisible();
  }

  /**
   * @desc Check if a specific page number list item is visible
   * @param {number | string} pageNumber - The page number to check
   * @returns {Promise<boolean>} True if the page button item is visible
   */
  async isPageButtonItemVisible(pageNumber: number | string): Promise<boolean> {
    return await this.page.locator(this.selector_pageButtonItem(pageNumber)).isVisible();
  }

  // === ACTION METHODS ===

  /**
   * @desc clicks the previous page button to navigate to the previous page of transactions
   * Expected outcome is that the transactions list will update to show the previous page
   * @throws {Error} When the previous page button is not visible
   */
  async clickPreviousPageButton(): Promise<void> {
    await this.page.isVisible(this.selector_previousPageButton);
    await this.page.locator(this.selector_previousPageButton).click();
  }

  /**
   * @desc clicks the next page button to navigate to the next page of transactions
   * Expected outcome is that the transactions list will update to show the next page
   * @throws {Error} When the next page button is not visible
   */
  async clickNextPageButton(): Promise<void> {
    await this.page.isVisible(this.selector_nextPageButton);
    await this.page.locator(this.selector_nextPageButton).click();
  }

  /**
   * @desc clicks a specific page number button to navigate directly to that page
   * Expected outcome is that the transactions list will update to show the selected page
   * @param {number | string} pageNumber - The page number to navigate to
   * @throws {Error} When the specified page button is not visible
   */
  async clickPageButton(pageNumber: number | string): Promise<void> {
    const selector = this.selector_pageButton(pageNumber);
    await this.page.isVisible(selector);
    await this.page.locator(selector).click();
  }

  /**
   * @desc clicks an individual page number list item to navigate to that page
   * Expected outcome is that the transactions list will update to show the selected page
   * @param {number | string} pageNumber - The page number list item to click
   * @throws {Error} When the specified page button item is not visible
   */
  async clickPageButtonItem(pageNumber: number | string): Promise<void> {
    const selector = this.selector_pageButtonItem(pageNumber);
    await this.page.isVisible(selector);
    await this.page.locator(selector).click();
  }

  /**
   * @desc Scroll within the page buttons list container if it overflows
   * Expected outcome is that additional page number buttons become visible
   * @param {number} deltaX - Horizontal scroll distance in pixels
   * @param {number} deltaY - Vertical scroll distance in pixels
   * @throws {Error} When the page buttons list container is not visible
   */
  async scrollPageButtonsList(deltaX: number, deltaY: number): Promise<void> {
    await this.page.isVisible(this.selector_pageButtonsListContainer);
    await this.page.locator(this.selector_pageButtonsListContainer).evaluate(
      (el, { dx, dy }) => el.scrollBy(dx, dy),
      { dx: deltaX, dy: deltaY }
    );
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Get the total number of pages available from the data-total-pages attribute
   * @returns {Promise<string>} The total pages value exactly as it appears in the attribute
   * @throws {Error} When the data-total-pages attribute is not accessible or null
   */
  async getTotalPages(): Promise<string> {
    await this.page.isVisible(this.selector_paginationContainer);
    const value = await this.page.locator(this.selector_paginationContainer).getAttribute('data-total-pages');

    if (value === null) {
      throw new Error(
        `TransactionsPaginationPOM: data-total-pages attribute is null. ` +
        `Selector: ${this.selector_paginationContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Get the currently active page number from the data-current-page attribute
   * @returns {Promise<string>} The current page value exactly as it appears in the attribute
   * @throws {Error} When the data-current-page attribute is not accessible or null
   */
  async getCurrentPage(): Promise<string> {
    await this.page.isVisible(this.selector_paginationContainer);
    const value = await this.page.locator(this.selector_paginationContainer).getAttribute('data-current-page');

    if (value === null) {
      throw new Error(
        `TransactionsPaginationPOM: data-current-page attribute is null. ` +
        `Selector: ${this.selector_paginationContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Get the visible text content of the previous page button (e.g. label or arrow symbol)
   * @returns {Promise<string>} The text content exactly as it appears
   * @throws {Error} When the previous page button text content is not accessible or null
   */
  async getPreviousPageButtonText(): Promise<string> {
    await this.page.isVisible(this.selector_previousPageButton);
    const text = await this.page.locator(this.selector_previousPageButton).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsPaginationPOM: Previous page button text content is null. ` +
        `Selector: ${this.selector_previousPageButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text content of the next page button (e.g. label or arrow symbol)
   * @returns {Promise<string>} The text content exactly as it appears
   * @throws {Error} When the next page button text content is not accessible or null
   */
  async getNextPageButtonText(): Promise<string> {
    await this.page.isVisible(this.selector_nextPageButton);
    const text = await this.page.locator(this.selector_nextPageButton).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsPaginationPOM: Next page button text content is null. ` +
        `Selector: ${this.selector_nextPageButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text of a specific page number button
   * @param {number | string} pageNumber - The page number button to read
   * @returns {Promise<string>} The text content exactly as it appears
   * @throws {Error} When the page button text content is not accessible or null
   */
  async getPageButtonText(pageNumber: number | string): Promise<string> {
    const selector = this.selector_pageButton(pageNumber);
    await this.page.isVisible(selector);
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsPaginationPOM: Page button text content is null for page "${pageNumber}". ` +
        `Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the CSS class list of a specific page number button to determine if it is the active/selected page
   * @param {number | string} pageNumber - The page number button to inspect
   * @returns {Promise<string>} The class attribute value exactly as it appears
   * @throws {Error} When the page button class attribute is not accessible or null
   */
  async getPageButtonClassList(pageNumber: number | string): Promise<string> {
    const selector = this.selector_pageButton(pageNumber);
    await this.page.isVisible(selector);
    const classList = await this.page.locator(selector).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `TransactionsPaginationPOM: Page button class attribute is null for page "${pageNumber}". ` +
        `Selector: ${selector}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the text content of a specific page number list item
   * @param {number | string} pageNumber - The page number list item to read
   * @returns {Promise<string>} The text content exactly as it appears
   * @throws {Error} When the page button item text content is not accessible or null
   */
  async getPageButtonItemText(pageNumber: number | string): Promise<string> {
    const selector = this.selector_pageButtonItem(pageNumber);
    await this.page.isVisible(selector);
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TransactionsPaginationPOM: Page button item text content is null for page "${pageNumber}". ` +
        `Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the CSS class list of a specific page number list item to determine active/selected state
   * @param {number | string} pageNumber - The page number list item to inspect
   * @returns {Promise<string>} The class attribute value exactly as it appears
   * @throws {Error} When the page button item class attribute is not accessible or null
   */
  async getPageButtonItemClassList(pageNumber: number | string): Promise<string> {
    const selector = this.selector_pageButtonItem(pageNumber);
    await this.page.isVisible(selector);
    const classList = await this.page.locator(selector).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `TransactionsPaginationPOM: Page button item class attribute is null for page "${pageNumber}". ` +
        `Selector: ${selector}`
      );
    }

    return classList;
  }

  /**
   * @desc Count the total number of page number buttons currently rendered in the list
   * @returns {Promise<number>} The count of rendered page button items
   */
  async countPageButtonItems(): Promise<number> {
    return await this.page.locator(`${this.selector_pageButtonsListContainer} [data-testid^='page-button-item-']`).count();
  }

  /**
   * @desc Get the full inner HTML of the page buttons list container to inspect all rendered page items
   * @returns {Promise<string>} The inner HTML of the page buttons list container
   * @throws {Error} When the page buttons list container is not visible
   */
  async getPageButtonsListInnerHtml(): Promise<string> {
    await this.page.isVisible(this.selector_pageButtonsListContainer);
    return await this.page.locator(this.selector_pageButtonsListContainer).innerHTML();
  }

  /**
   * @desc Get a list of all visible page number labels from the page buttons list
   * @returns {Promise<string[]>} Array of page number label strings as they appear in the UI
   */
  async getPageButtonsListLabels(): Promise<string[]> {
    await this.page.isVisible(this.selector_pageButtonsListContainer);
    const items = this.page.locator(`${this.selector_pageButtonsListContainer} [data-testid^='page-button-item-']`);
    const count = await items.count();
    const labels: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await items.nth(i).textContent();
      if (text !== null) {
        labels.push(text);
      }
    }

    return labels;
  }
}