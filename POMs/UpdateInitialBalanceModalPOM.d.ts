/**
 * Page Object Model: UpdateInitialBalanceModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class UpdateInitialBalanceModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_modalContainer;
    private readonly selector_welcomeMessage;
    private readonly selector_balanceForm;
    private readonly selector_modalTitle;
    private readonly selector_balanceInput;
    private readonly selector_cancelButton;
    private readonly selector_submitButton;
    private readonly selector_modalError;
    constructor(page: Page);
    /**
     * @desc Checks if the UpdateInitialBalanceModal is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal container is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates modal visibility and returns a POM instance
     * @param page - Playwright Page instance
     * @returns {Promise<UpdateInitialBalanceModalPOM>} A new UpdateInitialBalanceModalPOM instance
     * @throws {Error} When the modal container is not visible on screen
     */
    static getPOM(page: Page): Promise<UpdateInitialBalanceModalPOM>;
    /**
     * @desc Check whether the modal container is currently visible/rendered on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    isModalContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the welcome message paragraph is visible — confirms welcomeMode=true is active
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the welcome message is visible
     */
    isWelcomeMessageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the balance form is visible and rendered within the modal
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the balance form is visible
     */
    isBalanceFormVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the modal title heading is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal title is visible
     */
    isModalTitleVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the error message element is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the error message is visible
     */
    isErrorMessageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the cancel button is visible — only present when welcomeMode=false
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the cancel button is visible
     */
    isCancelButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Dismiss/close the modal by clicking the cancel button
     * Expected outcome is that the modal will close via the onClose handler.
     * Only available when welcomeMode=false, as closeOnOverlayClick and showCloseButton are disabled in welcomeMode.
     * @throws {Error} When the cancel button is not visible (e.g. in welcomeMode)
     */
    clickCancelButton(): Promise<void>;
    /**
     * @desc Enter a numeric value into the balance amount input field
     * Expected outcome is that the balance input will contain the provided value
     * @param {string} balance - The balance amount to enter (numeric string, e.g. "1500.00")
     * @throws {Error} When the balance input is not visible or accessible
     */
    enterBalanceAmount(balance: string): Promise<void>;
    /**
     * @desc Submit the balance form by clicking the submit button
     * Expected outcome is that handleSubmit will be triggered, validating inputs and calling onUpdate with the balance number and formatted date string
     * @throws {Error} When the submit button is not visible or accessible
     */
    clickSubmitButton(): Promise<void>;
    /**
     * @desc Get the data-testid attribute value from the root modal container
     * @returns {Promise<string>} The data-testid attribute value of the modal container
     * @throws {Error} When the modal container attribute is not accessible or null
     */
    getModalContainerTestId(): Promise<string>;
    /**
     * @desc Read the onboarding instructions paragraph text — only present when welcomeMode=true
     * @returns {Promise<string>} The welcome message text exactly as it appears in the UI
     * @throws {Error} When the welcome message element is not accessible or its content is null
     */
    getWelcomeMessageText(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the form to inspect all child elements including inputs, error messages, and buttons
     * @returns {Promise<string>} The inner HTML of the balance form
     * @throws {Error} When the balance form is not accessible or its innerHTML is null
     */
    getBalanceFormInnerHtml(): Promise<string>;
    /**
     * @desc Read the modal heading text — returns 'Welcome to Financial Projections!' in welcomeMode or 'Update Initial Bank Balance' in standard mode
     * @returns {Promise<string>} The modal title text exactly as it appears in the UI
     * @throws {Error} When the modal title element is not accessible or its content is null
     */
    getModalTitleText(): Promise<string>;
    /**
     * @desc Read the error message text currently displayed in the modal
     * @returns {Promise<string>} The error message text exactly as it appears in the UI
     * @throws {Error} When the error message element is not visible or its content is null
     */
    getErrorMessageText(): Promise<string>;
    /**
     * @desc Read the current text label of the submit button (e.g. 'Get Started', 'Update Balance', or 'Saving...')
     * @returns {Promise<string>} The submit button label text exactly as it appears in the UI
     * @throws {Error} When the submit button is not accessible or its content is null
     */
    getSubmitButtonText(): Promise<string>;
}
