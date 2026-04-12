/**
 * Page Object Model: BaseModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const BaseModalPOM_StandardSelector = (testId: string) => `[data-testid="${testId}"]`;

export class BaseModalPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_overlayContainer: string;
  private readonly selector_panelContainer: string;
  private readonly selector_title: string;
  private readonly selector_closeButton: string;
  private readonly selector_scrollableContent: string;

  constructor(page: Page, testId: string = 'modal') {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = BaseModalPOM_StandardSelector(testId);
    this.selector_overlayContainer = `[data-testid="${testId}-overlay"]`;
    this.selector_panelContainer = `[data-testid="${testId}"]`;
    this.selector_title = `[data-testid="${testId}-title"]`;
    this.selector_closeButton = `[data-testid="${testId}-close"]`;
    this.selector_scrollableContent = `[data-testid="${testId}"] .overflow-y-auto`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if a BaseModal with the given testId is currently visible
   * @param {Page} page - Playwright Page instance
   * @param {string} [testId='modal'] - The testId used to identify the modal overlay
   * @returns {Promise<boolean>} True if the modal overlay is visible
   */
  static async isVisible(page: Page, testId: string = 'modal'): Promise<boolean> {
    try {
      const overlaySelector = `[data-testid="${testId}-overlay"]`;
      return await page.locator(overlaySelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a BaseModalPOM instance
   * @param {Page} page - Playwright Page instance
   * @param {string} [testId='modal'] - The testId used to identify the modal overlay
   * @returns {Promise<BaseModalPOM>} A BaseModalPOM instance
   * @throws {Error} When the modal overlay is not visible
   */
  static async getPOM(page: Page, testId: string = 'modal'): Promise<BaseModalPOM> {
    const isVisible = await BaseModalPOM.isVisible(page, testId);

    if (!isVisible) {
      throw new Error(
        `BaseModalPOM: Cannot instantiate - modal overlay is not visible. ` +
        `Expected element [data-testid="${testId}-overlay"] to be visible.`
      );
    }

    return new BaseModalPOM(page, testId);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the modal overlay is currently visible/rendered (only present when isOpen === true)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the overlay is visible
   */
  async isOverlayVisible(timeout: number = 1500): Promise<boolean> {
    try {
      return await this.page.locator(this.selector_overlayContainer).isVisible({ timeout });
    } catch {
      return false;
    }
  }

  /**
   * @desc Check whether the modal panel/card is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal panel is visible
   */
  async isPanelVisible(timeout: number = 1500): Promise<boolean> {
    try {
      return await this.page.locator(this.selector_panelContainer).isVisible({ timeout });
    } catch {
      return false;
    }
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Click the overlay backdrop to trigger close behaviour
   * Expected outcome is that onClose is called when closeOnOverlayClick is true
   */
  async clickOverlay(): Promise<void> {
    await this.page.locator(this.selector_overlayContainer).click();
  }

  /**
   * @desc Dismiss the modal by clicking the close (X) button in the header, triggering onClose
   * Expected outcome is that the modal is closed
   * @throws {Error} When the close button is not visible
   */
  async clickCloseButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_closeButton).isVisible();
    if (!isVisible) {
      throw new Error(
        `BaseModalPOM: Cannot click close button - element is not visible. ` +
        `Selector: ${this.selector_closeButton}`
      );
    }
    await this.page.locator(this.selector_closeButton).click();
  }

  /**
   * @desc Scroll within the modal panel's inner scrollable content area (overflow-y-auto, max-h-[90vh])
   * Expected outcome is that the content area scrolls to the specified position
   * @param {number} deltaY - The number of pixels to scroll vertically (positive = down, negative = up)
   * @throws {Error} When the scrollable content area is not visible
   */
  async scrollModalContent(deltaY: number): Promise<void> {
    const isVisible = await this.page.locator(this.selector_scrollableContent).isVisible();
    if (!isVisible) {
      throw new Error(
        `BaseModalPOM: Cannot scroll modal content - scrollable area is not visible. ` +
        `Selector: ${this.selector_scrollableContent}`
      );
    }
    await this.page.locator(this.selector_scrollableContent).evaluate(
      (el, delta) => { el.scrollTop += delta; },
      deltaY
    );
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Get the CSS class list of the overlay to determine whether a dimmed (bg-black/6) or transparent (bg-transparent) backdrop is applied
   * @returns {Promise<string>} The full class attribute string of the overlay element
   * @throws {Error} When the overlay element is not accessible or class attribute is null
   */
  async getOverlayClassList(): Promise<string> {
    await this.page.locator(this.selector_overlayContainer).isVisible();
    const classList = await this.page.locator(this.selector_overlayContainer).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `BaseModalPOM: Overlay class list is null - element may not exist. ` +
        `Selector: ${this.selector_overlayContainer}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the full inner HTML of the modal panel to inspect composed header, title, close button, and children content
   * @returns {Promise<string>} The inner HTML of the modal panel
   * @throws {Error} When the modal panel is not accessible or innerHTML is null
   */
  async getPanelInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_panelContainer).isVisible();
    const innerHTML = await this.page.locator(this.selector_panelContainer).innerHTML();

    if (innerHTML === null) {
      throw new Error(
        `BaseModalPOM: Modal panel innerHTML is null - element may not exist. ` +
        `Selector: ${this.selector_panelContainer}`
      );
    }

    return innerHTML;
  }

  /**
   * @desc Get the position and dimensions of the modal panel to verify sizing, centering, and layout constraints
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the modal panel
   * @throws {Error} When the modal panel is not visible or bounding box cannot be retrieved
   */
  async getPanelBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const isVisible = await this.page.locator(this.selector_panelContainer).isVisible();
    if (!isVisible) {
      throw new Error(
        `BaseModalPOM: Cannot get bounding box - modal panel is not visible. ` +
        `Selector: ${this.selector_panelContainer}`
      );
    }

    const boundingBox = await this.page.locator(this.selector_panelContainer).boundingBox();

    if (!boundingBox) {
      throw new Error(
        `BaseModalPOM: Bounding box is null - modal panel may not be rendered. ` +
        `Selector: ${this.selector_panelContainer}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Extract all visible text content within the modal panel, including the title, header, and any composed children content
   * @returns {Promise<string>} All text content within the modal panel exactly as it appears
   * @throws {Error} When the modal panel text content is not accessible or null
   */
  async getPanelText(): Promise<string> {
    await this.page.locator(this.selector_panelContainer).isVisible();
    const text = await this.page.locator(this.selector_panelContainer).textContent();

    if (text === null) {
      throw new Error(
        `BaseModalPOM: Modal panel text content is null - element may not exist. ` +
        `Selector: ${this.selector_panelContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Get the CSS class list of the modal panel to determine its current size (max-w-* class) or fullscreen state
   * @returns {Promise<string>} The full class attribute string of the modal panel element
   * @throws {Error} When the modal panel element is not accessible or class attribute is null
   */
  async getPanelClassList(): Promise<string> {
    await this.page.locator(this.selector_panelContainer).isVisible();
    const classList = await this.page.locator(this.selector_panelContainer).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `BaseModalPOM: Modal panel class list is null - element may not exist. ` +
        `Selector: ${this.selector_panelContainer}`
      );
    }

    return classList;
  }
}