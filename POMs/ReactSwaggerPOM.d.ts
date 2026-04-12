/**
 * Page Object Model: ReactSwagger
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ReactSwaggerPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_swaggerUiMount;
    constructor(page: Page);
    /**
     * @desc Checks if the Swagger UI container is visible on screen,
     * confirming the component has mounted and the SwaggerUIBundle has injected content.
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the Swagger UI mount point is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a ReactSwaggerPOM instance.
     * @param page - Playwright Page instance
     * @returns {Promise<ReactSwaggerPOM>} ReactSwaggerPOM instance
     * @throws {Error} When the Swagger UI container is not visible
     */
    static getPOM(page: Page): Promise<ReactSwaggerPOM>;
    /**
     * @desc Whether or not the Swagger UI mount point is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the Swagger UI container is visible
     */
    isSwaggerUiMountVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Scrolls within the Swagger UI container to navigate through rendered
     * OpenAPI spec sections, endpoints, and documentation.
     * Expected outcome is that the viewport within the Swagger UI container shifts
     * to reveal additional content.
     * @param {number} deltaY - The vertical scroll distance in pixels (positive scrolls down)
     */
    scrollSwaggerUiContainer(deltaY: number): Promise<void>;
    /**
     * @desc Extracts the full inner HTML of the Swagger UI mount point, capturing all
     * runtime-injected Swagger UI Bundle content including rendered OpenAPI endpoints,
     * schemas, and documentation.
     * @returns {Promise<string>} The inner HTML of the Swagger UI container exactly as it appears
     * @throws {Error} When the Swagger UI container inner HTML is not accessible or null
     */
    getSwaggerUiContainerInnerHtml(): Promise<string>;
    /**
     * @desc Gets the position and dimensions of the Swagger UI container to verify
     * layout and rendering area.
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the Swagger UI container
     * @throws {Error} When the bounding box cannot be retrieved (element not visible or not in DOM)
     */
    getSwaggerUiContainerBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Extracts the 'id' attribute of the Swagger UI container to confirm the correct
     * DOM element (#swagger-ui) is targeted by SwaggerUIBundle via dom_id.
     * @returns {Promise<string>} The 'id' attribute value of the Swagger UI container
     * @throws {Error} When the 'id' attribute is not accessible or null
     */
    getSwaggerUiContainerIdAttribute(): Promise<string>;
    /**
     * @desc Retrieves the CSS class list of the Swagger UI mount div to inspect any
     * runtime classes applied by SwaggerUIBundle during initialisation.
     * @returns {Promise<string[]>} Array of CSS class names on the Swagger UI container
     * @throws {Error} When the 'class' attribute is not accessible
     */
    getSwaggerUiContainerClassList(): Promise<string[]>;
}
