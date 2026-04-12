/**
 * Page Object Model: CoverageDateRangeInput
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class CoverageDateRangeInputPOM {
    private readonly page;
    private readonly rootSelector_display;
    private readonly rootSelector_editor;
    private readonly selector_displayContainer;
    private readonly selector_dateRangeLabelText;
    private readonly selector_dateRangeFormattedText;
    private readonly selector_widenedBadgeElement;
    private readonly selector_editButtonTestId;
    private readonly selector_editButtonAriaLabel;
    private readonly selector_editorContainer;
    private readonly selector_closeButtonTestId;
    private readonly selector_closeButtonAriaLabel;
    private readonly selector_resetButtonTestId;
    private readonly selector_startDatePickerWrapper;
    private readonly selector_endDatePickerWrapper;
    constructor(page: Page);
    /**
     * @desc Checks if the CoverageDateRangeInput component is currently visible
     * (either in display or editor mode)
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if either the display or editor container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a CoverageDateRangeInputPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<CoverageDateRangeInputPOM>} CoverageDateRangeInputPOM instance
     * @throws {Error} When neither the display nor editor container is visible
     */
    static getPOM(page: Page): Promise<CoverageDateRangeInputPOM>;
    /**
     * @desc Check whether the editor container is currently visible (rendered only when editing === true)
     * @returns {Promise<boolean>} True if the editor container is visible
     */
    isEditorContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the display container is currently visible (rendered only when editing === false)
     * @returns {Promise<boolean>} True if the display container is visible
     */
    isDisplayContainerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the close (X) button is visible within the editor
     * @returns {Promise<boolean>} True if the close button is visible
     */
    isCloseButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the close button is enabled and interactable
     * @returns {Promise<boolean>} True if the close button is enabled
     */
    isCloseButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the reset button is visible (only rendered when isWidened === true)
     * @returns {Promise<boolean>} True if the reset button is visible
     */
    isResetButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the reset button is enabled and interactable
     * @returns {Promise<boolean>} True if the reset button is enabled
     */
    isResetButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the start date picker wrapper is visible in the editor
     * @returns {Promise<boolean>} True if the start date picker wrapper is visible
     */
    isStartDatePickerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the end date picker wrapper is visible in the editor
     * @returns {Promise<boolean>} True if the end date picker wrapper is visible
     */
    isEndDatePickerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the 'Date Range:' label span is visible
     * @returns {Promise<boolean>} True if the date range label is visible
     */
    isDateRangeLabelVisible(): Promise<boolean>;
    /**
     * @desc Check whether the edit (pencil) button is visible in the display view
     * @returns {Promise<boolean>} True if the edit button is visible
     */
    isEditButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the edit button is enabled and interactable
     * @returns {Promise<boolean>} True if the edit button is enabled
     */
    isEditButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the 'Widened' badge is visible
     * Only rendered when isWidened === true (coverageStartDate < earliestTransactionDate OR coverageEndDate > latestTransactionDate)
     * @returns {Promise<boolean>} True if the widened badge is visible
     */
    isWidenedBadgeVisible(): Promise<boolean>;
    /**
     * @desc Check whether the formatted date range span is visible in the display view
     * @returns {Promise<boolean>} True if the formatted date range text is visible
     */
    isDateRangeTextVisible(): Promise<boolean>;
    /**
     * @desc Click the X icon button to close the date range editor and return to the display view
     * Expected outcome is that editing mode is exited and the display container becomes visible
     */
    clickCloseButton(): Promise<void>;
    /**
     * @desc Click the close button via aria-label selector to exit editing mode
     * Expected outcome is that editing mode is exited and the display container becomes visible
     */
    clickCloseButtonByAriaLabel(): Promise<void>;
    /**
     * @desc Click the reset button to revert both coverage start and end dates to the originally detected
     * transaction dates and close the editor; only available when isWidened === true
     * Expected outcome is that both dates are reset and the editor is closed
     * @throws {Error} When the reset button is not visible (component is not in widened state)
     */
    clickResetButton(): Promise<void>;
    /**
     * @desc Click the start date picker trigger button to open the ReactDatePicker calendar popup
     * for selecting a coverage start date (maxDate enforces widening-only — can only go earlier than earliestTransactionDate)
     * Expected outcome is that the ReactDatePicker calendar popup opens
     */
    clickStartDatePicker(): Promise<void>;
    /**
     * @desc Click the end date picker trigger button to open the ReactDatePicker calendar popup
     * for selecting a coverage end date (minDate enforces widening-only — can only go later than latestTransactionDate)
     * Expected outcome is that the ReactDatePicker calendar popup opens
     */
    clickEndDatePicker(): Promise<void>;
    /**
     * @desc Click the pencil icon button to switch the component into editing mode
     * Expected outcome is that the editor container becomes visible and the display container is hidden
     */
    clickEditButton(): Promise<void>;
    /**
     * @desc Click the edit button via aria-label selector to enter editing mode
     * Expected outcome is that the editor container becomes visible and the display container is hidden
     */
    clickEditButtonByAriaLabel(): Promise<void>;
    /**
     * @desc Get the full inner HTML of the editor container to inspect its rendered structure
     * @returns {Promise<string>} The inner HTML of the editor container
     * @throws {Error} When the editor container inner HTML is not accessible or null
     */
    getEditorContainerInnerHtml(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the display container to inspect its rendered structure
     * @returns {Promise<string>} The inner HTML of the display container
     * @throws {Error} When the display container inner HTML is not accessible or null
     */
    getDisplayContainerInnerHtml(): Promise<string>;
    /**
     * @desc Get the aria-label attribute value of the close button to verify accessibility labeling
     * @returns {Promise<string>} The aria-label attribute value of the close button
     * @throws {Error} When the aria-label attribute is not accessible or null
     */
    getCloseButtonAriaLabel(): Promise<string>;
    /**
     * @desc Get the text content of the reset button (expected: 'Reset to detected dates')
     * @returns {Promise<string>} The text content of the reset button exactly as it appears
     * @throws {Error} When the reset button text content is not accessible or null
     */
    getResetButtonText(): Promise<string>;
    /**
     * @desc Get the currently displayed start date text from the date picker trigger button
     * @returns {Promise<string>} The start date text exactly as it appears in the picker
     * @throws {Error} When the start date picker text content is not accessible or null
     */
    getStartDatePickerText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the start date picker wrapper to inspect the rendered ReactDatePicker structure
     * @returns {Promise<string>} The inner HTML of the start date picker wrapper
     * @throws {Error} When the start date picker inner HTML is not accessible or null
     */
    getStartDatePickerInnerHtml(): Promise<string>;
    /**
     * @desc Get the currently displayed end date text from the date picker trigger button
     * @returns {Promise<string>} The end date text exactly as it appears in the picker
     * @throws {Error} When the end date picker text content is not accessible or null
     */
    getEndDatePickerText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the end date picker wrapper to inspect the rendered ReactDatePicker structure
     * @returns {Promise<string>} The inner HTML of the end date picker wrapper
     * @throws {Error} When the end date picker inner HTML is not accessible or null
     */
    getEndDatePickerInnerHtml(): Promise<string>;
    /**
     * @desc Get the static label text (expected: 'Date Range:')
     * @returns {Promise<string>} The label text exactly as it appears
     * @throws {Error} When the date range label text content is not accessible or null
     */
    getDateRangeLabelText(): Promise<string>;
    /**
     * @desc Get the aria-label attribute value of the edit button to verify accessibility labeling
     * @returns {Promise<string>} The aria-label attribute value of the edit button
     * @throws {Error} When the aria-label attribute is not accessible or null
     */
    getEditButtonAriaLabel(): Promise<string>;
    /**
     * @desc Get the text content of the widened badge (expected: 'Widened')
     * @returns {Promise<string>} The widened badge text exactly as it appears
     * @throws {Error} When the widened badge text content is not accessible or null
     */
    getWidenedBadgeText(): Promise<string>;
    /**
     * @desc Get the CSS class list of the widened badge to verify styling (e.g. bg-blue-100, text-blue-700)
     * @returns {Promise<string[]>} Array of CSS class names on the widened badge element
     * @throws {Error} When the widened badge class attribute is not accessible or null
     */
    getWidenedBadgeClassList(): Promise<string[]>;
    /**
     * @desc Get the formatted date range text displayed to the user, e.g. '01/01/2024 – 12/31/2024'
     * @returns {Promise<string>} The formatted date range text exactly as it appears
     * @throws {Error} When the date range formatted text content is not accessible or null
     */
    getDateRangeFormattedText(): Promise<string>;
}
