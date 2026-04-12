/**
 * Page Object Model: ReprocessCSVsStepper
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ReprocessCSVsStepperPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_stepperWrapper;
    private readonly selector_selectAccountStep;
    private readonly selector_operationsList;
    private readonly selector_proceedButton;
    private readonly selector_bankAccountSelect;
    private readonly selector_accountSelector;
    private readonly selector_noOperationsNotice;
    private readonly selector_bankAccountSelectItem;
    private readonly selector_operationRow;
    private readonly selector_validateFilesStep;
    private readonly selector_validateLoadingIndicator;
    private readonly selector_backButton;
    private readonly selector_validateList;
    private readonly selector_startButton;
    private readonly selector_validateCheckbox;
    private readonly selector_validateStatus;
    private readonly selector_validateRow;
    private readonly selector_validateError;
    private readonly selector_processStep;
    private readonly selector_startOverButton;
    private readonly selector_summary;
    private readonly selector_preserveStatus;
    private readonly selector_cleanupStatus;
    private readonly selector_progressList;
    private readonly selector_viewTransactionsButton;
    private readonly selector_progressRow;
    constructor(page: Page);
    /**
     * @desc Checks if the ReprocessCSVsStepper root container is visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the stepper wrapper is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method — validates visibility then returns a ReprocessCSVsStepperPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<ReprocessCSVsStepperPOM>} POM instance
     * @throws {Error} When the stepper root container is not visible
     */
    static getPOM(page: Page): Promise<ReprocessCSVsStepperPOM>;
    /**
     * @desc Check whether the root stepper container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the stepper wrapper is visible
     */
    isStepperWrapperVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether Step 1 (Select Bank Account) panel is currently rendered/visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the select account step panel is visible
     */
    isSelectAccountStepVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether Step 2 (Verify Files) panel is currently rendered/visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the validate files step panel is visible
     */
    isValidateFilesStepVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether Step 3 (Reprocess) panel is currently rendered/visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the process step panel is visible
     */
    isProcessStepVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the validate loading spinner is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the validation loading indicator is visible
     */
    isValidateLoadingIndicatorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the no-operations notice is visible (shown when account has no upload operations)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the no-operations notice is visible
     */
    isNoOperationsNoticeVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the operations list is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the operations list is visible
     */
    isOperationsListVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the summary grid is visible (shown after processing completes)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the summary is visible
     */
    isSummaryVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether a specific validate row is visible
     * @param {number} index - 0-based index of the validate row
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the validate row is visible
     */
    isValidateRowVisible(index: number, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether a specific validate error is visible
     * @param {number} index - 0-based index of the validate row
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the validate error text is visible
     */
    isValidateErrorVisible(index: number, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether a specific progress row is visible
     * @param {number} index - 0-based index of the progress row
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the progress row is visible
     */
    isProgressRowVisible(index: number, timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the bank account SelectTrigger to open the dropdown
     * Expected outcome is that the bank account dropdown opens
     */
    clickBankAccountSelect(): Promise<void>;
    /**
     * @desc Clicks a specific bank account SelectItem in the dropdown by account ID
     * Expected outcome is that the account is selected and operations are loaded
     * @param {string} accountId - The ID of the bank account to select
     */
    clickBankAccountSelectItem(accountId: string): Promise<void>;
    /**
     * @desc Clicks the Proceed button to advance to the Validate Files step
     * Expected outcome is that the stepper advances to Step 2
     * @throws {Error} When the Proceed button is not visible
     */
    clickProceedButton(): Promise<void>;
    /**
     * @desc Clicks the Back button to return to the Select Account step
     * Expected outcome is that the stepper returns to Step 1
     * @throws {Error} When the Back button is not visible
     */
    clickBackButton(): Promise<void>;
    /**
     * @desc Clicks the Start (Reprocess N Files) button to advance to the Process step
     * Expected outcome is that the stepper advances to Step 3
     * @throws {Error} When the Start button is not visible
     */
    clickStartButton(): Promise<void>;
    /**
     * @desc Clicks the checkbox for a specific validate row to include/exclude it from reprocessing
     * Expected outcome is that the file's inclusion state is toggled
     * @param {number} index - 0-based index of the validate row
     * @throws {Error} When the checkbox is not visible
     */
    clickValidateCheckbox(index: number): Promise<void>;
    /**
     * @desc Clicks the Start Over button to reset the stepper back to Step 1
     * Expected outcome is that the stepper resets to the Select Account step
     * @throws {Error} When the Start Over button is not visible
     */
    clickStartOverButton(): Promise<void>;
    /**
     * @desc Clicks the View Transactions button shown after processing completes
     * Expected outcome is that the onComplete callback fires and the view transitions
     * @throws {Error} When the View Transactions button is not visible
     */
    clickViewTransactionsButton(): Promise<void>;
    /**
     * @desc Get the full inner HTML of the Step 1 (Select Bank Account) panel for content inspection
     * @returns {Promise<string>} The inner HTML of the select account step panel
     * @throws {Error} When the select account step panel content is not accessible
     */
    getSelectAccountStepInnerHtml(): Promise<string>;
    /**
     * @desc Get the text content of the process step panel (e.g. heading 'Reprocessing...' vs 'Reprocessing Complete')
     * @returns {Promise<string>} The text content of the process step panel
     * @throws {Error} When the process step panel text content is not accessible
     */
    getProcessStepText(): Promise<string>;
    /**
     * @desc Gets the text content of the preserve status indicator
     * @returns {Promise<string>} The text content of the preserve status element
     * @throws {Error} When the preserve status content is not accessible
     */
    getPreserveStatusText(): Promise<string>;
    /**
     * @desc Gets the text content of the cleanup status indicator
     * @returns {Promise<string>} The text content of the cleanup status element
     * @throws {Error} When the cleanup status content is not accessible
     */
    getCleanupStatusText(): Promise<string>;
    /**
     * @desc Gets the text content of the summary grid shown after processing completes
     * @returns {Promise<string>} The text content of the summary element
     * @throws {Error} When the summary content is not accessible
     */
    getSummaryText(): Promise<string>;
    /**
     * @desc Gets the text content of a specific operation row in the operations list
     * @param {number} index - 0-based index of the operation row
     * @returns {Promise<string>} The text content of the operation row
     * @throws {Error} When the operation row content is not accessible
     */
    getOperationRowText(index: number): Promise<string>;
    /**
     * @desc Gets the text content of a specific validate row
     * @param {number} index - 0-based index of the validate row
     * @returns {Promise<string>} The text content of the validate row
     * @throws {Error} When the validate row content is not accessible
     */
    getValidateRowText(index: number): Promise<string>;
    /**
     * @desc Gets the error text for a specific invalid validate row
     * @param {number} index - 0-based index of the validate row
     * @returns {Promise<string>} The error text content
     * @throws {Error} When the validate error content is not accessible
     */
    getValidateErrorText(index: number): Promise<string>;
    /**
     * @desc Gets the text content of a specific progress row in the process step
     * @param {number} index - 0-based index of the progress row
     * @returns {Promise<string>} The text content of the progress row
     * @throws {Error} When the progress row content is not accessible
     */
    getProgressRowText(index: number): Promise<string>;
    /**
     * @desc Checks whether a specific validate checkbox is checked
     * @param {number} index - 0-based index of the validate row
     * @returns {Promise<boolean>} True if the checkbox is checked
     */
    isValidateCheckboxChecked(index: number): Promise<boolean>;
    /**
     * @desc Checks whether a specific validate checkbox is disabled
     * @param {number} index - 0-based index of the validate row
     * @returns {Promise<boolean>} True if the checkbox is disabled
     */
    isValidateCheckboxDisabled(index: number): Promise<boolean>;
    /**
     * @desc Checks whether the Proceed button is enabled
     * @returns {Promise<boolean>} True if the Proceed button is enabled
     */
    isProceedButtonEnabled(): Promise<boolean>;
    /**
     * @desc Checks whether the Start (Reprocess N Files) button is enabled
     * @returns {Promise<boolean>} True if the Start button is enabled
     */
    isStartButtonEnabled(): Promise<boolean>;
}
