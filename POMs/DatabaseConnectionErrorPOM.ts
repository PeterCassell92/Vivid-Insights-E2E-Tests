/**
 * Page Object Model: DatabaseConnectionError
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const DatabaseConnectionErrorPOM_StandardSelector = '[data-testid="database-connection-error"]';

export class DatabaseConnectionErrorPOM {
  private readonly page: Page;

  // ============================================================
  // Selectors
  // ============================================================

  private readonly rootSelector: string;

  // databaseConnectionErrorContainer
  private readonly selector_errorPageRoot: string;

  // errorHeader sub-section
  private readonly selector_errorHeaderTitle: string;

  // errorDescription sub-section
  private readonly selector_errorDescriptionText: string;

  // technicalDetailsDisclosure sub-section
  private readonly selector_technicalDetailsSummary: string;
  private readonly selector_technicalDetailsPreBlock: string;

  // diagnosticsSection sub-section
  private readonly selector_diagnosticsHeading: string;
  private readonly selector_diagnosticDockerRunning: string;
  private readonly selector_diagnosticDockerRunningSpinner: string;
  private readonly selector_diagnosticDockerRunningSuccessIcon: string;
  private readonly selector_diagnosticDockerRunningFailureIcon: string;
  private readonly selector_diagnosticPortAccessible: string;
  private readonly selector_diagnosticPortAccessibleSpinner: string;
  private readonly selector_diagnosticPortAccessibleSuccessIcon: string;
  private readonly selector_diagnosticPortAccessibleFailureIcon: string;
  private readonly selector_diagnosticItemRow: (labelSlug: string) => string;
  private readonly selector_allDiagnosticItemRows: string;

  // howToFixSection sub-section
  private readonly selector_howToFixHeading: string;
  private readonly selector_howToFixList: string;
  private readonly selector_readmeSetupLink: string;

  // actionButtonsRow sub-section
  private readonly selector_retryConnectionButton: string;
  private readonly selector_runDiagnosticsButton: string;

  constructor(page: Page) {
    this.page = page;

    // ============================================================
    // Selector Definitions
    // ============================================================

    this.rootSelector = DatabaseConnectionErrorPOM_StandardSelector;

    // databaseConnectionErrorContainer
    this.selector_errorPageRoot = this.rootSelector;

    // errorHeader
    this.selector_errorHeaderTitle = `${this.rootSelector} h1`;

    // errorDescription
    this.selector_errorDescriptionText = `${this.rootSelector} > div > p`;

    // technicalDetailsDisclosure
    this.selector_technicalDetailsSummary = `${this.rootSelector} details > summary`;
    this.selector_technicalDetailsPreBlock = `${this.rootSelector} details > pre`;

    // diagnosticsSection
    this.selector_diagnosticsHeading = `${this.rootSelector} h2`;
    this.selector_diagnosticDockerRunning = '[data-testid="diagnostic-database-container-running"]';
    this.selector_diagnosticDockerRunningSpinner = '[data-testid="diagnostic-database-container-running"] .animate-spin';
    this.selector_diagnosticDockerRunningSuccessIcon = '[data-testid="diagnostic-database-container-running"] svg.text-green-500';
    this.selector_diagnosticDockerRunningFailureIcon = '[data-testid="diagnostic-database-container-running"] svg.text-red-500';
    this.selector_diagnosticPortAccessible = '[data-testid="diagnostic-port-5434-accessible"]';
    this.selector_diagnosticPortAccessibleSpinner = '[data-testid="diagnostic-port-5434-accessible"] .animate-spin';
    this.selector_diagnosticPortAccessibleSuccessIcon = '[data-testid="diagnostic-port-5434-accessible"] svg.text-green-500';
    this.selector_diagnosticPortAccessibleFailureIcon = '[data-testid="diagnostic-port-5434-accessible"] svg.text-red-500';
    this.selector_diagnosticItemRow = (labelSlug: string) => `[data-testid="diagnostic-${labelSlug}"]`;
    this.selector_allDiagnosticItemRows = `${this.rootSelector} [data-testid^="diagnostic-"]`;

    // howToFixSection
    this.selector_howToFixHeading = `${this.rootSelector} h3`;
    this.selector_howToFixList = `${this.rootSelector} ol`;
    this.selector_readmeSetupLink = `${this.rootSelector} a[href*="database-setup-docker"]`;

    // actionButtonsRow
    this.selector_retryConnectionButton = '[data-testid="retry-connection-button"]';
    this.selector_runDiagnosticsButton = '[data-testid="run-diagnostics-button"]';
  }

  // ============================================================
  // Static Methods
  // ============================================================

  /**
   * @desc Checks if the DatabaseConnectionError full-page component is currently visible
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the error page root element is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      return await page.locator(DatabaseConnectionErrorPOM_StandardSelector).isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method that validates visibility and returns a DatabaseConnectionErrorPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<DatabaseConnectionErrorPOM>} A DatabaseConnectionErrorPOM instance
   * @throws {Error} When the database connection error page is not visible
   */
  static async getPOM(page: Page): Promise<DatabaseConnectionErrorPOM> {
    const isVisible = await DatabaseConnectionErrorPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'DatabaseConnectionErrorPOM: Cannot instantiate - database connection error page is not visible. ' +
        `Expected element [${DatabaseConnectionErrorPOM_StandardSelector}] to be visible.`
      );
    }

    return new DatabaseConnectionErrorPOM(page);
  }

  // ============================================================
  // Visibility and State Methods
  // ============================================================

  /**
   * @desc Check whether the full-page database connection error component is visible on screen
   * @returns {Promise<boolean>} True if the root error page container is visible
   */
  async isErrorPageVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_errorPageRoot).isVisible();
  }

  /**
   * @desc Check whether the 'Run Diagnostics Again' button is visible on the page
   * @returns {Promise<boolean>} True if the button is visible
   */
  async isRunDiagnosticsButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_runDiagnosticsButton).isVisible();
  }

  /**
   * @desc Check whether the conditionally rendered 'Retry Connection' button is visible
   * Only present when the onRetry prop is provided to the component
   * @returns {Promise<boolean>} True if the button is visible
   */
  async isRetryConnectionButtonVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_retryConnectionButton).isVisible();
  }

  /**
   * @desc Check whether the Docker Running diagnostic row is currently visible
   * @returns {Promise<boolean>} True if the row is visible
   */
  async isDiagnosticDockerRunningVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_diagnosticDockerRunning).isVisible();
  }

  /**
   * @desc Check whether the Port 5434 Accessible diagnostic row is currently visible
   * @returns {Promise<boolean>} True if the row is visible
   */
  async isDiagnosticPortAccessibleVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_diagnosticPortAccessible).isVisible();
  }

  /**
   * @desc Check whether the Docker Running spinner is visible (i.e., the check is still in progress)
   * @returns {Promise<boolean>} True if the spinner is visible
   */
  async isDiagnosticDockerRunningSpinnerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_diagnosticDockerRunningSpinner).isVisible();
  }

  /**
   * @desc Check whether the Port 5434 Accessible spinner is visible (i.e., the check is still in progress)
   * @returns {Promise<boolean>} True if the spinner is visible
   */
  async isDiagnosticPortAccessibleSpinnerVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_diagnosticPortAccessibleSpinner).isVisible();
  }

  /**
   * @desc Check whether the green success icon is visible for the Docker Running diagnostic row (check passed)
   * @returns {Promise<boolean>} True if the success icon is visible
   */
  async isDiagnosticDockerRunningSuccessIconVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_diagnosticDockerRunningSuccessIcon).isVisible();
  }

  /**
   * @desc Check whether the red failure icon is visible for the Docker Running diagnostic row (check failed)
   * @returns {Promise<boolean>} True if the failure icon is visible
   */
  async isDiagnosticDockerRunningFailureIconVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_diagnosticDockerRunningFailureIcon).isVisible();
  }

  /**
   * @desc Check whether the green success icon is visible for the Port 5434 Accessible diagnostic row (check passed)
   * @returns {Promise<boolean>} True if the success icon is visible
   */
  async isDiagnosticPortAccessibleSuccessIconVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_diagnosticPortAccessibleSuccessIcon).isVisible();
  }

  /**
   * @desc Check whether the red failure icon is visible for the Port 5434 Accessible diagnostic row (check failed)
   * @returns {Promise<boolean>} True if the failure icon is visible
   */
  async isDiagnosticPortAccessibleFailureIconVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_diagnosticPortAccessibleFailureIcon).isVisible();
  }

  /**
   * @desc Check whether the technical details disclosure section is present/visible
   * Only rendered when the technicalDetails prop is provided to the component
   * @returns {Promise<boolean>} True if the summary toggle is visible
   */
  async isTechnicalDetailsSummaryVisible(): Promise<boolean> {
    return await this.page.locator(this.selector_technicalDetailsSummary).isVisible();
  }

  /**
   * @desc Check whether the 'Retry Connection' button is enabled and not disabled
   * @returns {Promise<boolean>} True if the button is enabled
   */
  async isRetryConnectionButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_retryConnectionButton).isEnabled();
  }

  /**
   * @desc Check whether the 'Run Diagnostics Again' button is enabled and not disabled
   * @returns {Promise<boolean>} True if the button is enabled
   */
  async isRunDiagnosticsButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_runDiagnosticsButton).isEnabled();
  }

  // ============================================================
  // Action Methods
  // ============================================================

  /**
   * @desc Clicks the technical details summary to toggle the collapsible technical error details section open or closed
   * Expected outcome is that the <details> element expands or collapses to show/hide the pre block
   */
  async clickTechnicalDetailsSummary(): Promise<void> {
    await this.page.locator(this.selector_technicalDetailsSummary).click();
  }

  /**
   * @desc Clicks the 'Run Diagnostics Again' button to re-run the live diagnostic checks
   * Expected outcome is that the diagnostics spinner will appear and checks will re-run
   */
  async clickRunDiagnosticsButton(): Promise<void> {
    await this.page.locator(this.selector_runDiagnosticsButton).click();
  }

  /**
   * @desc Clicks the 'Retry Connection' button to attempt reconnecting to the database
   * Expected outcome is that the onRetry callback will be invoked
   * @throws {Error} When the Retry Connection button is not visible (onRetry prop not provided)
   */
  async clickRetryConnectionButton(): Promise<void> {
    const isVisible = await this.isRetryConnectionButtonVisible();
    if (!isVisible) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Cannot click Retry Connection button - it is not visible. ` +
        `The button is only rendered when the onRetry prop is provided. Selector: ${this.selector_retryConnectionButton}`
      );
    }
    await this.page.locator(this.selector_retryConnectionButton).click();
  }

  // ============================================================
  // Data Retrieval Methods
  // ============================================================

  /**
   * @desc Extract the H1 heading text ('Database Connection Failed') from the error header
   * @returns {Promise<string>} The H1 heading text exactly as it appears in the UI
   * @throws {Error} When the error header title content is not accessible or null
   */
  async getErrorHeaderTitle(): Promise<string> {
    await this.page.locator(this.selector_errorHeaderTitle).isVisible();
    const text = await this.page.locator(this.selector_errorHeaderTitle).textContent();
    if (text === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Error header title content is null. Selector: ${this.selector_errorHeaderTitle}`
      );
    }
    return text;
  }

  /**
   * @desc Extract the explanatory paragraph text about the PostgreSQL connection requirement
   * @returns {Promise<string>} The error description paragraph text exactly as it appears
   * @throws {Error} When the error description content is not accessible or null
   */
  async getErrorDescriptionText(): Promise<string> {
    await this.page.locator(this.selector_errorDescriptionText).isVisible();
    const text = await this.page.locator(this.selector_errorDescriptionText).textContent();
    if (text === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Error description text content is null. Selector: ${this.selector_errorDescriptionText}`
      );
    }
    return text;
  }

  /**
   * @desc Extract the 'Diagnostics' H2 heading text above the diagnostic item rows
   * @returns {Promise<string>} The diagnostics heading text exactly as it appears
   * @throws {Error} When the diagnostics heading content is not accessible or null
   */
  async getDiagnosticsHeadingText(): Promise<string> {
    await this.page.locator(this.selector_diagnosticsHeading).isVisible();
    const text = await this.page.locator(this.selector_diagnosticsHeading).textContent();
    if (text === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Diagnostics heading content is null. Selector: ${this.selector_diagnosticsHeading}`
      );
    }
    return text;
  }

  /**
   * @desc Extract the label text from the 'Database Container Running' diagnostic row
   * @returns {Promise<string>} The Docker Running diagnostic row label text exactly as it appears
   * @throws {Error} When the diagnostic row content is not accessible or null
   */
  async getDiagnosticDockerRunningText(): Promise<string> {
    await this.page.locator(this.selector_diagnosticDockerRunning).isVisible();
    const text = await this.page.locator(this.selector_diagnosticDockerRunning).textContent();
    if (text === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Docker Running diagnostic row content is null. Selector: ${this.selector_diagnosticDockerRunning}`
      );
    }
    return text;
  }

  /**
   * @desc Extract the label text from the 'Port 5434 Accessible' diagnostic row
   * @returns {Promise<string>} The Port Accessible diagnostic row label text exactly as it appears
   * @throws {Error} When the diagnostic row content is not accessible or null
   */
  async getDiagnosticPortAccessibleText(): Promise<string> {
    await this.page.locator(this.selector_diagnosticPortAccessible).isVisible();
    const text = await this.page.locator(this.selector_diagnosticPortAccessible).textContent();
    if (text === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Port Accessible diagnostic row content is null. Selector: ${this.selector_diagnosticPortAccessible}`
      );
    }
    return text;
  }

  /**
   * @desc Count the total number of DiagnosticItem rows currently rendered in the diagnostics section
   * @returns {Promise<number>} The count of diagnostic item rows
   */
  async getDiagnosticItemRowCount(): Promise<number> {
    return await this.page.locator(this.selector_allDiagnosticItemRows).count();
  }

  /**
   * @desc Read the dynamically generated data-testid attribute from a specific DiagnosticItem row
   * @param {string} labelSlug - The label slug used to identify the diagnostic row (e.g. 'port-5434-accessible')
   * @returns {Promise<string>} The data-testid attribute value exactly as it appears
   * @throws {Error} When the attribute is not accessible or null
   */
  async getDiagnosticItemRowTestId(labelSlug: string): Promise<string> {
    const selector = this.selector_diagnosticItemRow(labelSlug);
    await this.page.locator(selector).isVisible();
    const value = await this.page.locator(selector).getAttribute('data-testid');
    if (value === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: data-testid attribute is null for diagnostic item row. Selector: ${selector}`
      );
    }
    return value;
  }

  /**
   * @desc Get a list of all DiagnosticItem row label texts currently rendered
   * @returns {Promise<string[]>} Array of label text strings for each diagnostic row, preserving original formatting
   */
  async getAllDiagnosticItemRowTexts(): Promise<string[]> {
    const rows = this.page.locator(this.selector_allDiagnosticItemRows);
    const count = await rows.count();
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      const text = await rows.nth(i).textContent();
      texts.push(text ?? '');
    }
    return texts;
  }

  /**
   * @desc Extract the 'How to Fix' H3 heading text from the blue info box
   * @returns {Promise<string>} The how-to-fix heading text exactly as it appears
   * @throws {Error} When the heading content is not accessible or null
   */
  async getHowToFixHeadingText(): Promise<string> {
    await this.page.locator(this.selector_howToFixHeading).isVisible();
    const text = await this.page.locator(this.selector_howToFixHeading).textContent();
    if (text === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: How to Fix heading content is null. Selector: ${this.selector_howToFixHeading}`
      );
    }
    return text;
  }

  /**
   * @desc Extract the visible text content of the ordered fix instructions list
   * @returns {Promise<string>} The fix instructions list text exactly as it appears
   * @throws {Error} When the list content is not accessible or null
   */
  async getHowToFixListText(): Promise<string> {
    await this.page.locator(this.selector_howToFixList).isVisible();
    const text = await this.page.locator(this.selector_howToFixList).textContent();
    if (text === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: How to Fix list content is null. Selector: ${this.selector_howToFixList}`
      );
    }
    return text;
  }

  /**
   * @desc Get the full inner HTML of the ordered list of fix instructions, including inline code snippets
   * @returns {Promise<string>} The full inner HTML of the fix instructions list
   * @throws {Error} When the inner HTML is not accessible or null
   */
  async getHowToFixListInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_howToFixList).isVisible();
    const html = await this.page.locator(this.selector_howToFixList).innerHTML();
    if (html === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: How to Fix list inner HTML is null. Selector: ${this.selector_howToFixList}`
      );
    }
    return html;
  }

  /**
   * @desc Get the href URL of the README database-setup-docker anchor link
   * @returns {Promise<string>} The href attribute value exactly as it appears
   * @throws {Error} When the href attribute is not accessible or null
   */
  async getReadmeSetupLinkHref(): Promise<string> {
    await this.page.locator(this.selector_readmeSetupLink).isVisible();
    const value = await this.page.locator(this.selector_readmeSetupLink).getAttribute('href');
    if (value === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: README setup link href attribute is null. Selector: ${this.selector_readmeSetupLink}`
      );
    }
    return value;
  }

  /**
   * @desc Read the 'rel' attribute of the README link to confirm it has 'noopener noreferrer'
   * @returns {Promise<string>} The rel attribute value exactly as it appears
   * @throws {Error} When the rel attribute is not accessible or null
   */
  async getReadmeSetupLinkRel(): Promise<string> {
    await this.page.locator(this.selector_readmeSetupLink).isVisible();
    const value = await this.page.locator(this.selector_readmeSetupLink).getAttribute('rel');
    if (value === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: README setup link rel attribute is null. Selector: ${this.selector_readmeSetupLink}`
      );
    }
    return value;
  }

  /**
   * @desc Read the 'target' attribute of the README link to confirm it opens in a new tab (_blank)
   * @returns {Promise<string>} The target attribute value exactly as it appears
   * @throws {Error} When the target attribute is not accessible or null
   */
  async getReadmeSetupLinkTarget(): Promise<string> {
    await this.page.locator(this.selector_readmeSetupLink).isVisible();
    const value = await this.page.locator(this.selector_readmeSetupLink).getAttribute('target');
    if (value === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: README setup link target attribute is null. Selector: ${this.selector_readmeSetupLink}`
      );
    }
    return value;
  }

  /**
   * @desc Read the data-testid attribute value from the root error page container
   * @returns {Promise<string>} The data-testid attribute value exactly as it appears
   * @throws {Error} When the attribute is not accessible or null
   */
  async getErrorPageRootTestId(): Promise<string> {
    await this.page.locator(this.selector_errorPageRoot).isVisible();
    const value = await this.page.locator(this.selector_errorPageRoot).getAttribute('data-testid');
    if (value === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Root error page data-testid attribute is null. Selector: ${this.selector_errorPageRoot}`
      );
    }
    return value;
  }

  /**
   * @desc Read the data-testid attribute from the Retry Connection button
   * @returns {Promise<string>} The data-testid attribute value exactly as it appears
   * @throws {Error} When the attribute is not accessible or null
   */
  async getRetryConnectionButtonTestId(): Promise<string> {
    await this.page.locator(this.selector_retryConnectionButton).isVisible();
    const value = await this.page.locator(this.selector_retryConnectionButton).getAttribute('data-testid');
    if (value === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Retry Connection button data-testid attribute is null. Selector: ${this.selector_retryConnectionButton}`
      );
    }
    return value;
  }

  /**
   * @desc Read the data-testid attribute from the Run Diagnostics Again button
   * @returns {Promise<string>} The data-testid attribute value exactly as it appears
   * @throws {Error} When the attribute is not accessible or null
   */
  async getRunDiagnosticsButtonTestId(): Promise<string> {
    await this.page.locator(this.selector_runDiagnosticsButton).isVisible();
    const value = await this.page.locator(this.selector_runDiagnosticsButton).getAttribute('data-testid');
    if (value === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Run Diagnostics button data-testid attribute is null. Selector: ${this.selector_runDiagnosticsButton}`
      );
    }
    return value;
  }

  /**
   * @desc Extract the visible text label of the 'Retry Connection' button
   * @returns {Promise<string>} The button label text exactly as it appears
   * @throws {Error} When the button text content is not accessible or null
   */
  async getRetryConnectionButtonText(): Promise<string> {
    await this.page.locator(this.selector_retryConnectionButton).isVisible();
    const text = await this.page.locator(this.selector_retryConnectionButton).textContent();
    if (text === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Retry Connection button text content is null. Selector: ${this.selector_retryConnectionButton}`
      );
    }
    return text;
  }

  /**
   * @desc Extract the visible text label of the 'Run Diagnostics Again' button
   * @returns {Promise<string>} The button label text exactly as it appears
   * @throws {Error} When the button text content is not accessible or null
   */
  async getRunDiagnosticsButtonText(): Promise<string> {
    await this.page.locator(this.selector_runDiagnosticsButton).isVisible();
    const text = await this.page.locator(this.selector_runDiagnosticsButton).textContent();
    if (text === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Run Diagnostics button text content is null. Selector: ${this.selector_runDiagnosticsButton}`
      );
    }
    return text;
  }

  /**
   * @desc Extract the summary toggle label text ('Technical Error Details')
   * @returns {Promise<string>} The summary text exactly as it appears
   * @throws {Error} When the summary content is not accessible or null
   */
  async getTechnicalDetailsSummaryText(): Promise<string> {
    await this.page.locator(this.selector_technicalDetailsSummary).isVisible();
    const text = await this.page.locator(this.selector_technicalDetailsSummary).textContent();
    if (text === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Technical details summary text content is null. Selector: ${this.selector_technicalDetailsSummary}`
      );
    }
    return text;
  }

  /**
   * @desc Extract the raw technical error details string from the pre-formatted block
   * @returns {Promise<string>} The technical error details text exactly as it appears
   * @throws {Error} When the pre block content is not accessible or null
   */
  async getTechnicalDetailsPreBlockText(): Promise<string> {
    await this.page.locator(this.selector_technicalDetailsPreBlock).isVisible();
    const text = await this.page.locator(this.selector_technicalDetailsPreBlock).textContent();
    if (text === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Technical details pre block text content is null. Selector: ${this.selector_technicalDetailsPreBlock}`
      );
    }
    return text;
  }

  /**
   * @desc Get the full inner HTML of the pre block to capture the complete technical error details content
   * @returns {Promise<string>} The full inner HTML of the technical details pre block
   * @throws {Error} When the inner HTML is not accessible or null
   */
  async getTechnicalDetailsPreBlockInnerHtml(): Promise<string> {
    await this.page.locator(this.selector_technicalDetailsPreBlock).isVisible();
    const html = await this.page.locator(this.selector_technicalDetailsPreBlock).innerHTML();
    if (html === null) {
      throw new Error(
        `DatabaseConnectionErrorPOM: Technical details pre block inner HTML is null. Selector: ${this.selector_technicalDetailsPreBlock}`
      );
    }
    return html;
  }
}