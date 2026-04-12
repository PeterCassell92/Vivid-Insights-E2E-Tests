/**
 * Page Object Model: AccountSetupModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class AccountSetupModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_modalContainer;
    private readonly selector_stepIndicator;
    private readonly selector_step1Panel;
    private readonly selector_step2Panel;
    private readonly selector_accountSelect;
    private readonly selector_manageLink;
    private readonly selector_importLink;
    private readonly selector_continueButton;
    private readonly selector_backButton;
    private readonly selector_loadTransactionsLink;
    private readonly selector_accountSelectItem;
    constructor(page: Page);
    /**
     * @desc Checks if the AccountSetupModal is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal root container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates modal visibility and returns a POM instance
     * @param page - Playwright Page instance
     * @returns {Promise<AccountSetupModalPOM>} AccountSetupModalPOM instance
     * @throws {Error} When the modal root container is not visible
     */
    static getPOM(page: Page): Promise<AccountSetupModalPOM>;
    /**
     * @desc Check whether the AccountSetupModal root container is currently visible/open
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    isModalContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the step 1 panel is currently rendered (i.e. step === 1)
     * @returns {Promise<boolean>} True if the step 1 panel is visible
     */
    isStep1PanelVisible(): Promise<boolean>;
    /**
     * @desc Check whether the step 2 panel is currently rendered (i.e. step === 2)
     * @returns {Promise<boolean>} True if the step 2 panel is visible
     */
    isStep2PanelVisible(): Promise<boolean>;
    /**
     * @desc Get the full inner HTML of the modal container to inspect all rendered content
     * @returns {Promise<string>} The inner HTML of the modal container
     * @throws {Error} When the modal container inner HTML is not accessible or null
     */
    getModalContainerInnerHtml(): Promise<string>;
    /**
     * @desc Get the inner HTML of the step indicator to inspect step circle states (active/complete) and connector styling
     * @returns {Promise<string>} The inner HTML of the step indicator
     * @throws {Error} When the step indicator inner HTML is not accessible or null
     */
    getStepIndicatorInnerHtml(): Promise<string>;
    /**
     * @desc Read the step indicator text to determine which step labels and step numbers are currently displayed
     * @returns {Promise<string>} The text content of the step indicator exactly as it appears
     * @throws {Error} When the step indicator text content is not accessible or null
     */
    getStepIndicatorText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the step 2 panel to inspect the full coverage verification UI state
     * @returns {Promise<string>} The inner HTML of the step 2 panel
     * @throws {Error} When the step 2 panel inner HTML is not accessible or null
     */
    getStep2PanelInnerHtml(): Promise<string>;
    /**
     * @desc Read all visible text content within the step 2 panel (coverage checking state, error messages, etc.)
     * @returns {Promise<string>} The text content of the step 2 panel exactly as it appears
     * @throws {Error} When the step 2 panel text content is not accessible or null
     */
    getStep2PanelText(): Promise<string>;
    /**
     * @desc Read all visible text content within the step 1 panel
     * @returns {Promise<string>} The text content of the step 1 panel exactly as it appears
     * @throws {Error} When the step 1 panel text content is not accessible or null
     */
    getStep1PanelText(): Promise<string>;
    /**
     * @desc Clicks the account selector dropdown trigger to open the account list
     * Expected outcome is that the dropdown opens and account options become visible
     */
    clickAccountSelect(): Promise<void>;
    /**
     * @desc Clicks a specific account item in the dropdown by its accountId data-value attribute
     * Expected outcome is that the account is selected and the dropdown closes
     * @param {string} accountId - The ID of the bank account to select
     */
    clickAccountSelectItem(accountId: string): Promise<void>;
    /**
     * @desc Clicks the Continue button to advance from step 1 to step 2
     * Expected outcome is that the modal transitions to step 2 (transaction coverage verification)
     * @throws {Error} When the Continue button is not visible or not clickable
     */
    clickContinueButton(): Promise<void>;
    /**
     * @desc Clicks the Back button in step 2 to return to step 1
     * Expected outcome is that the modal transitions back to step 1 (account selection)
     * @throws {Error} When the Back button is not visible
     */
    clickBackButton(): Promise<void>;
    /**
     * @desc Clicks the Import Bank Statements link (shown when no accounts exist in step 1)
     * Expected outcome is that the browser navigates to /bank-records
     * @throws {Error} When the import link is not visible
     */
    clickImportLink(): Promise<void>;
    /**
     * @desc Clicks the manage/import bank statements link in step 1 (shown alongside the account selector)
     * Expected outcome is that the browser navigates to /bank-records
     * @throws {Error} When the manage link is not visible
     */
    clickManageLink(): Promise<void>;
    /**
     * @desc Clicks the Load Transactions link in step 2 (shown when no transaction history is found)
     * Expected outcome is that the browser navigates to /bank-records
     * @throws {Error} When the Load Transactions link is not visible
     */
    clickLoadTransactionsLink(): Promise<void>;
}
