/**
 * Page Object Model: DatabaseConnectionError
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class DatabaseConnectionErrorPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_errorPageRoot;
    private readonly selector_errorHeaderTitle;
    private readonly selector_errorDescriptionText;
    private readonly selector_technicalDetailsSummary;
    private readonly selector_technicalDetailsPreBlock;
    private readonly selector_diagnosticsHeading;
    private readonly selector_diagnosticDockerRunning;
    private readonly selector_diagnosticDockerRunningSpinner;
    private readonly selector_diagnosticDockerRunningSuccessIcon;
    private readonly selector_diagnosticDockerRunningFailureIcon;
    private readonly selector_diagnosticPortAccessible;
    private readonly selector_diagnosticPortAccessibleSpinner;
    private readonly selector_diagnosticPortAccessibleSuccessIcon;
    private readonly selector_diagnosticPortAccessibleFailureIcon;
    private readonly selector_diagnosticItemRow;
    private readonly selector_allDiagnosticItemRows;
    private readonly selector_howToFixHeading;
    private readonly selector_howToFixList;
    private readonly selector_readmeSetupLink;
    private readonly selector_retryConnectionButton;
    private readonly selector_runDiagnosticsButton;
    constructor(page: Page);
    /**
     * @desc Checks if the DatabaseConnectionError full-page component is currently visible
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the error page root element is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns a DatabaseConnectionErrorPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<DatabaseConnectionErrorPOM>} A DatabaseConnectionErrorPOM instance
     * @throws {Error} When the database connection error page is not visible
     */
    static getPOM(page: Page): Promise<DatabaseConnectionErrorPOM>;
    /**
     * @desc Check whether the full-page database connection error component is visible on screen
     * @returns {Promise<boolean>} True if the root error page container is visible
     */
    isErrorPageVisible(): Promise<boolean>;
    /**
     * @desc Check whether the 'Run Diagnostics Again' button is visible on the page
     * @returns {Promise<boolean>} True if the button is visible
     */
    isRunDiagnosticsButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the conditionally rendered 'Retry Connection' button is visible
     * Only present when the onRetry prop is provided to the component
     * @returns {Promise<boolean>} True if the button is visible
     */
    isRetryConnectionButtonVisible(): Promise<boolean>;
    /**
     * @desc Check whether the Docker Running diagnostic row is currently visible
     * @returns {Promise<boolean>} True if the row is visible
     */
    isDiagnosticDockerRunningVisible(): Promise<boolean>;
    /**
     * @desc Check whether the Port 5434 Accessible diagnostic row is currently visible
     * @returns {Promise<boolean>} True if the row is visible
     */
    isDiagnosticPortAccessibleVisible(): Promise<boolean>;
    /**
     * @desc Check whether the Docker Running spinner is visible (i.e., the check is still in progress)
     * @returns {Promise<boolean>} True if the spinner is visible
     */
    isDiagnosticDockerRunningSpinnerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the Port 5434 Accessible spinner is visible (i.e., the check is still in progress)
     * @returns {Promise<boolean>} True if the spinner is visible
     */
    isDiagnosticPortAccessibleSpinnerVisible(): Promise<boolean>;
    /**
     * @desc Check whether the green success icon is visible for the Docker Running diagnostic row (check passed)
     * @returns {Promise<boolean>} True if the success icon is visible
     */
    isDiagnosticDockerRunningSuccessIconVisible(): Promise<boolean>;
    /**
     * @desc Check whether the red failure icon is visible for the Docker Running diagnostic row (check failed)
     * @returns {Promise<boolean>} True if the failure icon is visible
     */
    isDiagnosticDockerRunningFailureIconVisible(): Promise<boolean>;
    /**
     * @desc Check whether the green success icon is visible for the Port 5434 Accessible diagnostic row (check passed)
     * @returns {Promise<boolean>} True if the success icon is visible
     */
    isDiagnosticPortAccessibleSuccessIconVisible(): Promise<boolean>;
    /**
     * @desc Check whether the red failure icon is visible for the Port 5434 Accessible diagnostic row (check failed)
     * @returns {Promise<boolean>} True if the failure icon is visible
     */
    isDiagnosticPortAccessibleFailureIconVisible(): Promise<boolean>;
    /**
     * @desc Check whether the technical details disclosure section is present/visible
     * Only rendered when the technicalDetails prop is provided to the component
     * @returns {Promise<boolean>} True if the summary toggle is visible
     */
    isTechnicalDetailsSummaryVisible(): Promise<boolean>;
    /**
     * @desc Check whether the 'Retry Connection' button is enabled and not disabled
     * @returns {Promise<boolean>} True if the button is enabled
     */
    isRetryConnectionButtonEnabled(): Promise<boolean>;
    /**
     * @desc Check whether the 'Run Diagnostics Again' button is enabled and not disabled
     * @returns {Promise<boolean>} True if the button is enabled
     */
    isRunDiagnosticsButtonEnabled(): Promise<boolean>;
    /**
     * @desc Clicks the technical details summary to toggle the collapsible technical error details section open or closed
     * Expected outcome is that the <details> element expands or collapses to show/hide the pre block
     */
    clickTechnicalDetailsSummary(): Promise<void>;
    /**
     * @desc Clicks the 'Run Diagnostics Again' button to re-run the live diagnostic checks
     * Expected outcome is that the diagnostics spinner will appear and checks will re-run
     */
    clickRunDiagnosticsButton(): Promise<void>;
    /**
     * @desc Clicks the 'Retry Connection' button to attempt reconnecting to the database
     * Expected outcome is that the onRetry callback will be invoked
     * @throws {Error} When the Retry Connection button is not visible (onRetry prop not provided)
     */
    clickRetryConnectionButton(): Promise<void>;
    /**
     * @desc Extract the H1 heading text ('Database Connection Failed') from the error header
     * @returns {Promise<string>} The H1 heading text exactly as it appears in the UI
     * @throws {Error} When the error header title content is not accessible or null
     */
    getErrorHeaderTitle(): Promise<string>;
    /**
     * @desc Extract the explanatory paragraph text about the PostgreSQL connection requirement
     * @returns {Promise<string>} The error description paragraph text exactly as it appears
     * @throws {Error} When the error description content is not accessible or null
     */
    getErrorDescriptionText(): Promise<string>;
    /**
     * @desc Extract the 'Diagnostics' H2 heading text above the diagnostic item rows
     * @returns {Promise<string>} The diagnostics heading text exactly as it appears
     * @throws {Error} When the diagnostics heading content is not accessible or null
     */
    getDiagnosticsHeadingText(): Promise<string>;
    /**
     * @desc Extract the label text from the 'Database Container Running' diagnostic row
     * @returns {Promise<string>} The Docker Running diagnostic row label text exactly as it appears
     * @throws {Error} When the diagnostic row content is not accessible or null
     */
    getDiagnosticDockerRunningText(): Promise<string>;
    /**
     * @desc Extract the label text from the 'Port 5434 Accessible' diagnostic row
     * @returns {Promise<string>} The Port Accessible diagnostic row label text exactly as it appears
     * @throws {Error} When the diagnostic row content is not accessible or null
     */
    getDiagnosticPortAccessibleText(): Promise<string>;
    /**
     * @desc Count the total number of DiagnosticItem rows currently rendered in the diagnostics section
     * @returns {Promise<number>} The count of diagnostic item rows
     */
    getDiagnosticItemRowCount(): Promise<number>;
    /**
     * @desc Read the dynamically generated data-testid attribute from a specific DiagnosticItem row
     * @param {string} labelSlug - The label slug used to identify the diagnostic row (e.g. 'port-5434-accessible')
     * @returns {Promise<string>} The data-testid attribute value exactly as it appears
     * @throws {Error} When the attribute is not accessible or null
     */
    getDiagnosticItemRowTestId(labelSlug: string): Promise<string>;
    /**
     * @desc Get a list of all DiagnosticItem row label texts currently rendered
     * @returns {Promise<string[]>} Array of label text strings for each diagnostic row, preserving original formatting
     */
    getAllDiagnosticItemRowTexts(): Promise<string[]>;
    /**
     * @desc Extract the 'How to Fix' H3 heading text from the blue info box
     * @returns {Promise<string>} The how-to-fix heading text exactly as it appears
     * @throws {Error} When the heading content is not accessible or null
     */
    getHowToFixHeadingText(): Promise<string>;
    /**
     * @desc Extract the visible text content of the ordered fix instructions list
     * @returns {Promise<string>} The fix instructions list text exactly as it appears
     * @throws {Error} When the list content is not accessible or null
     */
    getHowToFixListText(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the ordered list of fix instructions, including inline code snippets
     * @returns {Promise<string>} The full inner HTML of the fix instructions list
     * @throws {Error} When the inner HTML is not accessible or null
     */
    getHowToFixListInnerHtml(): Promise<string>;
    /**
     * @desc Get the href URL of the README database-setup-docker anchor link
     * @returns {Promise<string>} The href attribute value exactly as it appears
     * @throws {Error} When the href attribute is not accessible or null
     */
    getReadmeSetupLinkHref(): Promise<string>;
    /**
     * @desc Read the 'rel' attribute of the README link to confirm it has 'noopener noreferrer'
     * @returns {Promise<string>} The rel attribute value exactly as it appears
     * @throws {Error} When the rel attribute is not accessible or null
     */
    getReadmeSetupLinkRel(): Promise<string>;
    /**
     * @desc Read the 'target' attribute of the README link to confirm it opens in a new tab (_blank)
     * @returns {Promise<string>} The target attribute value exactly as it appears
     * @throws {Error} When the target attribute is not accessible or null
     */
    getReadmeSetupLinkTarget(): Promise<string>;
    /**
     * @desc Read the data-testid attribute value from the root error page container
     * @returns {Promise<string>} The data-testid attribute value exactly as it appears
     * @throws {Error} When the attribute is not accessible or null
     */
    getErrorPageRootTestId(): Promise<string>;
    /**
     * @desc Read the data-testid attribute from the Retry Connection button
     * @returns {Promise<string>} The data-testid attribute value exactly as it appears
     * @throws {Error} When the attribute is not accessible or null
     */
    getRetryConnectionButtonTestId(): Promise<string>;
    /**
     * @desc Read the data-testid attribute from the Run Diagnostics Again button
     * @returns {Promise<string>} The data-testid attribute value exactly as it appears
     * @throws {Error} When the attribute is not accessible or null
     */
    getRunDiagnosticsButtonTestId(): Promise<string>;
    /**
     * @desc Extract the visible text label of the 'Retry Connection' button
     * @returns {Promise<string>} The button label text exactly as it appears
     * @throws {Error} When the button text content is not accessible or null
     */
    getRetryConnectionButtonText(): Promise<string>;
    /**
     * @desc Extract the visible text label of the 'Run Diagnostics Again' button
     * @returns {Promise<string>} The button label text exactly as it appears
     * @throws {Error} When the button text content is not accessible or null
     */
    getRunDiagnosticsButtonText(): Promise<string>;
    /**
     * @desc Extract the summary toggle label text ('Technical Error Details')
     * @returns {Promise<string>} The summary text exactly as it appears
     * @throws {Error} When the summary content is not accessible or null
     */
    getTechnicalDetailsSummaryText(): Promise<string>;
    /**
     * @desc Extract the raw technical error details string from the pre-formatted block
     * @returns {Promise<string>} The technical error details text exactly as it appears
     * @throws {Error} When the pre block content is not accessible or null
     */
    getTechnicalDetailsPreBlockText(): Promise<string>;
    /**
     * @desc Get the full inner HTML of the pre block to capture the complete technical error details content
     * @returns {Promise<string>} The full inner HTML of the technical details pre block
     * @throws {Error} When the inner HTML is not accessible or null
     */
    getTechnicalDetailsPreBlockInnerHtml(): Promise<string>;
}
