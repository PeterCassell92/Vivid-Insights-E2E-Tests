/**
 * Page Object Model: ProjectionEventEditModal
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ProjectionEventEditModalPOM_StandardSelector = '[data-testid="projection-event-edit-modal"]';

export class ProjectionEventEditModalPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_modalContainer: string;
  private readonly selector_deleteButtonWrapper: string;
  private readonly selector_deleteEventBtn: string;
  private readonly selector_deleteConfirmModal: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = ProjectionEventEditModalPOM_StandardSelector;

    this.selector_modalContainer = this.rootSelector;
    this.selector_deleteButtonWrapper = `${this.rootSelector} .border-t`;
    this.selector_deleteEventBtn = `[data-testid="delete-event-button"]`;
    this.selector_deleteConfirmModal = `[data-testid="confirmation-modal"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the ProjectionEventEditModal is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const modal = page.locator(ProjectionEventEditModalPOM_StandardSelector);
      return await modal.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a ProjectionEventEditModalPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<ProjectionEventEditModalPOM>} A new ProjectionEventEditModalPOM instance
   * @throws {Error} When the projection event edit modal is not visible
   */
  static async getPOM(page: Page): Promise<ProjectionEventEditModalPOM> {
    const isVisible = await ProjectionEventEditModalPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ProjectionEventEditModalPOM: Cannot instantiate - modal is not visible. ' +
        `Expected element [${ProjectionEventEditModalPOM_StandardSelector}] to be visible.`
      );
    }

    return new ProjectionEventEditModalPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the projection event edit modal container is visible on the page
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the modal container is visible
   */
  async isModalContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_modalContainer).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the delete button wrapper section is visible, confirming the modal is in edit mode
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the delete button wrapper is visible (edit mode, eventId provided)
   */
  async isDeleteButtonContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_deleteButtonWrapper).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the Delete Event button is visible, confirming the modal is in edit mode with a valid eventId
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the Delete Event button is visible
   */
  async isDeleteEventButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_deleteEventBtn).isVisible({ timeout });
  }

  /**
   * @desc Whether or not the delete ConfirmationModal is currently open/visible after clicking the Delete Event button
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the confirmation modal is visible
   */
  async isConfirmationModalVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_deleteConfirmModal).isVisible({ timeout });
  }

  /**
   * @desc Check whether the Delete Event button is enabled and interactable
   * @returns {Promise<boolean>} True if the Delete Event button is enabled
   */
  async isDeleteEventButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_deleteEventBtn).isEnabled();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the BaseModal close/backdrop control to dismiss the projection event edit modal
   * Expected outcome is that the onClose handler is triggered and the modal closes
   */
  async clickModalClose(): Promise<void> {
    await this.page.locator(this.selector_modalContainer).press('Escape');
  }

  /**
   * @desc Clicks the Delete Event button to initiate the delete confirmation flow
   * Expected outcome is that the ConfirmationModal opens. Only available in edit mode when eventId is non-null.
   * @throws {Error} When the Delete Event button is not visible or not interactable
   */
  async clickDeleteEventButton(): Promise<void> {
    const isVisible = await this.isDeleteEventButtonVisible();
    if (!isVisible) {
      throw new Error(
        `ProjectionEventEditModalPOM: Cannot click Delete Event button - it is not visible. ` +
        `Selector: ${this.selector_deleteEventBtn}. Ensure the modal is in edit mode with a valid eventId.`
      );
    }
    await this.page.locator(this.selector_deleteEventBtn).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Extracts the modal title text to determine the current mode (create or edit)
   * @returns {Promise<string>} The modal title text exactly as it appears (e.g. 'Create Projection Event' or 'Edit Projection Event')
   * @throws {Error} When the modal title content is not accessible or null
   */
  async getModalTitleText(): Promise<string> {
    await this.page.locator(this.selector_modalContainer).isVisible();
    const text = await this.page.locator(this.selector_modalContainer).textContent();

    if (text === null) {
      throw new Error(
        `ProjectionEventEditModalPOM: Modal title text content is null. ` +
        `Selector: ${this.selector_modalContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Extracts the text content of the ConfirmationModal to verify correct delete confirmation messaging
   * @returns {Promise<string>} The full text content of the confirmation modal exactly as it appears
   * @throws {Error} When the confirmation modal is not visible or its text content is null
   */
  async getConfirmationModalText(): Promise<string> {
    const isVisible = await this.isConfirmationModalVisible();
    if (!isVisible) {
      throw new Error(
        `ProjectionEventEditModalPOM: Cannot retrieve ConfirmationModal text - it is not visible. ` +
        `Selector: ${this.selector_deleteConfirmModal}`
      );
    }

    const text = await this.page.locator(this.selector_deleteConfirmModal).textContent();

    if (text === null) {
      throw new Error(
        `ProjectionEventEditModalPOM: ConfirmationModal text content is null. ` +
        `Selector: ${this.selector_deleteConfirmModal}`
      );
    }

    return text;
  }

  /**
   * @desc Reads the data-testid attribute value from the Delete Event button to confirm correct test ID assignment
   * @returns {Promise<string>} The data-testid attribute value of the Delete Event button
   * @throws {Error} When the Delete Event button is not visible or the attribute is not accessible
   */
  async getDeleteEventButtonTestId(): Promise<string> {
    const isVisible = await this.isDeleteEventButtonVisible();
    if (!isVisible) {
      throw new Error(
        `ProjectionEventEditModalPOM: Cannot read data-testid from Delete Event button - it is not visible. ` +
        `Selector: ${this.selector_deleteEventBtn}`
      );
    }

    const attrValue = await this.page.locator(this.selector_deleteEventBtn).getAttribute('data-testid');

    if (attrValue === null) {
      throw new Error(
        `ProjectionEventEditModalPOM: data-testid attribute is null on Delete Event button. ` +
        `Selector: ${this.selector_deleteEventBtn}`
      );
    }

    return attrValue;
  }

  /**
   * @desc Extracts the visible text label of the Delete Event button
   * @returns {Promise<string>} The button label text exactly as it appears (expected: 'Delete Event')
   * @throws {Error} When the Delete Event button is not visible or its text content is null
   */
  async getDeleteEventButtonText(): Promise<string> {
    const isVisible = await this.isDeleteEventButtonVisible();
    if (!isVisible) {
      throw new Error(
        `ProjectionEventEditModalPOM: Cannot retrieve Delete Event button text - it is not visible. ` +
        `Selector: ${this.selector_deleteEventBtn}`
      );
    }

    const text = await this.page.locator(this.selector_deleteEventBtn).textContent();

    if (text === null) {
      throw new Error(
        `ProjectionEventEditModalPOM: Delete Event button text content is null. ` +
        `Selector: ${this.selector_deleteEventBtn}`
      );
    }

    return text;
  }
}