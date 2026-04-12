/**
 * Page Object Model: Button
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
export declare class ButtonPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_buttonRoot;
    private readonly selector_buttonBySize;
    private readonly selector_buttonByVariant;
    private readonly selector_buttonByVariantAndSize;
    constructor(page: Page);
    /**
     * @desc Checks if at least one Button instance is visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if a button is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a ButtonPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<ButtonPOM>} ButtonPOM instance
     * @throws {Error} When no Button element is visible on the page
     */
    static getPOM(page: Page): Promise<ButtonPOM>;
    /**
     * @desc Check whether the button is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the button root is visible
     */
    isButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the button is enabled (not in a disabled state)
     * @returns {Promise<boolean>} True if the button is enabled
     */
    isButtonEnabled(): Promise<boolean>;
    /**
     * @desc Click the button to trigger its action
     * Expected outcome is that the button's bound action will be executed
     */
    clickButton(): Promise<void>;
    /**
     * @desc Click a button precisely identified by both variant and size
     * Expected outcome is that the specific button's bound action will be executed
     * @param {ButtonVariant} variant - The visual variant of the button
     * @param {ButtonSize} size - The size variant of the button
     */
    clickButtonByVariantAndSize(variant: ButtonVariant, size: ButtonSize): Promise<void>;
    /**
     * @desc Click a button of a specific size
     * Expected outcome is that the first matching button's bound action will be executed
     * @param {ButtonSize} size - The size variant of the button
     */
    clickButtonBySize(size: ButtonSize): Promise<void>;
    /**
     * @desc Click a button of a specific variant
     * Expected outcome is that the first matching button's bound action will be executed
     * @param {ButtonVariant} variant - The visual variant of the button
     */
    clickButtonByVariant(variant: ButtonVariant): Promise<void>;
    /**
     * @desc Hover over the button to trigger hover styles or tooltips
     * Expected outcome is that hover styles or tooltip will be activated
     */
    hoverButton(): Promise<void>;
    /**
     * @desc Get the visible text label of the button
     * @returns {Promise<string>} The button text exactly as it appears in the UI
     * @throws {Error} When button text content is not accessible or null
     */
    getButtonText(): Promise<string>;
    /**
     * @desc Get the full CSS class list applied to the button, reflecting the resolved CVA variant and size classes
     * @returns {Promise<string>} The full class attribute value
     * @throws {Error} When the class attribute is not accessible
     */
    getButtonClassList(): Promise<string>;
    /**
     * @desc Get the inner HTML of the button, useful for inspecting icon or complex child content
     * @returns {Promise<string>} The inner HTML of the button element
     * @throws {Error} When the button inner HTML is not accessible
     */
    getButtonInnerHtml(): Promise<string>;
    /**
     * @desc Get the data-slot attribute value to confirm component identity (always 'button')
     * @returns {Promise<string>} The data-slot attribute value
     * @throws {Error} When the data-slot attribute is not accessible
     */
    getDataSlotAttribute(): Promise<string>;
    /**
     * @desc Get the data-variant attribute to confirm which visual variant is currently rendered
     * @returns {Promise<string>} The data-variant attribute value
     * @throws {Error} When the data-variant attribute is not accessible
     */
    getDataVariantAttribute(): Promise<string>;
    /**
     * @desc Get the data-size attribute to confirm which size variant is currently rendered
     * @returns {Promise<string>} The data-size attribute value
     * @throws {Error} When the data-size attribute is not accessible
     */
    getDataSizeAttribute(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the button element
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the button
     * @throws {Error} When the button bounding box is not accessible
     */
    getButtonBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Count how many Button instances are present in the current scope
     * @returns {Promise<number>} The total count of Button instances
     */
    getButtonCount(): Promise<number>;
    /**
     * @desc Count how many Button instances of a specific size are present
     * @param {ButtonSize} size - The size variant to count
     * @returns {Promise<number>} The count of Button instances matching the given size
     */
    getButtonCountBySize(size: ButtonSize): Promise<number>;
    /**
     * @desc Count how many Button instances of a specific variant are present
     * @param {ButtonVariant} variant - The visual variant to count
     * @returns {Promise<number>} The count of Button instances matching the given variant
     */
    getButtonCountByVariant(variant: ButtonVariant): Promise<number>;
}
export {};
