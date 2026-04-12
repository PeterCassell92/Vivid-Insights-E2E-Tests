/**
 * Page Object Model: Input
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from 'playwright';
export declare class InputPOM {
    private readonly page;
    protected readonly rootSelector: string;
    protected readonly selector_inputSlot: string;
    protected readonly selector_inputByTestId: (testId: string) => string;
    constructor(page: Page);
    /**
     * @desc Checks if an Input element is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the input element is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns an InputPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<InputPOM>} InputPOM instance
     * @throws {Error} When the input element is not visible
     */
    static getPOM(page: Page): Promise<InputPOM>;
    /**
     * @desc Whether or not the input element is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the input is visible
     */
    isInputVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks whether the input is enabled (not disabled)
     * Reflects the disabled prop which applies reduced-opacity pointer-events-none styling
     * @returns {Promise<boolean>} True if the input is enabled
     */
    isInputEnabled(): Promise<boolean>;
    /**
     * @desc Gets the checked state of the input when rendered as type='checkbox' or type='radio'
     * @returns {Promise<boolean>} True if the input is checked
     */
    isInputChecked(): Promise<boolean>;
    /**
     * @desc Clicks the input to focus it or trigger any attached click handlers
     * Expected outcome is that the input receives focus or a click handler fires
     */
    clickInput(): Promise<void>;
    /**
     * @desc Types text or a value into the input field using the inputSlot selector
     * Expected outcome is that the input field contains the provided value
     * @param {string} value - The text or value to type into the input
     */
    fillInput(value: string): Promise<void>;
    /**
     * @desc Types text or a value into the input field targeted by consumer-supplied data-testid
     * Expected outcome is that the targeted input field contains the provided value
     * @param {string} testId - The data-testid attribute value of the target input
     * @param {string} value - The text or value to type into the input
     */
    fillInputByTestId(testId: string, value: string): Promise<void>;
    /**
     * @desc Clears the current value of the input field
     * Expected outcome is that the input field is empty
     */
    clearInput(): Promise<void>;
    /**
     * @desc Checks the input when rendered as type='checkbox' or type='radio'
     * Expected outcome is that the input becomes checked
     */
    checkInput(): Promise<void>;
    /**
     * @desc Unchecks the input when rendered as type='checkbox'
     * Expected outcome is that the input becomes unchecked
     */
    uncheckInput(): Promise<void>;
    /**
     * @desc Uploads a file when the input is rendered with type='file'
     * Expected outcome is that the file is selected in the file input
     * @param {string} filePath - The absolute or relative path to the file to upload
     */
    uploadFile(filePath: string): Promise<void>;
    /**
     * @desc Gets the current value entered in the input field
     * @returns {Promise<string>} The current input value exactly as it appears
     * @throws {Error} When the input value is not accessible
     */
    getInputValue(): Promise<string>;
    /**
     * @desc Gets the current value of the input field targeted by consumer-supplied data-testid
     * @param {string} testId - The data-testid attribute value of the target input
     * @returns {Promise<string>} The current input value exactly as it appears
     * @throws {Error} When the input value is not accessible
     */
    getInputValueByTestId(testId: string): Promise<string>;
    /**
     * @desc Gets the 'type' attribute to determine what kind of input is rendered
     * (e.g. text, email, password, file, checkbox, etc.)
     * @returns {Promise<string>} The type attribute value exactly as it appears
     * @throws {Error} When the type attribute is not accessible
     */
    getInputType(): Promise<string>;
    /**
     * @desc Gets the 'placeholder' attribute text displayed when the input is empty
     * @returns {Promise<string>} The placeholder attribute value exactly as it appears
     * @throws {Error} When the placeholder attribute is not accessible
     */
    getInputPlaceholder(): Promise<string>;
    /**
     * @desc Gets the 'data-slot' attribute value, which is always 'input'
     * Useful as a stable semantic marker
     * @returns {Promise<string>} The data-slot attribute value exactly as it appears
     * @throws {Error} When the data-slot attribute is not accessible
     */
    getDataSlot(): Promise<string>;
    /**
     * @desc Gets the 'aria-invalid' attribute to determine if the input is in an error/invalid state
     * @returns {Promise<string | null>} The aria-invalid attribute value, or null if not set
     */
    getAriaInvalid(): Promise<string | null>;
    /**
     * @desc Gets the full CSS class list applied to the input
     * Includes dynamic focus-ring, disabled, and aria-invalid variant classes
     * @returns {Promise<string>} The full class attribute value exactly as it appears
     * @throws {Error} When the class attribute is not accessible
     */
    getInputClassList(): Promise<string>;
    /**
     * @desc Gets the position and dimensions of the input element
     * Useful for verifying layout or alignment
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the input
     * @throws {Error} When the bounding box is not accessible
     */
    getInputBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
}
