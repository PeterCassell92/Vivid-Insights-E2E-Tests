/**
 * Page Object Model: AccountSetupModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const AccountSetupModalPOM_StandardSelector = '[data-testid="account-setup-modal"]';

export class AccountSetupModalPOM {
  private readonly page: Page;

  // === SELECTORS ===
  private readonly rootSelector: string;
  private readonly selector_modalContainer: string;
  private readonly selector_stepIndicator: string;
  private readonly selector_step1Panel: string;
  private readonly selector_step2Panel: string;
  private readonly selector_accountSelect: string;
  private readonly selector_manageLink: string;
  private readonly selector_importLink: string;
  private readonly selector_continueButton: string;
  private readonly selector_backButton: string;
  private readonly selector_loadTransactionsLink: string;
  private readonly selector_accountSelectItem: (accountId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = AccountSetupModalPOM_StandardSelector;
    this.selector_modalContainer = this.rootSelector;
    this.selector_stepIndicator = `${this.rootSelector} [data-testid="account-setup-steps"]`;
    this.selector_step1Panel = `${this.rootSelector} [data-testid="account-setup-step-1"]`;
    this.selector_step2Panel = `${this.rootSelector} [data-testid="account-setup-step-2"]`;
    this.selector_accountSelect = `${this.rootSelector} [data-testid="account-setup-select"]`;
    this.selector_manageLink = `${this.rootSelector} [data-testid="account-setup-manage-link"]`;
    this.selector_importLink = `${this.rootSelector} [data-testid="account-setup-import-link"]`;
    this.selector_continueButton = `${this.rootSelector} [data-testid="account-setup-continue"]`;
    this.selector_backButton = `${this.rootSelector} [data-testid="account-setup-back"]`;
    this.selector_loadTransactionsLink = `${this.rootSelector} [data-testid="account-setup-load-transactions"]`;

    // Dynamic selectors
    this.selector_accountSelectItem = (accountId: string) =>
      `${this.rootSelector} [data-value="${accountId}"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the AccountSetupModal is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal root container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const modal = page.locator(AccountSetupModalPOM_StandardSelector);
      return await modal.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates modal visibility and returns a POM instance
   * @param page - Playwright Page instance
   * @returns {Promise<AccountSetupModalPOM>} AccountSetupModalPOM instance
   * @throws {Error} When the modal root container is not visible
   */
  static async getPOM(page: Page): Promise<AccountSetupModalPOM> {
    const isVisible = await AccountSetupModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'AccountSetupModalPOM: Cannot instantiate - modal is not visible. ' +
          `Expected element [${AccountSetupModalPOM_StandardSelector}] to be visible.`
      );
    }

    return new AccountSetupModalPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the AccountSetupModal root container is currently visible/open
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  async isModalContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_modalContainer).isVisible();
  }

  /**
   * @desc Check whether the step 1 panel is currently rendered (i.e. step === 1)
   * @returns {Promise<boolean>} True if the step 1 panel is visible
   */
  async isStep1PanelVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_step1Panel).isVisible();
  }

  /**
   * @desc Check whether the step 2 panel is currently rendered (i.e. step === 2)
   * @returns {Promise<boolean>} True if the step 2 panel is visible
   */
  async isStep2PanelVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_step2Panel).isVisible();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the full inner HTML of the modal container to inspect all rendered content
   * @returns {Promise<string>} The inner HTML of the modal container
   * @throws {Error} When the modal container inner HTML is not accessible or null
   */
  async getModalContainerInnerHtml(): Promise<string> {
    await this.page.isVisible(this.selector_modalContainer);
    const html = await this.page.innerHTML(this.selector_modalContainer);

    if (html === null) {
      throw new Error(
        `AccountSetupModalPOM: Modal container inner HTML is not accessible. Selector: ${this.selector_modalContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Get the inner HTML of the step indicator to inspect step circle states (active/complete) and connector styling
   * @returns {Promise<string>} The inner HTML of the step indicator
   * @throws {Error} When the step indicator inner HTML is not accessible or null
   */
  async getStepIndicatorInnerHtml(): Promise<string> {
    await this.page.isVisible(this.selector_stepIndicator);
    const html = await this.page.innerHTML(this.selector_stepIndicator);

    if (html === null) {
      throw new Error(
        `AccountSetupModalPOM: Step indicator inner HTML is not accessible. Selector: ${this.selector_stepIndicator}`
      );
    }

    return html;
  }

  /**
   * @desc Read the step indicator text to determine which step labels and step numbers are currently displayed
   * @returns {Promise<string>} The text content of the step indicator exactly as it appears
   * @throws {Error} When the step indicator text content is not accessible or null
   */
  async getStepIndicatorText(): Promise<string> {
    await this.page.isVisible(this.selector_stepIndicator);
    const text = await this.page.textContent(this.selector_stepIndicator);

    if (text === null) {
      throw new Error(
        `AccountSetupModalPOM: Step indicator text content is null. Selector: ${this.selector_stepIndicator}`
      );
    }

    return text;
  }

  /**
   * @desc Get the inner HTML of the step 2 panel to inspect the full coverage verification UI state
   * @returns {Promise<string>} The inner HTML of the step 2 panel
   * @throws {Error} When the step 2 panel inner HTML is not accessible or null
   */
  async getStep2PanelInnerHtml(): Promise<string> {
    await this.page.isVisible(this.selector_step2Panel);
    const html = await this.page.innerHTML(this.selector_step2Panel);

    if (html === null) {
      throw new Error(
        `AccountSetupModalPOM: Step 2 panel inner HTML is not accessible. Selector: ${this.selector_step2Panel}`
      );
    }

    return html;
  }

  /**
   * @desc Read all visible text content within the step 2 panel (coverage checking state, error messages, etc.)
   * @returns {Promise<string>} The text content of the step 2 panel exactly as it appears
   * @throws {Error} When the step 2 panel text content is not accessible or null
   */
  async getStep2PanelText(): Promise<string> {
    await this.page.isVisible(this.selector_step2Panel);
    const text = await this.page.textContent(this.selector_step2Panel);

    if (text === null) {
      throw new Error(
        `AccountSetupModalPOM: Step 2 panel text content is null. Selector: ${this.selector_step2Panel}`
      );
    }

    return text;
  }

  /**
   * @desc Read all visible text content within the step 1 panel
   * @returns {Promise<string>} The text content of the step 1 panel exactly as it appears
   * @throws {Error} When the step 1 panel text content is not accessible or null
   */
  async getStep1PanelText(): Promise<string> {
    await this.page.isVisible(this.selector_step1Panel);
    const text = await this.page.textContent(this.selector_step1Panel);

    if (text === null) {
      throw new Error(
        `AccountSetupModalPOM: Step 1 panel text content is null. Selector: ${this.selector_step1Panel}`
      );
    }

    return text;
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the account selector dropdown trigger to open the account list
   * Expected outcome is that the dropdown opens and account options become visible
   */
  async clickAccountSelect(): Promise<void> {
    await this.page.locator(this.selector_accountSelect).click();
  }

  /**
   * @desc Clicks a specific account item in the dropdown by its accountId data-value attribute
   * Expected outcome is that the account is selected and the dropdown closes
   * @param {string} accountId - The ID of the bank account to select
   */
  async clickAccountSelectItem(accountId: string): Promise<void> {
    await this.page.locator(this.selector_accountSelectItem(accountId)).click();
  }

  /**
   * @desc Clicks the Continue button to advance from step 1 to step 2
   * Expected outcome is that the modal transitions to step 2 (transaction coverage verification)
   * @throws {Error} When the Continue button is not visible or not clickable
   */
  async clickContinueButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_continueButton).isVisible();

    if (!isVisible) {
      throw new Error(
        `AccountSetupModalPOM: Cannot click Continue button - element is not visible. Selector: ${this.selector_continueButton}`
      );
    }

    await this.page.locator(this.selector_continueButton).click();
  }

  /**
   * @desc Clicks the Back button in step 2 to return to step 1
   * Expected outcome is that the modal transitions back to step 1 (account selection)
   * @throws {Error} When the Back button is not visible
   */
  async clickBackButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_backButton).isVisible();

    if (!isVisible) {
      throw new Error(
        `AccountSetupModalPOM: Cannot click Back button - element is not visible. Selector: ${this.selector_backButton}`
      );
    }

    await this.page.locator(this.selector_backButton).click();
  }

  /**
   * @desc Clicks the Import Bank Statements link (shown when no accounts exist in step 1)
   * Expected outcome is that the browser navigates to /bank-records
   * @throws {Error} When the import link is not visible
   */
  async clickImportLink(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_importLink).isVisible();

    if (!isVisible) {
      throw new Error(
        `AccountSetupModalPOM: Cannot click Import Bank Statements link - element is not visible. Selector: ${this.selector_importLink}`
      );
    }

    await this.page.locator(this.selector_importLink).click();
  }

  /**
   * @desc Clicks the manage/import bank statements link in step 1 (shown alongside the account selector)
   * Expected outcome is that the browser navigates to /bank-records
   * @throws {Error} When the manage link is not visible
   */
  async clickManageLink(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_manageLink).isVisible();

    if (!isVisible) {
      throw new Error(
        `AccountSetupModalPOM: Cannot click manage link - element is not visible. Selector: ${this.selector_manageLink}`
      );
    }

    await this.page.locator(this.selector_manageLink).click();
  }

  /**
   * @desc Clicks the Load Transactions link in step 2 (shown when no transaction history is found)
   * Expected outcome is that the browser navigates to /bank-records
   * @throws {Error} When the Load Transactions link is not visible
   */
  async clickLoadTransactionsLink(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_loadTransactionsLink).isVisible();

    if (!isVisible) {
      throw new Error(
        `AccountSetupModalPOM: Cannot click Load Transactions link - element is not visible. Selector: ${this.selector_loadTransactionsLink}`
      );
    }

    await this.page.locator(this.selector_loadTransactionsLink).click();
  }
}