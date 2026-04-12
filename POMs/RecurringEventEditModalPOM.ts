/**
 * Page Object Model: RecurringEventEditModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from 'playwright';

const RecurringEventEditModalPOM_StandardSelector = '[data-testid="recurring-event-edit-modal"]';

export class RecurringEventEditModalPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_modalContainer: string;
  private readonly selector_projectionEventFormRoot: string;
  private readonly selector_createModalTitle: string;
  private readonly selector_editModalTitle: string;
  private readonly selector_modalTitleByMode: (isCreating: boolean) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = RecurringEventEditModalPOM_StandardSelector;

    // Modal container
    this.selector_modalContainer = this.rootSelector;

    // ProjectionEventForm root inside modal
    this.selector_projectionEventFormRoot = `${this.rootSelector} [data-testid="projection-event-form"]`;

    // Modal title selectors
    this.selector_createModalTitle = `:text("Create Recurring Event Rule")`;
    this.selector_editModalTitle = `:text("Edit Recurring Event Rule")`;

    // Dynamic modal title selector based on mode
    this.selector_modalTitleByMode = (isCreating: boolean) =>
      isCreating
        ? `:text("Create Recurring Event Rule")`
        : `:text("Edit Recurring Event Rule")`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the RecurringEventEditModal is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal container is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const modal = page.locator(RecurringEventEditModalPOM_StandardSelector);
      return await modal.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a RecurringEventEditModalPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<RecurringEventEditModalPOM>} A RecurringEventEditModalPOM instance
   * @throws {Error} When the recurring event edit modal is not visible
   */
  static async getPOM(page: Page): Promise<RecurringEventEditModalPOM> {
    const isVisible = await RecurringEventEditModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'RecurringEventEditModalPOM: Cannot instantiate - modal is not visible. ' +
          `Expected element [${RecurringEventEditModalPOM_StandardSelector}] to be visible.`
      );
    }

    return new RecurringEventEditModalPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the recurring event edit modal container is currently visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  async isModalContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_modalContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the ProjectionEventForm is visible inside the modal body
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the ProjectionEventForm is visible
   */
  async isProjectionEventFormVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_projectionEventFormRoot).isVisible({ timeout });
  }

  /**
   * @desc Check whether the 'Create Recurring Event Rule' title is visible (i.e., modal is in create mode)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the create mode title is visible
   */
  async isCreateModalTitleVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_createModalTitle).isVisible({ timeout });
  }

  /**
   * @desc Check whether the 'Edit Recurring Event Rule' title is visible (i.e., modal is in edit mode)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the edit mode title is visible
   */
  async isEditModalTitleVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_editModalTitle).isVisible({ timeout });
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Dismiss/close the recurring event edit modal by triggering the onClose callback
   * Expected outcome is that the modal will be closed and removed from the DOM
   * @throws {Error} When the modal container is not visible or cannot be dismissed
   */
  async dismissModal(): Promise<void> {
    const isVisible = await this.isModalContainerVisible();
    if (!isVisible) {
      throw new Error(
        `RecurringEventEditModalPOM: Cannot dismiss modal - modal container is not visible. Selector: ${this.selector_modalContainer}`
      );
    }
    await this.page.keyboard.press('Escape');
  }

  /**
   * @desc Click the modal title element (e.g., to verify focus or interaction)
   * Expected outcome is that the modal title element receives a click interaction
   * @param {boolean} isCreating - Whether the modal is in create mode (true) or edit mode (false)
   * @throws {Error} When the modal title element is not visible
   */
  async clickModalTitle(isCreating: boolean): Promise<void> {
    const selector = this.selector_modalTitleByMode(isCreating);
    const isVisible = await this.page.locator(selector).isVisible();
    if (!isVisible) {
      throw new Error(
        `RecurringEventEditModalPOM: Cannot click modal title - element is not visible. Selector: ${selector}`
      );
    }
    await this.page.locator(selector).click();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Get the data-testid attribute value from the modal root element
   * @returns {Promise<string>} The data-testid attribute value exactly as it appears
   * @throws {Error} When the modal container is not accessible or the attribute value is null
   */
  async getModalContainerTestId(): Promise<string> {
    await this.page.locator(this.selector_modalContainer).isVisible();
    const value = await this.page.locator(this.selector_modalContainer).getAttribute('data-testid');

    if (value === null) {
      throw new Error(
        `RecurringEventEditModalPOM: data-testid attribute is null on modal container. Selector: ${this.selector_modalContainer}`
      );
    }

    return value;
  }

  /**
   * @desc Get the position and dimensions of the modal container
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the modal container
   * @throws {Error} When the modal container is not visible or the bounding box cannot be retrieved
   */
  async getModalContainerBoundingBox(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> {
    await this.page.locator(this.selector_modalContainer).isVisible();
    const boundingBox = await this.page.locator(this.selector_modalContainer).boundingBox();

    if (!boundingBox) {
      throw new Error(
        `RecurringEventEditModalPOM: Unable to retrieve bounding box for modal container. Selector: ${this.selector_modalContainer}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Get the inner HTML content of the ProjectionEventForm rendered inside the modal
   * @returns {Promise<string>} The inner HTML of the ProjectionEventForm exactly as it appears
   * @throws {Error} When the ProjectionEventForm is not accessible or its inner HTML is null
   */
  async getProjectionEventFormInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_projectionEventFormRoot).isVisible();
    const html = await this.page.locator(this.selector_projectionEventFormRoot).innerHTML();

    if (html === null) {
      throw new Error(
        `RecurringEventEditModalPOM: Inner HTML is null for ProjectionEventForm. Selector: ${this.selector_projectionEventFormRoot}`
      );
    }

    return html;
  }

  /**
   * @desc Get the visible text of the modal title (either 'Create Recurring Event Rule' or 'Edit Recurring Event Rule')
   * @param {boolean} isCreating - Whether the modal is in create mode (true) or edit mode (false)
   * @returns {Promise<string>} The modal title text exactly as it appears in the UI
   * @throws {Error} When the modal title element is not accessible or its text content is null
   */
  async getModalTitleText(isCreating: boolean): Promise<string> {
    const selector = this.selector_modalTitleByMode(isCreating);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `RecurringEventEditModalPOM: Modal title text content is null. Selector: ${selector}`
      );
    }

    return text;
  }
}