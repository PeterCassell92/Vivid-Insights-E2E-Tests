/**
 * Page Object Model: TripsYearView
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const TripsYearViewPOM_StandardSelector = '[data-testid="trips-year-view"]';

export class TripsYearViewPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_tripsYearViewContainer: string;
  private readonly selector_tripsHeader: string;
  private readonly selector_tripsBackLink: string;
  private readonly selector_tripsPrevYearButton: string;
  private readonly selector_tripsYearTitle: string;
  private readonly selector_tripsNextYearButton: string;
  private readonly selector_tripsCreateButton: string;
  private readonly selector_tripsLoading: string;
  private readonly selector_tripsYearGrid: string;
  private readonly selector_tripsSummary: string;
  private readonly selector_createTripModalRoot: string;
  private readonly selector_emptyStateLabel: string;
  private readonly selector_monthNameHeading: string;
  private readonly selector_overflowCountLabel: string;
  private readonly selector_tripsMonthBox: (monthKey: string) => string;
  private readonly selector_tripPill: (tripId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = TripsYearViewPOM_StandardSelector;

    // Static selectors
    this.selector_tripsYearViewContainer = `${this.rootSelector}`;
    this.selector_tripsHeader = `${this.rootSelector} > .flex.items-center.justify-between`;
    this.selector_tripsBackLink = `${this.rootSelector} [data-testid="trips-back-link"]`;
    this.selector_tripsPrevYearButton = `${this.rootSelector} [data-testid="trips-prev-year"]`;
    this.selector_tripsYearTitle = `${this.rootSelector} [data-testid="trips-year-title"]`;
    this.selector_tripsNextYearButton = `${this.rootSelector} [data-testid="trips-next-year"]`;
    this.selector_tripsCreateButton = `${this.rootSelector} [data-testid="trips-create-button"]`;
    this.selector_tripsLoading = `${this.rootSelector} [data-testid="trips-loading"]`;
    this.selector_tripsYearGrid = `${this.rootSelector} [data-testid="trips-year-grid"]`;
    this.selector_tripsSummary = `${this.rootSelector} [data-testid="trips-summary"]`;
    this.selector_createTripModalRoot = `[data-testid="create-trip-modal"]`;
    this.selector_emptyStateLabel = `[data-testid^="trips-month-box__"] .text-xs.text-gray-400.italic`;
    this.selector_monthNameHeading = `[data-testid^="trips-month-box__"] h3`;
    this.selector_overflowCountLabel = `[data-testid^="trips-month-box__"] .text-xs.text-gray-500`;

    // Dynamic selectors
    this.selector_tripsMonthBox = (monthKey: string) =>
      `${this.rootSelector} [data-testid="trips-month-box__${monthKey}"]`;

    this.selector_tripPill = (tripId: string) =>
      `${this.rootSelector} [data-testid="trip-pill__${tripId}"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the Trips Year View page is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the trips year view is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const root = page.locator(TripsYearViewPOM_StandardSelector);
      return await root.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a TripsYearViewPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TripsYearViewPOM>} TripsYearViewPOM instance
   * @throws {Error} When the trips year view container is not visible
   */
  static async getPOM(page: Page): Promise<TripsYearViewPOM> {
    const isVisible = await TripsYearViewPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TripsYearViewPOM: Cannot instantiate - trips year view page is not visible. ' +
          `Expected element [${TripsYearViewPOM_StandardSelector}] to be visible.`
      );
    }

    return new TripsYearViewPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Whether or not the trips year view container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the container is visible
   */
  async isTripsYearViewContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tripsYearViewContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the loading indicator is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading indicator is visible
   */
  async isTripsLoadingVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tripsLoading).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the year grid is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the year grid is visible
   */
  async isTripsYearGridVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tripsYearGrid).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the trips summary text is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the summary is visible
   */
  async isTripsSummaryVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tripsSummary).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the create trip modal is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the create trip modal is visible
   */
  async isCreateTripModalVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_createTripModalRoot).isVisible({ timeout });
  }

  /**
   * @desc Whether or not a specific month box is visible
   * @param {string} monthKey - The month key in yyyy-MM format (e.g. "2024-03")
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the month box is visible
   */
  async isMonthBoxVisible(monthKey: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tripsMonthBox(monthKey)).isVisible({ timeout });
  }

  /**
   * @desc Whether or not a specific trip pill is visible
   * @param {string} tripId - The trip ID
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the trip pill is visible
   */
  async isTripPillVisible(tripId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tripPill(tripId)).isVisible({ timeout });
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Clicks the back link to navigate to the Dashboard
   * Expected outcome is that the browser navigates to /
   */
  async clickTripsBackLink(): Promise<void> {
    await this.page.locator(this.selector_tripsBackLink).click();
  }

  /**
   * @desc Clicks the previous year button to decrement the displayed year
   * Expected outcome is that the year title decrements by one and trips reload
   */
  async clickTripsPrevYearButton(): Promise<void> {
    await this.page.locator(this.selector_tripsPrevYearButton).click();
  }

  /**
   * @desc Clicks the next year button to increment the displayed year
   * Expected outcome is that the year title increments by one and trips reload
   */
  async clickTripsNextYearButton(): Promise<void> {
    await this.page.locator(this.selector_tripsNextYearButton).click();
  }

  /**
   * @desc Clicks the New Trip button to open the create trip modal
   * Expected outcome is that the create trip modal becomes visible
   */
  async clickTripsCreateButton(): Promise<void> {
    await this.page.locator(this.selector_tripsCreateButton).click();
  }

  /**
   * @desc Clicks a month box cell to navigate to the month detail view
   * Expected outcome is that the browser navigates to /trips/{monthKey}
   * @param {string} monthKey - The month key in yyyy-MM format (e.g. "2024-03")
   */
  async clickTripsMonthBox(monthKey: string): Promise<void> {
    await this.page.locator(this.selector_tripsMonthBox(monthKey)).click();
  }

  /**
   * @desc Clicks a trip pill inside a month box to open the TripDetailModal
   * Expected outcome is that the TripDetailModal becomes visible for the selected trip
   * @param {string} tripId - The trip ID corresponding to the pill
   */
  async clickTripPill(tripId: string): Promise<void> {
    await this.page.locator(this.selector_tripPill(tripId)).click();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Gets the currently displayed year from the year title heading
   * @returns {Promise<string>} The year text exactly as it appears in the UI
   * @throws {Error} When the year title content is not accessible or null
   */
  async getTripsYearTitle(): Promise<string> {
    await this.page.locator(this.selector_tripsYearTitle).isVisible();
    const text = await this.page.locator(this.selector_tripsYearTitle).textContent();

    if (text === null) {
      throw new Error(
        `TripsYearViewPOM: Year title content is null. Selector: ${this.selector_tripsYearTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the trips summary text rendered below the grid
   * @returns {Promise<string>} The summary text exactly as it appears in the UI
   * @throws {Error} When the summary content is not accessible or null
   */
  async getTripsSummaryText(): Promise<string> {
    await this.page.locator(this.selector_tripsSummary).isVisible();
    const text = await this.page.locator(this.selector_tripsSummary).textContent();

    if (text === null) {
      throw new Error(
        `TripsYearViewPOM: Trips summary content is null. Selector: ${this.selector_tripsSummary}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the title attribute of a trip pill (carries trip name and location)
   * @param {string} tripId - The trip ID corresponding to the pill
   * @returns {Promise<string>} The title attribute value exactly as it appears
   * @throws {Error} When the trip pill is not found or the title attribute is null
   */
  async getTripPillTitle(tripId: string): Promise<string> {
    const selector = this.selector_tripPill(tripId);
    await this.page.locator(selector).isVisible();
    const title = await this.page.locator(selector).getAttribute('title');

    if (title === null) {
      throw new Error(
        `TripsYearViewPOM: Trip pill title attribute is null for tripId "${tripId}". Selector: ${selector}`
      );
    }

    return title;
  }

  /**
   * @desc Gets the month name heading text from a specific month box
   * @param {string} monthKey - The month key in yyyy-MM format (e.g. "2024-03")
   * @returns {Promise<string>} The month name text exactly as it appears
   * @throws {Error} When the month heading content is not accessible or null
   */
  async getMonthNameHeading(monthKey: string): Promise<string> {
    const selector = `${this.selector_tripsMonthBox(monthKey)} h3`;
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TripsYearViewPOM: Month name heading content is null for monthKey "${monthKey}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the overflow count label text from a specific month box (e.g. "+2 more")
   * @param {string} monthKey - The month key in yyyy-MM format (e.g. "2024-03")
   * @returns {Promise<string>} The overflow label text exactly as it appears
   * @throws {Error} When the overflow label content is not accessible or null
   */
  async getOverflowCountLabel(monthKey: string): Promise<string> {
    const selector = `${this.selector_tripsMonthBox(monthKey)} .text-xs.text-gray-500`;
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TripsYearViewPOM: Overflow count label content is null for monthKey "${monthKey}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the empty state label text from a specific month box (e.g. "No trips")
   * @param {string} monthKey - The month key in yyyy-MM format (e.g. "2024-03")
   * @returns {Promise<string>} The empty state label text exactly as it appears
   * @throws {Error} When the empty state label content is not accessible or null
   */
  async getEmptyStateLabelText(monthKey: string): Promise<string> {
    const selector = `${this.selector_tripsMonthBox(monthKey)} .text-xs.text-gray-400.italic`;
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `TripsYearViewPOM: Empty state label content is null for monthKey "${monthKey}". Selector: ${selector}`
      );
    }

    return text;
  }
}