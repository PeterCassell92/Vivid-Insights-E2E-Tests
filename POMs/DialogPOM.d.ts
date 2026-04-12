/**
 * Page Object Model: Dialog
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class DialogPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_dialogRoot;
    private readonly selector_dialogTrigger;
    private readonly selector_dialogPortal;
    private readonly selector_dialogOverlay;
    private readonly selector_dialogContent;
    private readonly selector_dialogClose;
    private readonly selector_dialogHeader;
    private readonly selector_dialogFooter;
    private readonly selector_dialogTitle;
    private readonly selector_dialogDescription;
    constructor(page: Page);
    /**
     * @desc Checks if the Dialog root component is currently visible in the DOM
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the dialog root element is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a DialogPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<DialogPOM>} DialogPOM instance
     * @throws {Error} When the dialog root element is not visible
     */
    static getPOM(page: Page): Promise<DialogPOM>;
    /**
     * @desc Whether or not the dialog root element is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the dialog root is visible
     */
    isDialogRootVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the dialog trigger element is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the dialog trigger is visible
     */
    isDialogTriggerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the dialog portal wrapper is present in the DOM
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the dialog portal is visible
     */
    isDialogPortalVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the overlay backdrop is currently visible (dialog is open)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the dialog overlay is visible
     */
    isDialogOverlayVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the dialog content panel is currently visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the dialog content is visible
     */
    isDialogContentVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the standalone DialogClose element is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the dialog close element is visible
     */
    isDialogCloseVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the dialog trigger element is enabled and can be interacted with
     * @returns {Promise<boolean>} True if the trigger is enabled
     */
    isDialogTriggerEnabled(): Promise<boolean>;
    /**
     * @desc Whether or not the DialogClose button is enabled (not disabled via pointer-events-none)
     * @returns {Promise<boolean>} True if the close button is enabled
     */
    isDialogCloseEnabled(): Promise<boolean>;
    /**
     * @desc Clicks the trigger element to open the dialog modal
     * Expected outcome is that the dialog will open and the overlay/content will become visible
     */
    clickDialogTrigger(): Promise<void>;
    /**
     * @desc Clicks the standalone DialogClose component to close/dismiss the dialog
     * Expected outcome is that the dialog will close and the overlay/content will become hidden
     */
    clickDialogClose(): Promise<void>;
    /**
     * @desc Clicks the backdrop overlay to dismiss the dialog (default Radix behavior)
     * Expected outcome is that the dialog will close when the overlay is clicked
     */
    clickDialogOverlay(): Promise<void>;
    /**
     * @desc Scrolls within the dialog content panel if its contents overflow
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollDialogContent(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Dismisses the dialog by clicking the built-in close button (X icon) inside DialogContent
     * Expected outcome is that the dialog will close via the embedded close button when showCloseButton=true
     * @throws {Error} When the embedded close button inside dialog content is not visible
     */
    dismissDialogContent(): Promise<void>;
    /**
     * @desc Gets the data-slot attribute value of the dialog root to confirm component identity
     * @returns {Promise<string>} The data-slot attribute value
     * @throws {Error} When the attribute is not accessible or null
     */
    getDialogRootSlotAttribute(): Promise<string>;
    /**
     * @desc Gets the data-slot attribute value of the dialog portal to confirm portal identity
     * @returns {Promise<string>} The data-slot attribute value
     * @throws {Error} When the attribute is not accessible or null
     */
    getDialogPortalSlotAttribute(): Promise<string>;
    /**
     * @desc Gets the data-slot attribute value of the dialog close element to confirm close component identity
     * @returns {Promise<string>} The data-slot attribute value
     * @throws {Error} When the attribute is not accessible or null
     */
    getDialogCloseSlotAttribute(): Promise<string>;
    /**
     * @desc Counts how many DialogClose elements are present (standalone + embedded close button inside DialogContent)
     * @returns {Promise<number>} The count of dialog close elements
     */
    getDialogCloseCount(): Promise<number>;
    /**
     * @desc Gets the data-state attribute value of the overlay to determine the current animation state
     * @returns {Promise<string>} The data-state attribute value ('open' | 'closed')
     * @throws {Error} When the attribute is not accessible or null
     */
    getDialogOverlayDataState(): Promise<string>;
    /**
     * @desc Gets the CSS class list of the overlay to inspect animation state classes (e.g. animate-in, fade-in-0)
     * @returns {Promise<string>} The full class attribute string of the overlay element
     * @throws {Error} When the class attribute is not accessible or null
     */
    getDialogOverlayClassList(): Promise<string>;
    /**
     * @desc Gets the data-state attribute value of the dialog content to determine the current animation state
     * @returns {Promise<string>} The data-state attribute value ('open' | 'closed')
     * @throws {Error} When the attribute is not accessible or null
     */
    getDialogContentDataState(): Promise<string>;
    /**
     * @desc Gets the CSS class list of the dialog content panel to inspect animation and zoom state classes
     * @returns {Promise<string>} The full class attribute string of the dialog content element
     * @throws {Error} When the class attribute is not accessible or null
     */
    getDialogContentClassList(): Promise<string>;
    /**
     * @desc Gets the full inner HTML of the dialog content panel, including header, body, footer, and close button
     * @returns {Promise<string>} The inner HTML of the dialog content element
     * @throws {Error} When the inner HTML is not accessible or null
     */
    getDialogContentInnerHtml(): Promise<string>;
    /**
     * @desc Gets the position and dimensions of the dialog content panel (centered modal)
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the dialog content
     * @throws {Error} When the bounding box is not accessible or null
     */
    getDialogContentBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Gets the visible text content of the dialog trigger element
     * @returns {Promise<string>} The text content of the trigger element exactly as it appears
     * @throws {Error} When the text content is not accessible or null
     */
    getDialogTriggerText(): Promise<string>;
    /**
     * @desc Gets the data-slot attribute value of the dialog trigger to confirm trigger element identity
     * @returns {Promise<string>} The data-slot attribute value
     * @throws {Error} When the attribute is not accessible or null
     */
    getDialogTriggerSlotAttribute(): Promise<string>;
}
