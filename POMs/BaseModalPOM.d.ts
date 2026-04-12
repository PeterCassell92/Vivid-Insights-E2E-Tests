/**
 * Page Object Model: BaseModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class BaseModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_overlayContainer;
    private readonly selector_panelContainer;
    private readonly selector_title;
    private readonly selector_closeButton;
    private readonly selector_scrollableContent;
    constructor(page: Page, testId?: string);
    /**
     * @desc Checks if a BaseModal with the given testId is currently visible
     * @param {Page} page - Playwright Page instance
     * @param {string} [testId='modal'] - The testId used to identify the modal overlay
     * @returns {Promise<boolean>} True if the modal overlay is visible
     */
    static isVisible(page: Page, testId?: string): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a BaseModalPOM instance
     * @param {Page} page - Playwright Page instance
     * @param {string} [testId='modal'] - The testId used to identify the modal overlay
     * @returns {Promise<BaseModalPOM>} A BaseModalPOM instance
     * @throws {Error} When the modal overlay is not visible
     */
    static getPOM(page: Page, testId?: string): Promise<BaseModalPOM>;
    /**
     * @desc Check whether the modal overlay is currently visible/rendered (only present when isOpen === true)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the overlay is visible
     */
    isOverlayVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the modal panel/card is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal panel is visible
     */
    isPanelVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Click the overlay backdrop to trigger close behaviour
     * Expected outcome is that onClose is called when closeOnOverlayClick is true
     */
    clickOverlay(): Promise<void>;
    /**
     * @desc Dismiss the modal by clicking the close (X) button in the header, triggering onClose
     * Expected outcome is that the modal is closed
     * @throws {Error} When the close button is not visible
     */
    clickCloseButton(): Promise<void>;
    /**
     * @desc Scroll within the modal panel's inner scrollable content area (overflow-y-auto, max-h-[90vh])
     * Expected outcome is that the content area scrolls to the specified position
     * @param {number} deltaY - The number of pixels to scroll vertically (positive = down, negative = up)
     * @throws {Error} When the scrollable content area is not visible
     */
    scrollModalContent(deltaY: number): Promise<void>;
    /**
     * @desc Get the CSS class list of the overlay to determine whether a dimmed (bg-black/6) or transparent (bg-transparent) backdrop is applied
     * @returns {Promise<string>} The full class attribute string of the overlay element
     * @throws {Error} When the overlay element is not accessible or class attribute is null
     */
    getOverlayClassList(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the modal panel to inspect composed header, title, close button, and children content
     * @returns {Promise<string>} The inner HTML of the modal panel
     * @throws {Error} When the modal panel is not accessible or innerHTML is null
     */
    getPanelInnerHtml(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the modal panel to verify sizing, centering, and layout constraints
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the modal panel
     * @throws {Error} When the modal panel is not visible or bounding box cannot be retrieved
     */
    getPanelBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Extract all visible text content within the modal panel, including the title, header, and any composed children content
     * @returns {Promise<string>} All text content within the modal panel exactly as it appears
     * @throws {Error} When the modal panel text content is not accessible or null
     */
    getPanelText(): Promise<string>;
    /**
     * @desc Get the CSS class list of the modal panel to determine its current size (max-w-* class) or fullscreen state
     * @returns {Promise<string>} The full class attribute string of the modal panel element
     * @throws {Error} When the modal panel element is not accessible or class attribute is null
     */
    getPanelClassList(): Promise<string>;
}
