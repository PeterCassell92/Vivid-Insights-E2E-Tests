/**
 * Page Object Model: TripsYearViewPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const TripsYearViewPagePOM_StandardSelector = '[data-testid="trips-year-view"]';

export class TripsYearViewPagePOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_tripsYearViewContainer: string;
  private readonly selector_tripsYearGrid: string;
  private readonly selector_monthBox: (monthKey: string) => string;
  private readonly selector_tripPill: (tripId: string) => string;
  private readonly selector_allMonthBoxes: string;
  private readonly selector_tripsSummary: string;
  private readonly selector_backLink: string;
  private readonly selector_yearTitle: string;
  private readonly selector_prevYearButton: string;
  private readonly selector_createTripButton: string;
  private readonly selector_nextYearButton: string;
  private readonly selector_tripsLoading: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = TripsYearViewPagePOM_StandardSelector;

    // tripsYearView
    this.selector_tripsYearViewContainer = this.rootSelector;

    // yearGrid
    this.selector_tripsYearGrid = `${this.rootSelector} [data-testid="trips-year-grid"]`;
    this.selector_monthBox = (monthKey: string) =>
      `${this.rootSelector} [data-testid="trips-month-box__${monthKey}"]`;
    this.selector_tripPill = (tripId: string) =>
      `${this.rootSelector} [data-testid="trip-pill__${tripId}"]`;
    this.selector_allMonthBoxes = `${this.rootSelector} [data-testid^="trips-month-box__"]`;

    // tripsSummary
    this.selector_tripsSummary = `${this.rootSelector} [data-testid="trips-summary"]`;

    // pageHeader
    this.selector_backLink = `${this.rootSelector} [data-testid="trips-back-link"]`;
    this.selector_yearTitle = `${this.rootSelector} [data-testid="trips-year-title"]`;
    this.selector_prevYearButton = `${this.rootSelector} [data-testid="trips-prev-year"]`;
    this.selector_createTripButton = `${this.rootSelector} [data-testid="trips-create-button"]`;
    this.selector_nextYearButton = `${this.rootSelector} [data-testid="trips-next-year"]`;

    // loadingIndicator
    this.selector_tripsLoading = `${this.rootSelector} [data-testid="trips-loading"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the TripsYearViewPage is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the year view root container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const root = page.locator(TripsYearViewPagePOM_StandardSelector);
      return await root.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a TripsYearViewPagePOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TripsYearViewPagePOM>} A TripsYearViewPagePOM instance
   * @throws {Error} When the trips year view root container is not visible
   */
  static async getPOM(page: Page): Promise<TripsYearViewPagePOM> {
    const isVisible = await TripsYearViewPagePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TripsYearViewPagePOM: Cannot instantiate - trips year view page is not visible. ' +
          `Expected element [${TripsYearViewPagePOM_StandardSelector}] to be visible.`
      );
    }

    return new TripsYearViewPagePOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the root year-view container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the root container is visible
   */
  async isTripsYearViewContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_tripsYearViewContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the 12-month grid is visible (rendered only when loading is false)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the year grid is visible
   */
  async isTripsYearGridVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_tripsYearGrid)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the trips summary footer is visible (rendered only when loading is false)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the trips summary is visible
   */
  async isTripsSummaryVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_tripsSummary)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the loading indicator is currently visible (true only while trips are being fetched)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading indicator is visible
   */
  async isTripsLoadingVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_tripsLoading)
      .isVisible({ timeout });
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the back link to navigate to the Dashboard (/)
   * Expected outcome is that the browser navigates to the home/dashboard page
   */
  async clickBackLink(): Promise<void> {
    await this.page.locator(this.selector_backLink).click();
  }

  /**
   * @desc Clicks the previous year button to decrement the displayed year
   * Expected outcome is that the year view updates to show the previous year
   */
  async clickPrevYearButton(): Promise<void> {
    await this.page.locator(this.selector_prevYearButton).click();
  }

  /**
   * @desc Clicks the next year button to increment the displayed year
   * Expected outcome is that the year view updates to show the next year
   */
  async clickNextYearButton(): Promise<void> {
    await this.page.locator(this.selector_nextYearButton).click();
  }

  /**
   * @desc Clicks the 'New Trip' create button to open the create trip modal
   * Expected outcome is that the create trip modal becomes visible
   */
  async clickCreateTripButton(): Promise<void> {
    await this.page.locator(this.selector_createTripButton).click();
  }

  /**
   * @desc Clicks a specific month box (Link) to navigate to /trips/{monthKey}
   * Expected outcome is that the browser navigates to the month view for the given month
   * @param {string} monthKey - The month key in 'yyyy-MM' format (e.g. '2024-03')
   */
  async clickMonthBox(monthKey: string): Promise<void> {
    await this.page.locator(this.selector_monthBox(monthKey)).click();
  }

  /**
   * @desc Clicks a specific trip pill to open the trip detail modal
   * Expected outcome is that the trip detail modal becomes visible for the selected trip
   * @param {string} tripId - The unique identifier of the trip
   */
  async clickTripPill(tripId: string): Promise<void> {
    await this.page.locator(this.selector_tripPill(tripId)).click();
  }

  /**
   * @desc Scrolls within the 12-month calendar grid container
   * Expected outcome is that the grid scrolls by the specified delta
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollYearGrid(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_tripsYearGrid).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the href of a specific month box Link to verify it navigates to /trips/{monthKey}
   * @param {string} monthKey - The month key in 'yyyy-MM' format (e.g. '2024-03')
   * @returns {Promise<string>} The href attribute value of the month box link
   * @throws {Error} When the href attribute is not accessible or null
   */
  async getMonthBoxHref(monthKey: string): Promise<string> {
    const selector = this.selector_monthBox(monthKey);
    await this.page.locator(selector).isVisible();
    const href = await this.page.locator(selector).getAttribute('href');

    if (href === null) {
      throw new Error(
        `TripsYearViewPagePOM: href attribute is null for month box "${monthKey}". ` +
          `Selector: ${selector}`
      );
    }

    return href;
  }

  /**
   * @desc Get a list of all month box test-id attribute values to verify all 12 months are present
   * @returns {Promise<string[]>} Array of data-testid attribute values for all rendered month boxes
   * @throws {Error} When data-testid attributes are not accessible
   */
  async getAllMonthBoxTestIds(): Promise<string[]> {
    const locator = this.page.locator(this.selector_allMonthBoxes);
    const count = await locator.count();
    const testIds: string[] = [];

    for (let i = 0; i < count; i++) {
      const testId = await locator.nth(i).getAttribute('data-testid');
      if (testId === null) {
        throw new Error(
          `TripsYearViewPagePOM: data-testid attribute is null for month box at index ${i}. ` +
            `Selector: ${this.selector_allMonthBoxes}`
        );
      }
      testIds.push(testId);
    }

    return testIds;
  }

  /**
   * @desc Count the number of month box cells rendered in the grid (should be 12)
   * @returns {Promise<number>} The number of month box elements currently rendered
   */
  async getMonthBoxCount(): Promise<number> {
    return await this.page.locator(this.selector_allMonthBoxes).count();
  }

  /**
   * @desc Get the summary text — either 'No trips planned for this year' or 'N trip(s) in YYYY'
   * @returns {Promise<string>} The trips summary text exactly as it appears in the UI
   * @throws {Error} When the trips summary content is not accessible or null
   */
  async getTripsSummaryText(): Promise<string> {
    await this.page.locator(this.selector_tripsSummary).isVisible();
    const text = await this.page.locator(this.selector_tripsSummary).textContent();

    if (text === null) {
      throw new Error(
        `TripsYearViewPagePOM: trips summary text content is null. ` +
          `Selector: ${this.selector_tripsSummary}`
      );
    }

    return text;
  }

  /**
   * @desc Get the loading indicator text ('Loading trips...')
   * @returns {Promise<string>} The loading indicator text exactly as it appears in the UI
   * @throws {Error} When the loading indicator content is not accessible or null
   */
  async getTripsLoadingText(): Promise<string> {
    await this.page.locator(this.selector_tripsLoading).isVisible();
    const text = await this.page.locator(this.selector_tripsLoading).textContent();

    if (text === null) {
      throw new Error(
        `TripsYearViewPagePOM: loading indicator text content is null. ` +
          `Selector: ${this.selector_tripsLoading}`
      );
    }

    return text;
  }

  /**
   * @desc Get the currently displayed year title text
   * @returns {Promise<string>} The year title text exactly as it appears in the UI
   * @throws {Error} When the year title content is not accessible or null
   */
  async getYearTitleText(): Promise<string> {
    await this.page.locator(this.selector_yearTitle).isVisible();
    const text = await this.page.locator(this.selector_yearTitle).textContent();

    if (text === null) {
      throw new Error(
        `TripsYearViewPagePOM: year title text content is null. ` +
          `Selector: ${this.selector_yearTitle}`
      );
    }

    return text;
  }
}