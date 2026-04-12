/**
 * Page Object Model: SaveScenarioModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class SaveScenarioModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_modalContainer;
    private readonly selector_footerActions;
    private readonly selector_descriptionText;
    private readonly selector_formFieldsContainer;
    private readonly selector_errorMessage;
    private readonly selector_scenarioNameInput;
    private readonly selector_scenarioDescriptionInput;
    private readonly selector_cancelButton;
    private readonly selector_saveButton;
    private readonly selector_decisionPathSummary;
    constructor(page: Page);
    /**
     * @desc Checks if the Save Scenario modal is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates modal visibility and returns a POM instance
     * @param page - Playwright Page instance
     * @returns {Promise<SaveScenarioModalPOM>} SaveScenarioModalPOM instance
     * @throws {Error} When the Save Scenario modal is not visible
     */
    static getPOM(page: Page): Promise<SaveScenarioModalPOM>;
    /**
     * @desc Check whether the Save Scenario modal container is currently visible/open on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    isModalContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the footer actions container (Cancel/Save buttons) is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the footer actions container is visible
     */
    isFooterActionsVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the introductory description paragraph is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the description paragraph is visible
     */
    isDescriptionTextVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the form fields container (name, description, summary) is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the form fields container is visible
     */
    isFormFieldsContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the error message div is currently rendered/visible
     * Only present when error state is non-empty
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the error message is visible
     */
    isErrorMessageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the scenario name input is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the scenario name input is visible
     */
    isScenarioNameInputVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the scenario description textarea is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the scenario description textarea is visible
     */
    isScenarioDescriptionInputVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Cancel button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the Cancel button is visible
     */
    isCancelButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Save Scenario button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the Save Scenario button is visible
     */
    isSaveButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Dismiss/close the Save Scenario modal by triggering the onClose handler
     * Expected outcome is that the modal will close and Redux closeSaveModal action will be dispatched
     * @throws {Error} When the modal container is not visible to dismiss
     */
    dismissModal(): Promise<void>;
    /**
     * @desc Click within the footer actions container to interact with Cancel or Save Scenario buttons
     * Expected outcome is that the clicked button action will be triggered
     * @throws {Error} When the footer actions container is not visible
     */
    clickFooterActions(): Promise<void>;
    /**
     * @desc Click the Cancel button to close the modal without saving
     * Expected outcome is that the modal will close and no scenario will be saved
     * @throws {Error} When the Cancel button is not visible or is disabled
     */
    clickCancelButton(): Promise<void>;
    /**
     * @desc Click the Save Scenario button to submit the form and save the scenario
     * Expected outcome is that the scenario will be saved and the modal will close on success
     * @throws {Error} When the Save Scenario button is not visible or is disabled
     */
    clickSaveButton(): Promise<void>;
    /**
     * @desc Enter text into the scenario name input field
     * Expected outcome is that the name field will be populated with the provided value
     * @param {string} name - The scenario name to enter
     * @throws {Error} When the scenario name input is not visible
     */
    enterScenarioName(name: string): Promise<void>;
    /**
     * @desc Enter text into the scenario description textarea
     * Expected outcome is that the description field will be populated with the provided value
     * @param {string} description - The scenario description to enter
     * @throws {Error} When the scenario description textarea is not visible
     */
    enterScenarioDescription(description: string): Promise<void>;
    /**
     * @desc Get the position and dimensions of the root modal container
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the modal container
     * @throws {Error} When the modal container is not visible or bounding box cannot be retrieved
     */
    getModalContainerBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the inner HTML of the footer actions container to inspect button states and labels
     * @returns {Promise<string>} The inner HTML of the footer actions container exactly as it appears
     * @throws {Error} When the footer actions container is not accessible or inner HTML is null
     */
    getFooterActionsInnerHtml(): Promise<string>;
    /**
     * @desc Read the introductory paragraph text: 'Save the current decision path configuration as a new scenario'
     * @returns {Promise<string>} The description paragraph text exactly as it appears in the UI
     * @throws {Error} When the description text content is not accessible or null
     */
    getDescriptionText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the form fields container to inspect all form field states and summary count
     * @returns {Promise<string>} The inner HTML of the form fields container exactly as it appears
     * @throws {Error} When the form fields container is not accessible or inner HTML is null
     */
    getFormFieldsContainerInnerHtml(): Promise<string>;
    /**
     * @desc Read the error message text displayed to the user
     * e.g., 'Please enter a scenario name' or 'Failed to save scenario'
     * @returns {Promise<string>} The error message text exactly as it appears in the UI
     * @throws {Error} When the error message element is not visible or text content is null
     */
    getErrorMessageText(): Promise<string>;
    /**
     * @desc Get the CSS class list of the error message div to verify styling
     * e.g., red background/border classes
     * @returns {Promise<string[]>} Array of CSS class names on the error message element
     * @throws {Error} When the error message element is not visible or class attribute is inaccessible
     */
    getErrorMessageClassList(): Promise<string[]>;
    /**
     * @desc Get the current value of the scenario name input field
     * @returns {Promise<string>} The current value of the scenario name input exactly as it appears
     * @throws {Error} When the scenario name input is not visible or value is inaccessible
     */
    getScenarioNameInputValue(): Promise<string>;
    /**
     * @desc Get the current value of the scenario description textarea
     * @returns {Promise<string>} The current value of the scenario description textarea exactly as it appears
     * @throws {Error} When the scenario description textarea is not visible or value is inaccessible
     */
    getScenarioDescriptionInputValue(): Promise<string>;
    /**
     * @desc Get the text content of the decision path summary section
     * Displays the count of enabled decision paths in this scenario
     * @returns {Promise<string>} The summary text exactly as it appears in the UI
     * @throws {Error} When the decision path summary element is not visible or text content is null
     */
    getDecisionPathSummaryText(): Promise<string>;
    /**
     * @desc Get the text label of the Save Scenario button (e.g., 'Save Scenario' or 'Saving...')
     * @returns {Promise<string>} The button label text exactly as it appears in the UI
     * @throws {Error} When the Save button is not visible or text content is null
     */
    getSaveButtonText(): Promise<string>;
    /**
     * @desc Fill in the scenario name and optional description, then click Save Scenario
     * A composite method that populates the form and submits it
     * @param {string} name - The scenario name to enter (required)
     * @param {string} [description] - The optional scenario description to enter
     * @throws {Error} When any form field or the Save button is not accessible
     */
    fillFormAndClickSave(name: string, description?: string): Promise<void>;
}
