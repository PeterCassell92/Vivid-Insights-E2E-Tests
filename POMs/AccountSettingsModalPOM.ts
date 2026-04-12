/**
 * Page Object Model: AccountSettingsModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const AccountSettingsModalPOM_StandardSelector = '[data-testid="account-settings-modal-overlay"]';

export class AccountSettingsModalPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_modalOverlay: string;
  private readonly selector_accountSettingsTitle: string;
  private readonly selector_closeAccountSettingsButton: string;
  private readonly selector_toggleTransactionDeletion: string;
  private readonly selector_deleteAllTransactionsButton: string;
  private readonly selector_deleteBankAccountButton: string;
  private readonly selector_closeButton: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = AccountSettingsModalPOM_StandardSelector;

    this.selector_modalOverlay = AccountSettingsModalPOM_StandardSelector;
    this.selector_accountSettingsTitle = `${this.rootSelector} [data-testid="account-settings-title"]`;
    this.selector_closeAccountSettingsButton = `${this.rootSelector} [data-testid="close-account-settings"]`;
    this.selector_toggleTransactionDeletion = `${this.rootSelector} [data-testid="toggle-transaction-deletion"]`;
    this.selector_deleteAllTransactionsButton = `${this.rootSelector} [data-testid="delete-all-transactions-button"]`;
    this.selector_deleteBankAccountButton = `${this.rootSelector} [data-testid="delete-bank-account-button"]`;
    this.selector_closeButton = `${this.rootSelector} [data-testid="close-button"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the AccountSettingsModal overlay is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal overlay is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const overlay = page.locator(AccountSettingsModalPOM_StandardSelector);
      return await overlay.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns an AccountSettingsModalPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<AccountSettingsModalPOM>} AccountSettingsModalPOM instance
   * @throws {Error} When the account settings modal overlay is not visible
   */
  static async getPOM(page: Page): Promise<AccountSettingsModalPOM> {
    const isVisible = await AccountSettingsModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'AccountSettingsModalPOM: Cannot instantiate - modal overlay is not visible. ' +
        `Expected element [${AccountSettingsModalPOM_StandardSelector}] to be visible.`
      );
    }

    return new AccountSettingsModalPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Whether or not the modal overlay is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal overlay is visible
   */
  async isModalOverlayVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_modalOverlay, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the sticky footer bar containing the Close button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the footer close button is visible
   */
  async isModalFooterVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_closeButton, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the sticky header bar is visible within the modal
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal header (account settings title) is visible
   */
  async isModalHeaderVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_accountSettingsTitle, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the toggle transaction deletion button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the toggle is visible
   */
  async isToggleTransactionDeletionVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_toggleTransactionDeletion, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the Delete All Transactions button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the delete all transactions button is visible
   */
  async isDeleteAllTransactionsButtonVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_deleteAllTransactionsButton, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the Delete Bank Account button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the delete bank account button is visible
   */
  async isDeleteBankAccountButtonVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_deleteBankAccountButton, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Clicks the X button in the modal header to close the account settings modal
   * Expected outcome is that the modal will be dismissed
   */
  async clickCloseAccountSettingsButton(): Promise<void> {
    await this.page.locator(this.selector_closeAccountSettingsButton).click();
  }

  /**
   * @desc Clicks the Close button in the modal footer to close the account settings modal
   * Expected outcome is that the modal will be dismissed
   */
  async clickCloseButton(): Promise<void> {
    await this.page.locator(this.selector_closeButton).click();
  }

  /**
   * @desc Clicks the toggle to enable or disable transaction row deletion
   * Expected outcome is that the toggle state will be flipped
   */
  async clickToggleTransactionDeletion(): Promise<void> {
    await this.page.locator(this.selector_toggleTransactionDeletion).click();
  }

  /**
   * @desc Clicks the Delete Transactions button in the Danger Zone to trigger the confirmation dialog
   * Expected outcome is that the ConfirmationModal for deleting all transactions will appear
   */
  async clickDeleteAllTransactionsButton(): Promise<void> {
    await this.page.locator(this.selector_deleteAllTransactionsButton).click();
  }

  /**
   * @desc Clicks the Delete Account button in the Danger Zone to trigger the confirmation dialog
   * Expected outcome is that the ConfirmationModal for deleting the bank account will appear
   */
  async clickDeleteBankAccountButton(): Promise<void> {
    await this.page.locator(this.selector_deleteBankAccountButton).click();
  }

  /**
   * @desc Scrolls within the modal overlay container
   * @param {number} deltaY - The number of pixels to scroll vertically (positive scrolls down)
   */
  async scrollModalOverlay(deltaY: number): Promise<void> {
    await this.page.locator(this.selector_modalOverlay).evaluate(
      (el, delta) => el.scrollBy({ top: delta, behavior: 'smooth' }),
      deltaY
    );
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Gets the CSS class list of the modal overlay element
   * @returns {Promise<string>} The full className string of the modal overlay as it appears in the DOM
   * @throws {Error} When the modal overlay class attribute is not accessible or null
   */
  async getModalOverlayClassList(): Promise<string> {
    await this.page.waitForSelector(this.selector_modalOverlay, { state: 'visible' });
    const classList = await this.page.locator(this.selector_modalOverlay).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `AccountSettingsModalPOM: Modal overlay class attribute is null. Selector: ${this.selector_modalOverlay}`
      );
    }

    return classList;
  }

  /**
   * @desc Gets the text content of the account settings title in the modal header
   * @returns {Promise<string>} The title text exactly as it appears in the UI
   * @throws {Error} When the title text content is not accessible or null
   */
  async getAccountSettingsTitleText(): Promise<string> {
    await this.page.waitForSelector(this.selector_accountSettingsTitle, { state: 'visible' });
    const text = await this.page.locator(this.selector_accountSettingsTitle).textContent();

    if (text === null) {
      throw new Error(
        `AccountSettingsModalPOM: Account settings title text content is null. Selector: ${this.selector_accountSettingsTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the aria-checked or current visual state of the transaction deletion toggle
   * @returns {Promise<boolean>} True if the toggle is currently in the enabled (on) state
   * @throws {Error} When the toggle element is not accessible
   */
  async getToggleTransactionDeletionState(): Promise<boolean> {
    await this.page.waitForSelector(this.selector_toggleTransactionDeletion, { state: 'visible' });
    const classList = await this.page.locator(this.selector_toggleTransactionDeletion).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `AccountSettingsModalPOM: Toggle transaction deletion class attribute is null. Selector: ${this.selector_toggleTransactionDeletion}`
      );
    }

    return classList.includes('bg-blue-600');
  }
}