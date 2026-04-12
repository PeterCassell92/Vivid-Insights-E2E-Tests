/**
 * Page Object Model: TransactionsFilter
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TransactionsFilterPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_filterContainer;
    private readonly selector_typeDropdown;
    private readonly selector_searchInput;
    private readonly selector_statusDropdown;
    private readonly selector_resetButton;
    private readonly selector_dateRangePickerStart;
    private readonly selector_applyButton;
    private readonly selector_dateRangePickerEnd;
    private readonly selector_filterChip;
    private readonly selector_filterChipListContainer;
    private readonly selector_filterChipRemoveButton;
    private readonly selector_dateRangePickerContainer;
    constructor(page: Page);
    /**
     * @desc Checks if the TransactionsFilter component is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the filter container is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a TransactionsFilterPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TransactionsFilterPOM>} A TransactionsFilterPOM instance
     * @throws {Error} When the transactions filter container is not visible
     */
    static getPOM(page: Page): Promise<TransactionsFilterPOM>;
    /**
     * @desc Check if the main filter container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the filter container is visible
     */
    isFilterContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check if the apply button is enabled (i.e. filters have been changed and can be applied)
     * @returns {Promise<boolean>} True if the apply button is enabled
     */
    isApplyButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check if the reset button is enabled (i.e. there are active filters to clear)
     * @returns {Promise<boolean>} True if the reset button is enabled
     */
    isResetButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check if a specific active filter chip is visible by its filterKey
     * @param {string} filterKey - The key identifying the filter chip
     * @returns {Promise<boolean>} True if the filter chip is visible
     */
    isFilterChipVisible(filterKey: string): Promise<boolean>;
    /**
     * @desc Check if the filter chip list container is visible (i.e. there are active filters)
     * @returns {Promise<boolean>} True if the filter chip list container is visible
     */
    isFilterChipListVisible(): Promise<boolean>;
    /**
     * @desc Check if the date range picker container is visible on screen
     * @returns {Promise<boolean>} True if the date range picker container is visible
     */
    isDateRangePickerVisible(): Promise<boolean>;
    /**
     * @desc clicks the reset button to clear all active filters
     * Expected outcome is that all active filters will be cleared
     */
    clickResetButton(): Promise<void>;
    /**
     * @desc clicks the apply button to apply selected filters
     * Expected outcome is that the selected filters will be applied to the transactions list
     */
    clickApplyButton(): Promise<void>;
    /**
     * @desc clicks a specific active filter chip by its filterKey to interact with it
     * Expected outcome is that the filter chip will be interacted with
     * @param {string} filterKey - The key identifying the filter chip to click
     */
    clickFilterChip(filterKey: string): Promise<void>;
    /**
     * @desc clicks the remove/dismiss button on a specific active filter chip to remove that filter
     * Expected outcome is that the specified filter will be removed from the active filters
     * @param {string} filterKey - The key identifying the filter chip whose remove button should be clicked
     */
    clickFilterChipRemoveButton(filterKey: string): Promise<void>;
    /**
     * @desc Enter a start date into the date range start input
     * Expected outcome is that the start date field will be populated with the given value
     * @param {string} date - The start date value to enter
     */
    fillDateRangePickerStart(date: string): Promise<void>;
    /**
     * @desc Clear the start date input field
     * Expected outcome is that the start date field will be emptied
     */
    clearDateRangePickerStart(): Promise<void>;
    /**
     * @desc Enter an end date into the date range end input
     * Expected outcome is that the end date field will be populated with the given value
     * @param {string} date - The end date value to enter
     */
    fillDateRangePickerEnd(date: string): Promise<void>;
    /**
     * @desc Clear the end date input field
     * Expected outcome is that the end date field will be emptied
     */
    clearDateRangePickerEnd(): Promise<void>;
    /**
     * @desc Type a keyword into the search/filter text input
     * Expected outcome is that the search input will contain the provided keyword
     * @param {string} keyword - The keyword to enter into the search input
     */
    fillSearchInput(keyword: string): Promise<void>;
    /**
     * @desc Clear the keyword search input field
     * Expected outcome is that the search input will be emptied
     */
    clearSearchInput(): Promise<void>;
    /**
     * @desc Select a transaction type from the type dropdown filter
     * Expected outcome is that the type dropdown will reflect the selected value
     * @param {string} value - The option value to select from the type dropdown
     */
    selectTypeDropdown(value: string): Promise<void>;
    /**
     * @desc Select a status from the status dropdown filter
     * Expected outcome is that the status dropdown will reflect the selected value
     * @param {string} value - The option value to select from the status dropdown
     */
    selectStatusDropdown(value: string): Promise<void>;
    /**
     * @desc Scroll within the main filter container
     * Expected outcome is that the filter container will scroll to the specified position
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollFilterContainer(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Scroll within the filter chip list container to view all active filter chips
     * Expected outcome is that the chip list will scroll to reveal additional chips
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollFilterChipList(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Get the current value of the start date input
     * @returns {Promise<string>} The current value of the start date input exactly as it appears
     * @throws {Error} When the start date input value is not accessible
     */
    getDateRangePickerStartValue(): Promise<string>;
    /**
     * @desc Get the current value of the end date input
     * @returns {Promise<string>} The current value of the end date input exactly as it appears
     * @throws {Error} When the end date input value is not accessible
     */
    getDateRangePickerEndValue(): Promise<string>;
    /**
     * @desc Get the current text value entered in the keyword search input
     * @returns {Promise<string>} The current value of the search input exactly as it appears
     * @throws {Error} When the search input value is not accessible
     */
    getSearchInputValue(): Promise<string>;
    /**
     * @desc Get the current value of the type dropdown filter
     * @returns {Promise<string>} The current selected value of the type dropdown exactly as it appears
     * @throws {Error} When the type dropdown value is not accessible
     */
    getTypeDropdownValue(): Promise<string>;
    /**
     * @desc Get the current value of the status dropdown filter
     * @returns {Promise<string>} The current selected value of the status dropdown exactly as it appears
     * @throws {Error} When the status dropdown value is not accessible
     */
    getStatusDropdownValue(): Promise<string>;
    /**
     * @desc Get the label text of a specific active filter chip by its filterKey
     * @param {string} filterKey - The key identifying the filter chip
     * @returns {Promise<string>} The text content of the filter chip exactly as it appears
     * @throws {Error} When the filter chip text content is null or not accessible
     */
    getFilterChipText(filterKey: string): Promise<string>;
    /**
     * @desc Get the data-filter-count attribute to retrieve the number of currently active filters
     * @returns {Promise<string>} The value of the data-filter-count attribute
     * @throws {Error} When the data-filter-count attribute is not accessible
     */
    getFilterCountAttribute(): Promise<string>;
    /**
     * @desc Get the data-filter-active attribute to determine if any filters are currently active
     * @returns {Promise<string>} The value of the data-filter-active attribute
     * @throws {Error} When the data-filter-active attribute is not accessible
     */
    getFilterActiveAttribute(): Promise<string>;
    /**
     * @desc Get a list of all active filter chip label texts currently displayed
     * @returns {Promise<string[]>} An array of text content strings for each visible filter chip
     * @throws {Error} When the filter chip list container is not accessible
     */
    getFilterChipListTexts(): Promise<string[]>;
    /**
     * @desc Count the total number of active filter chips currently displayed
     * @returns {Promise<number>} The number of active filter chips
     * @throws {Error} When the filter chip list container is not accessible
     */
    getFilterChipCount(): Promise<number>;
    /**
     * @desc Get the full inner HTML of the filter chip list container to inspect all rendered chips
     * @returns {Promise<string>} The inner HTML of the filter chip list container
     * @throws {Error} When the filter chip list container inner HTML is not accessible
     */
    getFilterChipListInnerHtml(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the date range picker container
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the date range picker container
     * @throws {Error} When the date range picker container bounding box is not accessible
     */
    getDateRangePickerBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the data-start-date attribute reflecting the currently selected start date
     * @returns {Promise<string>} The value of the data-start-date attribute
     * @throws {Error} When the data-start-date attribute is not accessible
     */
    getDateRangePickerStartDateAttribute(): Promise<string>;
    /**
     * @desc Get the data-end-date attribute reflecting the currently selected end date
     * @returns {Promise<string>} The value of the data-end-date attribute
     * @throws {Error} When the data-end-date attribute is not accessible
     */
    getDateRangePickerEndDateAttribute(): Promise<string>;
}
