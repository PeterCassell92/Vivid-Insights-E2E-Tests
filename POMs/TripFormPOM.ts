/**
 * Page Object Model: TripForm
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

// Root selector constant
const TripFormPOM_StandardSelector = '[data-testid="trip-form"]';

export class TripFormPOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===

  private readonly rootSelector: string;
  private readonly selector_tripFormRoot: string;
  private readonly selector_tripFormError: string;
  private readonly selector_tripFormNameInput: string;
  private readonly selector_tripFormLocationInput: string;
  private readonly selector_tripFormStartDatePicker: string;
  private readonly selector_tripFormEndDatePicker: string;
  private readonly selector_tripFormDescriptionTextarea: string;
  private readonly selector_tripFormColorInput: string;
  private readonly selector_tripFormCurrencySelect: string;
  private readonly selector_tripFormBudgetSectionContainer: string;
  private readonly selector_tripFormBudgetPrimaryTravel: string;
  private readonly selector_tripFormBudgetAccommodation: string;
  private readonly selector_tripFormBudgetActivities: string;
  private readonly selector_tripFormBudgetGeneral: string;
  private readonly selector_tripFormBudgetTotal: string;
  private readonly selector_tripFormSubmitButton: string;
  private readonly selector_tripFormCancelButton: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = TripFormPOM_StandardSelector;

    // Root
    this.selector_tripFormRoot = this.rootSelector;

    // Error banner
    this.selector_tripFormError = `${this.rootSelector} [data-testid="trip-form-error"]`;

    // Basic fields
    this.selector_tripFormNameInput = `${this.rootSelector} [data-testid="trip-form-name"]`;
    this.selector_tripFormLocationInput = `${this.rootSelector} [data-testid="trip-form-location"]`;
    this.selector_tripFormDescriptionTextarea = `${this.rootSelector} [data-testid="trip-form-description"]`;
    this.selector_tripFormColorInput = `${this.rootSelector} [data-testid="trip-form-color"]`;
    this.selector_tripFormCurrencySelect = `${this.rootSelector} [data-testid="trip-form-currency"]`;

    // Date pickers (child DatePicker BUENT roots)
    this.selector_tripFormStartDatePicker = `${this.rootSelector} [data-testid="trip-form-start-date"]`;
    this.selector_tripFormEndDatePicker = `${this.rootSelector} [data-testid="trip-form-end-date"]`;

    // Budget section
    this.selector_tripFormBudgetSectionContainer = `${this.rootSelector} .border.border-gray-200.rounded-lg`;
    this.selector_tripFormBudgetPrimaryTravel = `${this.rootSelector} [data-testid="trip-form-budget-primary-travel"]`;
    this.selector_tripFormBudgetAccommodation = `${this.rootSelector} [data-testid="trip-form-budget-accommodation"]`;
    this.selector_tripFormBudgetActivities = `${this.rootSelector} [data-testid="trip-form-budget-activities"]`;
    this.selector_tripFormBudgetGeneral = `${this.rootSelector} [data-testid="trip-form-budget-general"]`;
    this.selector_tripFormBudgetTotal = `${this.rootSelector} [data-testid="trip-form-budget-total"]`;

    // Action buttons
    this.selector_tripFormSubmitButton = `${this.rootSelector} [data-testid="trip-form-submit"]`;
    this.selector_tripFormCancelButton = `${this.rootSelector} [data-testid="trip-form-cancel"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the TripForm root element is visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the TripForm is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const root = page.locator(TripFormPOM_StandardSelector);
      return await root.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method — validates visibility and returns a TripFormPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<TripFormPOM>} A TripFormPOM instance
   * @throws {Error} When the TripForm root element is not visible
   */
  static async getPOM(page: Page): Promise<TripFormPOM> {
    const isVisible = await TripFormPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'TripFormPOM: Cannot instantiate — TripForm is not visible. ' +
          `Expected element [${TripFormPOM_StandardSelector}] to be visible.`
      );
    }

    return new TripFormPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the root TripForm element is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the TripForm root is visible
   */
  async isTripFormVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tripFormRoot).isVisible({ timeout });
  }

  /**
   * @desc Check whether the budget breakdown section container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the budget section container is visible
   */
  async isBudgetSectionVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_tripFormBudgetSectionContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the error banner is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the error banner is visible
   */
  async isErrorBannerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_tripFormError).isVisible({ timeout });
  }

  /**
   * @desc Check whether the submit button is disabled
   * @returns {Promise<boolean>} True if the submit button is disabled (e.g. isLoading=true)
   */
  async isSubmitButtonDisabled(): Promise<boolean> {
    return await this.page.locator(this.selector_tripFormSubmitButton).isDisabled();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Types a value into the trip name input field
   * Expected outcome is that the name field is populated with the given value
   * @param {string} name - The trip name to enter
   */
  async typeIntoNameInput(name: string): Promise<void> {
    await this.page.locator(this.selector_tripFormNameInput).fill(name);
  }

  /**
   * @desc Clears the trip name input field
   * Expected outcome is that the name field is empty
   */
  async clearNameInput(): Promise<void> {
    await this.page.locator(this.selector_tripFormNameInput).clear();
  }

  /**
   * @desc Types a value into the location input field
   * Expected outcome is that the location field is populated with the given value
   * @param {string} location - The location to enter
   */
  async typeIntoLocationInput(location: string): Promise<void> {
    await this.page.locator(this.selector_tripFormLocationInput).fill(location);
  }

  /**
   * @desc Clears the location input field
   * Expected outcome is that the location field is empty
   */
  async clearLocationInput(): Promise<void> {
    await this.page.locator(this.selector_tripFormLocationInput).clear();
  }

  /**
   * @desc Types a value into the description textarea
   * Expected outcome is that the description field is populated with the given value
   * @param {string} description - The description text to enter
   */
  async typeIntoDescriptionTextarea(description: string): Promise<void> {
    await this.page.locator(this.selector_tripFormDescriptionTextarea).fill(description);
  }

  /**
   * @desc Clears the description textarea
   * Expected outcome is that the description field is empty
   */
  async clearDescriptionTextarea(): Promise<void> {
    await this.page.locator(this.selector_tripFormDescriptionTextarea).clear();
  }

  /**
   * @desc Sets the color picker input to the given hex color value
   * Expected outcome is that the color input reflects the new hex value
   * @param {string} hexColor - A valid hex color string (e.g. '#FF5733')
   */
  async setColorInput(hexColor: string): Promise<void> {
    await this.page.locator(this.selector_tripFormColorInput).fill(hexColor);
  }

  /**
   * @desc Selects a currency option from the currency dropdown
   * Expected outcome is that the currency select reflects the chosen value
   * @param {string} currency - The currency value to select (e.g. 'GBP' or 'USD')
   */
  async selectCurrency(currency: 'GBP' | 'USD'): Promise<void> {
    await this.page.locator(this.selector_tripFormCurrencySelect).selectOption(currency);
  }

  /**
   * @desc Types a value into the Primary Travel budget input
   * Expected outcome is that the primary travel budget field is populated
   * @param {string} amount - The budget amount as a string (e.g. '500.00')
   */
  async typeIntoBudgetPrimaryTravel(amount: string): Promise<void> {
    await this.page.locator(this.selector_tripFormBudgetPrimaryTravel).fill(amount);
  }

  /**
   * @desc Types a value into the Accommodation budget input
   * Expected outcome is that the accommodation budget field is populated
   * @param {string} amount - The budget amount as a string (e.g. '300.00')
   */
  async typeIntoBudgetAccommodation(amount: string): Promise<void> {
    await this.page.locator(this.selector_tripFormBudgetAccommodation).fill(amount);
  }

  /**
   * @desc Types a value into the Activities budget input
   * Expected outcome is that the activities budget field is populated
   * @param {string} amount - The budget amount as a string (e.g. '150.00')
   */
  async typeIntoBudgetActivities(amount: string): Promise<void> {
    await this.page.locator(this.selector_tripFormBudgetActivities).fill(amount);
  }

  /**
   * @desc Types a value into the General budget input
   * Expected outcome is that the general budget field is populated
   * @param {string} amount - The budget amount as a string (e.g. '200.00')
   */
  async typeIntoBudgetGeneral(amount: string): Promise<void> {
    await this.page.locator(this.selector_tripFormBudgetGeneral).fill(amount);
  }

  /**
   * @desc Clicks the start date picker trigger to open the DatePicker for the trip start date
   * Expected outcome is that the DatePicker calendar/popover for start date opens
   */
  async clickStartDatePicker(): Promise<void> {
    await this.page.locator(this.selector_tripFormStartDatePicker).click();
  }

  /**
   * @desc Clicks the end date picker trigger to open the DatePicker for the trip end date
   * Expected outcome is that the DatePicker calendar/popover for end date opens
   */
  async clickEndDatePicker(): Promise<void> {
    await this.page.locator(this.selector_tripFormEndDatePicker).click();
  }

  /**
   * @desc Clicks the submit button to submit the form
   * Expected outcome is that the form submission is triggered
   */
  async clickSubmitButton(): Promise<void> {
    await this.page.locator(this.selector_tripFormSubmitButton).click();
  }

  /**
   * @desc Clicks the cancel button to dismiss or reset the form
   * Expected outcome is that the onCancel callback is invoked
   */
  async clickCancelButton(): Promise<void> {
    await this.page.locator(this.selector_tripFormCancelButton).click();
  }

  /**
   * @desc Submits the root form element directly (e.g. via keyboard Enter)
   * Expected outcome is that the form's submit handler is triggered
   */
  async submitForm(): Promise<void> {
    await this.page.locator(this.selector_tripFormRoot).press('Enter');
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the current value of the trip name input field
   * @returns {Promise<string>} The name input value exactly as it appears
   * @throws {Error} When the name input value is not accessible
   */
  async getNameInputValue(): Promise<string> {
    const value = await this.page.locator(this.selector_tripFormNameInput).inputValue();

    if (value === null) {
      throw new Error(
        `TripFormPOM: Name input value is not accessible. Selector: ${this.selector_tripFormNameInput}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the current value of the location input field
   * @returns {Promise<string>} The location input value exactly as it appears
   * @throws {Error} When the location input value is not accessible
   */
  async getLocationInputValue(): Promise<string> {
    const value = await this.page.locator(this.selector_tripFormLocationInput).inputValue();

    if (value === null) {
      throw new Error(
        `TripFormPOM: Location input value is not accessible. Selector: ${this.selector_tripFormLocationInput}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the current value of the description textarea
   * @returns {Promise<string>} The description textarea value exactly as it appears
   * @throws {Error} When the description textarea value is not accessible
   */
  async getDescriptionTextareaValue(): Promise<string> {
    const value = await this.page
      .locator(this.selector_tripFormDescriptionTextarea)
      .inputValue();

    if (value === null) {
      throw new Error(
        `TripFormPOM: Description textarea value is not accessible. Selector: ${this.selector_tripFormDescriptionTextarea}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the current value of the color picker input
   * @returns {Promise<string>} The hex color value exactly as it appears
   * @throws {Error} When the color input value is not accessible
   */
  async getColorInputValue(): Promise<string> {
    const value = await this.page.locator(this.selector_tripFormColorInput).inputValue();

    if (value === null) {
      throw new Error(
        `TripFormPOM: Color input value is not accessible. Selector: ${this.selector_tripFormColorInput}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the currently selected currency value from the currency dropdown
   * @returns {Promise<string>} The selected currency value exactly as it appears
   * @throws {Error} When the currency select value is not accessible
   */
  async getCurrencySelectValue(): Promise<string> {
    const value = await this.page.locator(this.selector_tripFormCurrencySelect).inputValue();

    if (value === null) {
      throw new Error(
        `TripFormPOM: Currency select value is not accessible. Selector: ${this.selector_tripFormCurrencySelect}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the current value of the Primary Travel budget input
   * @returns {Promise<string>} The primary travel budget value exactly as it appears
   * @throws {Error} When the primary travel budget input value is not accessible
   */
  async getBudgetPrimaryTravelValue(): Promise<string> {
    const value = await this.page
      .locator(this.selector_tripFormBudgetPrimaryTravel)
      .inputValue();

    if (value === null) {
      throw new Error(
        `TripFormPOM: Budget primary travel input value is not accessible. Selector: ${this.selector_tripFormBudgetPrimaryTravel}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the current value of the Accommodation budget input
   * @returns {Promise<string>} The accommodation budget value exactly as it appears
   * @throws {Error} When the accommodation budget input value is not accessible
   */
  async getBudgetAccommodationValue(): Promise<string> {
    const value = await this.page
      .locator(this.selector_tripFormBudgetAccommodation)
      .inputValue();

    if (value === null) {
      throw new Error(
        `TripFormPOM: Budget accommodation input value is not accessible. Selector: ${this.selector_tripFormBudgetAccommodation}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the current value of the Activities budget input
   * @returns {Promise<string>} The activities budget value exactly as it appears
   * @throws {Error} When the activities budget input value is not accessible
   */
  async getBudgetActivitiesValue(): Promise<string> {
    const value = await this.page
      .locator(this.selector_tripFormBudgetActivities)
      .inputValue();

    if (value === null) {
      throw new Error(
        `TripFormPOM: Budget activities input value is not accessible. Selector: ${this.selector_tripFormBudgetActivities}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the current value of the General budget input
   * @returns {Promise<string>} The general budget value exactly as it appears
   * @throws {Error} When the general budget input value is not accessible
   */
  async getBudgetGeneralValue(): Promise<string> {
    const value = await this.page.locator(this.selector_tripFormBudgetGeneral).inputValue();

    if (value === null) {
      throw new Error(
        `TripFormPOM: Budget general input value is not accessible. Selector: ${this.selector_tripFormBudgetGeneral}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the displayed budget total text from the budget section
   * @returns {Promise<string | null>} The total budget text exactly as it appears, or null if not displayed
   */
  async getBudgetTotalText(): Promise<string | null> {
    const isVisible = await this.page
      .locator(this.selector_tripFormBudgetTotal)
      .isVisible({ timeout: 500 });

    if (!isVisible) {
      return null;
    }

    const text = await this.page.locator(this.selector_tripFormBudgetTotal).textContent();
    return text;
  }

  /**
   * @desc Gets the error message text from the error banner
   * @returns {Promise<string>} The error message text exactly as it appears
   * @throws {Error} When the error banner is not visible or its content is not accessible
   */
  async getErrorBannerText(): Promise<string> {
    await this.page.locator(this.selector_tripFormError).isVisible();
    const text = await this.page.locator(this.selector_tripFormError).textContent();

    if (!text) {
      throw new Error(
        `TripFormPOM: Error banner text is null or not accessible. Selector: ${this.selector_tripFormError}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the label text of the submit button (e.g. 'Create Trip', 'Saving...')
   * @returns {Promise<string>} The submit button label exactly as it appears
   * @throws {Error} When the submit button text content is not accessible
   */
  async getSubmitButtonLabel(): Promise<string> {
    const text = await this.page.locator(this.selector_tripFormSubmitButton).textContent();

    if (!text) {
      throw new Error(
        `TripFormPOM: Submit button label is null or not accessible. Selector: ${this.selector_tripFormSubmitButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the full inner HTML of the budget breakdown section container
   * @returns {Promise<string>} The inner HTML of the budget section container exactly as rendered
   * @throws {Error} When the budget section container inner HTML is not accessible
   */
  async getBudgetSectionInnerHtml(): Promise<string> {
    const html = await this.page
      .locator(this.selector_tripFormBudgetSectionContainer)
      .innerHTML();

    if (!html) {
      throw new Error(
        `TripFormPOM: Budget section inner HTML is null or not accessible. Selector: ${this.selector_tripFormBudgetSectionContainer}`
      );
    }

    return html;
  }
}