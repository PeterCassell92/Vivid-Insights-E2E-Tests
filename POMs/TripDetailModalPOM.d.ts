/**
 * Page Object Model: TripDetailModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TripDetailModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_modalContainer;
    private readonly selector_locationText;
    private readonly selector_editButton;
    private readonly selector_costSummaryContainer;
    private readonly selector_deleteButton;
    private readonly selector_datesText;
    private readonly selector_descriptionText;
    private readonly selector_budgetBreakdownContainer;
    private readonly selector_costCategoryRow;
    private readonly selector_budgetCategoryRow;
    constructor(page: Page);
    /**
     * @desc Checks if the TripDetailModal is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a TripDetailModalPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TripDetailModalPOM>} A TripDetailModalPOM instance
     * @throws {Error} When the modal is not visible
     */
    static getPOM(page: Page): Promise<TripDetailModalPOM>;
    /**
     * @desc Check whether the TripDetailModal is currently visible/open
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    isModalVisible(): Promise<boolean>;
    /**
     * @desc Check whether the location paragraph is visible (only present in view mode, not edit mode)
     * @returns {Promise<boolean>} True if the location text element is visible
     */
    isLocationVisible(): Promise<boolean>;
    /**
     * @desc Check whether the Edit Trip button is visible (only rendered in view mode)
     * @returns {Promise<boolean>} True if the edit button is visible
     */
    isEditButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the Edit Trip button is enabled
     * @returns {Promise<boolean>} True if the edit button is enabled
     */
    isEditButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the cost summary container is visible
     * @returns {Promise<boolean>} True if the cost summary container is visible
     */
    isCostSummaryVisible(): Promise<boolean>;
    /**
     * @desc Check whether a specific cost category row is rendered
     * Only present when cat.costEstimate is not null or cat.actualCost > 0
     * @param {string} categoryKey - The category key (e.g. 'primary_travel', 'accommodation', 'activities', 'general')
     * @returns {Promise<boolean>} True if the cost category row is visible
     */
    isCostCategoryRowVisible(categoryKey: string): Promise<boolean>;
    /**
     * @desc Check whether the delete button is visible in view mode
     * @returns {Promise<boolean>} True if the delete button is visible
     */
    isDeleteButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the delete button is enabled (disabled while isDeleting is true)
     * @returns {Promise<boolean>} True if the delete button is enabled
     */
    isDeleteButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the dates paragraph is visible in view mode
     * @returns {Promise<boolean>} True if the dates text element is visible
     */
    isDatesVisible(): Promise<boolean>;
    /**
     * @desc Check whether the description paragraph is rendered (conditionally present based on trip.description)
     * @returns {Promise<boolean>} True if the description text element is visible
     */
    isDescriptionVisible(): Promise<boolean>;
    /**
     * @desc Check whether the budget breakdown container is rendered (only present when totalBudget is not null)
     * @returns {Promise<boolean>} True if the budget breakdown container is visible
     */
    isBudgetBreakdownVisible(): Promise<boolean>;
    /**
     * @desc Close/dismiss the TripDetailModal overlay
     * Expected outcome is that the modal will close
     */
    clickDismiss(): Promise<void>;
    /**
     * @desc Click the Edit Trip button to switch the modal from view mode to edit mode, rendering the TripForm
     * Expected outcome is that the modal will switch to edit mode and TripForm will be rendered
     */
    clickEditButton(): Promise<void>;
    /**
     * @desc Click the Delete Trip button to trigger handleDelete; disabled while isDeleting is true
     * Expected outcome is that the trip deletion flow will be initiated
     */
    clickDeleteButton(): Promise<void>;
    /**
     * @desc Get the full inner HTML content of the modal container
     * @returns {Promise<string>} The inner HTML of the modal container
     * @throws {Error} When the modal container inner HTML is not accessible
     */
    getModalInnerHtml(): Promise<string>;
    /**
     * @desc Get the trip location text displayed in view mode
     * @returns {Promise<string>} The location text exactly as it appears in the UI
     * @throws {Error} When the location text content is not accessible
     */
    getLocationText(): Promise<string>;
    /**
     * @desc Get the label text of the edit button (always 'Edit Trip')
     * @returns {Promise<string>} The edit button label text exactly as it appears
     * @throws {Error} When the edit button text content is not accessible
     */
    getEditButtonText(): Promise<string>;
    /**
     * @desc Get the text content of a specific cost category row
     * (e.g. primary_travel, accommodation, activities, general) using the dynamic categoryKey parameter
     * @param {string} categoryKey - The category key identifying the row
     * @returns {Promise<string>} The cost category row text exactly as it appears
     * @throws {Error} When the cost category row text content is not accessible
     */
    getCostCategoryRowText(categoryKey: string): Promise<string>;
    /**
     * @desc Get the full text content of the cost summary section,
     * including loading state, populated summary, or empty state message
     * @returns {Promise<string>} The cost summary container text exactly as it appears
     * @throws {Error} When the cost summary container text content is not accessible
     */
    getCostSummaryText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the cost summary container to inspect all rendered cost data
     * @returns {Promise<string>} The inner HTML of the cost summary container
     * @throws {Error} When the cost summary container inner HTML is not accessible
     */
    getCostSummaryInnerHtml(): Promise<string>;
    /**
     * @desc Count the number of cost category rows currently rendered in the by-category breakdown table
     * @returns {Promise<number>} The count of rendered cost category rows
     */
    getCostCategoryRowCount(): Promise<number>;
    /**
     * @desc Read the 'disabled' HTML boolean attribute to determine if a deletion is currently in progress
     * @returns {Promise<string | null>} The value of the disabled attribute, or null if not present
     */
    getDeleteButtonDisabledAttribute(): Promise<string | null>;
    /**
     * @desc Get the label text of the delete button — 'Delete Trip' normally, 'Deleting...' while deletion is in progress
     * @returns {Promise<string>} The delete button label text exactly as it appears
     * @throws {Error} When the delete button text content is not accessible
     */
    getDeleteButtonText(): Promise<string>;
    /**
     * @desc Get the formatted trip date range text (e.g. '01 Jan 2024 - 15 Jan 2024')
     * @returns {Promise<string>} The dates text exactly as it appears in the UI
     * @throws {Error} When the dates text content is not accessible
     */
    getDatesText(): Promise<string>;
    /**
     * @desc Get the trip description text; only present when trip.description is truthy
     * @returns {Promise<string>} The description text exactly as it appears in the UI
     * @throws {Error} When the description text content is not accessible
     */
    getDescriptionText(): Promise<string>;
    /**
     * @desc Get the full text content of the budget breakdown section, including total and per-category values
     * @returns {Promise<string>} The budget breakdown container text exactly as it appears
     * @throws {Error} When the budget breakdown container text content is not accessible
     */
    getBudgetBreakdownText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the budget breakdown container to inspect all rendered budget rows
     * @returns {Promise<string>} The inner HTML of the budget breakdown container
     * @throws {Error} When the budget breakdown container inner HTML is not accessible
     */
    getBudgetBreakdownInnerHtml(): Promise<string>;
    /**
     * @desc Count the number of budget category rows rendered inside the breakdown grid
     * @returns {Promise<number>} The count of rendered budget category rows
     */
    getBudgetCategoryRowCount(): Promise<number>;
    /**
     * @desc Get the text content of a specific budget category row by its nth-child position within the grid
     * @param {number} rowIndex - The 1-based nth-child index of the budget category row
     * @returns {Promise<string>} The budget category row text exactly as it appears
     * @throws {Error} When the budget category row text content is not accessible
     */
    getBudgetCategoryRowText(rowIndex: number): Promise<string>;
}
