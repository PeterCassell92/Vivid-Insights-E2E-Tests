/**
 * Page Object Model: SidebarPanelCard
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class SidebarPanelCardPOM {
    private readonly page;
    private readonly testId;
    private readonly rootSelector;
    private readonly selector_deleteButton;
    private readonly selector_deleteButtonAria;
    private readonly selector_disabledOverlay;
    private readonly selector_cardMetadata;
    private readonly selector_cardDescription;
    private readonly selector_cardValue;
    private readonly selector_cardTitle;
    private readonly selector_badge;
    private readonly selector_allBadges;
    constructor(page: Page, testId: string);
    /**
     * @desc Checks if a SidebarPanelCard with the given testId is currently visible
     * @param page - Playwright Page instance
     * @param testId - The data-testid value of the card root element
     * @returns {Promise<boolean>} True if the card is visible
     */
    static isVisible(page: Page, testId: string): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a SidebarPanelCardPOM instance
     * @param page - Playwright Page instance
     * @param testId - The data-testid value of the card root element
     * @returns {Promise<SidebarPanelCardPOM>} A SidebarPanelCardPOM instance
     * @throws {Error} When the card is not visible
     */
    static getPOM(page: Page, testId: string): Promise<SidebarPanelCardPOM>;
    /**
     * @desc Check whether the card root is visible in the viewport
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the card root is visible
     */
    isCardVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the delete button is visible
     * Note: The delete button is opacity-0 by default and only becomes visible on group hover
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the delete button is visible
     */
    isDeleteButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the delete button is enabled and not disabled
     * @returns {Promise<boolean>} True if the delete button is enabled
     */
    isDeleteButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the semi-transparent disabled overlay is currently rendered and visible
     * Indicates the card is in a disabled state
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the disabled overlay is visible
     */
    isDisabledOverlayVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the metadata section is rendered
     * Only present when the metadata prop is provided
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the metadata section is visible
     */
    isCardMetadataVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the description paragraph is rendered
     * Only present when description is a non-empty string
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the description is visible
     */
    isCardDescriptionVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the card title heading is visible
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the card title is visible
     */
    isCardTitleVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether a specific badge is visible on the card
     * @param {string} badgeTestId - The data-testid of the badge span
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the badge is visible
     */
    isBadgeVisible(badgeTestId: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Double-clicks the card root to trigger the onDoubleClick callback
     * Expected outcome is that the onDoubleClick handler fires
     * Note: A double-click is required to fire the handler as the component uses onDoubleClick
     */
    doubleClickCard(): Promise<void>;
    /**
     * @desc Clicks the trash icon delete button to trigger the onDelete callback
     * Expected outcome is that the onDelete handler fires
     * Note: The delete button is only rendered when the onDelete prop is provided
     * @throws {Error} When the delete button is not visible or not interactable
     */
    clickDeleteButton(): Promise<void>;
    /**
     * @desc Scrolls within the card container if content overflows
     * Expected outcome is that the card content scrolls
     * @param {number} deltaX - Horizontal scroll delta in pixels
     * @param {number} deltaY - Vertical scroll delta in pixels
     */
    scrollCard(deltaX: number, deltaY: number): Promise<void>;
    /**
     * @desc Get the full inner HTML of the card to inspect all rendered child content at once
     * @returns {Promise<string>} The inner HTML of the card root element
     * @throws {Error} When the card root inner HTML is not accessible
     */
    getCardInnerHtml(): Promise<string>;
    /**
     * @desc Get the position and dimensions of the card container
     * @returns {Promise<{ x: number; y: number; width: number; height: number } | null>}
     *   The bounding box of the card, or null if not in the viewport
     */
    getCardBoundingBox(): Promise<{
        x: number;
        y: number;
        width: number;
        height: number;
    } | null>;
    /**
     * @desc Get the CSS class list of the card root to inspect disabled (opacity-50) or hover state classes
     * @returns {Promise<string>} The full class attribute value of the card root
     * @throws {Error} When the class attribute is not accessible
     */
    getCardClassList(): Promise<string>;
    /**
     * @desc Get the aria-label attribute value of the delete button to confirm accessibility labelling
     * @returns {Promise<string>} The aria-label attribute value
     * @throws {Error} When the aria-label attribute is not accessible
     */
    getDeleteButtonAriaLabel(): Promise<string>;
    /**
     * @desc Get the CSS class list of the disabled overlay to verify opacity and background color classes
     * @returns {Promise<string>} The full class attribute value of the disabled overlay
     * @throws {Error} When the disabled overlay class attribute is not accessible
     */
    getDisabledOverlayClassList(): Promise<string>;
    /**
     * @desc Get the visible text content of the metadata section
     * @returns {Promise<string>} The text content exactly as it appears in the UI
     * @throws {Error} When the metadata text content is not accessible
     */
    getCardMetadataText(): Promise<string>;
    /**
     * @desc Get the inner HTML of the metadata wrapper to read arbitrary ReactNode metadata content
     * such as date ranges or frequency info
     * @returns {Promise<string>} The inner HTML of the metadata section
     * @throws {Error} When the metadata inner HTML is not accessible
     */
    getCardMetadataInnerHtml(): Promise<string>;
    /**
     * @desc Get the visible description text rendered in the card
     * @returns {Promise<string>} The description text exactly as it appears in the UI
     * @throws {Error} When the description text content is not accessible
     */
    getCardDescriptionText(): Promise<string>;
    /**
     * @desc Get the CSS class list of the value element to determine valueType via color class
     * text-red-700 = EXPENSE, text-green-600 = INCOMING
     * @returns {Promise<string>} The full class attribute value of the card value element
     * @throws {Error} When the card value class attribute is not accessible
     */
    getCardValueClassList(): Promise<string>;
    /**
     * @desc Get the formatted currency value string including the +/- prefix
     * e.g. '-£12.50' or '+$200.00'
     * @returns {Promise<string>} The value text exactly as it appears in the UI
     * @throws {Error} When the card value text content is not accessible
     */
    getCardValueText(): Promise<string>;
    /**
     * @desc Get the visible title text of the card
     * @returns {Promise<string>} The title text exactly as it appears in the UI
     * @throws {Error} When the card title text content is not accessible
     */
    getCardTitleText(): Promise<string>;
    /**
     * @desc Count the total number of badge elements rendered within the card
     * @returns {Promise<number>} The count of badge span elements
     */
    getBadgeCount(): Promise<number>;
    /**
     * @desc Get the CSS class list of a badge to verify its color/style classes
     * e.g. bg-green-100 text-green-800
     * @param {string} badgeTestId - The data-testid of the badge span
     * @returns {Promise<string>} The full class attribute value of the badge
     * @throws {Error} When the badge class attribute is not accessible
     */
    getBadgeClassList(badgeTestId: string): Promise<string>;
    /**
     * @desc Get the text content of a specific badge pill by its testId
     * @param {string} badgeTestId - The data-testid of the badge span
     * @returns {Promise<string>} The badge text exactly as it appears in the UI
     * @throws {Error} When the badge text content is not accessible
     */
    getBadgeText(badgeTestId: string): Promise<string>;
    /**
     * @desc Get a list of all badge text values rendered on the card
     * @returns {Promise<string[]>} Array of badge text values exactly as they appear in the UI
     */
    getAllBadgeTexts(): Promise<string[]>;
}
