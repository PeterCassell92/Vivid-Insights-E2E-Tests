/**
 * Page Object Model: ReprocessCSVsStepper
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ReprocessCSVsStepperPOM_StandardSelector = '.space-y-6';

export class ReprocessCSVsStepperPOM {
  private readonly page: Page;

  // ============================================================
  // Selectors
  // ============================================================

  private readonly rootSelector: string;

  // stepperWrapper
  private readonly selector_stepperWrapper: string;

  // selectAccountStep
  private readonly selector_selectAccountStep: string;
  private readonly selector_operationsList: string;
  private readonly selector_proceedButton: string;
  private readonly selector_bankAccountSelect: string;
  private readonly selector_accountSelector: string;
  private readonly selector_noOperationsNotice: string;
  private readonly selector_bankAccountSelectItem: (accountId: string) => string;
  private readonly selector_operationRow: (index: number) => string;

  // validateFilesStep
  private readonly selector_validateFilesStep: string;
  private readonly selector_validateLoadingIndicator: string;
  private readonly selector_backButton: string;
  private readonly selector_validateList: string;
  private readonly selector_startButton: string;
  private readonly selector_validateCheckbox: (index: number) => string;
  private readonly selector_validateStatus: (index: number) => string;
  private readonly selector_validateRow: (index: number) => string;
  private readonly selector_validateError: (index: number) => string;

  // processStep
  private readonly selector_processStep: string;
  private readonly selector_startOverButton: string;
  private readonly selector_summary: string;
  private readonly selector_preserveStatus: string;
  private readonly selector_cleanupStatus: string;
  private readonly selector_progressList: string;
  private readonly selector_viewTransactionsButton: string;
  private readonly selector_progressRow: (index: number) => string;

  constructor(page: Page) {
    this.page = page;

    // ============================================================
    // Selector Definitions
    // ============================================================

    this.rootSelector = ReprocessCSVsStepperPOM_StandardSelector;

    // stepperWrapper
    this.selector_stepperWrapper = `${this.rootSelector}`;

    // selectAccountStep — Step 1 panel is .bg-white.rounded-lg scoped within root
    this.selector_selectAccountStep = `${this.rootSelector} .bg-white.rounded-lg`;
    this.selector_operationsList = `${this.rootSelector} [data-testid="reprocess-operations-list"]`;
    this.selector_proceedButton = `${this.rootSelector} [data-testid="reprocess-proceed-button"]`;
    this.selector_bankAccountSelect = `${this.rootSelector} #reprocess-bank-account`;
    this.selector_accountSelector = `${this.rootSelector} [data-testid="reprocess-account-selector"]`;
    this.selector_noOperationsNotice = `${this.rootSelector} [data-testid="reprocess-no-operations"]`;
    this.selector_bankAccountSelectItem = (accountId: string) =>
      `[data-value="${accountId}"]`;
    this.selector_operationRow = (index: number) =>
      `${this.rootSelector} [data-testid="reprocess-operation-row__${index}"]`;

    // validateFilesStep — Step 2 panel
    this.selector_validateFilesStep = `${this.rootSelector} .bg-white.rounded-lg`;
    this.selector_validateLoadingIndicator = `${this.rootSelector} [data-testid="reprocess-validate-loading"]`;
    this.selector_backButton = `${this.rootSelector} [data-testid="reprocess-back-button"]`;
    this.selector_validateList = `${this.rootSelector} [data-testid="reprocess-validate-list"]`;
    this.selector_startButton = `${this.rootSelector} [data-testid="reprocess-start-button"]`;
    this.selector_validateCheckbox = (index: number) =>
      `${this.rootSelector} [data-testid="reprocess-validate-checkbox__${index}"]`;
    this.selector_validateStatus = (index: number) =>
      `${this.rootSelector} [data-testid="reprocess-validate-status__${index}"]`;
    this.selector_validateRow = (index: number) =>
      `${this.rootSelector} [data-testid="reprocess-validate-row__${index}"]`;
    this.selector_validateError = (index: number) =>
      `${this.rootSelector} [data-testid="reprocess-validate-error__${index}"]`;

    // processStep — Step 3 panel
    this.selector_processStep = `${this.rootSelector} .bg-white.rounded-lg`;
    this.selector_startOverButton = `${this.rootSelector} [data-testid="reprocess-start-over-button"]`;
    this.selector_summary = `${this.rootSelector} [data-testid="reprocess-summary"]`;
    this.selector_preserveStatus = `${this.rootSelector} [data-testid="reprocess-preserve-status"]`;
    this.selector_cleanupStatus = `${this.rootSelector} [data-testid="reprocess-cleanup-status"]`;
    this.selector_progressList = `${this.rootSelector} [data-testid="reprocess-progress-list"]`;
    this.selector_viewTransactionsButton = `${this.rootSelector} [data-testid="reprocess-view-transactions-button"]`;
    this.selector_progressRow = (index: number) =>
      `${this.rootSelector} [data-testid="reprocess-progress-row__${index}"]`;
  }

  // ============================================================
  // STATIC METHODS
  // ============================================================

  /**
   * @desc Checks if the ReprocessCSVsStepper root container is visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the stepper wrapper is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(ReprocessCSVsStepperPOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method — validates visibility then returns a ReprocessCSVsStepperPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<ReprocessCSVsStepperPOM>} POM instance
   * @throws {Error} When the stepper root container is not visible
   */
  static async getPOM(page: Page): Promise<ReprocessCSVsStepperPOM> {
    const isVisible = await ReprocessCSVsStepperPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ReprocessCSVsStepperPOM: Cannot instantiate — stepper is not visible. ' +
          `Expected element [${ReprocessCSVsStepperPOM_StandardSelector}] to be visible.`
      );
    }

    return new ReprocessCSVsStepperPOM(page);
  }

  // ============================================================
  // VISIBILITY AND STATE METHODS
  // ============================================================

  /**
   * @desc Check whether the root stepper container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the stepper wrapper is visible
   */
  async isStepperWrapperVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_stepperWrapper).isVisible({ timeout });
  }

  /**
   * @desc Check whether Step 1 (Select Bank Account) panel is currently rendered/visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the select account step panel is visible
   */
  async isSelectAccountStepVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_selectAccountStep).isVisible({ timeout });
  }

  /**
   * @desc Check whether Step 2 (Verify Files) panel is currently rendered/visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the validate files step panel is visible
   */
  async isValidateFilesStepVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_validateFilesStep).isVisible({ timeout });
  }

  /**
   * @desc Check whether Step 3 (Reprocess) panel is currently rendered/visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the process step panel is visible
   */
  async isProcessStepVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_processStep).isVisible({ timeout });
  }

  /**
   * @desc Check whether the validate loading spinner is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the validation loading indicator is visible
   */
  async isValidateLoadingIndicatorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_validateLoadingIndicator).isVisible({ timeout });
  }

  /**
   * @desc Check whether the no-operations notice is visible (shown when account has no upload operations)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the no-operations notice is visible
   */
  async isNoOperationsNoticeVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_noOperationsNotice).isVisible({ timeout });
  }

  /**
   * @desc Check whether the operations list is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the operations list is visible
   */
  async isOperationsListVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_operationsList).isVisible({ timeout });
  }

  /**
   * @desc Check whether the summary grid is visible (shown after processing completes)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the summary is visible
   */
  async isSummaryVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_summary).isVisible({ timeout });
  }

  /**
   * @desc Check whether a specific validate row is visible
   * @param {number} index - 0-based index of the validate row
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the validate row is visible
   */
  async isValidateRowVisible(index: number, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_validateRow(index)).isVisible({ timeout });
  }

  /**
   * @desc Check whether a specific validate error is visible
   * @param {number} index - 0-based index of the validate row
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the validate error text is visible
   */
  async isValidateErrorVisible(index: number, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_validateError(index)).isVisible({ timeout });
  }

  /**
   * @desc Check whether a specific progress row is visible
   * @param {number} index - 0-based index of the progress row
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the progress row is visible
   */
  async isProgressRowVisible(index: number, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_progressRow(index)).isVisible({ timeout });
  }

  // ============================================================
  // ACTION METHODS — Step 1: Select Account
  // ============================================================

  /**
   * @desc Clicks the bank account SelectTrigger to open the dropdown
   * Expected outcome is that the bank account dropdown opens
   */
  async clickBankAccountSelect(): Promise<void> {
    await this.page.locator(this.selector_bankAccountSelect).click();
  }

  /**
   * @desc Clicks a specific bank account SelectItem in the dropdown by account ID
   * Expected outcome is that the account is selected and operations are loaded
   * @param {string} accountId - The ID of the bank account to select
   */
  async clickBankAccountSelectItem(accountId: string): Promise<void> {
    await this.page.locator(this.selector_bankAccountSelectItem(accountId)).click();
  }

  /**
   * @desc Clicks the Proceed button to advance to the Validate Files step
   * Expected outcome is that the stepper advances to Step 2
   * @throws {Error} When the Proceed button is not visible
   */
  async clickProceedButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_proceedButton).isVisible();
    if (!isVisible) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Proceed button is not visible. Selector: ${this.selector_proceedButton}`
      );
    }
    await this.page.locator(this.selector_proceedButton).click();
  }

  // ============================================================
  // ACTION METHODS — Step 2: Validate Files
  // ============================================================

  /**
   * @desc Clicks the Back button to return to the Select Account step
   * Expected outcome is that the stepper returns to Step 1
   * @throws {Error} When the Back button is not visible
   */
  async clickBackButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_backButton).isVisible();
    if (!isVisible) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Back button is not visible. Selector: ${this.selector_backButton}`
      );
    }
    await this.page.locator(this.selector_backButton).click();
  }

  /**
   * @desc Clicks the Start (Reprocess N Files) button to advance to the Process step
   * Expected outcome is that the stepper advances to Step 3
   * @throws {Error} When the Start button is not visible
   */
  async clickStartButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_startButton).isVisible();
    if (!isVisible) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Start button is not visible. Selector: ${this.selector_startButton}`
      );
    }
    await this.page.locator(this.selector_startButton).click();
  }

  /**
   * @desc Clicks the checkbox for a specific validate row to include/exclude it from reprocessing
   * Expected outcome is that the file's inclusion state is toggled
   * @param {number} index - 0-based index of the validate row
   * @throws {Error} When the checkbox is not visible
   */
  async clickValidateCheckbox(index: number): Promise<void> {
    const selector = this.selector_validateCheckbox(index);
    const isVisible = await this.page.locator(selector).isVisible();
    if (!isVisible) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Validate checkbox at index ${index} is not visible. Selector: ${selector}`
      );
    }
    await this.page.locator(selector).click();
  }

  // ============================================================
  // ACTION METHODS — Step 3: Process
  // ============================================================

  /**
   * @desc Clicks the Start Over button to reset the stepper back to Step 1
   * Expected outcome is that the stepper resets to the Select Account step
   * @throws {Error} When the Start Over button is not visible
   */
  async clickStartOverButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_startOverButton).isVisible();
    if (!isVisible) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Start Over button is not visible. Selector: ${this.selector_startOverButton}`
      );
    }
    await this.page.locator(this.selector_startOverButton).click();
  }

  /**
   * @desc Clicks the View Transactions button shown after processing completes
   * Expected outcome is that the onComplete callback fires and the view transitions
   * @throws {Error} When the View Transactions button is not visible
   */
  async clickViewTransactionsButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_viewTransactionsButton).isVisible();
    if (!isVisible) {
      throw new Error(
        `ReprocessCSVsStepperPOM: View Transactions button is not visible. Selector: ${this.selector_viewTransactionsButton}`
      );
    }
    await this.page.locator(this.selector_viewTransactionsButton).click();
  }

  // ============================================================
  // DATA RETRIEVAL METHODS
  // ============================================================

  /**
   * @desc Get the full inner HTML of the Step 1 (Select Bank Account) panel for content inspection
   * @returns {Promise<string>} The inner HTML of the select account step panel
   * @throws {Error} When the select account step panel content is not accessible
   */
  async getSelectAccountStepInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_selectAccountStep).isVisible();
    const html = await this.page.locator(this.selector_selectAccountStep).innerHTML();
    if (html === null) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Inner HTML of select account step is null. Selector: ${this.selector_selectAccountStep}`
      );
    }
    return html;
  }

  /**
   * @desc Get the text content of the process step panel (e.g. heading 'Reprocessing...' vs 'Reprocessing Complete')
   * @returns {Promise<string>} The text content of the process step panel
   * @throws {Error} When the process step panel text content is not accessible
   */
  async getProcessStepText(): Promise<string> {
    await this.page.locator(this.selector_processStep).isVisible();
    const text = await this.page.locator(this.selector_processStep).textContent();
    if (text === null) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Text content of process step is null. Selector: ${this.selector_processStep}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of the preserve status indicator
   * @returns {Promise<string>} The text content of the preserve status element
   * @throws {Error} When the preserve status content is not accessible
   */
  async getPreserveStatusText(): Promise<string> {
    await this.page.locator(this.selector_preserveStatus).isVisible();
    const text = await this.page.locator(this.selector_preserveStatus).textContent();
    if (text === null) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Preserve status text content is null. Selector: ${this.selector_preserveStatus}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of the cleanup status indicator
   * @returns {Promise<string>} The text content of the cleanup status element
   * @throws {Error} When the cleanup status content is not accessible
   */
  async getCleanupStatusText(): Promise<string> {
    await this.page.locator(this.selector_cleanupStatus).isVisible();
    const text = await this.page.locator(this.selector_cleanupStatus).textContent();
    if (text === null) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Cleanup status text content is null. Selector: ${this.selector_cleanupStatus}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of the summary grid shown after processing completes
   * @returns {Promise<string>} The text content of the summary element
   * @throws {Error} When the summary content is not accessible
   */
  async getSummaryText(): Promise<string> {
    await this.page.locator(this.selector_summary).isVisible();
    const text = await this.page.locator(this.selector_summary).textContent();
    if (text === null) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Summary text content is null. Selector: ${this.selector_summary}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of a specific operation row in the operations list
   * @param {number} index - 0-based index of the operation row
   * @returns {Promise<string>} The text content of the operation row
   * @throws {Error} When the operation row content is not accessible
   */
  async getOperationRowText(index: number): Promise<string> {
    const selector = this.selector_operationRow(index);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();
    if (text === null) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Operation row text at index ${index} is null. Selector: ${selector}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of a specific validate row
   * @param {number} index - 0-based index of the validate row
   * @returns {Promise<string>} The text content of the validate row
   * @throws {Error} When the validate row content is not accessible
   */
  async getValidateRowText(index: number): Promise<string> {
    const selector = this.selector_validateRow(index);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();
    if (text === null) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Validate row text at index ${index} is null. Selector: ${selector}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the error text for a specific invalid validate row
   * @param {number} index - 0-based index of the validate row
   * @returns {Promise<string>} The error text content
   * @throws {Error} When the validate error content is not accessible
   */
  async getValidateErrorText(index: number): Promise<string> {
    const selector = this.selector_validateError(index);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();
    if (text === null) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Validate error text at index ${index} is null. Selector: ${selector}`
      );
    }
    return text;
  }

  /**
   * @desc Gets the text content of a specific progress row in the process step
   * @param {number} index - 0-based index of the progress row
   * @returns {Promise<string>} The text content of the progress row
   * @throws {Error} When the progress row content is not accessible
   */
  async getProgressRowText(index: number): Promise<string> {
    const selector = this.selector_progressRow(index);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();
    if (text === null) {
      throw new Error(
        `ReprocessCSVsStepperPOM: Progress row text at index ${index} is null. Selector: ${selector}`
      );
    }
    return text;
  }

  /**
   * @desc Checks whether a specific validate checkbox is checked
   * @param {number} index - 0-based index of the validate row
   * @returns {Promise<boolean>} True if the checkbox is checked
   */
  async isValidateCheckboxChecked(index: number): Promise<boolean> {
    return await this.page.locator(this.selector_validateCheckbox(index)).isChecked();
  }

  /**
   * @desc Checks whether a specific validate checkbox is disabled
   * @param {number} index - 0-based index of the validate row
   * @returns {Promise<boolean>} True if the checkbox is disabled
   */
  async isValidateCheckboxDisabled(index: number): Promise<boolean> {
    return await this.page.locator(this.selector_validateCheckbox(index)).isDisabled();
  }

  /**
   * @desc Checks whether the Proceed button is enabled
   * @returns {Promise<boolean>} True if the Proceed button is enabled
   */
  async isProceedButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_proceedButton).isEnabled();
  }

  /**
   * @desc Checks whether the Start (Reprocess N Files) button is enabled
   * @returns {Promise<boolean>} True if the Start button is enabled
   */
  async isStartButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_startButton).isEnabled();
  }
}