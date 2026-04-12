/**
 * Page Object Model: CSVUploadStepper
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const CSVUploadStepperPOM_StandardSelector = '.space-y-6';

export class CSVUploadStepperPOM {
  private readonly page: Page;

  // === ROOT SELECTOR ===
  private readonly rootSelector: string;

  // === progressBar selectors ===
  private readonly selector_progressBar: string;
  private readonly selector_stepIndicator: (stepId: string) => string;

  // === validityCheckStep selectors ===
  private readonly selector_validityCheckStep: string;
  private readonly selector_validityErrorBanner: string;
  private readonly selector_checkValidityButton: string;
  private readonly selector_csvFileInput: string;

  // === uploadStep selectors ===
  private readonly selector_uploadStep: string;
  private readonly selector_uploadFurtherCsvButton: string;
  private readonly selector_uploadErrorBanner: string;
  private readonly selector_uploadSuccessPanel: string;
  private readonly selector_uploadingSpinner: string;
  private readonly selector_viewTransactionRecordsButton: string;

  // === confirmStep selectors ===
  private readonly selector_confirmStep: string;
  private readonly selector_noConflictBanner: string;
  private readonly selector_overlapWarningBanner: string;
  private readonly selector_confirmSummaryPanel: string;
  private readonly selector_backToStartButtonConfirm: string;
  private readonly selector_continueUploadButton: string;

  // === selectBankAccountStep selectors ===
  private readonly selector_selectBankAccountStep: string;
  private readonly selector_detectedFormatBanner: string;
  private readonly selector_accountSelectionErrorBanner: string;
  private readonly selector_csvSummaryPanel: string;
  private readonly selector_addNewAccountButton: string;
  private readonly selector_newAccountForm: string;
  private readonly selector_newAccountNameInput: string;
  private readonly selector_newSortCodeInput: string;
  private readonly selector_newAccountNumberInput: string;
  private readonly selector_cancelNewAccountButton: string;
  private readonly selector_createAccountButton: string;
  private readonly selector_backToStartButtonAccountStep: string;
  private readonly selector_selectAccountButton: (accountId: string) => string;

  // === stepperWrapper selectors ===
  private readonly selector_stepperWrapper: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = CSVUploadStepperPOM_StandardSelector;

    // progressBar
    this.selector_progressBar = `${this.rootSelector} .flex.items-center.justify-between.mb-8`;
    this.selector_stepIndicator = (stepId: string) =>
      `${this.rootSelector} [data-testid="step-indicator_${stepId}"]`;

    // validityCheckStep
    this.selector_validityCheckStep = `${this.rootSelector} .bg-white.rounded-lg.shadow.p-6:has(h2:text("Upload CSV File"))`;
    this.selector_validityErrorBanner = `${this.selector_validityCheckStep} .bg-red-50.border.border-red-200.rounded-lg`;
    this.selector_checkValidityButton = `${this.rootSelector} [data-testid="check-validity-button"]`;
    this.selector_csvFileInput = `${this.rootSelector} [data-testid="csv-file-input"]`;

    // uploadStep
    this.selector_uploadStep = `${this.rootSelector} .bg-white.rounded-lg.shadow.p-6:has([data-testid="upload-further-csv-button"], [data-testid="view-transaction-records-button"], .flex.flex-col.items-center.justify-center)`;
    this.selector_uploadFurtherCsvButton = `${this.rootSelector} [data-testid="upload-further-csv-button"]`;
    this.selector_uploadErrorBanner = `${this.selector_uploadStep} .bg-red-50.border.border-red-200.rounded-lg`;
    this.selector_uploadSuccessPanel = `${this.rootSelector} .bg-gray-50.rounded-lg.p-4:has-text("Records Imported")`;
    this.selector_uploadingSpinner = `${this.rootSelector} .flex.flex-col.items-center.justify-center`;
    this.selector_viewTransactionRecordsButton = `${this.rootSelector} [data-testid="view-transaction-records-button"]`;

    // confirmStep
    this.selector_confirmStep = `${this.rootSelector} .bg-white.rounded-lg.shadow.p-6:has(h2:text("Confirm Upload"))`;
    this.selector_noConflictBanner = `${this.selector_confirmStep} .bg-green-50.border.border-green-200.rounded-lg`;
    this.selector_overlapWarningBanner = `${this.selector_confirmStep} .bg-orange-50.border.border-orange-200.rounded-lg`;
    this.selector_confirmSummaryPanel = `${this.selector_confirmStep} .bg-gray-50.rounded-lg.p-4`;
    this.selector_backToStartButtonConfirm = `${this.selector_confirmStep} button:has-text("Back to Start")`;
    this.selector_continueUploadButton = `${this.selector_confirmStep} button:has-text("Continue Upload")`;

    // selectBankAccountStep
    this.selector_selectBankAccountStep = `${this.rootSelector} .bg-white.rounded-lg.shadow.p-6:has(h2:text("Select Bank Account"))`;
    this.selector_detectedFormatBanner = `${this.selector_selectBankAccountStep} .bg-blue-50.border.border-blue-200.rounded-lg`;
    this.selector_accountSelectionErrorBanner = `${this.selector_selectBankAccountStep} .bg-red-50.border.border-red-200.rounded-lg`;
    this.selector_csvSummaryPanel = `${this.selector_selectBankAccountStep} .bg-gray-50.rounded-lg.p-4`;
    this.selector_addNewAccountButton = `${this.rootSelector} [data-testid="add-new-account-button"]`;
    this.selector_newAccountForm = `${this.selector_selectBankAccountStep} .border.rounded-lg.p-4`;
    this.selector_newAccountNameInput = `${this.rootSelector} [data-testid="new-account-name-input"]`;
    this.selector_newSortCodeInput = `${this.rootSelector} [data-testid="new-sort-code-input"]`;
    this.selector_newAccountNumberInput = `${this.rootSelector} [data-testid="new-account-number-input"]`;
    this.selector_cancelNewAccountButton = `${this.selector_newAccountForm} button:has-text("Cancel")`;
    this.selector_createAccountButton = `${this.rootSelector} [data-testid="create-account-button"]`;
    this.selector_backToStartButtonAccountStep = `${this.selector_selectBankAccountStep} button:has-text("Back to Start")`;
    this.selector_selectAccountButton = (accountId: string) =>
      `${this.rootSelector} [data-testid="select-account-${accountId}"]`;

    // stepperWrapper
    this.selector_stepperWrapper = `${this.rootSelector}`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the CSV Upload Stepper is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the stepper wrapper is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const wrapper = page.locator(CSVUploadStepperPOM_StandardSelector);
      return await wrapper.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method — validates visibility and returns a CSVUploadStepperPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<CSVUploadStepperPOM>} A CSVUploadStepperPOM instance
   * @throws {Error} When the CSV upload stepper is not visible on the page
   */
  static async getPOM(page: Page): Promise<CSVUploadStepperPOM> {
    const isVisible = await CSVUploadStepperPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'CSVUploadStepperPOM: Cannot instantiate — stepper is not visible. ' +
          `Expected element [${CSVUploadStepperPOM_StandardSelector}] to be visible.`
      );
    }

    return new CSVUploadStepperPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS — stepperWrapper
  // ========================================================================

  /**
   * @desc Checks if the root stepper wrapper container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the stepper wrapper is visible
   */
  async isStepperWrapperVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_stepperWrapper).isVisible({ timeout });
  }

  /**
   * @desc Gets the position and dimensions of the stepper wrapper container
   * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>} Bounding box or null
   */
  async getStepperWrapperBoundingBox(): Promise<{ x: number; y: number; width: number; height: number } | null> {
    return await this.page.locator(this.selector_stepperWrapper).boundingBox();
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS — progressBar
  // ========================================================================

  /**
   * @desc Checks if the progress bar is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the progress bar is visible
   */
  async isProgressBarVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_progressBar).isVisible({ timeout });
  }

  /**
   * @desc Counts the total number of step indicator nodes rendered in the progress bar
   * @returns {Promise<number>} The number of step indicator nodes
   */
  async getStepIndicatorCount(): Promise<number> {
    return await this.page.locator(`${this.selector_progressBar} [data-testid^="step-indicator_"]`).count();
  }

  /**
   * @desc Gets the CSS classes of a step indicator circle to determine if it is active, completed, or inactive
   * @param {string} stepId - The step identifier (e.g. 'Validity Check', 'Confirm', 'Upload')
   * @returns {Promise<string>} The class attribute string of the step indicator element
   * @throws {Error} When the step indicator element is not accessible or class attribute is null
   */
  async getStepIndicatorClassList(stepId: string): Promise<string> {
    const selector = this.selector_stepIndicator(stepId);
    await this.page.isVisible(selector);
    const classAttr = await this.page.getAttribute(selector, 'class');

    if (classAttr === null) {
      throw new Error(
        `CSVUploadStepperPOM: Step indicator class list is null for stepId "${stepId}". Selector: ${selector}`
      );
    }

    return classAttr;
  }

  /**
   * @desc Gets the title text of a specific step indicator
   * @param {string} stepId - The step identifier (e.g. 'Validity Check', 'Confirm', 'Upload')
   * @returns {Promise<string>} The title text exactly as it appears in the UI
   * @throws {Error} When the step indicator text content is not accessible or null
   */
  async getStepIndicatorText(stepId: string): Promise<string> {
    const selector = this.selector_stepIndicator(stepId);
    await this.page.isVisible(selector);
    const text = await this.page.textContent(selector);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Step indicator text is null for stepId "${stepId}". Selector: ${selector}`
      );
    }

    return text;
  }

  // ========================================================================
  // ACTION METHODS — progressBar
  // ========================================================================

  /**
   * @desc Clicks on an individual step indicator node within the progress bar by stepId
   * Expected outcome is that the stepper may navigate to the selected step if permitted
   * @param {string} stepId - The step identifier (e.g. 'Validity Check', 'Confirm', 'Upload')
   */
  async clickStepIndicator(stepId: string): Promise<void> {
    await this.page.locator(this.selector_stepIndicator(stepId)).click();
  }

  /**
   * @desc Scrolls within the progress bar row if needed
   * Expected outcome is that the progress bar scrolls to reveal hidden step indicators
   */
  async scrollProgressBar(): Promise<void> {
    await this.page.locator(this.selector_progressBar).scroll();
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS — validityCheckStep
  // ========================================================================

  /**
   * @desc Checks if the validity check step panel is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the validity check step is visible
   */
  async isValidityCheckStepVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_validityCheckStep).isVisible({ timeout });
  }

  /**
   * @desc Checks if the validity error banner is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the validity error banner is visible
   */
  async isValidityErrorBannerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_validityErrorBanner).isVisible({ timeout });
  }

  /**
   * @desc Checks if the Check Validity button is enabled
   * @returns {Promise<boolean>} True if the button is enabled
   */
  async isCheckValidityButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_checkValidityButton).isEnabled();
  }

  /**
   * @desc Checks if the CSV file input is enabled
   * @returns {Promise<boolean>} True if the file input is enabled
   */
  async isCsvFileInputEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_csvFileInput).isEnabled();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — validityCheckStep
  // ========================================================================

  /**
   * @desc Gets the error message text from the validity error banner
   * @returns {Promise<string>} The error message text exactly as it appears in the UI
   * @throws {Error} When the validity error banner text content is not accessible or null
   */
  async getValidityErrorBannerText(): Promise<string> {
    await this.page.isVisible(this.selector_validityErrorBanner);
    const text = await this.page.textContent(this.selector_validityErrorBanner);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Validity error banner text is null. Selector: ${this.selector_validityErrorBanner}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the current label/text of the Check Validity button
   * @returns {Promise<string>} The button label exactly as it appears (e.g. 'Check Validity' or 'Checking Validity...')
   * @throws {Error} When the button text content is not accessible or null
   */
  async getCheckValidityButtonText(): Promise<string> {
    await this.page.isVisible(this.selector_checkValidityButton);
    const text = await this.page.textContent(this.selector_checkValidityButton);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Check Validity button text is null. Selector: ${this.selector_checkValidityButton}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the current value (selected file path) of the CSV file input
   * @returns {Promise<string>} The input value exactly as it appears
   * @throws {Error} When the input value is not accessible or null
   */
  async getCsvFileInputValue(): Promise<string> {
    await this.page.isVisible(this.selector_csvFileInput);
    const value = await this.page.inputValue(this.selector_csvFileInput);

    if (value === null) {
      throw new Error(
        `CSVUploadStepperPOM: CSV file input value is null. Selector: ${this.selector_csvFileInput}`
      );
    }

    return value;
  }

  // ========================================================================
  // ACTION METHODS — validityCheckStep
  // ========================================================================

  /**
   * @desc Clicks the Check Validity button to trigger CSV validity check
   * Expected outcome is that the validity check API call is initiated; button is disabled when no file is selected or check is in progress
   */
  async clickCheckValidityButton(): Promise<void> {
    await this.page.locator(this.selector_checkValidityButton).click();
  }

  /**
   * @desc Uploads a CSV file via the file input element
   * Expected outcome is that the selected file is attached to the file input
   * @param {string} filePath - The path to the CSV file to upload
   */
  async uploadCsvFile(filePath: string): Promise<void> {
    await this.page.locator(this.selector_csvFileInput).setInputFiles(filePath);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS — uploadStep
  // ========================================================================

  /**
   * @desc Checks if the upload step panel is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the upload step is visible
   */
  async isUploadStepVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_uploadStep).isVisible({ timeout });
  }

  /**
   * @desc Checks if the uploading spinner/loading state is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the uploading spinner is visible (upload in progress)
   */
  async isUploadingSpinnerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_uploadingSpinner).isVisible({ timeout });
  }

  /**
   * @desc Checks if the upload error banner is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the upload error banner is visible (upload failed)
   */
  async isUploadErrorBannerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_uploadErrorBanner).isVisible({ timeout });
  }

  /**
   * @desc Checks if the upload success summary panel is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the upload success panel is visible
   */
  async isUploadSuccessPanelVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_uploadSuccessPanel).isVisible({ timeout });
  }

  /**
   * @desc Checks if the Upload Further CSV Records button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the button is visible
   */
  async isUploadFurtherCsvButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_uploadFurtherCsvButton).isVisible({ timeout });
  }

  /**
   * @desc Checks if the View Transaction Records button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the button is visible
   */
  async isViewTransactionRecordsButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_viewTransactionRecordsButton).isVisible({ timeout });
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — uploadStep
  // ========================================================================

  /**
   * @desc Gets the text content of the upload success panel (records imported, records failed, bank account name)
   * @returns {Promise<string>} The success panel text exactly as it appears in the UI
   * @throws {Error} When the upload success panel text content is not accessible or null
   */
  async getUploadSuccessPanelText(): Promise<string> {
    await this.page.isVisible(this.selector_uploadSuccessPanel);
    const text = await this.page.textContent(this.selector_uploadSuccessPanel);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Upload success panel text is null. Selector: ${this.selector_uploadSuccessPanel}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the error message text from the upload error banner
   * @returns {Promise<string>} The error message text exactly as it appears in the UI
   * @throws {Error} When the upload error banner text content is not accessible or null
   */
  async getUploadErrorBannerText(): Promise<string> {
    await this.page.isVisible(this.selector_uploadErrorBanner);
    const text = await this.page.textContent(this.selector_uploadErrorBanner);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Upload error banner text is null. Selector: ${this.selector_uploadErrorBanner}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text content of the uploading spinner (e.g. 'Processing Upload...')
   * @returns {Promise<string>} The spinner text exactly as it appears in the UI
   * @throws {Error} When the uploading spinner text content is not accessible or null
   */
  async getUploadingSpinnerText(): Promise<string> {
    await this.page.isVisible(this.selector_uploadingSpinner);
    const text = await this.page.textContent(this.selector_uploadingSpinner);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Uploading spinner text is null. Selector: ${this.selector_uploadingSpinner}`
      );
    }

    return text;
  }

  // ========================================================================
  // ACTION METHODS — uploadStep
  // ========================================================================

  /**
   * @desc Clicks the View Transaction Records button to navigate to the transaction records view after a successful upload
   * Expected outcome is that the application navigates to the transaction records view
   */
  async clickViewTransactionRecordsButton(): Promise<void> {
    await this.page.locator(this.selector_viewTransactionRecordsButton).click();
  }

  /**
   * @desc Clicks the Upload Further CSV Records button to start over and upload another CSV file
   * Expected outcome is that the stepper resets to the validity check step
   */
  async clickUploadFurtherCsvButton(): Promise<void> {
    await this.page.locator(this.selector_uploadFurtherCsvButton).click();
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS — confirmStep
  // ========================================================================

  /**
   * @desc Checks if the main confirm step panel is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the confirm step is visible
   */
  async isConfirmStepVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_confirmStep).isVisible({ timeout });
  }

  /**
   * @desc Checks if the overlap warning banner is visible (hasOverlap is true)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the overlap warning banner is visible
   */
  async isOverlapWarningBannerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_overlapWarningBanner).isVisible({ timeout });
  }

  /**
   * @desc Checks if the no-conflict success banner is visible (no date overlap detected)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the no-conflict banner is visible
   */
  async isNoConflictBannerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_noConflictBanner).isVisible({ timeout });
  }

  /**
   * @desc Checks if the Back to Start button on the confirm step is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the Back to Start button is visible
   */
  async isBackToStartButtonConfirmVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_backToStartButtonConfirm).isVisible({ timeout });
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — confirmStep
  // ========================================================================

  /**
   * @desc Gets the text content of the no-conflict banner
   * @returns {Promise<string>} The banner text exactly as it appears in the UI
   * @throws {Error} When the no-conflict banner text content is not accessible or null
   */
  async getNoConflictBannerText(): Promise<string> {
    await this.page.isVisible(this.selector_noConflictBanner);
    const text = await this.page.textContent(this.selector_noConflictBanner);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: No-conflict banner text is null. Selector: ${this.selector_noConflictBanner}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the warning message text from the overlap warning banner
   * @returns {Promise<string>} The warning text exactly as it appears in the UI
   * @throws {Error} When the overlap warning banner text content is not accessible or null
   */
  async getOverlapWarningBannerText(): Promise<string> {
    await this.page.isVisible(this.selector_overlapWarningBanner);
    const text = await this.page.textContent(this.selector_overlapWarningBanner);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Overlap warning banner text is null. Selector: ${this.selector_overlapWarningBanner}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text content of the confirm step summary panel (format, account, dates, transaction count)
   * @returns {Promise<string>} The summary panel text exactly as it appears in the UI
   * @throws {Error} When the confirm summary panel text content is not accessible or null
   */
  async getConfirmSummaryPanelText(): Promise<string> {
    await this.page.isVisible(this.selector_confirmSummaryPanel);
    const text = await this.page.textContent(this.selector_confirmSummaryPanel);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Confirm summary panel text is null. Selector: ${this.selector_confirmSummaryPanel}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the current label of the Continue Upload button
   * @returns {Promise<string>} The button label exactly as it appears ('Continue Upload' or 'Continue Upload and Overwrite')
   * @throws {Error} When the button text content is not accessible or null
   */
  async getContinueUploadButtonText(): Promise<string> {
    await this.page.isVisible(this.selector_continueUploadButton);
    const text = await this.page.textContent(this.selector_continueUploadButton);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Continue Upload button text is null. Selector: ${this.selector_continueUploadButton}`
      );
    }

    return text;
  }

  // ========================================================================
  // ACTION METHODS — confirmStep
  // ========================================================================

  /**
   * @desc Clicks the Back to Start button to return to the validity check step from the confirm step
   * Expected outcome is that the stepper resets to the validity check step
   */
  async clickBackToStartButtonConfirm(): Promise<void> {
    await this.page.locator(this.selector_backToStartButtonConfirm).click();
  }

  /**
   * @desc Clicks the Continue Upload button to proceed with the upload
   * Expected outcome is that the stepper advances to the upload step; button text changes to 'Continue Upload and Overwrite' when overlap exists
   */
  async clickContinueUploadButton(): Promise<void> {
    await this.page.locator(this.selector_continueUploadButton).click();
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS — selectBankAccountStep
  // ========================================================================

  /**
   * @desc Checks if the Select Bank Account step panel is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the select bank account step is visible
   */
  async isSelectBankAccountStepVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_selectBankAccountStep).isVisible({ timeout });
  }

  /**
   * @desc Checks if the detected format banner is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the detected format banner is visible
   */
  async isDetectedFormatBannerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_detectedFormatBanner).isVisible({ timeout });
  }

  /**
   * @desc Checks if the account selection error banner is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the account selection error banner is visible
   */
  async isAccountSelectionErrorBannerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_accountSelectionErrorBanner).isVisible({ timeout });
  }

  /**
   * @desc Checks if the new account form panel is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the new account form is visible
   */
  async isNewAccountFormVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_newAccountForm).isVisible({ timeout });
  }

  /**
   * @desc Checks if the Add New Account button is visible (shown when new account form is hidden)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the Add New Account button is visible
   */
  async isAddNewAccountButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_addNewAccountButton).isVisible({ timeout });
  }

  /**
   * @desc Checks if the Create Account button is enabled
   * @returns {Promise<boolean>} True if the Create Account button is enabled (requires all fields filled and not currently creating)
   */
  async isCreateAccountButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_createAccountButton).isEnabled();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — selectBankAccountStep
  // ========================================================================

  /**
   * @desc Gets the text content of the CSV summary panel (dates and transaction count)
   * @returns {Promise<string>} The summary panel text exactly as it appears in the UI
   * @throws {Error} When the CSV summary panel text content is not accessible or null
   */
  async getCsvSummaryPanelText(): Promise<string> {
    await this.page.isVisible(this.selector_csvSummaryPanel);
    const text = await this.page.textContent(this.selector_csvSummaryPanel);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: CSV summary panel text is null. Selector: ${this.selector_csvSummaryPanel}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the detected format text from the informational banner
   * @returns {Promise<string>} The detected format banner text exactly as it appears in the UI
   * @throws {Error} When the detected format banner text content is not accessible or null
   */
  async getDetectedFormatBannerText(): Promise<string> {
    await this.page.isVisible(this.selector_detectedFormatBanner);
    const text = await this.page.textContent(this.selector_detectedFormatBanner);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Detected format banner text is null. Selector: ${this.selector_detectedFormatBanner}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the error message text from the account selection error banner
   * @returns {Promise<string>} The error message text exactly as it appears in the UI
   * @throws {Error} When the account selection error banner text content is not accessible or null
   */
  async getAccountSelectionErrorBannerText(): Promise<string> {
    await this.page.isVisible(this.selector_accountSelectionErrorBanner);
    const text = await this.page.textContent(this.selector_accountSelectionErrorBanner);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Account selection error banner text is null. Selector: ${this.selector_accountSelectionErrorBanner}`
      );
    }

    return text;
  }

  /**
   * @desc Counts the number of existing bank account selection buttons rendered
   * @returns {Promise<number>} The count of select account buttons
   */
  async getSelectAccountButtonCount(): Promise<number> {
    return await this.page.locator(`${this.rootSelector} [data-testid^="select-account-"]`).count();
  }

  /**
   * @desc Gets a list of all rendered bank account button labels/names
   * @returns {Promise<string[]>} Array of bank account button text labels exactly as they appear
   */
  async getSelectAccountButtonLabels(): Promise<string[]> {
    const buttons = this.page.locator(`${this.rootSelector} [data-testid^="select-account-"]`);
    const count = await buttons.count();
    const labels: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await buttons.nth(i).textContent();
      labels.push(text ?? '');
    }

    return labels;
  }

  /**
   * @desc Gets the current value of the new account name input
   * @returns {Promise<string>} The input value exactly as it appears
   * @throws {Error} When the input value is not accessible or null
   */
  async getNewAccountNameInputValue(): Promise<string> {
    await this.page.isVisible(this.selector_newAccountNameInput);
    return await this.page.inputValue(this.selector_newAccountNameInput);
  }

  /**
   * @desc Gets the current value of the new sort code input
   * @returns {Promise<string>} The input value exactly as it appears
   * @throws {Error} When the input value is not accessible or null
   */
  async getNewSortCodeInputValue(): Promise<string> {
    await this.page.isVisible(this.selector_newSortCodeInput);
    return await this.page.inputValue(this.selector_newSortCodeInput);
  }

  /**
   * @desc Gets the current value of the new account number input
   * @returns {Promise<string>} The input value exactly as it appears
   * @throws {Error} When the input value is not accessible or null
   */
  async getNewAccountNumberInputValue(): Promise<string> {
    await this.page.isVisible(this.selector_newAccountNumberInput);
    return await this.page.inputValue(this.selector_newAccountNumberInput);
  }

  /**
   * @desc Gets the current label of the Create Account button
   * @returns {Promise<string>} The button label exactly as it appears ('Create & Select' or 'Creating...')
   * @throws {Error} When the button text content is not accessible or null
   */
  async getCreateAccountButtonText(): Promise<string> {
    await this.page.isVisible(this.selector_createAccountButton);
    const text = await this.page.textContent(this.selector_createAccountButton);

    if (text === null) {
      throw new Error(
        `CSVUploadStepperPOM: Create Account button text is null. Selector: ${this.selector_createAccountButton}`
      );
    }

    return text;
  }

  // ========================================================================
  // ACTION METHODS — selectBankAccountStep
  // ========================================================================

  /**
   * @desc Clicks a specific existing bank account button to select it for the upload
   * Expected outcome is that the account is selected and the stepper proceeds to check for date overlap
   * @param {string} accountId - The ID of the bank account to select
   */
  async clickSelectAccountButton(accountId: string): Promise<void> {
    await this.page.locator(this.selector_selectAccountButton(accountId)).click();
  }

  /**
   * @desc Clicks the Add New Account button to reveal the new bank account creation form
   * Expected outcome is that the new account form becomes visible
   */
  async clickAddNewAccountButton(): Promise<void> {
    await this.page.locator(this.selector_addNewAccountButton).click();
  }

  /**
   * @desc Clicks the Cancel button to hide the new account form and return to account selection
   * Expected outcome is that the new account form is hidden and the Add New Account button is shown
   */
  async clickCancelNewAccountButton(): Promise<void> {
    await this.page.locator(this.selector_cancelNewAccountButton).click();
  }

  /**
   * @desc Clicks the Create & Select button to submit the new bank account form
   * Expected outcome is that the new account is created and selected; button is disabled while creating or when required fields are empty
   */
  async clickCreateAccountButton(): Promise<void> {
    await this.page.locator(this.selector_createAccountButton).click();
  }

  /**
   * @desc Clicks the Back to Start button at the bottom of the account selection panel
   * Expected outcome is that the stepper resets to the validity check step
   */
  async clickBackToStartButtonAccountStep(): Promise<void> {
    await this.page.locator(this.selector_backToStartButtonAccountStep).click();
  }

  /**
   * @desc Types the new bank account name into the account name input field
   * Expected outcome is that the account name input is populated with the provided value
   * @param {string} accountName - The bank account name to enter
   */
  async fillNewAccountNameInput(accountName: string): Promise<void> {
    await this.page.locator(this.selector_newAccountNameInput).fill(accountName);
  }

  /**
   * @desc Clears the new bank account name input field
   * Expected outcome is that the account name input is emptied
   */
  async clearNewAccountNameInput(): Promise<void> {
    await this.page.locator(this.selector_newAccountNameInput).clear();
  }

  /**
   * @desc Types the new bank account sort code into the sort code input field
   * Expected outcome is that the sort code input is populated with the provided value
   * @param {string} sortCode - The sort code to enter
   */
  async fillNewSortCodeInput(sortCode: string): Promise<void> {
    await this.page.locator(this.selector_newSortCodeInput).fill(sortCode);
  }

  /**
   * @desc Clears the sort code input field
   * Expected outcome is that the sort code input is emptied
   */
  async clearNewSortCodeInput(): Promise<void> {
    await this.page.locator(this.selector_newSortCodeInput).clear();
  }

  /**
   * @desc Types the new bank account number into the account number input field
   * Expected outcome is that the account number input is populated with the provided value
   * @param {string} accountNumber - The account number to enter
   */
  async fillNewAccountNumberInput(accountNumber: string): Promise<void> {
    await this.page.locator(this.selector_newAccountNumberInput).fill(accountNumber);
  }

  /**
   * @desc Clears the account number input field
   * Expected outcome is that the account number input is emptied
   */
  async clearNewAccountNumberInput(): Promise<void> {
    await this.page.locator(this.selector_newAccountNumberInput).clear();
  }
}