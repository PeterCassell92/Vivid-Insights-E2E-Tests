/**
 * Page Object Model: ClientLayout
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ClientLayoutPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_rootContainer;
    private readonly selector_mainContent;
    private readonly selector_infoModalOverlay;
    private readonly selector_infoModal;
    private readonly selector_infoModalCloseButton;
    private readonly selector_infoModalTitle;
    private readonly selector_infoModalFeaturesHeading;
    private readonly selector_infoModalFeaturesList;
    private readonly selector_infoModalFeaturesListItems;
    constructor(page: Page);
    /**
     * @desc Checks if the ClientLayout app shell is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the root container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method to get a ClientLayoutPOM instance
     * Validates that the app shell is visible before returning instance
     * @param page - Playwright Page instance
     * @returns {Promise<ClientLayoutPOM>} ClientLayoutPOM instance
     * @throws {Error} When the root container is not visible
     */
    static getPOM(page: Page): Promise<ClientLayoutPOM>;
    /**
     * @desc Check whether the top-level layout wrapper (app shell) is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the root container is visible
     */
    isRootContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the main content area is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the main content area is visible
     */
    isMainContentVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Info modal overlay is currently visible (i.e., isInfoModalOpen is true)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the info modal overlay is visible
     */
    isInfoModalOverlayVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Info modal white card panel is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the info modal panel is visible
     */
    isInfoModalVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Info modal close button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the close button is visible
     */
    isInfoModalCloseButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Info modal close button is enabled and interactable
     * @returns {Promise<boolean>} True if the close button is enabled
     */
    isInfoModalCloseButtonEnabled(): Promise<boolean>;
    /**
     * @desc Click the full-screen backdrop overlay to close the Info modal
     * Expected outcome is that the Info modal will be dismissed
     */
    clickInfoModalOverlay(): Promise<void>;
    /**
     * @desc Click the SVG ✕ icon button to close the Info modal
     * Expected outcome is that the Info modal will be dismissed
     */
    clickInfoModalCloseButton(): Promise<void>;
    /**
     * @desc Scroll within the main content area to navigate routed page content
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollMainContent(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Get the CSS class list of the root container to verify layout styling
     * @returns {Promise<string>} The class attribute value of the root container exactly as it appears
     * @throws {Error} When the root container class attribute is not accessible
     */
    getRootContainerClassList(): Promise<string>;
    /**
     * @desc Extract the visible heading text 'About Financial Projections' from the Info modal
     * @returns {Promise<string>} The info modal title text exactly as it appears in the UI
     * @throws {Error} When the info modal title content is not accessible or null
     */
    getInfoModalTitleText(): Promise<string>;
    /**
     * @desc Extract the visible sub-heading text 'Features:' from the Info modal body
     * @returns {Promise<string>} The features heading text exactly as it appears in the UI
     * @throws {Error} When the features heading content is not accessible or null
     */
    getInfoModalFeaturesHeadingText(): Promise<string>;
    /**
     * @desc Count the number of feature list items rendered inside the Info modal
     * @returns {Promise<number>} The count of feature list items
     */
    getInfoModalFeaturesListItemCount(): Promise<number>;
    /**
     * @desc Extract the list of all application feature item texts from the bulleted list inside the Info modal
     * @returns {Promise<string[]>} Array of feature item text strings exactly as they appear in the UI
     * @throws {Error} When a feature list item text content is not accessible
     */
    getInfoModalFeaturesListItems(): Promise<string[]>;
    /**
     * @desc Extract the full inner HTML content of the Info modal panel
     * @returns {Promise<string>} The inner HTML of the info modal exactly as rendered
     * @throws {Error} When the info modal inner HTML is not accessible
     */
    getInfoModalInnerHtml(): Promise<string>;
    /**
     * @desc Extract the inner HTML of the main content area to inspect the currently rendered routed page children
     * @returns {Promise<string>} The inner HTML of the main content area exactly as rendered
     * @throws {Error} When the main content inner HTML is not accessible
     */
    getMainContentInnerHtml(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the main content area to verify layout shifts when the sidebar is toggled
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the main content area
     * @throws {Error} When the main content bounding box is not accessible
     */
    getMainContentBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the CSS class list of the main content element to verify the current margin state (ml-16 vs ml-56) based on sidebar collapse state
     * @returns {Promise<string>} The class attribute value of the main content element exactly as it appears
     * @throws {Error} When the main content class attribute is not accessible
     */
    getMainContentClassList(): Promise<string>;
}
