/**
 * Page Object Model: RecurringEventEditModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from 'playwright';
export declare class RecurringEventEditModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_modalContainer;
    private readonly selector_projectionEventFormRoot;
    private readonly selector_createModalTitle;
    private readonly selector_editModalTitle;
    private readonly selector_modalTitleByMode;
    constructor(page: Page);
    /**
     * @desc Checks if the RecurringEventEditModal is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal container is visible, false otherwise
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a RecurringEventEditModalPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<RecurringEventEditModalPOM>} A RecurringEventEditModalPOM instance
     * @throws {Error} When the recurring event edit modal is not visible
     */
    static getPOM(page: Page): Promise<RecurringEventEditModalPOM>;
    /**
     * @desc Check whether the recurring event edit modal container is currently visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    isModalContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the ProjectionEventForm is visible inside the modal body
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the ProjectionEventForm is visible
     */
    isProjectionEventFormVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the 'Create Recurring Event Rule' title is visible (i.e., modal is in create mode)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the create mode title is visible
     */
    isCreateModalTitleVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the 'Edit Recurring Event Rule' title is visible (i.e., modal is in edit mode)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the edit mode title is visible
     */
    isEditModalTitleVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Dismiss/close the recurring event edit modal by triggering the onClose callback
     * Expected outcome is that the modal will be closed and removed from the DOM
     * @throws {Error} When the modal container is not visible or cannot be dismissed
     */
    dismissModal(): Promise<void>;
    /**
     * @desc Click the modal title element (e.g., to verify focus or interaction)
     * Expected outcome is that the modal title element receives a click interaction
     * @param {boolean} isCreating - Whether the modal is in create mode (true) or edit mode (false)
     * @throws {Error} When the modal title element is not visible
     */
    clickModalTitle(isCreating: boolean): Promise<void>;
    /**
     * @desc Get the data-testid attribute value from the modal root element
     * @returns {Promise<string>} The data-testid attribute value exactly as it appears
     * @throws {Error} When the modal container is not accessible or the attribute value is null
     */
    getModalContainerTestId(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the modal container
     * @returns {Promise<{ x: number; y: number; width: number; height: number }>} The bounding box of the modal container
     * @throws {Error} When the modal container is not visible or the bounding box cannot be retrieved
     */
    getModalContainerBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    }>;
    /**
     * @desc Get the inner HTML content of the ProjectionEventForm rendered inside the modal
     * @returns {Promise<string>} The inner HTML of the ProjectionEventForm exactly as it appears
     * @throws {Error} When the ProjectionEventForm is not accessible or its inner HTML is null
     */
    getProjectionEventFormInnerHtml(): Promise<string>;
    /**
     * @desc Get the visible text of the modal title (either 'Create Recurring Event Rule' or 'Edit Recurring Event Rule')
     * @param {boolean} isCreating - Whether the modal is in create mode (true) or edit mode (false)
     * @returns {Promise<string>} The modal title text exactly as it appears in the UI
     * @throws {Error} When the modal title element is not accessible or its text content is null
     */
    getModalTitleText(isCreating: boolean): Promise<string>;
}
