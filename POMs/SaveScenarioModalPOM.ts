/**
 * Page Object Model: SaveScenarioModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const SaveScenarioModalPOM_StandardSelector = '[data-testid="save-scenario-modal"]';

export class SaveScenarioModalPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_modalContainer: string;
  private readonly selector_footerActions: string;
  private readonly selector_descriptionText: string;
  private readonly selector_formFieldsContainer: string;
  private readonly selector_errorMessage: string;
  private readonly selector_scenarioNameInput: string;
  private readonly selector_scenarioDescriptionInput: string;
  private readonly selector_cancelButton: string;
  private readonly selector_saveButton: string;
  private readonly selector_decisionPathSummary: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = SaveScenarioModalPOM_StandardSelector;
    this.selector_modalContainer = this.rootSelector;
    this.selector_footerActions = `${this.rootSelector} .mt-6.flex.justify-end.gap-3`;
    this.selector_descriptionText = `${this.rootSelector} p`;
    this.selector_formFieldsContainer = `${this.rootSelector} .space-y-4`;
    this.selector_errorMessage = `${this.rootSelector} [data-testid="save-scenario-error"]`;
    this.selector_scenarioNameInput = `${this.rootSelector} [data-testid="scenario-name-input"]`;
    this.selector_scenarioDescriptionInput = `${this.rootSelector} [data-testid="scenario-description-input"]`;
    this.selector_cancelButton = `${this.rootSelector} [data-testid="save-scenario-cancel-button"]`;
    this.selector_saveButton = `${this.rootSelector} [data-testid="save-scenario-save-button"]`;
    this.selector_decisionPathSummary = `${this.rootSelector} .bg-gray-50.rounded-md.p-3`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the Save Scenario modal is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const modal = page.locator(SaveScenarioModalPOM_StandardSelector);
      return await modal.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates modal visibility and returns a POM instance
   * @param page - Playwright Page instance
   * @returns {Promise<SaveScenarioModalPOM>} SaveScenarioModalPOM instance
   * @throws {Error} When the Save Scenario modal is not visible
   */
  static async getPOM(page: Page): Promise<SaveScenarioModalPOM> {
    const isVisible = await SaveScenarioModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'SaveScenarioModalPOM: Cannot instantiate - modal is not visible. ' +
          `Expected element [data-testid="save-scenario-modal"] to be visible.`
      );
    }

    return new SaveScenarioModalPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the Save Scenario modal container is currently visible/open on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  async isModalContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_modalContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the footer actions container (Cancel/Save buttons) is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the footer actions container is visible
   */
  async isFooterActionsVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_footerActions).isVisible({ timeout });
  }

  /**
   * @desc Check whether the introductory description paragraph is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the description paragraph is visible
   */
  async isDescriptionTextVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_descriptionText).isVisible({ timeout });
  }

  /**
   * @desc Check whether the form fields container (name, description, summary) is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the form fields container is visible
   */
  async isFormFieldsContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_formFieldsContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the error message div is currently rendered/visible
   * Only present when error state is non-empty
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the error message is visible
   */
  async isErrorMessageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_errorMessage).isVisible({ timeout });
  }

  /**
   * @desc Check whether the scenario name input is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the scenario name input is visible
   */
  async isScenarioNameInputVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_scenarioNameInput).isVisible({ timeout });
  }

  /**
   * @desc Check whether the scenario description textarea is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the scenario description textarea is visible
   */
  async isScenarioDescriptionInputVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_scenarioDescriptionInput).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Cancel button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the Cancel button is visible
   */
  async isCancelButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_cancelButton).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Save Scenario button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the Save Scenario button is visible
   */
  async isSaveButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_saveButton).isVisible({ timeout });
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Dismiss/close the Save Scenario modal by triggering the onClose handler
   * Expected outcome is that the modal will close and Redux closeSaveModal action will be dispatched
   * @throws {Error} When the modal container is not visible to dismiss
   */
  async dismissModal(): Promise<void> {
    const isVisible = await this.isModalContainerVisible();
    if (!isVisible) {
      throw new Error(
        `SaveScenarioModalPOM: Cannot dismiss modal - modal container is not visible. Selector: ${this.selector_modalContainer}`
      );
    }
    await this.page.locator(this.selector_cancelButton).click();
  }

  /**
   * @desc Click within the footer actions container to interact with Cancel or Save Scenario buttons
   * Expected outcome is that the clicked button action will be triggered
   * @throws {Error} When the footer actions container is not visible
   */
  async clickFooterActions(): Promise<void> {
    const isVisible = await this.isFooterActionsVisible();
    if (!isVisible) {
      throw new Error(
        `SaveScenarioModalPOM: Cannot click footer actions - container is not visible. Selector: ${this.selector_footerActions}`
      );
    }
    await this.page.locator(this.selector_footerActions).click();
  }

  /**
   * @desc Click the Cancel button to close the modal without saving
   * Expected outcome is that the modal will close and no scenario will be saved
   * @throws {Error} When the Cancel button is not visible or is disabled
   */
  async clickCancelButton(): Promise<void> {
    const isVisible = await this.isCancelButtonVisible();
    if (!isVisible) {
      throw new Error(
        `SaveScenarioModalPOM: Cannot click Cancel button - button is not visible. Selector: ${this.selector_cancelButton}`
      );
    }
    await this.page.locator(this.selector_cancelButton).click();
  }

  /**
   * @desc Click the Save Scenario button to submit the form and save the scenario
   * Expected outcome is that the scenario will be saved and the modal will close on success
   * @throws {Error} When the Save Scenario button is not visible or is disabled
   */
  async clickSaveButton(): Promise<void> {
    const isVisible = await this.isSaveButtonVisible();
    if (!isVisible) {
      throw new Error(
        `SaveScenarioModalPOM: Cannot click Save Scenario button - button is not visible. Selector: ${this.selector_saveButton}`
      );
    }
    await this.page.locator(this.selector_saveButton).click();
  }

  /**
   * @desc Enter text into the scenario name input field
   * Expected outcome is that the name field will be populated with the provided value
   * @param {string} name - The scenario name to enter
   * @throws {Error} When the scenario name input is not visible
   */
  async enterScenarioName(name: string): Promise<void> {
    const isVisible = await this.isScenarioNameInputVisible();
    if (!isVisible) {
      throw new Error(
        `SaveScenarioModalPOM: Cannot enter scenario name - input is not visible. Selector: ${this.selector_scenarioNameInput}`
      );
    }
    await this.page.locator(this.selector_scenarioNameInput).fill(name);
  }

  /**
   * @desc Enter text into the scenario description textarea
   * Expected outcome is that the description field will be populated with the provided value
   * @param {string} description - The scenario description to enter
   * @throws {Error} When the scenario description textarea is not visible
   */
  async enterScenarioDescription(description: string): Promise<void> {
    const isVisible = await this.isScenarioDescriptionInputVisible();
    if (!isVisible) {
      throw new Error(
        `SaveScenarioModalPOM: Cannot enter scenario description - textarea is not visible. Selector: ${this.selector_scenarioDescriptionInput}`
      );
    }
    await this.page.locator(this.selector_scenarioDescriptionInput).fill(description);
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Get the position and dimensions of the root modal container
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the modal container
   * @throws {Error} When the modal container is not visible or bounding box cannot be retrieved
   */
  async getModalContainerBoundingBox(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> {
    await this.page.locator(this.selector_modalContainer).isVisible();
    const boundingBox = await this.page.locator(this.selector_modalContainer).boundingBox();

    if (!boundingBox) {
      throw new Error(
        `SaveScenarioModalPOM: Bounding box is null for modal container. Selector: ${this.selector_modalContainer}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Get the inner HTML of the footer actions container to inspect button states and labels
   * @returns {Promise<string>} The inner HTML of the footer actions container exactly as it appears
   * @throws {Error} When the footer actions container is not accessible or inner HTML is null
   */
  async getFooterActionsInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_footerActions).isVisible();
    const html = await this.page.locator(this.selector_footerActions).innerHTML();

    if (html === null) {
      throw new Error(
        `SaveScenarioModalPOM: Inner HTML is null for footer actions container. Selector: ${this.selector_footerActions}`
      );
    }

    return html;
  }

  /**
   * @desc Read the introductory paragraph text: 'Save the current decision path configuration as a new scenario'
   * @returns {Promise<string>} The description paragraph text exactly as it appears in the UI
   * @throws {Error} When the description text content is not accessible or null
   */
  async getDescriptionText(): Promise<string> {
    await this.page.locator(this.selector_descriptionText).isVisible();
    const text = await this.page.locator(this.selector_descriptionText).textContent();

    if (text === null) {
      throw new Error(
        `SaveScenarioModalPOM: Description text content is null. Selector: ${this.selector_descriptionText}`
      );
    }

    return text;
  }

  /**
   * @desc Get the inner HTML of the form fields container to inspect all form field states and summary count
   * @returns {Promise<string>} The inner HTML of the form fields container exactly as it appears
   * @throws {Error} When the form fields container is not accessible or inner HTML is null
   */
  async getFormFieldsContainerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_formFieldsContainer).isVisible();
    const html = await this.page.locator(this.selector_formFieldsContainer).innerHTML();

    if (html === null) {
      throw new Error(
        `SaveScenarioModalPOM: Inner HTML is null for form fields container. Selector: ${this.selector_formFieldsContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Read the error message text displayed to the user
   * e.g., 'Please enter a scenario name' or 'Failed to save scenario'
   * @returns {Promise<string>} The error message text exactly as it appears in the UI
   * @throws {Error} When the error message element is not visible or text content is null
   */
  async getErrorMessageText(): Promise<string> {
    await this.page.locator(this.selector_errorMessage).isVisible();
    const text = await this.page.locator(this.selector_errorMessage).textContent();

    if (text === null) {
      throw new Error(
        `SaveScenarioModalPOM: Error message text content is null. Selector: ${this.selector_errorMessage}`
      );
    }

    return text;
  }

  /**
   * @desc Get the CSS class list of the error message div to verify styling
   * e.g., red background/border classes
   * @returns {Promise<string[]>} Array of CSS class names on the error message element
   * @throws {Error} When the error message element is not visible or class attribute is inaccessible
   */
  async getErrorMessageClassList(): Promise<string[]> {
    await this.page.locator(this.selector_errorMessage).isVisible();
    const classAttribute = await this.page
      .locator(this.selector_errorMessage)
      .getAttribute('class');

    if (classAttribute === null) {
      throw new Error(
        `SaveScenarioModalPOM: Class attribute is null for error message element. Selector: ${this.selector_errorMessage}`
      );
    }

    return classAttribute.split(' ').filter((cls) => cls.length > 0);
  }

  /**
   * @desc Get the current value of the scenario name input field
   * @returns {Promise<string>} The current value of the scenario name input exactly as it appears
   * @throws {Error} When the scenario name input is not visible or value is inaccessible
   */
  async getScenarioNameInputValue(): Promise<string> {
    await this.page.locator(this.selector_scenarioNameInput).isVisible();
    const value = await this.page
      .locator(this.selector_scenarioNameInput)
      .inputValue();

    return value;
  }

  /**
   * @desc Get the current value of the scenario description textarea
   * @returns {Promise<string>} The current value of the scenario description textarea exactly as it appears
   * @throws {Error} When the scenario description textarea is not visible or value is inaccessible
   */
  async getScenarioDescriptionInputValue(): Promise<string> {
    await this.page.locator(this.selector_scenarioDescriptionInput).isVisible();
    const value = await this.page
      .locator(this.selector_scenarioDescriptionInput)
      .inputValue();

    return value;
  }

  /**
   * @desc Get the text content of the decision path summary section
   * Displays the count of enabled decision paths in this scenario
   * @returns {Promise<string>} The summary text exactly as it appears in the UI
   * @throws {Error} When the decision path summary element is not visible or text content is null
   */
  async getDecisionPathSummaryText(): Promise<string> {
    await this.page.locator(this.selector_decisionPathSummary).isVisible();
    const text = await this.page.locator(this.selector_decisionPathSummary).textContent();

    if (text === null) {
      throw new Error(
        `SaveScenarioModalPOM: Decision path summary text content is null. Selector: ${this.selector_decisionPathSummary}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text label of the Save Scenario button (e.g., 'Save Scenario' or 'Saving...')
   * @returns {Promise<string>} The button label text exactly as it appears in the UI
   * @throws {Error} When the Save button is not visible or text content is null
   */
  async getSaveButtonText(): Promise<string> {
    await this.page.locator(this.selector_saveButton).isVisible();
    const text = await this.page.locator(this.selector_saveButton).textContent();

    if (text === null) {
      throw new Error(
        `SaveScenarioModalPOM: Save button text content is null. Selector: ${this.selector_saveButton}`
      );
    }

    return text;
  }

  // ========================================================================
  // Composite Methods
  // ========================================================================

  /**
   * @desc Fill in the scenario name and optional description, then click Save Scenario
   * A composite method that populates the form and submits it
   * @param {string} name - The scenario name to enter (required)
   * @param {string} [description] - The optional scenario description to enter
   * @throws {Error} When any form field or the Save button is not accessible
   */
  async fillFormAndClickSave(name: string, description?: string): Promise<void> {
    await this.enterScenarioName(name);

    if (description !== undefined) {
      await this.enterScenarioDescription(description);
    }

    await this.clickSaveButton();
  }
}