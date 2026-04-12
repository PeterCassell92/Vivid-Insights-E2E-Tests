/**
 * Page Object Model: ProjectionEventEditModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ProjectionEventEditModalPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_modalContainer;
    private readonly selector_deleteButtonWrapper;
    private readonly selector_deleteEventBtn;
    private readonly selector_deleteConfirmModal;
    constructor(page: Page);
    /**
     * @desc Checks if the ProjectionEventEditModal is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a ProjectionEventEditModalPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<ProjectionEventEditModalPOM>} A new ProjectionEventEditModalPOM instance
     * @throws {Error} When the projection event edit modal is not visible
     */
    static getPOM(page: Page): Promise<ProjectionEventEditModalPOM>;
    /**
     * @desc Whether or not the projection event edit modal container is visible on the page
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the modal container is visible
     */
    isModalContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the delete button wrapper section is visible, confirming the modal is in edit mode
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the delete button wrapper is visible (edit mode, eventId provided)
     */
    isDeleteButtonContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the Delete Event button is visible, confirming the modal is in edit mode with a valid eventId
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the Delete Event button is visible
     */
    isDeleteEventButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the delete ConfirmationModal is currently open/visible after clicking the Delete Event button
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the confirmation modal is visible
     */
    isConfirmationModalVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Delete Event button is enabled and interactable
     * @returns {Promise<boolean>} True if the Delete Event button is enabled
     */
    isDeleteEventButtonEnabled(): Promise<boolean>;
    /**
     * @desc Clicks the BaseModal close/backdrop control to dismiss the projection event edit modal
     * Expected outcome is that the onClose handler is triggered and the modal closes
     */
    clickModalClose(): Promise<void>;
    /**
     * @desc Clicks the Delete Event button to initiate the delete confirmation flow
     * Expected outcome is that the ConfirmationModal opens. Only available in edit mode when eventId is non-null.
     * @throws {Error} When the Delete Event button is not visible or not interactable
     */
    clickDeleteEventButton(): Promise<void>;
    /**
     * @desc Extracts the modal title text to determine the current mode (create or edit)
     * @returns {Promise<string>} The modal title text exactly as it appears (e.g. 'Create Projection Event' or 'Edit Projection Event')
     * @throws {Error} When the modal title content is not accessible or null
     */
    getModalTitleText(): Promise<string>;
    /**
     * @desc Extracts the text content of the ConfirmationModal to verify correct delete confirmation messaging
     * @returns {Promise<string>} The full text content of the confirmation modal exactly as it appears
     * @throws {Error} When the confirmation modal is not visible or its text content is null
     */
    getConfirmationModalText(): Promise<string>;
    /**
     * @desc Reads the data-testid attribute value from the Delete Event button to confirm correct test ID assignment
     * @returns {Promise<string>} The data-testid attribute value of the Delete Event button
     * @throws {Error} When the Delete Event button is not visible or the attribute is not accessible
     */
    getDeleteEventButtonTestId(): Promise<string>;
    /**
     * @desc Extracts the visible text label of the Delete Event button
     * @returns {Promise<string>} The button label text exactly as it appears (expected: 'Delete Event')
     * @throws {Error} When the Delete Event button is not visible or its text content is null
     */
    getDeleteEventButtonText(): Promise<string>;
}
