/**
 * Page Object Model: Select
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class SelectPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_selectRoot;
    private readonly selector_selectTrigger;
    private readonly selector_selectValue;
    private readonly selector_triggerChevronIcon;
    private readonly selector_selectContent;
    private readonly selector_selectScrollUpButton;
    private readonly selector_selectScrollDownButton;
    private readonly selector_selectGroup;
    private readonly selector_selectLabel;
    private readonly selector_selectItem;
    private readonly selector_selectItemIndicator;
    private readonly selector_selectSeparator;
    private readonly selector_selectItemByValue;
    constructor(page: Page);
    /**
     * @desc Checks if the Select component is currently visible on the page
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the Select root element is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a SelectPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<SelectPOM>} A SelectPOM instance
     * @throws {Error} When the Select component is not visible
     */
    static getPOM(page: Page): Promise<SelectPOM>;
    /**
     * @desc Checks whether the trigger button is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the trigger is visible
     */
    isTriggerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks whether the dropdown content panel is currently visible (i.e., the dropdown is open)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the content panel is visible
     */
    isContentVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks whether a select group container is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if at least one group is visible
     */
    isGroupVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks whether a separator line is visible in the dropdown
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if at least one separator is visible
     */
    isSeparatorVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks whether the trigger button is enabled (not disabled)
     * @returns {Promise<boolean>} True if the trigger is enabled
     */
    isTriggerEnabled(): Promise<boolean>;
    /**
     * @desc Checks whether a specific select item is enabled (not disabled)
     * @param {string} value - The data-value of the item to check
     * @returns {Promise<boolean>} True if the item is enabled
     */
    isItemEnabledByValue(value: string): Promise<boolean>;
    /**
     * @desc Clicks the trigger button to open or close the dropdown panel
     * Expected outcome is that the dropdown will open if closed, or close if open
     */
    clickSelectTrigger(): Promise<void>;
    /**
     * @desc Clicks a specific select item by its value attribute to choose it as the selected value
     * Expected outcome is that the item will be selected and the dropdown will close
     * @param {string} value - The data-value of the item to click
     * @throws {Error} When the item with the given value is not found or not visible
     */
    clickSelectItemByValue(value: string): Promise<void>;
    /**
     * @desc Clicks the first visible select item in the dropdown
     * Expected outcome is that the item will be selected and the dropdown will close
     * @throws {Error} When no select items are visible
     */
    clickFirstSelectItem(): Promise<void>;
    /**
     * @desc Scrolls within the dropdown content panel to reveal hidden items
     * Expected outcome is that hidden items above or below become visible
     * @param {number} deltaY - Pixels to scroll (positive scrolls down, negative scrolls up)
     */
    scrollSelectContent(deltaY: number): Promise<void>;
    /**
     * @desc Gets the data-slot attribute of the root element to confirm the Select component is mounted
     * @returns {Promise<string>} The data-slot attribute value
     * @throws {Error} When the root element's data-slot attribute is not accessible
     */
    getSelectRootSlotAttribute(): Promise<string>;
    /**
     * @desc Gets the visible text content of the trigger button, which reflects the selected value or placeholder
     * @returns {Promise<string>} The trigger text content exactly as it appears
     * @throws {Error} When the trigger text content is not accessible
     */
    getTriggerText(): Promise<string>;
    /**
     * @desc Gets the data-disabled attribute to check whether the trigger is disabled
     * @returns {Promise<string | null>} The data-disabled attribute value, or null if not present
     */
    getTriggerDisabledAttribute(): Promise<string | null>;
    /**
     * @desc Gets the data-state attribute to determine whether the dropdown is currently open or closed
     * @returns {Promise<string>} The data-state attribute value ('open' or 'closed')
     * @throws {Error} When the data-state attribute is not accessible
     */
    getTriggerStateAttribute(): Promise<string>;
    /**
     * @desc Gets the data-size attribute to determine the trigger height variant ('default' or 'sm')
     * @returns {Promise<string>} The data-size attribute value
     * @throws {Error} When the data-size attribute is not accessible
     */
    getTriggerSizeAttribute(): Promise<string>;
    /**
     * @desc Gets the data-placeholder attribute to check whether the trigger is currently showing placeholder text
     * @returns {Promise<string | null>} The data-placeholder attribute value, or null if a value is selected
     */
    getTriggerPlaceholderAttribute(): Promise<string | null>;
    /**
     * @desc Gets the full inner HTML of the dropdown content panel
     * @returns {Promise<string>} The inner HTML of the content panel
     * @throws {Error} When the content panel is not accessible
     */
    getContentInnerHtml(): Promise<string>;
    /**
     * @desc Gets the data-side attribute to determine which side the dropdown is positioned on
     * @returns {Promise<string>} The data-side attribute value ('top', 'bottom', 'left', or 'right')
     * @throws {Error} When the data-side attribute is not accessible
     */
    getContentSideAttribute(): Promise<string>;
    /**
     * @desc Gets the data-state attribute of the content panel to determine open/closed animation state
     * @returns {Promise<string>} The data-state attribute value ('open' or 'closed')
     * @throws {Error} When the data-state attribute is not accessible
     */
    getContentStateAttribute(): Promise<string>;
    /**
     * @desc Counts the number of option groups rendered inside the dropdown
     * @returns {Promise<number>} The number of select groups
     */
    getGroupCount(): Promise<number>;
    /**
     * @desc Counts the number of group labels rendered in the dropdown
     * @returns {Promise<number>} The number of select labels
     */
    getLabelCount(): Promise<number>;
    /**
     * @desc Gets a list of all group label texts rendered in the dropdown
     * @returns {Promise<string[]>} Array of label text strings exactly as they appear
     * @throws {Error} When a label's text content is not accessible
     */
    getAllLabelTexts(): Promise<string[]>;
    /**
     * @desc Gets the text content of a group label at the given index
     * @param {number} index - Zero-based index of the label
     * @returns {Promise<string>} The label text exactly as it appears
     * @throws {Error} When the label text content is not accessible
     */
    getLabelTextAtIndex(index: number): Promise<string>;
    /**
     * @desc Gets the data-value attribute of a specific item to read its underlying value
     * @param {string} value - The data-value of the item to inspect
     * @returns {Promise<string>} The data-value attribute value
     * @throws {Error} When the data-value attribute is not accessible
     */
    getItemValueAttributeByValue(value: string): Promise<string>;
    /**
     * @desc Gets the data-disabled attribute of an item to check if it is disabled
     * @param {number} index - Zero-based index of the item
     * @returns {Promise<string | null>} The data-disabled attribute value, or null if not present
     */
    getItemDisabledAttributeAtIndex(index: number): Promise<string | null>;
    /**
     * @desc Gets the data-state attribute of an item to determine if it is currently selected
     * @param {number} index - Zero-based index of the item
     * @returns {Promise<string>} The data-state attribute value ('checked' or 'unchecked')
     * @throws {Error} When the data-state attribute is not accessible
     */
    getItemStateAttributeAtIndex(index: number): Promise<string>;
    /**
     * @desc Gets the data-highlighted attribute of an item to check if it is currently focused
     * @param {number} index - Zero-based index of the item
     * @returns {Promise<string | null>} The data-highlighted attribute value, or null if not highlighted
     */
    getItemHighlightedAttributeAtIndex(index: number): Promise<string | null>;
    /**
     * @desc Gets a list of all visible item text values in the dropdown
     * @returns {Promise<string[]>} Array of item text strings exactly as they appear
     * @throws {Error} When an item's text content is not accessible
     */
    getAllItemTexts(): Promise<string[]>;
    /**
     * @desc Counts the total number of selectable items in the dropdown
     * @returns {Promise<number>} The number of select items
     */
    getItemCount(): Promise<number>;
    /**
     * @desc Gets the visible text content of a select item at the given index
     * @param {number} index - Zero-based index of the item
     * @returns {Promise<string>} The item text exactly as it appears
     * @throws {Error} When the item text content is not accessible
     */
    getItemTextAtIndex(index: number): Promise<string>;
    /**
     * @desc Counts the number of separator elements rendered in the dropdown
     * @returns {Promise<number>} The number of separators
     */
    getSeparatorCount(): Promise<number>;
}
