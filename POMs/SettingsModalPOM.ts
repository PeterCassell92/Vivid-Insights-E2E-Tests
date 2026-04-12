/**
 * Page Object Model: SettingsModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const SettingsModalPOM_StandardSelector = '[data-testid="settings-modal-overlay"]';

export class SettingsModalPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_modalOverlay: string;
  private readonly selector_modalContainer: string;
  private readonly selector_modalTitle: string;
  private readonly selector_closeButton: string;
  private readonly selector_errorMessage: string;
  private readonly selector_currencySelect: string;
  private readonly selector_dateFormatSelect: string;
  private readonly selector_cancelButton: string;
  private readonly selector_saveButton: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = SettingsModalPOM_StandardSelector;

    this.selector_modalOverlay = `${this.rootSelector}`;
    this.selector_modalContainer = `${this.rootSelector} [data-testid="settings-modal"]`;
    this.selector_modalTitle = `${this.rootSelector} [data-testid="settings-modal-title"]`;
    this.selector_closeButton = `${this.rootSelector} [data-testid="settings-modal-close-button"]`;
    this.selector_errorMessage = `${this.rootSelector} [data-testid="settings-error"]`;
    this.selector_currencySelect = `${this.rootSelector} [data-testid="currency-select"]`;
    this.selector_dateFormatSelect = `${this.rootSelector} [data-testid="date-format-select"]`;
    this.selector_cancelButton = `${this.rootSelector} [data-testid="settings-cancel-button"]`;
    this.selector_saveButton = `${this.rootSelector} [data-testid="settings-save-button"]`;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the Settings Modal overlay is currently visible in the DOM
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal overlay is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const overlay = page.locator(SettingsModalPOM_StandardSelector);
      return await overlay.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates modal visibility and returns a SettingsModalPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<SettingsModalPOM>} A SettingsModalPOM instance
   * @throws {Error} When the settings modal overlay is not visible
   */
  static async getPOM(page: Page): Promise<SettingsModalPOM> {
    const isVisible = await SettingsModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'SettingsModalPOM: Cannot instantiate - settings modal is not visible. ' +
          `Expected element [${SettingsModalPOM_StandardSelector}] to be visible.`
      );
    }

    return new SettingsModalPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Check whether the modal overlay is visible (i.e., isOpen is true and the overlay is rendered in the DOM)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the overlay is visible
   */
  async isModalOverlayVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_modalOverlay).isVisible({ timeout });
  }

  /**
   * @desc Check whether the modal card container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  async isModalContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_modalContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the error message banner is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the error message is visible
   */
  async isErrorMessageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_errorMessage).isVisible({ timeout });
  }

  /**
   * @desc Check whether the save button is currently disabled
   * @returns {Promise<boolean>} True if the save button is disabled (i.e., form is submitting)
   */
  async isSaveButtonDisabled(): Promise<boolean> {
    return await this.page.locator(this.selector_saveButton).isDisabled();
  }

  /**
   * @desc Check whether the cancel button is currently disabled
   * @returns {Promise<boolean>} True if the cancel button is disabled (i.e., form is submitting)
   */
  async isCancelButtonDisabled(): Promise<boolean> {
    return await this.page.locator(this.selector_cancelButton).isDisabled();
  }

  // === ACTION METHODS ===

  /**
   * @desc Dismiss the modal by clicking on the full-screen backdrop overlay
   * Expected outcome is that the modal will close if clicking outside the modal card
   */
  async clickModalOverlay(): Promise<void> {
    await this.page.locator(this.selector_modalOverlay).click({ position: { x: 5, y: 5 } });
  }

  /**
   * @desc Clicks the close (X) button in the modal header
   * Expected outcome is that the modal will close and settings will be reset to current values
   */
  async clickCloseButton(): Promise<void> {
    await this.page.locator(this.selector_closeButton).click();
  }

  /**
   * @desc Clicks the Cancel button in the modal footer
   * Expected outcome is that the modal will close and settings will be reset to current values
   */
  async clickCancelButton(): Promise<void> {
    await this.page.locator(this.selector_cancelButton).click();
  }

  /**
   * @desc Clicks the Save Settings button to submit the settings form
   * Expected outcome is that the settings will be saved and the modal will close on success
   */
  async clickSaveButton(): Promise<void> {
    await this.page.locator(this.selector_saveButton).click();
  }

  /**
   * @desc Selects a currency option from the currency dropdown
   * @param {'GBP' | 'USD'} currency - The currency value to select
   */
  async selectCurrency(currency: 'GBP' | 'USD'): Promise<void> {
    await this.page.locator(this.selector_currencySelect).selectOption(currency);
  }

  /**
   * @desc Selects a date format option from the date format dropdown
   * @param {'UK' | 'US'} dateFormat - The date format value to select
   */
  async selectDateFormat(dateFormat: 'UK' | 'US'): Promise<void> {
    await this.page.locator(this.selector_dateFormatSelect).selectOption(dateFormat);
  }

  /**
   * @desc Scrolls within the modal card container
   * @param {number} deltaX - Horizontal scroll delta in pixels
   * @param {number} deltaY - Vertical scroll delta in pixels
   */
  async scrollModalContainer(deltaX: number, deltaY: number): Promise<void> {
    await this.page.locator(this.selector_modalContainer).evaluate(
      (el, { dx, dy }) => {
        el.scrollBy(dx, dy);
      },
      { dx: deltaX, dy: deltaY }
    );
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Get the CSS class list of the overlay to verify backdrop styling (e.g., fixed, bg-black, z-50)
   * @returns {Promise<string>} The full className string of the overlay element exactly as it appears
   * @throws {Error} When the overlay element class list is not accessible or null
   */
  async getModalOverlayClassList(): Promise<string> {
    await this.page.locator(this.selector_modalOverlay).isVisible();
    const classList = await this.page.locator(this.selector_modalOverlay).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `SettingsModalPOM: Modal overlay class list is null. Selector: ${this.selector_modalOverlay}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the position and dimensions of the modal dialog card for layout/alignment assertions
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the modal container
   * @throws {Error} When the modal container bounding box is not accessible
   */
  async getModalContainerBoundingBox(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> {
    const boundingBox = await this.page.locator(this.selector_modalContainer).boundingBox();

    if (!boundingBox) {
      throw new Error(
        `SettingsModalPOM: Modal container bounding box is null - element may not be visible or rendered. Selector: ${this.selector_modalContainer}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Get the full inner HTML of the modal container to inspect all rendered child elements
   * @returns {Promise<string>} The inner HTML of the modal container exactly as rendered
   * @throws {Error} When the modal container inner HTML is not accessible or null
   */
  async getModalContainerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_modalContainer).isVisible();
    const innerHTML = await this.page.locator(this.selector_modalContainer).innerHTML();

    if (!innerHTML) {
      throw new Error(
        `SettingsModalPOM: Modal container inner HTML is null or empty. Selector: ${this.selector_modalContainer}`
      );
    }

    return innerHTML;
  }

  /**
   * @desc Gets the currently selected currency value from the currency dropdown
   * @returns {Promise<string>} The selected currency value exactly as it appears
   * @throws {Error} When the currency select value is not accessible or null
   */
  async getSelectedCurrency(): Promise<string> {
    await this.page.locator(this.selector_currencySelect).isVisible();
    const value = await this.page.locator(this.selector_currencySelect).inputValue();

    if (!value) {
      throw new Error(
        `SettingsModalPOM: Currency select value is null or empty. Selector: ${this.selector_currencySelect}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the currently selected date format value from the date format dropdown
   * @returns {Promise<string>} The selected date format value exactly as it appears
   * @throws {Error} When the date format select value is not accessible or null
   */
  async getSelectedDateFormat(): Promise<string> {
    await this.page.locator(this.selector_dateFormatSelect).isVisible();
    const value = await this.page.locator(this.selector_dateFormatSelect).inputValue();

    if (!value) {
      throw new Error(
        `SettingsModalPOM: Date format select value is null or empty. Selector: ${this.selector_dateFormatSelect}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the error message text currently displayed in the error banner
   * @returns {Promise<string>} The error message text exactly as it appears
   * @throws {Error} When the error message content is not accessible or null
   */
  async getErrorMessageText(): Promise<string> {
    await this.page.locator(this.selector_errorMessage).isVisible();
    const text = await this.page.locator(this.selector_errorMessage).textContent();

    if (text === null) {
      throw new Error(
        `SettingsModalPOM: Error message text content is null. Selector: ${this.selector_errorMessage}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text content of the save button (e.g., 'Save Settings' or 'Saving...')
   * @returns {Promise<string>} The save button label exactly as it appears
   * @throws {Error} When the save button text content is not accessible or null
   */
  async getSaveButtonText(): Promise<string> {
    await this.page.locator(this.selector_saveButton).isVisible();
    const text = await this.page.locator(this.selector_saveButton).textContent();

    if (text === null) {
      throw new Error(
        `SettingsModalPOM: Save button text content is null. Selector: ${this.selector_saveButton}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the modal title text
   * @returns {Promise<string>} The modal title text exactly as it appears
   * @throws {Error} When the modal title text content is not accessible or null
   */
  async getModalTitleText(): Promise<string> {
    await this.page.locator(this.selector_modalTitle).isVisible();
    const text = await this.page.locator(this.selector_modalTitle).textContent();

    if (text === null) {
      throw new Error(
        `SettingsModalPOM: Modal title text content is null. Selector: ${this.selector_modalTitle}`
      );
    }

    return text;
  }
}