/**
 * Page Object Model: TransactionsPagination
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TransactionsPaginationPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_paginationContainer;
    private readonly selector_previousPageButton;
    private readonly selector_nextPageButton;
    private readonly selector_pageButtonsListContainer;
    private readonly selector_pageButton;
    private readonly selector_pageButtonItem;
    constructor(page: Page);
    /**
     * @desc Checks if the TransactionsPagination component is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the pagination container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a TransactionsPaginationPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TransactionsPaginationPOM>} A TransactionsPaginationPOM instance
     * @throws {Error} When the pagination container is not visible
     */
    static getPOM(page: Page): Promise<TransactionsPaginationPOM>;
    /**
     * @desc Check if the pagination container is visible on screen
     * @returns {Promise<boolean>} True if the pagination container is visible
     */
    isPaginationContainerVisible(): Promise<boolean>;
    /**
     * @desc Check if the previous page button is enabled (not disabled, i.e. not on the first page)
     * @returns {Promise<boolean>} True if the previous page button is enabled
     */
    isPreviousPageButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check if the next page button is enabled (not disabled, i.e. not on the last page)
     * @returns {Promise<boolean>} True if the next page button is enabled
     */
    isNextPageButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check if a specific page number button is visible in the pagination
     * @param {number | string} pageNumber - The page number to check
     * @returns {Promise<boolean>} True if the page button is visible
     */
    isPageButtonVisible(pageNumber: number | string): Promise<boolean>;
    /**
     * @desc Check if the page buttons list container is visible
     * @returns {Promise<boolean>} True if the page buttons list container is visible
     */
    isPageButtonsListContainerVisible(): Promise<boolean>;
    /**
     * @desc Check if a specific page number list item is visible
     * @param {number | string} pageNumber - The page number to check
     * @returns {Promise<boolean>} True if the page button item is visible
     */
    isPageButtonItemVisible(pageNumber: number | string): Promise<boolean>;
    /**
     * @desc clicks the previous page button to navigate to the previous page of transactions
     * Expected outcome is that the transactions list will update to show the previous page
     * @throws {Error} When the previous page button is not visible
     */
    clickPreviousPageButton(): Promise<void>;
    /**
     * @desc clicks the next page button to navigate to the next page of transactions
     * Expected outcome is that the transactions list will update to show the next page
     * @throws {Error} When the next page button is not visible
     */
    clickNextPageButton(): Promise<void>;
    /**
     * @desc clicks a specific page number button to navigate directly to that page
     * Expected outcome is that the transactions list will update to show the selected page
     * @param {number | string} pageNumber - The page number to navigate to
     * @throws {Error} When the specified page button is not visible
     */
    clickPageButton(pageNumber: number | string): Promise<void>;
    /**
     * @desc clicks an individual page number list item to navigate to that page
     * Expected outcome is that the transactions list will update to show the selected page
     * @param {number | string} pageNumber - The page number list item to click
     * @throws {Error} When the specified page button item is not visible
     */
    clickPageButtonItem(pageNumber: number | string): Promise<void>;
    /**
     * @desc Scroll within the page buttons list container if it overflows
     * Expected outcome is that additional page number buttons become visible
     * @param {number} deltaX - Horizontal scroll distance in pixels
     * @param {number} deltaY - Vertical scroll distance in pixels
     * @throws {Error} When the page buttons list container is not visible
     */
    scrollPageButtonsList(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Get the total number of pages available from the data-total-pages attribute
     * @returns {Promise<string>} The total pages value exactly as it appears in the attribute
     * @throws {Error} When the data-total-pages attribute is not accessible or null
     */
    getTotalPages(): Promise<string>;
    /**
     * @desc Get the currently active page number from the data-current-page attribute
     * @returns {Promise<string>} The current page value exactly as it appears in the attribute
     * @throws {Error} When the data-current-page attribute is not accessible or null
     */
    getCurrentPage(): Promise<string>;
    /**
     * @desc Get the visible text content of the previous page button (e.g. label or arrow symbol)
     * @returns {Promise<string>} The text content exactly as it appears
     * @throws {Error} When the previous page button text content is not accessible or null
     */
    getPreviousPageButtonText(): Promise<string>;
    /**
     * @desc Get the visible text content of the next page button (e.g. label or arrow symbol)
     * @returns {Promise<string>} The text content exactly as it appears
     * @throws {Error} When the next page button text content is not accessible or null
     */
    getNextPageButtonText(): Promise<string>;
    /**
     * @desc Get the visible text of a specific page number button
     * @param {number | string} pageNumber - The page number button to read
     * @returns {Promise<string>} The text content exactly as it appears
     * @throws {Error} When the page button text content is not accessible or null
     */
    getPageButtonText(pageNumber: number | string): Promise<string>;
    /**
     * @desc Get the CSS class list of a specific page number button to determine if it is the active/selected page
     * @param {number | string} pageNumber - The page number button to inspect
     * @returns {Promise<string>} The class attribute value exactly as it appears
     * @throws {Error} When the page button class attribute is not accessible or null
     */
    getPageButtonClassList(pageNumber: number | string): Promise<string>;
    /**
     * @desc Get the text content of a specific page number list item
     * @param {number | string} pageNumber - The page number list item to read
     * @returns {Promise<string>} The text content exactly as it appears
     * @throws {Error} When the page button item text content is not accessible or null
     */
    getPageButtonItemText(pageNumber: number | string): Promise<string>;
    /**
     * @desc Get the CSS class list of a specific page number list item to determine active/selected state
     * @param {number | string} pageNumber - The page number list item to inspect
     * @returns {Promise<string>} The class attribute value exactly as it appears
     * @throws {Error} When the page button item class attribute is not accessible or null
     */
    getPageButtonItemClassList(pageNumber: number | string): Promise<string>;
    /**
     * @desc Count the total number of page number buttons currently rendered in the list
     * @returns {Promise<number>} The count of rendered page button items
     */
    countPageButtonItems(): Promise<number>;
    /**
     * @desc Get the full inner HTML of the page buttons list container to inspect all rendered page items
     * @returns {Promise<string>} The inner HTML of the page buttons list container
     * @throws {Error} When the page buttons list container is not visible
     */
    getPageButtonsListInnerHtml(): Promise<string>;
    /**
     * @desc Get a list of all visible page number labels from the page buttons list
     * @returns {Promise<string[]>} Array of page number label strings as they appear in the UI
     */
    getPageButtonsListLabels(): Promise<string[]>;
}
