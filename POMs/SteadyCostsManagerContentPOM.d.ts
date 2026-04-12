/**
 * Page Object Model: SteadyCostsManagerContent
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
import { ConfirmationModalPOM } from './ConfirmationModalPOM';
export declare class SteadyCostsManagerContentPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_noSteadyCostsMessage;
    private readonly selector_steadyCostsManagerContainer;
    private readonly selector_steadyCostsTotalContainer;
    private readonly selector_steadyCostCardAll;
    private readonly selector_steadyCostCardByName;
    private readonly selector_adjustMinusByName;
    private readonly selector_adjustPlusByName;
    private readonly selector_adjustInputByName;
    private readonly selector_adjustApplyByName;
    private readonly selector_adjustResetByName;
    constructor(page: Page);
    /**
     * @desc Checks if the SteadyCostsManagerContent panel is currently visible.
     * Either the manager container or the empty-state message must be visible.
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the panel is visible in either state
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a POM instance.
     * @param page - Playwright Page instance
     * @returns {Promise<SteadyCostsManagerContentPOM>} POM instance
     * @throws {Error} When neither the manager container nor the empty-state message is visible
     */
    static getPOM(page: Page): Promise<SteadyCostsManagerContentPOM>;
    /**
     * @desc Whether or not the empty-state message is visible (i.e. no steady costs exist for the month)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the empty-state message is visible
     */
    isNoSteadyCostsMessageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the steady-costs manager container is visible (i.e. steady cost events exist)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the manager container is visible
     */
    isSteadyCostsManagerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not the monthly total summary footer row is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the total container is visible
     */
    isSteadyCostsTotalVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Whether or not a specific steady-cost card is visible by rule name
     * @param {string} name - The rule name used in the card's data-testid
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the card is visible
     */
    isSteadyCostCardVisible(name: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Scrolls within the empty-state container
     * Expected outcome is that the empty-state view scrolls if content overflows
     * @param {number} deltaY - Pixels to scroll vertically
     */
    scrollNoSteadyCostsMessage(deltaY: number): Promise<void>;
    /**
     * @desc Scrolls within the main steady-costs manager container
     * Expected outcome is that the manager list scrolls
     * @param {number} deltaY - Pixels to scroll vertically
     */
    scrollSteadyCostsManager(deltaY: number): Promise<void>;
    /**
     * @desc Clicks on a specific steady-cost card identified by rule name
     * Expected outcome is that the card receives focus or triggers any associated interaction
     * @param {string} name - The rule name used in the card's data-testid
     */
    clickSteadyCostCard(name: string): Promise<void>;
    /**
     * @desc Clicks the -5 stepper button for a specific steady-cost card
     * Expected outcome is that the adjustment input value decreases by 5
     * @param {string} name - The rule name used in the button's data-testid
     */
    clickAdjustMinusButton(name: string): Promise<void>;
    /**
     * @desc Clicks the +5 stepper button for a specific steady-cost card
     * Expected outcome is that the adjustment input value increases by 5
     * @param {string} name - The rule name used in the button's data-testid
     */
    clickAdjustPlusButton(name: string): Promise<void>;
    /**
     * @desc Fills the percentage adjustment input for a specific steady-cost card
     * Expected outcome is that the input field contains the provided value
     * @param {string} name - The rule name used in the input's data-testid
     * @param {string} value - The percentage value to enter
     */
    fillAdjustInput(name: string, value: string): Promise<void>;
    /**
     * @desc Clicks the Apply button for a specific steady-cost card
     * Expected outcome is that the percentage adjustment is submitted to the API
     * @param {string} name - The rule name used in the button's data-testid
     */
    clickAdjustApplyButton(name: string): Promise<void>;
    /**
     * @desc Clicks the Reset button for a specific steady-cost card
     * Expected outcome is that the steady-cost values are reset to their base values
     * @param {string} name - The rule name used in the button's data-testid
     */
    clickAdjustResetButton(name: string): Promise<void>;
    /**
     * @desc Gets the text content of the empty-state message
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the empty-state message content is null or not accessible
     */
    getNoSteadyCostsMessageText(): Promise<string>;
    /**
     * @desc Gets the full inner HTML of the steady-costs manager container
     * @returns {Promise<string>} The inner HTML of the manager container
     * @throws {Error} When the manager container is not accessible
     */
    getSteadyCostsManagerInnerHtml(): Promise<string>;
    /**
     * @desc Gets the CSS class list of the total value span to determine if it is positive (green) or negative (red)
     * @returns {Promise<string>} The class attribute string of the total container
     * @throws {Error} When the total container class attribute is not accessible
     */
    getSteadyCostsTotalClassList(): Promise<string>;
    /**
     * @desc Gets the text content of the monthly total summary row (label and formatted currency value)
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the total container text content is null or not accessible
     */
    getSteadyCostsTotalText(): Promise<string>;
    /**
     * @desc Counts the total number of steady-cost cards rendered in the manager
     * @returns {Promise<number>} The number of steady-cost cards currently rendered
     */
    getSteadyCostCardCount(): Promise<number>;
    /**
     * @desc Gets the inner HTML of a specific steady-cost card by rule name
     * @param {string} name - The rule name used in the card's data-testid
     * @returns {Promise<string>} The inner HTML of the specified card
     * @throws {Error} When the specified card is not accessible
     */
    getSteadyCostCardInnerHtml(name: string): Promise<string>;
    /**
     * @desc Gets all visible text content from a specific steady-cost card (name, type badge, per-occurrence value, occurrences, monthly total, category)
     * @param {string} name - The rule name used in the card's data-testid
     * @returns {Promise<string>} The full text content of the card exactly as it appears
     * @throws {Error} When the card text content is null or not accessible
     */
    getSteadyCostCardText(name: string): Promise<string>;
    /**
     * @desc Gets a list of all steady-cost card names rendered in the manager
     * @returns {Promise<string[]>} Array of card name strings extracted from data-testid attributes
     * @throws {Error} When card data-testid attributes cannot be read
     */
    getSteadyCostCardNames(): Promise<string[]>;
    /**
     * @desc Gets the current value of the percentage adjustment input for a specific card
     * @param {string} name - The rule name used in the input's data-testid
     * @returns {Promise<string>} The current input value exactly as it appears
     * @throws {Error} When the input value attribute is not accessible
     */
    getAdjustInputValue(name: string): Promise<string>;
    /**
     * @desc Gets the ConfirmationModal POM instance when it is visible
     * @param {number} [timeout=2000] - Timeout in milliseconds to wait for visibility
     * @returns {Promise<ConfirmationModalPOM>} ConfirmationModal POM instance
     * @throws {Error} When the ConfirmationModal is not visible within the timeout
     */
    getConfirmationModalPOM(timeout?: number): Promise<ConfirmationModalPOM>;
}
