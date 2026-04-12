/**
 * Page Object Model: ErrorDisplay
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ErrorDisplayPOM_StandardSelector_Page = '[data-testid="error-display-page"]';
const ErrorDisplayPOM_StandardSelector_Inline = '[data-testid="error-display-inline"]';

export class ErrorDisplayPOM {
  private readonly page: Page;

  // Selectors
  private readonly rootSelector_page: string;
  private readonly rootSelector_inline: string;

  // Page variant selectors
  private readonly selector_errorDisplayPage: string;
  private readonly selector_retryButton: string;
  private readonly selector_errorTitle: string;
  private readonly selector_recoveryOptionsContainer: string;
  private readonly selector_recoveryOptionBtn: (idx: number) => string;
  private readonly selector_technicalDetailsPage: string;
  private readonly selector_errorTimestamp: string;

  // Inline/modal variant selectors
  private readonly selector_errorDisplayInline: string;
  private readonly selector_retryButtonInline: string;
  private readonly selector_technicalDetailsInline: string;
  private readonly selector_errorMessage: string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors - Single source of truth
    // ======================================================================

    this.rootSelector_page = ErrorDisplayPOM_StandardSelector_Page;
    this.rootSelector_inline = ErrorDisplayPOM_StandardSelector_Inline;

    // Page variant selectors
    this.selector_errorDisplayPage = this.rootSelector_page;
    this.selector_retryButton = `${this.rootSelector_page} [data-testid="retry-button"]`;
    this.selector_errorTitle = `${this.rootSelector_page} [data-testid="error-title"]`;
    this.selector_recoveryOptionsContainer = `${this.rootSelector_page} .space-y-2`;
    this.selector_recoveryOptionBtn = (idx: number) =>
      `${this.rootSelector_page} [data-testid="recovery-option-${idx}"]`;
    this.selector_technicalDetailsPage = `${this.rootSelector_page} details`;
    this.selector_errorTimestamp = `${this.rootSelector_page} p.text-xs.text-gray-500`;

    // Inline/modal variant selectors
    this.selector_errorDisplayInline = this.rootSelector_inline;
    this.selector_retryButtonInline = `${this.rootSelector_inline} [data-testid="retry-button-inline"]`;
    this.selector_technicalDetailsInline = `${this.rootSelector_inline} details`;
    this.selector_errorMessage = `${this.rootSelector_inline} [data-testid="error-message"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if either the page or inline variant of ErrorDisplay is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if either variant is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const pageVariant = page.locator(ErrorDisplayPOM_StandardSelector_Page);
      const inlineVariant = page.locator(ErrorDisplayPOM_StandardSelector_Inline);
      const pageVisible = await pageVariant.isVisible();
      const inlineVisible = await inlineVariant.isVisible();
      return pageVisible || inlineVisible;
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns an ErrorDisplayPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<ErrorDisplayPOM>} ErrorDisplayPOM instance
   * @throws {Error} When neither the page nor inline variant of ErrorDisplay is visible
   */
  static async getPOM(page: Page): Promise<ErrorDisplayPOM> {
    const isVisible = await ErrorDisplayPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ErrorDisplayPOM: Cannot instantiate - ErrorDisplay component is not visible. ' +
          `Expected element [${ErrorDisplayPOM_StandardSelector_Page}] or ` +
          `[${ErrorDisplayPOM_StandardSelector_Inline}] to be visible.`
      );
    }

    return new ErrorDisplayPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the page variant of the ErrorDisplay is currently visible/rendered (i.e., variant === 'page')
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the page variant root wrapper is visible
   */
  async isErrorDisplayPageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_errorDisplayPage).isVisible({ timeout });
  }

  /**
   * @desc Check whether the inline/modal variant of the ErrorDisplay is currently visible/rendered (i.e., variant === 'inline' or 'modal')
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the inline/modal variant root wrapper is visible
   */
  async isErrorDisplayInlineVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_errorDisplayInline).isVisible({ timeout });
  }

  /**
   * @desc Check whether the retry button is visible in the page variant (depends on error.retryable and onRetry being provided)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the retry button is visible in the page variant
   */
  async isRetryButtonVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_retryButton).isVisible({ timeout });
  }

  /**
   * @desc Check whether the retry button in the page variant is enabled and interactable
   * @returns {Promise<boolean>} True if the retry button is enabled
   */
  async isRetryButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_retryButton).isEnabled();
  }

  /**
   * @desc Check whether the error title h1 is visible in the page variant
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the error title is visible
   */
  async isErrorTitleVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_errorTitle).isVisible({ timeout });
  }

  /**
   * @desc Check whether the recovery options container is visible (only rendered when error.recoveryOptions has one or more items)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the recovery options container is visible
   */
  async isRecoveryOptionsContainerVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_recoveryOptionsContainer).isVisible({ timeout });
  }

  /**
   * @desc Check whether the technical details <details> element is present/visible in the page variant (only rendered when error.technicalDetails is truthy)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the technical details section is visible in the page variant
   */
  async isTechnicalDetailsPageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_technicalDetailsPage).isVisible({ timeout });
  }

  /**
   * @desc Check whether the error timestamp paragraph is visible in the page variant
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the error timestamp is visible
   */
  async isErrorTimestampVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_errorTimestamp).isVisible({ timeout });
  }

  /**
   * @desc Check whether the retry button is visible in the inline/modal variant (depends on error.retryable and onRetry being provided)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the retry button is visible in the inline/modal variant
   */
  async isRetryButtonInlineVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_retryButtonInline).isVisible({ timeout });
  }

  /**
   * @desc Check whether the retry button in the inline/modal variant is enabled and interactable
   * @returns {Promise<boolean>} True if the inline retry button is enabled
   */
  async isRetryButtonInlineEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_retryButtonInline).isEnabled();
  }

  /**
   * @desc Check whether the technical details <details> element is present/visible in the inline/modal variant (only rendered when error.technicalDetails is truthy)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the technical details section is visible in the inline/modal variant
   */
  async isTechnicalDetailsInlineVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_technicalDetailsInline).isVisible({ timeout });
  }

  /**
   * @desc Check whether the error message paragraph is visible in the inline/modal variant
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the error message is visible
   */
  async isErrorMessageVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_errorMessage).isVisible({ timeout });
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Click the retry button in the page variant to trigger the onRetry callback
   * Expected outcome is that the onRetry callback will be invoked. Only rendered when error.retryable === true and onRetry prop is provided.
   * @throws {Error} When the retry button is not visible in the page variant
   */
  async clickRetryButton(): Promise<void> {
    const isVisible = await this.isRetryButtonVisible();
    if (!isVisible) {
      throw new Error(
        `ErrorDisplayPOM: Cannot click retry button - element is not visible. Selector: ${this.selector_retryButton}`
      );
    }
    await this.page.locator(this.selector_retryButton).click();
  }

  /**
   * @desc Click a specific recovery option button by index to trigger its configured action (retry, navigate, external, or custom)
   * Expected outcome is that the recovery action associated with the given index will be triggered.
   * @param {number} idx - Zero-based index of the recovery option button to click
   * @throws {Error} When the recovery option button at the given index is not visible
   */
  async clickRecoveryOptionBtn(idx: number): Promise<void> {
    const selector = this.selector_recoveryOptionBtn(idx);
    const isVisible = await this.page.locator(selector).isVisible();
    if (!isVisible) {
      throw new Error(
        `ErrorDisplayPOM: Cannot click recovery option button at index ${idx} - element is not visible. Selector: ${selector}`
      );
    }
    await this.page.locator(selector).click();
  }

  /**
   * @desc Click the <details> summary to expand or collapse the technical details section in the page variant
   * Expected outcome is that the technical details section will toggle its expanded/collapsed state.
   * @throws {Error} When the technical details element is not visible in the page variant
   */
  async clickTechnicalDetailsPage(): Promise<void> {
    const isVisible = await this.isTechnicalDetailsPageVisible();
    if (!isVisible) {
      throw new Error(
        `ErrorDisplayPOM: Cannot click technical details - element is not visible in page variant. Selector: ${this.selector_technicalDetailsPage}`
      );
    }
    await this.page.locator(this.selector_technicalDetailsPage).click();
  }

  /**
   * @desc Click the retry button in the inline/modal variant to trigger the onRetry callback
   * Expected outcome is that the onRetry callback will be invoked. Only rendered when error.retryable === true and onRetry prop is provided.
   * @throws {Error} When the inline retry button is not visible
   */
  async clickRetryButtonInline(): Promise<void> {
    const isVisible = await this.isRetryButtonInlineVisible();
    if (!isVisible) {
      throw new Error(
        `ErrorDisplayPOM: Cannot click inline retry button - element is not visible. Selector: ${this.selector_retryButtonInline}`
      );
    }
    await this.page.locator(this.selector_retryButtonInline).click();
  }

  /**
   * @desc Click the <details> summary to expand or collapse the technical details section in the inline/modal variant
   * Expected outcome is that the technical details section will toggle its expanded/collapsed state.
   * @throws {Error} When the technical details element is not visible in the inline/modal variant
   */
  async clickTechnicalDetailsInline(): Promise<void> {
    const isVisible = await this.isTechnicalDetailsInlineVisible();
    if (!isVisible) {
      throw new Error(
        `ErrorDisplayPOM: Cannot click technical details - element is not visible in inline/modal variant. Selector: ${this.selector_technicalDetailsInline}`
      );
    }
    await this.page.locator(this.selector_technicalDetailsInline).click();
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Get the CSS class list of the page variant root wrapper to inspect styling state
   * @returns {Promise<string>} The class attribute value of the page variant root element
   * @throws {Error} When the page variant root element class attribute is not accessible
   */
  async getErrorDisplayPageClassList(): Promise<string> {
    await this.page.locator(this.selector_errorDisplayPage).isVisible();
    const classList = await this.page.locator(this.selector_errorDisplayPage).getAttribute('class');
    if (classList === null) {
      throw new Error(
        `ErrorDisplayPOM: class attribute is null for page variant root element. Selector: ${this.selector_errorDisplayPage}`
      );
    }
    return classList;
  }

  /**
   * @desc Get the CSS class list of the inline/modal variant root wrapper to inspect styling state
   * @returns {Promise<string>} The class attribute value of the inline/modal variant root element
   * @throws {Error} When the inline/modal variant root element class attribute is not accessible
   */
  async getErrorDisplayInlineClassList(): Promise<string> {
    await this.page.locator(this.selector_errorDisplayInline).isVisible();
    const classList = await this.page.locator(this.selector_errorDisplayInline).getAttribute('class');
    if (classList === null) {
      throw new Error(
        `ErrorDisplayPOM: class attribute is null for inline/modal variant root element. Selector: ${this.selector_errorDisplayInline}`
      );
    }
    return classList;
  }

  /**
   * @desc Extract the label text of the retry button in the page variant (e.g., 'Try Again')
   * @returns {Promise<string>} The text content of the retry button exactly as it appears
   * @throws {Error} When the retry button text content is not accessible or null
   */
  async getRetryButtonText(): Promise<string> {
    await this.page.locator(this.selector_retryButton).isVisible();
    const text = await this.page.locator(this.selector_retryButton).textContent();
    if (text === null) {
      throw new Error(
        `ErrorDisplayPOM: Retry button text content is null. Selector: ${this.selector_retryButton}`
      );
    }
    return text;
  }

  /**
   * @desc Extract the error user message text displayed in the h1 element of the page variant
   * @returns {Promise<string>} The error title text exactly as it appears
   * @throws {Error} When the error title text content is not accessible or null
   */
  async getErrorTitleText(): Promise<string> {
    await this.page.locator(this.selector_errorTitle).isVisible();
    const text = await this.page.locator(this.selector_errorTitle).textContent();
    if (text === null) {
      throw new Error(
        `ErrorDisplayPOM: Error title text content is null. Selector: ${this.selector_errorTitle}`
      );
    }
    return text;
  }

  /**
   * @desc Extract the text content of a specific recovery option button by its zero-based index
   * @param {number} idx - Zero-based index of the recovery option button
   * @returns {Promise<string>} The text content of the recovery option button exactly as it appears
   * @throws {Error} When the recovery option button text content is not accessible or null
   */
  async getRecoveryOptionBtnText(idx: number): Promise<string> {
    const selector = this.selector_recoveryOptionBtn(idx);
    await this.page.locator(selector).isVisible();
    const text = await this.page.locator(selector).textContent();
    if (text === null) {
      throw new Error(
        `ErrorDisplayPOM: Recovery option button text content is null at index ${idx}. Selector: ${selector}`
      );
    }
    return text;
  }

  /**
   * @desc Count the number of recovery option buttons rendered inside the container
   * @returns {Promise<number>} The count of recovery option buttons
   */
  async getRecoveryOptionBtnCount(): Promise<number> {
    // Use a broad attribute-starts-with selector scoped to the page root
    const selector = `${this.rootSelector_page} [data-testid^="recovery-option-"]`;
    return await this.page.locator(selector).count();
  }

  /**
   * @desc Get a list of label texts for all rendered recovery option buttons
   * @returns {Promise<string[]>} Array of recovery option button label texts exactly as they appear
   */
  async getRecoveryOptionBtnList(): Promise<string[]> {
    const count = await this.getRecoveryOptionBtnCount();
    const labels: string[] = [];

    for (let idx = 0; idx < count; idx++) {
      const selector = this.selector_recoveryOptionBtn(idx);
      const text = await this.page.locator(selector).textContent();
      labels.push(text ?? '');
    }

    return labels;
  }

  /**
   * @desc Extract the inner HTML of the technical details section in the page variant, including the pre-formatted technical details text
   * @returns {Promise<string>} The inner HTML of the technical details element
   * @throws {Error} When the technical details element inner HTML is not accessible or null
   */
  async getTechnicalDetailsPageInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_technicalDetailsPage).isVisible();
    const html = await this.page.locator(this.selector_technicalDetailsPage).innerHTML();
    if (html === null) {
      throw new Error(
        `ErrorDisplayPOM: Technical details inner HTML is null in page variant. Selector: ${this.selector_technicalDetailsPage}`
      );
    }
    return html;
  }

  /**
   * @desc Get the 'open' attribute of the <details> element to determine if it is currently expanded in the page variant
   * @returns {Promise<string | null>} The value of the 'open' attribute, or null if not present (collapsed)
   * @throws {Error} When the technical details element is not accessible in the page variant
   */
  async getTechnicalDetailsPageOpenAttribute(): Promise<string | null> {
    await this.page.locator(this.selector_technicalDetailsPage).isVisible();
    return await this.page.locator(this.selector_technicalDetailsPage).getAttribute('open');
  }

  /**
   * @desc Extract the formatted timestamp text displayed at the bottom of the page variant (error.timestamp.toLocaleString())
   * @returns {Promise<string>} The error timestamp text exactly as it appears
   * @throws {Error} When the error timestamp text content is not accessible or null
   */
  async getErrorTimestampText(): Promise<string> {
    await this.page.locator(this.selector_errorTimestamp).isVisible();
    const text = await this.page.locator(this.selector_errorTimestamp).textContent();
    if (text === null) {
      throw new Error(
        `ErrorDisplayPOM: Error timestamp text content is null. Selector: ${this.selector_errorTimestamp}`
      );
    }
    return text;
  }

  /**
   * @desc Extract the label text of the retry button in the inline/modal variant (e.g., 'Try again')
   * @returns {Promise<string>} The text content of the inline retry button exactly as it appears
   * @throws {Error} When the inline retry button text content is not accessible or null
   */
  async getRetryButtonInlineText(): Promise<string> {
    await this.page.locator(this.selector_retryButtonInline).isVisible();
    const text = await this.page.locator(this.selector_retryButtonInline).textContent();
    if (text === null) {
      throw new Error(
        `ErrorDisplayPOM: Inline retry button text content is null. Selector: ${this.selector_retryButtonInline}`
      );
    }
    return text;
  }

  /**
   * @desc Get the 'open' attribute of the <details> element to determine if it is currently expanded in the inline/modal variant
   * @returns {Promise<string | null>} The value of the 'open' attribute, or null if not present (collapsed)
   * @throws {Error} When the technical details element is not accessible in the inline/modal variant
   */
  async getTechnicalDetailsInlineOpenAttribute(): Promise<string | null> {
    await this.page.locator(this.selector_technicalDetailsInline).isVisible();
    return await this.page.locator(this.selector_technicalDetailsInline).getAttribute('open');
  }

  /**
   * @desc Extract the inner HTML of the technical details section in the inline/modal variant, including the pre-formatted technical details text
   * @returns {Promise<string>} The inner HTML of the technical details element
   * @throws {Error} When the technical details element inner HTML is not accessible or null
   */
  async getTechnicalDetailsInlineInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_technicalDetailsInline).isVisible();
    const html = await this.page.locator(this.selector_technicalDetailsInline).innerHTML();
    if (html === null) {
      throw new Error(
        `ErrorDisplayPOM: Technical details inner HTML is null in inline/modal variant. Selector: ${this.selector_technicalDetailsInline}`
      );
    }
    return html;
  }

  /**
   * @desc Extract the error user message text displayed in the paragraph element of the inline/modal variant
   * @returns {Promise<string>} The error message text exactly as it appears
   * @throws {Error} When the error message text content is not accessible or null
   */
  async getErrorMessageText(): Promise<string> {
    await this.page.locator(this.selector_errorMessage).isVisible();
    const text = await this.page.locator(this.selector_errorMessage).textContent();
    if (text === null) {
      throw new Error(
        `ErrorDisplayPOM: Error message text content is null. Selector: ${this.selector_errorMessage}`
      );
    }
    return text;
  }
}