/**
 * Page Object Model: DayDetailModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const DayDetailModalPOM_StandardSelector = '[data-testid="day-modal"]';

export class DayDetailModalPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_modalContainer: string;
  private readonly selector_balanceSection: string;
  private readonly selector_expectedBalance: string;
  private readonly selector_transactionsSection: string;
  private readonly selector_eventsSection: string;
  private readonly selector_noEventsMessage: string;
  private readonly selector_addEventButton: string;
  private readonly selector_addRecurringEventButton: string;
  private readonly selector_eventFormContainer: string;
  private readonly selector_editRuleButton: (index: number) => string;
  private readonly selector_deleteEventButton: (index: number) => string;
  private readonly selector_eventItem: (index: number) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = DayDetailModalPOM_StandardSelector;

    // Modal container
    this.selector_modalContainer = this.rootSelector;

    // Balance section
    this.selector_balanceSection = `${this.rootSelector} [data-testid="balance-section"]`;
    this.selector_expectedBalance = `${this.rootSelector} [data-testid="expected-balance"]`;

    // Transactions section (true-balance days)
    this.selector_transactionsSection = `${this.rootSelector} [data-testid="transactions-section"]`;

    // Events section (projected days)
    this.selector_eventsSection = `${this.rootSelector} [data-testid="events-section"]`;
    this.selector_noEventsMessage = `${this.rootSelector} [data-testid="no-events-message"]`;
    this.selector_addEventButton = `${this.rootSelector} [data-testid="add-event-button"]`;
    this.selector_addRecurringEventButton = `${this.rootSelector} [data-testid="add-recurring-event-button"]`;

    // Event form container (inline ProjectionEventForm)
    this.selector_eventFormContainer = `${this.rootSelector} [data-testid="event-form-container"]`;

    // Dynamic selectors
    this.selector_editRuleButton = (index: number) =>
      `${this.rootSelector} [data-testid="edit-rule__${index}"]`;

    this.selector_deleteEventButton = (index: number) =>
      `${this.rootSelector} [data-testid="delete-event__${index}"]`;

    this.selector_eventItem = (index: number) =>
      `${this.rootSelector} [data-testid="event-item__${index}"]`;
  }

  // ==========================================================================
  // STATIC METHODS
  // ==========================================================================

  /**
   * @desc Checks if the DayDetailModal is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const modal = page.locator(DayDetailModalPOM_StandardSelector);
      return await modal.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a DayDetailModalPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<DayDetailModalPOM>} A DayDetailModalPOM instance
   * @throws {Error} When the DayDetailModal is not visible on screen
   */
  static async getPOM(page: Page): Promise<DayDetailModalPOM> {
    const isVisible = await DayDetailModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'DayDetailModalPOM: Cannot instantiate - modal is not visible. ' +
          `Expected element [${DayDetailModalPOM_StandardSelector}] to be visible.`
      );
    }

    return new DayDetailModalPOM(page);
  }

  // ==========================================================================
  // VISIBILITY AND STATE METHODS
  // ==========================================================================

  /**
   * @desc Check whether the DayDetailModal is currently visible/open on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  async isModalVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_modalContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the transactions section is present/visible, indicating this is a true-balance day
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the transactions section is visible
   */
  async isTransactionsSectionVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_transactionsSection).isVisible({ timeout });
  }

  /**
   * @desc Check whether the events section is present/visible, indicating this is a projected day
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the events section is visible
   */
  async isEventsSectionVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_eventsSection).isVisible({ timeout });
  }

  /**
   * @desc Check whether the inline ProjectionEventForm container is currently visible (showEventForm === true)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the event form container is visible
   */
  async isEventFormContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_eventFormContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the balance section card is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the balance section is visible
   */
  async isBalanceSectionVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_balanceSection).isVisible({ timeout });
  }

  // ==========================================================================
  // ACTION METHODS
  // ==========================================================================

  /**
   * @desc Close the DayDetailModal by triggering the onClose handler via BaseModal's close control
   * Expected outcome is that the modal will be dismissed and removed from the DOM
   * @throws {Error} When the modal close button is not accessible
   */
  async clickCloseButton(): Promise<void> {
    const closeButton = this.page.locator(this.selector_modalContainer).locator('[aria-label="Close"], [data-testid="modal-close-button"], button[class*="close"]').first();
    const isVisible = await closeButton.isVisible();
    if (!isVisible) {
      throw new Error(
        'DayDetailModalPOM: Cannot dismiss modal - close button is not visible. ' +
          `Modal selector: ${this.selector_modalContainer}`
      );
    }
    await closeButton.click();
  }

  /**
   * @desc clicks the Add Event button to open the inline event form in single-event mode
   * Expected outcome is that the event form container will appear with "Add New Event" heading
   * @throws {Error} When the add event button is not visible
   */
  async clickAddEventButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_addEventButton).isVisible();
    if (!isVisible) {
      throw new Error(
        'DayDetailModalPOM: Cannot click add event button - button is not visible. ' +
          `Selector: ${this.selector_addEventButton}`
      );
    }
    await this.page.locator(this.selector_addEventButton).click();
  }

  /**
   * @desc clicks the Add Recurring Event button to open the inline event form in recurring mode
   * Expected outcome is that the event form container will appear with "Add New Recurring Event" heading
   * @throws {Error} When the add recurring event button is not visible
   */
  async clickAddRecurringEventButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_addRecurringEventButton).isVisible();
    if (!isVisible) {
      throw new Error(
        'DayDetailModalPOM: Cannot click add recurring event button - button is not visible. ' +
          `Selector: ${this.selector_addRecurringEventButton}`
      );
    }
    await this.page.locator(this.selector_addRecurringEventButton).click();
  }

  /**
   * @desc clicks the Edit Rule button for a specific event by index to open the inline form in edit-rule mode
   * Expected outcome is that the event form container will appear with "Edit Recurring Rule" heading
   * @param {number} index - Zero-based index of the event whose rule should be edited
   * @throws {Error} When the edit rule button at the given index is not visible
   */
  async clickEditRuleButton(index: number): Promise<void> {
    const selector = this.selector_editRuleButton(index);
    const isVisible = await this.page.locator(selector).isVisible();
    if (!isVisible) {
      throw new Error(
        `DayDetailModalPOM: Cannot click edit rule button at index ${index} - button is not visible. ` +
          `Selector: ${selector}`
      );
    }
    await this.page.locator(selector).click();
  }

  /**
   * @desc clicks the Delete button for a specific event by index to trigger the confirmation modal
   * Expected outcome is that the ConfirmationModal will appear asking to confirm deletion
   * @param {number} index - Zero-based index of the event to delete
   * @throws {Error} When the delete event button at the given index is not visible
   */
  async clickDeleteEventButton(index: number): Promise<void> {
    const selector = this.selector_deleteEventButton(index);
    const isVisible = await this.page.locator(selector).isVisible();
    if (!isVisible) {
      throw new Error(
        `DayDetailModalPOM: Cannot click delete event button at index ${index} - button is not visible. ` +
          `Selector: ${selector}`
      );
    }
    await this.page.locator(selector).click();
  }

  // ==========================================================================
  // DATA RETRIEVAL METHODS
  // ==========================================================================

  /**
   * @desc Get the inner HTML of the transactions section container, including the DayTransactionList rendered content
   * @returns {Promise<string>} The inner HTML of the transactions section exactly as rendered
   * @throws {Error} When the transactions section content is not accessible or null
   */
  async getTransactionsSectionInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_transactionsSection).isVisible();
    const html = await this.page.locator(this.selector_transactionsSection).innerHTML();
    if (html === null) {
      throw new Error(
        `DayDetailModalPOM: Transactions section inner HTML is null. Selector: ${this.selector_transactionsSection}`
      );
    }
    return html;
  }

  /**
   * @desc Get the full inner HTML of the event form container, including the heading and embedded ProjectionEventForm
   * @returns {Promise<string>} The inner HTML of the event form container exactly as rendered
   * @throws {Error} When the event form container content is not accessible or null
   */
  async getEventFormContainerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_eventFormContainer).isVisible();
    const html = await this.page.locator(this.selector_eventFormContainer).innerHTML();
    if (html === null) {
      throw new Error(
        `DayDetailModalPOM: Event form container inner HTML is null. Selector: ${this.selector_eventFormContainer}`
      );
    }
    return html;
  }

  /**
   * @desc Get the heading text of the event form container to determine current mode (Add New Event, Add New Recurring Event, or Edit Recurring Rule)
   * @returns {Promise<string>} The heading text exactly as it appears in the UI
   * @throws {Error} When the event form container heading text is not accessible or null
   */
  async getEventFormContainerHeadingText(): Promise<string> {
    await this.page.locator(this.selector_eventFormContainer).isVisible();
    const heading = this.page.locator(`${this.selector_eventFormContainer} h3`);
    const text = await heading.textContent();
    if (text === null) {
      throw new Error(
        `DayDetailModalPOM: Event form container heading text is null. Selector: ${this.selector_eventFormContainer} h3`
      );
    }
    return text;
  }

  /**
   * @desc Get the full inner HTML of the events section, including all event cards and action buttons
   * @returns {Promise<string>} The inner HTML of the events section exactly as rendered
   * @throws {Error} When the events section content is not accessible or null
   */
  async getEventsSectionInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_eventsSection).isVisible();
    const html = await this.page.locator(this.selector_eventsSection).innerHTML();
    if (html === null) {
      throw new Error(
        `DayDetailModalPOM: Events section inner HTML is null. Selector: ${this.selector_eventsSection}`
      );
    }
    return html;
  }

  /**
   * @desc Get the full inner HTML of the balance section, including balance type label and formatted currency value
   * @returns {Promise<string>} The inner HTML of the balance section exactly as rendered
   * @throws {Error} When the balance section content is not accessible or null
   */
  async getBalanceSectionInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_balanceSection).isVisible();
    const html = await this.page.locator(this.selector_balanceSection).innerHTML();
    if (html === null) {
      throw new Error(
        `DayDetailModalPOM: Balance section inner HTML is null. Selector: ${this.selector_balanceSection}`
      );
    }
    return html;
  }

  /**
   * @desc Get the CSS class list of the balance section to determine background color variant (brand-neutral for true-balance, blue-50 for projected)
   * @returns {Promise<string>} The full class attribute value of the balance section exactly as it appears
   * @throws {Error} When the balance section class attribute is not accessible or null
   */
  async getBalanceSectionClassList(): Promise<string> {
    await this.page.locator(this.selector_balanceSection).isVisible();
    const classList = await this.page.locator(this.selector_balanceSection).getAttribute('class');
    if (classList === null) {
      throw new Error(
        `DayDetailModalPOM: Balance section class attribute is null. Selector: ${this.selector_balanceSection}`
      );
    }
    return classList;
  }

  /**
   * @desc Get the formatted expected balance text as displayed in the UI
   * @returns {Promise<string>} The expected balance text exactly as it appears
   * @throws {Error} When the expected balance element content is not accessible or null
   */
  async getExpectedBalanceText(): Promise<string> {
    await this.page.locator(this.selector_expectedBalance).isVisible();
    const text = await this.page.locator(this.selector_expectedBalance).textContent();
    if (text === null) {
      throw new Error(
        `DayDetailModalPOM: Expected balance text content is null. Selector: ${this.selector_expectedBalance}`
      );
    }
    return text;
  }

  /**
   * @desc Check whether the no-events message is visible (events list is empty for a projected day)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the no-events message is visible
   */
  async isNoEventsMessageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_noEventsMessage).isVisible({ timeout });
  }

  /**
   * @desc Check whether a specific event item by index is visible in the events list
   * @param {number} index - Zero-based index of the event item
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the event item at the given index is visible
   */
  async isEventItemVisible(index: number, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_eventItem(index)).isVisible({ timeout });
  }

  /**
   * @desc Check whether the edit rule button for a specific event by index is visible
   * @param {number} index - Zero-based index of the event
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the edit rule button at the given index is visible
   */
  async isEditRuleButtonVisible(index: number, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_editRuleButton(index)).isVisible({ timeout });
  }
}