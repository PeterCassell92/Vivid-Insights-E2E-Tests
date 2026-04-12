/**
 * Page Object Model: ReactSwagger
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ReactSwaggerPOM_StandardSelector = '#swagger-ui';

export class ReactSwaggerPOM {
  private readonly page: Page;

  // === SELECTORS ===
  private readonly rootSelector: string;
  private readonly selector_swaggerUiMount: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = ReactSwaggerPOM_StandardSelector;
    this.selector_swaggerUiMount = this.rootSelector;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the Swagger UI container is visible on screen,
   * confirming the component has mounted and the SwaggerUIBundle has injected content.
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the Swagger UI mount point is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const swaggerUiMount = page.locator(ReactSwaggerPOM_StandardSelector);
      return await swaggerUiMount.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a ReactSwaggerPOM instance.
   * @param page - Playwright Page instance
   * @returns {Promise<ReactSwaggerPOM>} ReactSwaggerPOM instance
   * @throws {Error} When the Swagger UI container is not visible
   */
  static async getPOM(page: Page): Promise<ReactSwaggerPOM> {
    const isVisible = await ReactSwaggerPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ReactSwaggerPOM: Cannot instantiate - Swagger UI container is not visible. ' +
          `Expected element [${ReactSwaggerPOM_StandardSelector}] to be visible.`
      );
    }

    return new ReactSwaggerPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Whether or not the Swagger UI mount point is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the Swagger UI container is visible
   */
  async isSwaggerUiMountVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_swaggerUiMount, {
        state: 'visible',
        timeout,
      });
      return true;
    } catch {
      return false;
    }
  }

  // === ACTION METHODS ===

  /**
   * @desc Scrolls within the Swagger UI container to navigate through rendered
   * OpenAPI spec sections, endpoints, and documentation.
   * Expected outcome is that the viewport within the Swagger UI container shifts
   * to reveal additional content.
   * @param {number} deltaY - The vertical scroll distance in pixels (positive scrolls down)
   */
  async scrollSwaggerUiContainer(deltaY: number): Promise<void> {
    await this.page.locator(this.selector_swaggerUiMount).hover();
    await this.page.mouse.wheel(0, deltaY);
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Extracts the full inner HTML of the Swagger UI mount point, capturing all
   * runtime-injected Swagger UI Bundle content including rendered OpenAPI endpoints,
   * schemas, and documentation.
   * @returns {Promise<string>} The inner HTML of the Swagger UI container exactly as it appears
   * @throws {Error} When the Swagger UI container inner HTML is not accessible or null
   */
  async getSwaggerUiContainerInnerHtml(): Promise<string> {
    await this.page.isVisible(this.selector_swaggerUiMount);
    const innerHTML = await this.page
      .locator(this.selector_swaggerUiMount)
      .innerHTML();

    if (innerHTML === null || innerHTML === undefined) {
      throw new Error(
        `ReactSwaggerPOM: Swagger UI container inner HTML is not accessible. Selector: ${this.selector_swaggerUiMount}`
      );
    }

    return innerHTML;
  }

  /**
   * @desc Gets the position and dimensions of the Swagger UI container to verify
   * layout and rendering area.
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the Swagger UI container
   * @throws {Error} When the bounding box cannot be retrieved (element not visible or not in DOM)
   */
  async getSwaggerUiContainerBoundingBox(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> {
    const boundingBox = await this.page
      .locator(this.selector_swaggerUiMount)
      .boundingBox();

    if (!boundingBox) {
      throw new Error(
        `ReactSwaggerPOM: Unable to retrieve bounding box for Swagger UI container. ` +
          `Element may not be visible or present in the DOM. Selector: ${this.selector_swaggerUiMount}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Extracts the 'id' attribute of the Swagger UI container to confirm the correct
   * DOM element (#swagger-ui) is targeted by SwaggerUIBundle via dom_id.
   * @returns {Promise<string>} The 'id' attribute value of the Swagger UI container
   * @throws {Error} When the 'id' attribute is not accessible or null
   */
  async getSwaggerUiContainerIdAttribute(): Promise<string> {
    await this.page.isVisible(this.selector_swaggerUiMount);
    const idAttribute = await this.page
      .locator(this.selector_swaggerUiMount)
      .getAttribute('id');

    if (idAttribute === null) {
      throw new Error(
        `ReactSwaggerPOM: The 'id' attribute of the Swagger UI container is null. Selector: ${this.selector_swaggerUiMount}`
      );
    }

    return idAttribute;
  }

  /**
   * @desc Retrieves the CSS class list of the Swagger UI mount div to inspect any
   * runtime classes applied by SwaggerUIBundle during initialisation.
   * @returns {Promise<string[]>} Array of CSS class names on the Swagger UI container
   * @throws {Error} When the 'class' attribute is not accessible
   */
  async getSwaggerUiContainerClassList(): Promise<string[]> {
    await this.page.isVisible(this.selector_swaggerUiMount);
    const classAttribute = await this.page
      .locator(this.selector_swaggerUiMount)
      .getAttribute('class');

    if (classAttribute === null) {
      return [];
    }

    return classAttribute
      .split(' ')
      .filter((className) => className.length > 0);
  }
}