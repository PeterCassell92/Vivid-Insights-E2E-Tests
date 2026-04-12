/**
 * Page Object Model: ProjectionEventForm
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ProjectionEventFormPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_loadingRuleContainer;
    private readonly selector_formRoot;
    private readonly selector_eventNameInput;
    private readonly selector_eventDescriptionInput;
    private readonly selector_eventTypeSelect;
    private readonly selector_eventValueInput;
    private readonly selector_eventCertaintySelect;
    private readonly selector_eventPaidByInput;
    private readonly selector_eventPayToInput;
    private readonly selector_bankAccountSelect;
    private readonly selector_spendingTypeSelect;
    private readonly selector_recurringModeCheckbox;
    private readonly selector_revisionModeCheckbox;
    private readonly selector_steadyCostCheckbox;
    private readonly selector_frequencySelect;
    private readonly selector_submitEventButton;
    private readonly selector_cancelEventButton;
    private readonly selector_spendingTypeOption;
    private readonly selector_bankAccountOption;
    constructor(page: Page);
    /**
     * @desc Checks if the ProjectionEventForm is currently visible on the page
     * @param {Page} page - Playwright Page instance
     * @returns {Promise<boolean>} True if the form is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a ProjectionEventFormPOM instance
     * @param {Page} page - Playwright Page instance
     * @returns {Promise<ProjectionEventFormPOM>} ProjectionEventFormPOM instance
     * @throws {Error} When the projection event form is not visible
     */
    static getPOM(page: Page): Promise<ProjectionEventFormPOM>;
    /**
     * @desc Check whether the loading state placeholder is visible (i.e., rule/event data is still being fetched)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading rule container is visible
     */
    isLoadingRuleVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the projection event form is visible (i.e., not in loading state)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the form root is visible
     */
    isFormVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the event type select is enabled (disabled in revision mode)
     * @returns {Promise<boolean>} True if the event type select is enabled
     */
    isEventTypeSelectEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the certainty select is enabled (disabled in revision mode)
     * @returns {Promise<boolean>} True if the certainty select is enabled
     */
    isEventCertaintySelectEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the Paid By input is visible (only rendered when event type is INCOMING)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the Paid By input is visible
     */
    isEventPaidByInputVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Paid By input is enabled (disabled in revision mode)
     * @returns {Promise<boolean>} True if the Paid By input is enabled
     */
    isEventPaidByInputEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the Pay To input is visible (only rendered when event type is EXPENSE)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the Pay To input is visible
     */
    isEventPayToInputVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Pay To input is enabled (disabled in revision mode)
     * @returns {Promise<boolean>} True if the Pay To input is enabled
     */
    isEventPayToInputEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the submit button is enabled (disabled while submitting)
     * @returns {Promise<boolean>} True if the submit button is enabled
     */
    isSubmitEventButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the event name input is enabled (disabled in revision mode)
     * @returns {Promise<boolean>} True if the event name input is enabled
     */
    isEventNameInputEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the revision mode checkbox is visible (only rendered when isEditMode is true)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the revision mode checkbox is visible
     */
    isRevisionModeCheckboxVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the steady cost checkbox is visible (only rendered in recurring section and hidden in revision mode)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the steady cost checkbox is visible
     */
    isSteadyCostCheckboxVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the bank account select is enabled (disabled in revision mode)
     * @returns {Promise<boolean>} True if the bank account select is enabled
     */
    isBankAccountSelectEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the bank account select is visible (conditionally rendered when accounts are loaded and at least one exists)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the bank account select is visible
     */
    isBankAccountSelectVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the event value input is enabled (always enabled, including revision mode)
     * @returns {Promise<boolean>} True if the event value input is enabled
     */
    isEventValueInputEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the cancel button is enabled (disabled while submitting)
     * @returns {Promise<boolean>} True if the cancel button is enabled
     */
    isCancelEventButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the frequency select is visible (only rendered when recurrentMode is true)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the frequency select is visible
     */
    isFrequencySelectVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the recurring mode checkbox is enabled (disabled when in edit mode)
     * @returns {Promise<boolean>} True if the recurring mode checkbox is enabled
     */
    isRecurringModeCheckboxEnabled(): Promise<boolean>;
    /**
     * @desc Submit the projection event form directly (via form submit)
     * Expected outcome is that the form will be submitted
     */
    submitForm(): Promise<void>;
    /**
     * @desc Select the event type (EXPENSE or INCOMING) from the dropdown. Disabled in revision mode.
     * Expected outcome is that the event type will be updated
     * @param {'EXPENSE' | 'INCOMING'} eventType - The event type to select
     */
    selectEventType(eventType: 'EXPENSE' | 'INCOMING'): Promise<void>;
    /**
     * @desc Clear the current description from the textarea
     * Expected outcome is that the description field will be empty
     */
    clearEventDescription(): Promise<void>;
    /**
     * @desc Type an optional description into the textarea
     * Expected outcome is that the description field will contain the provided text
     * @param {string} description - The description text to enter
     */
    fillEventDescription(description: string): Promise<void>;
    /**
     * @desc Select the certainty level from the dropdown. Disabled in revision mode.
     * Expected outcome is that the certainty level will be updated
     * @param {'CERTAIN' | 'LIKELY' | 'POSSIBLE' | 'UNLIKELY'} certainty - The certainty level to select
     */
    selectEventCertainty(certainty: 'CERTAIN' | 'LIKELY' | 'POSSIBLE' | 'UNLIKELY'): Promise<void>;
    /**
     * @desc Clear the current payer name from the Paid By input field
     * Expected outcome is that the Paid By field will be empty
     */
    clearEventPaidBy(): Promise<void>;
    /**
     * @desc Type the payer name into the Paid By text input. Only rendered when event type is INCOMING. Disabled in revision mode.
     * Expected outcome is that the Paid By field will contain the provided text
     * @param {string} paidBy - The payer name to enter
     */
    fillEventPaidBy(paidBy: string): Promise<void>;
    /**
     * @desc Clear the current payee name from the Pay To input field
     * Expected outcome is that the Pay To field will be empty
     */
    clearEventPayTo(): Promise<void>;
    /**
     * @desc Type the payee name into the Pay To text input. Only rendered when event type is EXPENSE. Disabled in revision mode.
     * Expected outcome is that the Pay To field will contain the provided text
     * @param {string} payTo - The payee name to enter
     */
    fillEventPayTo(payTo: string): Promise<void>;
    /**
     * @desc Click the primary submit button to create or update the event/rule. Disabled while submitting.
     * Expected outcome is that the form will be submitted
     */
    clickSubmitEventButton(): Promise<void>;
    /**
     * @desc Clear the current event name from the input field
     * Expected outcome is that the event name field will be empty
     */
    clearEventName(): Promise<void>;
    /**
     * @desc Type the event name into the text input. Disabled in revision mode.
     * Expected outcome is that the event name field will contain the provided text
     * @param {string} name - The event name to enter
     */
    fillEventName(name: string): Promise<void>;
    /**
     * @desc Select an optional spending type category from the dropdown
     * Expected outcome is that the spending type will be updated
     * @param {string} spendingTypeId - The spending type ID to select
     */
    selectSpendingType(spendingTypeId: string): Promise<void>;
    /**
     * @desc Uncheck the revision mode checkbox to disable revision mode
     * Expected outcome is that revision mode will be disabled
     */
    uncheckRevisionMode(): Promise<void>;
    /**
     * @desc Check the revision mode checkbox to enable revision (value-change) mode. Only rendered when isEditMode is true.
     * Expected outcome is that revision mode will be enabled
     */
    checkRevisionMode(): Promise<void>;
    /**
     * @desc Uncheck the steady cost checkbox to unmark the event as a steady cost
     * Expected outcome is that the steady cost flag will be disabled
     */
    uncheckSteadyCost(): Promise<void>;
    /**
     * @desc Check the steady cost checkbox to mark the event as a steady cost. Only rendered inside the recurring section and hidden in revision mode.
     * Expected outcome is that the steady cost flag will be enabled
     */
    checkSteadyCost(): Promise<void>;
    /**
     * @desc Select a bank account from the dropdown. Conditionally rendered when accounts are loaded and at least one exists. Disabled in revision mode.
     * Expected outcome is that the bank account selection will be updated
     * @param {string} accountId - The bank account ID to select
     */
    selectBankAccount(accountId: string): Promise<void>;
    /**
     * @desc Enter the numeric amount for the event. Always enabled, including revision mode where it represents the new value.
     * Expected outcome is that the event value field will contain the provided amount
     * @param {string} value - The numeric amount to enter
     */
    fillEventValue(value: string): Promise<void>;
    /**
     * @desc Clear the current amount value from the numeric input
     * Expected outcome is that the event value field will be empty
     */
    clearEventValue(): Promise<void>;
    /**
     * @desc Click the cancel button to dismiss the form without saving. Disabled while submitting.
     * Expected outcome is that the form will be dismissed without saving
     */
    clickCancelEventButton(): Promise<void>;
    /**
     * @desc Select the recurrence frequency from the dropdown. Only rendered when recurrentMode is true.
     * Expected outcome is that the recurrence frequency will be updated
     * @param {'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'BIANNUAL' | 'ANNUAL'} frequency - The frequency to select
     */
    selectFrequency(frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'BIANNUAL' | 'ANNUAL'): Promise<void>;
    /**
     * @desc Check the recurring mode checkbox to enable recurring event mode
     * Expected outcome is that recurring mode will be enabled
     */
    checkRecurringMode(): Promise<void>;
    /**
     * @desc Uncheck the recurring mode checkbox to disable recurring event mode
     * Expected outcome is that recurring mode will be disabled
     */
    uncheckRecurringMode(): Promise<void>;
    /**
     * @desc Get the loading message text displayed while rule/event data is being fetched
     * @returns {Promise<string>} The loading message text exactly as it appears in the UI
     * @throws {Error} When loading rule container content is not accessible or null
     */
    getLoadingRuleText(): Promise<string>;
    /**
     * @desc Get the currently selected event type (EXPENSE or INCOMING)
     * @returns {Promise<string>} The currently selected event type value exactly as it appears
     * @throws {Error} When event type select content is not accessible or null
     */
    getEventTypeValue(): Promise<string>;
    /**
     * @desc Get the current value of the event description textarea
     * @returns {Promise<string>} The current description value exactly as it appears
     * @throws {Error} When event description input content is not accessible or null
     */
    getEventDescriptionValue(): Promise<string>;
    /**
     * @desc Get the currently selected certainty level
     * @returns {Promise<string>} The currently selected certainty value exactly as it appears
     * @throws {Error} When event certainty select content is not accessible or null
     */
    getEventCertaintyValue(): Promise<string>;
    /**
     * @desc Get the current payer name value from the Paid By input. Only rendered when event type is INCOMING.
     * @returns {Promise<string>} The current Paid By value exactly as it appears
     * @throws {Error} When Paid By input content is not accessible or null
     */
    getEventPaidByValue(): Promise<string>;
    /**
     * @desc Get the current payee name value from the Pay To input. Only rendered when event type is EXPENSE.
     * @returns {Promise<string>} The current Pay To value exactly as it appears
     * @throws {Error} When Pay To input content is not accessible or null
     */
    getEventPayToValue(): Promise<string>;
    /**
     * @desc Get the current label text of the submit button, which changes dynamically based on mode and submitting state
     * @returns {Promise<string>} The submit button label text exactly as it appears
     * @throws {Error} When submit button text content is not accessible or null
     */
    getSubmitEventButtonText(): Promise<string>;
    /**
     * @desc Get the current value of the event name input field
     * @returns {Promise<string>} The current event name value exactly as it appears
     * @throws {Error} When event name input content is not accessible or null
     */
    getEventNameValue(): Promise<string>;
    /**
     * @desc Get the currently selected spending type ID
     * @returns {Promise<string>} The currently selected spending type ID exactly as it appears
     * @throws {Error} When spending type select content is not accessible or null
     */
    getSpendingTypeValue(): Promise<string>;
    /**
     * @desc Get the list of all available spending type option values from the dropdown
     * @returns {Promise<string[]>} Array of spending type option values
     * @throws {Error} When spending type select is not accessible
     */
    getSpendingTypeOptionList(): Promise<string[]>;
    /**
     * @desc Count the number of spending type options available in the dropdown
     * @returns {Promise<number>} The number of spending type options
     * @throws {Error} When spending type select is not accessible
     */
    getSpendingTypeOptionCount(): Promise<number>;
    /**
     * @desc Get the checked state of the revision mode checkbox to determine if revision mode is active
     * @returns {Promise<boolean>} True if revision mode checkbox is checked
     */
    isRevisionModeChecked(): Promise<boolean>;
    /**
     * @desc Get the checked state of the steady cost checkbox
     * @returns {Promise<boolean>} True if steady cost checkbox is checked
     */
    isSteadyCostChecked(): Promise<boolean>;
    /**
     * @desc Get the list of all available bank account option values from the dropdown
     * @returns {Promise<string[]>} Array of bank account option values
     * @throws {Error} When bank account select is not accessible
     */
    getBankAccountOptionList(): Promise<string[]>;
    /**
     * @desc Count the number of bank account options available in the dropdown
     * @returns {Promise<number>} The number of bank account options
     * @throws {Error} When bank account select is not accessible
     */
    getBankAccountOptionCount(): Promise<number>;
    /**
     * @desc Get the currently selected bank account ID
     * @returns {Promise<string>} The currently selected bank account ID exactly as it appears
     * @throws {Error} When bank account select content is not accessible or null
     */
    getBankAccountValue(): Promise<string>;
    /**
     * @desc Get the current numeric amount entered in the event value input
     * @returns {Promise<string>} The current event value exactly as it appears
     * @throws {Error} When event value input content is not accessible or null
     */
    getEventValueInput(): Promise<string>;
    /**
     * @desc Get the text content of the cancel button
     * @returns {Promise<string>} The cancel button text exactly as it appears
     * @throws {Error} When cancel button text content is not accessible or null
     */
    getCancelEventButtonText(): Promise<string>;
    /**
     * @desc Get the currently selected recurrence frequency
     * @returns {Promise<string>} The currently selected frequency value exactly as it appears
     * @throws {Error} When frequency select content is not accessible or null
     */
    getFrequencyValue(): Promise<string>;
    /**
     * @desc Get the checked state of the recurring mode checkbox to determine if recurring mode is active
     * @returns {Promise<boolean>} True if recurring mode checkbox is checked
     */
    isRecurringModeChecked(): Promise<boolean>;
}
