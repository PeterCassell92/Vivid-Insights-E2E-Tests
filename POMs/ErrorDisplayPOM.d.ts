/**
 * Page Object Model: ErrorDisplay
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ErrorDisplayPOM {
    private readonly page;
    private readonly rootSelector_page;
    private readonly rootSelector_inline;
    private readonly selector_errorDisplayPage;
    private readonly selector_retryButton;
    private readonly selector_errorTitle;
    private readonly selector_recoveryOptionsContainer;
    private readonly selector_recoveryOptionBtn;
    private readonly selector_technicalDetailsPage;
    private readonly selector_errorTimestamp;
    private readonly selector_errorDisplayInline;
    private readonly selector_retryButtonInline;
    private readonly selector_technicalDetailsInline;
    private readonly selector_errorMessage;
    constructor(page: Page);
    /**
     * @desc Checks if either the page or inline variant of ErrorDisplay is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if either variant is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns an ErrorDisplayPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<ErrorDisplayPOM>} ErrorDisplayPOM instance
     * @throws {Error} When neither the page nor inline variant of ErrorDisplay is visible
     */
    static getPOM(page: Page): Promise<ErrorDisplayPOM>;
    /**
     * @desc Check whether the page variant of the ErrorDisplay is currently visible/rendered (i.e., variant === 'page')
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the page variant root wrapper is visible
     */
    isErrorDisplayPageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the inline/modal variant of the ErrorDisplay is currently visible/rendered (i.e., variant === 'inline' or 'modal')
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the inline/modal variant root wrapper is visible
     */
    isErrorDisplayInlineVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the retry button is visible in the page variant (depends on error.retryable and onRetry being provided)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the retry button is visible in the page variant
     */
    isRetryButtonVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the retry button in the page variant is enabled and interactable
     * @returns {Promise<boolean>} True if the retry button is enabled
     */
    isRetryButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the error title h1 is visible in the page variant
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the error title is visible
     */
    isErrorTitleVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the recovery options container is visible (only rendered when error.recoveryOptions has one or more items)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the recovery options container is visible
     */
    isRecoveryOptionsContainerVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the technical details <details> element is present/visible in the page variant (only rendered when error.technicalDetails is truthy)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the technical details section is visible in the page variant
     */
    isTechnicalDetailsPageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the error timestamp paragraph is visible in the page variant
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the error timestamp is visible
     */
    isErrorTimestampVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the retry button is visible in the inline/modal variant (depends on error.retryable and onRetry being provided)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the retry button is visible in the inline/modal variant
     */
    isRetryButtonInlineVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the retry button in the inline/modal variant is enabled and interactable
     * @returns {Promise<boolean>} True if the inline retry button is enabled
     */
    isRetryButtonInlineEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the technical details <details> element is present/visible in the inline/modal variant (only rendered when error.technicalDetails is truthy)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the technical details section is visible in the inline/modal variant
     */
    isTechnicalDetailsInlineVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the error message paragraph is visible in the inline/modal variant
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the error message is visible
     */
    isErrorMessageVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Click the retry button in the page variant to trigger the onRetry callback
     * Expected outcome is that the onRetry callback will be invoked. Only rendered when error.retryable === true and onRetry prop is provided.
     * @throws {Error} When the retry button is not visible in the page variant
     */
    clickRetryButton(): Promise<void>;
    /**
     * @desc Click a specific recovery option button by index to trigger its configured action (retry, navigate, external, or custom)
     * Expected outcome is that the recovery action associated with the given index will be triggered.
     * @param {number} idx - Zero-based index of the recovery option button to click
     * @throws {Error} When the recovery option button at the given index is not visible
     */
    clickRecoveryOptionBtn(idx: number): Promise<void>;
    /**
     * @desc Click the <details> summary to expand or collapse the technical details section in the page variant
     * Expected outcome is that the technical details section will toggle its expanded/collapsed state.
     * @throws {Error} When the technical details element is not visible in the page variant
     */
    clickTechnicalDetailsPage(): Promise<void>;
    /**
     * @desc Click the retry button in the inline/modal variant to trigger the onRetry callback
     * Expected outcome is that the onRetry callback will be invoked. Only rendered when error.retryable === true and onRetry prop is provided.
     * @throws {Error} When the inline retry button is not visible
     */
    clickRetryButtonInline(): Promise<void>;
    /**
     * @desc Click the <details> summary to expand or collapse the technical details section in the inline/modal variant
     * Expected outcome is that the technical details section will toggle its expanded/collapsed state.
     * @throws {Error} When the technical details element is not visible in the inline/modal variant
     */
    clickTechnicalDetailsInline(): Promise<void>;
    /**
     * @desc Get the CSS class list of the page variant root wrapper to inspect styling state
     * @returns {Promise<string>} The class attribute value of the page variant root element
     * @throws {Error} When the page variant root element class attribute is not accessible
     */
    getErrorDisplayPageClassList(): Promise<string>;
    /**
     * @desc Get the CSS class list of the inline/modal variant root wrapper to inspect styling state
     * @returns {Promise<string>} The class attribute value of the inline/modal variant root element
     * @throws {Error} When the inline/modal variant root element class attribute is not accessible
     */
    getErrorDisplayInlineClassList(): Promise<string>;
    /**
     * @desc Extract the label text of the retry button in the page variant (e.g., 'Try Again')
     * @returns {Promise<string>} The text content of the retry button exactly as it appears
     * @throws {Error} When the retry button text content is not accessible or null
     */
    getRetryButtonText(): Promise<string>;
    /**
     * @desc Extract the error user message text displayed in the h1 element of the page variant
     * @returns {Promise<string>} The error title text exactly as it appears
     * @throws {Error} When the error title text content is not accessible or null
     */
    getErrorTitleText(): Promise<string>;
    /**
     * @desc Extract the text content of a specific recovery option button by its zero-based index
     * @param {number} idx - Zero-based index of the recovery option button
     * @returns {Promise<string>} The text content of the recovery option button exactly as it appears
     * @throws {Error} When the recovery option button text content is not accessible or null
     */
    getRecoveryOptionBtnText(idx: number): Promise<string>;
    /**
     * @desc Count the number of recovery option buttons rendered inside the container
     * @returns {Promise<number>} The count of recovery option buttons
     */
    getRecoveryOptionBtnCount(): Promise<number>;
    /**
     * @desc Get a list of label texts for all rendered recovery option buttons
     * @returns {Promise<string[]>} Array of recovery option button label texts exactly as they appear
     */
    getRecoveryOptionBtnList(): Promise<string[]>;
    /**
     * @desc Extract the inner HTML of the technical details section in the page variant, including the pre-formatted technical details text
     * @returns {Promise<string>} The inner HTML of the technical details element
     * @throws {Error} When the technical details element inner HTML is not accessible or null
     */
    getTechnicalDetailsPageInnerHtml(): Promise<string>;
    /**
     * @desc Get the 'open' attribute of the <details> element to determine if it is currently expanded in the page variant
     * @returns {Promise<string | null>} The value of the 'open' attribute, or null if not present (collapsed)
     * @throws {Error} When the technical details element is not accessible in the page variant
     */
    getTechnicalDetailsPageOpenAttribute(): Promise<string | null>;
    /**
     * @desc Extract the formatted timestamp text displayed at the bottom of the page variant (error.timestamp.toLocaleString())
     * @returns {Promise<string>} The error timestamp text exactly as it appears
     * @throws {Error} When the error timestamp text content is not accessible or null
     */
    getErrorTimestampText(): Promise<string>;
    /**
     * @desc Extract the label text of the retry button in the inline/modal variant (e.g., 'Try again')
     * @returns {Promise<string>} The text content of the inline retry button exactly as it appears
     * @throws {Error} When the inline retry button text content is not accessible or null
     */
    getRetryButtonInlineText(): Promise<string>;
    /**
     * @desc Get the 'open' attribute of the <details> element to determine if it is currently expanded in the inline/modal variant
     * @returns {Promise<string | null>} The value of the 'open' attribute, or null if not present (collapsed)
     * @throws {Error} When the technical details element is not accessible in the inline/modal variant
     */
    getTechnicalDetailsInlineOpenAttribute(): Promise<string | null>;
    /**
     * @desc Extract the inner HTML of the technical details section in the inline/modal variant, including the pre-formatted technical details text
     * @returns {Promise<string>} The inner HTML of the technical details element
     * @throws {Error} When the technical details element inner HTML is not accessible or null
     */
    getTechnicalDetailsInlineInnerHtml(): Promise<string>;
    /**
     * @desc Extract the error user message text displayed in the paragraph element of the inline/modal variant
     * @returns {Promise<string>} The error message text exactly as it appears
     * @throws {Error} When the error message text content is not accessible or null
     */
    getErrorMessageText(): Promise<string>;
}
