/**
 * Page Object Model: Form
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from 'playwright';
export declare class FormPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_formItemSlot;
    private readonly selector_formMessageSlot;
    private readonly selector_formControlSlot;
    private readonly selector_formControlInvalid;
    private readonly selector_formLabelSlot;
    private readonly selector_formLabelError;
    private readonly selector_formDescriptionSlot;
    constructor(page: Page);
    /**
     * @desc Checks if at least one form item is visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if a form item is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a FormPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<FormPOM>} FormPOM instance
     * @throws {Error} When no form item is visible on the page
     */
    static getPOM(page: Page): Promise<FormPOM>;
    /**
     * @desc Check whether the form item container is visible on screen
     * @param {number} [index=0] - Zero-based index of the form item to check
     * @returns {Promise<boolean>} True if the form item is visible
     */
    isFormItemVisible(index?: number): Promise<boolean>;
    /**
     * @desc Check whether the validation message paragraph is present and visible
     * @param {number} [index=0] - Zero-based index of the form message to check
     * @returns {Promise<boolean>} True if the form message is visible
     */
    isFormMessageVisible(index?: number): Promise<boolean>;
    /**
     * @desc Check whether the control is in an invalid state (element only present when aria-invalid=true)
     * @returns {Promise<boolean>} True if any form control is in an invalid state
     */
    isFormControlInvalid(): Promise<boolean>;
    /**
     * @desc Check whether the form control wrapper is visible on screen
     * @param {number} [index=0] - Zero-based index of the form control to check
     * @returns {Promise<boolean>} True if the form control is visible
     */
    isFormControlVisible(index?: number): Promise<boolean>;
    /**
     * @desc Check whether the form label is visible on screen
     * @param {number} [index=0] - Zero-based index of the form label to check
     * @returns {Promise<boolean>} True if the form label is visible
     */
    isFormLabelVisible(index?: number): Promise<boolean>;
    /**
     * @desc Check whether the form description paragraph is visible on screen
     * @param {number} [index=0] - Zero-based index of the form description to check
     * @returns {Promise<boolean>} True if the form description is visible
     */
    isFormDescriptionVisible(index?: number): Promise<boolean>;
    /**
     * @desc Click the control slot wrapper to interact with the wrapped input element
     * Expected outcome is that the wrapped input element receives focus or interaction
     * @param {number} [index=0] - Zero-based index of the form control to click
     */
    clickFormControl(index?: number): Promise<void>;
    /**
     * @desc Click the form label to focus its associated input control (via htmlFor binding to formItemId)
     * Expected outcome is that the associated input control receives focus
     * @param {number} [index=0] - Zero-based index of the form label to click
     */
    clickFormLabel(index?: number): Promise<void>;
    /**
     * @desc Get the position and dimensions of the form item container
     * @param {number} [index=0] - Zero-based index of the form item
     * @returns {Promise<{x: number, y: number, width: number, height: number} | null>} Bounding box or null
     * @throws {Error} When the form item element is not accessible
     */
    getFormItemBoundingBox(index?: number): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    } | null>;
    /**
     * @desc Count the total number of form item containers rendered in the form
     * @returns {Promise<number>} Total count of form item containers
     */
    getFormItemCount(): Promise<number>;
    /**
     * @desc Get the data-slot attribute value of a form item to confirm it is a form field container
     * @param {number} [index=0] - Zero-based index of the form item
     * @returns {Promise<string>} The data-slot attribute value, always 'form-item'
     * @throws {Error} When the attribute is not accessible or null
     */
    getFormItemDataSlotAttribute(index?: number): Promise<string>;
    /**
     * @desc Get a list of all validation error message texts currently rendered across all form fields
     * @returns {Promise<string[]>} Array of validation error message texts
     */
    getFormMessageList(): Promise<string[]>;
    /**
     * @desc Get the CSS class list of the message paragraph to verify destructive/error styling is applied
     * @param {number} [index=0] - Zero-based index of the form message
     * @returns {Promise<string>} The class attribute value of the message paragraph
     * @throws {Error} When the class attribute is not accessible or null
     */
    getFormMessageClassList(index?: number): Promise<string>;
    /**
     * @desc Get the data-slot attribute value of a form message to confirm element identity
     * @param {number} [index=0] - Zero-based index of the form message
     * @returns {Promise<string>} The data-slot attribute value, always 'form-message'
     * @throws {Error} When the attribute is not accessible or null
     */
    getFormMessageDataSlotAttribute(index?: number): Promise<string>;
    /**
     * @desc Get the validation error message text or custom children text rendered in the message paragraph
     * @param {number} [index=0] - Zero-based index of the form message
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the text content is not accessible or null
     */
    getFormMessageText(index?: number): Promise<string>;
    /**
     * @desc Count how many form message elements are currently rendered in the DOM
     * @returns {Promise<number>} Count of rendered form message elements
     */
    getFormMessageCount(): Promise<number>;
    /**
     * @desc Get the aria-invalid attribute value to determine if the control is currently in an invalid/error state
     * @param {number} [index=0] - Zero-based index of the form control
     * @returns {Promise<string | null>} The aria-invalid attribute value ('true' or 'false'), or null if absent
     */
    getFormControlAriaInvalidAttribute(index?: number): Promise<string | null>;
    /**
     * @desc Get the aria-describedby attribute to verify it references the correct description and/or message element IDs
     * @param {number} [index=0] - Zero-based index of the form control
     * @returns {Promise<string | null>} The aria-describedby attribute value, or null if absent
     */
    getFormControlAriaDescribedByAttribute(index?: number): Promise<string | null>;
    /**
     * @desc Get the data-slot attribute value of a form control to confirm the element is the control wrapper
     * @param {number} [index=0] - Zero-based index of the form control
     * @returns {Promise<string>} The data-slot attribute value, always 'form-control'
     * @throws {Error} When the attribute is not accessible or null
     */
    getFormControlDataSlotAttribute(index?: number): Promise<string>;
    /**
     * @desc Get the CSS class list of the label to verify error styling (e.g. text-destructive) is applied
     * @param {number} [index=0] - Zero-based index of the form label
     * @returns {Promise<string>} The class attribute value of the label
     * @throws {Error} When the class attribute is not accessible or null
     */
    getFormLabelClassList(index?: number): Promise<string>;
    /**
     * @desc Get the data-slot attribute value of a form label to confirm element identity
     * @param {number} [index=0] - Zero-based index of the form label
     * @returns {Promise<string>} The data-slot attribute value, always 'form-label'
     * @throws {Error} When the attribute is not accessible or null
     */
    getFormLabelDataSlotAttribute(index?: number): Promise<string>;
    /**
     * @desc Get the data-error attribute value specifically when the field is in an error state
     * @param {number} [index=0] - Zero-based index of the form label in error state
     * @returns {Promise<string | null>} The data-error attribute value, or null if absent
     */
    getFormLabelErrorDataErrorAttribute(index?: number): Promise<string | null>;
    /**
     * @desc Get the data-error attribute value ('true' or 'false') to determine if the field has a validation error
     * @param {number} [index=0] - Zero-based index of the form label
     * @returns {Promise<string | null>} The data-error attribute value, or null if absent
     */
    getFormLabelDataErrorAttribute(index?: number): Promise<string | null>;
    /**
     * @desc Get the visible label text for the form field
     * @param {number} [index=0] - Zero-based index of the form label
     * @returns {Promise<string>} The label text exactly as it appears in the UI
     * @throws {Error} When the text content is not accessible or null
     */
    getFormLabelText(index?: number): Promise<string>;
    /**
     * @desc Get the helper/hint text content displayed below the form control
     * @param {number} [index=0] - Zero-based index of the form description
     * @returns {Promise<string>} The description text exactly as it appears in the UI
     * @throws {Error} When the text content is not accessible or null
     */
    getFormDescriptionText(index?: number): Promise<string>;
    /**
     * @desc Get the data-slot attribute value of a form description to confirm element identity
     * @param {number} [index=0] - Zero-based index of the form description
     * @returns {Promise<string>} The data-slot attribute value, always 'form-description'
     * @throws {Error} When the attribute is not accessible or null
     */
    getFormDescriptionDataSlotAttribute(index?: number): Promise<string>;
}
