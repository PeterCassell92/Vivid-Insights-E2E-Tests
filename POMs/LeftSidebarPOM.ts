/**
 * Page Object Model: LeftSidebar
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const LeftSidebarPOM_StandardSelector = '[data-testid="left-sidebar"]';

export class LeftSidebarPOM {
  private readonly page: Page;

  // === SELECTORS ===
  private readonly rootSelector: string;
  private readonly selector_sidebarContainer: string;
  private readonly selector_sidebarNav: string;
  private readonly selector_toggleLeftSidebar: string;
  private readonly selector_navItem: (navLabel: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = LeftSidebarPOM_StandardSelector;

    this.selector_sidebarContainer = `${this.rootSelector}`;
    this.selector_sidebarNav = `${this.rootSelector} nav`;
    this.selector_toggleLeftSidebar = `${this.rootSelector} [data-testid="toggle-left-sidebar"]`;

    // Dynamic selector for nav items by kebab-cased label
    this.selector_navItem = (navLabel: string) =>
      `${this.rootSelector} [data-testid="nav-${navLabel}"]`;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the LeftSidebar is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the sidebar is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const sidebar = page.locator(LeftSidebarPOM_StandardSelector);
      return await sidebar.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates sidebar visibility and returns a LeftSidebarPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<LeftSidebarPOM>} A LeftSidebarPOM instance
   * @throws {Error} When the left sidebar is not visible
   */
  static async getPOM(page: Page): Promise<LeftSidebarPOM> {
    const isVisible = await LeftSidebarPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'LeftSidebarPOM: Cannot instantiate - left sidebar is not visible. ' +
          `Expected element [${LeftSidebarPOM_StandardSelector}] to be visible.`
      );
    }

    return new LeftSidebarPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Whether or not the sidebar container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the sidebar container is visible
   */
  async isSidebarContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_sidebarContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the sidebar navigation container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the sidebar nav is visible
   */
  async isSidebarNavVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_sidebarNav).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the sidebar toggle button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the toggle button is visible
   */
  async isToggleButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_toggleLeftSidebar).isVisible({ timeout });
  }

  /**
   * @desc Whether or not a specific nav item is visible by its kebab-cased label
   * @param {string} navLabel - The kebab-cased label of the nav item (e.g. 'dashboard', 'bank-records')
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the nav item is visible
   */
  async isNavItemVisible(navLabel: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_navItem(navLabel)).isVisible({ timeout });
  }

  // === ACTION METHODS ===

  /**
   * @desc Clicks a specific navigation item by its kebab-cased label
   * Expected outcome is that the app navigates to the corresponding route
   * @param {string} navLabel - The kebab-cased label of the nav item (e.g. 'dashboard', 'projections', 'bank-records', 'accounts', 'analytics', 'trips', 'upload-csv', 'view-transactions')
   */
  async clickNavItem(
    navLabel:
      | 'dashboard'
      | 'projections'
      | 'bank-records'
      | 'accounts'
      | 'analytics'
      | 'trips'
      | 'upload-csv'
      | 'view-transactions'
  ): Promise<void> {
    await this.page.locator(this.selector_navItem(navLabel)).click();
  }

  /**
   * @desc Clicks the collapse/expand toggle button to collapse or expand the left sidebar panel
   * Expected outcome is that the sidebar toggles between its collapsed (w-16) and expanded (w-56) states
   */
  async clickToggleLeftSidebar(): Promise<void> {
    await this.page.locator(this.selector_toggleLeftSidebar).click();
  }

  /**
   * @desc Scrolls within the sidebar navigation container when nav items overflow the visible area
   * @param {number} deltaY - The number of pixels to scroll vertically (positive scrolls down)
   */
  async scrollSidebarNav(deltaY: number): Promise<void> {
    await this.page.locator(this.selector_sidebarNav).hover();
    await this.page.mouse.wheel(0, deltaY);
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Counts the total number of top-level navigation items rendered in the sidebar
   * @returns {Promise<number>} The count of top-level nav items
   * @throws {Error} When the sidebar nav is not accessible
   */
  async countNavItems(): Promise<number> {
    await this.page.locator(this.selector_sidebarNav).isVisible();
    return await this.page.locator(this.selector_sidebarNav).locator('> *').count();
  }

  /**
   * @desc Gets the visible text label of a specific nav item by its kebab-cased label
   * @param {string} navLabel - The kebab-cased label of the nav item
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the nav item text content is not accessible or null
   */
  async getNavItemText(navLabel: string): Promise<string> {
    await this.page.locator(this.selector_navItem(navLabel)).isVisible();
    const text = await this.page.locator(this.selector_navItem(navLabel)).textContent();

    if (text === null) {
      throw new Error(
        `LeftSidebarPOM: Nav item text content is null for label "${navLabel}". ` +
          `Selector: ${this.selector_navItem(navLabel)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the position and dimensions of the sidebar panel to verify its collapsed (w-16) or expanded (w-56) width
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the sidebar container
   * @throws {Error} When the sidebar container bounding box is not accessible
   */
  async getSidebarBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    await this.page.locator(this.selector_sidebarContainer).isVisible();
    const boundingBox = await this.page.locator(this.selector_sidebarContainer).boundingBox();

    if (!boundingBox) {
      throw new Error(
        `LeftSidebarPOM: Sidebar container bounding box is not accessible. ` +
          `Selector: ${this.selector_sidebarContainer}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Gets the CSS class list of a specific nav item to determine if it is currently active
   * @param {string} navLabel - The kebab-cased label of the nav item
   * @returns {Promise<string>} The full class attribute string of the nav item
   * @throws {Error} When the nav item class attribute is not accessible or null
   */
  async getNavItemClassList(navLabel: string): Promise<string> {
    await this.page.locator(this.selector_navItem(navLabel)).isVisible();
    const classList = await this.page
      .locator(this.selector_navItem(navLabel))
      .getAttribute('class');

    if (classList === null) {
      throw new Error(
        `LeftSidebarPOM: Nav item class attribute is null for label "${navLabel}". ` +
          `Selector: ${this.selector_navItem(navLabel)}`
      );
    }

    return classList;
  }

  /**
   * @desc Gets the CSS class list of the sidebar <aside> element to determine its current collapsed/expanded state
   * @returns {Promise<string>} The full class attribute string of the sidebar container
   * @throws {Error} When the sidebar container class attribute is not accessible or null
   */
  async getSidebarContainerClassList(): Promise<string> {
    await this.page.locator(this.selector_sidebarContainer).isVisible();
    const classList = await this.page
      .locator(this.selector_sidebarContainer)
      .getAttribute('class');

    if (classList === null) {
      throw new Error(
        `LeftSidebarPOM: Sidebar container class attribute is null. ` +
          `Selector: ${this.selector_sidebarContainer}`
      );
    }

    return classList;
  }

  /**
   * @desc Gets the inner HTML of the <nav> element to inspect all rendered navigation items and their current state
   * @returns {Promise<string>} The inner HTML of the sidebar nav element
   * @throws {Error} When the sidebar nav inner HTML is not accessible or null
   */
  async getSidebarNavInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_sidebarNav).isVisible();
    const innerHTML = await this.page.locator(this.selector_sidebarNav).innerHTML();

    if (innerHTML === null) {
      throw new Error(
        `LeftSidebarPOM: Sidebar nav inner HTML is not accessible. ` +
          `Selector: ${this.selector_sidebarNav}`
      );
    }

    return innerHTML;
  }

  /**
   * @desc Gets the visible text content of the toggle button (shows 'Collapse' when expanded, empty when collapsed)
   * @returns {Promise<string>} The text content of the toggle button exactly as it appears
   * @throws {Error} When the toggle button text content is not accessible or null
   */
  async getToggleButtonText(): Promise<string> {
    await this.page.locator(this.selector_toggleLeftSidebar).isVisible();
    const text = await this.page.locator(this.selector_toggleLeftSidebar).textContent();

    if (text === null) {
      throw new Error(
        `LeftSidebarPOM: Toggle button text content is null. ` +
          `Selector: ${this.selector_toggleLeftSidebar}`
      );
    }

    return text;
  }

  /**
   * @desc Reads the aria-label attribute on the toggle button to determine the current sidebar state
   * @returns {Promise<string>} The aria-label value: 'Expand sidebar' (collapsed) or 'Collapse sidebar' (expanded)
   * @throws {Error} When the toggle button aria-label attribute is not accessible or null
   */
  async getToggleButtonAriaLabel(): Promise<string> {
    await this.page.locator(this.selector_toggleLeftSidebar).isVisible();
    const ariaLabel = await this.page
      .locator(this.selector_toggleLeftSidebar)
      .getAttribute('aria-label');

    if (ariaLabel === null) {
      throw new Error(
        `LeftSidebarPOM: Toggle button aria-label attribute is null. ` +
          `Selector: ${this.selector_toggleLeftSidebar}`
      );
    }

    return ariaLabel;
  }

  // === COMPOSITE METHODS ===

  /**
   * @desc Checks whether the sidebar is currently in its collapsed state by inspecting the aria-label of the toggle button
   * @returns {Promise<boolean>} True if the sidebar is collapsed (aria-label is 'Expand sidebar')
   * @throws {Error} When the toggle button aria-label is not accessible
   */
  async isSidebarCollapsed(): Promise<boolean> {
    const ariaLabel = await this.getToggleButtonAriaLabel();
    return ariaLabel === 'Expand sidebar';
  }

  /**
   * @desc Checks whether a specific nav item is currently active by inspecting its CSS class list
   * @param {string} navLabel - The kebab-cased label of the nav item
   * @returns {Promise<boolean>} True if the nav item has active styling (contains 'bg-blue-50' and 'text-blue-700')
   * @throws {Error} When the nav item class attribute is not accessible
   */
  async isNavItemActive(navLabel: string): Promise<boolean> {
    const classList = await this.getNavItemClassList(navLabel);
    return classList.includes('bg-blue-50') && classList.includes('text-blue-700');
  }
}