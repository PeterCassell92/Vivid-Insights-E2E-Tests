/**
 * Page Object Model: SteadyCostsManagerContent
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';
import { ConfirmationModalPOM } from './ConfirmationModalPOM';

const SteadyCostsManagerContentPOM_StandardSelector =
  '[data-testid="steady-costs-manager"], [data-testid="no-steady-costs"]';

const SteadyCostsManagerContentPOM_ManagerSelector = '[data-testid="steady-costs-manager"]';

export class SteadyCostsManagerContentPOM {
  private readonly page: Page;

  // Selector properties
  private readonly rootSelector: string;
  private readonly selector_noSteadyCostsMessage: string;
  private readonly selector_steadyCostsManagerContainer: string;
  private readonly selector_steadyCostsTotalContainer: string;
  private readonly selector_steadyCostCardAll: string;
  private readonly selector_steadyCostCardByName: (name: string) => string;
  private readonly selector_adjustMinusByName: (name: string) => string;
  private readonly selector_adjustPlusByName: (name: string) => string;
  private readonly selector_adjustInputByName: (name: string) => string;
  private readonly selector_adjustApplyByName: (name: string) => string;
  private readonly selector_adjustResetByName: (name: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector = SteadyCostsManagerContentPOM_ManagerSelector;

    // Static selectors
    this.selector_noSteadyCostsMessage = '[data-testid="no-steady-costs"]';
    this.selector_steadyCostsManagerContainer = '[data-testid="steady-costs-manager"]';
    this.selector_steadyCostsTotalContainer = `${this.rootSelector} [data-testid="steady-costs-total"]`;
    this.selector_steadyCostCardAll = `${this.rootSelector} [data-testid^="steady-cost-card__"]`;

    // Dynamic selector functions
    this.selector_steadyCostCardByName = (name: string) =>
      `${this.rootSelector} [data-testid="steady-cost-card__${name}"]`;
    this.selector_adjustMinusByName = (name: string) =>
      `${this.rootSelector} [data-testid="adjust-minus__${name}"]`;
    this.selector_adjustPlusByName = (name: string) =>
      `${this.rootSelector} [data-testid="adjust-plus__${name}"]`;
    this.selector_adjustInputByName = (name: string) =>
      `${this.rootSelector} [data-testid="adjust-input__${name}"]`;
    this.selector_adjustApplyByName = (name: string) =>
      `${this.rootSelector} [data-testid="adjust-apply__${name}"]`;
    this.selector_adjustResetByName = (name: string) =>
      `${this.rootSelector} [data-testid="adjust-reset__${name}"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the SteadyCostsManagerContent panel is currently visible.
   * Either the manager container or the empty-state message must be visible.
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the panel is visible in either state
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const managerVisible = await page
        .locator('[data-testid="steady-costs-manager"]')
        .isVisible();
      if (managerVisible) return true;
      return await page.locator('[data-testid="no-steady-costs"]').isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a POM instance.
   * @param page - Playwright Page instance
   * @returns {Promise<SteadyCostsManagerContentPOM>} POM instance
   * @throws {Error} When neither the manager container nor the empty-state message is visible
   */
  static async getPOM(page: Page): Promise<SteadyCostsManagerContentPOM> {
    const isVisible = await SteadyCostsManagerContentPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'SteadyCostsManagerContentPOM: Cannot instantiate - panel is not visible. ' +
          'Expected either [data-testid="steady-costs-manager"] or ' +
          '[data-testid="no-steady-costs"] to be visible.'
      );
    }

    return new SteadyCostsManagerContentPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Whether or not the empty-state message is visible (i.e. no steady costs exist for the month)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the empty-state message is visible
   */
  async isNoSteadyCostsMessageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_noSteadyCostsMessage)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the steady-costs manager container is visible (i.e. steady cost events exist)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the manager container is visible
   */
  async isSteadyCostsManagerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_steadyCostsManagerContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not the monthly total summary footer row is visible
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the total container is visible
   */
  async isSteadyCostsTotalVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_steadyCostsTotalContainer)
      .isVisible({ timeout });
  }

  /**
   * @desc Whether or not a specific steady-cost card is visible by rule name
   * @param {string} name - The rule name used in the card's data-testid
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the card is visible
   */
  async isSteadyCostCardVisible(name: string, timeout: number = 1500): Promise<boolean> {
    return await this.page
      .locator(this.selector_steadyCostCardByName(name))
      .isVisible({ timeout });
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Scrolls within the empty-state container
   * Expected outcome is that the empty-state view scrolls if content overflows
   * @param {number} deltaY - Pixels to scroll vertically
   */
  async scrollNoSteadyCostsMessage(deltaY: number): Promise<void> {
    await this.page.locator(this.selector_noSteadyCostsMessage).hover();
    await this.page.mouse.wheel(0, deltaY);
  }

  /**
   * @desc Scrolls within the main steady-costs manager container
   * Expected outcome is that the manager list scrolls
   * @param {number} deltaY - Pixels to scroll vertically
   */
  async scrollSteadyCostsManager(deltaY: number): Promise<void> {
    await this.page.locator(this.selector_steadyCostsManagerContainer).hover();
    await this.page.mouse.wheel(0, deltaY);
  }

  /**
   * @desc Clicks on a specific steady-cost card identified by rule name
   * Expected outcome is that the card receives focus or triggers any associated interaction
   * @param {string} name - The rule name used in the card's data-testid
   */
  async clickSteadyCostCard(name: string): Promise<void> {
    await this.page.locator(this.selector_steadyCostCardByName(name)).click();
  }

  /**
   * @desc Clicks the -5 stepper button for a specific steady-cost card
   * Expected outcome is that the adjustment input value decreases by 5
   * @param {string} name - The rule name used in the button's data-testid
   */
  async clickAdjustMinusButton(name: string): Promise<void> {
    await this.page.locator(this.selector_adjustMinusByName(name)).click();
  }

  /**
   * @desc Clicks the +5 stepper button for a specific steady-cost card
   * Expected outcome is that the adjustment input value increases by 5
   * @param {string} name - The rule name used in the button's data-testid
   */
  async clickAdjustPlusButton(name: string): Promise<void> {
    await this.page.locator(this.selector_adjustPlusByName(name)).click();
  }

  /**
   * @desc Fills the percentage adjustment input for a specific steady-cost card
   * Expected outcome is that the input field contains the provided value
   * @param {string} name - The rule name used in the input's data-testid
   * @param {string} value - The percentage value to enter
   */
  async fillAdjustInput(name: string, value: string): Promise<void> {
    await this.page.locator(this.selector_adjustInputByName(name)).fill(value);
  }

  /**
   * @desc Clicks the Apply button for a specific steady-cost card
   * Expected outcome is that the percentage adjustment is submitted to the API
   * @param {string} name - The rule name used in the button's data-testid
   */
  async clickAdjustApplyButton(name: string): Promise<void> {
    await this.page.locator(this.selector_adjustApplyByName(name)).click();
  }

  /**
   * @desc Clicks the Reset button for a specific steady-cost card
   * Expected outcome is that the steady-cost values are reset to their base values
   * @param {string} name - The rule name used in the button's data-testid
   */
  async clickAdjustResetButton(name: string): Promise<void> {
    await this.page.locator(this.selector_adjustResetByName(name)).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the text content of the empty-state message
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the empty-state message content is null or not accessible
   */
  async getNoSteadyCostsMessageText(): Promise<string> {
    await this.page.isVisible(this.selector_noSteadyCostsMessage);
    const text = await this.page.textContent(this.selector_noSteadyCostsMessage);

    if (text === null) {
      throw new Error(
        `SteadyCostsManagerContentPOM: Empty-state message text content is null. ` +
          `Selector: ${this.selector_noSteadyCostsMessage}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the full inner HTML of the steady-costs manager container
   * @returns {Promise<string>} The inner HTML of the manager container
   * @throws {Error} When the manager container is not accessible
   */
  async getSteadyCostsManagerInnerHtml(): Promise<string> {
    await this.page.isVisible(this.selector_steadyCostsManagerContainer);
    const html = await this.page.innerHTML(this.selector_steadyCostsManagerContainer);
    return html;
  }

  /**
   * @desc Gets the CSS class list of the total value span to determine if it is positive (green) or negative (red)
   * @returns {Promise<string>} The class attribute string of the total container
   * @throws {Error} When the total container class attribute is not accessible
   */
  async getSteadyCostsTotalClassList(): Promise<string> {
    await this.page.isVisible(this.selector_steadyCostsTotalContainer);
    const classList = await this.page.getAttribute(
      this.selector_steadyCostsTotalContainer,
      'class'
    );

    if (classList === null) {
      throw new Error(
        `SteadyCostsManagerContentPOM: Total container class attribute is null. ` +
          `Selector: ${this.selector_steadyCostsTotalContainer}`
      );
    }

    return classList;
  }

  /**
   * @desc Gets the text content of the monthly total summary row (label and formatted currency value)
   * @returns {Promise<string>} The text content exactly as it appears in the UI
   * @throws {Error} When the total container text content is null or not accessible
   */
  async getSteadyCostsTotalText(): Promise<string> {
    await this.page.isVisible(this.selector_steadyCostsTotalContainer);
    const text = await this.page.textContent(this.selector_steadyCostsTotalContainer);

    if (text === null) {
      throw new Error(
        `SteadyCostsManagerContentPOM: Total container text content is null. ` +
          `Selector: ${this.selector_steadyCostsTotalContainer}`
      );
    }

    return text;
  }

  /**
   * @desc Counts the total number of steady-cost cards rendered in the manager
   * @returns {Promise<number>} The number of steady-cost cards currently rendered
   */
  async getSteadyCostCardCount(): Promise<number> {
    return await this.page.locator(this.selector_steadyCostCardAll).count();
  }

  /**
   * @desc Gets the inner HTML of a specific steady-cost card by rule name
   * @param {string} name - The rule name used in the card's data-testid
   * @returns {Promise<string>} The inner HTML of the specified card
   * @throws {Error} When the specified card is not accessible
   */
  async getSteadyCostCardInnerHtml(name: string): Promise<string> {
    const selector = this.selector_steadyCostCardByName(name);
    await this.page.isVisible(selector);
    return await this.page.innerHTML(selector);
  }

  /**
   * @desc Gets all visible text content from a specific steady-cost card (name, type badge, per-occurrence value, occurrences, monthly total, category)
   * @param {string} name - The rule name used in the card's data-testid
   * @returns {Promise<string>} The full text content of the card exactly as it appears
   * @throws {Error} When the card text content is null or not accessible
   */
  async getSteadyCostCardText(name: string): Promise<string> {
    const selector = this.selector_steadyCostCardByName(name);
    await this.page.isVisible(selector);
    const text = await this.page.textContent(selector);

    if (text === null) {
      throw new Error(
        `SteadyCostsManagerContentPOM: Card text content is null for card "${name}". ` +
          `Selector: ${selector}`
      );
    }

    return text;
  }

  /**
   * @desc Gets a list of all steady-cost card names rendered in the manager
   * @returns {Promise<string[]>} Array of card name strings extracted from data-testid attributes
   * @throws {Error} When card data-testid attributes cannot be read
   */
  async getSteadyCostCardNames(): Promise<string[]> {
    const cards = this.page.locator(this.selector_steadyCostCardAll);
    const count = await cards.count();
    const names: string[] = [];

    for (let i = 0; i < count; i++) {
      const testId = await cards.nth(i).getAttribute('data-testid');
      if (testId === null) {
        throw new Error(
          `SteadyCostsManagerContentPOM: Card at index ${i} has null data-testid attribute. ` +
            `Selector: ${this.selector_steadyCostCardAll}`
        );
      }
      // Strip the "steady-cost-card__" prefix to get the name
      const name = testId.replace(/^steady-cost-card__/, '');
      names.push(name);
    }

    return names;
  }

  /**
   * @desc Gets the current value of the percentage adjustment input for a specific card
   * @param {string} name - The rule name used in the input's data-testid
   * @returns {Promise<string>} The current input value exactly as it appears
   * @throws {Error} When the input value attribute is not accessible
   */
  async getAdjustInputValue(name: string): Promise<string> {
    const selector = this.selector_adjustInputByName(name);
    await this.page.isVisible(selector);
    const value = await this.page.inputValue(selector);
    return value;
  }

  // ========================================================================
  // CHILD POM METHODS
  // ========================================================================

  /**
   * @desc Gets the ConfirmationModal POM instance when it is visible
   * @param {number} [timeout=2000] - Timeout in milliseconds to wait for visibility
   * @returns {Promise<ConfirmationModalPOM>} ConfirmationModal POM instance
   * @throws {Error} When the ConfirmationModal is not visible within the timeout
   */
  async getConfirmationModalPOM(timeout: number = 2000): Promise<ConfirmationModalPOM> {
    if (await ConfirmationModalPOM.isVisible(this.page)) {
      return new ConfirmationModalPOM(this.page);
    }
    throw new Error(
      `SteadyCostsManagerContentPOM: ConfirmationModal is not visible within ${timeout}ms.`
    );
  }
}