/**
 * Page Object Model: ConfirmationModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ConfirmationModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_confirmationModalContent;
    private readonly selector_confirmButton;
    private readonly selector_cancelButton;
    private readonly selector_confirmationModalTitle;
    private readonly selector_confirmationModalDescription;
    constructor(page: Page);
    /**
     * @desc Checks if the ConfirmationModal is currently visible in the DOM
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal content container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a ConfirmationModalPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<ConfirmationModalPOM>} A ConfirmationModalPOM instance
     * @throws {Error} When the confirmation modal is not visible
     */
    static getPOM(page: Page): Promise<ConfirmationModalPOM>;
    /**
     * @desc Checks whether the confirmation modal dialog content is currently visible/rendered in the DOM,
     * reflecting the isOpen state
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal content container is visible
     */
    isConfirmationModalVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks whether the Confirm button is currently enabled. Returns false when isLoading is true
     * (disabled attribute is present)
     * @returns {Promise<boolean>} True if the Confirm button is enabled
     */
    isConfirmButtonEnabled(): Promise<boolean>;
    /**
     * @desc Checks whether the Cancel button is currently enabled. Returns false when isLoading is true
     * (disabled attribute is present)
     * @returns {Promise<boolean>} True if the Cancel button is enabled
     */
    isCancelButtonEnabled(): Promise<boolean>;
    /**
     * @desc Clicks the Confirm button to trigger the onConfirm callback.
     * Label shows confirmText prop (default: 'Confirm') or 'Processing...' while loading.
     * Disabled when isLoading is true.
     * Expected outcome is that the onConfirm callback will be invoked.
     * @throws {Error} When the Confirm button is not visible or not interactable
     */
    clickConfirmButton(): Promise<void>;
    /**
     * @desc Clicks the Cancel button to dismiss the modal without confirming.
     * Triggers the onClose callback. Disabled when isLoading is true.
     * Expected outcome is that the modal will be dismissed without confirming.
     * @throws {Error} When the Cancel button is not visible or not interactable
     */
    clickCancelButton(): Promise<void>;
    /**
     * @desc Dismisses the confirmation modal dialog by interacting with the overlay or close control,
     * triggering the onClose callback via onOpenChange.
     * Expected outcome is that the modal will be closed.
     * @throws {Error} When the modal content container is not visible
     */
    dismissModal(): Promise<void>;
    /**
     * @desc Extracts the visible title text rendered inside the DialogTitle,
     * driven by the title prop passed to the modal
     * @returns {Promise<string>} The title text exactly as it appears in the UI
     * @throws {Error} When the title content is not accessible or null
     */
    getConfirmationModalTitleText(): Promise<string>;
    /**
     * @desc Extracts the visible description text rendered inside the DialogDescription,
     * driven by the description prop passed to the modal
     * @returns {Promise<string>} The description text exactly as it appears in the UI
     * @throws {Error} When the description content is not accessible or null
     */
    getConfirmationModalDescriptionText(): Promise<string>;
    /**
     * @desc Extracts the label text of the Confirm button — shows 'Processing...' when isLoading is true,
     * otherwise shows the confirmText prop value (default: 'Confirm')
     * @returns {Promise<string>} The Confirm button label text exactly as it appears in the UI
     * @throws {Error} When the Confirm button text content is not accessible or null
     */
    getConfirmButtonText(): Promise<string>;
    /**
     * @desc Extracts the label text of the Cancel button, driven by the cancelText prop (default: 'Cancel')
     * @returns {Promise<string>} The Cancel button label text exactly as it appears in the UI
     * @throws {Error} When the Cancel button text content is not accessible or null
     */
    getCancelButtonText(): Promise<string>;
    /**
     * @desc Reads the 'disabled' attribute on the Confirm button to assert its non-interactive state
     * during async operations (isLoading === true)
     * @returns {Promise<string | null>} The value of the 'disabled' attribute, or null if not present
     */
    getConfirmButtonDisabledAttribute(): Promise<string | null>;
    /**
     * @desc Reads the 'disabled' attribute on the Cancel button to assert its non-interactive state
     * during async operations (isLoading === true)
     * @returns {Promise<string | null>} The value of the 'disabled' attribute, or null if not present
     */
    getCancelButtonDisabledAttribute(): Promise<string | null>;
    /**
     * @desc Retrieves the CSS class list of the Confirm button to assert the applied variant style
     * (e.g., destructive, default, outline)
     * @returns {Promise<string | null>} The full class attribute string of the Confirm button, or null if not present
     */
    getConfirmButtonClassList(): Promise<string | null>;
    /**
     * @desc Gets the position and dimensions of the modal content container for layout or overlap assertions
     * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>}
     * The bounding box of the modal content container, or null if not visible
     */
    getConfirmationModalBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    } | null>;
}
