/**
 * Page Object Model: Header
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const HeaderPOM_StandardSelector = '[data-testid="app-header"]';

export class HeaderPOM {
  private readonly page: Page;

  // === SELECTORS ===
  private readonly rootSelector: string;
  private readonly selector_appHeader: string;
  private readonly selector_headerInnerContainer: string;
  private readonly selector_activityLogButton: string;
  private readonly selector_burgerMenuButton: string;
  private readonly selector_headerLogo: string;
  private readonly selector_burgerMenuDropdown: string;
  private readonly selector_menuSettingsButton: string;
  private readonly selector_menuInfoButton: string;
  private readonly selector_activityLogUnreadBadge: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = HeaderPOM_StandardSelector;
    this.selector_appHeader = `${this.rootSelector}`;
    this.selector_headerInnerContainer = `${this.rootSelector} > div`;
    this.selector_activityLogButton = `${this.rootSelector} [data-testid="activity-log-button"]`;
    this.selector_burgerMenuButton = `${this.rootSelector} [data-testid="burger-menu-button"]`;
    this.selector_headerLogo = `${this.rootSelector} [data-testid="header-logo"]`;
    this.selector_burgerMenuDropdown = `${this.rootSelector} [data-testid="burger-menu-dropdown"]`;
    this.selector_menuSettingsButton = `${this.rootSelector} [data-testid="menu-settings-button"]`;
    this.selector_menuInfoButton = `${this.rootSelector} [data-testid="menu-info-button"]`;
    this.selector_activityLogUnreadBadge = `${this.rootSelector} [data-testid="activity-log-unread-badge"]`;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the Header is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the header is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const header = page.locator(HeaderPOM_StandardSelector);
      return await header.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a HeaderPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<HeaderPOM>} A HeaderPOM instance
   * @throws {Error} When the header is not visible on the page
   */
  static async getPOM(page: Page): Promise<HeaderPOM> {
    const isVisible = await HeaderPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'HeaderPOM: Cannot instantiate - header is not visible. ' +
          `Expected element [${HeaderPOM_StandardSelector}] to be visible.`
      );
    }

    return new HeaderPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Check whether the sticky header bar is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the header is visible
   */
  async isAppHeaderVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_appHeader).isVisible({ timeout });
  }

  /**
   * @desc Check whether the activity log bell button is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the activity log button is visible
   */
  async isActivityLogButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_activityLogButton).isVisible({ timeout });
  }

  /**
   * @desc Check whether the burger menu button is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the burger menu button is visible
   */
  async isBurgerMenuButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_burgerMenuButton).isVisible({ timeout });
  }

  /**
   * @desc Check whether the header logo is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the header logo is visible
   */
  async isHeaderLogoVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_headerLogo).isVisible({ timeout });
  }

  /**
   * @desc Check whether the burger menu dropdown panel is currently rendered and visible
   * Only present when the burger menu is open
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the burger menu dropdown is visible
   */
  async isBurgerMenuDropdownVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_burgerMenuDropdown).isVisible({ timeout });
  }

  /**
   * @desc Check whether the activity log bell button is enabled (not disabled)
   * @returns {Promise<boolean>} True if the activity log button is enabled
   */
  async isActivityLogButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_activityLogButton).isEnabled();
  }

  /**
   * @desc Check whether the burger menu button is enabled (not disabled)
   * @returns {Promise<boolean>} True if the burger menu button is enabled
   */
  async isBurgerMenuButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_burgerMenuButton).isEnabled();
  }

  // === ACTION METHODS ===

  /**
   * @desc Clicks the bell icon button to toggle the Activity Log panel open or closed
   * Expected outcome is that the Activity Log panel will open or close
   */
  async clickActivityLogButton(): Promise<void> {
    await this.page.locator(this.selector_activityLogButton).click();
  }

  /**
   * @desc Clicks the hamburger icon button to toggle the burger menu dropdown open or closed
   * Expected outcome is that the burger menu dropdown will open or close
   */
  async clickBurgerMenuButton(): Promise<void> {
    await this.page.locator(this.selector_burgerMenuButton).click();
  }

  /**
   * @desc Clicks the logo to navigate to the home page (/)
   * Expected outcome is that the browser will navigate to the home route
   */
  async clickHeaderLogo(): Promise<void> {
    await this.page.locator(this.selector_headerLogo).click();
  }

  /**
   * @desc Clicks the Settings button within the burger menu dropdown to trigger the Settings modal callback
   * Expected outcome is that the Settings modal will open
   * @throws {Error} When the burger menu dropdown is not visible
   */
  async clickMenuSettingsButton(): Promise<void> {
    const isDropdownVisible = await this.isBurgerMenuDropdownVisible(2000);
    if (!isDropdownVisible) {
      throw new Error(
        'HeaderPOM: Cannot click Settings button - burger menu dropdown is not visible. ' +
          `Selector: ${this.selector_burgerMenuDropdown}`
      );
    }
    await this.page.locator(this.selector_menuSettingsButton).click();
  }

  /**
   * @desc Clicks the Info button within the burger menu dropdown to trigger the Info modal callback
   * Expected outcome is that the Info modal will open
   * @throws {Error} When the burger menu dropdown is not visible
   */
  async clickMenuInfoButton(): Promise<void> {
    const isDropdownVisible = await this.isBurgerMenuDropdownVisible(2000);
    if (!isDropdownVisible) {
      throw new Error(
        'HeaderPOM: Cannot click Info button - burger menu dropdown is not visible. ' +
          `Selector: ${this.selector_burgerMenuDropdown}`
      );
    }
    await this.page.locator(this.selector_menuInfoButton).click();
  }

  /**
   * @desc Scrolls within the header container if content overflows (e.g., on small viewports)
   * Expected outcome is that the header content scrolls
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollAppHeader(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_appHeader).hover();
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Gets the full inner HTML of the header to inspect all rendered child elements
   * @returns {Promise<string>} The inner HTML of the header inner container
   * @throws {Error} When the header inner container content is not accessible
   */
  async getAppHeaderInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_headerInnerContainer).isVisible();
    const html = await this.page.locator(this.selector_headerInnerContainer).innerHTML();

    if (html === null) {
      throw new Error(
        `HeaderPOM: Inner HTML of header container is null. Selector: ${this.selector_headerInnerContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Gets the position and dimensions of the header bar to verify it is pinned to the top
   * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>} Bounding box or null if not visible
   */
  async getAppHeaderBoundingBox(): Promise<{ x: number; y: number; width: number; height: number } | null> {
    return await this.page.locator(this.selector_appHeader).boundingBox();
  }

  /**
   * @desc Gets the CSS class list of the header element to verify sticky/shadow/border styling
   * @returns {Promise<string>} The class attribute value of the header element
   * @throws {Error} When the class attribute is not accessible
   */
  async getAppHeaderClassList(): Promise<string> {
    await this.page.locator(this.selector_appHeader).isVisible();
    const classList = await this.page.locator(this.selector_appHeader).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `HeaderPOM: Class attribute of header element is null. Selector: ${this.selector_appHeader}`
      );
    }

    return classList;
  }

  /**
   * @desc Reads the aria-expanded attribute of the activity log button to determine whether the Activity Log panel is open
   * @returns {Promise<string>} The aria-expanded attribute value ('true' or 'false')
   * @throws {Error} When the aria-expanded attribute is not accessible
   */
  async getActivityLogButtonAriaExpanded(): Promise<string> {
    await this.page.locator(this.selector_activityLogButton).isVisible();
    const value = await this.page.locator(this.selector_activityLogButton).getAttribute('aria-expanded');

    if (value === null) {
      throw new Error(
        `HeaderPOM: aria-expanded attribute of activity log button is null. Selector: ${this.selector_activityLogButton}`
      );
    }

    return value;
  }

  /**
   * @desc Reads the aria-label attribute of the activity log button to confirm the accessible label value is 'Activity Log'
   * @returns {Promise<string>} The aria-label attribute value
   * @throws {Error} When the aria-label attribute is not accessible
   */
  async getActivityLogButtonAriaLabel(): Promise<string> {
    await this.page.locator(this.selector_activityLogButton).isVisible();
    const value = await this.page.locator(this.selector_activityLogButton).getAttribute('aria-label');

    if (value === null) {
      throw new Error(
        `HeaderPOM: aria-label attribute of activity log button is null. Selector: ${this.selector_activityLogButton}`
      );
    }

    return value;
  }

  /**
   * @desc Reads the aria-expanded attribute of the burger menu button to determine whether the dropdown is open
   * @returns {Promise<string>} The aria-expanded attribute value ('true' or 'false')
   * @throws {Error} When the aria-expanded attribute is not accessible
   */
  async getBurgerMenuButtonAriaExpanded(): Promise<string> {
    await this.page.locator(this.selector_burgerMenuButton).isVisible();
    const value = await this.page.locator(this.selector_burgerMenuButton).getAttribute('aria-expanded');

    if (value === null) {
      throw new Error(
        `HeaderPOM: aria-expanded attribute of burger menu button is null. Selector: ${this.selector_burgerMenuButton}`
      );
    }

    return value;
  }

  /**
   * @desc Reads the aria-label attribute of the burger menu button to confirm the accessible label value is 'Menu'
   * @returns {Promise<string>} The aria-label attribute value
   * @throws {Error} When the aria-label attribute is not accessible
   */
  async getBurgerMenuButtonAriaLabel(): Promise<string> {
    await this.page.locator(this.selector_burgerMenuButton).isVisible();
    const value = await this.page.locator(this.selector_burgerMenuButton).getAttribute('aria-label');

    if (value === null) {
      throw new Error(
        `HeaderPOM: aria-label attribute of burger menu button is null. Selector: ${this.selector_burgerMenuButton}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the href URL of the logo link to confirm it points to /
   * @returns {Promise<string>} The href attribute value of the logo link
   * @throws {Error} When the href attribute is not accessible
   */
  async getHeaderLogoHref(): Promise<string> {
    await this.page.locator(this.selector_headerLogo).isVisible();
    const href = await this.page.locator(this.selector_headerLogo).getAttribute('href');

    if (href === null) {
      throw new Error(
        `HeaderPOM: href attribute of header logo is null. Selector: ${this.selector_headerLogo}`
      );
    }

    return href;
  }

  /**
   * @desc Gets the position and dimensions of the burger menu dropdown panel to verify it is anchored correctly
   * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>} Bounding box or null if not visible
   * @throws {Error} When the burger menu dropdown is not visible
   */
  async getBurgerMenuDropdownBoundingBox(): Promise<{ x: number; y: number; width: number; height: number } | null> {
    const isVisible = await this.isBurgerMenuDropdownVisible(2000);
    if (!isVisible) {
      throw new Error(
        'HeaderPOM: Cannot get bounding box - burger menu dropdown is not visible. ' +
          `Selector: ${this.selector_burgerMenuDropdown}`
      );
    }
    return await this.page.locator(this.selector_burgerMenuDropdown).boundingBox();
  }

  /**
   * @desc Gets the visible text content of the dropdown menu (e.g., 'Settings', 'Info')
   * @returns {Promise<string>} The text content of the burger menu dropdown
   * @throws {Error} When the dropdown is not visible or text content is null
   */
  async getBurgerMenuDropdownText(): Promise<string> {
    const isVisible = await this.isBurgerMenuDropdownVisible(2000);
    if (!isVisible) {
      throw new Error(
        'HeaderPOM: Cannot get text - burger menu dropdown is not visible. ' +
          `Selector: ${this.selector_burgerMenuDropdown}`
      );
    }

    const text = await this.page.locator(this.selector_burgerMenuDropdown).textContent();

    if (text === null) {
      throw new Error(
        `HeaderPOM: Text content of burger menu dropdown is null. Selector: ${this.selector_burgerMenuDropdown}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the inner HTML of the dropdown menu to inspect the rendered Settings and Info menu items
   * @returns {Promise<string>} The inner HTML of the burger menu dropdown
   * @throws {Error} When the dropdown is not visible or inner HTML is null
   */
  async getBurgerMenuDropdownInnerHtml(): Promise<string> {
    const isVisible = await this.isBurgerMenuDropdownVisible(2000);
    if (!isVisible) {
      throw new Error(
        'HeaderPOM: Cannot get inner HTML - burger menu dropdown is not visible. ' +
          `Selector: ${this.selector_burgerMenuDropdown}`
      );
    }

    const html = await this.page.locator(this.selector_burgerMenuDropdown).innerHTML();

    if (html === null) {
      throw new Error(
        `HeaderPOM: Inner HTML of burger menu dropdown is null. Selector: ${this.selector_burgerMenuDropdown}`
      );
    }

    return html;
  }
}