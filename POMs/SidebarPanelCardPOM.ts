/**
 * Page Object Model: SidebarPanelCard
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant — testId is passed in at construction time
const SidebarPanelCardPOM_StandardSelector = (testId: string): string =>
  `[data-testid="${testId}"]`;

export class SidebarPanelCardPOM {
  private readonly page: Page;
  private readonly testId: string;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_deleteButton: string;
  private readonly selector_deleteButtonAria: string;
  private readonly selector_disabledOverlay: string;
  private readonly selector_cardMetadata: string;
  private readonly selector_cardDescription: string;
  private readonly selector_cardValue: string;
  private readonly selector_cardTitle: string;
  private readonly selector_badge: (badgeTestId: string) => string;
  private readonly selector_allBadges: string;

  constructor(page: Page, testId: string) {
    this.page = page;
    this.testId = testId;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = SidebarPanelCardPOM_StandardSelector(testId);

    this.selector_deleteButton = `${this.rootSelector} [data-testid="${testId}-delete"]`;
    this.selector_deleteButtonAria = `${this.rootSelector} [aria-label="Delete"]`;
    this.selector_disabledOverlay = `${this.rootSelector} .bg-gray-400`;
    this.selector_cardMetadata = `${this.rootSelector} .text-xs.text-gray-600`;
    this.selector_cardDescription = `${this.rootSelector} p.text-gray-500`;
    this.selector_cardValue = `${this.rootSelector} p.font-semibold`;
    this.selector_cardTitle = `${this.rootSelector} h3`;

    // Dynamic selector for a specific badge by its testId
    this.selector_badge = (badgeTestId: string): string =>
      `${this.rootSelector} [data-testid="${badgeTestId}"]`;

    // Selector for all badge spans within the card (badges use data-testid on the span)
    this.selector_allBadges = `${this.rootSelector} span[data-testid]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if a SidebarPanelCard with the given testId is currently visible
   * @param page - Playwright Page instance
   * @param testId - The data-testid value of the card root element
   * @returns {Promise<boolean>} True if the card is visible
   */
  static async isVisible(page: Page, testId: string): Promise<boolean> {
    try {
      const cardRoot = page.locator(SidebarPanelCardPOM_StandardSelector(testId));
      return await cardRoot.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a SidebarPanelCardPOM instance
   * @param page - Playwright Page instance
   * @param testId - The data-testid value of the card root element
   * @returns {Promise<SidebarPanelCardPOM>} A SidebarPanelCardPOM instance
   * @throws {Error} When the card is not visible
   */
  static async getPOM(page: Page, testId: string): Promise<SidebarPanelCardPOM> {
    const isVisible = await SidebarPanelCardPOM.isVisible(page, testId);

    if (!isVisible) {
      throw new Error(
        `SidebarPanelCardPOM: Cannot instantiate - card is not visible. ` +
          `Expected element [data-testid="${testId}"] to be visible.`
      );
    }

    return new SidebarPanelCardPOM(page, testId);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the card root is visible in the viewport
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the card root is visible
   */
  async isCardVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.rootSelector).isVisible({ timeout });
  }

  /**
   * @desc Check whether the delete button is visible
   * Note: The delete button is opacity-0 by default and only becomes visible on group hover
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the delete button is visible
   */
  async isDeleteButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_deleteButton).isVisible({ timeout });
  }

  /**
   * @desc Check whether the delete button is enabled and not disabled
   * @returns {Promise<boolean>} True if the delete button is enabled
   */
  async isDeleteButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_deleteButton).isEnabled();
  }

  /**
   * @desc Check whether the semi-transparent disabled overlay is currently rendered and visible
   * Indicates the card is in a disabled state
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the disabled overlay is visible
   */
  async isDisabledOverlayVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_disabledOverlay).isVisible({ timeout });
  }

  /**
   * @desc Check whether the metadata section is rendered
   * Only present when the metadata prop is provided
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the metadata section is visible
   */
  async isCardMetadataVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_cardMetadata).isVisible({ timeout });
  }

  /**
   * @desc Check whether the description paragraph is rendered
   * Only present when description is a non-empty string
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the description is visible
   */
  async isCardDescriptionVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_cardDescription).isVisible({ timeout });
  }

  /**
   * @desc Check whether the card title heading is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the card title is visible
   */
  async isCardTitleVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_cardTitle).isVisible({ timeout });
  }

  /**
   * @desc Check whether a specific badge is visible on the card
   * @param {string} badgeTestId - The data-testid of the badge span
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the badge is visible
   */
  async isBadgeVisible(badgeTestId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_badge(badgeTestId)).isVisible({ timeout });
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Double-clicks the card root to trigger the onDoubleClick callback
   * Expected outcome is that the onDoubleClick handler fires
   * Note: A double-click is required to fire the handler as the component uses onDoubleClick
   */
  async doubleClickCard(): Promise<void> {
    await this.page.locator(this.rootSelector).dblclick();
  }

  /**
   * @desc Clicks the trash icon delete button to trigger the onDelete callback
   * Expected outcome is that the onDelete handler fires
   * Note: The delete button is only rendered when the onDelete prop is provided
   * @throws {Error} When the delete button is not visible or not interactable
   */
  async clickDeleteButton(): Promise<void> {
    const isVisible = await this.isDeleteButtonVisible();
    if (!isVisible) {
      throw new Error(
        `SidebarPanelCardPOM: Cannot click delete button - it is not visible. ` +
          `Selector: ${this.selector_deleteButton}. ` +
          `Note: The delete button requires group hover to become visible.`
      );
    }
    await this.page.locator(this.selector_deleteButton).click();
  }

  /**
   * @desc Scrolls within the card container if content overflows
   * Expected outcome is that the card content scrolls
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollCard(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.rootSelector).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the full inner HTML of the card to inspect all rendered child content at once
   * @returns {Promise<string>} The inner HTML of the card root element
   * @throws {Error} When the card root inner HTML is not accessible
   */
  async getCardInnerHtml(): Promise<string> {
    await this.page.locator(this.rootSelector).isVisible();
    const html = await this.page.locator(this.rootSelector).innerHTML();

    if (html === null) {
      throw new Error(
        `SidebarPanelCardPOM: Card inner HTML is null. Selector: ${this.rootSelector}`
      );
    }

    return html;
  }

  /**
   * @desc Get the position and dimensions of the card container
   * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>}
   *   The bounding box of the card, or null if not in the viewport
   */
  async getCardBoundingBox(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null> {
    return await this.page.locator(this.rootSelector).boundingBox();
  }

  /**
   * @desc Get the CSS class list of the card root to inspect disabled (opacity-50) or hover state classes
   * @returns {Promise<string>} The full class attribute value of the card root
   * @throws {Error} When the class attribute is not accessible
   */
  async getCardClassList(): Promise<string> {
    const classes = await this.page.locator(this.rootSelector).getAttribute('class');

    if (classes === null) {
      throw new Error(
        `SidebarPanelCardPOM: Card root class attribute is null. Selector: ${this.rootSelector}`
      );
    }

    return classes;
  }

  /**
   * @desc Get the aria-label attribute value of the delete button to confirm accessibility labelling
   * @returns {Promise<string>} The aria-label attribute value
   * @throws {Error} When the aria-label attribute is not accessible
   */
  async getDeleteButtonAriaLabel(): Promise<string> {
    const ariaLabel = await this.page
      .locator(this.selector_deleteButtonAria)
      .getAttribute('aria-label');

    if (ariaLabel === null) {
      throw new Error(
        `SidebarPanelCardPOM: Delete button aria-label attribute is null. ` +
          `Selector: ${this.selector_deleteButtonAria}`
      );
    }

    return ariaLabel;
  }

  /**
   * @desc Get the CSS class list of the disabled overlay to verify opacity and background color classes
   * @returns {Promise<string>} The full class attribute value of the disabled overlay
   * @throws {Error} When the disabled overlay class attribute is not accessible
   */
  async getDisabledOverlayClassList(): Promise<string> {
    const classes = await this.page
      .locator(this.selector_disabledOverlay)
      .getAttribute('class');

    if (classes === null) {
      throw new Error(
        `SidebarPanelCardPOM: Disabled overlay class attribute is null. ` +
          `Selector: ${this.selector_disabledOverlay}`
      );
    }

    return classes;
  }

  /**
   * @desc Get the visible text content of the metadata section
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the metadata text content is not accessible
   */
  async getCardMetadataText(): Promise<string> {
    await this.page.locator(this.selector_cardMetadata).isVisible();
    const text = await this.page.locator(this.selector_cardMetadata).textContent();

    if (text === null) {
      throw new Error(
        `SidebarPanelCardPOM: Card metadata text content is null. ` +
          `Selector: ${this.selector_cardMetadata}`
      );
    }

    return text;
  }

  /**
   * @desc Get the inner HTML of the metadata wrapper to read arbitrary ReactNode metadata content
   * such as date ranges or frequency info
   * @returns {Promise<string>} The inner HTML of the metadata section
   * @throws {Error} When the metadata inner HTML is not accessible
   */
  async getCardMetadataInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_cardMetadata).isVisible();
    const html = await this.page.locator(this.selector_cardMetadata).innerHTML();

    if (html === null) {
      throw new Error(
        `SidebarPanelCardPOM: Card metadata inner HTML is null. ` +
          `Selector: ${this.selector_cardMetadata}`
      );
    }

    return html;
  }

  /**
   * @desc Get the visible description text rendered in the card
   * @returns {Promise<string>} The description text exactly as it appears in the UI
   * @throws {Error} When the description text content is not accessible
   */
  async getCardDescriptionText(): Promise<string> {
    await this.page.locator(this.selector_cardDescription).isVisible();
    const text = await this.page.locator(this.selector_cardDescription).textContent();

    if (text === null) {
      throw new Error(
        `SidebarPanelCardPOM: Card description text content is null. ` +
          `Selector: ${this.selector_cardDescription}`
      );
    }

    return text;
  }

  /**
   * @desc Get the CSS class list of the value element to determine valueType via color class
   * text-red-700 = EXPENSE, text-green-600 = INCOMING
   * @returns {Promise<string>} The full class attribute value of the card value element
   * @throws {Error} When the card value class attribute is not accessible
   */
  async getCardValueClassList(): Promise<string> {
    const classes = await this.page.locator(this.selector_cardValue).getAttribute('class');

    if (classes === null) {
      throw new Error(
        `SidebarPanelCardPOM: Card value class attribute is null. ` +
          `Selector: ${this.selector_cardValue}`
      );
    }

    return classes;
  }

  /**
   * @desc Get the formatted currency value string including the +/- prefix
   * e.g. '-£12.50' or '+$200.00'
   * @returns {Promise<string>} The value text exactly as it appears in the UI
   * @throws {Error} When the card value text content is not accessible
   */
  async getCardValueText(): Promise<string> {
    await this.page.locator(this.selector_cardValue).isVisible();
    const text = await this.page.locator(this.selector_cardValue).textContent();

    if (text === null) {
      throw new Error(
        `SidebarPanelCardPOM: Card value text content is null. ` +
          `Selector: ${this.selector_cardValue}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible title text of the card
   * @returns {Promise<string>} The title text exactly as it appears in the UI
   * @throws {Error} When the card title text content is not accessible
   */
  async getCardTitleText(): Promise<string> {
    await this.page.locator(this.selector_cardTitle).isVisible();
    const text = await this.page.locator(this.selector_cardTitle).textContent();

    if (text === null) {
      throw new Error(
        `SidebarPanelCardPOM: Card title text content is null. ` +
          `Selector: ${this.selector_cardTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Count the total number of badge elements rendered within the card
   * @returns {Promise<number>} The count of badge span elements
   */
  async getBadgeCount(): Promise<number> {
    return await this.page.locator(this.selector_allBadges).count();
  }

  /**
   * @desc Get the CSS class list of a badge to verify its color/style classes
   * e.g. bg-green-100 text-green-800
   * @param {string} badgeTestId - The data-testid of the badge span
   * @returns {Promise<string>} The full class attribute value of the badge
   * @throws {Error} When the badge class attribute is not accessible
   */
  async getBadgeClassList(badgeTestId: string): Promise<string> {
    const classes = await this.page
      .locator(this.selector_badge(badgeTestId))
      .getAttribute('class');

    if (classes === null) {
      throw new Error(
        `SidebarPanelCardPOM: Badge class attribute is null for badgeTestId "${badgeTestId}". ` +
          `Selector: ${this.selector_badge(badgeTestId)}`
      );
    }

    return classes;
  }

  /**
   * @desc Get the text content of a specific badge pill by its testId
   * @param {string} badgeTestId - The data-testid of the badge span
   * @returns {Promise<string>} The badge text exactly as it appears in the UI
   * @throws {Error} When the badge text content is not accessible
   */
  async getBadgeText(badgeTestId: string): Promise<string> {
    await this.page.locator(this.selector_badge(badgeTestId)).isVisible();
    const text = await this.page.locator(this.selector_badge(badgeTestId)).textContent();

    if (text === null) {
      throw new Error(
        `SidebarPanelCardPOM: Badge text content is null for badgeTestId "${badgeTestId}". ` +
          `Selector: ${this.selector_badge(badgeTestId)}`
      );
    }

    return text;
  }

  /**
   * @desc Get a list of all badge text values rendered on the card
   * @returns {Promise<string[]>} Array of badge text values exactly as they appear in the UI
   */
  async getAllBadgeTexts(): Promise<string[]> {
    const badgeLocator = this.page.locator(this.selector_allBadges);
    const count = await badgeLocator.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await badgeLocator.nth(i).textContent();
      texts.push(text ?? '');
    }

    return texts;
  }
}