/**
 * Page Object Model: ApiDocsClient
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ApiDocsClientPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_apiDocsClientRoot;
    private readonly selector_failedState;
    private readonly selector_loadingState;
    private readonly selector_generatingState;
    private readonly selector_headerBar;
    private readonly selector_regenerateButton;
    private readonly selector_tryAgainButton;
    constructor(page: Page);
    /**
     * @desc Checks if the ApiDocsClient root container is visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the root container is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates visibility and returns an ApiDocsClientPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<ApiDocsClientPOM>} ApiDocsClientPOM instance
     * @throws {Error} When the ApiDocsClient root container is not visible
     */
    static getPOM(page: Page): Promise<ApiDocsClientPOM>;
    /**
     * @desc Check if the root ApiDocsClient container is visible on screen
     * @returns {Promise<boolean>} True if the root container is visible
     */
    isApiDocsClientRootVisible(): Promise<boolean>;
    /**
     * @desc Check if the failed/error state panel is currently visible (pageState === 'failed')
     * @returns {Promise<boolean>} True if the failed state panel is visible
     */
    isFailedStateVisible(): Promise<boolean>;
    /**
     * @desc Check if the loading state panel is currently visible (pageState === 'loading')
     * @returns {Promise<boolean>} True if the loading state panel is visible
     */
    isLoadingStateVisible(): Promise<boolean>;
    /**
     * @desc Check if the generating state panel is currently visible (pageState === 'generating')
     * @returns {Promise<boolean>} True if the generating state panel is visible
     */
    isGeneratingStateVisible(): Promise<boolean>;
    /**
     * @desc Check if the header bar is visible on screen
     * @returns {Promise<boolean>} True if the header bar is visible
     */
    isHeaderBarVisible(): Promise<boolean>;
    /**
     * @desc Check if the Regenerate Spec button inside the header bar is enabled
     * The button is disabled when pageState === 'generating'
     * @returns {Promise<boolean>} True if the Regenerate Spec button is enabled
     */
    isRegenerateButtonEnabled(): Promise<boolean>;
    /**
     * @desc Scrolls within the root container to navigate through the API documentation content
     * Expected outcome is that the visible portion of the API documentation changes
     * @param scrollOptions - Options for the scroll action (e.g. deltaY for vertical scroll amount)
     */
    scrollApiDocsClientRoot(scrollOptions: {
        deltaX?: number;
        deltaY?: number;
    }): Promise<void>;
    /**
     * @desc Clicks the 'Try Again' button inside the failed state panel to retry spec generation
     * Expected outcome is that spec generation is retried and the state transitions away from 'failed'
     * @throws {Error} When the failed state panel is not visible
     */
    clickTryAgainButton(): Promise<void>;
    /**
     * @desc Clicks the Regenerate Spec button inside the header bar to trigger OpenAPI spec regeneration
     * Expected outcome is that spec regeneration is triggered and the state transitions to 'generating'
     * @throws {Error} When the header bar is not visible or the regenerate button is not enabled
     */
    clickRegenerateSpecButton(): Promise<void>;
    /**
     * @desc Get the full inner HTML of the ApiDocsClient root to inspect current rendered state
     * @returns {Promise<string>} The inner HTML of the root container exactly as rendered
     * @throws {Error} When the root container content is not accessible
     */
    getApiDocsClientRootInnerHtml(): Promise<string>;
    /**
     * @desc Extract the error message text displayed in the failed state panel
     * @returns {Promise<string>} The text content of the failed state panel exactly as it appears
     * @throws {Error} When the failed state panel content is not accessible
     */
    getFailedStateText(): Promise<string>;
    /**
     * @desc Extract the loading message text (e.g. 'Loading API docs…')
     * @returns {Promise<string>} The text content of the loading state panel exactly as it appears
     * @throws {Error} When the loading state panel content is not accessible
     */
    getLoadingStateText(): Promise<string>;
    /**
     * @desc Extract all text content from the generating panel, including status message and elapsed timer
     * @returns {Promise<string>} The full text content of the generating state panel exactly as it appears
     * @throws {Error} When the generating state panel content is not accessible
     */
    getGeneratingStateText(): Promise<string>;
    /**
     * @desc Extract all text from the header bar, including the title, version number, generation timestamp, and button label
     * @returns {Promise<string>} The full text content of the header bar exactly as it appears
     * @throws {Error} When the header bar content is not accessible
     */
    getHeaderBarText(): Promise<string>;
}
