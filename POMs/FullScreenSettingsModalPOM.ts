/**
 * Page Object Model: FullScreenSettingsModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const FullScreenSettingsModalPOM_StandardSelector =
  '[data-testid="fullscreen-settings-modal-overlay"]';

export class FullScreenSettingsModalPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_modalOverlay: string;
  private readonly selector_modalContainer: string;
  private readonly selector_modalTitle: string;
  private readonly selector_closeButton: string;
  private readonly selector_cancelButton: string;
  private readonly selector_saveButton: string;
  private readonly selector_errorBanner: string;
  private readonly selector_successBanner: string;
  private readonly selector_currencySelect: string;
  private readonly selector_dateFormatSelect: string;
  private readonly selector_ukPresetButton: string;
  private readonly selector_usPresetButton: string;
  private readonly selector_defaultBankAccountSelect: string;
  private readonly selector_bankAccountItems: string;
  private readonly selector_bankAccountItem: (id: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = FullScreenSettingsModalPOM_StandardSelector;

    // Static selectors
    this.selector_modalOverlay = this.rootSelector;
    this.selector_modalContainer = `${this.rootSelector} [data-testid="fullscreen-settings-modal"]`;
    this.selector_modalTitle = `${this.rootSelector} [data-testid="settings-modal-title"]`;
    this.selector_closeButton = `${this.rootSelector} [data-testid="settings-close-button"]`;
    this.selector_cancelButton = `${this.rootSelector} [data-testid="settings-cancel-button"]`;
    this.selector_saveButton = `${this.rootSelector} [data-testid="settings-save-button"]`;
    this.selector_errorBanner = `${this.rootSelector} [data-testid="settings-error"]`;
    this.selector_successBanner = `${this.rootSelector} [data-testid="settings-success"]`;
    this.selector_currencySelect = `${this.rootSelector} [data-testid="currency-select"]`;
    this.selector_dateFormatSelect = `${this.rootSelector} [data-testid="date-format-select"]`;
    this.selector_ukPresetButton = `${this.rootSelector} [data-testid="uk-preset-button"]`;
    this.selector_usPresetButton = `${this.rootSelector} [data-testid="us-preset-button"]`;
    this.selector_defaultBankAccountSelect = `${this.rootSelector} [data-testid="default-bank-account-select"]`;
    this.selector_bankAccountItems = `${this.rootSelector} [data-testid^="bank-account-item-"]`;

    // Dynamic selectors
    this.selector_bankAccountItem = (id: string) =>
      `${this.rootSelector} [data-testid="bank-account-item-${id}"]`;
  }

  // ========================================================================
  // Static Methods
  // ========================================================================

  /**
   * @desc Checks if the FullScreenSettingsModal overlay is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal overlay is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const overlay = page.locator(FullScreenSettingsModalPOM_StandardSelector);
      return await overlay.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method to get a FullScreenSettingsModalPOM instance
   * Validates that the modal overlay is visible before returning instance
   * @param page - Playwright Page instance
   * @returns {Promise<FullScreenSettingsModalPOM>} FullScreenSettingsModalPOM instance
   * @throws {Error} When the modal overlay is not visible
   */
  static async getPOM(page: Page): Promise<FullScreenSettingsModalPOM> {
    const isVisible = await FullScreenSettingsModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'FullScreenSettingsModalPOM: Cannot instantiate - modal overlay is not visible. ' +
          `Expected element [${FullScreenSettingsModalPOM_StandardSelector}] to be visible.`
      );
    }

    return new FullScreenSettingsModalPOM(page);
  }

  // ========================================================================
  // Visibility and State Methods
  // ========================================================================

  /**
   * @desc Check whether the full-screen overlay is currently rendered and visible
   * @returns {Promise<boolean>} True if the overlay is visible
   */
  async isModalOverlayVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_modalOverlay).isVisible();
  }

  /**
   * @desc Check whether the white modal card panel is visible on screen
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  async isModalContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_modalContainer).isVisible();
  }

  /**
   * @desc Check whether the modal title heading is visible
   * @returns {Promise<boolean>} True if the modal title is visible
   */
  async isModalTitleVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_modalTitle).isVisible();
  }

  /**
   * @desc Check whether the close button is visible in the modal header
   * @returns {Promise<boolean>} True if the close button is visible
   */
  async isCloseButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_closeButton).isVisible();
  }

  /**
   * @desc Check whether the close (X) button is enabled
   * @returns {Promise<boolean>} True if the close button is enabled (not disabled)
   */
  async isCloseButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_closeButton).isEnabled();
  }

  /**
   * @desc Check whether the cancel button is visible in the modal footer
   * @returns {Promise<boolean>} True if the cancel button is visible
   */
  async isCancelButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_cancelButton).isVisible();
  }

  /**
   * @desc Check whether the cancel button is enabled
   * @returns {Promise<boolean>} True if the cancel button is enabled (not disabled)
   */
  async isCancelButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_cancelButton).isEnabled();
  }

  /**
   * @desc Check whether the save button is visible in the modal footer
   * @returns {Promise<boolean>} True if the save button is visible
   */
  async isSaveButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_saveButton).isVisible();
  }

  /**
   * @desc Check whether the save button is enabled
   * @returns {Promise<boolean>} True if the save button is enabled (not disabled)
   */
  async isSaveButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_saveButton).isEnabled();
  }

  /**
   * @desc Check whether the error banner is currently visible/rendered
   * @returns {Promise<boolean>} True if the error banner is visible
   */
  async isErrorBannerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_errorBanner).isVisible();
  }

  /**
   * @desc Check whether the success banner is currently visible/rendered
   * @returns {Promise<boolean>} True if the success banner is visible
   */
  async isSuccessBannerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_successBanner).isVisible();
  }

  /**
   * @desc Check whether the date format select trigger is visible on screen
   * @returns {Promise<boolean>} True if the date format select is visible
   */
  async isDateFormatSelectVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_dateFormatSelect).isVisible();
  }

  /**
   * @desc Check whether the date format select trigger is enabled
   * @returns {Promise<boolean>} True if the date format select is enabled (not disabled)
   */
  async isDateFormatSelectEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_dateFormatSelect).isEnabled();
  }

  /**
   * @desc Check whether the currency select trigger is visible on screen
   * @returns {Promise<boolean>} True if the currency select is visible
   */
  async isCurrencySelectVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_currencySelect).isVisible();
  }

  /**
   * @desc Check whether the currency select trigger is enabled
   * @returns {Promise<boolean>} True if the currency select is enabled (not disabled)
   */
  async isCurrencySelectEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_currencySelect).isEnabled();
  }

  /**
   * @desc Check whether the UK preset button is visible on screen
   * @returns {Promise<boolean>} True if the UK preset button is visible
   */
  async isUkPresetButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_ukPresetButton).isVisible();
  }

  /**
   * @desc Check whether the UK preset button is enabled
   * @returns {Promise<boolean>} True if the UK preset button is enabled (not disabled)
   */
  async isUkPresetButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_ukPresetButton).isEnabled();
  }

  /**
   * @desc Check whether the US preset button is visible on screen
   * @returns {Promise<boolean>} True if the US preset button is visible
   */
  async isUsPresetButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_usPresetButton).isVisible();
  }

  /**
   * @desc Check whether the US preset button is enabled
   * @returns {Promise<boolean>} True if the US preset button is enabled (not disabled)
   */
  async isUsPresetButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_usPresetButton).isEnabled();
  }

  /**
   * @desc Check whether the default bank account select is rendered and visible
   * @returns {Promise<boolean>} True if the default bank account select is visible
   */
  async isDefaultBankAccountSelectVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_defaultBankAccountSelect).isVisible();
  }

  /**
   * @desc Check whether the default bank account select trigger is enabled
   * @returns {Promise<boolean>} True if the default bank account select is enabled (not disabled)
   */
  async isDefaultBankAccountSelectEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_defaultBankAccountSelect).isEnabled();
  }

  /**
   * @desc Check whether a specific bank account row is visible
   * @param {string} id - The bank account ID used in the dynamic data-testid
   * @returns {Promise<boolean>} True if the bank account item is visible
   */
  async isBankAccountItemVisible(id: string): Promise<boolean> {
    return await this.page.locator(this.selector_bankAccountItem(id)).isVisible();
  }

  // ========================================================================
  // Data Retrieval Methods
  // ========================================================================

  /**
   * @desc Get the CSS class list of the overlay element
   * @returns {Promise<string>} The class attribute value of the modal overlay
   * @throws {Error} When the overlay class attribute is not accessible
   */
  async getModalOverlayClassList(): Promise<string> {
    const classValue = await this.page
      .locator(this.selector_modalOverlay)
      .getAttribute('class');

    if (classValue === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: class attribute is null for modal overlay. Selector: ${this.selector_modalOverlay}`
      );
    }

    return classValue;
  }

  /**
   * @desc Get the visible text content of the modal heading
   * @returns {Promise<string>} The modal title text — expected static value: 'Application Settings'
   * @throws {Error} When the modal title text content is not accessible
   */
  async getModalTitleText(): Promise<string> {
    await this.page.locator(this.selector_modalTitle).isVisible();
    const text = await this.page.locator(this.selector_modalTitle).textContent();

    if (text === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: Modal title text content is null. Selector: ${this.selector_modalTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text label of the cancel button
   * @returns {Promise<string>} The cancel button text — expected value: 'Cancel'
   * @throws {Error} When the cancel button text content is not accessible
   */
  async getCancelButtonText(): Promise<string> {
    await this.page.locator(this.selector_cancelButton).isVisible();
    const text = await this.page.locator(this.selector_cancelButton).textContent();

    if (text === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: Cancel button text content is null. Selector: ${this.selector_cancelButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text label of the save button
   * @returns {Promise<string>} The save button text — 'Save Settings' normally, or 'Saving...' during submission
   * @throws {Error} When the save button text content is not accessible
   */
  async getSaveButtonText(): Promise<string> {
    await this.page.locator(this.selector_saveButton).isVisible();
    const text = await this.page.locator(this.selector_saveButton).textContent();

    if (text === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: Save button text content is null. Selector: ${this.selector_saveButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the error message text displayed in the error banner
   * @returns {Promise<string>} The error message text exactly as it appears
   * @throws {Error} When the error banner text content is not accessible
   */
  async getErrorBannerText(): Promise<string> {
    await this.page.locator(this.selector_errorBanner).isVisible();
    const text = await this.page.locator(this.selector_errorBanner).textContent();

    if (text === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: Error banner text content is null. Selector: ${this.selector_errorBanner}`
      );
    }

    return text;
  }

  /**
   * @desc Get the inner HTML of the error banner
   * @returns {Promise<string>} The inner HTML of the error banner
   * @throws {Error} When the error banner inner HTML is not accessible
   */
  async getErrorBannerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_errorBanner).isVisible();
    const html = await this.page.locator(this.selector_errorBanner).innerHTML();

    if (html === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: Error banner innerHTML is null. Selector: ${this.selector_errorBanner}`
      );
    }

    return html;
  }

  /**
   * @desc Get the success message text displayed in the success banner
   * @returns {Promise<string>} The success message text exactly as it appears
   * @throws {Error} When the success banner text content is not accessible
   */
  async getSuccessBannerText(): Promise<string> {
    await this.page.locator(this.selector_successBanner).isVisible();
    const text = await this.page.locator(this.selector_successBanner).textContent();

    if (text === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: Success banner text content is null. Selector: ${this.selector_successBanner}`
      );
    }

    return text;
  }

  /**
   * @desc Get the currently displayed text value of the currency select trigger
   * @returns {Promise<string>} The currency select trigger text (e.g. 'GBP (£) - British Pound')
   * @throws {Error} When the currency select text content is not accessible
   */
  async getCurrencySelectText(): Promise<string> {
    await this.page.locator(this.selector_currencySelect).isVisible();
    const text = await this.page.locator(this.selector_currencySelect).textContent();

    if (text === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: Currency select text content is null. Selector: ${this.selector_currencySelect}`
      );
    }

    return text;
  }

  /**
   * @desc Get the currently displayed text value of the date format select trigger
   * @returns {Promise<string>} The date format select trigger text (e.g. 'UK Format (DD/MM/YYYY)')
   * @throws {Error} When the date format select text content is not accessible
   */
  async getDateFormatSelectText(): Promise<string> {
    await this.page.locator(this.selector_dateFormatSelect).isVisible();
    const text = await this.page.locator(this.selector_dateFormatSelect).textContent();

    if (text === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: Date format select text content is null. Selector: ${this.selector_dateFormatSelect}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text content of the UK preset button
   * @returns {Promise<string>} The UK preset button text (e.g. 'United Kingdom GBP • DD/MM/YYYY')
   * @throws {Error} When the UK preset button text content is not accessible
   */
  async getUkPresetButtonText(): Promise<string> {
    await this.page.locator(this.selector_ukPresetButton).isVisible();
    const text = await this.page.locator(this.selector_ukPresetButton).textContent();

    if (text === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: UK preset button text content is null. Selector: ${this.selector_ukPresetButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the visible text content of the US preset button
   * @returns {Promise<string>} The US preset button text (e.g. 'United States USD • MM/DD/YYYY')
   * @throws {Error} When the US preset button text content is not accessible
   */
  async getUsPresetButtonText(): Promise<string> {
    await this.page.locator(this.selector_usPresetButton).isVisible();
    const text = await this.page.locator(this.selector_usPresetButton).textContent();

    if (text === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: US preset button text content is null. Selector: ${this.selector_usPresetButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the currently displayed text value of the default bank account select trigger
   * @returns {Promise<string>} The default bank account select trigger text
   * @throws {Error} When the default bank account select text content is not accessible
   */
  async getDefaultBankAccountSelectText(): Promise<string> {
    await this.page.locator(this.selector_defaultBankAccountSelect).isVisible();
    const text = await this.page
      .locator(this.selector_defaultBankAccountSelect)
      .textContent();

    if (text === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: Default bank account select text content is null. Selector: ${this.selector_defaultBankAccountSelect}`
      );
    }

    return text;
  }

  /**
   * @desc Get the data-testid attribute of a specific bank account row
   * @param {string} id - The bank account ID used in the dynamic data-testid
   * @returns {Promise<string>} The data-testid attribute value of the bank account item
   * @throws {Error} When the data-testid attribute is not accessible
   */
  async getBankAccountItemAttribute(id: string): Promise<string> {
    const selector = this.selector_bankAccountItem(id);
    await this.page.locator(selector).isVisible();
    const attribute = await this.page.locator(selector).getAttribute('data-testid');

    if (attribute === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: data-testid attribute is null for bank account item "${id}". Selector: ${selector}`
      );
    }

    return attribute;
  }

  /**
   * @desc Get the inner HTML of a specific bank account row
   * @param {string} id - The bank account ID used in the dynamic data-testid
   * @returns {Promise<string>} The inner HTML of the bank account item row
   * @throws {Error} When the bank account item inner HTML is not accessible
   */
  async getBankAccountItemInnerHtml(id: string): Promise<string> {
    const selector = this.selector_bankAccountItem(id);
    await this.page.locator(selector).isVisible();
    const html = await this.page.locator(selector).innerHTML();

    if (html === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: innerHTML is null for bank account item "${id}". Selector: ${selector}`
      );
    }

    return html;
  }

  /**
   * @desc Get the visible text content of a specific bank account row
   * @param {string} id - The bank account ID used in the dynamic data-testid
   * @returns {Promise<string>} The text content of the bank account item row
   * @throws {Error} When the bank account item text content is not accessible
   */
  async getBankAccountItemText(id: string): Promise<string> {
    const selector = this.selector_bankAccountItem(id);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: Text content is null for bank account item "${id}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Count the total number of bank account item rows currently rendered in the list
   * @returns {Promise<number>} The count of bank account item rows
   */
  async getBankAccountItemCount(): Promise<number> {
    return await this.page.locator(this.selector_bankAccountItems).count();
  }

  /**
   * @desc Get the position and dimensions of the modal card panel
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the modal container
   * @throws {Error} When the modal container bounding box is not accessible
   */
  async getModalContainerBoundingBox(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
  }> {
    const boundingBox = await this.page
      .locator(this.selector_modalContainer)
      .boundingBox();

    if (boundingBox === null) {
      throw new Error(
        `FullScreenSettingsModalPOM: Bounding box is null for modal container. Selector: ${this.selector_modalContainer}`
      );
    }

    return boundingBox;
  }

  // ========================================================================
  // Action Methods
  // ========================================================================

  /**
   * @desc Click the X icon button in the modal header to cancel and close the modal
   * Expected outcome is that the form state is reset and the modal closes
   */
  async clickCloseButton(): Promise<void> {
    await this.page.locator(this.selector_closeButton).click();
  }

  /**
   * @desc Click the footer Cancel button to reset form state and close the modal
   * Expected outcome is that the form state is reset and the modal closes
   */
  async clickCancelButton(): Promise<void> {
    await this.page.locator(this.selector_cancelButton).click();
  }

  /**
   * @desc Click the footer Save Settings button to submit the form
   * Expected outcome is that the currency, date format, and default bank account settings are persisted
   */
  async clickSaveButton(): Promise<void> {
    await this.page.locator(this.selector_saveButton).click();
  }

  /**
   * @desc Click the UK preset button to automatically set currency to GBP and date format to UK
   * Expected outcome is that currency is set to GBP and date format is set to UK (DD/MM/YYYY)
   */
  async clickUkPresetButton(): Promise<void> {
    await this.page.locator(this.selector_ukPresetButton).click();
  }

  /**
   * @desc Click the US preset button to automatically set currency to USD and date format to US
   * Expected outcome is that currency is set to USD and date format is set to US (MM/DD/YYYY)
   */
  async clickUsPresetButton(): Promise<void> {
    await this.page.locator(this.selector_usPresetButton).click();
  }

  /**
   * @desc Click the currency SelectTrigger to open the dropdown of currency options
   * Expected outcome is that the currency dropdown opens showing GBP and USD options
   */
  async clickCurrencySelect(): Promise<void> {
    await this.page.locator(this.selector_currencySelect).click();
  }

  /**
   * @desc Select a currency option from the currency dropdown
   * Expected outcome is that the selected currency is reflected in the select trigger
   * @param {('GBP' | 'USD')} currency - The currency option to select
   */
  async selectCurrency(currency: 'GBP' | 'USD'): Promise<void> {
    await this.page.locator(this.selector_currencySelect).click();
    await this.page.getByRole('option', { name: currency === 'GBP' ? 'GBP (£) - British Pound' : 'USD ($) - US Dollar' }).click();
  }

  /**
   * @desc Click the date format SelectTrigger to open the dropdown of date format options
   * Expected outcome is that the date format dropdown opens showing UK and US options
   */
  async clickDateFormatSelect(): Promise<void> {
    await this.page.locator(this.selector_dateFormatSelect).click();
  }

  /**
   * @desc Select a date format option from the date format dropdown
   * Expected outcome is that the selected date format is reflected in the select trigger
   * @param {('UK' | 'US')} dateFormat - The date format option to select
   */
  async selectDateFormat(dateFormat: 'UK' | 'US'): Promise<void> {
    await this.page.locator(this.selector_dateFormatSelect).click();
    await this.page.getByRole('option', { name: dateFormat === 'UK' ? 'UK Format (DD/MM/YYYY)' : 'US Format (MM/DD/YYYY)' }).click();
  }

  /**
   * @desc Click the default bank account SelectTrigger to open the dropdown listing all available bank accounts
   * Expected outcome is that the default bank account dropdown opens showing all accounts plus a 'None' option
   */
  async clickDefaultBankAccountSelect(): Promise<void> {
    await this.page.locator(this.selector_defaultBankAccountSelect).click();
  }

  /**
   * @desc Select a default bank account from the dropdown by option text
   * Expected outcome is that the selected bank account is reflected in the select trigger
   * @param {string} optionText - The visible text of the option to select; use 'None (select each time)' to clear selection
   */
  async selectDefaultBankAccount(optionText: string): Promise<void> {
    await this.page.locator(this.selector_defaultBankAccountSelect).click();
    await this.page.getByRole('option', { name: optionText }).click();
  }

  /**
   * @desc Scroll within the full-screen overlay backdrop container
   * Expected outcome is that the overlay scrolls to the specified position
   * @param {number} x - Horizontal scroll distance in pixels
   * @param {number} y - Vertical scroll distance in pixels
   */
  async scrollModalOverlay(x: number, y: number): Promise<void> {
    await this.page.locator(this.selector_modalOverlay).evaluate(
      (el, [scrollX, scrollY]) => {
        el.scrollBy(scrollX, scrollY);
      },
      [x, y]
    );
  }

  /**
   * @desc Scroll within the modal card panel to access overflowing content
   * Expected outcome is that the modal container scrolls to the specified position
   * @param {number} x - Horizontal scroll distance in pixels
   * @param {number} y - Vertical scroll distance in pixels
   */
  async scrollModalContainer(x: number, y: number): Promise<void> {
    await this.page.locator(this.selector_modalContainer).evaluate(
      (el, [scrollX, scrollY]) => {
        el.scrollBy(scrollX, scrollY);
      },
      [x, y]
    );
  }
}