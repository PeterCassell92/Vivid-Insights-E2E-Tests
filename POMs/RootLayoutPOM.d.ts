/**
 * Page Object Model: RootLayout
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class RootLayoutPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_htmlElement;
    private readonly selector_bodyElement;
    constructor(page: Page);
    /**
     * @desc Checks if the root HTML shell is present and visible in the DOM
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the root <html lang="en"> element is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a RootLayoutPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<RootLayoutPOM>} RootLayoutPOM instance
     * @throws {Error} When the root HTML element is not visible
     */
    static getPOM(page: Page): Promise<RootLayoutPOM>;
    /**
     * @desc Whether or not the root <html> element is visible in the DOM
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the html element is visible
     */
    isHtmlElementVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the <body> element is visible in the DOM
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the body element is visible
     */
    isBodyElementVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Gets the 'lang' attribute value from the root <html> element
     * @returns {Promise<string>} The lang attribute value exactly as it appears (expected: 'en')
     * @throws {Error} When the lang attribute is not accessible or null
     */
    getHtmlLangAttribute(): Promise<string>;
    /**
     * @desc Gets the full 'class' attribute value from the <body> element
     * Includes Geist Sans variable, Geist Mono variable, and the Tailwind antialiased utility class
     * @returns {Promise<string>} The class attribute value exactly as it appears
     * @throws {Error} When the class attribute is not accessible or null
     */
    getBodyClassAttribute(): Promise<string>;
    /**
     * @desc Gets the full CSS class list of the <body> element as an array
     * Useful for inspecting individual font variable classes and the antialiased utility class
     * @returns {Promise<string[]>} Array of individual class names applied to the body element
     * @throws {Error} When the class attribute is not accessible or null
     */
    getBodyClassList(): Promise<string[]>;
    /**
     * @desc Gets the inner HTML of the <body> element
     * Useful for verifying that StoreProvider and ClientLayout composition are rendered correctly
     * @returns {Promise<string>} The inner HTML of the body element exactly as it appears
     * @throws {Error} When the body element inner HTML is not accessible or null
     */
    getBodyInnerHtml(): Promise<string>;
}
