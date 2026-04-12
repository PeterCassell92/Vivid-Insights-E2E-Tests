/**
 * Page Object Model: Popover
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class PopoverPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_popoverTrigger;
    private readonly selector_popoverContent;
    private readonly selector_popoverAnchor;
    constructor(page: Page);
    /**
     * @desc Checks if the Popover root element is present and visible in the DOM
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the popover root is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a PopoverPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<PopoverPOM>} A PopoverPOM instance
     * @throws {Error} When the popover root element is not visible
     */
    static getPOM(page: Page): Promise<PopoverPOM>;
    /**
     * @desc Whether or not the popover trigger element is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the trigger is visible
     */
    isTriggerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the popover content panel is currently visible in the DOM (i.e., popover is open)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the content panel is visible
     */
    isContentVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the optional popover anchor element is present and visible in the DOM
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the anchor element is visible
     */
    isAnchorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the popover root wrapper element is present in the DOM
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the popover root is visible
     */
    isRootVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the popover trigger button is enabled (not disabled)
     * @returns {Promise<boolean>} True if the trigger is enabled
     */
    isTriggerEnabled(): Promise<boolean>;
    /**
     * @desc Click the trigger element to open or close the popover panel
     * Expected outcome is that the popover content panel will become visible (if closed) or hidden (if open)
     */
    clickPopoverTrigger(): Promise<void>;
    /**
     * @desc Dismiss the popover content panel by pressing Escape
     * Expected outcome is that the popover content panel will close
     */
    dismissPopoverWithEscape(): Promise<void>;
    /**
     * @desc Dismiss the popover content panel by clicking outside of it
     * Expected outcome is that the popover content panel will close
     */
    dismissPopoverByClickingOutside(): Promise<void>;
    /**
     * @desc Scroll within the popover content panel if its inner content overflows
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollPopoverContent(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Get the visible text content of the popover trigger element
     * @returns {Promise<string>} The trigger text exactly as it appears in the UI
     * @throws {Error} When trigger text content is null or not accessible
     */
    getTriggerText(): Promise<string>;
    /**
     * @desc Get the current open/closed state of the popover from the trigger's data-state attribute
     * @returns {Promise<string>} The data-state value — 'open' or 'closed'
     * @throws {Error} When the data-state attribute is not accessible
     */
    getTriggerDataState(): Promise<string>;
    /**
     * @desc Get the data-slot identity marker value from the trigger element; always 'popover-trigger'
     * @returns {Promise<string>} The data-slot value
     * @throws {Error} When the data-slot attribute is not accessible
     */
    getTriggerDataSlot(): Promise<string>;
    /**
     * @desc Get the visible text content rendered inside the popover content panel
     * @returns {Promise<string>} The content text exactly as it appears in the UI
     * @throws {Error} When content text is null or not accessible
     */
    getContentText(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the popover content panel to inspect its rendered structure
     * @returns {Promise<string>} The inner HTML of the content panel
     * @throws {Error} When inner HTML is not accessible
     */
    getContentInnerHtml(): Promise<string>;
    /**
     * @desc Get the CSS class list of the popover content panel to inspect applied animation or styling classes
     * @returns {Promise<string>} The full class attribute string of the content panel
     * @throws {Error} When the class attribute is not accessible
     */
    getContentClassList(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the popover content panel to verify its placement on screen
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the content panel
     * @throws {Error} When the bounding box cannot be retrieved (element not visible or not in DOM)
     */
    getContentBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the current open/closed animation state of the popover content panel from data-state
     * @returns {Promise<string>} The data-state value — 'open' or 'closed'
     * @throws {Error} When the data-state attribute is not accessible
     */
    getContentDataState(): Promise<string>;
    /**
     * @desc Get the alignment of the popover content panel relative to the trigger from data-align
     * @returns {Promise<string>} The data-align value — 'start', 'center', or 'end'
     * @throws {Error} When the data-align attribute is not accessible
     */
    getContentDataAlign(): Promise<string>;
    /**
     * @desc Get the side on which the popover content is rendered from data-side, which also drives the slide-in animation direction
     * @returns {Promise<string>} The data-side value — 'top', 'bottom', 'left', or 'right'
     * @throws {Error} When the data-side attribute is not accessible
     */
    getContentDataSide(): Promise<string>;
    /**
     * @desc Get the data-slot identity marker value from the content element; always 'popover-content'
     * @returns {Promise<string>} The data-slot value
     * @throws {Error} When the data-slot attribute is not accessible
     */
    getContentDataSlot(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the anchor element to verify the popover is positioned relative to it
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the anchor element
     * @throws {Error} When the bounding box cannot be retrieved (element not visible or not in DOM)
     */
    getAnchorBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the data-slot identity marker value from the anchor element; always 'popover-anchor'
     * @returns {Promise<string>} The data-slot value
     * @throws {Error} When the data-slot attribute is not accessible
     */
    getAnchorDataSlot(): Promise<string>;
    /**
     * @desc Get the data-slot identity marker value from the popover root element; always 'popover'
     * @returns {Promise<string>} The data-slot value
     * @throws {Error} When the data-slot attribute is not accessible
     */
    getRootDataSlot(): Promise<string>;
}
