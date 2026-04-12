/**
 * Page Object Model: DecisionPathAutocomplete
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const DecisionPathAutocompletePOM_StandardSelector = '[data-testid="decision-path-autocomplete"]';

export class DecisionPathAutocompletePOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===
  private readonly rootSelector: string;
  private readonly selector_autocompleteWrapper: string;
  private readonly selector_autocompleteInput: string;
  private readonly selector_decisionPathDropdown: string;
  private readonly selector_decisionPathOption: (pathId: string) => string;
  private readonly selector_createOption: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = DecisionPathAutocompletePOM_StandardSelector;

    this.selector_autocompleteWrapper = this.rootSelector;
    this.selector_autocompleteInput = `${this.rootSelector} [data-testid="decision-path-autocomplete-input"]`;
    this.selector_decisionPathDropdown = `${this.rootSelector} [data-testid="decision-path-dropdown"]`;
    this.selector_decisionPathOption = (pathId: string) =>
      `${this.rootSelector} [data-testid="decision-path-option__${pathId}"]`;
    this.selector_createOption = `${this.rootSelector} [data-testid="decision-path-create-option"]`;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the DecisionPathAutocomplete component is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the autocomplete wrapper is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const wrapper = page.locator(DecisionPathAutocompletePOM_StandardSelector);
      return await wrapper.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a DecisionPathAutocompletePOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<DecisionPathAutocompletePOM>} A new DecisionPathAutocompletePOM instance
   * @throws {Error} When the autocomplete wrapper is not visible on screen
   */
  static async getPOM(page: Page): Promise<DecisionPathAutocompletePOM> {
    const isVisible = await DecisionPathAutocompletePOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'DecisionPathAutocompletePOM: Cannot instantiate - component is not visible. ' +
        `Expected element [${DecisionPathAutocompletePOM_StandardSelector}] to be visible.`
      );
    }

    return new DecisionPathAutocompletePOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Check whether the root autocomplete wrapper container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the autocomplete wrapper is visible
   */
  async isAutocompleteWrapperVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_autocompleteWrapper).isVisible({ timeout });
  }

  /**
   * @desc Check whether the dropdown panel is currently visible
   * The dropdown renders only when showDropdown is true and there are filtered paths or a create option
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the dropdown is visible
   */
  async isDecisionPathDropdownVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_decisionPathDropdown).isVisible({ timeout });
  }

  /**
   * @desc Check whether the autocomplete input is enabled
   * The input becomes disabled while a new decision path is being created (creating === true)
   * @returns {Promise<boolean>} True if the input is enabled
   */
  async isAutocompleteInputEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_autocompleteInput).isEnabled();
  }

  // === ACTION METHODS ===

  /**
   * @desc Click the autocomplete input to focus it and open the dropdown of available decision paths
   * Expected outcome is that the dropdown will open showing available decision paths
   */
  async clickAutocompleteInput(): Promise<void> {
    await this.page.locator(this.selector_autocompleteInput).click();
  }

  /**
   * @desc Fill the autocomplete input with text to search or filter existing paths, or enter a new name to create one
   * Expected outcome is that the dropdown will filter to matching paths or show a create option
   * @param {string} text - The decision path name to type into the input
   */
  async fillAutocompleteInput(text: string): Promise<void> {
    await this.page.locator(this.selector_autocompleteInput).fill(text);
  }

  /**
   * @desc Clear the current text in the autocomplete input, resetting the selection and filter
   * Expected outcome is that the input will be empty and the dropdown will show all available paths
   */
  async clearAutocompleteInput(): Promise<void> {
    await this.page.locator(this.selector_autocompleteInput).clear();
  }

  /**
   * @desc Click a decision path option button inside the dropdown to select that path and close the dropdown
   * Expected outcome is that the path is selected, the input reflects the path name, and the dropdown closes
   * @param {string} pathId - The ID of the decision path option to click
   * @throws {Error} When the decision path option with the given ID is not visible in the dropdown
   */
  async clickDecisionPathOption(pathId: string): Promise<void> {
    const selector = this.selector_decisionPathOption(pathId);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `DecisionPathAutocompletePOM: Cannot click decision path option - option with pathId "${pathId}" is not visible. ` +
        `Selector: ${selector}`
      );
    }

    await this.page.locator(selector).click();
  }

  /**
   * @desc Click outside the wrapper to trigger the outside-click handler and dismiss the dropdown
   * Expected outcome is that the dropdown will close
   */
  async clickAutocompleteWrapper(): Promise<void> {
    await this.page.locator(this.selector_autocompleteWrapper).click();
  }

  /**
   * @desc Scroll within the dropdown list to reveal more decision path options
   * The dropdown has a max-height of 60 with overflow-y-auto
   * @param {number} deltaY - The number of pixels to scroll vertically (positive scrolls down)
   */
  async scrollDecisionPathDropdown(deltaY: number): Promise<void> {
    await this.page.locator(this.selector_decisionPathDropdown).evaluate(
      (el, delta) => { el.scrollTop += delta; },
      deltaY
    );
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Get the position and dimensions of the autocomplete wrapper for layout or overlap assertions
   * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the wrapper
   * @throws {Error} When the bounding box cannot be retrieved (element not visible or not in DOM)
   */
  async getAutocompleteWrapperBoundingBox(): Promise<{ x: number; y: number; width: number; height: number }> {
    const boundingBox = await this.page.locator(this.selector_autocompleteWrapper).boundingBox();

    if (!boundingBox) {
      throw new Error(
        `DecisionPathAutocompletePOM: Cannot get bounding box - element is not visible or not in DOM. ` +
        `Selector: ${this.selector_autocompleteWrapper}`
      );
    }

    return boundingBox;
  }

  /**
   * @desc Get the CSS class list of the root wrapper div to inspect dynamic className bindings
   * @returns {Promise<string>} The full class attribute value of the autocomplete wrapper
   * @throws {Error} When the class attribute is not accessible
   */
  async getAutocompleteWrapperClassList(): Promise<string> {
    const classList = await this.page.locator(this.selector_autocompleteWrapper).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `DecisionPathAutocompletePOM: Cannot get class list - class attribute is null. ` +
        `Selector: ${this.selector_autocompleteWrapper}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the full inner HTML of the dropdown, including all rendered decision path option buttons and the optional create-new button
   * @returns {Promise<string>} The inner HTML of the dropdown
   * @throws {Error} When the dropdown is not visible or inner HTML is not accessible
   */
  async getDecisionPathDropdownInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_decisionPathDropdown).isVisible();
    const innerHTML = await this.page.locator(this.selector_decisionPathDropdown).innerHTML();

    if (innerHTML === null) {
      throw new Error(
        `DecisionPathAutocompletePOM: Cannot get inner HTML - dropdown content is not accessible. ` +
        `Selector: ${this.selector_decisionPathDropdown}`
      );
    }

    return innerHTML;
  }

  /**
   * @desc Count the total number of decision path option buttons currently rendered in the dropdown
   * @returns {Promise<number>} The count of decision path option buttons in the dropdown
   */
  async getDecisionPathOptionCount(): Promise<number> {
    const allOptionsSelector = `${this.rootSelector} [data-testid^="decision-path-option__"]`;
    return await this.page.locator(allOptionsSelector).count();
  }

  /**
   * @desc Extract a list of visible decision path names from all rendered option buttons in the dropdown
   * @returns {Promise<string[]>} Array of decision path names exactly as they appear in the dropdown
   * @throws {Error} When text content of any option is not accessible
   */
  async getDecisionPathOptionList(): Promise<string[]> {
    const allOptionsSelector = `${this.rootSelector} [data-testid^="decision-path-option__"]`;
    const options = this.page.locator(allOptionsSelector);
    const count = await options.count();
    const names: string[] = [];

    for (let i = 0; i < count; i++) {
      const nameEl = options.nth(i).locator('.font-medium');
      const text = await nameEl.textContent();

      if (text === null) {
        throw new Error(
          `DecisionPathAutocompletePOM: Cannot get text content for decision path option at index ${i}. ` +
          `Selector: ${allOptionsSelector}`
        );
      }

      names.push(text);
    }

    return names;
  }

  /**
   * @desc Get the placeholder attribute value of the autocomplete input
   * Default placeholder is 'Select or create a decision path'
   * @returns {Promise<string>} The placeholder attribute value
   * @throws {Error} When the placeholder attribute is not accessible
   */
  async getAutocompleteInputPlaceholder(): Promise<string> {
    const placeholder = await this.page.locator(this.selector_autocompleteInput).getAttribute('placeholder');

    if (placeholder === null) {
      throw new Error(
        `DecisionPathAutocompletePOM: Cannot get placeholder attribute - attribute is null. ` +
        `Selector: ${this.selector_autocompleteInput}`
      );
    }

    return placeholder;
  }

  /**
   * @desc Get the current text value typed or populated in the autocomplete input field
   * Reflects the selected decision path name or in-progress search text
   * @returns {Promise<string>} The current input value exactly as it appears
   * @throws {Error} When the input value is not accessible
   */
  async getAutocompleteInputValue(): Promise<string> {
    const value = await this.page.locator(this.selector_autocompleteInput).inputValue();

    if (value === null) {
      throw new Error(
        `DecisionPathAutocompletePOM: Cannot get input value - value is not accessible. ` +
        `Selector: ${this.selector_autocompleteInput}`
      );
    }

    return value;
  }
}