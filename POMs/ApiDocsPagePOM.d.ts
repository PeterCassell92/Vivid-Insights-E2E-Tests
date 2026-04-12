/**
 * Page Object Model: ApiDocsPage
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ApiDocsPagePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_apiDocsPageSection;
    constructor(page: Page);
    /**
     * @desc Checks if the API docs page is currently visible
     * @param {Page} page - Playwright Page instance
     * @returns {Promise<boolean>} True if the root section element is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method to get an ApiDocsPagePOM instance
     * Validates that the API docs page is visible before returning the instance
     * @param {Page} page - Playwright Page instance
     * @returns {Promise<ApiDocsPagePOM>} ApiDocsPagePOM instance
     * @throws {Error} When the API docs page root section is not visible
     */
    static getPOM(page: Page): Promise<ApiDocsPagePOM>;
    /**
     * @desc Whether or not the root API docs page section is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the root section element is visible
     */
    isApiDocsPageSectionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Get the CSS class list of the root section element (e.g. container, mx-auto, py-8)
     * @returns {Promise<string>} The full class attribute value exactly as it appears
     * @throws {Error} When the classList attribute is not accessible or null
     */
    getClassList(): Promise<string>;
    /**
     * @desc Get the data-testid attribute value of the root section element
     * @returns {Promise<string>} The data-testid attribute value exactly as it appears
     * @throws {Error} When the data-testid attribute is not accessible or null
     */
    getTestIdAttribute(): Promise<string>;
    /**
     * @desc Get the full inner HTML content of the API docs page section, including the rendered ApiDocsClient output
     * @returns {Promise<string>} The inner HTML content exactly as it appears
     * @throws {Error} When the inner HTML content is not accessible or null
     */
    getInnerHtml(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the root section element on the page
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the root section element
     * @throws {Error} When the bounding box is not accessible or the element is not visible
     */
    getBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
}
