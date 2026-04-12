/**
 * Page Object Model: DayDetailModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class DayDetailModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_modalContainer;
    private readonly selector_balanceSection;
    private readonly selector_expectedBalance;
    private readonly selector_transactionsSection;
    private readonly selector_eventsSection;
    private readonly selector_noEventsMessage;
    private readonly selector_addEventButton;
    private readonly selector_addRecurringEventButton;
    private readonly selector_eventFormContainer;
    private readonly selector_editRuleButton;
    private readonly selector_deleteEventButton;
    private readonly selector_eventItem;
    constructor(page: Page);
    /**
     * @desc Checks if the DayDetailModal is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a DayDetailModalPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<DayDetailModalPOM>} A DayDetailModalPOM instance
     * @throws {Error} When the DayDetailModal is not visible on screen
     */
    static getPOM(page: Page): Promise<DayDetailModalPOM>;
    /**
     * @desc Check whether the DayDetailModal is currently visible/open on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    isModalVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the transactions section is present/visible, indicating this is a true-balance day
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the transactions section is visible
     */
    isTransactionsSectionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the events section is present/visible, indicating this is a projected day
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the events section is visible
     */
    isEventsSectionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the inline ProjectionEventForm container is currently visible (showEventForm === true)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the event form container is visible
     */
    isEventFormContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the balance section card is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the balance section is visible
     */
    isBalanceSectionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Close the DayDetailModal by triggering the onClose handler via BaseModal's close control
     * Expected outcome is that the modal will be dismissed and removed from the DOM
     * @throws {Error} When the modal close button is not accessible
     */
    clickCloseButton(): Promise<void>;
    /**
     * @desc clicks the Add Event button to open the inline event form in single-event mode
     * Expected outcome is that the event form container will appear with "Add New Event" heading
     * @throws {Error} When the add event button is not visible
     */
    clickAddEventButton(): Promise<void>;
    /**
     * @desc clicks the Add Recurring Event button to open the inline event form in recurring mode
     * Expected outcome is that the event form container will appear with "Add New Recurring Event" heading
     * @throws {Error} When the add recurring event button is not visible
     */
    clickAddRecurringEventButton(): Promise<void>;
    /**
     * @desc clicks the Edit Rule button for a specific event by index to open the inline form in edit-rule mode
     * Expected outcome is that the event form container will appear with "Edit Recurring Rule" heading
     * @param {number} index - Zero-based index of the event whose rule should be edited
     * @throws {Error} When the edit rule button at the given index is not visible
     */
    clickEditRuleButton(index: number): Promise<void>;
    /**
     * @desc clicks the Delete button for a specific event by index to trigger the confirmation modal
     * Expected outcome is that the ConfirmationModal will appear asking to confirm deletion
     * @param {number} index - Zero-based index of the event to delete
     * @throws {Error} When the delete event button at the given index is not visible
     */
    clickDeleteEventButton(index: number): Promise<void>;
    /**
     * @desc Get the inner HTML of the transactions section container, including the DayTransactionList rendered content
     * @returns {Promise<string>} The inner HTML of the transactions section exactly as rendered
     * @throws {Error} When the transactions section content is not accessible or null
     */
    getTransactionsSectionInnerHtml(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the event form container, including the heading and embedded ProjectionEventForm
     * @returns {Promise<string>} The inner HTML of the event form container exactly as rendered
     * @throws {Error} When the event form container content is not accessible or null
     */
    getEventFormContainerInnerHtml(): Promise<string>;
    /**
     * @desc Get the heading text of the event form container to determine current mode (Add New Event, Add New Recurring Event, or Edit Recurring Rule)
     * @returns {Promise<string>} The heading text exactly as it appears in the UI
     * @throws {Error} When the event form container heading text is not accessible or null
     */
    getEventFormContainerHeadingText(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the events section, including all event cards and action buttons
     * @returns {Promise<string>} The inner HTML of the events section exactly as rendered
     * @throws {Error} When the events section content is not accessible or null
     */
    getEventsSectionInnerHtml(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the balance section, including balance type label and formatted currency value
     * @returns {Promise<string>} The inner HTML of the balance section exactly as rendered
     * @throws {Error} When the balance section content is not accessible or null
     */
    getBalanceSectionInnerHtml(): Promise<string>;
    /**
     * @desc Get the CSS class list of the balance section to determine background color variant (brand-neutral for true-balance, blue-50 for projected)
     * @returns {Promise<string>} The full class attribute value of the balance section exactly as it appears
     * @throws {Error} When the balance section class attribute is not accessible or null
     */
    getBalanceSectionClassList(): Promise<string>;
    /**
     * @desc Get the formatted expected balance text as displayed in the UI
     * @returns {Promise<string>} The expected balance text exactly as it appears
     * @throws {Error} When the expected balance element content is not accessible or null
     */
    getExpectedBalanceText(): Promise<string>;
    /**
     * @desc Check whether the no-events message is visible (events list is empty for a projected day)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the no-events message is visible
     */
    isNoEventsMessageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether a specific event item by index is visible in the events list
     * @param {number} index - Zero-based index of the event item
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the event item at the given index is visible
     */
    isEventItemVisible(index: number, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the edit rule button for a specific event by index is visible
     * @param {number} index - Zero-based index of the event
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the edit rule button at the given index is visible
     */
    isEditRuleButtonVisible(index: number, timeout?: number): Promise<boolean>;
}
