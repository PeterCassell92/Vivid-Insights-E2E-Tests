/**
 * Page Object Model: DecisionPathAutocomplete
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class DecisionPathAutocompletePOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_autocompleteWrapper;
    private readonly selector_autocompleteInput;
    private readonly selector_decisionPathDropdown;
    private readonly selector_decisionPathOption;
    private readonly selector_createOption;
    constructor(page: Page);
    /**
     * @desc Checks if the DecisionPathAutocomplete component is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the autocomplete wrapper is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a DecisionPathAutocompletePOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<DecisionPathAutocompletePOM>} A new DecisionPathAutocompletePOM instance
     * @throws {Error} When the autocomplete wrapper is not visible on screen
     */
    static getPOM(page: Page): Promise<DecisionPathAutocompletePOM>;
    /**
     * @desc Check whether the root autocomplete wrapper container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the autocomplete wrapper is visible
     */
    isAutocompleteWrapperVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the dropdown panel is currently visible
     * The dropdown renders only when showDropdown is true and there are filtered paths or a create option
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the dropdown is visible
     */
    isDecisionPathDropdownVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the autocomplete input is enabled
     * The input becomes disabled while a new decision path is being created (creating === true)
     * @returns {Promise<boolean>} True if the input is enabled
     */
    isAutocompleteInputEnabled(): Promise<boolean>;
    /**
     * @desc Click the autocomplete input to focus it and open the dropdown of available decision paths
     * Expected outcome is that the dropdown will open showing available decision paths
     */
    clickAutocompleteInput(): Promise<void>;
    /**
     * @desc Fill the autocomplete input with text to search or filter existing paths, or enter a new name to create one
     * Expected outcome is that the dropdown will filter to matching paths or show a create option
     * @param {string} text - The decision path name to type into the input
     */
    fillAutocompleteInput(text: string): Promise<void>;
    /**
     * @desc Clear the current text in the autocomplete input, resetting the selection and filter
     * Expected outcome is that the input will be empty and the dropdown will show all available paths
     */
    clearAutocompleteInput(): Promise<void>;
    /**
     * @desc Click a decision path option button inside the dropdown to select that path and close the dropdown
     * Expected outcome is that the path is selected, the input reflects the path name, and the dropdown closes
     * @param {string} pathId - The ID of the decision path option to click
     * @throws {Error} When the decision path option with the given ID is not visible in the dropdown
     */
    clickDecisionPathOption(pathId: string): Promise<void>;
    /**
     * @desc Click outside the wrapper to trigger the outside-click handler and dismiss the dropdown
     * Expected outcome is that the dropdown will close
     */
    clickAutocompleteWrapper(): Promise<void>;
    /**
     * @desc Scroll within the dropdown list to reveal more decision path options
     * The dropdown has a max-height of 60 with overflow-y-auto
     * @param {number} deltaY - The number of pixels to scroll vertically (positive scrolls down)
     */
    scrollDecisionPathDropdown(deltaY: number): Promise<void>;
    /**
     * @desc Get the position and dimensions of the autocomplete wrapper for layout or overlap assertions
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the wrapper
     * @throws {Error} When the bounding box cannot be retrieved (element not visible or not in DOM)
     */
    getAutocompleteWrapperBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the CSS class list of the root wrapper div to inspect dynamic className bindings
     * @returns {Promise<string>} The full class attribute value of the autocomplete wrapper
     * @throws {Error} When the class attribute is not accessible
     */
    getAutocompleteWrapperClassList(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the dropdown, including all rendered decision path option buttons and the optional create-new button
     * @returns {Promise<string>} The inner HTML of the dropdown
     * @throws {Error} When the dropdown is not visible or inner HTML is not accessible
     */
    getDecisionPathDropdownInnerHtml(): Promise<string>;
    /**
     * @desc Count the total number of decision path option buttons currently rendered in the dropdown
     * @returns {Promise<number>} The count of decision path option buttons in the dropdown
     */
    getDecisionPathOptionCount(): Promise<number>;
    /**
     * @desc Extract a list of visible decision path names from all rendered option buttons in the dropdown
     * @returns {Promise<string[]>} Array of decision path names exactly as they appear in the dropdown
     * @throws {Error} When text content of any option is not accessible
     */
    getDecisionPathOptionList(): Promise<string[]>;
    /**
     * @desc Get the placeholder attribute value of the autocomplete input
     * Default placeholder is 'Select or create a decision path'
     * @returns {Promise<string>} The placeholder attribute value
     * @throws {Error} When the placeholder attribute is not accessible
     */
    getAutocompleteInputPlaceholder(): Promise<string>;
    /**
     * @desc Get the current text value typed or populated in the autocomplete input field
     * Reflects the selected decision path name or in-progress search text
     * @returns {Promise<string>} The current input value exactly as it appears
     * @throws {Error} When the input value is not accessible
     */
    getAutocompleteInputValue(): Promise<string>;
}
