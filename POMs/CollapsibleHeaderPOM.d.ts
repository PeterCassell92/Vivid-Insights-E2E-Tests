/**
 * Page Object Model: CollapsibleHeader
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class CollapsibleHeaderPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_headerButtonExpanded;
    private readonly selector_headerButtonCollapsed;
    private readonly selector_headerButtonByRole;
    private readonly selector_headerButtonAriaLabelCollapse;
    private readonly selector_headerButtonAriaLabelExpand;
    private readonly selector_headerButtonByTestId;
    private readonly selector_chevronSvg;
    private readonly selector_chevronAriaHidden;
    private readonly selector_contentAreaDiv;
    constructor(page: Page);
    /**
     * @desc Checks if any collapsible header button is visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if a collapsible header button is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a CollapsibleHeaderPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<CollapsibleHeaderPOM>} CollapsibleHeaderPOM instance
     * @throws {Error} When no collapsible header button is visible on the page
     */
    static getPOM(page: Page): Promise<CollapsibleHeaderPOM>;
    /**
     * @desc Check whether the collapsible header button is visible on screen using its testId
     * @param {string} testId - The data-testid value of the header button
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the header button is visible
     */
    isHeaderButtonVisible(testId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Verify the header button is visible when in expanded state using the aria-expanded=true selector
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if an expanded header button is visible
     */
    isExpandedHeaderButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Verify the header button is visible when in collapsed state using the aria-expanded=false selector
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if a collapsed header button is visible
     */
    isCollapsedHeaderButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the collapsible header button is enabled and interactable
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<boolean>} True if the header button is enabled
     */
    isHeaderButtonEnabled(testId: string): Promise<boolean>;
    /**
     * @desc Check whether the chevron SVG icon is present and visible within the header button
     * @param {string} testId - The data-testid value of the header button
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the chevron icon is visible
     */
    isChevronIconVisible(testId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the content area div is visible within the header button
     * @param {string} testId - The data-testid value of the header button
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the content area div is visible
     */
    isContentAreaVisible(testId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Click the collapsible header button by its testId to toggle the section open or closed
     * Expected outcome is that the onToggle callback fires and the section expands or collapses
     * @param {string} testId - The data-testid value of the header button
     */
    clickHeaderButtonByTestId(testId: string): Promise<void>;
    /**
     * @desc Click the expanded header button (aria-expanded=true) to collapse the section
     * Expected outcome is that the section collapses and aria-expanded becomes 'false'
     */
    clickExpandedHeaderButton(): Promise<void>;
    /**
     * @desc Click the collapsed header button (aria-expanded=false) to expand the section
     * Expected outcome is that the section expands and aria-expanded becomes 'true'
     */
    clickCollapsedHeaderButton(): Promise<void>;
    /**
     * @desc Click the header button targeted by its default 'Collapse section' aria-label
     * Expected outcome is that the expanded section collapses (used when no custom ariaLabel is provided)
     */
    clickHeaderButtonAriaLabelCollapse(): Promise<void>;
    /**
     * @desc Click the header button targeted by its default 'Expand section' aria-label
     * Expected outcome is that the collapsed section expands (used when no custom ariaLabel is provided)
     */
    clickHeaderButtonAriaLabelExpand(): Promise<void>;
    /**
     * @desc Get the aria-expanded attribute value to determine whether the collapsible section is currently open or closed
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<string>} The aria-expanded attribute value ('true' or 'false')
     * @throws {Error} When the aria-expanded attribute is not accessible or null
     */
    getAriaExpanded(testId: string): Promise<string>;
    /**
     * @desc Get the aria-label attribute value to read the current accessibility label (custom or default)
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<string>} The aria-label attribute value exactly as it appears
     * @throws {Error} When the aria-label attribute is not accessible or null
     */
    getAriaLabel(testId: string): Promise<string>;
    /**
     * @desc Get the data-testid attribute value from the root button element
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<string>} The data-testid attribute value exactly as it appears
     * @throws {Error} When the data-testid attribute is not accessible or null
     */
    getTestIdAttribute(testId: string): Promise<string>;
    /**
     * @desc Get the CSS class list of the header button to inspect size variant styles or state-based classes
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<string>} The class attribute value exactly as it appears
     * @throws {Error} When the class attribute is not accessible or null
     */
    getHeaderButtonClassList(testId: string): Promise<string>;
    /**
     * @desc Get the position and dimensions of the collapsible header button
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the header button
     * @throws {Error} When the bounding box is not accessible or null
     */
    getHeaderButtonBoundingBox(testId: string): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the CSS class list of the chevron SVG to assert rotation state
     * '-rotate-90' is present when collapsed=true, absent when collapsed=false
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<string>} The class attribute value of the chevron SVG exactly as it appears
     * @throws {Error} When the class attribute is not accessible or null
     */
    getChevronClassList(testId: string): Promise<string>;
    /**
     * @desc Get the position and dimensions of the chevron icon within the header button
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the chevron icon
     * @throws {Error} When the bounding box is not accessible or null
     */
    getChevronBoundingBox(testId: string): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the aria-hidden attribute value of the chevron icon to confirm it is always 'true' (decorative)
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<string>} The aria-hidden attribute value exactly as it appears
     * @throws {Error} When the aria-hidden attribute is not accessible or null
     */
    getChevronAriaHidden(testId: string): Promise<string>;
    /**
     * @desc Get the CSS class list of the content area div to verify flex layout and sizing classes
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<string>} The class attribute value of the content area div exactly as it appears
     * @throws {Error} When the class attribute is not accessible or null
     */
    getContentAreaClassList(testId: string): Promise<string>;
    /**
     * @desc Get the full inner HTML of the content area div to inspect all child elements (icons, titles, badges, etc.)
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<string>} The inner HTML of the content area div exactly as it appears
     * @throws {Error} When the inner HTML is not accessible or null
     */
    getContentAreaInnerHtml(testId: string): Promise<string>;
    /**
     * @desc Get the visible text content rendered inside the content area (e.g. section title, badge labels)
     * @param {string} testId - The data-testid value of the header button
     * @returns {Promise<string>} The text content of the content area exactly as it appears
     * @throws {Error} When the text content is not accessible or null
     */
    getContentAreaText(testId: string): Promise<string>;
}
