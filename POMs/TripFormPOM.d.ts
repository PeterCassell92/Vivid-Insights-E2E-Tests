/**
 * Page Object Model: TripForm
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class TripFormPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_tripFormRoot;
    private readonly selector_tripFormError;
    private readonly selector_tripFormNameInput;
    private readonly selector_tripFormLocationInput;
    private readonly selector_tripFormStartDatePicker;
    private readonly selector_tripFormEndDatePicker;
    private readonly selector_tripFormDescriptionTextarea;
    private readonly selector_tripFormColorInput;
    private readonly selector_tripFormCurrencySelect;
    private readonly selector_tripFormBudgetSectionContainer;
    private readonly selector_tripFormBudgetPrimaryTravel;
    private readonly selector_tripFormBudgetAccommodation;
    private readonly selector_tripFormBudgetActivities;
    private readonly selector_tripFormBudgetGeneral;
    private readonly selector_tripFormBudgetTotal;
    private readonly selector_tripFormSubmitButton;
    private readonly selector_tripFormCancelButton;
    constructor(page: Page);
    /**
     * @desc Checks if the TripForm root element is visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the TripForm is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method — validates visibility and returns a TripFormPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<TripFormPOM>} A TripFormPOM instance
     * @throws {Error} When the TripForm root element is not visible
     */
    static getPOM(page: Page): Promise<TripFormPOM>;
    /**
     * @desc Check whether the root TripForm element is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the TripForm root is visible
     */
    isTripFormVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the budget breakdown section container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the budget section container is visible
     */
    isBudgetSectionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the error banner is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the error banner is visible
     */
    isErrorBannerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the submit button is disabled
     * @returns {Promise<boolean>} True if the submit button is disabled (e.g. isLoading=true)
     */
    isSubmitButtonDisabled(): Promise<boolean>;
    /**
     * @desc Types a value into the trip name input field
     * Expected outcome is that the name field is populated with the given value
     * @param {string} name - The trip name to enter
     */
    typeIntoNameInput(name: string): Promise<void>;
    /**
     * @desc Clears the trip name input field
     * Expected outcome is that the name field is empty
     */
    clearNameInput(): Promise<void>;
    /**
     * @desc Types a value into the location input field
     * Expected outcome is that the location field is populated with the given value
     * @param {string} location - The location to enter
     */
    typeIntoLocationInput(location: string): Promise<void>;
    /**
     * @desc Clears the location input field
     * Expected outcome is that the location field is empty
     */
    clearLocationInput(): Promise<void>;
    /**
     * @desc Types a value into the description textarea
     * Expected outcome is that the description field is populated with the given value
     * @param {string} description - The description text to enter
     */
    typeIntoDescriptionTextarea(description: string): Promise<void>;
    /**
     * @desc Clears the description textarea
     * Expected outcome is that the description field is empty
     */
    clearDescriptionTextarea(): Promise<void>;
    /**
     * @desc Sets the color picker input to the given hex color value
     * Expected outcome is that the color input reflects the new hex value
     * @param {string} hexColor - A valid hex color string (e.g. '#FF5733')
     */
    setColorInput(hexColor: string): Promise<void>;
    /**
     * @desc Selects a currency option from the currency dropdown
     * Expected outcome is that the currency select reflects the chosen value
     * @param {string} currency - The currency value to select (e.g. 'GBP' or 'USD')
     */
    selectCurrency(currency: 'GBP' | 'USD'): Promise<void>;
    /**
     * @desc Types a value into the Primary Travel budget input
     * Expected outcome is that the primary travel budget field is populated
     * @param {string} amount - The budget amount as a string (e.g. '500.00')
     */
    typeIntoBudgetPrimaryTravel(amount: string): Promise<void>;
    /**
     * @desc Types a value into the Accommodation budget input
     * Expected outcome is that the accommodation budget field is populated
     * @param {string} amount - The budget amount as a string (e.g. '300.00')
     */
    typeIntoBudgetAccommodation(amount: string): Promise<void>;
    /**
     * @desc Types a value into the Activities budget input
     * Expected outcome is that the activities budget field is populated
     * @param {string} amount - The budget amount as a string (e.g. '150.00')
     */
    typeIntoBudgetActivities(amount: string): Promise<void>;
    /**
     * @desc Types a value into the General budget input
     * Expected outcome is that the general budget field is populated
     * @param {string} amount - The budget amount as a string (e.g. '200.00')
     */
    typeIntoBudgetGeneral(amount: string): Promise<void>;
    /**
     * @desc Clicks the start date picker trigger to open the DatePicker for the trip start date
     * Expected outcome is that the DatePicker calendar/popover for start date opens
     */
    clickStartDatePicker(): Promise<void>;
    /**
     * @desc Clicks the end date picker trigger to open the DatePicker for the trip end date
     * Expected outcome is that the DatePicker calendar/popover for end date opens
     */
    clickEndDatePicker(): Promise<void>;
    /**
     * @desc Clicks the submit button to submit the form
     * Expected outcome is that the form submission is triggered
     */
    clickSubmitButton(): Promise<void>;
    /**
     * @desc Clicks the cancel button to dismiss or reset the form
     * Expected outcome is that the onCancel callback is invoked
     */
    clickCancelButton(): Promise<void>;
    /**
     * @desc Submits the root form element directly (e.g. via keyboard Enter)
     * Expected outcome is that the form's submit handler is triggered
     */
    submitForm(): Promise<void>;
    /**
     * @desc Gets the current value of the trip name input field
     * @returns {Promise<string>} The name input value exactly as it appears
     * @throws {Error} When the name input value is not accessible
     */
    getNameInputValue(): Promise<string>;
    /**
     * @desc Gets the current value of the location input field
     * @returns {Promise<string>} The location input value exactly as it appears
     * @throws {Error} When the location input value is not accessible
     */
    getLocationInputValue(): Promise<string>;
    /**
     * @desc Gets the current value of the description textarea
     * @returns {Promise<string>} The description textarea value exactly as it appears
     * @throws {Error} When the description textarea value is not accessible
     */
    getDescriptionTextareaValue(): Promise<string>;
    /**
     * @desc Gets the current value of the color picker input
     * @returns {Promise<string>} The hex color value exactly as it appears
     * @throws {Error} When the color input value is not accessible
     */
    getColorInputValue(): Promise<string>;
    /**
     * @desc Gets the currently selected currency value from the currency dropdown
     * @returns {Promise<string>} The selected currency value exactly as it appears
     * @throws {Error} When the currency select value is not accessible
     */
    getCurrencySelectValue(): Promise<string>;
    /**
     * @desc Gets the current value of the Primary Travel budget input
     * @returns {Promise<string>} The primary travel budget value exactly as it appears
     * @throws {Error} When the primary travel budget input value is not accessible
     */
    getBudgetPrimaryTravelValue(): Promise<string>;
    /**
     * @desc Gets the current value of the Accommodation budget input
     * @returns {Promise<string>} The accommodation budget value exactly as it appears
     * @throws {Error} When the accommodation budget input value is not accessible
     */
    getBudgetAccommodationValue(): Promise<string>;
    /**
     * @desc Gets the current value of the Activities budget input
     * @returns {Promise<string>} The activities budget value exactly as it appears
     * @throws {Error} When the activities budget input value is not accessible
     */
    getBudgetActivitiesValue(): Promise<string>;
    /**
     * @desc Gets the current value of the General budget input
     * @returns {Promise<string>} The general budget value exactly as it appears
     * @throws {Error} When the general budget input value is not accessible
     */
    getBudgetGeneralValue(): Promise<string>;
    /**
     * @desc Gets the displayed budget total text from the budget section
     * @returns {Promise<string | null>} The total budget text exactly as it appears, or null if not displayed
     */
    getBudgetTotalText(): Promise<string | null>;
    /**
     * @desc Gets the error message text from the error banner
     * @returns {Promise<string>} The error message text exactly as it appears
     * @throws {Error} When the error banner is not visible or its content is not accessible
     */
    getErrorBannerText(): Promise<string>;
    /**
     * @desc Gets the label text of the submit button (e.g. 'Create Trip', 'Saving...')
     * @returns {Promise<string>} The submit button label exactly as it appears
     * @throws {Error} When the submit button text content is not accessible
     */
    getSubmitButtonLabel(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the budget breakdown section container
     * @returns {Promise<string>} The inner HTML of the budget section container exactly as rendered
     * @throws {Error} When the budget section container inner HTML is not accessible
     */
    getBudgetSectionInnerHtml(): Promise<string>;
}
