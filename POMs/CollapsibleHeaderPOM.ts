/**
 * Page Object Model: CollapsibleHeader
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const CollapsibleHeaderPOM_StandardSelector = 'button[aria-expanded]';

export class CollapsibleHeaderPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_headerButtonExpanded: string;
  private readonly selector_headerButtonCollapsed: string;
  private readonly selector_headerButtonByRole: string;
  private readonly selector_headerButtonAriaLabelCollapse: string;
  private readonly selector_headerButtonAriaLabelExpand: string;
  private readonly selector_headerButtonByTestId: (testId: string) => string;
  private readonly selector_chevronSvg: (testId: string) => string;
  private readonly selector_chevronAriaHidden: (testId: string) => string;
  private readonly selector_contentAreaDiv: (testId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = CollapsibleHeaderPOM_StandardSelector;

    // Static selectors
    this.selector_headerButtonExpanded = `button[aria-expanded="true"]`;
    this.selector_headerButtonCollapsed = `button[aria-expanded="false"]`;
    this.selector_headerButtonByRole = `button[aria-expanded]`;
    this.selector_headerButtonAriaLabelCollapse = `[aria-label="Collapse section"]`;
    this.selector_headerButtonAriaLabelExpand = `[aria-label="Expand section"]`;

    // Dynamic selectors
    this.selector_headerButtonByTestId = (testId: string) =>
      `[data-testid="${testId}"]`;

    this.selector_chevronSvg = (testId: string) =>
      `[data-testid="${testId}"] svg`;

    this.selector_chevronAriaHidden = (testId: string) =>
      `[data-testid="${testId}"] svg[aria-hidden="true"]`;

    this.selector_contentAreaDiv = (testId: string) =>
      `[data-testid="${testId}"] > div`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if any collapsible header button is visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if a collapsible header button is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const button = page.locator(CollapsibleHeaderPOM_StandardSelector).first();
      return await button.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a CollapsibleHeaderPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<CollapsibleHeaderPOM>} CollapsibleHeaderPOM instance
   * @throws {Error} When no collapsible header button is visible on the page
   */
  static async getPOM(page: Page): Promise<CollapsibleHeaderPOM> {
    const isVisible = await CollapsibleHeaderPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'CollapsibleHeaderPOM: Cannot instantiate - no collapsible header button is visible. ' +
          `Expected element [${CollapsibleHeaderPOM_StandardSelector}] to be visible.`
      );
    }

    return new CollapsibleHeaderPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the collapsible header button is visible on screen using its testId
   * @param {string} testId - The data-testid value of the header button
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the header button is visible
   */
  async isHeaderButtonVisible(testId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_headerButtonByTestId(testId))
      .isVisible({ timeout });
  }

  /**
   * @desc Verify the header button is visible when in expanded state using the aria-expanded=true selector
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if an expanded header button is visible
   */
  async isExpandedHeaderButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_headerButtonExpanded)
      .first()
      .isVisible({ timeout });
  }

  /**
   * @desc Verify the header button is visible when in collapsed state using the aria-expanded=false selector
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if a collapsed header button is visible
   */
  async isCollapsedHeaderButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_headerButtonCollapsed)
      .first()
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the collapsible header button is enabled and interactable
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<boolean>} True if the header button is enabled
   */
  async isHeaderButtonEnabled(testId: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_headerButtonByTestId(testId))
      .isEnabled();
  }

  /**
   * @desc Check whether the chevron SVG icon is present and visible within the header button
   * @param {string} testId - The data-testid value of the header button
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the chevron icon is visible
   */
  async isChevronIconVisible(testId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_chevronSvg(testId))
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the content area div is visible within the header button
   * @param {string} testId - The data-testid value of the header button
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the content area div is visible
   */
  async isContentAreaVisible(testId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_contentAreaDiv(testId))
      .isVisible({ timeout });
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Click the collapsible header button by its testId to toggle the section open or closed
   * Expected outcome is that the onToggle callback fires and the section expands or collapses
   * @param {string} testId - The data-testid value of the header button
   */
  async clickHeaderButtonByTestId(testId: string): Promise<void> {
    await this.page.locator(this.selector_headerButtonByTestId(testId)).click();
  }

  /**
   * @desc Click the expanded header button (aria-expanded=true) to collapse the section
   * Expected outcome is that the section collapses and aria-expanded becomes 'false'
   */
  async clickExpandedHeaderButton(): Promise<void> {
    await this.page.locator(this.selector_headerButtonExpanded).first().click();
  }

  /**
   * @desc Click the collapsed header button (aria-expanded=false) to expand the section
   * Expected outcome is that the section expands and aria-expanded becomes 'true'
   */
  async clickCollapsedHeaderButton(): Promise<void> {
    await this.page.locator(this.selector_headerButtonCollapsed).first().click();
  }

  /**
   * @desc Click the header button targeted by its default 'Collapse section' aria-label
   * Expected outcome is that the expanded section collapses (used when no custom ariaLabel is provided)
   */
  async clickHeaderButtonAriaLabelCollapse(): Promise<void> {
    await this.page.locator(this.selector_headerButtonAriaLabelCollapse).first().click();
  }

  /**
   * @desc Click the header button targeted by its default 'Expand section' aria-label
   * Expected outcome is that the collapsed section expands (used when no custom ariaLabel is provided)
   */
  async clickHeaderButtonAriaLabelExpand(): Promise<void> {
    await this.page.locator(this.selector_headerButtonAriaLabelExpand).first().click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the aria-expanded attribute value to determine whether the collapsible section is currently open or closed
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<string>} The aria-expanded attribute value ('true' or 'false')
   * @throws {Error} When the aria-expanded attribute is not accessible or null
   */
  async getAriaExpanded(testId: string): Promise<string> {
    const value = await this.page
      .locator(this.selector_headerButtonByTestId(testId))
      .getAttribute('aria-expanded');

    if (value === null) {
      throw new Error(
        `CollapsibleHeaderPOM: aria-expanded attribute is null for button with testId "${testId}". ` +
          `Selector: ${this.selector_headerButtonByTestId(testId)}`
      );
    }

    return value;
  }

  /**
   * @desc Get the aria-label attribute value to read the current accessibility label (custom or default)
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<string>} The aria-label attribute value exactly as it appears
   * @throws {Error} When the aria-label attribute is not accessible or null
   */
  async getAriaLabel(testId: string): Promise<string> {
    const value = await this.page
      .locator(this.selector_headerButtonByTestId(testId))
      .getAttribute('aria-label');

    if (value === null) {
      throw new Error(
        `CollapsibleHeaderPOM: aria-label attribute is null for button with testId "${testId}". ` +
          `Selector: ${this.selector_headerButtonByTestId(testId)}`
      );
    }

    return value;
  }

  /**
   * @desc Get the data-testid attribute value from the root button element
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<string>} The data-testid attribute value exactly as it appears
   * @throws {Error} When the data-testid attribute is not accessible or null
   */
  async getTestIdAttribute(testId: string): Promise<string> {
    const value = await this.page
      .locator(this.selector_headerButtonByTestId(testId))
      .getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `CollapsibleHeaderPOM: data-testid attribute is null for button with testId "${testId}". ` +
          `Selector: ${this.selector_headerButtonByTestId(testId)}`
      );
    }

    return value;
  }

  /**
   * @desc Get the CSS class list of the header button to inspect size variant styles or state-based classes
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<string>} The class attribute value exactly as it appears
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getHeaderButtonClassList(testId: string): Promise<string> {
    const value = await this.page
      .locator(this.selector_headerButtonByTestId(testId))
      .getAttribute('class');

    if (value === null) {
      throw new Error(
        `CollapsibleHeaderPOM: class attribute is null for button with testId "${testId}". ` +
          `Selector: ${this.selector_headerButtonByTestId(testId)}`
      );
    }

    return value;
  }

  /**
   * @desc Get the position and dimensions of the collapsible header button
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the header button
   * @throws {Error} When the bounding box is not accessible or null
   */
  async getHeaderButtonBoundingBox(
    testId: string
  ): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page
      .locator(this.selector_headerButtonByTestId(testId))
      .boundingBox();

    if (box === null) {
      throw new Error(
        `CollapsibleHeaderPOM: bounding box is null for button with testId "${testId}". ` +
          `Selector: ${this.selector_headerButtonByTestId(testId)}`
      );
    }

    return box;
  }

  /**
   * @desc Get the CSS class list of the chevron SVG to assert rotation state
   * '-rotate-90' is present when collapsed=true, absent when collapsed=false
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<string>} The class attribute value of the chevron SVG exactly as it appears
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getChevronClassList(testId: string): Promise<string> {
    const value = await this.page
      .locator(this.selector_chevronSvg(testId))
      .getAttribute('class');

    if (value === null) {
      throw new Error(
        `CollapsibleHeaderPOM: class attribute is null for chevron SVG with testId "${testId}". ` +
          `Selector: ${this.selector_chevronSvg(testId)}`
      );
    }

    return value;
  }

  /**
   * @desc Get the position and dimensions of the chevron icon within the header button
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the chevron icon
   * @throws {Error} When the bounding box is not accessible or null
   */
  async getChevronBoundingBox(
    testId: string
  ): Promise<{ x: number; y: number; width: number; height: number }> {
    const box = await this.page
      .locator(this.selector_chevronSvg(testId))
      .boundingBox();

    if (box === null) {
      throw new Error(
        `CollapsibleHeaderPOM: bounding box is null for chevron SVG with testId "${testId}". ` +
          `Selector: ${this.selector_chevronSvg(testId)}`
      );
    }

    return box;
  }

  /**
   * @desc Get the aria-hidden attribute value of the chevron icon to confirm it is always 'true' (decorative)
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<string>} The aria-hidden attribute value exactly as it appears
   * @throws {Error} When the aria-hidden attribute is not accessible or null
   */
  async getChevronAriaHidden(testId: string): Promise<string> {
    const value = await this.page
      .locator(this.selector_chevronAriaHidden(testId))
      .getAttribute('aria-hidden');

    if (value === null) {
      throw new Error(
        `CollapsibleHeaderPOM: aria-hidden attribute is null for chevron SVG with testId "${testId}". ` +
          `Selector: ${this.selector_chevronAriaHidden(testId)}`
      );
    }

    return value;
  }

  /**
   * @desc Get the CSS class list of the content area div to verify flex layout and sizing classes
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<string>} The class attribute value of the content area div exactly as it appears
   * @throws {Error} When the class attribute is not accessible or null
   */
  async getContentAreaClassList(testId: string): Promise<string> {
    const value = await this.page
      .locator(this.selector_contentAreaDiv(testId))
      .getAttribute('class');

    if (value === null) {
      throw new Error(
        `CollapsibleHeaderPOM: class attribute is null for content area div with testId "${testId}". ` +
          `Selector: ${this.selector_contentAreaDiv(testId)}`
      );
    }

    return value;
  }

  /**
   * @desc Get the full inner HTML of the content area div to inspect all child elements (icons, titles, badges, etc.)
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<string>} The inner HTML of the content area div exactly as it appears
   * @throws {Error} When the inner HTML is not accessible or null
   */
  async getContentAreaInnerHtml(testId: string): Promise<string> {
    const value = await this.page
      .locator(this.selector_contentAreaDiv(testId))
      .innerHTML();

    if (value === null) {
      throw new Error(
        `CollapsibleHeaderPOM: innerHTML is null for content area div with testId "${testId}". ` +
          `Selector: ${this.selector_contentAreaDiv(testId)}`
      );
    }

    return value;
  }

  /**
   * @desc Get the visible text content rendered inside the content area (e.g. section title, badge labels)
   * @param {string} testId - The data-testid value of the header button
   * @returns {Promise<string>} The text content of the content area exactly as it appears
   * @throws {Error} When the text content is not accessible or null
   */
  async getContentAreaText(testId: string): Promise<string> {
    const value = await this.page
      .locator(this.selector_contentAreaDiv(testId))
      .textContent();

    if (value === null) {
      throw new Error(
        `CollapsibleHeaderPOM: textContent is null for content area div with testId "${testId}". ` +
          `Selector: ${this.selector_contentAreaDiv(testId)}`
      );
    }

    return value;
  }
}