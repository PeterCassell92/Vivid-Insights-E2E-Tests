/**
 * Page Object Model: CategorizationRulesManagement
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const CategorizationRulesManagementPOM_StandardSelector =
  '[data-testid="categorization-rules-section"]';

export class CategorizationRulesManagementPOM {
  private readonly page: Page;

  // === ROOT SELECTOR ===
  private readonly rootSelector: string;

  // === CATEGORIZATION RULES SECTION SELECTORS ===
  private readonly selector_sectionContainer: string;
  private readonly selector_collapsibleHeaderToggle: string;

  // === SMART REMOVE SECTION SELECTORS ===
  private readonly selector_smartRemoveToggle: string;
  private readonly selector_removeDescriptionStringInput: string;
  private readonly selector_removeExactMatchCheckbox: string;
  private readonly selector_removeStartDateInput: string;
  private readonly selector_removeEndDateInput: string;
  private readonly selector_removeError: string;
  private readonly selector_smartRemoveButton: string;
  private readonly selector_cancelRemoveButton: string;
  private readonly selector_removeSpendingTypeCheckbox: (spendingTypeName: string) => string;

  // === RULES LIST CONTAINER SELECTORS ===
  private readonly selector_rulesListContainer: string;
  private readonly selector_ruleCard: (ruleId: string) => string;
  private readonly selector_deleteRuleButton: (ruleId: string) => string;
  private readonly selector_applyRuleButton: (ruleId: string) => string;
  private readonly selector_editRuleButton: (ruleId: string) => string;

  // === ACTIONS TOOLBAR SELECTORS ===
  private readonly selector_applyAllRulesButton: string;
  private readonly selector_toggleCreateRuleButton: string;

  // === CREATE/EDIT RULE FORM SELECTORS ===
  private readonly selector_saveRuleButton: string;
  private readonly selector_cancelRuleButton: string;
  private readonly selector_descriptionStringInput: string;
  private readonly selector_exactMatchCheckbox: string;
  private readonly selector_setsIsInvestmentCheckbox: string;
  private readonly selector_formError: string;
  private readonly selector_spendingTypeCheckbox: (spendingTypeName: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = CategorizationRulesManagementPOM_StandardSelector;

    // Categorization rules section
    this.selector_sectionContainer = this.rootSelector;
    this.selector_collapsibleHeaderToggle = `${this.rootSelector} [data-testid="collapse-categorization-button"]`;

    // Smart remove section
    this.selector_smartRemoveToggle = `${this.rootSelector} [data-testid="smart-remove-toggle"]`;
    this.selector_removeDescriptionStringInput = `${this.rootSelector} [data-testid="remove-description-string-input"]`;
    this.selector_removeExactMatchCheckbox = `${this.rootSelector} [data-testid="remove-exact-match-checkbox"]`;
    this.selector_removeStartDateInput = `${this.rootSelector} [data-testid="remove-start-date-input"]`;
    this.selector_removeEndDateInput = `${this.rootSelector} [data-testid="remove-end-date-input"]`;
    this.selector_removeError = `${this.rootSelector} [data-testid="remove-error"]`;
    this.selector_smartRemoveButton = `${this.rootSelector} [data-testid="smart-remove-button"]`;
    this.selector_cancelRemoveButton = `${this.rootSelector} [data-testid="cancel-remove-button"]`;
    this.selector_removeSpendingTypeCheckbox = (spendingTypeName: string) =>
      `${this.rootSelector} [data-testid="remove-spending-type-checkbox-${spendingTypeName}"]`;

    // Rules list container
    this.selector_rulesListContainer = `${this.rootSelector} [data-testid="rules-list-container"]`;
    this.selector_ruleCard = (ruleId: string) =>
      `${this.rootSelector} [data-testid="rule-${ruleId}"]`;
    this.selector_deleteRuleButton = (ruleId: string) =>
      `${this.rootSelector} [data-testid="delete-rule-${ruleId}"]`;
    this.selector_applyRuleButton = (ruleId: string) =>
      `${this.rootSelector} [data-testid="apply-rule-${ruleId}"]`;
    this.selector_editRuleButton = (ruleId: string) =>
      `${this.rootSelector} [data-testid="edit-rule-${ruleId}"]`;

    // Actions toolbar
    this.selector_applyAllRulesButton = `${this.rootSelector} [data-testid="apply-all-rules-button"]`;
    this.selector_toggleCreateRuleButton = `${this.rootSelector} [data-testid="toggle-create-rule-button"]`;

    // Create/edit rule form
    this.selector_saveRuleButton = `${this.rootSelector} [data-testid="save-rule-button"]`;
    this.selector_cancelRuleButton = `${this.rootSelector} [data-testid="cancel-rule-button"]`;
    this.selector_descriptionStringInput = `${this.rootSelector} [data-testid="description-string-input"]`;
    this.selector_exactMatchCheckbox = `${this.rootSelector} [data-testid="exact-match-checkbox"]`;
    this.selector_setsIsInvestmentCheckbox = `${this.rootSelector} [data-testid="sets-is-investment-checkbox"]`;
    this.selector_formError = `${this.rootSelector} [data-testid="form-error"]`;
    this.selector_spendingTypeCheckbox = (spendingTypeName: string) =>
      `${this.rootSelector} [data-testid="spending-type-checkbox-${spendingTypeName}"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the Categorization Rules Management panel is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the section container is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page
        .locator(CategorizationRulesManagementPOM_StandardSelector)
        .isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method to get a CategorizationRulesManagementPOM instance
   * Validates that the panel is visible before returning the instance
   * @param page - Playwright Page instance
   * @returns {Promise<CategorizationRulesManagementPOM>} POM instance
   * @throws {Error} When the categorization rules section is not visible
   */
  static async getPOM(page: Page): Promise<CategorizationRulesManagementPOM> {
    const isVisible = await CategorizationRulesManagementPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'CategorizationRulesManagementPOM: Cannot instantiate - panel is not visible. ' +
          `Expected element [${CategorizationRulesManagementPOM_StandardSelector}] to be visible.`
      );
    }

    return new CategorizationRulesManagementPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the categorization rules section root container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the section container is visible
   */
  async isSectionContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_sectionContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the Smart Remove SpendingTypes sub-panel is currently visible (expanded)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the smart remove toggle is visible
   */
  async isSmartRemoveToggleVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_smartRemoveToggle)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the remove error message element is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the remove error is visible
   */
  async isRemoveErrorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_removeError)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the Smart Remove submit button is currently enabled
   * @returns {Promise<boolean>} True if the smart remove button is enabled
   */
  async isSmartRemoveButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_smartRemoveButton).isEnabled();
  }

  /**
   * @desc Check whether the apply button for a specific rule is visible
   * @param {string} ruleId - The ID of the rule
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the apply rule button is visible
   */
  async isApplyRuleButtonVisible(ruleId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_applyRuleButton(ruleId))
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the edit button for a specific rule is visible
   * @param {string} ruleId - The ID of the rule
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the edit rule button is visible
   */
  async isEditRuleButtonVisible(ruleId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_editRuleButton(ruleId))
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the delete button for a specific rule is visible
   * @param {string} ruleId - The ID of the rule
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the delete rule button is visible
   */
  async isDeleteRuleButtonVisible(ruleId: string, timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_deleteRuleButton(ruleId))
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the rules list container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the rules list container is visible
   */
  async isRulesListContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_rulesListContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the Apply All Rules button is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the apply all rules button is visible
   */
  async isApplyAllRulesButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_applyAllRulesButton)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the Apply All Rules button is currently enabled
   * @returns {Promise<boolean>} True if the apply all rules button is enabled
   */
  async isApplyAllRulesButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_applyAllRulesButton).isEnabled();
  }

  /**
   * @desc Check whether the apply button for a specific rule is enabled
   * @param {string} ruleId - The ID of the rule
   * @returns {Promise<boolean>} True if the apply rule button is enabled
   */
  async isApplyRuleButtonEnabled(ruleId: string): Promise<boolean> {
    return await this.page.locator(this.selector_applyRuleButton(ruleId)).isEnabled();
  }

  /**
   * @desc Check whether the create/edit rule form is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the save rule button (form indicator) is visible
   */
  async isCreateEditRuleFormVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_saveRuleButton)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the form error message element is currently visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the form error is visible
   */
  async isFormErrorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_formError)
      .isVisible({ timeout });
  }

  /**
   * @desc Check whether the Save Rule button is currently enabled
   * @returns {Promise<boolean>} True if the save rule button is enabled
   */
  async isSaveRuleButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_saveRuleButton).isEnabled();
  }

  /**
   * @desc Check whether the Cancel Rule button is currently enabled
   * @returns {Promise<boolean>} True if the cancel rule button is enabled
   */
  async isCancelRuleButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_cancelRuleButton).isEnabled();
  }

  // ========================================================================
  // ACTION METHODS — CATEGORIZATION RULES SECTION
  // ========================================================================

  /**
   * @desc clicks the collapse/expand toggle button to show or hide the categorization rules panel content
   * Expected outcome is that the panel will expand or collapse
   */
  async clickCollapsibleHeaderToggle(): Promise<void> {
    await this.page.locator(this.selector_collapsibleHeaderToggle).click();
  }

  /**
   * @desc Scroll within the root categorization rules panel container
   */
  async scrollSectionContainer(): Promise<void> {
    await this.page.locator(this.selector_sectionContainer).evaluate((el) => {
      el.scrollTop += 300;
    });
  }

  // ========================================================================
  // ACTION METHODS — SMART REMOVE SECTION
  // ========================================================================

  /**
   * @desc clicks the Smart Remove toggle to expand or collapse the Smart Remove SpendingTypes sub-panel
   * Expected outcome is that the smart remove form will expand or collapse
   */
  async clickSmartRemoveToggle(): Promise<void> {
    await this.page.locator(this.selector_smartRemoveToggle).click();
  }

  /**
   * @desc Type a description pattern into the remove description string input to match transactions for smart removal
   * @param {string} value - The description pattern to enter
   */
  async fillRemoveDescriptionStringInput(value: string): Promise<void> {
    await this.page.locator(this.selector_removeDescriptionStringInput).fill(value);
  }

  /**
   * @desc Clear the remove description string input field
   */
  async clearRemoveDescriptionStringInput(): Promise<void> {
    await this.page.locator(this.selector_removeDescriptionStringInput).clear();
  }

  /**
   * @desc Check the exact-match checkbox to enable exact-match mode for the smart remove description pattern
   * Expected outcome is that the exact-match checkbox will be checked
   */
  async checkRemoveExactMatchCheckbox(): Promise<void> {
    await this.page.locator(this.selector_removeExactMatchCheckbox).check();
  }

  /**
   * @desc Uncheck the exact-match checkbox to disable exact-match mode for the smart remove description pattern
   * Expected outcome is that the exact-match checkbox will be unchecked
   */
  async uncheckRemoveExactMatchCheckbox(): Promise<void> {
    await this.page.locator(this.selector_removeExactMatchCheckbox).uncheck();
  }

  /**
   * @desc Enter a start date into the remove start date input to filter transactions by date range
   * @param {string} value - The start date value to enter
   */
  async fillRemoveStartDateInput(value: string): Promise<void> {
    await this.page.locator(this.selector_removeStartDateInput).fill(value);
  }

  /**
   * @desc Clear the remove start date input field
   */
  async clearRemoveStartDateInput(): Promise<void> {
    await this.page.locator(this.selector_removeStartDateInput).clear();
  }

  /**
   * @desc Enter an end date into the remove end date input to filter transactions by date range
   * @param {string} value - The end date value to enter
   */
  async fillRemoveEndDateInput(value: string): Promise<void> {
    await this.page.locator(this.selector_removeEndDateInput).fill(value);
  }

  /**
   * @desc Clear the remove end date input field
   */
  async clearRemoveEndDateInput(): Promise<void> {
    await this.page.locator(this.selector_removeEndDateInput).clear();
  }

  /**
   * @desc Check a specific spending type checkbox to select it for removal in the smart remove form
   * Expected outcome is that the spending type checkbox will be checked
   * @param {string} spendingTypeName - The name of the spending type
   */
  async checkRemoveSpendingTypeCheckbox(spendingTypeName: string): Promise<void> {
    await this.page
      .locator(this.selector_removeSpendingTypeCheckbox(spendingTypeName))
      .check();
  }

  /**
   * @desc Uncheck a specific spending type checkbox to deselect it from removal in the smart remove form
   * Expected outcome is that the spending type checkbox will be unchecked
   * @param {string} spendingTypeName - The name of the spending type
   */
  async uncheckRemoveSpendingTypeCheckbox(spendingTypeName: string): Promise<void> {
    await this.page
      .locator(this.selector_removeSpendingTypeCheckbox(spendingTypeName))
      .uncheck();
  }

  /**
   * @desc clicks the Smart Remove button to submit the smart remove form and trigger removal of spending types from matching transactions
   * Expected outcome is that the confirmation modal will appear
   */
  async clickSmartRemoveButton(): Promise<void> {
    await this.page.locator(this.selector_smartRemoveButton).click();
  }

  /**
   * @desc clicks the Cancel/Clear button to reset and clear the smart remove form without submitting
   * Expected outcome is that the smart remove form fields will be cleared
   */
  async clickCancelRemoveButton(): Promise<void> {
    await this.page.locator(this.selector_cancelRemoveButton).click();
  }

  // ========================================================================
  // ACTION METHODS — RULES LIST CONTAINER
  // ========================================================================

  /**
   * @desc Scroll within the rules list container to view all categorization rule cards
   */
  async scrollRulesListContainer(): Promise<void> {
    await this.page.locator(this.selector_rulesListContainer).evaluate((el) => {
      el.scrollTop += 300;
    });
  }

  /**
   * @desc clicks the edit button on a specific rule card to open the edit form for that rule
   * Expected outcome is that the create/edit rule form will open pre-populated with the rule's data
   * @param {string} ruleId - The ID of the rule to edit
   */
  async clickEditRuleButton(ruleId: string): Promise<void> {
    await this.page.locator(this.selector_editRuleButton(ruleId)).click();
  }

  /**
   * @desc clicks the apply button on a specific rule card to apply that rule to existing transactions
   * Expected outcome is that the confirmation modal will appear
   * @param {string} ruleId - The ID of the rule to apply
   */
  async clickApplyRuleButton(ruleId: string): Promise<void> {
    await this.page.locator(this.selector_applyRuleButton(ruleId)).click();
  }

  /**
   * @desc clicks the delete button on a specific rule card to initiate deletion of that rule
   * Expected outcome is that the confirmation modal will appear
   * @param {string} ruleId - The ID of the rule to delete
   */
  async clickDeleteRuleButton(ruleId: string): Promise<void> {
    await this.page.locator(this.selector_deleteRuleButton(ruleId)).click();
  }

  // ========================================================================
  // ACTION METHODS — ACTIONS TOOLBAR
  // ========================================================================

  /**
   * @desc clicks the Toggle Create Rule button to open the create rule form or cancel it if already open
   * Expected outcome is that the create/edit rule form will appear or disappear
   */
  async clickToggleCreateRuleButton(): Promise<void> {
    await this.page.locator(this.selector_toggleCreateRuleButton).click();
  }

  /**
   * @desc clicks the Apply All Rules button to apply all categorization rules to existing transactions
   * Expected outcome is that the confirmation modal will appear
   */
  async clickApplyAllRulesButton(): Promise<void> {
    await this.page.locator(this.selector_applyAllRulesButton).click();
  }

  // ========================================================================
  // ACTION METHODS — CREATE/EDIT RULE FORM
  // ========================================================================

  /**
   * @desc Type a description pattern into the description string input in the create/edit rule form
   * @param {string} value - The description pattern to enter
   */
  async fillDescriptionStringInput(value: string): Promise<void> {
    await this.page.locator(this.selector_descriptionStringInput).fill(value);
  }

  /**
   * @desc Clear the description string input field in the create/edit rule form
   */
  async clearDescriptionStringInput(): Promise<void> {
    await this.page.locator(this.selector_descriptionStringInput).clear();
  }

  /**
   * @desc Check the exact-match checkbox to enable exact-match mode in the create/edit rule form
   * Expected outcome is that the exact-match checkbox will be checked
   */
  async checkExactMatchCheckbox(): Promise<void> {
    await this.page.locator(this.selector_exactMatchCheckbox).check();
  }

  /**
   * @desc Uncheck the exact-match checkbox to disable exact-match mode in the create/edit rule form
   * Expected outcome is that the exact-match checkbox will be unchecked
   */
  async uncheckExactMatchCheckbox(): Promise<void> {
    await this.page.locator(this.selector_exactMatchCheckbox).uncheck();
  }

  /**
   * @desc Check the sets-is-investment checkbox to flag matched transactions as investments in the create/edit rule form
   * Expected outcome is that the sets-is-investment checkbox will be checked
   */
  async checkSetsIsInvestmentCheckbox(): Promise<void> {
    await this.page.locator(this.selector_setsIsInvestmentCheckbox).check();
  }

  /**
   * @desc Uncheck the sets-is-investment checkbox to remove the investment flag from the create/edit rule form
   * Expected outcome is that the sets-is-investment checkbox will be unchecked
   */
  async uncheckSetsIsInvestmentCheckbox(): Promise<void> {
    await this.page.locator(this.selector_setsIsInvestmentCheckbox).uncheck();
  }

  /**
   * @desc Check a specific spending type checkbox to assign it to the rule being created or edited
   * Expected outcome is that the spending type checkbox will be checked
   * @param {string} spendingTypeName - The name of the spending type
   */
  async checkSpendingTypeCheckbox(spendingTypeName: string): Promise<void> {
    await this.page
      .locator(this.selector_spendingTypeCheckbox(spendingTypeName))
      .check();
  }

  /**
   * @desc Uncheck a specific spending type checkbox to remove it from the rule being created or edited
   * Expected outcome is that the spending type checkbox will be unchecked
   * @param {string} spendingTypeName - The name of the spending type
   */
  async uncheckSpendingTypeCheckbox(spendingTypeName: string): Promise<void> {
    await this.page
      .locator(this.selector_spendingTypeCheckbox(spendingTypeName))
      .uncheck();
  }

  /**
   * @desc clicks the Save Rule button to submit the create/edit rule form and save the rule
   * Expected outcome is that the rule will be saved and the form will close
   */
  async clickSaveRuleButton(): Promise<void> {
    await this.page.locator(this.selector_saveRuleButton).click();
  }

  /**
   * @desc clicks the Cancel Rule button to close the create/edit rule form without saving
   * Expected outcome is that the form will close without saving any changes
   */
  async clickCancelRuleButton(): Promise<void> {
    await this.page.locator(this.selector_cancelRuleButton).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — CATEGORIZATION RULES SECTION
  // ========================================================================

  /**
   * @desc Get the CSS class list of the root section container to determine its current visual state
   * @returns {Promise<string>} The className string of the section container
   * @throws {Error} When the section container class list is not accessible
   */
  async getSectionContainerClassList(): Promise<string> {
    await this.page.locator(this.selector_sectionContainer).isVisible();
    const classList = await this.page
      .locator(this.selector_sectionContainer)
      .getAttribute('class');

    if (classList === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Section container class list is null. Selector: ${this.selector_sectionContainer}`
      );
    }

    return classList;
  }

  /**
   * @desc Get the text content of the collapse/expand toggle button to determine the current collapsed/expanded label
   * @returns {Promise<string>} The text content of the collapsible header toggle
   * @throws {Error} When the toggle text content is not accessible
   */
  async getCollapsibleHeaderToggleText(): Promise<string> {
    await this.page.locator(this.selector_collapsibleHeaderToggle).isVisible();
    const text = await this.page
      .locator(this.selector_collapsibleHeaderToggle)
      .textContent();

    if (text === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Collapsible header toggle text content is null. Selector: ${this.selector_collapsibleHeaderToggle}`
      );
    }

    return text;
  }

  /**
   * @desc Get the aria-label attribute of the collapse/expand toggle to determine the current collapsed or expanded state
   * @returns {Promise<string>} The aria-label attribute value of the collapsible header toggle
   * @throws {Error} When the aria-label attribute is not accessible
   */
  async getCollapsibleHeaderToggleAriaLabel(): Promise<string> {
    await this.page.locator(this.selector_collapsibleHeaderToggle).isVisible();
    const ariaLabel = await this.page
      .locator(this.selector_collapsibleHeaderToggle)
      .getAttribute('aria-label');

    if (ariaLabel === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Collapsible header toggle aria-label is null. Selector: ${this.selector_collapsibleHeaderToggle}`
      );
    }

    return ariaLabel;
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — SMART REMOVE SECTION
  // ========================================================================

  /**
   * @desc Get the aria-label of the smart remove toggle to determine its current expanded/collapsed state
   * @returns {Promise<string>} The aria-label attribute value of the smart remove toggle
   * @throws {Error} When the aria-label attribute is not accessible
   */
  async getSmartRemoveToggleAriaLabel(): Promise<string> {
    await this.page.locator(this.selector_smartRemoveToggle).isVisible();
    const ariaLabel = await this.page
      .locator(this.selector_smartRemoveToggle)
      .getAttribute('aria-label');

    if (ariaLabel === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Smart remove toggle aria-label is null. Selector: ${this.selector_smartRemoveToggle}`
      );
    }

    return ariaLabel;
  }

  /**
   * @desc Get the current value of the remove description string input
   * @returns {Promise<string>} The current input value
   * @throws {Error} When the input value is not accessible
   */
  async getRemoveDescriptionStringInputValue(): Promise<string> {
    await this.page.locator(this.selector_removeDescriptionStringInput).isVisible();
    const value = await this.page
      .locator(this.selector_removeDescriptionStringInput)
      .inputValue();

    return value;
  }

  /**
   * @desc Get the checked state of the remove exact-match checkbox
   * @returns {Promise<boolean>} True if the checkbox is checked
   */
  async isRemoveExactMatchCheckboxChecked(): Promise<boolean> {
    return await this.page.locator(this.selector_removeExactMatchCheckbox).isChecked();
  }

  /**
   * @desc Get the current value of the remove start date input
   * @returns {Promise<string>} The current input value
   */
  async getRemoveStartDateInputValue(): Promise<string> {
    await this.page.locator(this.selector_removeStartDateInput).isVisible();
    return await this.page.locator(this.selector_removeStartDateInput).inputValue();
  }

  /**
   * @desc Get the current value of the remove end date input
   * @returns {Promise<string>} The current input value
   */
  async getRemoveEndDateInputValue(): Promise<string> {
    await this.page.locator(this.selector_removeEndDateInput).isVisible();
    return await this.page.locator(this.selector_removeEndDateInput).inputValue();
  }

  /**
   * @desc Get the text content of the Smart Remove button to determine its current state
   * @returns {Promise<string>} The text content of the smart remove button exactly as it appears
   * @throws {Error} When the button text content is not accessible
   */
  async getSmartRemoveButtonText(): Promise<string> {
    await this.page.locator(this.selector_smartRemoveButton).isVisible();
    const text = await this.page
      .locator(this.selector_smartRemoveButton)
      .textContent();

    if (text === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Smart remove button text content is null. Selector: ${this.selector_smartRemoveButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text content of the remove error message displayed when smart remove form validation fails
   * @returns {Promise<string>} The error message text exactly as it appears
   * @throws {Error} When the remove error text content is not accessible
   */
  async getRemoveErrorText(): Promise<string> {
    await this.page.locator(this.selector_removeError).isVisible();
    const text = await this.page.locator(this.selector_removeError).textContent();

    if (text === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Remove error text content is null. Selector: ${this.selector_removeError}`
      );
    }

    return text;
  }

  /**
   * @desc Get the checked state of a specific spending type checkbox in the smart remove form
   * @param {string} spendingTypeName - The name of the spending type
   * @returns {Promise<boolean>} True if the checkbox is checked
   */
  async isRemoveSpendingTypeCheckboxChecked(spendingTypeName: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_removeSpendingTypeCheckbox(spendingTypeName))
      .isChecked();
  }

  /**
   * @desc Count the total number of spending type checkboxes available in the smart remove form
   * @returns {Promise<number>} The count of remove spending type checkboxes
   */
  async countRemoveSpendingTypeCheckboxes(): Promise<number> {
    return await this.page
      .locator(`${this.rootSelector} [data-testid^="remove-spending-type-checkbox-"]`)
      .count();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — RULES LIST CONTAINER
  // ========================================================================

  /**
   * @desc Get the text content of a specific rule card to read its description string, spending types, and flags
   * @param {string} ruleId - The ID of the rule
   * @returns {Promise<string>} The text content of the rule card exactly as it appears
   * @throws {Error} When the rule card text content is not accessible
   */
  async getRuleCardText(ruleId: string): Promise<string> {
    await this.page.locator(this.selector_ruleCard(ruleId)).isVisible();
    const text = await this.page
      .locator(this.selector_ruleCard(ruleId))
      .textContent();

    if (text === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Rule card text content is null for ruleId "${ruleId}". Selector: ${this.selector_ruleCard(ruleId)}`
      );
    }

    return text;
  }

  /**
   * @desc Count the total number of rule cards currently rendered in the rules list
   * @returns {Promise<number>} The count of rule cards
   */
  async countRuleCards(): Promise<number> {
    return await this.page
      .locator(`${this.rootSelector} [data-testid^="rule-"]`)
      .count();
  }

  /**
   * @desc Get the text content of the apply rule button for a specific rule to check its current state
   * @param {string} ruleId - The ID of the rule
   * @returns {Promise<string>} The text content of the apply rule button exactly as it appears
   * @throws {Error} When the apply rule button text content is not accessible
   */
  async getApplyRuleButtonText(ruleId: string): Promise<string> {
    await this.page.locator(this.selector_applyRuleButton(ruleId)).isVisible();
    const text = await this.page
      .locator(this.selector_applyRuleButton(ruleId))
      .textContent();

    if (text === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Apply rule button text content is null for ruleId "${ruleId}". Selector: ${this.selector_applyRuleButton(ruleId)}`
      );
    }

    return text;
  }

  /**
   * @desc Get a list of text content from all rule cards to enumerate all existing categorization rules
   * @returns {Promise<string[]>} Array of text content from all rule cards
   */
  async listAllRuleCardTexts(): Promise<string[]> {
    const locator = this.page.locator(`${this.rootSelector} [data-testid^="rule-"]`);
    const count = await locator.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await locator.nth(i).textContent();
      texts.push(text ?? '');
    }

    return texts;
  }

  /**
   * @desc Get the inner HTML of a specific rule card to inspect all rendered details including badges and buttons
   * @param {string} ruleId - The ID of the rule
   * @returns {Promise<string>} The inner HTML of the rule card
   * @throws {Error} When the rule card inner HTML is not accessible
   */
  async getRuleCardInnerHtml(ruleId: string): Promise<string> {
    await this.page.locator(this.selector_ruleCard(ruleId)).isVisible();
    const html = await this.page
      .locator(this.selector_ruleCard(ruleId))
      .innerHTML();

    return html;
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — ACTIONS TOOLBAR
  // ========================================================================

  /**
   * @desc Get the text content of the Apply All Rules button to determine its current state
   * @returns {Promise<string>} The text content of the apply all rules button exactly as it appears
   * @throws {Error} When the button text content is not accessible
   */
  async getApplyAllRulesButtonText(): Promise<string> {
    await this.page.locator(this.selector_applyAllRulesButton).isVisible();
    const text = await this.page
      .locator(this.selector_applyAllRulesButton)
      .textContent();

    if (text === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Apply all rules button text content is null. Selector: ${this.selector_applyAllRulesButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the text content of the Toggle Create Rule button to determine whether the form is open or closed
   * @returns {Promise<string>} The text content of the toggle create rule button exactly as it appears
   * @throws {Error} When the button text content is not accessible
   */
  async getToggleCreateRuleButtonText(): Promise<string> {
    await this.page.locator(this.selector_toggleCreateRuleButton).isVisible();
    const text = await this.page
      .locator(this.selector_toggleCreateRuleButton)
      .textContent();

    if (text === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Toggle create rule button text content is null. Selector: ${this.selector_toggleCreateRuleButton}`
      );
    }

    return text;
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS — CREATE/EDIT RULE FORM
  // ========================================================================

  /**
   * @desc Get the text content of the Save Rule button to determine its current state
   * @returns {Promise<string>} The text content of the save rule button exactly as it appears
   * @throws {Error} When the button text content is not accessible
   */
  async getSaveRuleButtonText(): Promise<string> {
    await this.page.locator(this.selector_saveRuleButton).isVisible();
    const text = await this.page
      .locator(this.selector_saveRuleButton)
      .textContent();

    if (text === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Save rule button text content is null. Selector: ${this.selector_saveRuleButton}`
      );
    }

    return text;
  }

  /**
   * @desc Get the current value of the description string input in the create/edit rule form
   * @returns {Promise<string>} The current input value
   */
  async getDescriptionStringInputValue(): Promise<string> {
    await this.page.locator(this.selector_descriptionStringInput).isVisible();
    return await this.page.locator(this.selector_descriptionStringInput).inputValue();
  }

  /**
   * @desc Get the checked state of the exact-match checkbox in the create/edit rule form
   * @returns {Promise<boolean>} True if the checkbox is checked
   */
  async isExactMatchCheckboxChecked(): Promise<boolean> {
    return await this.page.locator(this.selector_exactMatchCheckbox).isChecked();
  }

  /**
   * @desc Get the checked state of the sets-is-investment checkbox in the create/edit rule form
   * @returns {Promise<boolean>} True if the checkbox is checked
   */
  async isSetsIsInvestmentCheckboxChecked(): Promise<boolean> {
    return await this.page.locator(this.selector_setsIsInvestmentCheckbox).isChecked();
  }

  /**
   * @desc Get the checked state of a specific spending type checkbox in the create/edit rule form
   * @param {string} spendingTypeName - The name of the spending type
   * @returns {Promise<boolean>} True if the checkbox is checked
   */
  async isSpendingTypeCheckboxChecked(spendingTypeName: string): Promise<boolean> {
    return await this.page
      .locator(this.selector_spendingTypeCheckbox(spendingTypeName))
      .isChecked();
  }

  /**
   * @desc Count the total number of spending type checkboxes available in the create/edit rule form
   * @returns {Promise<number>} The count of spending type checkboxes
   */
  async countSpendingTypeCheckboxes(): Promise<number> {
    return await this.page
      .locator(`${this.rootSelector} [data-testid^="spending-type-checkbox-"]`)
      .count();
  }

  /**
   * @desc Get the text content of the form error message displayed when create/edit rule form validation fails
   * @returns {Promise<string>} The error message text exactly as it appears
   * @throws {Error} When the form error text content is not accessible
   */
  async getFormErrorText(): Promise<string> {
    await this.page.locator(this.selector_formError).isVisible();
    const text = await this.page.locator(this.selector_formError).textContent();

    if (text === null) {
      throw new Error(
        `CategorizationRulesManagementPOM: Form error text content is null. Selector: ${this.selector_formError}`
      );
    }

    return text;
  }
}