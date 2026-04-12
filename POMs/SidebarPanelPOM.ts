/**
 * Page Object Model: SidebarPanel
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const SidebarPanelPOM_StandardSelector = '[data-testid="sidebar-panel"]';

export class SidebarPanelPOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===
  private readonly rootSelector: string;
  private readonly selector_sidebarPanelContainer: string;
  private readonly selector_toggleButton: string;
  private readonly selector_fullscreenToggleButton: string;
  private readonly selector_tabsRow: string;
  private readonly selector_activeViewContent: string;
  private readonly selector_tabButton: (viewId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = SidebarPanelPOM_StandardSelector;

    this.selector_sidebarPanelContainer = `[data-testid="sidebar-panel"]`;
    this.selector_toggleButton = `[data-testid="sidebar-panel-toggle"]`;
    this.selector_fullscreenToggleButton = `[data-testid="sidebar-fullscreen-toggle"]`;
    this.selector_tabsRow = `${this.rootSelector} .flex-1.flex`;
    this.selector_activeViewContent = `${this.rootSelector} .flex-1.overflow-hidden`;

    // Dynamic selectors
    this.selector_tabButton = (viewId: string) =>
      `[data-testid="sidebar-tab__${viewId}"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the SidebarPanel is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the sidebar panel container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const panel = page.locator(SidebarPanelPOM_StandardSelector);
      return await panel.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a SidebarPanelPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<SidebarPanelPOM>} SidebarPanelPOM instance
   * @throws {Error} When the sidebar panel is not visible
   */
  static async getPOM(page: Page): Promise<SidebarPanelPOM> {
    const isVisible = await SidebarPanelPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'SidebarPanelPOM: Cannot instantiate - sidebar panel is not visible. ' +
        `Expected element [${SidebarPanelPOM_StandardSelector}] to be visible.`
      );
    }

    return new SidebarPanelPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the root sidebar panel container is visible on screen
   * @returns {Promise<boolean>} True if the sidebar panel container is visible
   */
  async isSidebarPanelContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_sidebarPanelContainer).isVisible();
  }

  /**
   * @desc Check whether the active view content container is visible (only rendered when panel is expanded)
   * @returns {Promise<boolean>} True if the active view content container is visible
   */
  async isActiveViewContentVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_activeViewContent).isVisible();
  }

  /**
   * @desc Check whether the collapse/expand toggle button is visible
   * @returns {Promise<boolean>} True if the toggle button is visible
   */
  async isToggleButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_toggleButton).isVisible();
  }

  /**
   * @desc Check whether the fullscreen toggle button is visible (only rendered when panel is expanded)
   * @returns {Promise<boolean>} True if the fullscreen toggle button is visible
   */
  async isFullscreenToggleButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_fullscreenToggleButton).isVisible();
  }

  /**
   * @desc Check whether the tab strip row is visible (only rendered when the panel is expanded)
   * @returns {Promise<boolean>} True if the tabs row is visible
   */
  async isTabsRowVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_tabsRow).isVisible();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the collapse/expand chevron button to toggle the sidebar panel open or closed
   * Expected outcome is that the sidebar panel will expand if collapsed, or collapse if expanded
   */
  async clickToggleButton(): Promise<void> {
    await this.page.locator(this.selector_toggleButton).click();
  }

  /**
   * @desc Clicks an individual tab button within the tab strip to switch the active view
   * Expected outcome is that the active view content will change to the selected tab's content
   * @param {string} viewId - The view identifier used in the tab's data-testid (e.g. 'recurring-events', 'steady-costs')
   */
  async clickTabButton(
    viewId: 'recurring-events' | 'steady-costs' | 'this-months-events' | string
  ): Promise<void> {
    await this.page.locator(this.selector_tabButton(viewId)).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the CSS class list of the root panel container to determine if it is expanded (w-96) or collapsed (w-12)
   * @returns {Promise<string>} The full class attribute string of the sidebar panel container
   * @throws {Error} When the class attribute is not accessible
   */
  async getSidebarPanelContainerClassList(): Promise<string> {
    const classAttr = await this.page
      .locator(this.selector_sidebarPanelContainer)
      .getAttribute('class');

    if (classAttr === null) {
      throw new Error(
        `SidebarPanelPOM: class attribute is null for sidebar panel container. Selector: ${this.selector_sidebarPanelContainer}`
      );
    }

    return classAttr;
  }

  /**
   * @desc Determines whether the sidebar panel is currently in expanded state by checking for the w-96 class
   * @returns {Promise<boolean>} True if the panel has the w-96 class (expanded), false if w-12 (collapsed)
   * @throws {Error} When the class attribute is not accessible
   */
  async isSidebarPanelExpanded(): Promise<boolean> {
    const classList = await this.getSidebarPanelContainerClassList();
    return classList.includes('w-96');
  }

  /**
   * @desc Get the inner HTML of the active view content container to verify which child BUENT content is currently rendered
   * @returns {Promise<string>} The inner HTML of the active view content container exactly as it appears
   * @throws {Error} When the active view content inner HTML is not accessible
   */
  async getActiveViewContentInnerHtml(): Promise<string> {
    const innerHTML = await this.page
      .locator(this.selector_activeViewContent)
      .innerHTML();

    if (innerHTML === null) {
      throw new Error(
        `SidebarPanelPOM: innerHTML is null for active view content container. Selector: ${this.selector_activeViewContent}`
      );
    }

    return innerHTML;
  }

  /**
   * @desc Get the aria-label attribute of the toggle button to determine current panel state
   * @returns {Promise<string>} The aria-label value — either 'Collapse sidebar panel' or 'Expand sidebar panel'
   * @throws {Error} When the aria-label attribute is not accessible
   */
  async getToggleButtonAriaLabel(): Promise<string> {
    const ariaLabel = await this.page
      .locator(this.selector_toggleButton)
      .getAttribute('aria-label');

    if (ariaLabel === null) {
      throw new Error(
        `SidebarPanelPOM: aria-label attribute is null for toggle button. Selector: ${this.selector_toggleButton}`
      );
    }

    return ariaLabel;
  }

  /**
   * @desc Get the aria-label attribute of the fullscreen toggle button to confirm its label
   * @returns {Promise<string>} The aria-label value — expected to be 'Toggle fullscreen (coming soon)'
   * @throws {Error} When the aria-label attribute is not accessible
   */
  async getFullscreenToggleButtonAriaLabel(): Promise<string> {
    const ariaLabel = await this.page
      .locator(this.selector_fullscreenToggleButton)
      .getAttribute('aria-label');

    if (ariaLabel === null) {
      throw new Error(
        `SidebarPanelPOM: aria-label attribute is null for fullscreen toggle button. Selector: ${this.selector_fullscreenToggleButton}`
      );
    }

    return ariaLabel;
  }

  /**
   * @desc Check whether the fullscreen toggle button is enabled. Expected to always be disabled (returns false)
   * @returns {Promise<boolean>} True if the fullscreen toggle button is enabled, false if disabled
   */
  async isFullscreenToggleButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_fullscreenToggleButton).isEnabled();
  }

  /**
   * @desc Count the number of tab buttons currently rendered in the tab strip
   * @returns {Promise<number>} The count of rendered tab buttons
   */
  async getTabButtonCount(): Promise<number> {
    return await this.page.locator('[data-testid^="sidebar-tab__"]').count();
  }

  /**
   * @desc Get the CSS class list of a specific tab button to determine if it is active or inactive
   * @param {string} viewId - The view identifier used in the tab's data-testid
   * @returns {Promise<string>} The full class attribute string of the tab button
   * @throws {Error} When the class attribute is not accessible for the given viewId
   */
  async getTabButtonClassList(viewId: string): Promise<string> {
    const classAttr = await this.page
      .locator(this.selector_tabButton(viewId))
      .getAttribute('class');

    if (classAttr === null) {
      throw new Error(
        `SidebarPanelPOM: class attribute is null for tab button with viewId "${viewId}". Selector: ${this.selector_tabButton(viewId)}`
      );
    }

    return classAttr;
  }

  /**
   * @desc Determines whether a specific tab button is currently active by checking for the active CSS classes
   * @param {string} viewId - The view identifier used in the tab's data-testid
   * @returns {Promise<boolean>} True if the tab is active (has border-blue-600 class), false if inactive
   * @throws {Error} When the class attribute is not accessible for the given viewId
   */
  async isTabButtonActive(viewId: string): Promise<boolean> {
    const classList = await this.getTabButtonClassList(viewId);
    return classList.includes('border-blue-600');
  }

  /**
   * @desc Get the visible label text of a specific tab button identified by viewId
   * @param {string} viewId - The view identifier used in the tab's data-testid
   * @returns {Promise<string>} The visible text content of the tab button exactly as it appears
   * @throws {Error} When the tab button text content is null or not accessible
   */
  async getTabButtonText(viewId: string): Promise<string> {
    const text = await this.page
      .locator(this.selector_tabButton(viewId))
      .textContent();

    if (text === null) {
      throw new Error(
        `SidebarPanelPOM: textContent is null for tab button with viewId "${viewId}". Selector: ${this.selector_tabButton(viewId)}`
      );
    }

    return text;
  }
}