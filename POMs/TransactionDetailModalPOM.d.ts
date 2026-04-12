/**
 * Page Object Model: TransactionDetailModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TransactionDetailModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_modalContainer;
    private readonly selector_modalTitle;
    private readonly selector_closeButton;
    private readonly selector_modalOverlay;
    private readonly selector_headerSection;
    private readonly selector_transactionStatus;
    private readonly selector_transactionAmount;
    private readonly selector_transactionDate;
    private readonly selector_transactionId;
    private readonly selector_lineItemsTableHeader;
    private readonly selector_lineItemsTableWrapper;
    private readonly selector_lineItemRow;
    private readonly selector_footerSection;
    private readonly selector_cancelButton;
    private readonly selector_downloadButton;
    private readonly selector_printButton;
    private readonly selector_detailsSection;
    private readonly selector_referenceLabel;
    private readonly selector_referenceValue;
    private readonly selector_senderLabel;
    private readonly selector_senderValue;
    private readonly selector_recipientLabel;
    private readonly selector_recipientValue;
    private readonly selector_descriptionLabel;
    private readonly selector_descriptionValue;
    constructor(page: Page);
    /**
     * @desc Checks if the TransactionDetailModal is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates modal visibility and returns a POM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TransactionDetailModalPOM>} A TransactionDetailModalPOM instance
     * @throws {Error} When the modal container is not visible
     */
    static getPOM(page: Page): Promise<TransactionDetailModalPOM>;
    /**
     * @desc Whether or not the transaction detail modal is currently visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    isModalVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the modal overlay/backdrop is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the overlay is visible
     */
    isOverlayVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the close button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the close button is visible
     */
    isCloseButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the line items table is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the line items table wrapper is visible
     */
    isLineItemsTableVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not a specific line item row is visible
     * @param {string} lineItemId - The ID of the line item row
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the line item row is visible
     */
    isLineItemRowVisible(lineItemId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the cancel button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the cancel button is visible
     */
    isCancelButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the download button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the download button is visible
     */
    isDownloadButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the print button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the print button is visible
     */
    isPrintButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the close button to dismiss the modal
     * Expected outcome is that the modal will be closed/hidden
     */
    clickCloseButton(): Promise<void>;
    /**
     * @desc Clicks the cancel button in the modal footer
     * Expected outcome is that the modal action will be cancelled
     */
    clickCancelButton(): Promise<void>;
    /**
     * @desc Clicks the download button in the modal footer
     * Expected outcome is that a download of the transaction details will be initiated
     */
    clickDownloadButton(): Promise<void>;
    /**
     * @desc Clicks the print button in the modal footer
     * Expected outcome is that the print dialog will be triggered
     */
    clickPrintButton(): Promise<void>;
    /**
     * @desc Clicks the modal overlay/backdrop
     * Expected outcome is that the modal may be dismissed (if overlay-dismiss is enabled)
     */
    clickModalOverlay(): Promise<void>;
    /**
     * @desc Scrolls within the line items table to view additional rows
     * @param {number} scrollAmount - The number of pixels to scroll vertically
     */
    scrollLineItemsTable(scrollAmount: number): Promise<void>;
    /**
     * @desc Gets the full inner HTML content of the modal container
     * @returns {Promise<string>} The inner HTML of the modal container exactly as it appears
     * @throws {Error} When the modal container inner HTML is not accessible or null
     */
    getModalContainerInnerHtml(): Promise<string>;
    /**
     * @desc Gets the visible text content of the modal title
     * @returns {Promise<string>} The modal title text exactly as it appears
     * @throws {Error} When the modal title text content is not accessible or null
     */
    getModalTitleText(): Promise<string>;
    /**
     * @desc Gets the visible text content of the transaction amount
     * @returns {Promise<string>} The transaction amount text exactly as it appears
     * @throws {Error} When the transaction amount text content is not accessible or null
     */
    getTransactionAmountText(): Promise<string>;
    /**
     * @desc Gets the visible text content of the transaction date
     * @returns {Promise<string>} The transaction date text exactly as it appears
     * @throws {Error} When the transaction date text content is not accessible or null
     */
    getTransactionDateText(): Promise<string>;
    /**
     * @desc Gets the visible text content of the transaction ID
     * @returns {Promise<string>} The transaction ID text exactly as it appears
     * @throws {Error} When the transaction ID text content is not accessible or null
     */
    getTransactionIdText(): Promise<string>;
    /**
     * @desc Gets the data-transaction-type attribute value from the header section, representing the transaction type (e.g. debit, credit, transfer)
     * @returns {Promise<string>} The data-transaction-type attribute value exactly as it appears
     * @throws {Error} When the attribute is not present or the header section is not accessible
     */
    getHeaderSectionTransactionTypeAttribute(): Promise<string>;
    /**
     * @desc Gets the data-status attribute value from the transaction status element, representing the current transaction status (e.g. pending, completed, failed)
     * @returns {Promise<string>} The data-status attribute value exactly as it appears
     * @throws {Error} When the attribute is not present or the transaction status element is not accessible
     */
    getTransactionStatusAttribute(): Promise<string>;
    /**
     * @desc Gets the visible text content of the transaction status
     * @returns {Promise<string>} The transaction status text exactly as it appears
     * @throws {Error} When the transaction status text content is not accessible or null
     */
    getTransactionStatusText(): Promise<string>;
    /**
     * @desc Gets the visible text content of the line items table header row
     * @returns {Promise<string>} The line items table header text exactly as it appears
     * @throws {Error} When the line items table header text content is not accessible or null
     */
    getLineItemsTableHeaderText(): Promise<string>;
    /**
     * @desc Gets the full inner HTML of the line items table
     * @returns {Promise<string>} The inner HTML of the line items table wrapper exactly as it appears
     * @throws {Error} When the line items table inner HTML is not accessible or null
     */
    getLineItemsTableInnerHtml(): Promise<string>;
    /**
     * @desc Gets the visible text content of the reference value
     * @returns {Promise<string>} The reference value text exactly as it appears
     * @throws {Error} When the reference value text content is not accessible or null
     */
    getReferenceValueText(): Promise<string>;
    /**
     * @desc Gets the visible text content of the sender value
     * @returns {Promise<string>} The sender value text exactly as it appears
     * @throws {Error} When the sender value text content is not accessible or null
     */
    getSenderValueText(): Promise<string>;
    /**
     * @desc Gets the visible text content of the recipient value
     * @returns {Promise<string>} The recipient value text exactly as it appears
     * @throws {Error} When the recipient value text content is not accessible or null
     */
    getRecipientValueText(): Promise<string>;
    /**
     * @desc Gets the visible text content of the description value
     * @returns {Promise<string>} The description value text exactly as it appears
     * @throws {Error} When the description value text content is not accessible or null
     */
    getDescriptionValueText(): Promise<string>;
    /**
     * @desc Gets the visible text content of the description label
     * @returns {Promise<string>} The description label text exactly as it appears
     * @throws {Error} When the description label text content is not accessible or null
     */
    getDescriptionLabelText(): Promise<string>;
    /**
     * @desc Gets the visible text content of the reference label
     * @returns {Promise<string>} The reference label text exactly as it appears
     * @throws {Error} When the reference label text content is not accessible or null
     */
    getReferenceLabelText(): Promise<string>;
    /**
     * @desc Gets the visible text content of the sender label
     * @returns {Promise<string>} The sender label text exactly as it appears
     * @throws {Error} When the sender label text content is not accessible or null
     */
    getSenderLabelText(): Promise<string>;
    /**
     * @desc Gets the visible text content of the recipient label
     * @returns {Promise<string>} The recipient label text exactly as it appears
     * @throws {Error} When the recipient label text content is not accessible or null
     */
    getRecipientLabelText(): Promise<string>;
}
