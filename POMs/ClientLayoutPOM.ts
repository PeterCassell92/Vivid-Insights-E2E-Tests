/**
 * Page Object Model: ClientLayout
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ClientLayoutPOM_StandardSelector = '.min-h-screen.bg-gray-50';

export class ClientLayoutPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_rootContainer: string;
  private readonly selector_mainContent: string;
  private readonly selector_infoModalOverlay: string;
  private readonly selector_infoModal: string;
  private readonly selector_infoModalCloseButton: string;
  private readonly selector_infoModalTitle: string;
  private readonly selector_infoModalFeaturesHeading: string;
  private readonly selector_infoModalFeaturesList: string;
  private readonly selector_infoModalFeaturesListItems: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = ClientLayoutPOM_StandardSelector;

    // Root container
    this.selector_rootContainer = this.rootSelector;

    // Main content area
    this.selector_mainContent = `${this.rootSelector} main`;

    // Info modal overlay (full-screen backdrop)
    this.selector_infoModalOverlay = `[data-testid="info-modal-overlay"]`;

    // Info modal white card panel
    this.selector_infoModal = `[data-testid="info-modal"]`;

    // Info modal close button
    this.selector_infoModalCloseButton = `[data-testid="info-modal-close-button"]`;

    // Info modal title heading
    this.selector_infoModalTitle = `[data-testid="info-modal"] h2`;

    // Info modal features sub-heading
    this.selector_infoModalFeaturesHeading = `[data-testid="info-modal"] h3`;

    // Info modal features list (ul)
    this.selector_infoModalFeaturesList = `[data-testid="info-modal"] ul`;

    // Info modal features list items (li)
    this.selector_infoModalFeaturesListItems = `[data-testid="info-modal"] ul li`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the ClientLayout app shell is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the root container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(ClientLayoutPOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method to get a ClientLayoutPOM instance
   * Validates that the app shell is visible before returning instance
   * @param page - Playwright Page instance
   * @returns {Promise<ClientLayoutPOM>} ClientLayoutPOM instance
   * @throws {Error} When the root container is not visible
   */
  static async getPOM(page: Page): Promise<ClientLayoutPOM> {
    const isVisible = await ClientLayoutPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ClientLayoutPOM: Cannot instantiate - app shell is not visible. ' +
          `Expected element [${ClientLayoutPOM_StandardSelector}] to be visible.`
      );
    }

    return new ClientLayoutPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the top-level layout wrapper (app shell) is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the root container is visible
   */
  async isRootContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_rootContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the main content area is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the main content area is visible
   */
  async isMainContentVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_mainContent).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Info modal overlay is currently visible (i.e., isInfoModalOpen is true)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the info modal overlay is visible
   */
  async isInfoModalOverlayVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_infoModalOverlay).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Info modal white card panel is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the info modal panel is visible
   */
  async isInfoModalVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_infoModal).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Info modal close button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the close button is visible
   */
  async isInfoModalCloseButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_infoModalCloseButton).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Info modal close button is enabled and interactable
   * @returns {Promise<boolean>} True if the close button is enabled
   */
  async isInfoModalCloseButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_infoModalCloseButton).isEnabled();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Click the full-screen backdrop overlay to close the Info modal
   * Expected outcome is that the Info modal will be dismissed
   */
  async clickInfoModalOverlay(): Promise<void> {
    await this.page.locator(this.selector_infoModalOverlay).click();
  }

  /**
   * @desc Click the SVG ✕ icon button to close the Info modal
   * Expected outcome is that the Info modal will be dismissed
   */
  async clickInfoModalCloseButton(): Promise<void> {
    await this.page.locator(this.selector_infoModalCloseButton).click();
  }

  /**
   * @desc Scroll within the main content area to navigate routed page content
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollMainContent(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_mainContent).scroll({ deltaX, deltaY });
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the CSS class list of the root container to verify layout styling
   * @returns {Promise<string>} The class attribute value of the root container exactly as it appears
   * @throws {Error} When the root container class attribute is not accessible
   */
  async getRootContainerClassList(): Promise<string> {
    await this.page.locator(this.selector_rootContainer).isVisible();
    const classList = await this.page.locator(this.selector_rootContainer).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `ClientLayoutPOM: Root container class attribute is null. Selector: ${this.selector_rootContainer}`
      );
    }

    return classList;
  }

  /**
   * @desc Extract the visible heading text 'About Financial Projections' from the Info modal
   * @returns {Promise<string>} The info modal title text exactly as it appears in the UI
   * @throws {Error} When the info modal title content is not accessible or null
   */
  async getInfoModalTitleText(): Promise<string> {
    await this.page.locator(this.selector_infoModalTitle).isVisible();
    const text = await this.page.locator(this.selector_infoModalTitle).textContent();

    if (text === null) {
      throw new Error(
        `ClientLayoutPOM: Info modal title text content is null. Selector: ${this.selector_infoModalTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Extract the visible sub-heading text 'Features:' from the Info modal body
   * @returns {Promise<string>} The features heading text exactly as it appears in the UI
   * @throws {Error} When the features heading content is not accessible or null
   */
  async getInfoModalFeaturesHeadingText(): Promise<string> {
    await this.page.locator(this.selector_infoModalFeaturesHeading).isVisible();
    const text = await this.page.locator(this.selector_infoModalFeaturesHeading).textContent();

    if (text === null) {
      throw new Error(
        `ClientLayoutPOM: Info modal features heading text content is null. Selector: ${this.selector_infoModalFeaturesHeading}`
      );
    }

    return text;
  }

  /**
   * @desc Count the number of feature list items rendered inside the Info modal
   * @returns {Promise<number>} The count of feature list items
   */
  async getInfoModalFeaturesListItemCount(): Promise<number> {
    return await this.page.locator(this.selector_infoModalFeaturesListItems).count();
  }

  /**
   * @desc Extract the list of all application feature item texts from the bulleted list inside the Info modal
   * @returns {Promise<string[]>} Array of feature item text strings exactly as they appear in the UI
   * @throws {Error} When a feature list item text content is not accessible
   */
  async getInfoModalFeaturesListItems(): Promise<string[]> {
    await this.page.locator(this.selector_infoModalFeaturesList).isVisible();
    const items = this.page.locator(this.selector_infoModalFeaturesListItems);
    const count = await items.count();
    const results: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await items.nth(i).textContent();

      if (text === null) {
        throw new Error(
          `ClientLayoutPOM: Feature list item at index ${i} text content is null. Selector: ${this.selector_infoModalFeaturesListItems}`
        );
      }

      results.push(text);
    }

    return results;
  }

  /**
   * @desc Extract the full inner HTML content of the Info modal panel
   * @returns {Promise<string>} The inner HTML of the info modal exactly as rendered
   * @throws {Error} When the info modal inner HTML is not accessible
   */
  async getInfoModalInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_infoModal).isVisible();
    const html = await this.page.locator(this.selector_infoModal).innerHTML();

    if (html === null) {
      throw new Error(
        `ClientLayoutPOM: Info modal inner HTML is null. Selector: ${this.selector_infoModal}`
      );
    }

    return html;
  }

  /**
   * @desc Extract the inner HTML of the main content area to inspect the currently rendered routed page children
   * @returns {Promise<string>} The inner HTML of the main content area exactly as rendered
   * @throws {Error} When the main content inner HTML is not accessible
   */
  async getMainContentInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_mainContent).isVisible();
    const html = await this.page.locator(this.selector_mainContent).innerHTML();

    if (html === null) {
      throw new Error(
        `ClientLayoutPOM: Main content inner HTML is null. Selector: ${this.selector_mainContent}`
      );
    }

    return html;
  }

  /**
   * @desc Get the position and dimensions of the main content area to verify layout shifts when the sidebar is toggled
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the main content area
   * @throws {Error} When the main content bounding box is not accessible
   */
  async getMainContentBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    await this.page.locator(this.selector_mainContent).isVisible();
    const boundingBox = await this.page.locator(this.selector_mainContent).boundingBox();

    if (boundingBox === null) {
      throw new Error(
        `ClientLayoutPOM: Main content bounding box is null. Selector: ${this.selector_mainContent}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Get the CSS class list of the main content element to verify the current margin state (ml-16 vs ml-56) based on sidebar collapse state
   * @returns {Promise<string>} The class attribute value of the main content element exactly as it appears
   * @throws {Error} When the main content class attribute is not accessible
   */
  async getMainContentClassList(): Promise<string> {
    await this.page.locator(this.selector_mainContent).isVisible();
    const classList = await this.page.locator(this.selector_mainContent).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `ClientLayoutPOM: Main content class attribute is null. Selector: ${this.selector_mainContent}`
      );
    }

    return classList;
  }
}