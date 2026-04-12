/**
 * Page Object Model: AccountSettingsModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class AccountSettingsModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_modalOverlay;
    private readonly selector_accountSettingsTitle;
    private readonly selector_closeAccountSettingsButton;
    private readonly selector_toggleTransactionDeletion;
    private readonly selector_deleteAllTransactionsButton;
    private readonly selector_deleteBankAccountButton;
    private readonly selector_closeButton;
    constructor(page: Page);
    /**
     * @desc Checks if the AccountSettingsModal overlay is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal overlay is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns an AccountSettingsModalPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<AccountSettingsModalPOM>} AccountSettingsModalPOM instance
     * @throws {Error} When the account settings modal overlay is not visible
     */
    static getPOM(page: Page): Promise<AccountSettingsModalPOM>;
    /**
     * @desc Whether or not the modal overlay is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal overlay is visible
     */
    isModalOverlayVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the sticky footer bar containing the Close button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the footer close button is visible
     */
    isModalFooterVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the sticky header bar is visible within the modal
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal header (account settings title) is visible
     */
    isModalHeaderVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the toggle transaction deletion button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the toggle is visible
     */
    isToggleTransactionDeletionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the Delete All Transactions button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the delete all transactions button is visible
     */
    isDeleteAllTransactionsButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the Delete Bank Account button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the delete bank account button is visible
     */
    isDeleteBankAccountButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the X button in the modal header to close the account settings modal
     * Expected outcome is that the modal will be dismissed
     */
    clickCloseAccountSettingsButton(): Promise<void>;
    /**
     * @desc Clicks the Close button in the modal footer to close the account settings modal
     * Expected outcome is that the modal will be dismissed
     */
    clickCloseButton(): Promise<void>;
    /**
     * @desc Clicks the toggle to enable or disable transaction row deletion
     * Expected outcome is that the toggle state will be flipped
     */
    clickToggleTransactionDeletion(): Promise<void>;
    /**
     * @desc Clicks the Delete Transactions button in the Danger Zone to trigger the confirmation dialog
     * Expected outcome is that the ConfirmationModal for deleting all transactions will appear
     */
    clickDeleteAllTransactionsButton(): Promise<void>;
    /**
     * @desc Clicks the Delete Account button in the Danger Zone to trigger the confirmation dialog
     * Expected outcome is that the ConfirmationModal for deleting the bank account will appear
     */
    clickDeleteBankAccountButton(): Promise<void>;
    /**
     * @desc Scrolls within the modal overlay container
     * @param {number} deltaY - The number of pixels to scroll vertically (positive scrolls down)
     */
    scrollModalOverlay(deltaY: number): Promise<void>;
    /**
     * @desc Gets the CSS class list of the modal overlay element
     * @returns {Promise<string>} The full className string of the modal overlay as it appears in the DOM
     * @throws {Error} When the modal overlay class attribute is not accessible or null
     */
    getModalOverlayClassList(): Promise<string>;
    /**
     * @desc Gets the text content of the account settings title in the modal header
     * @returns {Promise<string>} The title text exactly as it appears in the UI
     * @throws {Error} When the title text content is not accessible or null
     */
    getAccountSettingsTitleText(): Promise<string>;
    /**
     * @desc Gets the aria-checked or current visual state of the transaction deletion toggle
     * @returns {Promise<boolean>} True if the toggle is currently in the enabled (on) state
     * @throws {Error} When the toggle element is not accessible
     */
    getToggleTransactionDeletionState(): Promise<boolean>;
}
