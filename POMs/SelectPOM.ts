/**
 * Page Object Model: Select
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const SelectPOM_StandardSelector = '[data-slot="select"]';

export class SelectPOM {
  private readonly page: Page;

  // === SELECTOR PROPERTIES ===

  private readonly rootSelector: string;

  // selectRoot
  private readonly selector_selectRoot: string;

  // selectTrigger
  private readonly selector_selectTrigger: string;
  private readonly selector_selectValue: string;
  private readonly selector_triggerChevronIcon: string;

  // selectContent
  private readonly selector_selectContent: string;
  private readonly selector_selectScrollUpButton: string;
  private readonly selector_selectScrollDownButton: string;

  // selectGroup
  private readonly selector_selectGroup: string;

  // selectLabel
  private readonly selector_selectLabel: string;

  // selectItem
  private readonly selector_selectItem: string;
  private readonly selector_selectItemIndicator: string;

  // selectSeparator
  private readonly selector_selectSeparator: string;

  // Dynamic selectors
  private readonly selector_selectItemByValue: (value: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = SelectPOM_StandardSelector;

    // selectRoot
    this.selector_selectRoot = this.rootSelector;

    // selectTrigger
    this.selector_selectTrigger = `${this.rootSelector} [data-slot="select-trigger"]`;
    this.selector_selectValue = `${this.rootSelector} [data-slot="select-value"]`;
    this.selector_triggerChevronIcon = `${this.rootSelector} [data-slot="select-trigger"] svg.lucide-chevron-down`;

    // selectContent (rendered in a portal — scoped to document body)
    this.selector_selectContent = '[data-slot="select-content"]';
    this.selector_selectScrollUpButton = '[data-slot="select-scroll-up-button"]';
    this.selector_selectScrollDownButton = '[data-slot="select-scroll-down-button"]';

    // selectGroup
    this.selector_selectGroup = '[data-slot="select-group"]';

    // selectLabel
    this.selector_selectLabel = '[data-slot="select-label"]';

    // selectItem
    this.selector_selectItem = '[data-slot="select-item"]';
    this.selector_selectItemIndicator = '[data-slot="select-item-indicator"]';

    // selectSeparator
    this.selector_selectSeparator = '[data-slot="select-separator"]';

    // Dynamic selectors
    this.selector_selectItemByValue = (value: string) =>
      `[data-slot="select-item"][data-value="${value}"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the Select component is currently visible on the page
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the Select root element is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const selectRoot = page.locator(SelectPOM_StandardSelector);
      return await selectRoot.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a SelectPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<SelectPOM>} A SelectPOM instance
   * @throws {Error} When the Select component is not visible
   */
  static async getPOM(page: Page): Promise<SelectPOM> {
    const isVisible = await SelectPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'SelectPOM: Cannot instantiate — Select component is not visible. ' +
          `Expected element [${SelectPOM_StandardSelector}] to be visible.`
      );
    }

    return new SelectPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Checks whether the trigger button is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the trigger is visible
   */
  async isTriggerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_selectTrigger).isVisible({ timeout });
  }

  /**
   * @desc Checks whether the dropdown content panel is currently visible (i.e., the dropdown is open)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the content panel is visible
   */
  async isContentVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_selectContent).isVisible({ timeout });
  }

  /**
   * @desc Checks whether a select group container is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if at least one group is visible
   */
  async isGroupVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_selectGroup).first().isVisible({ timeout });
  }

  /**
   * @desc Checks whether a separator line is visible in the dropdown
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if at least one separator is visible
   */
  async isSeparatorVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_selectSeparator).first().isVisible({ timeout });
  }

  /**
   * @desc Checks whether the trigger button is enabled (not disabled)
   * @returns {Promise<boolean>} True if the trigger is enabled
   */
  async isTriggerEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_selectTrigger).isEnabled();
  }

  /**
   * @desc Checks whether a specific select item is enabled (not disabled)
   * @param {string} value - The data-value of the item to check
   * @returns {Promise<boolean>} True if the item is enabled
   */
  async isItemEnabledByValue(value: string): Promise<boolean> {
    return await this.page.locator(this.selector_selectItemByValue(value)).isEnabled();
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the trigger button to open or close the dropdown panel
   * Expected outcome is that the dropdown will open if closed, or close if open
   */
  async clickSelectTrigger(): Promise<void> {
    await this.page.locator(this.selector_selectTrigger).click();
  }

  /**
   * @desc Clicks a specific select item by its value attribute to choose it as the selected value
   * Expected outcome is that the item will be selected and the dropdown will close
   * @param {string} value - The data-value of the item to click
   * @throws {Error} When the item with the given value is not found or not visible
   */
  async clickSelectItemByValue(value: string): Promise<void> {
    const selector = this.selector_selectItemByValue(value);
    const isVisible = await this.page.locator(selector).isVisible();

    if (!isVisible) {
      throw new Error(
        `SelectPOM: Cannot click item — item with value "${value}" is not visible. ` +
          `Selector: ${selector}`
      );
    }

    await this.page.locator(selector).click();
  }

  /**
   * @desc Clicks the first visible select item in the dropdown
   * Expected outcome is that the item will be selected and the dropdown will close
   * @throws {Error} When no select items are visible
   */
  async clickFirstSelectItem(): Promise<void> {
    const firstItem = this.page.locator(this.selector_selectItem).first();
    const isVisible = await firstItem.isVisible();

    if (!isVisible) {
      throw new Error(
        `SelectPOM: Cannot click first item — no select items are visible. ` +
          `Selector: ${this.selector_selectItem}`
      );
    }

    await firstItem.click();
  }

  /**
   * @desc Scrolls within the dropdown content panel to reveal hidden items
   * Expected outcome is that hidden items above or below become visible
   * @param {number} deltaY - Pixels to scroll (positive scrolls down, negative scrolls up)
   */
  async scrollSelectContent(deltaY: number): Promise<void> {
    await this.page.locator(this.selector_selectContent).hover();
    await this.page.mouse.wheel(0, deltaY);
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the data-slot attribute of the root element to confirm the Select component is mounted
   * @returns {Promise<string>} The data-slot attribute value
   * @throws {Error} When the root element's data-slot attribute is not accessible
   */
  async getSelectRootSlotAttribute(): Promise<string> {
    await this.page.locator(this.selector_selectRoot).isVisible();
    const value = await this.page.locator(this.selector_selectRoot).getAttribute('data-slot');

    if (value === null) {
      throw new Error(
        `SelectPOM: data-slot attribute is null on select root. Selector: ${this.selector_selectRoot}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the visible text content of the trigger button, which reflects the selected value or placeholder
   * @returns {Promise<string>} The trigger text content exactly as it appears
   * @throws {Error} When the trigger text content is not accessible
   */
  async getTriggerText(): Promise<string> {
    await this.page.locator(this.selector_selectTrigger).isVisible();
    const text = await this.page.locator(this.selector_selectTrigger).textContent();

    if (text === null) {
      throw new Error(
        `SelectPOM: Trigger text content is null. Selector: ${this.selector_selectTrigger}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the data-disabled attribute to check whether the trigger is disabled
   * @returns {Promise<string | null>} The data-disabled attribute value, or null if not present
   */
  async getTriggerDisabledAttribute(): Promise<string | null> {
    return await this.page.locator(this.selector_selectTrigger).getAttribute('data-disabled');
  }

  /**
   * @desc Gets the data-state attribute to determine whether the dropdown is currently open or closed
   * @returns {Promise<string>} The data-state attribute value ('open' or 'closed')
   * @throws {Error} When the data-state attribute is not accessible
   */
  async getTriggerStateAttribute(): Promise<string> {
    const value = await this.page.locator(this.selector_selectTrigger).getAttribute('data-state');

    if (value === null) {
      throw new Error(
        `SelectPOM: data-state attribute is null on trigger. Selector: ${this.selector_selectTrigger}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-size attribute to determine the trigger height variant ('default' or 'sm')
   * @returns {Promise<string>} The data-size attribute value
   * @throws {Error} When the data-size attribute is not accessible
   */
  async getTriggerSizeAttribute(): Promise<string> {
    const value = await this.page.locator(this.selector_selectTrigger).getAttribute('data-size');

    if (value === null) {
      throw new Error(
        `SelectPOM: data-size attribute is null on trigger. Selector: ${this.selector_selectTrigger}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-placeholder attribute to check whether the trigger is currently showing placeholder text
   * @returns {Promise<string | null>} The data-placeholder attribute value, or null if a value is selected
   */
  async getTriggerPlaceholderAttribute(): Promise<string | null> {
    return await this.page.locator(this.selector_selectTrigger).getAttribute('data-placeholder');
  }

  /**
   * @desc Gets the full inner HTML of the dropdown content panel
   * @returns {Promise<string>} The inner HTML of the content panel
   * @throws {Error} When the content panel is not accessible
   */
  async getContentInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_selectContent).isVisible();
    const html = await this.page.locator(this.selector_selectContent).innerHTML();

    if (html === null) {
      throw new Error(
        `SelectPOM: Content inner HTML is null. Selector: ${this.selector_selectContent}`
      );
    }

    return html;
  }

  /**
   * @desc Gets the data-side attribute to determine which side the dropdown is positioned on
   * @returns {Promise<string>} The data-side attribute value ('top', 'bottom', 'left', or 'right')
   * @throws {Error} When the data-side attribute is not accessible
   */
  async getContentSideAttribute(): Promise<string> {
    const value = await this.page.locator(this.selector_selectContent).getAttribute('data-side');

    if (value === null) {
      throw new Error(
        `SelectPOM: data-side attribute is null on content panel. Selector: ${this.selector_selectContent}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-state attribute of the content panel to determine open/closed animation state
   * @returns {Promise<string>} The data-state attribute value ('open' or 'closed')
   * @throws {Error} When the data-state attribute is not accessible
   */
  async getContentStateAttribute(): Promise<string> {
    const value = await this.page.locator(this.selector_selectContent).getAttribute('data-state');

    if (value === null) {
      throw new Error(
        `SelectPOM: data-state attribute is null on content panel. Selector: ${this.selector_selectContent}`
      );
    }

    return value;
  }

  /**
   * @desc Counts the number of option groups rendered inside the dropdown
   * @returns {Promise<number>} The number of select groups
   */
  async getGroupCount(): Promise<number> {
    return await this.page.locator(this.selector_selectGroup).count();
  }

  /**
   * @desc Counts the number of group labels rendered in the dropdown
   * @returns {Promise<number>} The number of select labels
   */
  async getLabelCount(): Promise<number> {
    return await this.page.locator(this.selector_selectLabel).count();
  }

  /**
   * @desc Gets a list of all group label texts rendered in the dropdown
   * @returns {Promise<string[]>} Array of label text strings exactly as they appear
   * @throws {Error} When a label's text content is not accessible
   */
  async getAllLabelTexts(): Promise<string[]> {
    const labels = this.page.locator(this.selector_selectLabel);
    const count = await labels.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await labels.nth(i).textContent();

      if (text === null) {
        throw new Error(
          `SelectPOM: Label text content is null at index ${i}. Selector: ${this.selector_selectLabel}`
        );
      }

      texts.push(text);
    }

    return texts;
  }

  /**
   * @desc Gets the text content of a group label at the given index
   * @param {number} index - Zero-based index of the label
   * @returns {Promise<string>} The label text exactly as it appears
   * @throws {Error} When the label text content is not accessible
   */
  async getLabelTextAtIndex(index: number): Promise<string> {
    const text = await this.page.locator(this.selector_selectLabel).nth(index).textContent();

    if (text === null) {
      throw new Error(
        `SelectPOM: Label text content is null at index ${index}. Selector: ${this.selector_selectLabel}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the data-value attribute of a specific item to read its underlying value
   * @param {string} value - The data-value of the item to inspect
   * @returns {Promise<string>} The data-value attribute value
   * @throws {Error} When the data-value attribute is not accessible
   */
  async getItemValueAttributeByValue(value: string): Promise<string> {
    const selector = this.selector_selectItemByValue(value);
    const attr = await this.page.locator(selector).getAttribute('data-value');

    if (attr === null) {
      throw new Error(
        `SelectPOM: data-value attribute is null for item with value "${value}". Selector: ${selector}`
      );
    }

    return attr;
  }

  /**
   * @desc Gets the data-disabled attribute of an item to check if it is disabled
   * @param {number} index - Zero-based index of the item
   * @returns {Promise<string | null>} The data-disabled attribute value, or null if not present
   */
  async getItemDisabledAttributeAtIndex(index: number): Promise<string | null> {
    return await this.page.locator(this.selector_selectItem).nth(index).getAttribute('data-disabled');
  }

  /**
   * @desc Gets the data-state attribute of an item to determine if it is currently selected
   * @param {number} index - Zero-based index of the item
   * @returns {Promise<string>} The data-state attribute value ('checked' or 'unchecked')
   * @throws {Error} When the data-state attribute is not accessible
   */
  async getItemStateAttributeAtIndex(index: number): Promise<string> {
    const value = await this.page
      .locator(this.selector_selectItem)
      .nth(index)
      .getAttribute('data-state');

    if (value === null) {
      throw new Error(
        `SelectPOM: data-state attribute is null for item at index ${index}. Selector: ${this.selector_selectItem}`
      );
    }

    return value;
  }

  /**
   * @desc Gets the data-highlighted attribute of an item to check if it is currently focused
   * @param {number} index - Zero-based index of the item
   * @returns {Promise<string | null>} The data-highlighted attribute value, or null if not highlighted
   */
  async getItemHighlightedAttributeAtIndex(index: number): Promise<string | null> {
    return await this.page
      .locator(this.selector_selectItem)
      .nth(index)
      .getAttribute('data-highlighted');
  }

  /**
   * @desc Gets a list of all visible item text values in the dropdown
   * @returns {Promise<string[]>} Array of item text strings exactly as they appear
   * @throws {Error} When an item's text content is not accessible
   */
  async getAllItemTexts(): Promise<string[]> {
    const items = this.page.locator(this.selector_selectItem);
    const count = await items.count();
    const texts: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await items.nth(i).textContent();

      if (text === null) {
        throw new Error(
          `SelectPOM: Item text content is null at index ${i}. Selector: ${this.selector_selectItem}`
        );
      }

      texts.push(text);
    }

    return texts;
  }

  /**
   * @desc Counts the total number of selectable items in the dropdown
   * @returns {Promise<number>} The number of select items
   */
  async getItemCount(): Promise<number> {
    return await this.page.locator(this.selector_selectItem).count();
  }

  /**
   * @desc Gets the visible text content of a select item at the given index
   * @param {number} index - Zero-based index of the item
   * @returns {Promise<string>} The item text exactly as it appears
   * @throws {Error} When the item text content is not accessible
   */
  async getItemTextAtIndex(index: number): Promise<string> {
    const text = await this.page.locator(this.selector_selectItem).nth(index).textContent();

    if (text === null) {
      throw new Error(
        `SelectPOM: Item text content is null at index ${index}. Selector: ${this.selector_selectItem}`
      );
    }

    return text;
  }

  /**
   * @desc Counts the number of separator elements rendered in the dropdown
   * @returns {Promise<number>} The number of separators
   */
  async getSeparatorCount(): Promise<number> {
    return await this.page.locator(this.selector_selectSeparator).count();
  }
}