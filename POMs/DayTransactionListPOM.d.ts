/**
 * Page Object Model: DayTransactionList
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class DayTransactionListPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_listContainer;
    private readonly selector_errorContainer;
    private readonly selector_emptyContainer;
    private readonly selector_loadingContainer;
    private readonly selector_editorPanel;
    private readonly selector_cancelBtn;
    private readonly selector_saveBtn;
    private readonly selector_transactionCard;
    private readonly selector_spendingTypeToggle;
    private readonly selector_allTransactionCards;
    private readonly selector_allSpendingTypeToggles;
    constructor(page: Page);
    /**
     * @desc Checks if the DayTransactionList component is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the list container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a DayTransactionListPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<DayTransactionListPOM>} DayTransactionListPOM instance
     * @throws {Error} When the day transactions list container is not visible
     */
    static getPOM(page: Page): Promise<DayTransactionListPOM>;
    /**
     * @desc Check whether the root transaction list wrapper is visible — rendered when one or more transactions exist
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the list container is visible
     */
    isListContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the error state container is visible — rendered exclusively when the transaction fetch fails
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the error container is visible
     */
    isErrorContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the empty state container is visible — rendered when the fetch succeeds but returns zero transactions
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the empty container is visible
     */
    isEmptyContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the loading state container is visible — rendered exclusively while transactions are being fetched
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading container is visible
     */
    isLoadingContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the inline spending-type editor panel is currently visible (i.e. a transaction row has been double-clicked)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the editor panel is visible
     */
    isEditorPanelVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Cancel button is visible within the spending-type editor
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the Cancel button is visible
     */
    isCancelButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Save button is visible within the spending-type editor
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the Save button is visible
     */
    isSaveButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Cancel button is enabled — it is disabled while a save operation is in progress
     * @returns {Promise<boolean>} True if the Cancel button is enabled
     */
    isCancelButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the Save button is enabled — it is disabled while a save operation is in progress
     * @returns {Promise<boolean>} True if the Save button is enabled
     */
    isSaveButtonEnabled(): Promise<boolean>;
    /**
     * @desc Double-clicks a transaction row to open the inline spending-type editor (non-ZERO_EVENT transactions only)
     * Expected outcome is that the spending-type editor panel will become visible
     * @param {number} index - Zero-based index of the transaction row to double-click
     * @throws {Error} When the transaction card at the given index is not visible
     */
    doubleClickTransactionCard(index: number): Promise<void>;
    /**
     * @desc Clicks the Cancel button to discard spending-type changes and close the inline editor
     * Expected outcome is that the spending-type editor panel will close without saving
     * @throws {Error} When the Cancel button is not visible
     */
    clickCancelButton(): Promise<void>;
    /**
     * @desc Clicks a spending-type toggle button to select or deselect that spending type for the transaction being edited
     * Expected outcome is that the spending type's selected state will be toggled
     * @param {string} id - The ID of the spending type to toggle
     * @throws {Error} When the spending-type toggle button with the given ID is not visible
     */
    clickSpendingTypeToggle(id: string): Promise<void>;
    /**
     * @desc Clicks the Save button to submit the updated spending-type selection via PATCH
     * Expected outcome is that the spending types will be saved and the editor will close
     * @throws {Error} When the Save button is not visible
     */
    clickSaveButton(): Promise<void>;
    /**
     * @desc Extract the error message text displayed when the transaction fetch fails
     * @returns {Promise<string>} The error message text exactly as it appears in the UI
     * @throws {Error} When the error container content is not accessible or null
     */
    getErrorContainerText(): Promise<string>;
    /**
     * @desc Extract the empty state message text (e.g. 'No transactions recorded for this day')
     * @returns {Promise<string>} The empty state message text exactly as it appears in the UI
     * @throws {Error} When the empty container content is not accessible or null
     */
    getEmptyContainerText(): Promise<string>;
    /**
     * @desc Extract the loading message text (e.g. 'Loading transactions...') displayed while fetching
     * @returns {Promise<string>} The loading message text exactly as it appears in the UI
     * @throws {Error} When the loading container content is not accessible or null
     */
    getLoadingContainerText(): Promise<string>;
    /**
     * @desc Extract the full visible text content of a specific transaction row (description, amount, type badge, spending type labels, balance)
     * @param {number} index - Zero-based index of the transaction row
     * @returns {Promise<string>} The full text content of the transaction row exactly as it appears
     * @throws {Error} When the transaction card at the given index is not accessible or text content is null
     */
    getTransactionCardText(index: number): Promise<string>;
    /**
     * @desc Get a list of text content from all transaction rows to enumerate all transactions displayed for the day
     * @returns {Promise<string[]>} Array of text content strings from all transaction rows, exactly as they appear
     * @throws {Error} When text content for any transaction row is null
     */
    getAllTransactionCardTexts(): Promise<string[]>;
    /**
     * @desc Get the CSS class list of a transaction row to determine its current visual state (editing, ZERO_EVENT, default hover)
     * @param {number} index - Zero-based index of the transaction row
     * @returns {Promise<string>} The class attribute value of the transaction row
     * @throws {Error} When the transaction card at the given index is not accessible or has no class attribute
     */
    getTransactionCardClassList(index: number): Promise<string>;
    /**
     * @desc Read the 'title' attribute of a transaction row — set to 'Double-click to edit spending types' when the row is not being edited and is not a ZERO_EVENT; undefined otherwise
     * @param {number} index - Zero-based index of the transaction row
     * @returns {Promise<string | null>} The title attribute value, or null if not present
     * @throws {Error} When the transaction card at the given index is not visible
     */
    getTransactionCardTitleAttribute(index: number): Promise<string | null>;
    /**
     * @desc Count the total number of transaction rows rendered in the list
     * @returns {Promise<number>} The number of transaction rows currently rendered
     */
    getTransactionCardCount(): Promise<number>;
    /**
     * @desc Extract the text content of the Cancel button (e.g. 'Cancel') to confirm its label
     * @returns {Promise<string>} The Cancel button text exactly as it appears
     * @throws {Error} When the Cancel button text content is not accessible or null
     */
    getCancelButtonText(): Promise<string>;
    /**
     * @desc Extract the text content of the Save button (e.g. 'Save') to confirm its label
     * @returns {Promise<string>} The Save button text exactly as it appears
     * @throws {Error} When the Save button text content is not accessible or null
     */
    getSaveButtonText(): Promise<string>;
    /**
     * @desc Extract the label text of a specific spending-type toggle button
     * @param {string} id - The ID of the spending type
     * @returns {Promise<string>} The spending-type toggle button label text exactly as it appears
     * @throws {Error} When the spending-type toggle button text content is not accessible or null
     */
    getSpendingTypeToggleText(id: string): Promise<string>;
    /**
     * @desc Count the total number of available spending-type toggle buttons rendered inside the editor
     * @returns {Promise<number>} The number of spending-type toggle buttons currently rendered
     */
    getSpendingTypeToggleCount(): Promise<number>;
    /**
     * @desc Get a list of label texts from all spending-type toggle buttons to enumerate all available spending types
     * @returns {Promise<string[]>} Array of label text strings from all spending-type toggle buttons, exactly as they appear
     * @throws {Error} When text content for any spending-type toggle button is null
     */
    getAllSpendingTypeToggleTexts(): Promise<string[]>;
    /**
     * @desc Get the CSS class list of a spending-type toggle button to determine whether it is currently selected (active styling vs. default)
     * @param {string} id - The ID of the spending type
     * @returns {Promise<string>} The class attribute value of the spending-type toggle button
     * @throws {Error} When the spending-type toggle button is not accessible or has no class attribute
     */
    getSpendingTypeToggleClassList(id: string): Promise<string>;
    /**
     * @desc Extract the inner HTML of the spending-type editor panel to inspect its full rendered content including toggle buttons and actions
     * @returns {Promise<string>} The inner HTML of the editor panel exactly as rendered
     * @throws {Error} When the editor panel inner HTML is not accessible or null
     */
    getEditorPanelInnerHtml(): Promise<string>;
}
