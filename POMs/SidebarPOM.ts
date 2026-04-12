/**
 * Page Object Model: Sidebar
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const SidebarPOM_StandardSelector = '[data-testid=left-sidebar]';

export class SidebarPOM {
  private readonly page: Page;

  // ============================================================
  // Selector Properties
  // ============================================================

  protected readonly rootSelector: string;

  // leftSidebar — static selectors
  protected readonly selector_sidebarContainer: string;
  protected readonly selector_sidebarLogo: string;
  protected readonly selector_sidebarToggleButton: string;
  protected readonly selector_sidebarNavList: string;
  protected readonly selector_sidebarFooter: string;

  // leftSidebar — dynamic selectors
  protected readonly selector_sidebarNavItem: (navItemId: string) => string;

  // sidebarNavItem sub-element selectors (scoped to a nav item)
  protected readonly selector_navItemActiveIndicator: (navItemId: string) => string;
  protected readonly selector_navItemIcon: (navItemId: string) => string;
  protected readonly selector_navItemLabel: (navItemId: string) => string;

  // sidebarPanel — static selectors
  protected readonly selector_panelContainer: string;
  protected readonly selector_panelHeader: string;
  protected readonly selector_panelTitle: string;
  protected readonly selector_panelContent: string;
  protected readonly selector_panelCloseButton: string;
  protected readonly selector_panelCardList: string;

  // sidebarPanel — dynamic selectors
  protected readonly selector_sidebarPanelCard: (cardId: string) => string;

  // sidebarPanelCard sub-element selectors (scoped to a card)
  protected readonly selector_cardHeader: (cardId: string) => string;
  protected readonly selector_cardTitle: (cardId: string) => string;
  protected readonly selector_cardBody: (cardId: string) => string;
  protected readonly selector_cardExpandToggle: (cardId: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ============================================================
    // Selectors — Single source of truth
    // ============================================================

    this.rootSelector = SidebarPOM_StandardSelector;

    // leftSidebar — static
    this.selector_sidebarContainer = `${this.rootSelector}`;
    this.selector_sidebarLogo = `${this.rootSelector} [data-testid='sidebar-logo']`;
    this.selector_sidebarToggleButton = `${this.rootSelector} [data-testid='sidebar-toggle-btn']`;
    this.selector_sidebarNavList = `${this.rootSelector} [data-testid='sidebar-nav']`;
    this.selector_sidebarFooter = `${this.rootSelector} [data-testid='sidebar-footer']`;

    // leftSidebar — dynamic nav item
    this.selector_sidebarNavItem = (navItemId: string) =>
      `${this.rootSelector} [data-testid='sidebar-nav-item_${navItemId}']`;

    // sidebarNavItem sub-elements (scoped inside the specific nav item anchor)
    this.selector_navItemActiveIndicator = (navItemId: string) =>
      `${this.selector_sidebarNavItem(navItemId)} [data-testid='sidebar-nav-item-active-indicator']`;

    this.selector_navItemIcon = (navItemId: string) =>
      `${this.selector_sidebarNavItem(navItemId)} [data-testid='sidebar-nav-item-icon']`;

    this.selector_navItemLabel = (navItemId: string) =>
      `${this.selector_sidebarNavItem(navItemId)} [data-testid='sidebar-nav-item-label']`;

    // sidebarPanel — static
    this.selector_panelContainer = `[data-testid='sidebar-panel']`;
    this.selector_panelHeader = `[data-testid='sidebar-panel-header']`;
    this.selector_panelTitle = `[data-testid='sidebar-panel-title']`;
    this.selector_panelContent = `[data-testid='sidebar-panel-content']`;
    this.selector_panelCloseButton = `[data-testid='sidebar-panel-close-btn']`;
    this.selector_panelCardList = `[data-testid='sidebar-panel-card-list']`;

    // sidebarPanel — dynamic card
    this.selector_sidebarPanelCard = (cardId: string) =>
      `[data-testid='sidebar-panel-card_${cardId}']`;

    // sidebarPanelCard sub-elements (scoped inside the specific card)
    this.selector_cardHeader = (cardId: string) =>
      `${this.selector_sidebarPanelCard(cardId)} [data-testid='sidebar-panel-card-header']`;

    this.selector_cardTitle = (cardId: string) =>
      `${this.selector_sidebarPanelCard(cardId)} [data-testid='sidebar-panel-card-title']`;

    this.selector_cardBody = (cardId: string) =>
      `${this.selector_sidebarPanelCard(cardId)} [data-testid='sidebar-panel-card-body']`;

    this.selector_cardExpandToggle = (cardId: string) =>
      `${this.selector_sidebarPanelCard(cardId)} [data-testid='sidebar-panel-card-expand-toggle']`;
  }

  // ============================================================
  // Static Methods
  // ============================================================

  /**
   * @desc Checks if the Sidebar is currently visible on the page
   * @param {Page} page - Playwright Page instance
   * @returns {Promise<boolean>} True if the sidebar container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(SidebarPOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates sidebar visibility and returns a SidebarPOM instance
   * @param {Page} page - Playwright Page instance
   * @returns {Promise<SidebarPOM>} A SidebarPOM instance
   * @throws {Error} When the sidebar is not visible on the page
   */
  static async getPOM(page: Page): Promise<SidebarPOM> {
    const isVisible = await SidebarPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        `SidebarPOM: Cannot instantiate - sidebar is not visible. ` +
        `Expected element [${SidebarPOM_StandardSelector}] to be visible.`
      );
    }

    return new SidebarPOM(page);
  }

  // ============================================================
  // Visibility and State Methods
  // ============================================================

  /**
   * @desc Checks whether the sidebar container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the sidebar container is visible
   */
  async isSidebarVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_sidebarContainer).isVisible({ timeout });
  }

  /**
   * @desc Checks whether the sidebar is currently in a collapsed state
   * @returns {Promise<boolean>} True if the sidebar is collapsed
   * @throws {Error} When the data-collapsed attribute is not accessible
   */
  async isSidebarCollapsed(): Promise<boolean> {
    const value = await this.page
      .locator(this.selector_sidebarContainer)
      .getAttribute('data-collapsed');

    if (value === null) {
      throw new Error(
        `SidebarPOM: Cannot read data-collapsed attribute from sidebar container. ` +
        `Selector: ${this.selector_sidebarContainer}`
      );
    }

    return value === 'true';
  }

  /**
   * @desc Checks whether the sidebar toggle button is visible
   * @returns {Promise<boolean>} True if the toggle button is visible
   */
  async isSidebarToggleButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_sidebarToggleButton).isVisible();
  }

  /**
   * @desc Checks whether the sidebar navigation list is visible
   * @returns {Promise<boolean>} True if the nav list is visible
   */
  async isSidebarNavListVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_sidebarNavList).isVisible();
  }

  /**
   * @desc Checks whether the sidebar footer is visible
   * @returns {Promise<boolean>} True if the footer is visible
   */
  async isSidebarFooterVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_sidebarFooter).isVisible();
  }

  /**
   * @desc Checks whether a specific navigation item is visible
   * @param {string} navItemId - The identifier of the navigation item
   * @returns {Promise<boolean>} True if the nav item is visible
   */
  async isSidebarNavItemVisible(navItemId: string): Promise<boolean> {
    return await this.page.locator(this.selector_sidebarNavItem(navItemId)).isVisible();
  }

  /**
   * @desc Checks whether the sidebar panel container is currently visible
   * @returns {Promise<boolean>} True if the panel is visible
   */
  async isSidebarPanelVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_panelContainer).isVisible();
  }

  /**
   * @desc Checks whether the sidebar panel is currently in an open state via data-open attribute
   * @returns {Promise<boolean>} True if the panel is open
   * @throws {Error} When the data-open attribute is not accessible
   */
  async isSidebarPanelOpen(): Promise<boolean> {
    const value = await this.page
      .locator(this.selector_panelContainer)
      .getAttribute('data-open');

    if (value === null) {
      throw new Error(
        `SidebarPOM: Cannot read data-open attribute from sidebar panel. ` +
        `Selector: ${this.selector_panelContainer}`
      );
    }

    return value === 'true';
  }

  /**
   * @desc Checks whether a specific sidebar panel card is visible
   * @param {string} cardId - The identifier of the panel card
   * @returns {Promise<boolean>} True if the panel card is visible
   */
  async isSidebarPanelCardVisible(cardId: string): Promise<boolean> {
    return await this.page.locator(this.selector_sidebarPanelCard(cardId)).isVisible();
  }

  // ============================================================
  // Action Methods
  // ============================================================

  /**
   * @desc Clicks the sidebar toggle button to collapse or expand the sidebar
   * Expected outcome is that the sidebar collapsed state will change
   * @throws {Error} When the toggle button is not visible
   */
  async clickSidebarToggleButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_sidebarToggleButton).isVisible();

    if (!isVisible) {
      throw new Error(
        `SidebarPOM: Cannot click sidebar toggle button - element is not visible. ` +
        `Selector: ${this.selector_sidebarToggleButton}`
      );
    }

    await this.page.locator(this.selector_sidebarToggleButton).click();
  }

  /**
   * @desc Clicks a navigation item in the sidebar to navigate to the associated route
   * Expected outcome is that the application will navigate to the route associated with the nav item
   * @param {string} navItemId - The identifier of the navigation item to click
   * @throws {Error} When the navigation item is not visible
   */
  async clickSidebarNavItem(navItemId: string): Promise<void> {
    const selector = this.selector_sidebarNavItem(navItemId);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `SidebarPOM: Cannot click nav item "${navItemId}" - element is not visible. ` +
        `Selector: ${selector}`
      );
    }

    await this.page.locator(selector).click();
  }

  /**
   * @desc Clicks the panel close button to dismiss the sidebar panel
   * Expected outcome is that the sidebar panel will close
   * @throws {Error} When the panel close button is not visible
   */
  async clickPanelCloseButton(): Promise<void> {
    const isVisible = await this.page.locator(this.selector_panelCloseButton).isVisible();

    if (!isVisible) {
      throw new Error(
        `SidebarPOM: Cannot click panel close button - element is not visible. ` +
        `Selector: ${this.selector_panelCloseButton}`
      );
    }

    await this.page.locator(this.selector_panelCloseButton).click();
  }

  /**
   * @desc Clicks an individual sidebar panel card to interact with it
   * Expected outcome is that the panel card will respond to the click interaction
   * @param {string} cardId - The identifier of the panel card to click
   * @throws {Error} When the panel card is not visible
   */
  async clickSidebarPanelCard(cardId: string): Promise<void> {
    const selector = this.selector_sidebarPanelCard(cardId);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `SidebarPOM: Cannot click panel card "${cardId}" - element is not visible. ` +
        `Selector: ${selector}`
      );
    }

    await this.page.locator(selector).click();
  }

  /**
   * @desc Clicks the expand toggle on a specific sidebar panel card
   * Expected outcome is that the card will expand or collapse
   * @param {string} cardId - The identifier of the panel card
   * @throws {Error} When the card expand toggle is not visible
   */
  async clickCardExpandToggle(cardId: string): Promise<void> {
    const selector = this.selector_cardExpandToggle(cardId);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `SidebarPOM: Cannot click expand toggle for card "${cardId}" - element is not visible. ` +
        `Selector: ${selector}`
      );
    }

    await this.page.locator(selector).click();
  }

  // ============================================================
  // Data Retrieval Methods
  // ============================================================

  /**
   * @desc Gets the href URL associated with a navigation item anchor
   * @param {string} navItemId - The identifier of the navigation item
   * @returns {Promise<string>} The href URL exactly as it appears on the element
   * @throws {Error} When the href attribute is not accessible or null
   */
  async getNavItemHref(navItemId: string): Promise<string> {
    const selector = this.selector_sidebarNavItem(navItemId);
    await this.page.locator(selector).isVisible();

    const href = await this.page.locator(selector).getAttribute('href');

    if (href === null) {
      throw new Error(
        `SidebarPOM: href attribute is null for nav item "${navItemId}". ` +
        `Selector: ${selector}`
      );
    }

    return href;
  }

  /**
   * @desc Gets the active state of a nav item via the data-active attribute
   * @param {string} navItemId - The identifier of the navigation item
   * @returns {Promise<string>} The data-active attribute value exactly as it appears
   * @throws {Error} When the data-active attribute is not accessible or null
   */
  async getNavItemActiveState(navItemId: string): Promise<string> {
    const selector = this.selector_sidebarNavItem(navItemId);
    await this.page.locator(selector).isVisible();

    const value = await this.page.locator(selector).getAttribute('data-active');

    if (value === null) {
      throw new Error(
        `SidebarPOM: data-active attribute is null for nav item "${navItemId}". ` +
        `Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the route/identifier value of a nav item via the data-value attribute
   * @param {string} navItemId - The identifier of the navigation item
   * @returns {Promise<string>} The data-value attribute value exactly as it appears
   * @throws {Error} When the data-value attribute is not accessible or null
   */
  async getNavItemValue(navItemId: string): Promise<string> {
    const selector = this.selector_sidebarNavItem(navItemId);
    await this.page.locator(selector).isVisible();

    const value = await this.page.locator(selector).getAttribute('data-value');

    if (value === null) {
      throw new Error(
        `SidebarPOM: data-value attribute is null for nav item "${navItemId}". ` +
        `Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the visible text content of a specific navigation item label
   * @param {string} navItemId - The identifier of the navigation item
   * @returns {Promise<string>} The label text exactly as it appears in the UI
   * @throws {Error} When the nav item label text content is not accessible or null
   */
  async getNavItemLabelText(navItemId: string): Promise<string> {
    const selector = this.selector_navItemLabel(navItemId);
    await this.page.locator(selector).isVisible();

    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `SidebarPOM: Label text content is null for nav item "${navItemId}". ` +
        `Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the current panel type via the data-panel-type attribute on the panel container
   * @returns {Promise<string>} The data-panel-type attribute value exactly as it appears
   * @throws {Error} When the data-panel-type attribute is not accessible or null
   */
  async getPanelType(): Promise<string> {
    await this.page.locator(this.selector_panelContainer).isVisible();

    const value = await this.page
      .locator(this.selector_panelContainer)
      .getAttribute('data-panel-type');

    if (value === null) {
      throw new Error(
        `SidebarPOM: data-panel-type attribute is null on sidebar panel. ` +
        `Selector: ${this.selector_panelContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the title text displayed in the sidebar panel header
   * @returns {Promise<string>} The panel title text exactly as it appears in the UI
   * @throws {Error} When the panel title text content is not accessible or null
   */
  async getPanelTitleText(): Promise<string> {
    await this.page.locator(this.selector_panelTitle).isVisible();

    const text = await this.page.locator(this.selector_panelTitle).textContent();

    if (text === null) {
      throw new Error(
        `SidebarPOM: Panel title text content is null. ` +
        `Selector: ${this.selector_panelTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the status of a panel card via the data-status attribute
   * @param {string} cardId - The identifier of the panel card
   * @returns {Promise<string>} The data-status attribute value exactly as it appears (e.g. active, warning, error)
   * @throws {Error} When the data-status attribute is not accessible or null
   */
  async getPanelCardStatus(cardId: string): Promise<string> {
    const selector = this.selector_sidebarPanelCard(cardId);
    await this.page.locator(selector).isVisible();

    const value = await this.page.locator(selector).getAttribute('data-status');

    if (value === null) {
      throw new Error(
        `SidebarPOM: data-status attribute is null for panel card "${cardId}". ` +
        `Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the expanded/collapsed state of a panel card via the data-expanded attribute
   * @param {string} cardId - The identifier of the panel card
   * @returns {Promise<string>} The data-expanded attribute value exactly as it appears
   * @throws {Error} When the data-expanded attribute is not accessible or null
   */
  async getPanelCardExpandedState(cardId: string): Promise<string> {
    const selector = this.selector_sidebarPanelCard(cardId);
    await this.page.locator(selector).isVisible();

    const value = await this.page.locator(selector).getAttribute('data-expanded');

    if (value === null) {
      throw new Error(
        `SidebarPOM: data-expanded attribute is null for panel card "${cardId}". ` +
        `Selector: ${selector}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the title text of a specific sidebar panel card
   * @param {string} cardId - The identifier of the panel card
   * @returns {Promise<string>} The card title text exactly as it appears in the UI
   * @throws {Error} When the card title text content is not accessible or null
   */
  async getPanelCardTitleText(cardId: string): Promise<string> {
    const selector = this.selector_cardTitle(cardId);
    await this.page.locator(selector).isVisible();

    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `SidebarPOM: Card title text content is null for panel card "${cardId}". ` +
        `Selector: ${selector}`
      );
    }

    return text;
  }
}