/**
 * Page Object Model: FullScreenSettingsModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class FullScreenSettingsModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_modalOverlay;
    private readonly selector_modalContainer;
    private readonly selector_modalTitle;
    private readonly selector_closeButton;
    private readonly selector_cancelButton;
    private readonly selector_saveButton;
    private readonly selector_errorBanner;
    private readonly selector_successBanner;
    private readonly selector_currencySelect;
    private readonly selector_dateFormatSelect;
    private readonly selector_ukPresetButton;
    private readonly selector_usPresetButton;
    private readonly selector_defaultBankAccountSelect;
    private readonly selector_bankAccountItems;
    private readonly selector_bankAccountItem;
    constructor(page: Page);
    /**
     * @desc Checks if the FullScreenSettingsModal overlay is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal overlay is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method to get a FullScreenSettingsModalPOM instance
     * Validates that the modal overlay is visible before returning instance
     * @param page - Playwright Page instance
     * @returns {Promise<FullScreenSettingsModalPOM>} FullScreenSettingsModalPOM instance
     * @throws {Error} When the modal overlay is not visible
     */
    static getPOM(page: Page): Promise<FullScreenSettingsModalPOM>;
    /**
     * @desc Check whether the full-screen overlay is currently rendered and visible
     * @returns {Promise<boolean>} True if the overlay is visible
     */
    isModalOverlayVisible(): Promise<boolean>;
    /**
     * @desc Check whether the white modal card panel is visible on screen
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    isModalContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the modal title heading is visible
     * @returns {Promise<boolean>} True if the modal title is visible
     */
    isModalTitleVisible(): Promise<boolean>;
    /**
     * @desc Check whether the close button is visible in the modal header
     * @returns {Promise<boolean>} True if the close button is visible
     */
    isCloseButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the close (X) button is enabled
     * @returns {Promise<boolean>} True if the close button is enabled (not disabled)
     */
    isCloseButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the cancel button is visible in the modal footer
     * @returns {Promise<boolean>} True if the cancel button is visible
     */
    isCancelButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the cancel button is enabled
     * @returns {Promise<boolean>} True if the cancel button is enabled (not disabled)
     */
    isCancelButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the save button is visible in the modal footer
     * @returns {Promise<boolean>} True if the save button is visible
     */
    isSaveButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the save button is enabled
     * @returns {Promise<boolean>} True if the save button is enabled (not disabled)
     */
    isSaveButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the error banner is currently visible/rendered
     * @returns {Promise<boolean>} True if the error banner is visible
     */
    isErrorBannerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the success banner is currently visible/rendered
     * @returns {Promise<boolean>} True if the success banner is visible
     */
    isSuccessBannerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the date format select trigger is visible on screen
     * @returns {Promise<boolean>} True if the date format select is visible
     */
    isDateFormatSelectVisible(): Promise<boolean>;
    /**
     * @desc Check whether the date format select trigger is enabled
     * @returns {Promise<boolean>} True if the date format select is enabled (not disabled)
     */
    isDateFormatSelectEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the currency select trigger is visible on screen
     * @returns {Promise<boolean>} True if the currency select is visible
     */
    isCurrencySelectVisible(): Promise<boolean>;
    /**
     * @desc Check whether the currency select trigger is enabled
     * @returns {Promise<boolean>} True if the currency select is enabled (not disabled)
     */
    isCurrencySelectEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the UK preset button is visible on screen
     * @returns {Promise<boolean>} True if the UK preset button is visible
     */
    isUkPresetButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the UK preset button is enabled
     * @returns {Promise<boolean>} True if the UK preset button is enabled (not disabled)
     */
    isUkPresetButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the US preset button is visible on screen
     * @returns {Promise<boolean>} True if the US preset button is visible
     */
    isUsPresetButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the US preset button is enabled
     * @returns {Promise<boolean>} True if the US preset button is enabled (not disabled)
     */
    isUsPresetButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the default bank account select is rendered and visible
     * @returns {Promise<boolean>} True if the default bank account select is visible
     */
    isDefaultBankAccountSelectVisible(): Promise<boolean>;
    /**
     * @desc Check whether the default bank account select trigger is enabled
     * @returns {Promise<boolean>} True if the default bank account select is enabled (not disabled)
     */
    isDefaultBankAccountSelectEnabled(): Promise<boolean>;
    /**
     * @desc Check whether a specific bank account row is visible
     * @param {string} id - The bank account ID used in the dynamic data-testid
     * @returns {Promise<boolean>} True if the bank account item is visible
     */
    isBankAccountItemVisible(id: string): Promise<boolean>;
    /**
     * @desc Get the CSS class list of the overlay element
     * @returns {Promise<string>} The class attribute value of the modal overlay
     * @throws {Error} When the overlay class attribute is not accessible
     */
    getModalOverlayClassList(): Promise<string>;
    /**
     * @desc Get the visible text content of the modal heading
     * @returns {Promise<string>} The modal title text — expected static value: 'Application Settings'
     * @throws {Error} When the modal title text content is not accessible
     */
    getModalTitleText(): Promise<string>;
    /**
     * @desc Get the visible text label of the cancel button
     * @returns {Promise<string>} The cancel button text — expected value: 'Cancel'
     * @throws {Error} When the cancel button text content is not accessible
     */
    getCancelButtonText(): Promise<string>;
    /**
     * @desc Get the visible text label of the save button
     * @returns {Promise<string>} The save button text — 'Save Settings' normally, or 'Saving...' during submission
     * @throws {Error} When the save button text content is not accessible
     */
    getSaveButtonText(): Promise<string>;
    /**
     * @desc Get the error message text displayed in the error banner
     * @returns {Promise<string>} The error message text exactly as it appears
     * @throws {Error} When the error banner text content is not accessible
     */
    getErrorBannerText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the error banner
     * @returns {Promise<string>} The inner HTML of the error banner
     * @throws {Error} When the error banner inner HTML is not accessible
     */
    getErrorBannerInnerHtml(): Promise<string>;
    /**
     * @desc Get the success message text displayed in the success banner
     * @returns {Promise<string>} The success message text exactly as it appears
     * @throws {Error} When the success banner text content is not accessible
     */
    getSuccessBannerText(): Promise<string>;
    /**
     * @desc Get the currently displayed text value of the currency select trigger
     * @returns {Promise<string>} The currency select trigger text (e.g. 'GBP (£) - British Pound')
     * @throws {Error} When the currency select text content is not accessible
     */
    getCurrencySelectText(): Promise<string>;
    /**
     * @desc Get the currently displayed text value of the date format select trigger
     * @returns {Promise<string>} The date format select trigger text (e.g. 'UK Format (DD/MM/YYYY)')
     * @throws {Error} When the date format select text content is not accessible
     */
    getDateFormatSelectText(): Promise<string>;
    /**
     * @desc Get the visible text content of the UK preset button
     * @returns {Promise<string>} The UK preset button text (e.g. 'United Kingdom GBP • DD/MM/YYYY')
     * @throws {Error} When the UK preset button text content is not accessible
     */
    getUkPresetButtonText(): Promise<string>;
    /**
     * @desc Get the visible text content of the US preset button
     * @returns {Promise<string>} The US preset button text (e.g. 'United States USD • MM/DD/YYYY')
     * @throws {Error} When the US preset button text content is not accessible
     */
    getUsPresetButtonText(): Promise<string>;
    /**
     * @desc Get the currently displayed text value of the default bank account select trigger
     * @returns {Promise<string>} The default bank account select trigger text
     * @throws {Error} When the default bank account select text content is not accessible
     */
    getDefaultBankAccountSelectText(): Promise<string>;
    /**
     * @desc Get the data-testid attribute of a specific bank account row
     * @param {string} id - The bank account ID used in the dynamic data-testid
     * @returns {Promise<string>} The data-testid attribute value of the bank account item
     * @throws {Error} When the data-testid attribute is not accessible
     */
    getBankAccountItemAttribute(id: string): Promise<string>;
    /**
     * @desc Get the inner HTML of a specific bank account row
     * @param {string} id - The bank account ID used in the dynamic data-testid
     * @returns {Promise<string>} The inner HTML of the bank account item row
     * @throws {Error} When the bank account item inner HTML is not accessible
     */
    getBankAccountItemInnerHtml(id: string): Promise<string>;
    /**
     * @desc Get the visible text content of a specific bank account row
     * @param {string} id - The bank account ID used in the dynamic data-testid
     * @returns {Promise<string>} The text content of the bank account item row
     * @throws {Error} When the bank account item text content is not accessible
     */
    getBankAccountItemText(id: string): Promise<string>;
    /**
     * @desc Count the total number of bank account item rows currently rendered in the list
     * @returns {Promise<number>} The count of bank account item rows
     */
    getBankAccountItemCount(): Promise<number>;
    /**
     * @desc Get the position and dimensions of the modal card panel
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the modal container
     * @throws {Error} When the modal container bounding box is not accessible
     */
    getModalContainerBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Click the X icon button in the modal header to cancel and close the modal
     * Expected outcome is that the form state is reset and the modal closes
     */
    clickCloseButton(): Promise<void>;
    /**
     * @desc Click the footer Cancel button to reset form state and close the modal
     * Expected outcome is that the form state is reset and the modal closes
     */
    clickCancelButton(): Promise<void>;
    /**
     * @desc Click the footer Save Settings button to submit the form
     * Expected outcome is that the currency, date format, and default bank account settings are persisted
     */
    clickSaveButton(): Promise<void>;
    /**
     * @desc Click the UK preset button to automatically set currency to GBP and date format to UK
     * Expected outcome is that currency is set to GBP and date format is set to UK (DD/MM/YYYY)
     */
    clickUkPresetButton(): Promise<void>;
    /**
     * @desc Click the US preset button to automatically set currency to USD and date format to US
     * Expected outcome is that currency is set to USD and date format is set to US (MM/DD/YYYY)
     */
    clickUsPresetButton(): Promise<void>;
    /**
     * @desc Click the currency SelectTrigger to open the dropdown of currency options
     * Expected outcome is that the currency dropdown opens showing GBP and USD options
     */
    clickCurrencySelect(): Promise<void>;
    /**
     * @desc Select a currency option from the currency dropdown
     * Expected outcome is that the selected currency is reflected in the select trigger
     * @param {('GBP' | 'USD')} currency - The currency option to select
     */
    selectCurrency(currency: 'GBP' | 'USD'): Promise<void>;
    /**
     * @desc Click the date format SelectTrigger to open the dropdown of date format options
     * Expected outcome is that the date format dropdown opens showing UK and US options
     */
    clickDateFormatSelect(): Promise<void>;
    /**
     * @desc Select a date format option from the date format dropdown
     * Expected outcome is that the selected date format is reflected in the select trigger
     * @param {('UK' | 'US')} dateFormat - The date format option to select
     */
    selectDateFormat(dateFormat: 'UK' | 'US'): Promise<void>;
    /**
     * @desc Click the default bank account SelectTrigger to open the dropdown listing all available bank accounts
     * Expected outcome is that the default bank account dropdown opens showing all accounts plus a 'None' option
     */
    clickDefaultBankAccountSelect(): Promise<void>;
    /**
     * @desc Select a default bank account from the dropdown by option text
     * Expected outcome is that the selected bank account is reflected in the select trigger
     * @param {string} optionText - The visible text of the option to select; use 'None (select each time)' to clear selection
     */
    selectDefaultBankAccount(optionText: string): Promise<void>;
    /**
     * @desc Scroll within the full-screen overlay backdrop container
     * Expected outcome is that the overlay scrolls to the specified position
     * @param {number} x - Horizontal scroll distance in pixels
     * @param {number} y - Vertical scroll distance in pixels
     */
    scrollModalOverlay(x: number, y: number): Promise<void>;
    /**
     * @desc Scroll within the modal card panel to access overflowing content
     * Expected outcome is that the modal container scrolls to the specified position
     * @param {number} x - Horizontal scroll distance in pixels
     * @param {number} y - Vertical scroll distance in pixels
     */
    scrollModalContainer(x: number, y: number): Promise<void>;
}
