/**
 * Page Object Model: SidebarPanel
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class SidebarPanelPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_sidebarPanelContainer;
    private readonly selector_toggleButton;
    private readonly selector_fullscreenToggleButton;
    private readonly selector_tabsRow;
    private readonly selector_activeViewContent;
    private readonly selector_tabButton;
    constructor(page: Page);
    /**
     * @desc Checks if the SidebarPanel is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the sidebar panel container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a SidebarPanelPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<SidebarPanelPOM>} SidebarPanelPOM instance
     * @throws {Error} When the sidebar panel is not visible
     */
    static getPOM(page: Page): Promise<SidebarPanelPOM>;
    /**
     * @desc Check whether the root sidebar panel container is visible on screen
     * @returns {Promise<boolean>} True if the sidebar panel container is visible
     */
    isSidebarPanelContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the active view content container is visible (only rendered when panel is expanded)
     * @returns {Promise<boolean>} True if the active view content container is visible
     */
    isActiveViewContentVisible(): Promise<boolean>;
    /**
     * @desc Check whether the collapse/expand toggle button is visible
     * @returns {Promise<boolean>} True if the toggle button is visible
     */
    isToggleButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the fullscreen toggle button is visible (only rendered when panel is expanded)
     * @returns {Promise<boolean>} True if the fullscreen toggle button is visible
     */
    isFullscreenToggleButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the tab strip row is visible (only rendered when the panel is expanded)
     * @returns {Promise<boolean>} True if the tabs row is visible
     */
    isTabsRowVisible(): Promise<boolean>;
    /**
     * @desc Clicks the collapse/expand chevron button to toggle the sidebar panel open or closed
     * Expected outcome is that the sidebar panel will expand if collapsed, or collapse if expanded
     */
    clickToggleButton(): Promise<void>;
    /**
     * @desc Clicks an individual tab button within the tab strip to switch the active view
     * Expected outcome is that the active view content will change to the selected tab's content
     * @param {string} viewId - The view identifier used in the tab's data-testid (e.g. 'recurring-events', 'steady-costs')
     */
    clickTabButton(viewId: 'recurring-events' | 'steady-costs' | 'this-months-events' | string): Promise<void>;
    /**
     * @desc Get the CSS class list of the root panel container to determine if it is expanded (w-96) or collapsed (w-12)
     * @returns {Promise<string>} The full class attribute string of the sidebar panel container
     * @throws {Error} When the class attribute is not accessible
     */
    getSidebarPanelContainerClassList(): Promise<string>;
    /**
     * @desc Determines whether the sidebar panel is currently in expanded state by checking for the w-96 class
     * @returns {Promise<boolean>} True if the panel has the w-96 class (expanded), false if w-12 (collapsed)
     * @throws {Error} When the class attribute is not accessible
     */
    isSidebarPanelExpanded(): Promise<boolean>;
    /**
     * @desc Get the inner HTML of the active view content container to verify which child BUENT content is currently rendered
     * @returns {Promise<string>} The inner HTML of the active view content container exactly as it appears
     * @throws {Error} When the active view content inner HTML is not accessible
     */
    getActiveViewContentInnerHtml(): Promise<string>;
    /**
     * @desc Get the aria-label attribute of the toggle button to determine current panel state
     * @returns {Promise<string>} The aria-label value — either 'Collapse sidebar panel' or 'Expand sidebar panel'
     * @throws {Error} When the aria-label attribute is not accessible
     */
    getToggleButtonAriaLabel(): Promise<string>;
    /**
     * @desc Get the aria-label attribute of the fullscreen toggle button to confirm its label
     * @returns {Promise<string>} The aria-label value — expected to be 'Toggle fullscreen (coming soon)'
     * @throws {Error} When the aria-label attribute is not accessible
     */
    getFullscreenToggleButtonAriaLabel(): Promise<string>;
    /**
     * @desc Check whether the fullscreen toggle button is enabled. Expected to always be disabled (returns false)
     * @returns {Promise<boolean>} True if the fullscreen toggle button is enabled, false if disabled
     */
    isFullscreenToggleButtonEnabled(): Promise<boolean>;
    /**
     * @desc Count the number of tab buttons currently rendered in the tab strip
     * @returns {Promise<number>} The count of rendered tab buttons
     */
    getTabButtonCount(): Promise<number>;
    /**
     * @desc Get the CSS class list of a specific tab button to determine if it is active or inactive
     * @param {string} viewId - The view identifier used in the tab's data-testid
     * @returns {Promise<string>} The full class attribute string of the tab button
     * @throws {Error} When the class attribute is not accessible for the given viewId
     */
    getTabButtonClassList(viewId: string): Promise<string>;
    /**
     * @desc Determines whether a specific tab button is currently active by checking for the active CSS classes
     * @param {string} viewId - The view identifier used in the tab's data-testid
     * @returns {Promise<boolean>} True if the tab is active (has border-blue-600 class), false if inactive
     * @throws {Error} When the class attribute is not accessible for the given viewId
     */
    isTabButtonActive(viewId: string): Promise<boolean>;
    /**
     * @desc Get the visible label text of a specific tab button identified by viewId
     * @param {string} viewId - The view identifier used in the tab's data-testid
     * @returns {Promise<string>} The visible text content of the tab button exactly as it appears
     * @throws {Error} When the tab button text content is null or not accessible
     */
    getTabButtonText(viewId: string): Promise<string>;
}
