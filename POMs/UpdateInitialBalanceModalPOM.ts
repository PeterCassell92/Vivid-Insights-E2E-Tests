/**
 * Page Object Model: UpdateInitialBalanceModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const UpdateInitialBalanceModalPOM_StandardSelector = '[data-testid="update-initial-balance-modal"]';

export class UpdateInitialBalanceModalPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_modalContainer: string;
  private readonly selector_welcomeMessage: string;
  private readonly selector_balanceForm: string;
  private readonly selector_modalTitle: string;
  private readonly selector_balanceInput: string;
  private readonly selector_cancelButton: string;
  private readonly selector_submitButton: string;
  private readonly selector_modalError: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = UpdateInitialBalanceModalPOM_StandardSelector;

    this.selector_modalContainer = this.rootSelector;
    this.selector_welcomeMessage = `${this.rootSelector} [data-testid="welcome-message"]`;
    this.selector_balanceForm = `${this.rootSelector} form`;
    this.selector_modalTitle = `${this.rootSelector} [data-testid="modal-title"]`;
    this.selector_balanceInput = `${this.rootSelector} [data-testid="balance-input"]`;
    this.selector_cancelButton = `${this.rootSelector} [data-testid="cancel-button"]`;
    this.selector_submitButton = `${this.rootSelector} [data-testid="submit-button"]`;
    this.selector_modalError = `${this.rootSelector} [data-testid="modal-error"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the UpdateInitialBalanceModal is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal container is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const modalContainer = page.locator(UpdateInitialBalanceModalPOM_StandardSelector);
      return await modalContainer.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates modal visibility and returns a POM instance
   * @param page - Playwright Page instance
   * @returns {Promise<UpdateInitialBalanceModalPOM>} A new UpdateInitialBalanceModalPOM instance
   * @throws {Error} When the modal container is not visible on screen
   */
  static async getPOM(page: Page): Promise<UpdateInitialBalanceModalPOM> {
    const isVisible = await UpdateInitialBalanceModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'UpdateInitialBalanceModalPOM: Cannot instantiate - modal is not visible. ' +
        `Expected element [${UpdateInitialBalanceModalPOM_StandardSelector}] to be visible.`
      );
    }

    return new UpdateInitialBalanceModalPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the modal container is currently visible/rendered on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  async isModalContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_modalContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the welcome message paragraph is visible — confirms welcomeMode=true is active
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the welcome message is visible
   */
  async isWelcomeMessageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_welcomeMessage).isVisible({ timeout });
  }

  /**
   * @desc Check whether the balance form is visible and rendered within the modal
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the balance form is visible
   */
  async isBalanceFormVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_balanceForm).isVisible({ timeout });
  }

  /**
   * @desc Check whether the modal title heading is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal title is visible
   */
  async isModalTitleVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_modalTitle).isVisible({ timeout });
  }

  /**
   * @desc Check whether the error message element is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the error message is visible
   */
  async isErrorMessageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_modalError).isVisible({ timeout });
  }

  /**
   * @desc Check whether the cancel button is visible — only present when welcomeMode=false
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the cancel button is visible
   */
  async isCancelButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_cancelButton).isVisible({ timeout });
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Dismiss/close the modal by clicking the cancel button
   * Expected outcome is that the modal will close via the onClose handler.
   * Only available when welcomeMode=false, as closeOnOverlayClick and showCloseButton are disabled in welcomeMode.
   * @throws {Error} When the cancel button is not visible (e.g. in welcomeMode)
   */
  async clickCancelButton(): Promise<void> {
    const isVisible = await this.isCancelButtonVisible();
    if (!isVisible) {
      throw new Error(
        `UpdateInitialBalanceModalPOM: Cannot click cancel button - it is not visible. ` +
        `This button is only available when welcomeMode=false. Selector: ${this.selector_cancelButton}`
      );
    }
    await this.page.locator(this.selector_cancelButton).click();
  }

  /**
   * @desc Enter a numeric value into the balance amount input field
   * Expected outcome is that the balance input will contain the provided value
   * @param {string} balance - The balance amount to enter (numeric string, e.g. "1500.00")
   * @throws {Error} When the balance input is not visible or accessible
   */
  async enterBalanceAmount(balance: string): Promise<void> {
    const isVisible = await this.page.locator(this.selector_balanceInput).isVisible();
    if (!isVisible) {
      throw new Error(
        `UpdateInitialBalanceModalPOM: Cannot enter balance - input is not visible. Selector: ${this.selector_balanceInput}`
      );
    }
    await this.page.locator(this.selector_balanceInput).fill(balance);
  }

  /**
   * @desc Submit the balance form by clicking the submit button
   * Expected outcome is that handleSubmit will be triggered, validating inputs and calling onUpdate with the balance number and formatted date string
   * @throws {Error} When the submit button is not visible or accessible
   */
  async clickSubmitButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_submitButton).isVisible();
    if (!isVisible) {
      throw new Error(
        `UpdateInitialBalanceModalPOM: Cannot click submit button - it is not visible. Selector: ${this.selector_submitButton}`
      );
    }
    await this.page.locator(this.selector_submitButton).click();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Get the data-testid attribute value from the root modal container
   * @returns {Promise<string>} The data-testid attribute value of the modal container
   * @throws {Error} When the modal container attribute is not accessible or null
   */
  async getModalContainerTestId(): Promise<string> {
    await this.page.locator(this.selector_modalContainer).isVisible();
    const value = await this.page.locator(this.selector_modalContainer).getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `UpdateInitialBalanceModalPOM: data-testid attribute is null on modal container. Selector: ${this.selector_modalContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Read the onboarding instructions paragraph text — only present when welcomeMode=true
   * @returns {Promise<string>} The welcome message text exactly as it appears in the UI
   * @throws {Error} When the welcome message element is not accessible or its content is null
   */
  async getWelcomeMessageText(): Promise<string> {
    await this.page.locator(this.selector_welcomeMessage).isVisible();
    const text = await this.page.locator(this.selector_welcomeMessage).textContent();

    if (text === null) {
      throw new Error(
        `UpdateInitialBalanceModalPOM: Welcome message text content is null. Selector: ${this.selector_welcomeMessage}`
      );
    }

    return text;
  }

  /**
   * @desc Get the full inner HTML of the form to inspect all child elements including inputs, error messages, and buttons
   * @returns {Promise<string>} The inner HTML of the balance form
   * @throws {Error} When the balance form is not accessible or its innerHTML is null
   */
  async getBalanceFormInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_balanceForm).isVisible();
    const html = await this.page.locator(this.selector_balanceForm).innerHTML();

    if (html === null) {
      throw new Error(
        `UpdateInitialBalanceModalPOM: Balance form innerHTML is null. Selector: ${this.selector_balanceForm}`
      );
    }

    return html;
  }

  /**
   * @desc Read the modal heading text — returns 'Welcome to Financial Projections!' in welcomeMode or 'Update Initial Bank Balance' in standard mode
   * @returns {Promise<string>} The modal title text exactly as it appears in the UI
   * @throws {Error} When the modal title element is not accessible or its content is null
   */
  async getModalTitleText(): Promise<string> {
    await this.page.locator(this.selector_modalTitle).isVisible();
    const text = await this.page.locator(this.selector_modalTitle).textContent();

    if (text === null) {
      throw new Error(
        `UpdateInitialBalanceModalPOM: Modal title text content is null. Selector: ${this.selector_modalTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Read the error message text currently displayed in the modal
   * @returns {Promise<string>} The error message text exactly as it appears in the UI
   * @throws {Error} When the error message element is not visible or its content is null
   */
  async getErrorMessageText(): Promise<string> {
    await this.page.locator(this.selector_modalError).isVisible();
    const text = await this.page.locator(this.selector_modalError).textContent();

    if (text === null) {
      throw new Error(
        `UpdateInitialBalanceModalPOM: Error message text content is null. Selector: ${this.selector_modalError}`
      );
    }

    return text;
  }

  /**
   * @desc Read the current text label of the submit button (e.g. 'Get Started', 'Update Balance', or 'Saving...')
   * @returns {Promise<string>} The submit button label text exactly as it appears in the UI
   * @throws {Error} When the submit button is not accessible or its content is null
   */
  async getSubmitButtonText(): Promise<string> {
    await this.page.locator(this.selector_submitButton).isVisible();
    const text = await this.page.locator(this.selector_submitButton).textContent();

    if (text === null) {
      throw new Error(
        `UpdateInitialBalanceModalPOM: Submit button text content is null. Selector: ${this.selector_submitButton}`
      );
    }

    return text;
  }
}