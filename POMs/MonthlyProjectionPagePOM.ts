/**
 * Page Object Model: MonthlyProjectionPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const MonthlyProjectionPagePOM_StandardSelector = '[data-testid="monthly-projection"]';

export class MonthlyProjectionPagePOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;

  // monthlyProjection selectors
  private readonly selector_monthlyProjectionRoot: string;

  // summaryBar selectors
  private readonly selector_summaryExpenses: string;
  private readonly selector_summaryEvents: string;
  private readonly selector_summaryIncome: string;

  // calendar selectors
  private readonly selector_calendarContainer: string;

  // pageHeader selectors
  private readonly selector_nextMonthButton: string;
  private readonly selector_prevMonthButton: string;
  private readonly selector_monthTitle: string;
  private readonly selector_backToDashboard: string;

  // projectFromDateRow selectors
  private readonly selector_projectFromDateRow: string;

  // projectionLoading selectors
  private readonly selector_projectionLoadingContainer: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = MonthlyProjectionPagePOM_StandardSelector;

    // monthlyProjection
    this.selector_monthlyProjectionRoot = this.rootSelector;

    // summaryBar
    this.selector_summaryExpenses = `${this.rootSelector} [data-testid="summary-expenses"]`;
    this.selector_summaryEvents = `${this.rootSelector} [data-testid="summary-events"]`;
    this.selector_summaryIncome = `${this.rootSelector} [data-testid="summary-income"]`;

    // calendar
    this.selector_calendarContainer = `${this.rootSelector} [data-testid="calendar"]`;

    // pageHeader
    this.selector_nextMonthButton = `${this.rootSelector} [data-testid="next-month-button"]`;
    this.selector_prevMonthButton = `${this.rootSelector} [data-testid="prev-month-button"]`;
    this.selector_monthTitle = `${this.rootSelector} [data-testid="month-title"]`;
    this.selector_backToDashboard = `${this.rootSelector} [data-testid="back-to-dashboard"]`;

    // projectFromDateRow
    this.selector_projectFromDateRow = `${this.rootSelector} [data-testid="project-from-date-row"]`;

    // projectionLoading (rendered outside root when loading, so no root prefix)
    this.selector_projectionLoadingContainer = '[data-testid="projection-loading"]';
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the Monthly Projection page is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the monthly projection root container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(MonthlyProjectionPagePOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a MonthlyProjectionPagePOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<MonthlyProjectionPagePOM>} A MonthlyProjectionPagePOM instance
   * @throws {Error} When the monthly projection page is not visible
   */
  static async getPOM(page: Page): Promise<MonthlyProjectionPagePOM> {
    const isVisible = await MonthlyProjectionPagePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'MonthlyProjectionPagePOM: Cannot instantiate - monthly projection page is not visible. ' +
        `Expected element [${MonthlyProjectionPagePOM_StandardSelector}] to be visible.`
      );
    }

    return new MonthlyProjectionPagePOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the main monthly projection page container is visible (i.e. data has finished loading)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the monthly projection root container is visible
   */
  async isMonthlyProjectionRootVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_monthlyProjectionRoot).isVisible({ timeout });
  }

  /**
   * @desc Check whether the loading state container is currently visible (true while data is being fetched)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the projection loading container is visible
   */
  async isProjectionLoadingVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_projectionLoadingContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the summary stats bar section is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the summary expenses element is visible
   */
  async isSummaryBarVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_summaryExpenses).isVisible({ timeout });
  }

  /**
   * @desc Check whether the calendar container is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the calendar container is visible
   */
  async isCalendarVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_calendarContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the 'Project from:' date picker row is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the project-from date row is visible
   */
  async isProjectFromDateRowVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_projectFromDateRow).isVisible({ timeout });
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the next month navigation button
   * Expected outcome is that the page navigates to the next month's projection
   */
  async clickNextMonthButton(): Promise<void> {
    await this.page.locator(this.selector_nextMonthButton).click();
  }

  /**
   * @desc Clicks the previous month navigation button
   * Expected outcome is that the page navigates to the previous month's projection
   */
  async clickPrevMonthButton(): Promise<void> {
    await this.page.locator(this.selector_prevMonthButton).click();
  }

  /**
   * @desc Clicks the back to dashboard link
   * Expected outcome is that the page navigates to the root dashboard route
   */
  async clickBackToDashboard(): Promise<void> {
    await this.page.locator(this.selector_backToDashboard).click();
  }

  /**
   * @desc Clicks within the project-from date row to interact with the DatePicker child component
   * Expected outcome is that the DatePicker is activated or its value is changed
   */
  async clickProjectFromDateRow(): Promise<void> {
    await this.page.locator(this.selector_projectFromDateRow).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the CSS class list of the top-level page container
   * @returns {Promise<string>} The className attribute value of the monthly projection root element
   * @throws {Error} When the class list content is not accessible or null
   */
  async getMonthlyProjectionRootClassList(): Promise<string> {
    await this.page.locator(this.selector_monthlyProjectionRoot).isVisible();
    const classList = await this.page.locator(this.selector_monthlyProjectionRoot).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `MonthlyProjectionPagePOM: class list is null for monthly projection root. Selector: ${this.selector_monthlyProjectionRoot}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the loading message text displayed while projection data is being fetched
   * @returns {Promise<string>} The text content of the projection loading container exactly as it appears
   * @throws {Error} When the loading container text content is not accessible or null
   */
  async getProjectionLoadingText(): Promise<string> {
    await this.page.locator(this.selector_projectionLoadingContainer).isVisible();
    const text = await this.page.locator(this.selector_projectionLoadingContainer).textContent();

    if (text === null) {
      throw new Error(
        `MonthlyProjectionPagePOM: loading text content is null. Selector: ${this.selector_projectionLoadingContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the position and dimensions of the calendar container
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the calendar container
   * @throws {Error} When the calendar container is not visible or its bounding box cannot be retrieved
   */
  async getCalendarBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    await this.page.locator(this.selector_calendarContainer).isVisible();
    const boundingBox = await this.page.locator(this.selector_calendarContainer).boundingBox();

    if (boundingBox === null) {
      throw new Error(
        `MonthlyProjectionPagePOM: bounding box is null for calendar container. Selector: ${this.selector_calendarContainer}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Get the full inner HTML of the calendar container, including day headers and all day cells
   * @returns {Promise<string>} The inner HTML of the calendar container exactly as rendered
   * @throws {Error} When the calendar container inner HTML is not accessible or null
   */
  async getCalendarInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_calendarContainer).isVisible();
    const innerHTML = await this.page.locator(this.selector_calendarContainer).innerHTML();

    if (innerHTML === null) {
      throw new Error(
        `MonthlyProjectionPagePOM: inner HTML is null for calendar container. Selector: ${this.selector_calendarContainer}`
      );
    }

    return innerHTML;
  }

  /**
   * @desc Get the full text content of the project-from date row, including the label and any helper text
   * @returns {Promise<string>} The text content of the project-from date row exactly as it appears
   * @throws {Error} When the project-from date row text content is not accessible or null
   */
  async getProjectFromDateRowText(): Promise<string> {
    await this.page.locator(this.selector_projectFromDateRow).isVisible();
    const text = await this.page.locator(this.selector_projectFromDateRow).textContent();

    if (text === null) {
      throw new Error(
        `MonthlyProjectionPagePOM: text content is null for project-from date row. Selector: ${this.selector_projectFromDateRow}`
      );
    }

    return text;
  }

  /**
   * @desc Get the current month title text as displayed in the page header
   * @returns {Promise<string>} The month title text exactly as it appears
   * @throws {Error} When the month title text content is not accessible or null
   */
  async getMonthTitleText(): Promise<string> {
    await this.page.locator(this.selector_monthTitle).isVisible();
    const text = await this.page.locator(this.selector_monthTitle).textContent();

    if (text === null) {
      throw new Error(
        `MonthlyProjectionPagePOM: text content is null for month title. Selector: ${this.selector_monthTitle}`
      );
    }

    return text;
  }
}