/**
 * Page Object Model: TripsMonthView
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const TripsMonthViewPOM_StandardSelector = '[data-testid="trips-month-view"]';

export class TripsMonthViewPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_tripsMonthViewContainer: string;
  private readonly selector_pageHeader: string;
  private readonly selector_nextMonthLink: string;
  private readonly selector_prevMonthLink: string;
  private readonly selector_createTripButton: string;
  private readonly selector_monthTitle: string;
  private readonly selector_backLink: string;
  private readonly selector_calendarContainer: string;
  private readonly selector_loadingIndicator: string;
  private readonly selector_createTripModal: string;
  private readonly selector_tripsLegend: string;
  private readonly selector_calendarDayCell: (date: string) => string;
  private readonly selector_tripEventBar: (tripId: string) => string;
  private readonly selector_tripLegendItem: (tripId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = TripsMonthViewPOM_StandardSelector;

    // Static selectors
    this.selector_tripsMonthViewContainer = this.rootSelector;
    this.selector_pageHeader = `${this.rootSelector} > div:first-child`;
    this.selector_nextMonthLink = `${this.rootSelector} [data-testid="trips-month-next"]`;
    this.selector_prevMonthLink = `${this.rootSelector} [data-testid="trips-month-prev"]`;
    this.selector_createTripButton = `${this.rootSelector} [data-testid="trips-month-create-button"]`;
    this.selector_monthTitle = `${this.rootSelector} [data-testid="trips-month-title"]`;
    this.selector_backLink = `${this.rootSelector} [data-testid="trips-month-back-link"]`;
    this.selector_calendarContainer = `${this.rootSelector} [data-testid="trips-month-calendar"]`;
    this.selector_loadingIndicator = `${this.rootSelector} [data-testid="trips-month-loading"]`;
    this.selector_createTripModal = `[data-testid="create-trip-month-modal"]`;
    this.selector_tripsLegend = `${this.rootSelector} [data-testid="trips-month-legend"]`;

    // Dynamic selectors
    this.selector_calendarDayCell = (date: string) =>
      `${this.rootSelector} [data-testid="trips-day-cell__${date}"]`;

    this.selector_tripEventBar = (tripId: string) =>
      `${this.rootSelector} [data-testid="trip-bar__${tripId}"]`;

    this.selector_tripLegendItem = (tripId: string) =>
      `${this.rootSelector} [data-testid="trip-legend__${tripId}"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the TripsMonthView page is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the month view root container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const root = page.locator(TripsMonthViewPOM_StandardSelector);
      return await root.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method to get a TripsMonthViewPOM instance
   * Validates that the month view page is visible before returning instance
   * @param page - Playwright Page instance
   * @returns {Promise<TripsMonthViewPOM>} TripsMonthViewPOM instance
   * @throws {Error} When the month view root container is not visible
   */
  static async getPOM(page: Page): Promise<TripsMonthViewPOM> {
    const isVisible = await TripsMonthViewPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TripsMonthViewPOM: Cannot instantiate - month view page is not visible. ' +
          `Expected element [${TripsMonthViewPOM_StandardSelector}] to be visible.`
      );
    }

    return new TripsMonthViewPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the root month view container is visible on screen
   * @returns {Promise<boolean>} True if the trips month view container is visible
   */
  async isTripsMonthViewVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_tripsMonthViewContainer).isVisible();
  }

  /**
   * @desc Check whether the page header bar containing navigation controls is visible
   * @returns {Promise<boolean>} True if the page header is visible
   */
  async isPageHeaderVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_pageHeader).isVisible();
  }

  /**
   * @desc Check whether the FullCalendar container is visible (only rendered when loading is false)
   * @returns {Promise<boolean>} True if the calendar container is visible
   */
  async isCalendarContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_calendarContainer).isVisible();
  }

  /**
   * @desc Check whether the loading indicator is visible (only shown while trips data is loading)
   * @returns {Promise<boolean>} True if the loading indicator is visible
   */
  async isLoadingIndicatorVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_loadingIndicator).isVisible();
  }

  /**
   * @desc Check whether the New Trip create modal is currently visible/open
   * @returns {Promise<boolean>} True if the create trip modal is visible
   */
  async isCreateTripModalVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_createTripModal).isVisible();
  }

  /**
   * @desc Check whether the trips legend is visible (only rendered when not loading and trips.length > 0)
   * @returns {Promise<boolean>} True if the trips legend is visible
   */
  async isTripsLegendVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_tripsLegend).isVisible();
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Clicks the back link to navigate to the year view (/trips)
   * Expected outcome is that the browser navigates to the trips year view
   */
  async clickBackLink(): Promise<void> {
    await this.page.locator(this.selector_backLink).click();
  }

  /**
   * @desc Clicks the previous month navigation link
   * Expected outcome is that the browser navigates to the previous month's detail page
   */
  async clickPrevMonthLink(): Promise<void> {
    await this.page.locator(this.selector_prevMonthLink).click();
  }

  /**
   * @desc Clicks the next month navigation link
   * Expected outcome is that the browser navigates to the next month's detail page
   */
  async clickNextMonthLink(): Promise<void> {
    await this.page.locator(this.selector_nextMonthLink).click();
  }

  /**
   * @desc Clicks the 'New Trip' create button to open the create trip modal
   * Expected outcome is that the create trip modal becomes visible
   */
  async clickCreateTripButton(): Promise<void> {
    await this.page.locator(this.selector_createTripButton).click();
  }

  /**
   * @desc Clicks a specific trip event bar in the calendar by trip ID
   * Expected outcome is that the trip detail modal opens for the selected trip
   * @param {string} tripId - The ID of the trip whose event bar to click
   */
  async clickTripEventBar(tripId: string): Promise<void> {
    await this.page.locator(this.selector_tripEventBar(tripId)).click();
  }

  /**
   * @desc Clicks a specific day cell in the calendar by date string
   * Expected outcome is that if a trip exists on that day, the trip detail modal opens
   * @param {string} date - The date string in yyyy-MM-dd format
   */
  async clickCalendarDayCell(date: string): Promise<void> {
    await this.page.locator(this.selector_calendarDayCell(date)).click();
  }

  /**
   * @desc Clicks a trip legend item by trip ID
   * Expected outcome is that the trip detail modal opens for the selected trip
   * @param {string} tripId - The ID of the trip whose legend item to click
   */
  async clickTripLegendItem(tripId: string): Promise<void> {
    await this.page.locator(this.selector_tripLegendItem(tripId)).click();
  }

  /**
   * @desc Submit the New Trip form within the modal to create a new trip
   * Confirms/submits the create trip modal form
   * Expected outcome is that the trip is created and the modal closes
   * @throws {Error} When the create trip modal is not visible
   */
  async confirmCreateTripModal(): Promise<void> {
    const isVisible = await this.isCreateTripModalVisible();
    if (!isVisible) {
      throw new Error(
        'TripsMonthViewPOM: Cannot confirm create trip modal - modal is not visible. ' +
          `Expected element [${this.selector_createTripModal}] to be visible.`
      );
    }
    const submitButton = this.page.locator(
      `${this.selector_createTripModal} [data-testid="trip-form-submit"]`
    );
    await submitButton.click();
  }

  /**
   * @desc Dismiss/close the New Trip create modal, setting showCreateModal state to false
   * Expected outcome is that the create trip modal is no longer visible
   * @throws {Error} When the create trip modal is not visible
   */
  async dismissCreateTripModal(): Promise<void> {
    const isVisible = await this.isCreateTripModalVisible();
    if (!isVisible) {
      throw new Error(
        'TripsMonthViewPOM: Cannot dismiss create trip modal - modal is not visible. ' +
          `Expected element [${this.selector_createTripModal}] to be visible.`
      );
    }
    const cancelButton = this.page.locator(
      `${this.selector_createTripModal} [data-testid="trip-form-cancel"]`
    );
    await cancelButton.click();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Get the text content of the month title element
   * @returns {Promise<string>} The month title text exactly as it appears in the UI
   * @throws {Error} When the month title content is not accessible or null
   */
  async getMonthTitleText(): Promise<string> {
    await this.page.locator(this.selector_monthTitle).isVisible();
    const text = await this.page.locator(this.selector_monthTitle).textContent();

    if (text === null) {
      throw new Error(
        `TripsMonthViewPOM: Month title content is null. Selector: ${this.selector_monthTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text content of the loading indicator element
   * @returns {Promise<string>} The loading indicator text exactly as it appears in the UI
   * @throws {Error} When the loading indicator content is not accessible or null
   */
  async getLoadingIndicatorText(): Promise<string> {
    await this.page.locator(this.selector_loadingIndicator).isVisible();
    const text = await this.page.locator(this.selector_loadingIndicator).textContent();

    if (text === null) {
      throw new Error(
        `TripsMonthViewPOM: Loading indicator content is null. Selector: ${this.selector_loadingIndicator}`
      );
    }

    return text;
  }

  /**
   * @desc Get the inner HTML of the calendar container to inspect rendered calendar structure
   * @returns {Promise<string>} The inner HTML of the calendar container
   * @throws {Error} When the calendar container is not visible or inner HTML is not accessible
   */
  async getCalendarContainerInnerHtml(): Promise<string> {
    const isVisible = await this.isCalendarContainerVisible();
    if (!isVisible) {
      throw new Error(
        `TripsMonthViewPOM: Calendar container is not visible. Selector: ${this.selector_calendarContainer}`
      );
    }

    const html = await this.page.locator(this.selector_calendarContainer).innerHTML();

    if (html === null) {
      throw new Error(
        `TripsMonthViewPOM: Calendar container inner HTML is null. Selector: ${this.selector_calendarContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Get the inner HTML of the create trip modal to inspect its form contents
   * @returns {Promise<string>} The inner HTML of the create trip modal
   * @throws {Error} When the create trip modal is not visible or inner HTML is not accessible
   */
  async getCreateTripModalInnerHtml(): Promise<string> {
    const isVisible = await this.isCreateTripModalVisible();
    if (!isVisible) {
      throw new Error(
        `TripsMonthViewPOM: Create trip modal is not visible. Selector: ${this.selector_createTripModal}`
      );
    }

    const html = await this.page.locator(this.selector_createTripModal).innerHTML();

    if (html === null) {
      throw new Error(
        `TripsMonthViewPOM: Create trip modal inner HTML is null. Selector: ${this.selector_createTripModal}`
      );
    }

    return html;
  }

  /**
   * @desc Count the number of legend items rendered in the trips legend container
   * @returns {Promise<number>} The count of trip legend items currently rendered
   */
  async getTripsLegendItemCount(): Promise<number> {
    return await this.page
      .locator(`${this.selector_tripsLegend} [data-testid^="trip-legend__"]`)
      .count();
  }
}