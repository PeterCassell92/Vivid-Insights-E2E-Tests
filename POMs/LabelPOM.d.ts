/**
 * Page Object Model: LabelPOM
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class LabelPOM {
    private readonly page;
    protected readonly rootSelector: string;
    protected readonly selector_labelRoot: string;
    constructor(page: Page);
    /**
     * @desc Checks if at least one Label component is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if a label element with data-slot="label" is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a LabelPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<LabelPOM>} LabelPOM instance
     * @throws {Error} When no label element with data-slot="label" is visible on the page
     */
    static getPOM(page: Page): Promise<LabelPOM>;
    /**
     * @desc Whether or not the label element is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the label is visible
     */
    isLabelVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Hovers over the label element to trigger any tooltip or visual state changes
     * Expected outcome is that any hover-dependent styles or tooltips become visible
     */
    hoverLabelRoot(): Promise<void>;
    /**
     * @desc Clicks the label element, which typically focuses its associated form control
     * Expected outcome is that the associated form control (via htmlFor/for linkage) receives focus
     */
    clickLabelRoot(): Promise<void>;
    /**
     * @desc Gets the full CSS class list of the label to assert applied CVA variant classes or peer-disabled/group-disabled styling states
     * @returns {Promise<string>} The full class attribute value exactly as it appears
     * @throws {Error} When the class attribute is not accessible or the element is not found
     */
    getLabelClassList(): Promise<string>;
    /**
     * @desc Retrieves the 'data-slot' attribute value to assert this element is a Label component rendered by this BUENT
     * @returns {Promise<string>} The data-slot attribute value, always 'label'
     * @throws {Error} When the data-slot attribute is not accessible or the element is not found
     */
    getLabelDataSlot(): Promise<string>;
    /**
     * @desc Retrieves the 'for' (htmlFor) attribute to identify which form control this label is associated with
     * @returns {Promise<string | null>} The for attribute value, or null if not set
     */
    getLabelForAttribute(): Promise<string | null>;
    /**
     * @desc Extracts the visible text content of the label (e.g., the field name or description it represents)
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When text content is not accessible or the element is not found
     */
    getLabelText(): Promise<string>;
    /**
     * @desc Extracts the inner HTML of the label, useful when the label contains rich content such as icons, spans, or nested elements alongside text
     * @returns {Promise<string>} The inner HTML exactly as it appears
     * @throws {Error} When inner HTML is not accessible or the element is not found
     */
    getLabelInnerHtml(): Promise<string>;
    /**
     * @desc Gets the position and dimensions of the label element for layout and alignment assertions
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} Bounding box of the label
     * @throws {Error} When the bounding box cannot be retrieved (element not visible or not in DOM)
     */
    getLabelBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Counts the number of Label instances rendered on the page using the data-slot='label' selector
     * @returns {Promise<number>} The count of label elements currently in the DOM
     */
    getLabelCount(): Promise<number>;
}
