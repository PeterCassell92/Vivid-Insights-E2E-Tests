/**
 * Page Object Model: ScenarioPanel
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */
import { Page } from '@playwright/test';
export declare class ScenarioPanelPOM {
    private readonly page;
    private readonly rootSelector;
    private readonly selector_scenarioPanelRoot;
    private readonly selector_scenarioPanelTitle;
    private readonly selector_saveScenarioButton;
    private readonly selector_scenarioSelector;
    private readonly selector_decisionPathsHeader;
    private readonly selector_decisionPathsLoading;
    private readonly selector_noDecisionPaths;
    private readonly selector_allDecisionPathCheckboxes;
    private readonly selector_allDecisionPathNames;
    private readonly selector_allScenarioOptions;
    private readonly selector_decisionPathItem;
    private readonly selector_decisionPathCheckbox;
    private readonly selector_decisionPathName;
    private readonly selector_decisionPathDescription;
    private readonly selector_scenarioOption;
    constructor(page: Page);
    /**
     * @desc Checks if the ScenarioPanel is currently visible on screen
     * @param page - Playwright Page instance
     * @returns {Promise<boolean>} True if the scenario panel root is visible
     */
    static isVisible(page: Page): Promise<boolean>;
    /**
     * @desc Factory method — validates visibility and returns a ScenarioPanelPOM instance
     * @param page - Playwright Page instance
     * @returns {Promise<ScenarioPanelPOM>} ScenarioPanelPOM instance
     * @throws {Error} When the scenario panel root element is not visible
     */
    static getPOM(page: Page): Promise<ScenarioPanelPOM>;
    /**
     * @desc Check whether the ScenarioPanel root container is visible on screen
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the root panel is visible
     */
    isScenarioPanelRootVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the loading state message is visible (rendered when loading === true)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the loading indicator is visible
     */
    isDecisionPathsLoadingVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the empty-state 'No decision paths' message is visible
     * (rendered when allDecisionPaths.length === 0)
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the empty-state message is visible
     */
    isNoDecisionPathsVisible(timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether a specific decision path row is visible on screen
     * @param {string} id - The decision path ID
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the decision path item is visible
     */
    isDecisionPathItemVisible(id: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Check whether the description div is rendered for a specific decision path
     * (only present when decisionPath.description is truthy)
     * @param {string} id - The decision path ID
     * @param {number} [timeout=1500] - Timeout in milliseconds
     * @returns {Promise<boolean>} True if the description element is visible
     */
    isDecisionPathDescriptionVisible(id: string, timeout?: number): Promise<boolean>;
    /**
     * @desc Clicks the 'Save Current as New Scenario' button to dispatch openSaveModal()
     * Expected outcome is that the SaveScenarioModal will open
     */
    clickSaveScenarioButton(): Promise<void>;
    /**
     * @desc Selects an active scenario set from the dropdown, triggering loadScenarioSet dispatch
     * Expected outcome is that the selected scenario set becomes active
     * @param {string} scenarioSetId - The ID value of the scenario set to select
     */
    selectScenarioById(scenarioSetId: string): Promise<void>;
    /**
     * @desc Selects an active scenario set from the dropdown by its visible label text
     * Expected outcome is that the selected scenario set becomes active
     * @param {string} label - The visible text label of the scenario option to select
     */
    selectScenarioByLabel(label: string): Promise<void>;
    /**
     * @desc Clicks a decision path label row to toggle its checkbox state
     * Expected outcome is that the decision path enabled state is toggled
     * @param {string} id - The decision path ID
     */
    clickDecisionPathItem(id: string): Promise<void>;
    /**
     * @desc Checks a decision path checkbox to enable the decision path
     * Expected outcome is that the decision path becomes enabled
     * @param {string} id - The decision path ID
     */
    checkDecisionPathCheckbox(id: string): Promise<void>;
    /**
     * @desc Unchecks a decision path checkbox to disable the decision path
     * Expected outcome is that the decision path becomes disabled
     * @param {string} id - The decision path ID
     */
    uncheckDecisionPathCheckbox(id: string): Promise<void>;
    /**
     * @desc Scrolls within the decision paths list container (flex-1 overflow-y-auto)
     * Expected outcome is that the list scrolls to reveal more decision paths
     * @param {number} deltaY - Pixels to scroll vertically (positive = down)
     */
    scrollDecisionPathsList(deltaY: number): Promise<void>;
    /**
     * @desc Gets the visible text of the 'Scenario Planning' H2 title
     * @returns {Promise<string>} The title text exactly as it appears in the UI
     * @throws {Error} When the title text content is null or not accessible
     */
    getScenarioPanelTitleText(): Promise<string>;
    /**
     * @desc Gets the text label of the 'Decision Paths' H3 section heading
     * @returns {Promise<string>} The heading text exactly as it appears in the UI
     * @throws {Error} When the heading text content is null or not accessible
     */
    getDecisionPathsHeaderText(): Promise<string>;
    /**
     * @desc Gets the text content of the 'Save Current as New Scenario' button
     * @returns {Promise<string>} The button text exactly as it appears in the UI
     * @throws {Error} When the button text content is null or not accessible
     */
    getSaveScenarioButtonText(): Promise<string>;
    /**
     * @desc Check whether the 'Save Current as New Scenario' button is enabled
     * @returns {Promise<boolean>} True if the button is enabled
     */
    isSaveScenarioButtonEnabled(): Promise<boolean>;
    /**
     * @desc Gets the text content of the loading state message
     * @returns {Promise<string>} The loading message text exactly as it appears in the UI
     * @throws {Error} When the loading message text content is null or not accessible
     */
    getDecisionPathsLoadingText(): Promise<string>;
    /**
     * @desc Gets the text content of the empty-state message when no decision paths exist
     * @returns {Promise<string>} The empty-state message text exactly as it appears in the UI
     * @throws {Error} When the empty-state message text content is null or not accessible
     */
    getNoDecisionPathsText(): Promise<string>;
    /**
     * @desc Gets CSS classes on the root panel div to determine right-margin state
     * (mr-96 vs mr-12) based on recurringPanelExpanded prop
     * @returns {Promise<string>} The full class attribute string of the root panel element
     * @throws {Error} When the class attribute is not accessible
     */
    getScenarioPanelRootClassList(): Promise<string>;
    /**
     * @desc Gets the currently selected scenario set ID (activeScenarioSetId or empty string)
     * from the select element's value attribute
     * @returns {Promise<string>} The current value of the scenario selector element
     * @throws {Error} When the input value is not accessible
     */
    getScenarioSelectorValue(): Promise<string>;
    /**
     * @desc Counts the number of scenario option elements rendered inside the selector
     * @returns {Promise<number>} The count of scenario option elements
     */
    getScenarioOptionCount(): Promise<number>;
    /**
     * @desc Gets the value attribute of a specific scenario option element to retrieve its scenario ID
     * @param {string} id - The scenario option ID
     * @returns {Promise<string>} The value attribute of the scenario option
     * @throws {Error} When the value attribute is null or not accessible
     */
    getScenarioOptionValue(id: string): Promise<string>;
    /**
     * @desc Gets a list of all scenario option text labels rendered in the dropdown
     * @returns {Promise<string[]>} Array of scenario option label texts exactly as they appear
     */
    getAllScenarioOptionLabels(): Promise<string[]>;
    /**
     * @desc Gets the name text of a specific decision path
     * @param {string} id - The decision path ID
     * @returns {Promise<string>} The decision path name text exactly as it appears in the UI
     * @throws {Error} When the name text content is null or not accessible
     */
    getDecisionPathNameText(id: string): Promise<string>;
    /**
     * @desc Gets the description text of a specific decision path
     * (only present when decisionPath.description is truthy)
     * @param {string} id - The decision path ID
     * @returns {Promise<string>} The decision path description text exactly as it appears in the UI
     * @throws {Error} When the description text content is null or not accessible
     */
    getDecisionPathDescriptionText(id: string): Promise<string>;
    /**
     * @desc Gets the checked state of a specific decision path checkbox,
     * reflecting currentDecisionPathStates[decisionPath.id] (defaults to true)
     * @param {string} id - The decision path ID
     * @returns {Promise<boolean>} True if the checkbox is checked
     */
    isDecisionPathCheckboxChecked(id: string): Promise<boolean>;
    /**
     * @desc Gets CSS classes on the decision path label to determine its enabled/disabled
     * visual state (blue vs gray styling)
     * @param {string} id - The decision path ID
     * @returns {Promise<string>} The full class attribute string of the decision path item element
     * @throws {Error} When the class attribute is not accessible
     */
    getDecisionPathItemClassList(id: string): Promise<string>;
    /**
     * @desc Counts the total number of decision path checkbox inputs rendered in the list
     * @returns {Promise<number>} The count of decision path checkbox elements
     */
    getDecisionPathCheckboxCount(): Promise<number>;
    /**
     * @desc Gets a list of all decision path name texts rendered in the panel
     * @returns {Promise<string[]>} Array of decision path name texts exactly as they appear
     */
    getAllDecisionPathNameTexts(): Promise<string[]>;
}
