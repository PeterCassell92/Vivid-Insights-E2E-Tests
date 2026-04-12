/**
 * Page Object Model: TripsMonthViewPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const TripsMonthViewPagePOM_StandardSelector = '[data-testid="trips-month-view"]';

export class TripsMonthViewPagePOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_pageContainer: string;

  // createTripModal selectors
  private readonly selector_createTripModalRoot: string;

  // calendarContainer selectors
  private readonly selector_calendarWrapper: string;
  private readonly selector_tripEventBar: (tripId: string) => string;
  private readonly selector_dayCell: (date: string) => string;

  // pageHeader selectors
  private readonly selector_monthTitle: string;
  private readonly selector_headerRow: string;
  private readonly selector_backLink: string;
  private readonly selector_prevMonthLink: string;
  private readonly selector_nextMonthLink: string;
  private readonly selector_createButton: string;

  // tripsLegend selectors
  private readonly selector_legendContainer: string;
  private readonly selector_legendItem: (tripId: string) => string;
  private readonly selector_allLegendItems: string;

  // loadingIndicator selectors
  private readonly selector_loadingMessage: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = TripsMonthViewPagePOM_StandardSelector;

    // Root
    this.selector_pageContainer = this.rootSelector;

    // createTripModal
    this.selector_createTripModalRoot = '[data-testid="create-trip-month-modal"]';

    // calendarContainer
    this.selector_calendarWrapper = `${this.rootSelector} [data-testid="trips-month-calendar"]`;
    this.selector_tripEventBar = (tripId: string) =>
      `${this.rootSelector} [data-testid="trip-bar__${tripId}"]`;
    this.selector_dayCell = (date: string) =>
      `${this.rootSelector} [data-testid="trips-day-cell__${date}"]`;

    // pageHeader
    this.selector_monthTitle = `${this.rootSelector} [data-testid="trips-month-title"]`;
    this.selector_headerRow = `${this.rootSelector} > div.flex.items-center.justify-between`;
    this.selector_backLink = `${this.rootSelector} [data-testid="trips-month-back-link"]`;
    this.selector_prevMonthLink = `${this.rootSelector} [data-testid="trips-month-prev"]`;
    this.selector_nextMonthLink = `${this.rootSelector} [data-testid="trips-month-next"]`;
    this.selector_createButton = `${this.rootSelector} [data-testid="trips-month-create-button"]`;

    // tripsLegend
    this.selector_legendContainer = `${this.rootSelector} [data-testid="trips-month-legend"]`;
    this.selector_legendItem = (tripId: string) =>
      `${this.rootSelector} [data-testid="trip-legend__${tripId}"]`;
    this.selector_allLegendItems = `${this.rootSelector} [data-testid^="trip-legend__"]`;

    // loadingIndicator
    this.selector_loadingMessage = `${this.rootSelector} [data-testid="trips-month-loading"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the TripsMonthViewPage is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the month view page container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const container = page.locator(TripsMonthViewPagePOM_StandardSelector);
      return await container.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method to get a TripsMonthViewPagePOM instance
   * Validates that the month view page is visible before returning instance
   * @param page - Playwright Page instance
   * @returns {Promise<TripsMonthViewPagePOM>} TripsMonthViewPagePOM instance
   * @throws {Error} When the month view page container is not visible
   */
  static async getPOM(page: Page): Promise<TripsMonthViewPagePOM> {
    const isVisible = await TripsMonthViewPagePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TripsMonthViewPagePOM: Cannot instantiate - month view page is not visible. ' +
          `Expected element [${TripsMonthViewPagePOM_StandardSelector}] to be visible.`
      );
    }

    return new TripsMonthViewPagePOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the root month view page container is visible on screen
   * @returns {Promise<boolean>} True if the page container is visible
   */
  async isPageContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_pageContainer).isVisible();
  }

  /**
   * @desc Whether or not the create trip modal is currently visible/open
   * @returns {Promise<boolean>} True if the create trip modal is visible
   */
  async isCreateTripModalVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_createTripModalRoot).isVisible();
  }

  /**
   * @desc Whether or not the calendar wrapper is visible (i.e. not in a loading state)
   * @returns {Promise<boolean>} True if the calendar wrapper is visible
   */
  async isCalendarWrapperVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_calendarWrapper).isVisible();
  }

  /**
   * @desc Whether or not a specific day cell is visible in the calendar by date
   * @param {string} date - The date string in yyyy-MM-dd format
   * @returns {Promise<boolean>} True if the day cell is visible
   */
  async isDayCellVisible(date: string): Promise<boolean> {
    return await this.page.locator(this.selector_dayCell(date)).isVisible();
  }

  /**
   * @desc Whether or not a specific trip event bar is visible in the calendar by tripId
   * @param {string} tripId - The trip ID
   * @returns {Promise<boolean>} True if the trip event bar is visible
   */
  async isTripEventBarVisible(tripId: string): Promise<boolean> {
    return await this.page.locator(this.selector_tripEventBar(tripId)).isVisible();
  }

  /**
   * @desc Whether or not the month title heading is visible
   * @returns {Promise<boolean>} True if the month title is visible
   */
  async isMonthTitleVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_monthTitle).isVisible();
  }

  /**
   * @desc Whether or not the 'New Trip' create button is enabled and not disabled
   * @returns {Promise<boolean>} True if the create button is enabled
   */
  async isCreateButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_createButton).isEnabled();
  }

  /**
   * @desc Whether or not the trip legend container is visible
   * @returns {Promise<boolean>} True if the legend container is visible
   */
  async isLegendContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_legendContainer).isVisible();
  }

  /**
   * @desc Whether or not a specific trip legend item is visible by tripId
   * @param {string} tripId - The trip ID
   * @returns {Promise<boolean>} True if the legend item is visible
   */
  async isLegendItemVisible(tripId: string): Promise<boolean> {
    return await this.page.locator(this.selector_legendItem(tripId)).isVisible();
  }

  /**
   * @desc Whether or not the loading message indicator is currently visible
   * @returns {Promise<boolean>} True if the loading message is visible
   */
  async isLoadingMessageVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_loadingMessage).isVisible();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the 'New Trip' create button to open the create trip modal
   * Expected outcome is that the create trip modal will open
   */
  async clickCreateButton(): Promise<void> {
    await this.page.locator(this.selector_createButton).click();
  }

  /**
   * @desc Clicks the previous month navigation link
   * Expected outcome is that the page will navigate to the previous month
   */
  async clickPrevMonthLink(): Promise<void> {
    await this.page.locator(this.selector_prevMonthLink).click();
  }

  /**
   * @desc Clicks the next month navigation link
   * Expected outcome is that the page will navigate to the next month
   */
  async clickNextMonthLink(): Promise<void> {
    await this.page.locator(this.selector_nextMonthLink).click();
  }

  /**
   * @desc Clicks the back link to navigate to the year view
   * Expected outcome is that the page will navigate to /trips
   */
  async clickBackLink(): Promise<void> {
    await this.page.locator(this.selector_backLink).click();
  }

  /**
   * @desc Clicks a FullCalendar day cell to open the trip detail modal if a trip exists on that day
   * @param {string} date - The date string in yyyy-MM-dd format
   * Expected outcome is that the trip detail modal will open if a trip exists on that day
   */
  async clickDayCell(date: string): Promise<void> {
    await this.page.locator(this.selector_dayCell(date)).click();
  }

  /**
   * @desc Clicks a FullCalendar event bar to open the trip detail modal for the corresponding trip
   * @param {string} tripId - The trip ID
   * Expected outcome is that the trip detail modal will open for the corresponding trip
   */
  async clickTripEventBar(tripId: string): Promise<void> {
    await this.page.locator(this.selector_tripEventBar(tripId)).click();
  }

  /**
   * @desc Clicks a specific trip legend button to open the trip detail modal for that trip
   * @param {string} tripId - The trip ID
   * Expected outcome is that the trip detail modal will open for the corresponding trip
   */
  async clickLegendItem(tripId: string): Promise<void> {
    await this.page.locator(this.selector_legendItem(tripId)).click();
  }

  /**
   * @desc Clicks the legend container area to interact with individual trip legend buttons
   * Expected outcome is that the legend container area receives the click event
   */
  async clickLegendContainer(): Promise<void> {
    await this.page.locator(this.selector_legendContainer).click();
  }

  /**
   * @desc Dismisses/closes the create trip modal by triggering its onClose handler
   * Expected outcome is that the create trip modal will close
   */
  async dismissCreateTripModal(): Promise<void> {
    const closeButton = this.page.locator(
      `${this.selector_createTripModalRoot} [data-testid="base-modal-close"]`
    );
    const isCloseButtonVisible = await closeButton.isVisible();

    if (isCloseButtonVisible) {
      await closeButton.click();
      return;
    }

    await this.page.keyboard.press('Escape');
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the position and dimensions of the root month view page container
   * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>} Bounding box or null if not visible
   * @throws {Error} When the page container is not accessible
   */
  async getPageContainerBoundingBox(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null> {
    await this.page.locator(this.selector_pageContainer).isVisible();
    return await this.page.locator(this.selector_pageContainer).boundingBox();
  }

  /**
   * @desc Gets the visible text content of a specific trip event bar (trip name) by tripId
   * @param {string} tripId - The trip ID
   * @returns {Promise<string>} The text content of the trip event bar exactly as it appears
   * @throws {Error} When the trip event bar text content is null or not accessible
   */
  async getTripEventBarText(tripId: string): Promise<string> {
    await this.page.locator(this.selector_tripEventBar(tripId)).isVisible();
    const text = await this.page.locator(this.selector_tripEventBar(tripId)).textContent();

    if (text === null) {
      throw new Error(
        `TripEventBar text content is null for tripId "${tripId}". Selector: ${this.selector_tripEventBar(tripId)}`
      );
    }

    return text;
  }

  /**
   * @desc Counts the total number of trip event bars rendered in the calendar
   * @returns {Promise<number>} The count of trip event bars
   */
  async getTripEventBarCount(): Promise<number> {
    return await this.page
      .locator(`${this.rootSelector} [data-testid^="trip-bar__"]`)
      .count();
  }

  /**
   * @desc Gets the inner HTML of the calendar wrapper to inspect rendered FullCalendar markup
   * @returns {Promise<string>} The inner HTML of the calendar wrapper
   * @throws {Error} When the calendar wrapper inner HTML is not accessible
   */
  async getCalendarWrapperInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_calendarWrapper).isVisible();
    const html = await this.page.locator(this.selector_calendarWrapper).innerHTML();

    if (html === null) {
      throw new Error(
        `Calendar wrapper innerHTML is null. Selector: ${this.selector_calendarWrapper}`
      );
    }

    return html;
  }

  /**
   * @desc Gets the data-testid attribute of a specific trip event bar to confirm it is correctly mounted
   * @param {string} tripId - The trip ID
   * @returns {Promise<string>} The data-testid attribute value
   * @throws {Error} When the attribute is null or not accessible
   */
  async getTripEventBarTestId(tripId: string): Promise<string> {
    await this.page.locator(this.selector_tripEventBar(tripId)).isVisible();
    const attr = await this.page
      .locator(this.selector_tripEventBar(tripId))
      .getAttribute('data-testid');

    if (attr === null) {
      throw new Error(
        `data-testid attribute is null for trip event bar with tripId "${tripId}". Selector: ${this.selector_tripEventBar(tripId)}`
      );
    }

    return attr;
  }

  /**
   * @desc Gets the data-testid attribute of a specific day cell to confirm it is correctly mounted
   * @param {string} date - The date string in yyyy-MM-dd format
   * @returns {Promise<string>} The data-testid attribute value
   * @throws {Error} When the attribute is null or not accessible
   */
  async getDayCellTestId(date: string): Promise<string> {
    await this.page.locator(this.selector_dayCell(date)).isVisible();
    const attr = await this.page
      .locator(this.selector_dayCell(date))
      .getAttribute('data-testid');

    if (attr === null) {
      throw new Error(
        `data-testid attribute is null for day cell with date "${date}". Selector: ${this.selector_dayCell(date)}`
      );
    }

    return attr;
  }

  /**
   * @desc Gets the current month and year text displayed in the heading (e.g. 'January 2025')
   * @returns {Promise<string>} The month title text exactly as it appears
   * @throws {Error} When the month title text content is null or not accessible
   */
  async getMonthTitleText(): Promise<string> {
    await this.page.locator(this.selector_monthTitle).isVisible();
    const text = await this.page.locator(this.selector_monthTitle).textContent();

    if (text === null) {
      throw new Error(
        `Month title text content is null. Selector: ${this.selector_monthTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the aria-label attribute value of the previous month navigation link for accessibility verification
   * @returns {Promise<string>} The aria-label attribute value
   * @throws {Error} When the attribute is null or not accessible
   */
  async getPrevMonthLinkAriaLabel(): Promise<string> {
    const attr = await this.page
      .locator(this.selector_prevMonthLink)
      .getAttribute('aria-label');

    if (attr === null) {
      throw new Error(
        `aria-label attribute is null for previous month link. Selector: ${this.selector_prevMonthLink}`
      );
    }

    return attr;
  }

  /**
   * @desc Gets the href URL of the previous month navigation link to verify the target month
   * @returns {Promise<string>} The href URL of the previous month link
   * @throws {Error} When the href attribute is null or not accessible
   */
  async getPrevMonthLinkHref(): Promise<string> {
    const attr = await this.page
      .locator(this.selector_prevMonthLink)
      .getAttribute('href');

    if (attr === null) {
      throw new Error(
        `href attribute is null for previous month link. Selector: ${this.selector_prevMonthLink}`
      );
    }

    return attr;
  }

  /**
   * @desc Gets the href URL of the next month navigation link to verify the target month
   * @returns {Promise<string>} The href URL of the next month link
   * @throws {Error} When the href attribute is null or not accessible
   */
  async getNextMonthLinkHref(): Promise<string> {
    const attr = await this.page
      .locator(this.selector_nextMonthLink)
      .getAttribute('href');

    if (attr === null) {
      throw new Error(
        `href attribute is null for next month link. Selector: ${this.selector_nextMonthLink}`
      );
    }

    return attr;
  }

  /**
   * @desc Gets the aria-label attribute value of the next month navigation link for accessibility verification
   * @returns {Promise<string>} The aria-label attribute value
   * @throws {Error} When the attribute is null or not accessible
   */
  async getNextMonthLinkAriaLabel(): Promise<string> {
    const attr = await this.page
      .locator(this.selector_nextMonthLink)
      .getAttribute('aria-label');

    if (attr === null) {
      throw new Error(
        `aria-label attribute is null for next month link. Selector: ${this.selector_nextMonthLink}`
      );
    }

    return attr;
  }

  /**
   * @desc Gets the href URL of the back link to confirm it points to /trips
   * @returns {Promise<string>} The href URL of the back link
   * @throws {Error} When the href attribute is null or not accessible
   */
  async getBackLinkHref(): Promise<string> {
    const attr = await this.page
      .locator(this.selector_backLink)
      .getAttribute('href');

    if (attr === null) {
      throw new Error(
        `href attribute is null for back link. Selector: ${this.selector_backLink}`
      );
    }

    return attr;
  }

  /**
   * @desc Gets the visible text of the back link (e.g. 'Year View')
   * @returns {Promise<string>} The back link text exactly as it appears
   * @throws {Error} When the back link text content is null or not accessible
   */
  async getBackLinkText(): Promise<string> {
    await this.page.locator(this.selector_backLink).isVisible();
    const text = await this.page.locator(this.selector_backLink).textContent();

    if (text === null) {
      throw new Error(
        `Back link text content is null. Selector: ${this.selector_backLink}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text of the 'New Trip' create button
   * @returns {Promise<string>} The create button text exactly as it appears
   * @throws {Error} When the create button text content is null or not accessible
   */
  async getCreateButtonText(): Promise<string> {
    await this.page.locator(this.selector_createButton).isVisible();
    const text = await this.page.locator(this.selector_createButton).textContent();

    if (text === null) {
      throw new Error(
        `Create button text content is null. Selector: ${this.selector_createButton}`
      );
    }

    return text;
  }

  /**
   * @desc Counts the number of trip legend items rendered in the legend list
   * @returns {Promise<number>} The count of legend items
   */
  async getLegendItemCount(): Promise<number> {
    return await this.page.locator(this.selector_allLegendItems).count();
  }

  /**
   * @desc Gets the visible text of a specific trip legend item (trip name and location) by tripId
   * @param {string} tripId - The trip ID
   * @returns {Promise<string>} The legend item text exactly as it appears
   * @throws {Error} When the legend item text content is null or not accessible
   */
  async getLegendItemText(tripId: string): Promise<string> {
    await this.page.locator(this.selector_legendItem(tripId)).isVisible();
    const text = await this.page.locator(this.selector_legendItem(tripId)).textContent();

    if (text === null) {
      throw new Error(
        `Legend item text content is null for tripId "${tripId}". Selector: ${this.selector_legendItem(tripId)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets a list of text content from all trip legend items to verify all trips are represented
   * @returns {Promise<string[]>} Array of legend item text values exactly as they appear
   * @throws {Error} When any legend item text content is null
   */
  async getAllLegendItemTexts(): Promise<string[]> {
    const items = this.page.locator(this.selector_allLegendItems);
    const count = await items.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await items.nth(i).textContent();

      if (text === null) {
        throw new Error(
          `Legend item text content is null at index ${i}. Selector: ${this.selector_allLegendItems}`
        );
      }

      texts.push(text);
    }

    return texts;
  }

  /**
   * @desc Gets the text content of the loading indicator (e.g. 'Loading...')
   * @returns {Promise<string>} The loading message text exactly as it appears
   * @throws {Error} When the loading message text content is null or not accessible
   */
  async getLoadingMessageText(): Promise<string> {
    await this.page.locator(this.selector_loadingMessage).isVisible();
    const text = await this.page.locator(this.selector_loadingMessage).textContent();

    if (text === null) {
      throw new Error(
        `Loading message text content is null. Selector: ${this.selector_loadingMessage}`
      );
    }

    return text;
  }
}