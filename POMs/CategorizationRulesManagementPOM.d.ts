/**
 * Page Object Model: CategorizationRulesManagement
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class CategorizationRulesManagementPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_sectionContainer;
    private readonly selector_collapsibleHeaderToggle;
    private readonly selector_smartRemoveToggle;
    private readonly selector_removeDescriptionStringInput;
    private readonly selector_removeExactMatchCheckbox;
    private readonly selector_removeStartDateInput;
    private readonly selector_removeEndDateInput;
    private readonly selector_removeError;
    private readonly selector_smartRemoveButton;
    private readonly selector_cancelRemoveButton;
    private readonly selector_removeSpendingTypeCheckbox;
    private readonly selector_rulesListContainer;
    private readonly selector_ruleCard;
    private readonly selector_deleteRuleButton;
    private readonly selector_applyRuleButton;
    private readonly selector_editRuleButton;
    private readonly selector_applyAllRulesButton;
    private readonly selector_toggleCreateRuleButton;
    private readonly selector_saveRuleButton;
    private readonly selector_cancelRuleButton;
    private readonly selector_descriptionStringInput;
    private readonly selector_exactMatchCheckbox;
    private readonly selector_setsIsInvestmentCheckbox;
    private readonly selector_formError;
    private readonly selector_spendingTypeCheckbox;
    constructor(page: Page);
    /**
     * @desc Checks if the Categorization Rules Management panel is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the section container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method to get a CategorizationRulesManagementPOM instance
     * Validates that the panel is visible before returning the instance
     * @param page - Playwright Page instance
     * @returns {Promise<CategorizationRulesManagementPOM>} POM instance
     * @throws {Error} When the categorization rules section is not visible
     */
    static getPOM(page: Page): Promise<CategorizationRulesManagementPOM>;
    /**
     * @desc Check whether the categorization rules section root container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the section container is visible
     */
    isSectionContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Smart Remove SpendingTypes sub-panel is currently visible (expanded)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the smart remove toggle is visible
     */
    isSmartRemoveToggleVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the remove error message element is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the remove error is visible
     */
    isRemoveErrorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Smart Remove submit button is currently enabled
     * @returns {Promise<boolean>} True if the smart remove button is enabled
     */
    isSmartRemoveButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the apply button for a specific rule is visible
     * @param {string} ruleId - The ID of the rule
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the apply rule button is visible
     */
    isApplyRuleButtonVisible(ruleId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the edit button for a specific rule is visible
     * @param {string} ruleId - The ID of the rule
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the edit rule button is visible
     */
    isEditRuleButtonVisible(ruleId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the delete button for a specific rule is visible
     * @param {string} ruleId - The ID of the rule
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the delete rule button is visible
     */
    isDeleteRuleButtonVisible(ruleId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the rules list container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the rules list container is visible
     */
    isRulesListContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Apply All Rules button is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the apply all rules button is visible
     */
    isApplyAllRulesButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Apply All Rules button is currently enabled
     * @returns {Promise<boolean>} True if the apply all rules button is enabled
     */
    isApplyAllRulesButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the apply button for a specific rule is enabled
     * @param {string} ruleId - The ID of the rule
     * @returns {Promise<boolean>} True if the apply rule button is enabled
     */
    isApplyRuleButtonEnabled(ruleId: string): Promise<boolean>;
    /**
     * @desc Check whether the create/edit rule form is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the save rule button (form indicator) is visible
     */
    isCreateEditRuleFormVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the form error message element is currently visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the form error is visible
     */
    isFormErrorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the Save Rule button is currently enabled
     * @returns {Promise<boolean>} True if the save rule button is enabled
     */
    isSaveRuleButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the Cancel Rule button is currently enabled
     * @returns {Promise<boolean>} True if the cancel rule button is enabled
     */
    isCancelRuleButtonEnabled(): Promise<boolean>;
    /**
     * @desc clicks the collapse/expand toggle button to show or hide the categorization rules panel content
     * Expected outcome is that the panel will expand or collapse
     */
    clickCollapsibleHeaderToggle(): Promise<void>;
    /**
     * @desc Scroll within the root categorization rules panel container
     */
    scrollSectionContainer(): Promise<void>;
    /**
     * @desc clicks the Smart Remove toggle to expand or collapse the Smart Remove SpendingTypes sub-panel
     * Expected outcome is that the smart remove form will expand or collapse
     */
    clickSmartRemoveToggle(): Promise<void>;
    /**
     * @desc Type a description pattern into the remove description string input to match transactions for smart removal
     * @param {string} value - The description pattern to enter
     */
    fillRemoveDescriptionStringInput(value: string): Promise<void>;
    /**
     * @desc Clear the remove description string input field
     */
    clearRemoveDescriptionStringInput(): Promise<void>;
    /**
     * @desc Check the exact-match checkbox to enable exact-match mode for the smart remove description pattern
     * Expected outcome is that the exact-match checkbox will be checked
     */
    checkRemoveExactMatchCheckbox(): Promise<void>;
    /**
     * @desc Uncheck the exact-match checkbox to disable exact-match mode for the smart remove description pattern
     * Expected outcome is that the exact-match checkbox will be unchecked
     */
    uncheckRemoveExactMatchCheckbox(): Promise<void>;
    /**
     * @desc Enter a start date into the remove start date input to filter transactions by date range
     * @param {string} value - The start date value to enter
     */
    fillRemoveStartDateInput(value: string): Promise<void>;
    /**
     * @desc Clear the remove start date input field
     */
    clearRemoveStartDateInput(): Promise<void>;
    /**
     * @desc Enter an end date into the remove end date input to filter transactions by date range
     * @param {string} value - The end date value to enter
     */
    fillRemoveEndDateInput(value: string): Promise<void>;
    /**
     * @desc Clear the remove end date input field
     */
    clearRemoveEndDateInput(): Promise<void>;
    /**
     * @desc Check a specific spending type checkbox to select it for removal in the smart remove form
     * Expected outcome is that the spending type checkbox will be checked
     * @param {string} spendingTypeName - The name of the spending type
     */
    checkRemoveSpendingTypeCheckbox(spendingTypeName: string): Promise<void>;
    /**
     * @desc Uncheck a specific spending type checkbox to deselect it from removal in the smart remove form
     * Expected outcome is that the spending type checkbox will be unchecked
     * @param {string} spendingTypeName - The name of the spending type
     */
    uncheckRemoveSpendingTypeCheckbox(spendingTypeName: string): Promise<void>;
    /**
     * @desc clicks the Smart Remove button to submit the smart remove form and trigger removal of spending types from matching transactions
     * Expected outcome is that the confirmation modal will appear
     */
    clickSmartRemoveButton(): Promise<void>;
    /**
     * @desc clicks the Cancel/Clear button to reset and clear the smart remove form without submitting
     * Expected outcome is that the smart remove form fields will be cleared
     */
    clickCancelRemoveButton(): Promise<void>;
    /**
     * @desc Scroll within the rules list container to view all categorization rule cards
     */
    scrollRulesListContainer(): Promise<void>;
    /**
     * @desc clicks the edit button on a specific rule card to open the edit form for that rule
     * Expected outcome is that the create/edit rule form will open pre-populated with the rule's data
     * @param {string} ruleId - The ID of the rule to edit
     */
    clickEditRuleButton(ruleId: string): Promise<void>;
    /**
     * @desc clicks the apply button on a specific rule card to apply that rule to existing transactions
     * Expected outcome is that the confirmation modal will appear
     * @param {string} ruleId - The ID of the rule to apply
     */
    clickApplyRuleButton(ruleId: string): Promise<void>;
    /**
     * @desc clicks the delete button on a specific rule card to initiate deletion of that rule
     * Expected outcome is that the confirmation modal will appear
     * @param {string} ruleId - The ID of the rule to delete
     */
    clickDeleteRuleButton(ruleId: string): Promise<void>;
    /**
     * @desc clicks the Toggle Create Rule button to open the create rule form or cancel it if already open
     * Expected outcome is that the create/edit rule form will appear or disappear
     */
    clickToggleCreateRuleButton(): Promise<void>;
    /**
     * @desc clicks the Apply All Rules button to apply all categorization rules to existing transactions
     * Expected outcome is that the confirmation modal will appear
     */
    clickApplyAllRulesButton(): Promise<void>;
    /**
     * @desc Type a description pattern into the description string input in the create/edit rule form
     * @param {string} value - The description pattern to enter
     */
    fillDescriptionStringInput(value: string): Promise<void>;
    /**
     * @desc Clear the description string input field in the create/edit rule form
     */
    clearDescriptionStringInput(): Promise<void>;
    /**
     * @desc Check the exact-match checkbox to enable exact-match mode in the create/edit rule form
     * Expected outcome is that the exact-match checkbox will be checked
     */
    checkExactMatchCheckbox(): Promise<void>;
    /**
     * @desc Uncheck the exact-match checkbox to disable exact-match mode in the create/edit rule form
     * Expected outcome is that the exact-match checkbox will be unchecked
     */
    uncheckExactMatchCheckbox(): Promise<void>;
    /**
     * @desc Check the sets-is-investment checkbox to flag matched transactions as investments in the create/edit rule form
     * Expected outcome is that the sets-is-investment checkbox will be checked
     */
    checkSetsIsInvestmentCheckbox(): Promise<void>;
    /**
     * @desc Uncheck the sets-is-investment checkbox to remove the investment flag from the create/edit rule form
     * Expected outcome is that the sets-is-investment checkbox will be unchecked
     */
    uncheckSetsIsInvestmentCheckbox(): Promise<void>;
    /**
     * @desc Check a specific spending type checkbox to assign it to the rule being created or edited
     * Expected outcome is that the spending type checkbox will be checked
     * @param {string} spendingTypeName - The name of the spending type
     */
    checkSpendingTypeCheckbox(spendingTypeName: string): Promise<void>;
    /**
     * @desc Uncheck a specific spending type checkbox to remove it from the rule being created or edited
     * Expected outcome is that the spending type checkbox will be unchecked
     * @param {string} spendingTypeName - The name of the spending type
     */
    uncheckSpendingTypeCheckbox(spendingTypeName: string): Promise<void>;
    /**
     * @desc clicks the Save Rule button to submit the create/edit rule form and save the rule
     * Expected outcome is that the rule will be saved and the form will close
     */
    clickSaveRuleButton(): Promise<void>;
    /**
     * @desc clicks the Cancel Rule button to close the create/edit rule form without saving
     * Expected outcome is that the form will close without saving any changes
     */
    clickCancelRuleButton(): Promise<void>;
    /**
     * @desc Get the CSS class list of the root section container to determine its current visual state
     * @returns {Promise<string>} The className string of the section container
     * @throws {Error} When the section container class list is not accessible
     */
    getSectionContainerClassList(): Promise<string>;
    /**
     * @desc Get the text content of the collapse/expand toggle button to determine the current collapsed/expanded label
     * @returns {Promise<string>} The text content of the collapsible header toggle
     * @throws {Error} When the toggle text content is not accessible
     */
    getCollapsibleHeaderToggleText(): Promise<string>;
    /**
     * @desc Get the aria-label attribute of the collapse/expand toggle to determine the current collapsed or expanded state
     * @returns {Promise<string>} The aria-label attribute value of the collapsible header toggle
     * @throws {Error} When the aria-label attribute is not accessible
     */
    getCollapsibleHeaderToggleAriaLabel(): Promise<string>;
    /**
     * @desc Get the aria-label of the smart remove toggle to determine its current expanded/collapsed state
     * @returns {Promise<string>} The aria-label attribute value of the smart remove toggle
     * @throws {Error} When the aria-label attribute is not accessible
     */
    getSmartRemoveToggleAriaLabel(): Promise<string>;
    /**
     * @desc Get the current value of the remove description string input
     * @returns {Promise<string>} The current input value
     * @throws {Error} When the input value is not accessible
     */
    getRemoveDescriptionStringInputValue(): Promise<string>;
    /**
     * @desc Get the checked state of the remove exact-match checkbox
     * @returns {Promise<boolean>} True if the checkbox is checked
     */
    isRemoveExactMatchCheckboxChecked(): Promise<boolean>;
    /**
     * @desc Get the current value of the remove start date input
     * @returns {Promise<string>} The current input value
     */
    getRemoveStartDateInputValue(): Promise<string>;
    /**
     * @desc Get the current value of the remove end date input
     * @returns {Promise<string>} The current input value
     */
    getRemoveEndDateInputValue(): Promise<string>;
    /**
     * @desc Get the text content of the Smart Remove button to determine its current state
     * @returns {Promise<string>} The text content of the smart remove button exactly as it appears
     * @throws {Error} When the button text content is not accessible
     */
    getSmartRemoveButtonText(): Promise<string>;
    /**
     * @desc Get the text content of the remove error message displayed when smart remove form validation fails
     * @returns {Promise<string>} The error message text exactly as it appears
     * @throws {Error} When the remove error text content is not accessible
     */
    getRemoveErrorText(): Promise<string>;
    /**
     * @desc Get the checked state of a specific spending type checkbox in the smart remove form
     * @param {string} spendingTypeName - The name of the spending type
     * @returns {Promise<boolean>} True if the checkbox is checked
     */
    isRemoveSpendingTypeCheckboxChecked(spendingTypeName: string): Promise<boolean>;
    /**
     * @desc Count the total number of spending type checkboxes available in the smart remove form
     * @returns {Promise<number>} The count of remove spending type checkboxes
     */
    countRemoveSpendingTypeCheckboxes(): Promise<number>;
    /**
     * @desc Get the text content of a specific rule card to read its description string, spending types, and flags
     * @param {string} ruleId - The ID of the rule
     * @returns {Promise<string>} The text content of the rule card exactly as it appears
     * @throws {Error} When the rule card text content is not accessible
     */
    getRuleCardText(ruleId: string): Promise<string>;
    /**
     * @desc Count the total number of rule cards currently rendered in the rules list
     * @returns {Promise<number>} The count of rule cards
     */
    countRuleCards(): Promise<number>;
    /**
     * @desc Get the text content of the apply rule button for a specific rule to check its current state
     * @param {string} ruleId - The ID of the rule
     * @returns {Promise<string>} The text content of the apply rule button exactly as it appears
     * @throws {Error} When the apply rule button text content is not accessible
     */
    getApplyRuleButtonText(ruleId: string): Promise<string>;
    /**
     * @desc Get a list of text content from all rule cards to enumerate all existing categorization rules
     * @returns {Promise<string[]>} Array of text content from all rule cards
     */
    listAllRuleCardTexts(): Promise<string[]>;
    /**
     * @desc Get the inner HTML of a specific rule card to inspect all rendered details including badges and buttons
     * @param {string} ruleId - The ID of the rule
     * @returns {Promise<string>} The inner HTML of the rule card
     * @throws {Error} When the rule card inner HTML is not accessible
     */
    getRuleCardInnerHtml(ruleId: string): Promise<string>;
    /**
     * @desc Get the text content of the Apply All Rules button to determine its current state
     * @returns {Promise<string>} The text content of the apply all rules button exactly as it appears
     * @throws {Error} When the button text content is not accessible
     */
    getApplyAllRulesButtonText(): Promise<string>;
    /**
     * @desc Get the text content of the Toggle Create Rule button to determine whether the form is open or closed
     * @returns {Promise<string>} The text content of the toggle create rule button exactly as it appears
     * @throws {Error} When the button text content is not accessible
     */
    getToggleCreateRuleButtonText(): Promise<string>;
    /**
     * @desc Get the text content of the Save Rule button to determine its current state
     * @returns {Promise<string>} The text content of the save rule button exactly as it appears
     * @throws {Error} When the button text content is not accessible
     */
    getSaveRuleButtonText(): Promise<string>;
    /**
     * @desc Get the current value of the description string input in the create/edit rule form
     * @returns {Promise<string>} The current input value
     */
    getDescriptionStringInputValue(): Promise<string>;
    /**
     * @desc Get the checked state of the exact-match checkbox in the create/edit rule form
     * @returns {Promise<boolean>} True if the checkbox is checked
     */
    isExactMatchCheckboxChecked(): Promise<boolean>;
    /**
     * @desc Get the checked state of the sets-is-investment checkbox in the create/edit rule form
     * @returns {Promise<boolean>} True if the checkbox is checked
     */
    isSetsIsInvestmentCheckboxChecked(): Promise<boolean>;
    /**
     * @desc Get the checked state of a specific spending type checkbox in the create/edit rule form
     * @param {string} spendingTypeName - The name of the spending type
     * @returns {Promise<boolean>} True if the checkbox is checked
     */
    isSpendingTypeCheckboxChecked(spendingTypeName: string): Promise<boolean>;
    /**
     * @desc Count the total number of spending type checkboxes available in the create/edit rule form
     * @returns {Promise<number>} The count of spending type checkboxes
     */
    countSpendingTypeCheckboxes(): Promise<number>;
    /**
     * @desc Get the text content of the form error message displayed when create/edit rule form validation fails
     * @returns {Promise<string>} The error message text exactly as it appears
     * @throws {Error} When the form error text content is not accessible
     */
    getFormErrorText(): Promise<string>;
}
