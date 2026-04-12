/**
 * Page Object Model: TransactionRecordsTableFilters
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TransactionRecordsTableFiltersPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_transactionFiltersContainer;
    private readonly selector_collapseFiltersButton;
    private readonly selector_activeFiltersBadge;
    private readonly selector_showDescriptionFilterCheckbox;
    private readonly selector_descriptionFilterInput;
    private readonly selector_showDateFilterCheckbox;
    private readonly selector_startDateFilterInput;
    private readonly selector_endDateFilterInput;
    private readonly selector_showSpendingTypeFilterCheckbox;
    private readonly selector_spendingTypeFilterPanel;
    private readonly selector_spendingTypeTag;
    private readonly selector_showAmountFilterCheckbox;
    private readonly selector_amountOperatorGreaterThanButton;
    private readonly selector_amountOperatorLessThanButton;
    private readonly selector_amountValueFilterInput;
    private readonly selector_applyFiltersButton;
    private readonly selector_clearFiltersButton;
    constructor(page: Page);
    /**
     * @desc Checks if the transaction filters panel is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the filters panel root element is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method — validates visibility then returns a POM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TransactionRecordsTableFiltersPOM>} A ready-to-use POM instance
     * @throws {Error} When the transaction filters panel is not visible
     */
    static getPOM(page: Page): Promise<TransactionRecordsTableFiltersPOM>;
    /**
     * @desc Whether or not the root transaction filters container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the filters container is visible
     */
    isTransactionFiltersContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the "Active" filters badge is visible, indicating at least one filter is applied
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the active filters badge is visible
     */
    isActiveFiltersBadgeVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the description filter input is visible (i.e. the description section is expanded)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the description filter input is visible
     */
    isDescriptionFilterInputVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the start date filter input is visible (i.e. the date range section is expanded)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the start date filter input is visible
     */
    isStartDateFilterInputVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the end date filter input is visible (i.e. the date range section is expanded)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the end date filter input is visible
     */
    isEndDateFilterInputVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the spending type filter panel is visible (i.e. the spending type section is expanded)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the spending type filter panel is visible
     */
    isSpendingTypeFilterPanelVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not a specific spending type tag is visible inside the spending type filter panel
     * @param {string} spendingTypeId - The spending type ID whose tag to check
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the spending type tag is visible
     */
    isSpendingTypeTagVisible(spendingTypeId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the amount value filter input is visible (i.e. the amount section is expanded)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the amount value filter input is visible
     */
    isAmountValueFilterInputVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the show-description-filter checkbox is checked
     * @returns {Promise<boolean>} True if the checkbox is checked
     */
    isShowDescriptionFilterCheckboxChecked(): Promise<boolean>;
    /**
     * @desc Whether or not the show-date-filter checkbox is checked
     * @returns {Promise<boolean>} True if the checkbox is checked
     */
    isShowDateFilterCheckboxChecked(): Promise<boolean>;
    /**
     * @desc Whether or not the show-spending-type-filter checkbox is checked
     * @returns {Promise<boolean>} True if the checkbox is checked
     */
    isShowSpendingTypeFilterCheckboxChecked(): Promise<boolean>;
    /**
     * @desc Whether or not the show-amount-filter checkbox is checked
     * @returns {Promise<boolean>} True if the checkbox is checked
     */
    isShowAmountFilterCheckboxChecked(): Promise<boolean>;
    /**
     * @desc Clicks the collapse/expand toggle button on the filters panel header
     * Expected outcome is that the filters panel body will toggle between collapsed and expanded states
     */
    clickCollapseFiltersButton(): Promise<void>;
    /**
     * @desc Clicks the show-description-filter checkbox to toggle the description filter section visibility
     * Expected outcome is that the description filter input will appear or disappear
     */
    clickShowDescriptionFilterCheckbox(): Promise<void>;
    /**
     * @desc Fills the description filter input with the given text
     * Expected outcome is that the description field value is updated
     * @param {string} description - The description text to filter by
     */
    enterTextDescriptionFilterInput(description: string): Promise<void>;
    /**
     * @desc Clears the description filter input
     * Expected outcome is that the description field is empty
     */
    clearDescriptionFilterInput(): Promise<void>;
    /**
     * @desc Clicks the show-date-filter checkbox to toggle the date range filter section visibility
     * Expected outcome is that the start and end date inputs will appear or disappear
     */
    clickShowDateFilterCheckbox(): Promise<void>;
    /**
     * @desc Clicks the start date filter input to open the date picker
     * Expected outcome is that the DatePicker component will open
     */
    clickStartDateFilterInput(): Promise<void>;
    /**
     * @desc Clicks the end date filter input to open the date picker
     * Expected outcome is that the DatePicker component will open
     */
    clickEndDateFilterInput(): Promise<void>;
    /**
     * @desc Clicks the show-spending-type-filter checkbox to toggle the spending type filter section visibility
     * Expected outcome is that the spending type filter panel will appear or disappear
     */
    clickShowSpendingTypeFilterCheckbox(): Promise<void>;
    /**
     * @desc Clicks the show-amount-filter checkbox to toggle the amount filter section visibility
     * Expected outcome is that the amount operator buttons and value input will appear or disappear
     */
    clickShowAmountFilterCheckbox(): Promise<void>;
    /**
     * @desc Clicks the 'Greater Than' amount operator toggle button
     * Expected outcome is that the 'Greater Than' operator is selected (button variant becomes 'default')
     */
    clickAmountOperatorGreaterThanButton(): Promise<void>;
    /**
     * @desc Clicks the 'Less Than' amount operator toggle button
     * Expected outcome is that the 'Less Than' operator is selected (button variant becomes 'default')
     */
    clickAmountOperatorLessThanButton(): Promise<void>;
    /**
     * @desc Fills the amount value filter input with the given numeric value
     * Expected outcome is that the amount threshold field is updated
     * @param {string} amount - The amount value to filter by (e.g. '100.00')
     */
    enterTextAmountValueFilterInput(amount: string): Promise<void>;
    /**
     * @desc Clears the amount value filter input
     * Expected outcome is that the amount threshold field is empty
     */
    clearAmountValueFilterInput(): Promise<void>;
    /**
     * @desc Clicks the 'Apply Filters' button to submit the active filter selections
     * Expected outcome is that the filters are applied and the transactions table is refreshed
     */
    clickApplyFiltersButton(): Promise<void>;
    /**
     * @desc Clicks the 'Clear' button to reset all filters and re-fetch unfiltered data
     * Expected outcome is that all filter inputs are reset and the transactions table shows unfiltered results
     */
    clickClearFiltersButton(): Promise<void>;
    /**
     * @desc Gets the current value of the description filter input exactly as it appears in the UI
     * @returns {Promise<string>} The description filter input value
     * @throws {Error} When the description filter input value is not accessible
     */
    getDescriptionFilterInputValue(): Promise<string>;
    /**
     * @desc Gets the current value of the amount value filter input exactly as it appears in the UI
     * @returns {Promise<string>} The amount value filter input value
     * @throws {Error} When the amount value filter input value is not accessible
     */
    getAmountValueFilterInputValue(): Promise<string>;
    /**
     * @desc Gets the text content of the active filters badge exactly as it appears in the UI
     * @returns {Promise<string>} The badge text content
     * @throws {Error} When the active filters badge is not visible or its content is null
     */
    getActiveFiltersBadgeText(): Promise<string>;
    /**
     * @desc Gets all visible spending type tag texts from the spending type filter panel
     * @returns {Promise<string[]>} Array of spending type tag text values exactly as they appear
     * @throws {Error} When the spending type filter panel is not visible
     */
    getSpendingTypeTagTexts(): Promise<string[]>;
}
