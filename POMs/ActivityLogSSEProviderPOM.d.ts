/**
 * Page Object Model: ActivityLogSSEProvider
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ActivityLogSSEProviderPOM {
    private readonly page;
    private readonly rootSelector;
    constructor(page: Page);
    /**
     * @desc Checks if the ActivityLogSSEProvider is mounted in the DOM.
     * Because this component renders null, visibility is determined by
     * confirming the page itself is loaded and the SSE infrastructure is
     * in place rather than a visible DOM element.
     * @param {Page} page - Playwright Page instance
     * @returns {Promise<boolean>} True if the page is accessible (provider is mounted at app root)
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates the provider is mounted and returns
     * an ActivityLogSSEProviderPOM instance.
     * @param {Page} page - Playwright Page instance
     * @returns {Promise<ActivityLogSSEProviderPOM>} ActivityLogSSEProviderPOM instance
     * @throws {Error} When the page is not accessible, indicating the provider
     * cannot be confirmed as mounted
     */
    static getPOM(page: Page): Promise<ActivityLogSSEProviderPOM>;
    /**
     * @desc Checks whether an active SSE connection has been established by
     * verifying that the browser has an open EventSource connection to the
     * expected activity log SSE endpoint.
     * @returns {Promise<boolean>} True if an SSE connection is active
     */
    isSSEConnectionActive(): Promise<boolean>;
    /**
     * @desc Waits for an SSE connection request to be made to the activity log
     * endpoint within the given timeout period.
     * @param {number} [timeout=5000] - Timeout in milliseconds to wait for the SSE request
     * @returns {Promise<boolean>} True if an SSE connection request was observed
     */
    waitForSSEConnectionRequest(timeout?: number): Promise<boolean>;
    /**
     * @desc Waits for the page to reach a fully loaded state, confirming the
     * ActivityLogSSEProvider has had the opportunity to mount and initiate its
     * SSE connection.
     * @param {number} [timeout=5000] - Timeout in milliseconds
     * @returns {Promise<void>}
     * @throws {Error} When the page does not reach a loaded state within the timeout
     */
    waitForProviderMount(timeout?: number): Promise<void>;
}
