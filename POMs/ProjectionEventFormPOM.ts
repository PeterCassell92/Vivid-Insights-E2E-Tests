/**
 * Page Object Model: ProjectionEventForm
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ProjectionEventFormPOM_StandardSelector = '[data-testid="projection-event-form"]';

export class ProjectionEventFormPOM {
  private readonly page: Page;

  // === SELECTORS ===
  private readonly rootSelector: string;

  // Loading state
  private readonly selector_loadingRuleContainer: string;

  // Form root
  private readonly selector_formRoot: string;

  // Form fields
  private readonly selector_eventNameInput: string;
  private readonly selector_eventDescriptionInput: string;
  private readonly selector_eventTypeSelect: string;
  private readonly selector_eventValueInput: string;
  private readonly selector_eventCertaintySelect: string;
  private readonly selector_eventPaidByInput: string;
  private readonly selector_eventPayToInput: string;
  private readonly selector_bankAccountSelect: string;
  private readonly selector_spendingTypeSelect: string;
  private readonly selector_recurringModeCheckbox: string;
  private readonly selector_revisionModeCheckbox: string;
  private readonly selector_steadyCostCheckbox: string;
  private readonly selector_frequencySelect: string;

  // Buttons
  private readonly selector_submitEventButton: string;
  private readonly selector_cancelEventButton: string;

  // Dynamic selectors
  private readonly selector_spendingTypeOption: (spendingTypeId: string) => string;
  private readonly selector_bankAccountOption: (accountId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = ProjectionEventFormPOM_StandardSelector;

    // Loading state (mutually exclusive with form root)
    this.selector_loadingRuleContainer = '[data-testid="loading-rule"]';

    // Form root
    this.selector_formRoot = this.rootSelector;

    // Form fields
    this.selector_eventNameInput = `${this.rootSelector} [data-testid="event-name-input"]`;
    this.selector_eventDescriptionInput = `${this.rootSelector} [data-testid="event-description-input"]`;
    this.selector_eventTypeSelect = `${this.rootSelector} [data-testid="event-type-select"]`;
    this.selector_eventValueInput = `${this.rootSelector} [data-testid="event-value-input"]`;
    this.selector_eventCertaintySelect = `${this.rootSelector} [data-testid="event-certainty-select"]`;
    this.selector_eventPaidByInput = `${this.rootSelector} [data-testid="event-paidby-input"]`;
    this.selector_eventPayToInput = `${this.rootSelector} [data-testid="event-payto-input"]`;
    this.selector_bankAccountSelect = `${this.rootSelector} [data-testid="bank-account-select"]`;
    this.selector_spendingTypeSelect = `${this.rootSelector} [data-testid="spending-type-select"]`;
    this.selector_recurringModeCheckbox = `${this.rootSelector} [data-testid="recurring-mode-checkbox"]`;
    this.selector_revisionModeCheckbox = `${this.rootSelector} [data-testid="revision-mode-checkbox"]`;
    this.selector_steadyCostCheckbox = `${this.rootSelector} [data-testid="steady-cost-checkbox"]`;
    this.selector_frequencySelect = `${this.rootSelector} [data-testid="frequency-select"]`;

    // Buttons
    this.selector_submitEventButton = `${this.rootSelector} [data-testid="submit-event-button"]`;
    this.selector_cancelEventButton = `${this.rootSelector} [data-testid="cancel-event-button"]`;

    // Dynamic selectors
    this.selector_spendingTypeOption = (spendingTypeId: string) =>
      `${this.rootSelector} [data-testid="spending-type-select"] option[value="${spendingTypeId}"]`;

    this.selector_bankAccountOption = (accountId: string) =>
      `${this.rootSelector} [data-testid="bank-account-select"] option[value="${accountId}"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the ProjectionEventForm is currently visible on the page
   * @param {Page} page - Playwright Page instance
   * @returns {Promise<boolean>} True if the form is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const form = page.locator(ProjectionEventFormPOM_StandardSelector);
      return await form.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a ProjectionEventFormPOM instance
   * @param {Page} page - Playwright Page instance
   * @returns {Promise<ProjectionEventFormPOM>} ProjectionEventFormPOM instance
   * @throws {Error} When the projection event form is not visible
   */
  static async getPOM(page: Page): Promise<ProjectionEventFormPOM> {
    const isVisible = await ProjectionEventFormPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ProjectionEventFormPOM: Cannot instantiate - projection event form is not visible. ' +
        `Expected element [${ProjectionEventFormPOM_StandardSelector}] to be visible.`
      );
    }

    return new ProjectionEventFormPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the loading state placeholder is visible (i.e., rule/event data is still being fetched)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading rule container is visible
   */
  async isLoadingRuleVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_loadingRuleContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the projection event form is visible (i.e., not in loading state)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the form root is visible
   */
  async isFormVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_formRoot).isVisible({ timeout });
  }

  /**
   * @desc Check whether the event type select is enabled (disabled in revision mode)
   * @returns {Promise<boolean>} True if the event type select is enabled
   */
  async isEventTypeSelectEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_eventTypeSelect).isEnabled();
  }

  /**
   * @desc Check whether the certainty select is enabled (disabled in revision mode)
   * @returns {Promise<boolean>} True if the certainty select is enabled
   */
  async isEventCertaintySelectEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_eventCertaintySelect).isEnabled();
  }

  /**
   * @desc Check whether the Paid By input is visible (only rendered when event type is INCOMING)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the Paid By input is visible
   */
  async isEventPaidByInputVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_eventPaidByInput).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Paid By input is enabled (disabled in revision mode)
   * @returns {Promise<boolean>} True if the Paid By input is enabled
   */
  async isEventPaidByInputEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_eventPaidByInput).isEnabled();
  }

  /**
   * @desc Check whether the Pay To input is visible (only rendered when event type is EXPENSE)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the Pay To input is visible
   */
  async isEventPayToInputVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_eventPayToInput).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Pay To input is enabled (disabled in revision mode)
   * @returns {Promise<boolean>} True if the Pay To input is enabled
   */
  async isEventPayToInputEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_eventPayToInput).isEnabled();
  }

  /**
   * @desc Check whether the submit button is enabled (disabled while submitting)
   * @returns {Promise<boolean>} True if the submit button is enabled
   */
  async isSubmitEventButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_submitEventButton).isEnabled();
  }

  /**
   * @desc Check whether the event name input is enabled (disabled in revision mode)
   * @returns {Promise<boolean>} True if the event name input is enabled
   */
  async isEventNameInputEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_eventNameInput).isEnabled();
  }

  /**
   * @desc Check whether the revision mode checkbox is visible (only rendered when isEditMode is true)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the revision mode checkbox is visible
   */
  async isRevisionModeCheckboxVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_revisionModeCheckbox).isVisible({ timeout });
  }

  /**
   * @desc Check whether the steady cost checkbox is visible (only rendered in recurring section and hidden in revision mode)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the steady cost checkbox is visible
   */
  async isSteadyCostCheckboxVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_steadyCostCheckbox).isVisible({ timeout });
  }

  /**
   * @desc Check whether the bank account select is enabled (disabled in revision mode)
   * @returns {Promise<boolean>} True if the bank account select is enabled
   */
  async isBankAccountSelectEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_bankAccountSelect).isEnabled();
  }

  /**
   * @desc Check whether the bank account select is visible (conditionally rendered when accounts are loaded and at least one exists)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the bank account select is visible
   */
  async isBankAccountSelectVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_bankAccountSelect).isVisible({ timeout });
  }

  /**
   * @desc Check whether the event value input is enabled (always enabled, including revision mode)
   * @returns {Promise<boolean>} True if the event value input is enabled
   */
  async isEventValueInputEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_eventValueInput).isEnabled();
  }

  /**
   * @desc Check whether the cancel button is enabled (disabled while submitting)
   * @returns {Promise<boolean>} True if the cancel button is enabled
   */
  async isCancelEventButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_cancelEventButton).isEnabled();
  }

  /**
   * @desc Check whether the frequency select is visible (only rendered when recurrentMode is true)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the frequency select is visible
   */
  async isFrequencySelectVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_frequencySelect).isVisible({ timeout });
  }

  /**
   * @desc Check whether the recurring mode checkbox is enabled (disabled when in edit mode)
   * @returns {Promise<boolean>} True if the recurring mode checkbox is enabled
   */
  async isRecurringModeCheckboxEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_recurringModeCheckbox).isEnabled();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Submit the projection event form directly (via form submit)
   * Expected outcome is that the form will be submitted
   */
  async submitForm(): Promise<void> {
    await this.page.locator(this.selector_formRoot).dispatchEvent('submit');
  }

  /**
   * @desc Select the event type (EXPENSE or INCOMING) from the dropdown. Disabled in revision mode.
   * Expected outcome is that the event type will be updated
   * @param {'EXPENSE' | 'INCOMING'} eventType - The event type to select
   */
  async selectEventType(eventType: 'EXPENSE' | 'INCOMING'): Promise<void> {
    await this.page.locator(this.selector_eventTypeSelect).selectOption(eventType);
  }

  /**
   * @desc Clear the current description from the textarea
   * Expected outcome is that the description field will be empty
   */
  async clearEventDescription(): Promise<void> {
    await this.page.locator(this.selector_eventDescriptionInput).clear();
  }

  /**
   * @desc Type an optional description into the textarea
   * Expected outcome is that the description field will contain the provided text
   * @param {string} description - The description text to enter
   */
  async fillEventDescription(description: string): Promise<void> {
    await this.page.locator(this.selector_eventDescriptionInput).fill(description);
  }

  /**
   * @desc Select the certainty level from the dropdown. Disabled in revision mode.
   * Expected outcome is that the certainty level will be updated
   * @param {'CERTAIN' | 'LIKELY' | 'POSSIBLE' | 'UNLIKELY'} certainty - The certainty level to select
   */
  async selectEventCertainty(certainty: 'CERTAIN' | 'LIKELY' | 'POSSIBLE' | 'UNLIKELY'): Promise<void> {
    await this.page.locator(this.selector_eventCertaintySelect).selectOption(certainty);
  }

  /**
   * @desc Clear the current payer name from the Paid By input field
   * Expected outcome is that the Paid By field will be empty
   */
  async clearEventPaidBy(): Promise<void> {
    await this.page.locator(this.selector_eventPaidByInput).clear();
  }

  /**
   * @desc Type the payer name into the Paid By text input. Only rendered when event type is INCOMING. Disabled in revision mode.
   * Expected outcome is that the Paid By field will contain the provided text
   * @param {string} paidBy - The payer name to enter
   */
  async fillEventPaidBy(paidBy: string): Promise<void> {
    await this.page.locator(this.selector_eventPaidByInput).fill(paidBy);
  }

  /**
   * @desc Clear the current payee name from the Pay To input field
   * Expected outcome is that the Pay To field will be empty
   */
  async clearEventPayTo(): Promise<void> {
    await this.page.locator(this.selector_eventPayToInput).clear();
  }

  /**
   * @desc Type the payee name into the Pay To text input. Only rendered when event type is EXPENSE. Disabled in revision mode.
   * Expected outcome is that the Pay To field will contain the provided text
   * @param {string} payTo - The payee name to enter
   */
  async fillEventPayTo(payTo: string): Promise<void> {
    await this.page.locator(this.selector_eventPayToInput).fill(payTo);
  }

  /**
   * @desc Click the primary submit button to create or update the event/rule. Disabled while submitting.
   * Expected outcome is that the form will be submitted
   */
  async clickSubmitEventButton(): Promise<void> {
    await this.page.locator(this.selector_submitEventButton).click();
  }

  /**
   * @desc Clear the current event name from the input field
   * Expected outcome is that the event name field will be empty
   */
  async clearEventName(): Promise<void> {
    await this.page.locator(this.selector_eventNameInput).clear();
  }

  /**
   * @desc Type the event name into the text input. Disabled in revision mode.
   * Expected outcome is that the event name field will contain the provided text
   * @param {string} name - The event name to enter
   */
  async fillEventName(name: string): Promise<void> {
    await this.page.locator(this.selector_eventNameInput).fill(name);
  }

  /**
   * @desc Select an optional spending type category from the dropdown
   * Expected outcome is that the spending type will be updated
   * @param {string} spendingTypeId - The spending type ID to select
   */
  async selectSpendingType(spendingTypeId: string): Promise<void> {
    await this.page.locator(this.selector_spendingTypeSelect).selectOption(spendingTypeId);
  }

  /**
   * @desc Uncheck the revision mode checkbox to disable revision mode
   * Expected outcome is that revision mode will be disabled
   */
  async uncheckRevisionMode(): Promise<void> {
    await this.page.locator(this.selector_revisionModeCheckbox).uncheck();
  }

  /**
   * @desc Check the revision mode checkbox to enable revision (value-change) mode. Only rendered when isEditMode is true.
   * Expected outcome is that revision mode will be enabled
   */
  async checkRevisionMode(): Promise<void> {
    await this.page.locator(this.selector_revisionModeCheckbox).check();
  }

  /**
   * @desc Uncheck the steady cost checkbox to unmark the event as a steady cost
   * Expected outcome is that the steady cost flag will be disabled
   */
  async uncheckSteadyCost(): Promise<void> {
    await this.page.locator(this.selector_steadyCostCheckbox).uncheck();
  }

  /**
   * @desc Check the steady cost checkbox to mark the event as a steady cost. Only rendered inside the recurring section and hidden in revision mode.
   * Expected outcome is that the steady cost flag will be enabled
   */
  async checkSteadyCost(): Promise<void> {
    await this.page.locator(this.selector_steadyCostCheckbox).check();
  }

  /**
   * @desc Select a bank account from the dropdown. Conditionally rendered when accounts are loaded and at least one exists. Disabled in revision mode.
   * Expected outcome is that the bank account selection will be updated
   * @param {string} accountId - The bank account ID to select
   */
  async selectBankAccount(accountId: string): Promise<void> {
    await this.page.locator(this.selector_bankAccountSelect).selectOption(accountId);
  }

  /**
   * @desc Enter the numeric amount for the event. Always enabled, including revision mode where it represents the new value.
   * Expected outcome is that the event value field will contain the provided amount
   * @param {string} value - The numeric amount to enter
   */
  async fillEventValue(value: string): Promise<void> {
    await this.page.locator(this.selector_eventValueInput).fill(value);
  }

  /**
   * @desc Clear the current amount value from the numeric input
   * Expected outcome is that the event value field will be empty
   */
  async clearEventValue(): Promise<void> {
    await this.page.locator(this.selector_eventValueInput).clear();
  }

  /**
   * @desc Click the cancel button to dismiss the form without saving. Disabled while submitting.
   * Expected outcome is that the form will be dismissed without saving
   */
  async clickCancelEventButton(): Promise<void> {
    await this.page.locator(this.selector_cancelEventButton).click();
  }

  /**
   * @desc Select the recurrence frequency from the dropdown. Only rendered when recurrentMode is true.
   * Expected outcome is that the recurrence frequency will be updated
   * @param {'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'BIANNUAL' | 'ANNUAL'} frequency - The frequency to select
   */
  async selectFrequency(frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'BIANNUAL' | 'ANNUAL'): Promise<void> {
    await this.page.locator(this.selector_frequencySelect).selectOption(frequency);
  }

  /**
   * @desc Check the recurring mode checkbox to enable recurring event mode
   * Expected outcome is that recurring mode will be enabled
   */
  async checkRecurringMode(): Promise<void> {
    await this.page.locator(this.selector_recurringModeCheckbox).check();
  }

  /**
   * @desc Uncheck the recurring mode checkbox to disable recurring event mode
   * Expected outcome is that recurring mode will be disabled
   */
  async uncheckRecurringMode(): Promise<void> {
    await this.page.locator(this.selector_recurringModeCheckbox).uncheck();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the loading message text displayed while rule/event data is being fetched
   * @returns {Promise<string>} The loading message text exactly as it appears in the UI
   * @throws {Error} When loading rule container content is not accessible or null
   */
  async getLoadingRuleText(): Promise<string> {
    await this.page.locator(this.selector_loadingRuleContainer).isVisible();
    const text = await this.page.locator(this.selector_loadingRuleContainer).textContent();

    if (text === null) {
      throw new Error(
        `ProjectionEventFormPOM: Loading rule container text content is null. Selector: ${this.selector_loadingRuleContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the currently selected event type (EXPENSE or INCOMING)
   * @returns {Promise<string>} The currently selected event type value exactly as it appears
   * @throws {Error} When event type select content is not accessible or null
   */
  async getEventTypeValue(): Promise<string> {
    await this.page.locator(this.selector_eventTypeSelect).isVisible();
    const value = await this.page.locator(this.selector_eventTypeSelect).inputValue();

    if (value === null) {
      throw new Error(
        `ProjectionEventFormPOM: Event type select value is null. Selector: ${this.selector_eventTypeSelect}`
      );
    }

    return value;
  }

  /**
   * @desc Get the current value of the event description textarea
   * @returns {Promise<string>} The current description value exactly as it appears
   * @throws {Error} When event description input content is not accessible or null
   */
  async getEventDescriptionValue(): Promise<string> {
    await this.page.locator(this.selector_eventDescriptionInput).isVisible();
    const value = await this.page.locator(this.selector_eventDescriptionInput).inputValue();

    if (value === null) {
      throw new Error(
        `ProjectionEventFormPOM: Event description input value is null. Selector: ${this.selector_eventDescriptionInput}`
      );
    }

    return value;
  }

  /**
   * @desc Get the currently selected certainty level
   * @returns {Promise<string>} The currently selected certainty value exactly as it appears
   * @throws {Error} When event certainty select content is not accessible or null
   */
  async getEventCertaintyValue(): Promise<string> {
    await this.page.locator(this.selector_eventCertaintySelect).isVisible();
    const value = await this.page.locator(this.selector_eventCertaintySelect).inputValue();

    if (value === null) {
      throw new Error(
        `ProjectionEventFormPOM: Event certainty select value is null. Selector: ${this.selector_eventCertaintySelect}`
      );
    }

    return value;
  }

  /**
   * @desc Get the current payer name value from the Paid By input. Only rendered when event type is INCOMING.
   * @returns {Promise<string>} The current Paid By value exactly as it appears
   * @throws {Error} When Paid By input content is not accessible or null
   */
  async getEventPaidByValue(): Promise<string> {
    await this.page.locator(this.selector_eventPaidByInput).isVisible();
    const value = await this.page.locator(this.selector_eventPaidByInput).inputValue();

    if (value === null) {
      throw new Error(
        `ProjectionEventFormPOM: Event Paid By input value is null. Selector: ${this.selector_eventPaidByInput}`
      );
    }

    return value;
  }

  /**
   * @desc Get the current payee name value from the Pay To input. Only rendered when event type is EXPENSE.
   * @returns {Promise<string>} The current Pay To value exactly as it appears
   * @throws {Error} When Pay To input content is not accessible or null
   */
  async getEventPayToValue(): Promise<string> {
    await this.page.locator(this.selector_eventPayToInput).isVisible();
    const value = await this.page.locator(this.selector_eventPayToInput).inputValue();

    if (value === null) {
      throw new Error(
        `ProjectionEventFormPOM: Event Pay To input value is null. Selector: ${this.selector_eventPayToInput}`
      );
    }

    return value;
  }

  /**
   * @desc Get the current label text of the submit button, which changes dynamically based on mode and submitting state
   * @returns {Promise<string>} The submit button label text exactly as it appears
   * @throws {Error} When submit button text content is not accessible or null
   */
  async getSubmitEventButtonText(): Promise<string> {
    await this.page.locator(this.selector_submitEventButton).isVisible();
    const text = await this.page.locator(this.selector_submitEventButton).textContent();

    if (text === null) {
      throw new Error(
        `ProjectionEventFormPOM: Submit event button text content is null. Selector: ${this.selector_submitEventButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the current value of the event name input field
   * @returns {Promise<string>} The current event name value exactly as it appears
   * @throws {Error} When event name input content is not accessible or null
   */
  async getEventNameValue(): Promise<string> {
    await this.page.locator(this.selector_eventNameInput).isVisible();
    const value = await this.page.locator(this.selector_eventNameInput).inputValue();

    if (value === null) {
      throw new Error(
        `ProjectionEventFormPOM: Event name input value is null. Selector: ${this.selector_eventNameInput}`
      );
    }

    return value;
  }

  /**
   * @desc Get the currently selected spending type ID
   * @returns {Promise<string>} The currently selected spending type ID exactly as it appears
   * @throws {Error} When spending type select content is not accessible or null
   */
  async getSpendingTypeValue(): Promise<string> {
    await this.page.locator(this.selector_spendingTypeSelect).isVisible();
    const value = await this.page.locator(this.selector_spendingTypeSelect).inputValue();

    if (value === null) {
      throw new Error(
        `ProjectionEventFormPOM: Spending type select value is null. Selector: ${this.selector_spendingTypeSelect}`
      );
    }

    return value;
  }

  /**
   * @desc Get the list of all available spending type option values from the dropdown
   * @returns {Promise<string[]>} Array of spending type option values
   * @throws {Error} When spending type select is not accessible
   */
  async getSpendingTypeOptionList(): Promise<string[]> {
    await this.page.locator(this.selector_spendingTypeSelect).isVisible();
    const options = await this.page.locator(`${this.selector_spendingTypeSelect} option`).all();
    const values: string[] = [];

    for (const option of options) {
      const value = await option.getAttribute('value');
      if (value !== null) {
        values.push(value);
      }
    }

    return values;
  }

  /**
   * @desc Count the number of spending type options available in the dropdown
   * @returns {Promise<number>} The number of spending type options
   * @throws {Error} When spending type select is not accessible
   */
  async getSpendingTypeOptionCount(): Promise<number> {
    await this.page.locator(this.selector_spendingTypeSelect).isVisible();
    return await this.page.locator(`${this.selector_spendingTypeSelect} option`).count();
  }

  /**
   * @desc Get the checked state of the revision mode checkbox to determine if revision mode is active
   * @returns {Promise<boolean>} True if revision mode checkbox is checked
   */
  async isRevisionModeChecked(): Promise<boolean> {
    return await this.page.locator(this.selector_revisionModeCheckbox).isChecked();
  }

  /**
   * @desc Get the checked state of the steady cost checkbox
   * @returns {Promise<boolean>} True if steady cost checkbox is checked
   */
  async isSteadyCostChecked(): Promise<boolean> {
    return await this.page.locator(this.selector_steadyCostCheckbox).isChecked();
  }

  /**
   * @desc Get the list of all available bank account option values from the dropdown
   * @returns {Promise<string[]>} Array of bank account option values
   * @throws {Error} When bank account select is not accessible
   */
  async getBankAccountOptionList(): Promise<string[]> {
    await this.page.locator(this.selector_bankAccountSelect).isVisible();
    const options = await this.page.locator(`${this.selector_bankAccountSelect} option`).all();
    const values: string[] = [];

    for (const option of options) {
      const value = await option.getAttribute('value');
      if (value !== null) {
        values.push(value);
      }
    }

    return values;
  }

  /**
   * @desc Count the number of bank account options available in the dropdown
   * @returns {Promise<number>} The number of bank account options
   * @throws {Error} When bank account select is not accessible
   */
  async getBankAccountOptionCount(): Promise<number> {
    await this.page.locator(this.selector_bankAccountSelect).isVisible();
    return await this.page.locator(`${this.selector_bankAccountSelect} option`).count();
  }

  /**
   * @desc Get the currently selected bank account ID
   * @returns {Promise<string>} The currently selected bank account ID exactly as it appears
   * @throws {Error} When bank account select content is not accessible or null
   */
  async getBankAccountValue(): Promise<string> {
    await this.page.locator(this.selector_bankAccountSelect).isVisible();
    const value = await this.page.locator(this.selector_bankAccountSelect).inputValue();

    if (value === null) {
      throw new Error(
        `ProjectionEventFormPOM: Bank account select value is null. Selector: ${this.selector_bankAccountSelect}`
      );
    }

    return value;
  }

  /**
   * @desc Get the current numeric amount entered in the event value input
   * @returns {Promise<string>} The current event value exactly as it appears
   * @throws {Error} When event value input content is not accessible or null
   */
  async getEventValueInput(): Promise<string> {
    await this.page.locator(this.selector_eventValueInput).isVisible();
    const value = await this.page.locator(this.selector_eventValueInput).inputValue();

    if (value === null) {
      throw new Error(
        `ProjectionEventFormPOM: Event value input value is null. Selector: ${this.selector_eventValueInput}`
      );
    }

    return value;
  }

  /**
   * @desc Get the text content of the cancel button
   * @returns {Promise<string>} The cancel button text exactly as it appears
   * @throws {Error} When cancel button text content is not accessible or null
   */
  async getCancelEventButtonText(): Promise<string> {
    await this.page.locator(this.selector_cancelEventButton).isVisible();
    const text = await this.page.locator(this.selector_cancelEventButton).textContent();

    if (text === null) {
      throw new Error(
        `ProjectionEventFormPOM: Cancel event button text content is null. Selector: ${this.selector_cancelEventButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the currently selected recurrence frequency
   * @returns {Promise<string>} The currently selected frequency value exactly as it appears
   * @throws {Error} When frequency select content is not accessible or null
   */
  async getFrequencyValue(): Promise<string> {
    await this.page.locator(this.selector_frequencySelect).isVisible();
    const value = await this.page.locator(this.selector_frequencySelect).inputValue();

    if (value === null) {
      throw new Error(
        `ProjectionEventFormPOM: Frequency select value is null. Selector: ${this.selector_frequencySelect}`
      );
    }

    return value;
  }

  /**
   * @desc Get the checked state of the recurring mode checkbox to determine if recurring mode is active
   * @returns {Promise<boolean>} True if recurring mode checkbox is checked
   */
  async isRecurringModeChecked(): Promise<boolean> {
    return await this.page.locator(this.selector_recurringModeCheckbox).isChecked();
  }
}