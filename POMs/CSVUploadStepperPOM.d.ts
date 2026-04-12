/**
 * Page Object Model: CSVUploadStepper
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class CSVUploadStepperPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_progressBar;
    private readonly selector_stepIndicator;
    private readonly selector_validityCheckStep;
    private readonly selector_validityErrorBanner;
    private readonly selector_checkValidityButton;
    private readonly selector_csvFileInput;
    private readonly selector_uploadStep;
    private readonly selector_uploadFurtherCsvButton;
    private readonly selector_uploadErrorBanner;
    private readonly selector_uploadSuccessPanel;
    private readonly selector_uploadingSpinner;
    private readonly selector_viewTransactionRecordsButton;
    private readonly selector_confirmStep;
    private readonly selector_noConflictBanner;
    private readonly selector_overlapWarningBanner;
    private readonly selector_confirmSummaryPanel;
    private readonly selector_backToStartButtonConfirm;
    private readonly selector_continueUploadButton;
    private readonly selector_selectBankAccountStep;
    private readonly selector_detectedFormatBanner;
    private readonly selector_accountSelectionErrorBanner;
    private readonly selector_csvSummaryPanel;
    private readonly selector_addNewAccountButton;
    private readonly selector_newAccountForm;
    private readonly selector_newAccountNameInput;
    private readonly selector_newSortCodeInput;
    private readonly selector_newAccountNumberInput;
    private readonly selector_cancelNewAccountButton;
    private readonly selector_createAccountButton;
    private readonly selector_backToStartButtonAccountStep;
    private readonly selector_selectAccountButton;
    private readonly selector_stepperWrapper;
    constructor(page: Page);
    /**
     * @desc Checks if the CSV Upload Stepper is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the stepper wrapper is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method — validates visibility and returns a CSVUploadStepperPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<CSVUploadStepperPOM>} A CSVUploadStepperPOM instance
     * @throws {Error} When the CSV upload stepper is not visible on the page
     */
    static getPOM(page: Page): Promise<CSVUploadStepperPOM>;
    /**
     * @desc Checks if the root stepper wrapper container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the stepper wrapper is visible
     */
    isStepperWrapperVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Gets the position and dimensions of the stepper wrapper container
     * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>} Bounding box or null
     */
    getStepperWrapperBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    } | null>;
    /**
     * @desc Checks if the progress bar is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the progress bar is visible
     */
    isProgressBarVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Counts the total number of step indicator nodes rendered in the progress bar
     * @returns {Promise<number>} The number of step indicator nodes
     */
    getStepIndicatorCount(): Promise<number>;
    /**
     * @desc Gets the CSS classes of a step indicator circle to determine if it is active, completed, or inactive
     * @param {string} stepId - The step identifier (e.g. 'Validity Check', 'Confirm', 'Upload')
     * @returns {Promise<string>} The class attribute string of the step indicator element
     * @throws {Error} When the step indicator element is not accessible or class attribute is null
     */
    getStepIndicatorClassList(stepId: string): Promise<string>;
    /**
     * @desc Gets the title text of a specific step indicator
     * @param {string} stepId - The step identifier (e.g. 'Validity Check', 'Confirm', 'Upload')
     * @returns {Promise<string>} The title text exactly as it appears in the UI
     * @throws {Error} When the step indicator text content is not accessible or null
     */
    getStepIndicatorText(stepId: string): Promise<string>;
    /**
     * @desc Clicks on an individual step indicator node within the progress bar by stepId
     * Expected outcome is that the stepper may navigate to the selected step if permitted
     * @param {string} stepId - The step identifier (e.g. 'Validity Check', 'Confirm', 'Upload')
     */
    clickStepIndicator(stepId: string): Promise<void>;
    /**
     * @desc Scrolls within the progress bar row if needed
     * Expected outcome is that the progress bar scrolls to reveal hidden step indicators
     */
    scrollProgressBar(): Promise<void>;
    /**
     * @desc Checks if the validity check step panel is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the validity check step is visible
     */
    isValidityCheckStepVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the validity error banner is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the validity error banner is visible
     */
    isValidityErrorBannerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the Check Validity button is enabled
     * @returns {Promise<boolean>} True if the button is enabled
     */
    isCheckValidityButtonEnabled(): Promise<boolean>;
    /**
     * @desc Checks if the CSV file input is enabled
     * @returns {Promise<boolean>} True if the file input is enabled
     */
    isCsvFileInputEnabled(): Promise<boolean>;
    /**
     * @desc Gets the error message text from the validity error banner
     * @returns {Promise<string>} The error message text exactly as it appears in the UI
     * @throws {Error} When the validity error banner text content is not accessible or null
     */
    getValidityErrorBannerText(): Promise<string>;
    /**
     * @desc Gets the current label/text of the Check Validity button
     * @returns {Promise<string>} The button label exactly as it appears (e.g. 'Check Validity' or 'Checking Validity...')
     * @throws {Error} When the button text content is not accessible or null
     */
    getCheckValidityButtonText(): Promise<string>;
    /**
     * @desc Gets the current value (selected file path) of the CSV file input
     * @returns {Promise<string>} The input value exactly as it appears
     * @throws {Error} When the input value is not accessible or null
     */
    getCsvFileInputValue(): Promise<string>;
    /**
     * @desc Clicks the Check Validity button to trigger CSV validity check
     * Expected outcome is that the validity check API call is initiated; button is disabled when no file is selected or check is in progress
     */
    clickCheckValidityButton(): Promise<void>;
    /**
     * @desc Uploads a CSV file via the file input element
     * Expected outcome is that the selected file is attached to the file input
     * @param {string} filePath - The path to the CSV file to upload
     */
    uploadCsvFile(filePath: string): Promise<void>;
    /**
     * @desc Checks if the upload step panel is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the upload step is visible
     */
    isUploadStepVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the uploading spinner/loading state is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the uploading spinner is visible (upload in progress)
     */
    isUploadingSpinnerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the upload error banner is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the upload error banner is visible (upload failed)
     */
    isUploadErrorBannerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the upload success summary panel is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the upload success panel is visible
     */
    isUploadSuccessPanelVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the Upload Further CSV Records button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the button is visible
     */
    isUploadFurtherCsvButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the View Transaction Records button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the button is visible
     */
    isViewTransactionRecordsButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Gets the text content of the upload success panel (records imported, records failed, bank account name)
     * @returns {Promise<string>} The success panel text exactly as it appears in the UI
     * @throws {Error} When the upload success panel text content is not accessible or null
     */
    getUploadSuccessPanelText(): Promise<string>;
    /**
     * @desc Gets the error message text from the upload error banner
     * @returns {Promise<string>} The error message text exactly as it appears in the UI
     * @throws {Error} When the upload error banner text content is not accessible or null
     */
    getUploadErrorBannerText(): Promise<string>;
    /**
     * @desc Gets the text content of the uploading spinner (e.g. 'Processing Upload...')
     * @returns {Promise<string>} The spinner text exactly as it appears in the UI
     * @throws {Error} When the uploading spinner text content is not accessible or null
     */
    getUploadingSpinnerText(): Promise<string>;
    /**
     * @desc Clicks the View Transaction Records button to navigate to the transaction records view after a successful upload
     * Expected outcome is that the application navigates to the transaction records view
     */
    clickViewTransactionRecordsButton(): Promise<void>;
    /**
     * @desc Clicks the Upload Further CSV Records button to start over and upload another CSV file
     * Expected outcome is that the stepper resets to the validity check step
     */
    clickUploadFurtherCsvButton(): Promise<void>;
    /**
     * @desc Checks if the main confirm step panel is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the confirm step is visible
     */
    isConfirmStepVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the overlap warning banner is visible (hasOverlap is true)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the overlap warning banner is visible
     */
    isOverlapWarningBannerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the no-conflict success banner is visible (no date overlap detected)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the no-conflict banner is visible
     */
    isNoConflictBannerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the Back to Start button on the confirm step is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the Back to Start button is visible
     */
    isBackToStartButtonConfirmVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Gets the text content of the no-conflict banner
     * @returns {Promise<string>} The banner text exactly as it appears in the UI
     * @throws {Error} When the no-conflict banner text content is not accessible or null
     */
    getNoConflictBannerText(): Promise<string>;
    /**
     * @desc Gets the warning message text from the overlap warning banner
     * @returns {Promise<string>} The warning text exactly as it appears in the UI
     * @throws {Error} When the overlap warning banner text content is not accessible or null
     */
    getOverlapWarningBannerText(): Promise<string>;
    /**
     * @desc Gets the text content of the confirm step summary panel (format, account, dates, transaction count)
     * @returns {Promise<string>} The summary panel text exactly as it appears in the UI
     * @throws {Error} When the confirm summary panel text content is not accessible or null
     */
    getConfirmSummaryPanelText(): Promise<string>;
    /**
     * @desc Gets the current label of the Continue Upload button
     * @returns {Promise<string>} The button label exactly as it appears ('Continue Upload' or 'Continue Upload and Overwrite')
     * @throws {Error} When the button text content is not accessible or null
     */
    getContinueUploadButtonText(): Promise<string>;
    /**
     * @desc Clicks the Back to Start button to return to the validity check step from the confirm step
     * Expected outcome is that the stepper resets to the validity check step
     */
    clickBackToStartButtonConfirm(): Promise<void>;
    /**
     * @desc Clicks the Continue Upload button to proceed with the upload
     * Expected outcome is that the stepper advances to the upload step; button text changes to 'Continue Upload and Overwrite' when overlap exists
     */
    clickContinueUploadButton(): Promise<void>;
    /**
     * @desc Checks if the Select Bank Account step panel is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the select bank account step is visible
     */
    isSelectBankAccountStepVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the detected format banner is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the detected format banner is visible
     */
    isDetectedFormatBannerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the account selection error banner is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the account selection error banner is visible
     */
    isAccountSelectionErrorBannerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the new account form panel is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the new account form is visible
     */
    isNewAccountFormVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the Add New Account button is visible (shown when new account form is hidden)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the Add New Account button is visible
     */
    isAddNewAccountButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks if the Create Account button is enabled
     * @returns {Promise<boolean>} True if the Create Account button is enabled (requires all fields filled and not currently creating)
     */
    isCreateAccountButtonEnabled(): Promise<boolean>;
    /**
     * @desc Gets the text content of the CSV summary panel (dates and transaction count)
     * @returns {Promise<string>} The summary panel text exactly as it appears in the UI
     * @throws {Error} When the CSV summary panel text content is not accessible or null
     */
    getCsvSummaryPanelText(): Promise<string>;
    /**
     * @desc Gets the detected format text from the informational banner
     * @returns {Promise<string>} The detected format banner text exactly as it appears in the UI
     * @throws {Error} When the detected format banner text content is not accessible or null
     */
    getDetectedFormatBannerText(): Promise<string>;
    /**
     * @desc Gets the error message text from the account selection error banner
     * @returns {Promise<string>} The error message text exactly as it appears in the UI
     * @throws {Error} When the account selection error banner text content is not accessible or null
     */
    getAccountSelectionErrorBannerText(): Promise<string>;
    /**
     * @desc Counts the number of existing bank account selection buttons rendered
     * @returns {Promise<number>} The count of select account buttons
     */
    getSelectAccountButtonCount(): Promise<number>;
    /**
     * @desc Gets a list of all rendered bank account button labels/names
     * @returns {Promise<string[]>} Array of bank account button text labels exactly as they appear
     */
    getSelectAccountButtonLabels(): Promise<string[]>;
    /**
     * @desc Gets the current value of the new account name input
     * @returns {Promise<string>} The input value exactly as it appears
     * @throws {Error} When the input value is not accessible or null
     */
    getNewAccountNameInputValue(): Promise<string>;
    /**
     * @desc Gets the current value of the new sort code input
     * @returns {Promise<string>} The input value exactly as it appears
     * @throws {Error} When the input value is not accessible or null
     */
    getNewSortCodeInputValue(): Promise<string>;
    /**
     * @desc Gets the current value of the new account number input
     * @returns {Promise<string>} The input value exactly as it appears
     * @throws {Error} When the input value is not accessible or null
     */
    getNewAccountNumberInputValue(): Promise<string>;
    /**
     * @desc Gets the current label of the Create Account button
     * @returns {Promise<string>} The button label exactly as it appears ('Create & Select' or 'Creating...')
     * @throws {Error} When the button text content is not accessible or null
     */
    getCreateAccountButtonText(): Promise<string>;
    /**
     * @desc Clicks a specific existing bank account button to select it for the upload
     * Expected outcome is that the account is selected and the stepper proceeds to check for date overlap
     * @param {string} accountId - The ID of the bank account to select
     */
    clickSelectAccountButton(accountId: string): Promise<void>;
    /**
     * @desc Clicks the Add New Account button to reveal the new bank account creation form
     * Expected outcome is that the new account form becomes visible
     */
    clickAddNewAccountButton(): Promise<void>;
    /**
     * @desc Clicks the Cancel button to hide the new account form and return to account selection
     * Expected outcome is that the new account form is hidden and the Add New Account button is shown
     */
    clickCancelNewAccountButton(): Promise<void>;
    /**
     * @desc Clicks the Create & Select button to submit the new bank account form
     * Expected outcome is that the new account is created and selected; button is disabled while creating or when required fields are empty
     */
    clickCreateAccountButton(): Promise<void>;
    /**
     * @desc Clicks the Back to Start button at the bottom of the account selection panel
     * Expected outcome is that the stepper resets to the validity check step
     */
    clickBackToStartButtonAccountStep(): Promise<void>;
    /**
     * @desc Types the new bank account name into the account name input field
     * Expected outcome is that the account name input is populated with the provided value
     * @param {string} accountName - The bank account name to enter
     */
    fillNewAccountNameInput(accountName: string): Promise<void>;
    /**
     * @desc Clears the new bank account name input field
     * Expected outcome is that the account name input is emptied
     */
    clearNewAccountNameInput(): Promise<void>;
    /**
     * @desc Types the new bank account sort code into the sort code input field
     * Expected outcome is that the sort code input is populated with the provided value
     * @param {string} sortCode - The sort code to enter
     */
    fillNewSortCodeInput(sortCode: string): Promise<void>;
    /**
     * @desc Clears the sort code input field
     * Expected outcome is that the sort code input is emptied
     */
    clearNewSortCodeInput(): Promise<void>;
    /**
     * @desc Types the new bank account number into the account number input field
     * Expected outcome is that the account number input is populated with the provided value
     * @param {string} accountNumber - The account number to enter
     */
    fillNewAccountNumberInput(accountNumber: string): Promise<void>;
    /**
     * @desc Clears the account number input field
     * Expected outcome is that the account number input is emptied
     */
    clearNewAccountNumberInput(): Promise<void>;
}
