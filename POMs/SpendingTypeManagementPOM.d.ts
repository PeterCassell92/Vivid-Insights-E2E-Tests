/**
 * Page Object Model: SpendingTypeManagement
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class SpendingTypeManagementPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_managementContainer;
    private readonly selector_createFormCollapsibleButton;
    private readonly selector_collapseSpendingTypesButton;
    private readonly selector_spendingTypeItem;
    private readonly selector_allSpendingTypeItems;
    constructor(page: Page);
    /**
     * @desc Checks if the SpendingTypeManagement panel is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the root container is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a SpendingTypeManagementPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<SpendingTypeManagementPOM>} A SpendingTypeManagementPOM instance
     * @throws {Error} When the SpendingTypeManagement panel is not visible
     */
    static getPOM(page: Page): Promise<SpendingTypeManagementPOM>;
    /**
     * @desc Check whether the root SpendingTypeManagement panel is visible on screen
     * @returns {Promise<boolean>} True if the management container is visible
     */
    isManagementContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the Create New Spending Type collapsible form section is currently visible (i.e., not collapsed)
     * @returns {Promise<boolean>} True if the create form collapsible button is visible
     */
    isCreateFormCollapsibleButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the top-level collapsible toggle button for the Spending Types section is visible
     * @returns {Promise<boolean>} True if the collapse spending types button is visible
     */
    isCollapseSpendingTypesButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether a specific spending type item is visible in the list
     * @param {string} id - The ID of the spending type item
     * @returns {Promise<boolean>} True if the spending type item is visible
     */
    isSpendingTypeItemVisible(id: string): Promise<boolean>;
    /**
     * @desc Click the collapsible toggle to expand or collapse the Create New Spending Type form sub-section
     * Expected outcome is that the create form section will toggle its collapsed/expanded state
     */
    clickCreateFormCollapsibleButton(): Promise<void>;
    /**
     * @desc Double-click a specific spending type item to toggle its filter state
     * Expected outcome is that the spending type filter will be toggled (only effective when filterEnabled is true)
     * @param {string} id - The ID of the spending type item to double-click
     */
    doubleClickSpendingTypeItem(id: string): Promise<void>;
    /**
     * @desc Click the top-level collapsible toggle to expand or collapse the entire Spending Types section
     * Expected outcome is that the entire spending types section will toggle its collapsed/expanded state
     */
    clickCollapseSpendingTypesButton(): Promise<void>;
    /**
     * @desc Get the full inner HTML of the SpendingTypeManagement root container
     * @returns {Promise<string>} The inner HTML of the management container
     * @throws {Error} When the management container inner HTML is not accessible
     */
    getManagementContainerInnerHtml(): Promise<string>;
    /**
     * @desc Get the CSS class list of the create form collapsible toggle button to inspect its current state
     * @returns {Promise<string>} The class attribute value of the create form collapsible button
     * @throws {Error} When the class attribute is not accessible
     */
    getCreateFormCollapsibleButtonClassList(): Promise<string>;
    /**
     * @desc Get the data-spending-type-name attribute value from a specific spending type list item to read its display name
     * @param {string} id - The ID of the spending type item
     * @returns {Promise<string>} The data-spending-type-name attribute value
     * @throws {Error} When the attribute is not accessible or null
     */
    getSpendingTypeItemName(id: string): Promise<string>;
    /**
     * @desc Get a list of all spending type name values from the data-spending-type-name attribute across all rendered spending type items
     * @returns {Promise<string[]>} Array of spending type name values
     */
    getAllSpendingTypeNames(): Promise<string[]>;
    /**
     * @desc Get the visible text content of a specific spending type item, including its name and optional description
     * @param {string} id - The ID of the spending type item
     * @returns {Promise<string>} The text content of the spending type item exactly as it appears
     * @throws {Error} When the text content is not accessible or null
     */
    getSpendingTypeItemText(id: string): Promise<string>;
    /**
     * @desc Get the CSS class list of a specific spending type item to determine whether it is currently active/filtered (border-blue-500) or inactive (border-gray-200)
     * @param {string} id - The ID of the spending type item
     * @returns {Promise<string>} The class attribute value of the spending type item
     * @throws {Error} When the class attribute is not accessible
     */
    getSpendingTypeItemClassList(id: string): Promise<string>;
    /**
     * @desc Count the number of spending type items currently rendered in the existing types list
     * @returns {Promise<number>} The number of spending type items rendered
     */
    getSpendingTypeItemCount(): Promise<number>;
    /**
     * @desc Get the aria-label attribute of the top-level collapsible toggle to determine the current collapsed/expanded state ('Expand spending types' vs 'Collapse spending types')
     * @returns {Promise<string>} The aria-label attribute value of the collapse spending types button
     * @throws {Error} When the aria-label attribute is not accessible
     */
    getCollapseSpendingTypesButtonAriaLabel(): Promise<string>;
}
