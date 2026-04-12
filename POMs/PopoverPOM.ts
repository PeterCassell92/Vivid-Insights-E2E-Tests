/**
 * Page Object Model: Popover
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant — popover content is portal-rendered into document.body,
// so the root selector targets the trigger's parent slot for scoping trigger interactions.
const PopoverPOM_StandardSelector = '[data-slot="popover"]';

export class PopoverPOM {
  private readonly page: Page;

  // Root selector
  private readonly rootSelector: string;

  // Trigger selectors
  private readonly selector_popoverTrigger: string;

  // Content selectors — portal-rendered into document.body, not scoped to root
  private readonly selector_popoverContent: string;

  // Anchor selectors
  private readonly selector_popoverAnchor: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = PopoverPOM_StandardSelector;

    // Trigger — scoped to the popover root
    this.selector_popoverTrigger = `${this.rootSelector} [data-slot="popover-trigger"]`;

    // Content — portal-rendered into document.body; NOT scoped to root
    this.selector_popoverContent = '[data-slot="popover-content"]';

    // Anchor — scoped to the popover root (only present when explicitly used)
    this.selector_popoverAnchor = `${this.rootSelector} [data-slot="popover-anchor"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the Popover root element is present and visible in the DOM
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the popover root is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const root = page.locator(PopoverPOM_StandardSelector);
      return await root.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a PopoverPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<PopoverPOM>} A PopoverPOM instance
   * @throws {Error} When the popover root element is not visible
   */
  static async getPOM(page: Page): Promise<PopoverPOM> {
    const isVisible = await PopoverPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'PopoverPOM: Cannot instantiate — popover root is not visible. ' +
          `Expected element [${PopoverPOM_StandardSelector}] to be visible.`
      );
    }

    return new PopoverPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the popover trigger element is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the trigger is visible
   */
  async isTriggerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_popoverTrigger)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the popover content panel is currently visible in the DOM (i.e., popover is open)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the content panel is visible
   */
  async isContentVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_popoverContent)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the optional popover anchor element is present and visible in the DOM
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the anchor element is visible
   */
  async isAnchorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_popoverAnchor)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the popover root wrapper element is present in the DOM
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the popover root is visible
   */
  async isRootVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.rootSelector)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the popover trigger button is enabled (not disabled)
   * @returns {Promise<boolean>} True if the trigger is enabled
   */
  async isTriggerEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_popoverTrigger).isEnabled();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Click the trigger element to open or close the popover panel
   * Expected outcome is that the popover content panel will become visible (if closed) or hidden (if open)
   */
  async clickPopoverTrigger(): Promise<void> {
    await this.page.locator(this.selector_popoverTrigger).click();
  }

  /**
   * @desc Dismiss the popover content panel by pressing Escape
   * Expected outcome is that the popover content panel will close
   */
  async dismissPopoverWithEscape(): Promise<void> {
    await this.page.keyboard.press('Escape');
  }

  /**
   * @desc Dismiss the popover content panel by clicking outside of it
   * Expected outcome is that the popover content panel will close
   */
  async dismissPopoverByClickingOutside(): Promise<void> {
    await this.page.mouse.click(0, 0);
  }

  /**
   * @desc Scroll within the popover content panel if its inner content overflows
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollPopoverContent(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_popoverContent).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — TRIGGER
  // ========================================================================

  /**
   * @desc Get the visible text content of the popover trigger element
   * @returns {Promise<string>} The trigger text exactly as it appears in the UI
   * @throws {Error} When trigger text content is null or not accessible
   */
  async getTriggerText(): Promise<string> {
    await this.page.locator(this.selector_popoverTrigger).isVisible();
    const text = await this.page
      .locator(this.selector_popoverTrigger)
      .textContent();

    if (text === null) {
      throw new Error(
        `PopoverPOM: Trigger text content is null. Selector: ${this.selector_popoverTrigger}`
      );
    }

    return text;
  }

  /**
   * @desc Get the current open/closed state of the popover from the trigger's data-state attribute
   * @returns {Promise<string>} The data-state value — 'open' or 'closed'
   * @throws {Error} When the data-state attribute is not accessible
   */
  async getTriggerDataState(): Promise<string> {
    await this.page.locator(this.selector_popoverTrigger).isVisible();
    const value = await this.page
      .locator(this.selector_popoverTrigger)
      .getAttribute('data-state');

    if (value === null) {
      throw new Error(
        `PopoverPOM: data-state attribute is null on trigger. Selector: ${this.selector_popoverTrigger}`
      );
    }

    return value;
  }

  /**
   * @desc Get the data-slot identity marker value from the trigger element; always 'popover-trigger'
   * @returns {Promise<string>} The data-slot value
   * @throws {Error} When the data-slot attribute is not accessible
   */
  async getTriggerDataSlot(): Promise<string> {
    await this.page.locator(this.selector_popoverTrigger).isVisible();
    const value = await this.page
      .locator(this.selector_popoverTrigger)
      .getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `PopoverPOM: data-slot attribute is null on trigger. Selector: ${this.selector_popoverTrigger}`
      );
    }

    return value;
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — CONTENT
  // ========================================================================

  /**
   * @desc Get the visible text content rendered inside the popover content panel
   * @returns {Promise<string>} The content text exactly as it appears in the UI
   * @throws {Error} When content text is null or not accessible
   */
  async getContentText(): Promise<string> {
    await this.page.locator(this.selector_popoverContent).isVisible();
    const text = await this.page
      .locator(this.selector_popoverContent)
      .textContent();

    if (text === null) {
      throw new Error(
        `PopoverPOM: Content text is null. Selector: ${this.selector_popoverContent}`
      );
    }

    return text;
  }

  /**
   * @desc Get the full inner HTML of the popover content panel to inspect its rendered structure
   * @returns {Promise<string>} The inner HTML of the content panel
   * @throws {Error} When inner HTML is not accessible
   */
  async getContentInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_popoverContent).isVisible();
    const html = await this.page
      .locator(this.selector_popoverContent)
      .innerHTML();

    if (html === null) {
      throw new Error(
        `PopoverPOM: Content inner HTML is null. Selector: ${this.selector_popoverContent}`
      );
    }

    return html;
  }

  /**
   * @desc Get the CSS class list of the popover content panel to inspect applied animation or styling classes
   * @returns {Promise<string>} The full class attribute string of the content panel
   * @throws {Error} When the class attribute is not accessible
   */
  async getContentClassList(): Promise<string> {
    await this.page.locator(this.selector_popoverContent).isVisible();
    const classList = await this.page
      .locator(this.selector_popoverContent)
      .getAttribute('class');

    if (classList === null) {
      throw new Error(
        `PopoverPOM: class attribute is null on content panel. Selector: ${this.selector_popoverContent}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the position and dimensions of the popover content panel to verify its placement on screen
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the content panel
   * @throws {Error} When the bounding box cannot be retrieved (element not visible or not in DOM)
   */
  async getContentBoundingBox(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> {
    await this.page.locator(this.selector_popoverContent).isVisible();
    const box = await this.page
      .locator(this.selector_popoverContent)
      .boundingBox();

    if (box === null) {
      throw new Error(
        `PopoverPOM: Bounding box is null for content panel — element may not be visible. Selector: ${this.selector_popoverContent}`
      );
    }

    return box;
  }

  /**
   * @desc Get the current open/closed animation state of the popover content panel from data-state
   * @returns {Promise<string>} The data-state value — 'open' or 'closed'
   * @throws {Error} When the data-state attribute is not accessible
   */
  async getContentDataState(): Promise<string> {
    await this.page.locator(this.selector_popoverContent).isVisible();
    const value = await this.page
      .locator(this.selector_popoverContent)
      .getAttribute('data-state');

    if (value === null) {
      throw new Error(
        `PopoverPOM: data-state attribute is null on content panel. Selector: ${this.selector_popoverContent}`
      );
    }

    return value;
  }

  /**
   * @desc Get the alignment of the popover content panel relative to the trigger from data-align
   * @returns {Promise<string>} The data-align value — 'start', 'center', or 'end'
   * @throws {Error} When the data-align attribute is not accessible
   */
  async getContentDataAlign(): Promise<string> {
    await this.page.locator(this.selector_popoverContent).isVisible();
    const value = await this.page
      .locator(this.selector_popoverContent)
      .getAttribute('data-align');

    if (value === null) {
      throw new Error(
        `PopoverPOM: data-align attribute is null on content panel. Selector: ${this.selector_popoverContent}`
      );
    }

    return value;
  }

  /**
   * @desc Get the side on which the popover content is rendered from data-side, which also drives the slide-in animation direction
   * @returns {Promise<string>} The data-side value — 'top', 'bottom', 'left', or 'right'
   * @throws {Error} When the data-side attribute is not accessible
   */
  async getContentDataSide(): Promise<string> {
    await this.page.locator(this.selector_popoverContent).isVisible();
    const value = await this.page
      .locator(this.selector_popoverContent)
      .getAttribute('data-side');

    if (value === null) {
      throw new Error(
        `PopoverPOM: data-side attribute is null on content panel. Selector: ${this.selector_popoverContent}`
      );
    }

    return value;
  }

  /**
   * @desc Get the data-slot identity marker value from the content element; always 'popover-content'
   * @returns {Promise<string>} The data-slot value
   * @throws {Error} When the data-slot attribute is not accessible
   */
  async getContentDataSlot(): Promise<string> {
    await this.page.locator(this.selector_popoverContent).isVisible();
    const value = await this.page
      .locator(this.selector_popoverContent)
      .getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `PopoverPOM: data-slot attribute is null on content panel. Selector: ${this.selector_popoverContent}`
      );
    }

    return value;
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — ANCHOR
  // ========================================================================

  /**
   * @desc Get the position and dimensions of the anchor element to verify the popover is positioned relative to it
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the anchor element
   * @throws {Error} When the bounding box cannot be retrieved (element not visible or not in DOM)
   */
  async getAnchorBoundingBox(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> {
    await this.page.locator(this.selector_popoverAnchor).isVisible();
    const box = await this.page
      .locator(this.selector_popoverAnchor)
      .boundingBox();

    if (box === null) {
      throw new Error(
        `PopoverPOM: Bounding box is null for anchor element — element may not be visible. Selector: ${this.selector_popoverAnchor}`
      );
    }

    return box;
  }

  /**
   * @desc Get the data-slot identity marker value from the anchor element; always 'popover-anchor'
   * @returns {Promise<string>} The data-slot value
   * @throws {Error} When the data-slot attribute is not accessible
   */
  async getAnchorDataSlot(): Promise<string> {
    await this.page.locator(this.selector_popoverAnchor).isVisible();
    const value = await this.page
      .locator(this.selector_popoverAnchor)
      .getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `PopoverPOM: data-slot attribute is null on anchor element. Selector: ${this.selector_popoverAnchor}`
      );
    }

    return value;
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — ROOT
  // ========================================================================

  /**
   * @desc Get the data-slot identity marker value from the popover root element; always 'popover'
   * @returns {Promise<string>} The data-slot value
   * @throws {Error} When the data-slot attribute is not accessible
   */
  async getRootDataSlot(): Promise<string> {
    await this.page.locator(this.rootSelector).isVisible();
    const value = await this.page
      .locator(this.rootSelector)
      .getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `PopoverPOM: data-slot attribute is null on popover root. Selector: ${this.rootSelector}`
      );
    }

    return value;
  }
}