/**
 * Page Object Model: Sidebar
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class SidebarPOM {
    private readonly page;
    protected readonly rootSelector: string;
    protected readonly selector_sidebarContainer: string;
    protected readonly selector_sidebarLogo: string;
    protected readonly selector_sidebarToggleButton: string;
    protected readonly selector_sidebarNavList: string;
    protected readonly selector_sidebarFooter: string;
    protected readonly selector_sidebarNavItem: (navItemId: string) => string;
    protected readonly selector_navItemActiveIndicator: (navItemId: string) => string;
    protected readonly selector_navItemIcon: (navItemId: string) => string;
    protected readonly selector_navItemLabel: (navItemId: string) => string;
    protected readonly selector_panelContainer: string;
    protected readonly selector_panelHeader: string;
    protected readonly selector_panelTitle: string;
    protected readonly selector_panelContent: string;
    protected readonly selector_panelCloseButton: string;
    protected readonly selector_panelCardList: string;
    protected readonly selector_sidebarPanelCard: (cardId: string) => string;
    protected readonly selector_cardHeader: (cardId: string) => string;
    protected readonly selector_cardTitle: (cardId: string) => string;
    protected readonly selector_cardBody: (cardId: string) => string;
    protected readonly selector_cardExpandToggle: (cardId: string) => string;
    constructor(page: Page);
    /**
     * @desc Checks if the Sidebar is currently visible on the page
     * @param {Page} page - Playwright Page instance
     * @returns {Promise<boolean>} True if the sidebar container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates sidebar visibility and returns a SidebarPOM instance
     * @param {Page} page - Playwright Page instance
     * @returns {Promise<SidebarPOM>} A SidebarPOM instance
     * @throws {Error} When the sidebar is not visible on the page
     */
    static getPOM(page: Page): Promise<SidebarPOM>;
    /**
     * @desc Checks whether the sidebar container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the sidebar container is visible
     */
    isSidebarVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks whether the sidebar is currently in a collapsed state
     * @returns {Promise<boolean>} True if the sidebar is collapsed
     * @throws {Error} When the data-collapsed attribute is not accessible
     */
    isSidebarCollapsed(): Promise<boolean>;
    /**
     * @desc Checks whether the sidebar toggle button is visible
     * @returns {Promise<boolean>} True if the toggle button is visible
     */
    isSidebarToggleButtonVisible(): Promise<boolean>;
    /**
     * @desc Checks whether the sidebar navigation list is visible
     * @returns {Promise<boolean>} True if the nav list is visible
     */
    isSidebarNavListVisible(): Promise<boolean>;
    /**
     * @desc Checks whether the sidebar footer is visible
     * @returns {Promise<boolean>} True if the footer is visible
     */
    isSidebarFooterVisible(): Promise<boolean>;
    /**
     * @desc Checks whether a specific navigation item is visible
     * @param {string} navItemId - The identifier of the navigation item
     * @returns {Promise<boolean>} True if the nav item is visible
     */
    isSidebarNavItemVisible(navItemId: string): Promise<boolean>;
    /**
     * @desc Checks whether the sidebar panel container is currently visible
     * @returns {Promise<boolean>} True if the panel is visible
     */
    isSidebarPanelVisible(): Promise<boolean>;
    /**
     * @desc Checks whether the sidebar panel is currently in an open state via data-open attribute
     * @returns {Promise<boolean>} True if the panel is open
     * @throws {Error} When the data-open attribute is not accessible
     */
    isSidebarPanelOpen(): Promise<boolean>;
    /**
     * @desc Checks whether a specific sidebar panel card is visible
     * @param {string} cardId - The identifier of the panel card
     * @returns {Promise<boolean>} True if the panel card is visible
     */
    isSidebarPanelCardVisible(cardId: string): Promise<boolean>;
    /**
     * @desc Clicks the sidebar toggle button to collapse or expand the sidebar
     * Expected outcome is that the sidebar collapsed state will change
     * @throws {Error} When the toggle button is not visible
     */
    clickSidebarToggleButton(): Promise<void>;
    /**
     * @desc Clicks a navigation item in the sidebar to navigate to the associated route
     * Expected outcome is that the application will navigate to the route associated with the nav item
     * @param {string} navItemId - The identifier of the navigation item to click
     * @throws {Error} When the navigation item is not visible
     */
    clickSidebarNavItem(navItemId: string): Promise<void>;
    /**
     * @desc Clicks the panel close button to dismiss the sidebar panel
     * Expected outcome is that the sidebar panel will close
     * @throws {Error} When the panel close button is not visible
     */
    clickPanelCloseButton(): Promise<void>;
    /**
     * @desc Clicks an individual sidebar panel card to interact with it
     * Expected outcome is that the panel card will respond to the click interaction
     * @param {string} cardId - The identifier of the panel card to click
     * @throws {Error} When the panel card is not visible
     */
    clickSidebarPanelCard(cardId: string): Promise<void>;
    /**
     * @desc Clicks the expand toggle on a specific sidebar panel card
     * Expected outcome is that the card will expand or collapse
     * @param {string} cardId - The identifier of the panel card
     * @throws {Error} When the card expand toggle is not visible
     */
    clickCardExpandToggle(cardId: string): Promise<void>;
    /**
     * @desc Gets the href URL associated with a navigation item anchor
     * @param {string} navItemId - The identifier of the navigation item
     * @returns {Promise<string>} The href URL exactly as it appears on the element
     * @throws {Error} When the href attribute is not accessible or null
     */
    getNavItemHref(navItemId: string): Promise<string>;
    /**
     * @desc Gets the active state of a nav item via the data-active attribute
     * @param {string} navItemId - The identifier of the navigation item
     * @returns {Promise<string>} The data-active attribute value exactly as it appears
     * @throws {Error} When the data-active attribute is not accessible or null
     */
    getNavItemActiveState(navItemId: string): Promise<string>;
    /**
     * @desc Gets the route/identifier value of a nav item via the data-value attribute
     * @param {string} navItemId - The identifier of the navigation item
     * @returns {Promise<string>} The data-value attribute value exactly as it appears
     * @throws {Error} When the data-value attribute is not accessible or null
     */
    getNavItemValue(navItemId: string): Promise<string>;
    /**
     * @desc Gets the visible text content of a specific navigation item label
     * @param {string} navItemId - The identifier of the navigation item
     * @returns {Promise<string>} The label text exactly as it appears in the UI
     * @throws {Error} When the nav item label text content is not accessible or null
     */
    getNavItemLabelText(navItemId: string): Promise<string>;
    /**
     * @desc Gets the current panel type via the data-panel-type attribute on the panel container
     * @returns {Promise<string>} The data-panel-type attribute value exactly as it appears
     * @throws {Error} When the data-panel-type attribute is not accessible or null
     */
    getPanelType(): Promise<string>;
    /**
     * @desc Gets the title text displayed in the sidebar panel header
     * @returns {Promise<string>} The panel title text exactly as it appears in the UI
     * @throws {Error} When the panel title text content is not accessible or null
     */
    getPanelTitleText(): Promise<string>;
    /**
     * @desc Gets the status of a panel card via the data-status attribute
     * @param {string} cardId - The identifier of the panel card
     * @returns {Promise<string>} The data-status attribute value exactly as it appears (e.g. active, warning, error)
     * @throws {Error} When the data-status attribute is not accessible or null
     */
    getPanelCardStatus(cardId: string): Promise<string>;
    /**
     * @desc Gets the expanded/collapsed state of a panel card via the data-expanded attribute
     * @param {string} cardId - The identifier of the panel card
     * @returns {Promise<string>} The data-expanded attribute value exactly as it appears
     * @throws {Error} When the data-expanded attribute is not accessible or null
     */
    getPanelCardExpandedState(cardId: string): Promise<string>;
    /**
     * @desc Gets the title text of a specific sidebar panel card
     * @param {string} cardId - The identifier of the panel card
     * @returns {Promise<string>} The card title text exactly as it appears in the UI
     * @throws {Error} When the card title text content is not accessible or null
     */
    getPanelCardTitleText(cardId: string): Promise<string>;
}
