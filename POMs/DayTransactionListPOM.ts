/**
 * Page Object Model: DayTransactionList
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const DayTransactionListPOM_StandardSelector = '[data-testid="day-transactions-list"]';

export class DayTransactionListPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_listContainer: string;
  private readonly selector_errorContainer: string;
  private readonly selector_emptyContainer: string;
  private readonly selector_loadingContainer: string;
  private readonly selector_editorPanel: string;
  private readonly selector_cancelBtn: string;
  private readonly selector_saveBtn: string;
  private readonly selector_transactionCard: (index: number) => string;
  private readonly selector_spendingTypeToggle: (id: string) => string;
  private readonly selector_allTransactionCards: string;
  private readonly selector_allSpendingTypeToggles: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = DayTransactionListPOM_StandardSelector;

    // Static selectors
    this.selector_listContainer = this.rootSelector;
    this.selector_errorContainer = '[data-testid="day-transactions-error"]';
    this.selector_emptyContainer = '[data-testid="day-transactions-empty"]';
    this.selector_loadingContainer = '[data-testid="day-transactions-loading"]';
    this.selector_editorPanel = `${this.rootSelector} [data-testid="spending-type-editor"]`;
    this.selector_cancelBtn = `${this.rootSelector} [data-testid="spending-type-cancel"]`;
    this.selector_saveBtn = `${this.rootSelector} [data-testid="spending-type-save"]`;

    // Wildcard selectors for counting / listing all items
    this.selector_allTransactionCards = `${this.rootSelector} [data-testid^="day-transaction__"]`;
    this.selector_allSpendingTypeToggles = `${this.rootSelector} [data-testid^="spending-type-option-"]`;

    // Dynamic selector functions
    this.selector_transactionCard = (index: number) =>
      `${this.rootSelector} [data-testid="day-transaction__${index}"]`;

    this.selector_spendingTypeToggle = (id: string) =>
      `${this.rootSelector} [data-testid="spending-type-option-${id}"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the DayTransactionList component is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the list container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(DayTransactionListPOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a DayTransactionListPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<DayTransactionListPOM>} DayTransactionListPOM instance
   * @throws {Error} When the day transactions list container is not visible
   */
  static async getPOM(page: Page): Promise<DayTransactionListPOM> {
    const isVisible = await DayTransactionListPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'DayTransactionListPOM: Cannot instantiate - day transactions list is not visible. ' +
          `Expected element [${DayTransactionListPOM_StandardSelector}] to be visible.`
      );
    }

    return new DayTransactionListPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the root transaction list wrapper is visible — rendered when one or more transactions exist
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the list container is visible
   */
  async isListContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_listContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the error state container is visible — rendered exclusively when the transaction fetch fails
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the error container is visible
   */
  async isErrorContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_errorContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the empty state container is visible — rendered when the fetch succeeds but returns zero transactions
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the empty container is visible
   */
  async isEmptyContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_emptyContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the loading state container is visible — rendered exclusively while transactions are being fetched
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading container is visible
   */
  async isLoadingContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_loadingContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the inline spending-type editor panel is currently visible (i.e. a transaction row has been double-clicked)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the editor panel is visible
   */
  async isEditorPanelVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_editorPanel).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Cancel button is visible within the spending-type editor
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the Cancel button is visible
   */
  async isCancelButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_cancelBtn).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Save button is visible within the spending-type editor
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the Save button is visible
   */
  async isSaveButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_saveBtn).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Cancel button is enabled — it is disabled while a save operation is in progress
   * @returns {Promise<boolean>} True if the Cancel button is enabled
   */
  async isCancelButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_cancelBtn).isEnabled();
  }

  /**
   * @desc Check whether the Save button is enabled — it is disabled while a save operation is in progress
   * @returns {Promise<boolean>} True if the Save button is enabled
   */
  async isSaveButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_saveBtn).isEnabled();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Double-clicks a transaction row to open the inline spending-type editor (non-ZERO_EVENT transactions only)
   * Expected outcome is that the spending-type editor panel will become visible
   * @param {number} index - Zero-based index of the transaction row to double-click
   * @throws {Error} When the transaction card at the given index is not visible
   */
  async doubleClickTransactionCard(index: number): Promise<void> {
    const selector = this.selector_transactionCard(index);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `DayTransactionListPOM: Cannot double-click transaction card at index ${index} - element is not visible. Selector: ${selector}`
      );
    }

    await this.page.locator(selector).dblclick();
  }

  /**
   * @desc Clicks the Cancel button to discard spending-type changes and close the inline editor
   * Expected outcome is that the spending-type editor panel will close without saving
   * @throws {Error} When the Cancel button is not visible
   */
  async clickCancelButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_cancelBtn).isVisible();

    if (!isVisible) {
      throw new Error(
        `DayTransactionListPOM: Cannot click Cancel button - element is not visible. Selector: ${this.selector_cancelBtn}`
      );
    }

    await this.page.locator(this.selector_cancelBtn).click();
  }

  /**
   * @desc Clicks a spending-type toggle button to select or deselect that spending type for the transaction being edited
   * Expected outcome is that the spending type's selected state will be toggled
   * @param {string} id - The ID of the spending type to toggle
   * @throws {Error} When the spending-type toggle button with the given ID is not visible
   */
  async clickSpendingTypeToggle(id: string): Promise<void> {
    const selector = this.selector_spendingTypeToggle(id);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `DayTransactionListPOM: Cannot click spending-type toggle for id "${id}" - element is not visible. Selector: ${selector}`
      );
    }

    await this.page.locator(selector).click();
  }

  /**
   * @desc Clicks the Save button to submit the updated spending-type selection via PATCH
   * Expected outcome is that the spending types will be saved and the editor will close
   * @throws {Error} When the Save button is not visible
   */
  async clickSaveButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_saveBtn).isVisible();

    if (!isVisible) {
      throw new Error(
        `DayTransactionListPOM: Cannot click Save button - element is not visible. Selector: ${this.selector_saveBtn}`
      );
    }

    await this.page.locator(this.selector_saveBtn).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Extract the error message text displayed when the transaction fetch fails
   * @returns {Promise<string>} The error message text exactly as it appears in the UI
   * @throws {Error} When the error container content is not accessible or null
   */
  async getErrorContainerText(): Promise<string> {
    await this.page.locator(this.selector_errorContainer).isVisible();
    const text = await this.page.locator(this.selector_errorContainer).textContent();

    if (text === null) {
      throw new Error(
        `DayTransactionListPOM: Error container text content is null. Selector: ${this.selector_errorContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the empty state message text (e.g. 'No transactions recorded for this day')
   * @returns {Promise<string>} The empty state message text exactly as it appears in the UI
   * @throws {Error} When the empty container content is not accessible or null
   */
  async getEmptyContainerText(): Promise<string> {
    await this.page.locator(this.selector_emptyContainer).isVisible();
    const text = await this.page.locator(this.selector_emptyContainer).textContent();

    if (text === null) {
      throw new Error(
        `DayTransactionListPOM: Empty container text content is null. Selector: ${this.selector_emptyContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the loading message text (e.g. 'Loading transactions...') displayed while fetching
   * @returns {Promise<string>} The loading message text exactly as it appears in the UI
   * @throws {Error} When the loading container content is not accessible or null
   */
  async getLoadingContainerText(): Promise<string> {
    await this.page.locator(this.selector_loadingContainer).isVisible();
    const text = await this.page.locator(this.selector_loadingContainer).textContent();

    if (text === null) {
      throw new Error(
        `DayTransactionListPOM: Loading container text content is null. Selector: ${this.selector_loadingContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the full visible text content of a specific transaction row (description, amount, type badge, spending type labels, balance)
   * @param {number} index - Zero-based index of the transaction row
   * @returns {Promise<string>} The full text content of the transaction row exactly as it appears
   * @throws {Error} When the transaction card at the given index is not accessible or text content is null
   */
  async getTransactionCardText(index: number): Promise<string> {
    const selector = this.selector_transactionCard(index);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `DayTransactionListPOM: Transaction card text content is null at index ${index}. Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get a list of text content from all transaction rows to enumerate all transactions displayed for the day
   * @returns {Promise<string[]>} Array of text content strings from all transaction rows, exactly as they appear
   * @throws {Error} When text content for any transaction row is null
   */
  async getAllTransactionCardTexts(): Promise<string[]> {
    const locator = this.page.locator(this.selector_allTransactionCards);
    const count = await locator.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await locator.nth(i).textContent();

      if (text === null) {
        throw new Error(
          `DayTransactionListPOM: Transaction card text content is null at position ${i}. Selector: ${this.selector_allTransactionCards}`
        );
      }

      texts.push(text);
    }

    return texts;
  }

  /**
   * @desc Get the CSS class list of a transaction row to determine its current visual state (editing, ZERO_EVENT, default hover)
   * @param {number} index - Zero-based index of the transaction row
   * @returns {Promise<string>} The class attribute value of the transaction row
   * @throws {Error} When the transaction card at the given index is not accessible or has no class attribute
   */
  async getTransactionCardClassList(index: number): Promise<string> {
    const selector = this.selector_transactionCard(index);
    await this.page.locator(selector).isVisible();
    const classList = await this.page.locator(selector).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `DayTransactionListPOM: Transaction card class attribute is null at index ${index}. Selector: ${selector}`
      );
    }

    return classList;
  }

  /**
   * @desc Read the 'title' attribute of a transaction row — set to 'Double-click to edit spending types' when the row is not being edited and is not a ZERO_EVENT; undefined otherwise
   * @param {number} index - Zero-based index of the transaction row
   * @returns {Promise<string | null>} The title attribute value, or null if not present
   * @throws {Error} When the transaction card at the given index is not visible
   */
  async getTransactionCardTitleAttribute(index: number): Promise<string | null> {
    const selector = this.selector_transactionCard(index);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `DayTransactionListPOM: Transaction card at index ${index} is not visible. Selector: ${selector}`
      );
    }

    return await this.page.locator(selector).getAttribute('title');
  }

  /**
   * @desc Count the total number of transaction rows rendered in the list
   * @returns {Promise<number>} The number of transaction rows currently rendered
   */
  async getTransactionCardCount(): Promise<number> {
    return await this.page.locator(this.selector_allTransactionCards).count();
  }

  /**
   * @desc Extract the text content of the Cancel button (e.g. 'Cancel') to confirm its label
   * @returns {Promise<string>} The Cancel button text exactly as it appears
   * @throws {Error} When the Cancel button text content is not accessible or null
   */
  async getCancelButtonText(): Promise<string> {
    await this.page.locator(this.selector_cancelBtn).isVisible();
    const text = await this.page.locator(this.selector_cancelBtn).textContent();

    if (text === null) {
      throw new Error(
        `DayTransactionListPOM: Cancel button text content is null. Selector: ${this.selector_cancelBtn}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the text content of the Save button (e.g. 'Save') to confirm its label
   * @returns {Promise<string>} The Save button text exactly as it appears
   * @throws {Error} When the Save button text content is not accessible or null
   */
  async getSaveButtonText(): Promise<string> {
    await this.page.locator(this.selector_saveBtn).isVisible();
    const text = await this.page.locator(this.selector_saveBtn).textContent();

    if (text === null) {
      throw new Error(
        `DayTransactionListPOM: Save button text content is null. Selector: ${this.selector_saveBtn}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the label text of a specific spending-type toggle button
   * @param {string} id - The ID of the spending type
   * @returns {Promise<string>} The spending-type toggle button label text exactly as it appears
   * @throws {Error} When the spending-type toggle button text content is not accessible or null
   */
  async getSpendingTypeToggleText(id: string): Promise<string> {
    const selector = this.selector_spendingTypeToggle(id);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `DayTransactionListPOM: Spending-type toggle text content is null for id "${id}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Count the total number of available spending-type toggle buttons rendered inside the editor
   * @returns {Promise<number>} The number of spending-type toggle buttons currently rendered
   */
  async getSpendingTypeToggleCount(): Promise<number> {
    return await this.page.locator(this.selector_allSpendingTypeToggles).count();
  }

  /**
   * @desc Get a list of label texts from all spending-type toggle buttons to enumerate all available spending types
   * @returns {Promise<string[]>} Array of label text strings from all spending-type toggle buttons, exactly as they appear
   * @throws {Error} When text content for any spending-type toggle button is null
   */
  async getAllSpendingTypeToggleTexts(): Promise<string[]> {
    const locator = this.page.locator(this.selector_allSpendingTypeToggles);
    const count = await locator.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await locator.nth(i).textContent();

      if (text === null) {
        throw new Error(
          `DayTransactionListPOM: Spending-type toggle text content is null at position ${i}. Selector: ${this.selector_allSpendingTypeToggles}`
        );
      }

      texts.push(text);
    }

    return texts;
  }

  /**
   * @desc Get the CSS class list of a spending-type toggle button to determine whether it is currently selected (active styling vs. default)
   * @param {string} id - The ID of the spending type
   * @returns {Promise<string>} The class attribute value of the spending-type toggle button
   * @throws {Error} When the spending-type toggle button is not accessible or has no class attribute
   */
  async getSpendingTypeToggleClassList(id: string): Promise<string> {
    const selector = this.selector_spendingTypeToggle(id);
    await this.page.locator(selector).isVisible();
    const classList = await this.page.locator(selector).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `DayTransactionListPOM: Spending-type toggle class attribute is null for id "${id}". Selector: ${selector}`
      );
    }

    return classList;
  }

  /**
   * @desc Extract the inner HTML of the spending-type editor panel to inspect its full rendered content including toggle buttons and actions
   * @returns {Promise<string>} The inner HTML of the editor panel exactly as rendered
   * @throws {Error} When the editor panel inner HTML is not accessible or null
   */
  async getEditorPanelInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_editorPanel).isVisible();
    const innerHTML = await this.page.locator(this.selector_editorPanel).innerHTML();

    if (innerHTML === null) {
      throw new Error(
        `DayTransactionListPOM: Editor panel inner HTML is null. Selector: ${this.selector_editorPanel}`
      );
    }

    return innerHTML;
  }
}