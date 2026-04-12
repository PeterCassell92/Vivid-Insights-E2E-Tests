/**
 * Page Object Model: SpendingTypeManagement
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const SpendingTypeManagementPOM_StandardSelector = '[data-testid="spending-type-management"]';

export class SpendingTypeManagementPOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===
  private readonly rootSelector: string;
  private readonly selector_managementContainer: string;
  private readonly selector_createFormCollapsibleButton: string;
  private readonly selector_collapseSpendingTypesButton: string;
  private readonly selector_spendingTypeItem: (id: string) => string;
  private readonly selector_allSpendingTypeItems: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = SpendingTypeManagementPOM_StandardSelector;

    this.selector_managementContainer = this.rootSelector;

    this.selector_createFormCollapsibleButton = `${this.rootSelector} [data-testid="collapse-create-form-button"]`;

    this.selector_collapseSpendingTypesButton = `${this.rootSelector} [data-testid="collapse-spending-types-button"]`;

    this.selector_spendingTypeItem = (id: string) =>
      `${this.rootSelector} [data-testid="spending-type-item__${id}"]`;

    this.selector_allSpendingTypeItems = `${this.rootSelector} [data-testid^="spending-type-item__"]`;
  }

  // === STATIC METHODS ===

  /**
   * @desc Checks if the SpendingTypeManagement panel is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the root container is visible, false otherwise
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const container = page.locator(SpendingTypeManagementPOM_StandardSelector);
      return await container.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a SpendingTypeManagementPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<SpendingTypeManagementPOM>} A SpendingTypeManagementPOM instance
   * @throws {Error} When the SpendingTypeManagement panel is not visible
   */
  static async getPOM(page: Page): Promise<SpendingTypeManagementPOM> {
    const isVisible = await SpendingTypeManagementPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'SpendingTypeManagementPOM: Cannot instantiate - panel is not visible. ' +
          `Expected element [${SpendingTypeManagementPOM_StandardSelector}] to be visible.`
      );
    }

    return new SpendingTypeManagementPOM(page);
  }

  // === VISIBILITY AND STATE METHODS ===

  /**
   * @desc Check whether the root SpendingTypeManagement panel is visible on screen
   * @returns {Promise<boolean>} True if the management container is visible
   */
  async isManagementContainerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_managementContainer).isVisible();
  }

  /**
   * @desc Check whether the Create New Spending Type collapsible form section is currently visible (i.e., not collapsed)
   * @returns {Promise<boolean>} True if the create form collapsible button is visible
   */
  async isCreateFormCollapsibleButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_createFormCollapsibleButton).isVisible();
  }

  /**
   * @desc Check whether the top-level collapsible toggle button for the Spending Types section is visible
   * @returns {Promise<boolean>} True if the collapse spending types button is visible
   */
  async isCollapseSpendingTypesButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_collapseSpendingTypesButton).isVisible();
  }

  /**
   * @desc Check whether a specific spending type item is visible in the list
   * @param {string} id - The ID of the spending type item
   * @returns {Promise<boolean>} True if the spending type item is visible
   */
  async isSpendingTypeItemVisible(id: string): Promise<boolean> {
    return await this.page.locator(this.selector_spendingTypeItem(id)).isVisible();
  }

  // === ACTION METHODS ===

  /**
   * @desc Click the collapsible toggle to expand or collapse the Create New Spending Type form sub-section
   * Expected outcome is that the create form section will toggle its collapsed/expanded state
   */
  async clickCreateFormCollapsibleButton(): Promise<void> {
    await this.page.locator(this.selector_createFormCollapsibleButton).click();
  }

  /**
   * @desc Double-click a specific spending type item to toggle its filter state
   * Expected outcome is that the spending type filter will be toggled (only effective when filterEnabled is true)
   * @param {string} id - The ID of the spending type item to double-click
   */
  async doubleClickSpendingTypeItem(id: string): Promise<void> {
    await this.page.locator(this.selector_spendingTypeItem(id)).dblclick();
  }

  /**
   * @desc Click the top-level collapsible toggle to expand or collapse the entire Spending Types section
   * Expected outcome is that the entire spending types section will toggle its collapsed/expanded state
   */
  async clickCollapseSpendingTypesButton(): Promise<void> {
    await this.page.locator(this.selector_collapseSpendingTypesButton).click();
  }

  // === DATA RETRIEVAL METHODS ===

  /**
   * @desc Get the full inner HTML of the SpendingTypeManagement root container
   * @returns {Promise<string>} The inner HTML of the management container
   * @throws {Error} When the management container inner HTML is not accessible
   */
  async getManagementContainerInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_managementContainer).isVisible();
    const html = await this.page.locator(this.selector_managementContainer).innerHTML();

    if (html === null) {
      throw new Error(
        `SpendingTypeManagementPOM: Inner HTML is not accessible. Selector: ${this.selector_managementContainer}`
      );
    }

    return html;
  }

  /**
   * @desc Get the CSS class list of the create form collapsible toggle button to inspect its current state
   * @returns {Promise<string>} The class attribute value of the create form collapsible button
   * @throws {Error} When the class attribute is not accessible
   */
  async getCreateFormCollapsibleButtonClassList(): Promise<string> {
    await this.page.locator(this.selector_createFormCollapsibleButton).isVisible();
    const classList = await this.page
      .locator(this.selector_createFormCollapsibleButton)
      .getAttribute('class');

    if (classList === null) {
      throw new Error(
        `SpendingTypeManagementPOM: Class list is not accessible for create form collapsible button. Selector: ${this.selector_createFormCollapsibleButton}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the data-spending-type-name attribute value from a specific spending type list item to read its display name
   * @param {string} id - The ID of the spending type item
   * @returns {Promise<string>} The data-spending-type-name attribute value
   * @throws {Error} When the attribute is not accessible or null
   */
  async getSpendingTypeItemName(id: string): Promise<string> {
    const selector = this.selector_spendingTypeItem(id);
    await this.page.locator(selector).isVisible();
    const name = await this.page.locator(selector).getAttribute('data-spending-type-name');

    if (name === null) {
      throw new Error(
        `SpendingTypeManagementPOM: data-spending-type-name attribute is not accessible for item "${id}". Selector: ${selector}`
      );
    }

    return name;
  }

  /**
   * @desc Get a list of all spending type name values from the data-spending-type-name attribute across all rendered spending type items
   * @returns {Promise<string[]>} Array of spending type name values
   */
  async getAllSpendingTypeNames(): Promise<string[]> {
    const items = this.page.locator(this.selector_allSpendingTypeItems);
    const count = await items.count();
    const names: string[] = [];

    for (let i = 0; i < count; i++) {
      const name = await items.nth(i).getAttribute('data-spending-type-name');
      if (name !== null) {
        names.push(name);
      }
    }

    return names;
  }

  /**
   * @desc Get the visible text content of a specific spending type item, including its name and optional description
   * @param {string} id - The ID of the spending type item
   * @returns {Promise<string>} The text content of the spending type item exactly as it appears
   * @throws {Error} When the text content is not accessible or null
   */
  async getSpendingTypeItemText(id: string): Promise<string> {
    const selector = this.selector_spendingTypeItem(id);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();

    if (text === null) {
      throw new Error(
        `SpendingTypeManagementPOM: Text content is not accessible for spending type item "${id}". Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Get the CSS class list of a specific spending type item to determine whether it is currently active/filtered (border-blue-500) or inactive (border-gray-200)
   * @param {string} id - The ID of the spending type item
   * @returns {Promise<string>} The class attribute value of the spending type item
   * @throws {Error} When the class attribute is not accessible
   */
  async getSpendingTypeItemClassList(id: string): Promise<string> {
    const selector = this.selector_spendingTypeItem(id);
    await this.page.locator(selector).isVisible();
    const classList = await this.page.locator(selector).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `SpendingTypeManagementPOM: Class list is not accessible for spending type item "${id}". Selector: ${selector}`
      );
    }

    return classList;
  }

  /**
   * @desc Count the number of spending type items currently rendered in the existing types list
   * @returns {Promise<number>} The number of spending type items rendered
   */
  async getSpendingTypeItemCount(): Promise<number> {
    return await this.page.locator(this.selector_allSpendingTypeItems).count();
  }

  /**
   * @desc Get the aria-label attribute of the top-level collapsible toggle to determine the current collapsed/expanded state ('Expand spending types' vs 'Collapse spending types')
   * @returns {Promise<string>} The aria-label attribute value of the collapse spending types button
   * @throws {Error} When the aria-label attribute is not accessible
   */
  async getCollapseSpendingTypesButtonAriaLabel(): Promise<string> {
    await this.page.locator(this.selector_collapseSpendingTypesButton).isVisible();
    const ariaLabel = await this.page
      .locator(this.selector_collapseSpendingTypesButton)
      .getAttribute('aria-label');

    if (ariaLabel === null) {
      throw new Error(
        `SpendingTypeManagementPOM: aria-label attribute is not accessible for collapse spending types button. Selector: ${this.selector_collapseSpendingTypesButton}`
      );
    }

    return ariaLabel;
  }
}