/**
 * Page Object Model: StoreProvider
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class StoreProviderPOM {
    private readonly page;
    private readonly rootSelector;
    /**
     * The ActivityLogSSEProvider renders null — there is no DOM element for it.
     * Its presence is confirmed indirectly via network requests to the SSE
     * endpoint rather than a DOM selector.
     */
    private readonly selector_body;
    constructor(page: Page);
    /**
     * @desc Checks whether the StoreProvider tree is mounted and visible.
     * Because StoreProvider renders no DOM node of its own, visibility is
     * confirmed by the presence of a non-empty document body — the minimum
     * observable signal for a render-null infrastructure wrapper.
     *
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} true if the Provider tree appears to be mounted
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method that validates the StoreProvider tree is mounted
     * and returns a StoreProviderPOM instance.
     *
     * @param page - Playwright Page instance
     * @returns {Promise<StoreProviderPOM>} StoreProviderPOM instance
     * @throws {Error} When the Provider tree is not visible (body not present)
     */
    static getPOM(page: Page): Promise<StoreProviderPOM>;
    /**
     * @desc Whether the document body (Provider tree root) is visible.
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} true if the body element is visible
     */
    isProviderTreeVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Waits for the Redux settings bootstrap to complete by observing
     * the network response from the /api/settings endpoint that fetchSettings()
     * dispatches on mount.
     *
     * @param {number} [timeout=10000] - Timeout in milliseconds to wait for the
     *   settings API response
     * @returns {Promise<boolean>} true if the settings API responded successfully
     * @throws {Error} When the settings API response is not received within the
     *   timeout period
     */
    waitForSettingsBootstrap(timeout?: number): Promise<boolean>;
    /**
     * @desc Checks whether the /api/settings endpoint has been called, indicating
     * that fetchSettings() was dispatched on mount.
     *
     * @param {number} [timeout=5000] - Timeout in milliseconds
     * @returns {Promise<boolean>} true if the settings request was observed
     */
    hasSettingsRequestBeenDispatched(timeout?: number): Promise<boolean>;
    /**
     * @desc Waits for the ActivityLogSSEProvider to establish its SSE connection
     * by observing a request to the activity-log SSE endpoint.
     * ActivityLogSSEProvider renders null — this is the only observable signal
     * of its presence.
     *
     * @param {number} [timeout=10000] - Timeout in milliseconds
     * @returns {Promise<boolean>} true if the SSE connection request was observed
     */
    waitForActivityLogSSEConnection(timeout?: number): Promise<boolean>;
    /**
     * @desc Retrieves the HTTP response body from the /api/settings endpoint
     * to inspect the bootstrapped settings state (currency, dateFormat,
     * defaultBankAccountId).
     *
     * @param {number} [timeout=10000] - Timeout in milliseconds
     * @returns {Promise<Record<string, unknown>>} The parsed JSON response data
     *   from the settings API exactly as returned
     * @throws {Error} When the settings API response is not received within the
     *   timeout or the response body cannot be parsed
     */
    getBootstrappedSettingsResponse(timeout?: number): Promise<Record<string, unknown>>;
}
