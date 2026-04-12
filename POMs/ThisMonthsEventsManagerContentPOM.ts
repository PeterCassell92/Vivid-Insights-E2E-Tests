/**
 * Page Object Model: ThisMonthsEventsManagerContent
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const ThisMonthsEventsManagerContentPOM_StandardSelector = '[data-testid="this-months-events-manager"]';

export class ThisMonthsEventsManagerContentPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_eventsManagerContainer: string;
  private readonly selector_headerSection: string;
  private readonly selector_headerTitle: string;
  private readonly selector_filterBar: string;
  private readonly selector_decisionPathFilterLabel: string;
  private readonly selector_decisionPathFilter: string;
  private readonly selector_decisionPathAllOption: string;
  private readonly selector_decisionPathNoneOption: string;
  private readonly selector_eventsListArea: string;
  private readonly selector_eventsListContainer: string;
  private readonly selector_loadingIndicator: string;
  private readonly selector_emptyState: string;
  private readonly selector_noMatchesState: string;
  private readonly selector_decisionPathOption: (pathId: string) => string;
  private readonly selector_projectionEventCard: (eventId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = ThisMonthsEventsManagerContentPOM_StandardSelector;

    // Container
    this.selector_eventsManagerContainer = this.rootSelector;

    // Header section
    this.selector_headerSection = `${this.rootSelector} > .border-b:first-child`;
    this.selector_headerTitle = `${this.rootSelector} h2`;

    // Filter bar
    this.selector_filterBar = `${this.rootSelector} .bg-gray-50.border-b`;
    this.selector_decisionPathFilterLabel = `${this.rootSelector} label span`;
    this.selector_decisionPathFilter = `[data-testid="decision-path-filter"]`;
    this.selector_decisionPathAllOption = `[data-testid="decision-path-filter"] option[value="all"]`;
    this.selector_decisionPathNoneOption = `[data-testid="decision-path-filter"] option[value="none"]`;

    // Events list area
    this.selector_eventsListArea = `${this.rootSelector} .flex-1.overflow-y-auto`;
    this.selector_eventsListContainer = `${this.rootSelector} .space-y-2`;
    this.selector_loadingIndicator = `[data-testid="events-manager-loading"]`;
    this.selector_emptyState = `[data-testid="events-manager-empty"]`;
    this.selector_noMatchesState = `[data-testid="events-manager-no-matches"]`;

    // Dynamic selectors
    this.selector_decisionPathOption = (pathId: string) =>
      `[data-testid="decision-path-filter"] option[value="${pathId}"]`;

    this.selector_projectionEventCard = (eventId: string) =>
      `[data-testid="projection-event-${eventId}"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the ThisMonthsEventsManagerContent panel is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the root container is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const root = page.locator(ThisMonthsEventsManagerContentPOM_StandardSelector);
      return await root.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a POM instance
   * @param page - Playwright Page instance
   * @returns {Promise<ThisMonthsEventsManagerContentPOM>} POM instance
   * @throws {Error} When the events manager container is not visible
   */
  static async getPOM(page: Page): Promise<ThisMonthsEventsManagerContentPOM> {
    const isVisible = await ThisMonthsEventsManagerContentPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ThisMonthsEventsManagerContentPOM: Cannot instantiate - events manager panel is not visible. ' +
        `Expected element [${ThisMonthsEventsManagerContentPOM_StandardSelector}] to be visible.`
      );
    }

    return new ThisMonthsEventsManagerContentPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Whether or not the root events manager container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the container is visible
   */
  async isEventsManagerContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_eventsManagerContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the scrollable events list area is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the events list area is visible
   */
  async isEventsListAreaVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_eventsListArea).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the decision path filter bar is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the filter bar is visible
   */
  async isFilterBarVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_filterBar).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the header section bar is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the header section is visible
   */
  async isHeaderSectionVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_headerSection).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the loading indicator is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading indicator is visible
   */
  async isLoadingIndicatorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_loadingIndicator).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the empty state message is visible (no events for this month)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the empty state is visible
   */
  async isEmptyStateVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_emptyState).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the no-matches state message is visible (events exist but none match filters)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the no-matches state is visible
   */
  async isNoMatchesStateVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_noMatchesState).isVisible({ timeout });
  }

  /**
   * @desc Whether or not a specific projection event card is visible
   * @param {string} eventId - The ID of the projection event
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the event card is visible
   */
  async isProjectionEventCardVisible(eventId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_projectionEventCard(eventId)).isVisible({ timeout });
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Scrolls within the events list area
   * Expected outcome is that additional event cards become visible if the list overflows
   * @param {number} deltaY - Pixels to scroll vertically (positive = down, negative = up)
   */
  async scrollEventsListArea(deltaY: number): Promise<void> {
    await this.page.locator(this.selector_eventsListArea).hover();
    await this.page.mouse.wheel(0, deltaY);
  }

  /**
   * @desc Clicks within the events list area
   * Expected outcome is that child elements within the list area respond to the click
   */
  async clickEventsListArea(): Promise<void> {
    await this.page.locator(this.selector_eventsListArea).click();
  }

  /**
   * @desc Scrolls within the filter bar area
   * Expected outcome is that overflowing filter bar content becomes accessible
   * @param {number} deltaY - Pixels to scroll vertically (positive = down, negative = up)
   */
  async scrollFilterBar(deltaY: number): Promise<void> {
    await this.page.locator(this.selector_filterBar).hover();
    await this.page.mouse.wheel(0, deltaY);
  }

  /**
   * @desc Selects a value in the decision path filter dropdown
   * Expected outcome is that the events list is filtered to show only events matching the selected decision path
   * @param {'all' | 'none'} value - The filter value to select
   */
  async selectDecisionPathFilter(value: 'all' | 'none'): Promise<void> {
    await this.page.locator(this.selector_decisionPathFilter).selectOption(value);
  }

  /**
   * @desc Selects a specific decision path by its ID in the decision path filter dropdown
   * Expected outcome is that the events list is filtered to show only events on the specified decision path
   * @param {string} pathId - The ID of the decision path to filter by
   */
  async selectDecisionPathFilterById(pathId: string): Promise<void> {
    await this.page.locator(this.selector_decisionPathFilter).selectOption(pathId);
  }

  /**
   * @desc Double-clicks a projection event card to open the edit modal
   * Expected outcome is that the ProjectionEventEditModal opens for the specified event
   * @param {string} eventId - The ID of the projection event to edit
   */
  async doubleClickProjectionEventCard(eventId: string): Promise<void> {
    await this.page.locator(this.selector_projectionEventCard(eventId)).dblclick();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Gets the data-testid attribute value of the root component wrapper
   * @returns {Promise<string>} The data-testid attribute value exactly as it appears
   * @throws {Error} When the attribute is not accessible or null
   */
  async getEventsManagerContainerTestId(): Promise<string> {
    await this.page.locator(this.selector_eventsManagerContainer).isVisible();
    const value = await this.page.locator(this.selector_eventsManagerContainer).getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `ThisMonthsEventsManagerContentPOM: data-testid attribute is null on root container. Selector: ${this.selector_eventsManagerContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the bounding box of the scrollable events list area to verify layout dimensions
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the events list area
   * @throws {Error} When the events list area is not visible or bounding box cannot be retrieved
   */
  async getEventsListAreaBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    await this.page.locator(this.selector_eventsListArea).isVisible();
    const boundingBox = await this.page.locator(this.selector_eventsListArea).boundingBox();

    if (!boundingBox) {
      throw new Error(
        `ThisMonthsEventsManagerContentPOM: Unable to get bounding box for events list area. Selector: ${this.selector_eventsListArea}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Gets a list of all option values currently available in the decision path filter dropdown
   * @returns {Promise<string[]>} Array of option values from the decision path filter
   * @throws {Error} When the decision path filter is not accessible
   */
  async getDecisionPathFilterOptions(): Promise<string[]> {
    await this.page.locator(this.selector_decisionPathFilter).isVisible();
    const options = await this.page.locator(this.selector_decisionPathFilter).locator('option').all();
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
   * @desc Gets the currently selected value of the decision path filter dropdown
   * @returns {Promise<string>} The currently selected option value exactly as it appears
   * @throws {Error} When the decision path filter is not accessible or value is null
   */
  async getSelectedDecisionPathFilterValue(): Promise<string> {
    await this.page.locator(this.selector_decisionPathFilter).isVisible();
    const value = await this.page.locator(this.selector_decisionPathFilter).inputValue();

    if (value === null) {
      throw new Error(
        `ThisMonthsEventsManagerContentPOM: Selected value is null for decision path filter. Selector: ${this.selector_decisionPathFilter}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the inner HTML of the header section to inspect icon, title, and subtitle content
   * @returns {Promise<string>} The inner HTML of the header section exactly as it appears
   * @throws {Error} When the header section is not accessible or inner HTML is null
   */
  async getHeaderSectionInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_headerSection).isVisible();
    const html = await this.page.locator(this.selector_headerSection).innerHTML();

    if (html === null) {
      throw new Error(
        `ThisMonthsEventsManagerContentPOM: Inner HTML is null for header section. Selector: ${this.selector_headerSection}`
      );
    }

    return html;
  }

  /**
   * @desc Gets the text content of the header title
   * @returns {Promise<string>} The header title text exactly as it appears
   * @throws {Error} When the header title is not accessible or text content is null
   */
  async getHeaderTitleText(): Promise<string> {
    await this.page.locator(this.selector_headerTitle).isVisible();
    const text = await this.page.locator(this.selector_headerTitle).textContent();

    if (text === null) {
      throw new Error(
        `ThisMonthsEventsManagerContentPOM: Text content is null for header title. Selector: ${this.selector_headerTitle}`
      );
    }

    return text;
  }
}