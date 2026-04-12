/**
 * Page Object Model: LeftSidebar
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class LeftSidebarPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_sidebarContainer;
    private readonly selector_sidebarNav;
    private readonly selector_toggleLeftSidebar;
    private readonly selector_navItem;
    constructor(page: Page);
    /**
     * @desc Checks if the LeftSidebar is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the sidebar is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates sidebar visibility and returns a LeftSidebarPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<LeftSidebarPOM>} A LeftSidebarPOM instance
     * @throws {Error} When the left sidebar is not visible
     */
    static getPOM(page: Page): Promise<LeftSidebarPOM>;
    /**
     * @desc Whether or not the sidebar container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the sidebar container is visible
     */
    isSidebarContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the sidebar navigation container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the sidebar nav is visible
     */
    isSidebarNavVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the sidebar toggle button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the toggle button is visible
     */
    isToggleButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not a specific nav item is visible by its kebab-cased label
     * @param {string} navLabel - The kebab-cased label of the nav item (e.g. 'dashboard', 'bank-records')
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the nav item is visible
     */
    isNavItemVisible(navLabel: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks a specific navigation item by its kebab-cased label
     * Expected outcome is that the app navigates to the corresponding route
     * @param {string} navLabel - The kebab-cased label of the nav item (e.g. 'dashboard', 'projections', 'bank-records', 'accounts', 'analytics', 'trips', 'upload-csv', 'view-transactions')
     */
    clickNavItem(navLabel: 'dashboard' | 'projections' | 'bank-records' | 'accounts' | 'analytics' | 'trips' | 'upload-csv' | 'view-transactions'): Promise<void>;
    /**
     * @desc Clicks the collapse/expand toggle button to collapse or expand the left sidebar panel
     * Expected outcome is that the sidebar toggles between its collapsed (w-16) and expanded (w-56) states
     */
    clickToggleLeftSidebar(): Promise<void>;
    /**
     * @desc Scrolls within the sidebar navigation container when nav items overflow the visible area
     * @param {number} deltaY - The number of pixels to scroll vertically (positive scrolls down)
     */
    scrollSidebarNav(deltaY: number): Promise<void>;
    /**
     * @desc Counts the total number of top-level navigation items rendered in the sidebar
     * @returns {Promise<number>} The count of top-level nav items
     * @throws {Error} When the sidebar nav is not accessible
     */
    countNavItems(): Promise<number>;
    /**
     * @desc Gets the visible text label of a specific nav item by its kebab-cased label
     * @param {string} navLabel - The kebab-cased label of the nav item
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the nav item text content is not accessible or null
     */
    getNavItemText(navLabel: string): Promise<string>;
    /**
     * @desc Gets the position and dimensions of the sidebar panel to verify its collapsed (w-16) or expanded (w-56) width
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the sidebar container
     * @throws {Error} When the sidebar container bounding box is not accessible
     */
    getSidebarBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Gets the CSS class list of a specific nav item to determine if it is currently active
     * @param {string} navLabel - The kebab-cased label of the nav item
     * @returns {Promise<string>} The full class attribute string of the nav item
     * @throws {Error} When the nav item class attribute is not accessible or null
     */
    getNavItemClassList(navLabel: string): Promise<string>;
    /**
     * @desc Gets the CSS class list of the sidebar <aside> element to determine its current collapsed/expanded state
     * @returns {Promise<string>} The full class attribute string of the sidebar container
     * @throws {Error} When the sidebar container class attribute is not accessible or null
     */
    getSidebarContainerClassList(): Promise<string>;
    /**
     * @desc Gets the inner HTML of the <nav> element to inspect all rendered navigation items and their current state
     * @returns {Promise<string>} The inner HTML of the sidebar nav element
     * @throws {Error} When the sidebar nav inner HTML is not accessible or null
     */
    getSidebarNavInnerHtml(): Promise<string>;
    /**
     * @desc Gets the visible text content of the toggle button (shows 'Collapse' when expanded, empty when collapsed)
     * @returns {Promise<string>} The text content of the toggle button exactly as it appears
     * @throws {Error} When the toggle button text content is not accessible or null
     */
    getToggleButtonText(): Promise<string>;
    /**
     * @desc Reads the aria-label attribute on the toggle button to determine the current sidebar state
     * @returns {Promise<string>} The aria-label value: 'Expand sidebar' (collapsed) or 'Collapse sidebar' (expanded)
     * @throws {Error} When the toggle button aria-label attribute is not accessible or null
     */
    getToggleButtonAriaLabel(): Promise<string>;
    /**
     * @desc Checks whether the sidebar is currently in its collapsed state by inspecting the aria-label of the toggle button
     * @returns {Promise<boolean>} True if the sidebar is collapsed (aria-label is 'Expand sidebar')
     * @throws {Error} When the toggle button aria-label is not accessible
     */
    isSidebarCollapsed(): Promise<boolean>;
    /**
     * @desc Checks whether a specific nav item is currently active by inspecting its CSS class list
     * @param {string} navLabel - The kebab-cased label of the nav item
     * @returns {Promise<boolean>} True if the nav item has active styling (contains 'bg-blue-50' and 'text-blue-700')
     * @throws {Error} When the nav item class attribute is not accessible
     */
    isNavItemActive(navLabel: string): Promise<boolean>;
}
