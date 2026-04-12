/**
 * Page Object Model: ConfirmationModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ConfirmationModalPOM_StandardSelector = '[data-testid="confirmation-modal"]';

export class ConfirmationModalPOM {
  private readonly page: Page;

  // === SELECTORS ===
  private readonly rootSelector: string;
  private readonly selector_confirmationModalContent: string;
  private readonly selector_confirmButton: string;
  private readonly selector_cancelButton: string;
  private readonly selector_confirmationModalTitle: string;
  private readonly selector_confirmationModalDescription: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = ConfirmationModalPOM_StandardSelector;
    this.selector_confirmationModalContent = this.rootSelector;
    this.selector_confirmButton = `${this.rootSelector} [data-testid="confirmation-modal-confirm"]`;
    this.selector_cancelButton = `${this.rootSelector} [data-testid="confirmation-modal-cancel"]`;
    this.selector_confirmationModalTitle = `${this.rootSelector} [data-testid="confirmation-modal-title"]`;
    this.selector_confirmationModalDescription = `${this.rootSelector} [data-testid="confirmation-modal-description"]`;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the ConfirmationModal is currently visible in the DOM
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal content container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const modal = page.locator(ConfirmationModalPOM_StandardSelector);
      return await modal.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a ConfirmationModalPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<ConfirmationModalPOM>} A ConfirmationModalPOM instance
   * @throws {Error} When the confirmation modal is not visible
   */
  static async getPOM(page: Page): Promise<ConfirmationModalPOM> {
    const isVisible = await ConfirmationModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ConfirmationModalPOM: Cannot instantiate - confirmation modal is not visible. ' +
          `Expected element [${ConfirmationModalPOM_StandardSelector}] to be visible.`
      );
    }

    return new ConfirmationModalPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Checks whether the confirmation modal dialog content is currently visible/rendered in the DOM,
   * reflecting the isOpen state
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal content container is visible
   */
  async isConfirmationModalVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_confirmationModalContent)
      .isVisible({ timeout });
  }

  /**
   * @desc Checks whether the Confirm button is currently enabled. Returns false when isLoading is true
   * (disabled attribute is present)
   * @returns {Promise<boolean>} True if the Confirm button is enabled
   */
  async isConfirmButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_confirmButton).isEnabled();
  }

  /**
   * @desc Checks whether the Cancel button is currently enabled. Returns false when isLoading is true
   * (disabled attribute is present)
   * @returns {Promise<boolean>} True if the Cancel button is enabled
   */
  async isCancelButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_cancelButton).isEnabled();
  }

  // === ACTION METHODS ===

  /**
   * @desc Clicks the Confirm button to trigger the onConfirm callback.
   * Label shows confirmText prop (default: 'Confirm') or 'Processing...' while loading.
   * Disabled when isLoading is true.
   * Expected outcome is that the onConfirm callback will be invoked.
   * @throws {Error} When the Confirm button is not visible or not interactable
   */
  async clickConfirmButton(): Promise<void> {
    await this.page.locator(this.selector_confirmButton).click();
  }

  /**
   * @desc Clicks the Cancel button to dismiss the modal without confirming.
   * Triggers the onClose callback. Disabled when isLoading is true.
   * Expected outcome is that the modal will be dismissed without confirming.
   * @throws {Error} When the Cancel button is not visible or not interactable
   */
  async clickCancelButton(): Promise<void> {
    await this.page.locator(this.selector_cancelButton).click();
  }

  /**
   * @desc Dismisses the confirmation modal dialog by interacting with the overlay or close control,
   * triggering the onClose callback via onOpenChange.
   * Expected outcome is that the modal will be closed.
   * @throws {Error} When the modal content container is not visible
   */
  async dismissModal(): Promise<void> {
    await this.page.keyboard.press('Escape');
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Extracts the visible title text rendered inside the DialogTitle,
   * driven by the title prop passed to the modal
   * @returns {Promise<string>} The title text exactly as it appears in the UI
   * @throws {Error} When the title content is not accessible or null
   */
  async getConfirmationModalTitleText(): Promise<string> {
    await this.page.locator(this.selector_confirmationModalTitle).isVisible();
    const text = await this.page
      .locator(this.selector_confirmationModalTitle)
      .textContent();

    if (text === null) {
      throw new Error(
        `ConfirmationModalPOM: Title content is null. Selector: ${this.selector_confirmationModalTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Extracts the visible description text rendered inside the DialogDescription,
   * driven by the description prop passed to the modal
   * @returns {Promise<string>} The description text exactly as it appears in the UI
   * @throws {Error} When the description content is not accessible or null
   */
  async getConfirmationModalDescriptionText(): Promise<string> {
    await this.page.locator(this.selector_confirmationModalDescription).isVisible();
    const text = await this.page
      .locator(this.selector_confirmationModalDescription)
      .textContent();

    if (text === null) {
      throw new Error(
        `ConfirmationModalPOM: Description content is null. Selector: ${this.selector_confirmationModalDescription}`
      );
    }

    return text;
  }

  /**
   * @desc Extracts the label text of the Confirm button — shows 'Processing...' when isLoading is true,
   * otherwise shows the confirmText prop value (default: 'Confirm')
   * @returns {Promise<string>} The Confirm button label text exactly as it appears in the UI
   * @throws {Error} When the Confirm button text content is not accessible or null
   */
  async getConfirmButtonText(): Promise<string> {
    await this.page.locator(this.selector_confirmButton).isVisible();
    const text = await this.page
      .locator(this.selector_confirmButton)
      .textContent();

    if (text === null) {
      throw new Error(
        `ConfirmationModalPOM: Confirm button text content is null. Selector: ${this.selector_confirmButton}`
      );
    }

    return text;
  }

  /**
   * @desc Extracts the label text of the Cancel button, driven by the cancelText prop (default: 'Cancel')
   * @returns {Promise<string>} The Cancel button label text exactly as it appears in the UI
   * @throws {Error} When the Cancel button text content is not accessible or null
   */
  async getCancelButtonText(): Promise<string> {
    await this.page.locator(this.selector_cancelButton).isVisible();
    const text = await this.page
      .locator(this.selector_cancelButton)
      .textContent();

    if (text === null) {
      throw new Error(
        `ConfirmationModalPOM: Cancel button text content is null. Selector: ${this.selector_cancelButton}`
      );
    }

    return text;
  }

  /**
   * @desc Reads the 'disabled' attribute on the Confirm button to assert its non-interactive state
   * during async operations (isLoading === true)
   * @returns {Promise<string | null>} The value of the 'disabled' attribute, or null if not present
   */
  async getConfirmButtonDisabledAttribute(): Promise<string | null> {
    return await this.page
      .locator(this.selector_confirmButton)
      .getAttribute('disabled');
  }

  /**
   * @desc Reads the 'disabled' attribute on the Cancel button to assert its non-interactive state
   * during async operations (isLoading === true)
   * @returns {Promise<string | null>} The value of the 'disabled' attribute, or null if not present
   */
  async getCancelButtonDisabledAttribute(): Promise<string | null> {
    return await this.page
      .locator(this.selector_cancelButton)
      .getAttribute('disabled');
  }

  /**
   * @desc Retrieves the CSS class list of the Confirm button to assert the applied variant style
   * (e.g., destructive, default, outline)
   * @returns {Promise<string | null>} The full class attribute string of the Confirm button, or null if not present
   */
  async getConfirmButtonClassList(): Promise<string | null> {
    return await this.page
      .locator(this.selector_confirmButton)
      .getAttribute('class');
  }

  /**
   * @desc Gets the position and dimensions of the modal content container for layout or overlap assertions
   * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>}
   * The bounding box of the modal content container, or null if not visible
   */
  async getConfirmationModalBoundingBox(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null> {
    return await this.page
      .locator(this.selector_confirmationModalContent)
      .boundingBox();
  }
}