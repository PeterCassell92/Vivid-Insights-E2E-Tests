/**
 * Page Object Model: SettingsModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class SettingsModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_modalOverlay;
    private readonly selector_modalContainer;
    private readonly selector_modalTitle;
    private readonly selector_closeButton;
    private readonly selector_errorMessage;
    private readonly selector_currencySelect;
    private readonly selector_dateFormatSelect;
    private readonly selector_cancelButton;
    private readonly selector_saveButton;
    constructor(page: Page);
    /**
     * @desc Checks if the Settings Modal overlay is currently visible in the DOM
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal overlay is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates modal visibility and returns a SettingsModalPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<SettingsModalPOM>} A SettingsModalPOM instance
     * @throws {Error} When the settings modal overlay is not visible
     */
    static getPOM(page: Page): Promise<SettingsModalPOM>;
    /**
     * @desc Check whether the modal overlay is visible (i.e., isOpen is true and the overlay is rendered in the DOM)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the overlay is visible
     */
    isModalOverlayVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the modal card container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    isModalContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the error message banner is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the error message is visible
     */
    isErrorMessageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the save button is currently disabled
     * @returns {Promise<boolean>} True if the save button is disabled (i.e., form is submitting)
     */
    isSaveButtonDisabled(): Promise<boolean>;
    /**
     * @desc Check whether the cancel button is currently disabled
     * @returns {Promise<boolean>} True if the cancel button is disabled (i.e., form is submitting)
     */
    isCancelButtonDisabled(): Promise<boolean>;
    /**
     * @desc Dismiss the modal by clicking on the full-screen backdrop overlay
     * Expected outcome is that the modal will close if clicking outside the modal card
     */
    clickModalOverlay(): Promise<void>;
    /**
     * @desc Clicks the close (X) button in the modal header
     * Expected outcome is that the modal will close and settings will be reset to current values
     */
    clickCloseButton(): Promise<void>;
    /**
     * @desc Clicks the Cancel button in the modal footer
     * Expected outcome is that the modal will close and settings will be reset to current values
     */
    clickCancelButton(): Promise<void>;
    /**
     * @desc Clicks the Save Settings button to submit the settings form
     * Expected outcome is that the settings will be saved and the modal will close on success
     */
    clickSaveButton(): Promise<void>;
    /**
     * @desc Selects a currency option from the currency dropdown
     * @param {'GBP' | 'USD'} currency - The currency value to select
     */
    selectCurrency(currency: 'GBP' | 'USD'): Promise<void>;
    /**
     * @desc Selects a date format option from the date format dropdown
     * @param {'UK' | 'US'} dateFormat - The date format value to select
     */
    selectDateFormat(dateFormat: 'UK' | 'US'): Promise<void>;
    /**
     * @desc Scrolls within the modal card container
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollModalContainer(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Get the CSS class list of the overlay to verify backdrop styling (e.g., fixed, bg-black, z-50)
     * @returns {Promise<string>} The full className string of the overlay element exactly as it appears
     * @throws {Error} When the overlay element class list is not accessible or null
     */
    getModalOverlayClassList(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the modal dialog card for layout/alignment assertions
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
     * @desc Get the full inner HTML of the modal container to inspect all rendered child elements
     * @returns {Promise<string>} The inner HTML of the modal container exactly as rendered
     * @throws {Error} When the modal container inner HTML is not accessible or null
     */
    getModalContainerInnerHtml(): Promise<string>;
    /**
     * @desc Gets the currently selected currency value from the currency dropdown
     * @returns {Promise<string>} The selected currency value exactly as it appears
     * @throws {Error} When the currency select value is not accessible or null
     */
    getSelectedCurrency(): Promise<string>;
    /**
     * @desc Gets the currently selected date format value from the date format dropdown
     * @returns {Promise<string>} The selected date format value exactly as it appears
     * @throws {Error} When the date format select value is not accessible or null
     */
    getSelectedDateFormat(): Promise<string>;
    /**
     * @desc Gets the error message text currently displayed in the error banner
     * @returns {Promise<string>} The error message text exactly as it appears
     * @throws {Error} When the error message content is not accessible or null
     */
    getErrorMessageText(): Promise<string>;
    /**
     * @desc Gets the text content of the save button (e.g., 'Save Settings' or 'Saving...')
     * @returns {Promise<string>} The save button label exactly as it appears
     * @throws {Error} When the save button text content is not accessible or null
     */
    getSaveButtonText(): Promise<string>;
    /**
     * @desc Gets the modal title text
     * @returns {Promise<string>} The modal title text exactly as it appears
     * @throws {Error} When the modal title text content is not accessible or null
     */
    getModalTitleText(): Promise<string>;
}
