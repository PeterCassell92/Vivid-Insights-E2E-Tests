/**
 * Page Object Model: Header
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class HeaderPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_appHeader;
    private readonly selector_headerInnerContainer;
    private readonly selector_activityLogButton;
    private readonly selector_burgerMenuButton;
    private readonly selector_headerLogo;
    private readonly selector_burgerMenuDropdown;
    private readonly selector_menuSettingsButton;
    private readonly selector_menuInfoButton;
    private readonly selector_activityLogUnreadBadge;
    constructor(page: Page);
    /**
     * @desc Checks if the Header is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the header is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a HeaderPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<HeaderPOM>} A HeaderPOM instance
     * @throws {Error} When the header is not visible on the page
     */
    static getPOM(page: Page): Promise<HeaderPOM>;
    /**
     * @desc Check whether the sticky header bar is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the header is visible
     */
    isAppHeaderVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the activity log bell button is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the activity log button is visible
     */
    isActivityLogButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the burger menu button is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the burger menu button is visible
     */
    isBurgerMenuButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the header logo is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the header logo is visible
     */
    isHeaderLogoVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the burger menu dropdown panel is currently rendered and visible
     * Only present when the burger menu is open
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the burger menu dropdown is visible
     */
    isBurgerMenuDropdownVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the activity log bell button is enabled (not disabled)
     * @returns {Promise<boolean>} True if the activity log button is enabled
     */
    isActivityLogButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the burger menu button is enabled (not disabled)
     * @returns {Promise<boolean>} True if the burger menu button is enabled
     */
    isBurgerMenuButtonEnabled(): Promise<boolean>;
    /**
     * @desc Clicks the bell icon button to toggle the Activity Log panel open or closed
     * Expected outcome is that the Activity Log panel will open or close
     */
    clickActivityLogButton(): Promise<void>;
    /**
     * @desc Clicks the hamburger icon button to toggle the burger menu dropdown open or closed
     * Expected outcome is that the burger menu dropdown will open or close
     */
    clickBurgerMenuButton(): Promise<void>;
    /**
     * @desc Clicks the logo to navigate to the home page (/)
     * Expected outcome is that the browser will navigate to the home route
     */
    clickHeaderLogo(): Promise<void>;
    /**
     * @desc Clicks the Settings button within the burger menu dropdown to trigger the Settings modal callback
     * Expected outcome is that the Settings modal will open
     * @throws {Error} When the burger menu dropdown is not visible
     */
    clickMenuSettingsButton(): Promise<void>;
    /**
     * @desc Clicks the Info button within the burger menu dropdown to trigger the Info modal callback
     * Expected outcome is that the Info modal will open
     * @throws {Error} When the burger menu dropdown is not visible
     */
    clickMenuInfoButton(): Promise<void>;
    /**
     * @desc Scrolls within the header container if content overflows (e.g., on small viewports)
     * Expected outcome is that the header content scrolls
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollAppHeader(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Gets the full inner HTML of the header to inspect all rendered child elements
     * @returns {Promise<string>} The inner HTML of the header inner container
     * @throws {Error} When the header inner container content is not accessible
     */
    getAppHeaderInnerHtml(): Promise<string>;
    /**
     * @desc Gets the position and dimensions of the header bar to verify it is pinned to the top
     * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>} Bounding box or null if not visible
     */
    getAppHeaderBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    } | null>;
    /**
     * @desc Gets the CSS class list of the header element to verify sticky/shadow/border styling
     * @returns {Promise<string>} The class attribute value of the header element
     * @throws {Error} When the class attribute is not accessible
     */
    getAppHeaderClassList(): Promise<string>;
    /**
     * @desc Reads the aria-expanded attribute of the activity log button to determine whether the Activity Log panel is open
     * @returns {Promise<string>} The aria-expanded attribute value ('true' or 'false')
     * @throws {Error} When the aria-expanded attribute is not accessible
     */
    getActivityLogButtonAriaExpanded(): Promise<string>;
    /**
     * @desc Reads the aria-label attribute of the activity log button to confirm the accessible label value is 'Activity Log'
     * @returns {Promise<string>} The aria-label attribute value
     * @throws {Error} When the aria-label attribute is not accessible
     */
    getActivityLogButtonAriaLabel(): Promise<string>;
    /**
     * @desc Reads the aria-expanded attribute of the burger menu button to determine whether the dropdown is open
     * @returns {Promise<string>} The aria-expanded attribute value ('true' or 'false')
     * @throws {Error} When the aria-expanded attribute is not accessible
     */
    getBurgerMenuButtonAriaExpanded(): Promise<string>;
    /**
     * @desc Reads the aria-label attribute of the burger menu button to confirm the accessible label value is 'Menu'
     * @returns {Promise<string>} The aria-label attribute value
     * @throws {Error} When the aria-label attribute is not accessible
     */
    getBurgerMenuButtonAriaLabel(): Promise<string>;
    /**
     * @desc Gets the href URL of the logo link to confirm it points to /
     * @returns {Promise<string>} The href attribute value of the logo link
     * @throws {Error} When the href attribute is not accessible
     */
    getHeaderLogoHref(): Promise<string>;
    /**
     * @desc Gets the position and dimensions of the burger menu dropdown panel to verify it is anchored correctly
     * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>} Bounding box or null if not visible
     * @throws {Error} When the burger menu dropdown is not visible
     */
    getBurgerMenuDropdownBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    } | null>;
    /**
     * @desc Gets the visible text content of the dropdown menu (e.g., 'Settings', 'Info')
     * @returns {Promise<string>} The text content of the burger menu dropdown
     * @throws {Error} When the dropdown is not visible or text content is null
     */
    getBurgerMenuDropdownText(): Promise<string>;
    /**
     * @desc Gets the inner HTML of the dropdown menu to inspect the rendered Settings and Info menu items
     * @returns {Promise<string>} The inner HTML of the burger menu dropdown
     * @throws {Error} When the dropdown is not visible or inner HTML is null
     */
    getBurgerMenuDropdownInnerHtml(): Promise<string>;
}
