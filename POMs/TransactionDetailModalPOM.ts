/**
 * Page Object Model: TransactionDetailModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const TransactionDetailModalPOM_StandardSelector = '[data-testid="transaction-detail-modal"]';

export class TransactionDetailModalPOM {
  private readonly page: Page;

  // === ROOT SELECTOR ===
  private readonly rootSelector: string;

  // === MODAL ROOT SELECTORS ===
  private readonly selector_modalContainer: string;
  private readonly selector_modalTitle: string;
  private readonly selector_closeButton: string;
  private readonly selector_modalOverlay: string;

  // === TRANSACTION HEADER SELECTORS ===
  private readonly selector_headerSection: string;
  private readonly selector_transactionStatus: string;
  private readonly selector_transactionAmount: string;
  private readonly selector_transactionDate: string;
  private readonly selector_transactionId: string;

  // === LINE ITEMS TABLE SELECTORS ===
  private readonly selector_lineItemsTableHeader: string;
  private readonly selector_lineItemsTableWrapper: string;
  private readonly selector_lineItemRow: (lineItemId: string) => string;

  // === MODAL FOOTER SELECTORS ===
  private readonly selector_footerSection: string;
  private readonly selector_cancelButton: string;
  private readonly selector_downloadButton: string;
  private readonly selector_printButton: string;

  // === TRANSACTION DETAILS SECTION SELECTORS ===
  private readonly selector_detailsSection: string;
  private readonly selector_referenceLabel: string;
  private readonly selector_referenceValue: string;
  private readonly selector_senderLabel: string;
  private readonly selector_senderValue: string;
  private readonly selector_recipientLabel: string;
  private readonly selector_recipientValue: string;
  private readonly selector_descriptionLabel: string;
  private readonly selector_descriptionValue: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = TransactionDetailModalPOM_StandardSelector;

    // Modal root
    this.selector_modalContainer = `${this.rootSelector}`;
    this.selector_modalTitle = `${this.rootSelector} [data-testid="transaction-detail-modal-title"]`;
    this.selector_closeButton = `${this.rootSelector} [data-testid="transaction-detail-modal-close-btn"]`;
    this.selector_modalOverlay = `[data-testid="transaction-detail-modal-overlay"]`;

    // Transaction header
    this.selector_headerSection = `${this.rootSelector} [data-testid="transaction-detail-header"]`;
    this.selector_transactionStatus = `${this.rootSelector} [data-testid="transaction-detail-status"]`;
    this.selector_transactionAmount = `${this.rootSelector} [data-testid="transaction-detail-amount"]`;
    this.selector_transactionDate = `${this.rootSelector} [data-testid="transaction-detail-date"]`;
    this.selector_transactionId = `${this.rootSelector} [data-testid="transaction-detail-id"]`;

    // Line items table
    this.selector_lineItemsTableHeader = `${this.rootSelector} [data-testid="transaction-detail-line-items-header"]`;
    this.selector_lineItemsTableWrapper = `${this.rootSelector} [data-testid="transaction-detail-line-items"]`;
    this.selector_lineItemRow = (lineItemId: string) =>
      `${this.rootSelector} [data-testid="transaction-detail-line-item_${lineItemId}"]`;

    // Modal footer
    this.selector_footerSection = `${this.rootSelector} [data-testid="transaction-detail-modal-footer"]`;
    this.selector_cancelButton = `${this.rootSelector} [data-testid="transaction-detail-cancel-btn"]`;
    this.selector_downloadButton = `${this.rootSelector} [data-testid="transaction-detail-download-btn"]`;
    this.selector_printButton = `${this.rootSelector} [data-testid="transaction-detail-print-btn"]`;

    // Transaction details section
    this.selector_detailsSection = `${this.rootSelector} [data-testid="transaction-detail-details-section"]`;
    this.selector_referenceLabel = `${this.rootSelector} [data-testid="transaction-detail-reference-label"]`;
    this.selector_referenceValue = `${this.rootSelector} [data-testid="transaction-detail-reference-value"]`;
    this.selector_senderLabel = `${this.rootSelector} [data-testid="transaction-detail-sender-label"]`;
    this.selector_senderValue = `${this.rootSelector} [data-testid="transaction-detail-sender-value"]`;
    this.selector_recipientLabel = `${this.rootSelector} [data-testid="transaction-detail-recipient-label"]`;
    this.selector_recipientValue = `${this.rootSelector} [data-testid="transaction-detail-recipient-value"]`;
    this.selector_descriptionLabel = `${this.rootSelector} [data-testid="transaction-detail-description-label"]`;
    this.selector_descriptionValue = `${this.rootSelector} [data-testid="transaction-detail-description-value"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the TransactionDetailModal is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const modal = page.locator(TransactionDetailModalPOM_StandardSelector);
      return await modal.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates modal visibility and returns a POM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TransactionDetailModalPOM>} A TransactionDetailModalPOM instance
   * @throws {Error} When the modal container is not visible
   */
  static async getPOM(page: Page): Promise<TransactionDetailModalPOM> {
    const isVisible = await TransactionDetailModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TransactionDetailModalPOM: Cannot instantiate — modal is not visible. ' +
          `Expected element [${TransactionDetailModalPOM_StandardSelector}] to be visible.`
      );
    }

    return new TransactionDetailModalPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the transaction detail modal is currently visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  async isModalVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_modalContainer, {
        state: 'visible',
        timeout,
      });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the modal overlay/backdrop is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the overlay is visible
   */
  async isOverlayVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_modalOverlay, {
        state: 'visible',
        timeout,
      });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the close button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the close button is visible
   */
  async isCloseButtonVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_closeButton, {
        state: 'visible',
        timeout,
      });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the line items table is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the line items table wrapper is visible
   */
  async isLineItemsTableVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_lineItemsTableWrapper, {
        state: 'visible',
        timeout,
      });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not a specific line item row is visible
   * @param {string} lineItemId - The ID of the line item row
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the line item row is visible
   */
  async isLineItemRowVisible(lineItemId: string, timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_lineItemRow(lineItemId), {
        state: 'visible',
        timeout,
      });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the cancel button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the cancel button is visible
   */
  async isCancelButtonVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_cancelButton, {
        state: 'visible',
        timeout,
      });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the download button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the download button is visible
   */
  async isDownloadButtonVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_downloadButton, {
        state: 'visible',
        timeout,
      });
      return true;
    } catch {
      return false;
    }
  }

  /**
   * @desc Whether or not the print button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the print button is visible
   */
  async isPrintButtonVisible(timeout: number = 1500): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.selector_printButton, {
        state: 'visible',
        timeout,
      });
      return true;
    } catch {
      return false;
    }
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the close button to dismiss the modal
   * Expected outcome is that the modal will be closed/hidden
   */
  async clickCloseButton(): Promise<void> {
    await this.page.locator(this.selector_closeButton).click();
  }

  /**
   * @desc Clicks the cancel button in the modal footer
   * Expected outcome is that the modal action will be cancelled
   */
  async clickCancelButton(): Promise<void> {
    await this.page.locator(this.selector_cancelButton).click();
  }

  /**
   * @desc Clicks the download button in the modal footer
   * Expected outcome is that a download of the transaction details will be initiated
   */
  async clickDownloadButton(): Promise<void> {
    await this.page.locator(this.selector_downloadButton).click();
  }

  /**
   * @desc Clicks the print button in the modal footer
   * Expected outcome is that the print dialog will be triggered
   */
  async clickPrintButton(): Promise<void> {
    await this.page.locator(this.selector_printButton).click();
  }

  /**
   * @desc Clicks the modal overlay/backdrop
   * Expected outcome is that the modal may be dismissed (if overlay-dismiss is enabled)
   */
  async clickModalOverlay(): Promise<void> {
    await this.page.locator(this.selector_modalOverlay).click();
  }

  /**
   * @desc Scrolls within the line items table to view additional rows
   * @param {number} scrollAmount - The number of pixels to scroll vertically
   */
  async scrollLineItemsTable(scrollAmount: number): Promise<void> {
    await this.page.locator(this.selector_lineItemsTableWrapper).evaluate(
      (el: HTMLElement, amount: number) => {
        el.scrollTop += amount;
      },
      scrollAmount
    );
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the full inner HTML content of the modal container
   * @returns {Promise<string>} The inner HTML of the modal container exactly as it appears
   * @throws {Error} When the modal container inner HTML is not accessible or null
   */
  async getModalContainerInnerHtml(): Promise<string> {
    await this.page.waitForSelector(this.selector_modalContainer, { state: 'visible' });
    const html = await this.page.innerHTML(this.selector_modalContainer);

    if (html === null || html === undefined) {
      throw new Error(
        `TransactionDetailModalPOM: Modal container inner HTML is not accessible. Selector: ${this.selector_modalContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Gets the visible text content of the modal title
   * @returns {Promise<string>} The modal title text exactly as it appears
   * @throws {Error} When the modal title text content is not accessible or null
   */
  async getModalTitleText(): Promise<string> {
    await this.page.waitForSelector(this.selector_modalTitle, { state: 'visible' });
    const text = await this.page.textContent(this.selector_modalTitle);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Modal title text content is null. Selector: ${this.selector_modalTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the transaction amount
   * @returns {Promise<string>} The transaction amount text exactly as it appears
   * @throws {Error} When the transaction amount text content is not accessible or null
   */
  async getTransactionAmountText(): Promise<string> {
    await this.page.waitForSelector(this.selector_transactionAmount, { state: 'visible' });
    const text = await this.page.textContent(this.selector_transactionAmount);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Transaction amount text content is null. Selector: ${this.selector_transactionAmount}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the transaction date
   * @returns {Promise<string>} The transaction date text exactly as it appears
   * @throws {Error} When the transaction date text content is not accessible or null
   */
  async getTransactionDateText(): Promise<string> {
    await this.page.waitForSelector(this.selector_transactionDate, { state: 'visible' });
    const text = await this.page.textContent(this.selector_transactionDate);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Transaction date text content is null. Selector: ${this.selector_transactionDate}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the transaction ID
   * @returns {Promise<string>} The transaction ID text exactly as it appears
   * @throws {Error} When the transaction ID text content is not accessible or null
   */
  async getTransactionIdText(): Promise<string> {
    await this.page.waitForSelector(this.selector_transactionId, { state: 'visible' });
    const text = await this.page.textContent(this.selector_transactionId);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Transaction ID text content is null. Selector: ${this.selector_transactionId}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the data-transaction-type attribute value from the header section, representing the transaction type (e.g. debit, credit, transfer)
   * @returns {Promise<string>} The data-transaction-type attribute value exactly as it appears
   * @throws {Error} When the attribute is not present or the header section is not accessible
   */
  async getHeaderSectionTransactionTypeAttribute(): Promise<string> {
    await this.page.waitForSelector(this.selector_headerSection, { state: 'visible' });
    const value = await this.page
      .locator(this.selector_headerSection)
      .getAttribute('data-transaction-type');

    if (value === null) {
      throw new Error(
        `TransactionDetailModalPOM: data-transaction-type attribute is null on header section. Selector: ${this.selector_headerSection}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-status attribute value from the transaction status element, representing the current transaction status (e.g. pending, completed, failed)
   * @returns {Promise<string>} The data-status attribute value exactly as it appears
   * @throws {Error} When the attribute is not present or the transaction status element is not accessible
   */
  async getTransactionStatusAttribute(): Promise<string> {
    await this.page.waitForSelector(this.selector_transactionStatus, { state: 'visible' });
    const value = await this.page
      .locator(this.selector_transactionStatus)
      .getAttribute('data-status');

    if (value === null) {
      throw new Error(
        `TransactionDetailModalPOM: data-status attribute is null on transaction status element. Selector: ${this.selector_transactionStatus}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the visible text content of the transaction status
   * @returns {Promise<string>} The transaction status text exactly as it appears
   * @throws {Error} When the transaction status text content is not accessible or null
   */
  async getTransactionStatusText(): Promise<string> {
    await this.page.waitForSelector(this.selector_transactionStatus, { state: 'visible' });
    const text = await this.page.textContent(this.selector_transactionStatus);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Transaction status text content is null. Selector: ${this.selector_transactionStatus}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the line items table header row
   * @returns {Promise<string>} The line items table header text exactly as it appears
   * @throws {Error} When the line items table header text content is not accessible or null
   */
  async getLineItemsTableHeaderText(): Promise<string> {
    await this.page.waitForSelector(this.selector_lineItemsTableHeader, { state: 'visible' });
    const text = await this.page.textContent(this.selector_lineItemsTableHeader);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Line items table header text content is null. Selector: ${this.selector_lineItemsTableHeader}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the full inner HTML of the line items table
   * @returns {Promise<string>} The inner HTML of the line items table wrapper exactly as it appears
   * @throws {Error} When the line items table inner HTML is not accessible or null
   */
  async getLineItemsTableInnerHtml(): Promise<string> {
    await this.page.waitForSelector(this.selector_lineItemsTableWrapper, { state: 'visible' });
    const html = await this.page.innerHTML(this.selector_lineItemsTableWrapper);

    if (html === null || html === undefined) {
      throw new Error(
        `TransactionDetailModalPOM: Line items table inner HTML is not accessible. Selector: ${this.selector_lineItemsTableWrapper}`
      );
    }

    return html;
  }

  /**
   * @desc Gets the visible text content of the reference value
   * @returns {Promise<string>} The reference value text exactly as it appears
   * @throws {Error} When the reference value text content is not accessible or null
   */
  async getReferenceValueText(): Promise<string> {
    await this.page.waitForSelector(this.selector_referenceValue, { state: 'visible' });
    const text = await this.page.textContent(this.selector_referenceValue);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Reference value text content is null. Selector: ${this.selector_referenceValue}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the sender value
   * @returns {Promise<string>} The sender value text exactly as it appears
   * @throws {Error} When the sender value text content is not accessible or null
   */
  async getSenderValueText(): Promise<string> {
    await this.page.waitForSelector(this.selector_senderValue, { state: 'visible' });
    const text = await this.page.textContent(this.selector_senderValue);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Sender value text content is null. Selector: ${this.selector_senderValue}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the recipient value
   * @returns {Promise<string>} The recipient value text exactly as it appears
   * @throws {Error} When the recipient value text content is not accessible or null
   */
  async getRecipientValueText(): Promise<string> {
    await this.page.waitForSelector(this.selector_recipientValue, { state: 'visible' });
    const text = await this.page.textContent(this.selector_recipientValue);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Recipient value text content is null. Selector: ${this.selector_recipientValue}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the description value
   * @returns {Promise<string>} The description value text exactly as it appears
   * @throws {Error} When the description value text content is not accessible or null
   */
  async getDescriptionValueText(): Promise<string> {
    await this.page.waitForSelector(this.selector_descriptionValue, { state: 'visible' });
    const text = await this.page.textContent(this.selector_descriptionValue);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Description value text content is null. Selector: ${this.selector_descriptionValue}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the description label
   * @returns {Promise<string>} The description label text exactly as it appears
   * @throws {Error} When the description label text content is not accessible or null
   */
  async getDescriptionLabelText(): Promise<string> {
    await this.page.waitForSelector(this.selector_descriptionLabel, { state: 'visible' });
    const text = await this.page.textContent(this.selector_descriptionLabel);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Description label text content is null. Selector: ${this.selector_descriptionLabel}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the reference label
   * @returns {Promise<string>} The reference label text exactly as it appears
   * @throws {Error} When the reference label text content is not accessible or null
   */
  async getReferenceLabelText(): Promise<string> {
    await this.page.waitForSelector(this.selector_referenceLabel, { state: 'visible' });
    const text = await this.page.textContent(this.selector_referenceLabel);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Reference label text content is null. Selector: ${this.selector_referenceLabel}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the sender label
   * @returns {Promise<string>} The sender label text exactly as it appears
   * @throws {Error} When the sender label text content is not accessible or null
   */
  async getSenderLabelText(): Promise<string> {
    await this.page.waitForSelector(this.selector_senderLabel, { state: 'visible' });
    const text = await this.page.textContent(this.selector_senderLabel);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Sender label text content is null. Selector: ${this.selector_senderLabel}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the visible text content of the recipient label
   * @returns {Promise<string>} The recipient label text exactly as it appears
   * @throws {Error} When the recipient label text content is not accessible or null
   */
  async getRecipientLabelText(): Promise<string> {
    await this.page.waitForSelector(this.selector_recipientLabel, { state: 'visible' });
    const text = await this.page.textContent(this.selector_recipientLabel);

    if (text === null) {
      throw new Error(
        `TransactionDetailModalPOM: Recipient label text content is null. Selector: ${this.selector_recipientLabel}`
      );
    }

    return text;
  }
}