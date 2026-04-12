/**
 * Page Object Model: ScenarioPanel
 *
 * @pom-rules-version 1.0.0
 * @generated-date 2026-04-11T11:47:46.933Z
 * @profile default
 */

import { Page } from '@playwright/test';

const ScenarioPanelPOM_StandardSelector = '[data-testid="scenario-panel"]';

export class ScenarioPanelPOM {
  private readonly page: Page;

  // === SELECTORS ===
  private readonly rootSelector: string;

  // Static selectors
  private readonly selector_scenarioPanelRoot: string;
  private readonly selector_scenarioPanelTitle: string;
  private readonly selector_saveScenarioButton: string;
  private readonly selector_scenarioSelector: string;
  private readonly selector_decisionPathsHeader: string;
  private readonly selector_decisionPathsLoading: string;
  private readonly selector_noDecisionPaths: string;
  private readonly selector_allDecisionPathCheckboxes: string;
  private readonly selector_allDecisionPathNames: string;
  private readonly selector_allScenarioOptions: string;

  // Dynamic selector functions
  private readonly selector_decisionPathItem: (id: string) => string;
  private readonly selector_decisionPathCheckbox: (id: string) => string;
  private readonly selector_decisionPathName: (id: string) => string;
  private readonly selector_decisionPathDescription: (id: string) => string;
  private readonly selector_scenarioOption: (id: string) => string;

  constructor(page: Page) {
    this.page = page;

    // ======================================================================
    // Selectors — Single source of truth
    // ======================================================================

    this.rootSelector = ScenarioPanelPOM_StandardSelector;

    // Static selectors
    this.selector_scenarioPanelRoot = this.rootSelector;
    this.selector_scenarioPanelTitle = `${this.rootSelector} [data-testid="scenario-panel-title"]`;
    this.selector_saveScenarioButton = `${this.rootSelector} [data-testid="save-scenario-button"]`;
    this.selector_scenarioSelector = `${this.rootSelector} [data-testid="scenario-selector"]`;
    this.selector_decisionPathsHeader = `${this.rootSelector} [data-testid="decision-paths-header"]`;
    this.selector_decisionPathsLoading = `${this.rootSelector} [data-testid="decision-paths-loading"]`;
    this.selector_noDecisionPaths = `${this.rootSelector} [data-testid="no-decision-paths"]`;
    this.selector_allDecisionPathCheckboxes = `${this.rootSelector} [data-testid^="decision-path-checkbox__"]`;
    this.selector_allDecisionPathNames = `${this.rootSelector} [data-testid^="decision-path-name__"]`;
    this.selector_allScenarioOptions = `${this.rootSelector} [data-testid^="scenario-option__"]`;

    // Dynamic selector functions
    this.selector_decisionPathItem = (id: string) =>
      `${this.rootSelector} [data-testid="decision-path-item__${id}"]`;
    this.selector_decisionPathCheckbox = (id: string) =>
      `${this.rootSelector} [data-testid="decision-path-checkbox__${id}"]`;
    this.selector_decisionPathName = (id: string) =>
      `${this.rootSelector} [data-testid="decision-path-name__${id}"]`;
    this.selector_decisionPathDescription = (id: string) =>
      `${this.rootSelector} [data-testid="decision-path-description__${id}"]`;
    this.selector_scenarioOption = (id: string) =>
      `${this.rootSelector} [data-testid="scenario-option__${id}"]`;
  }

  // ========================================================================
  // STATIC METHODS
  // ========================================================================

  /**
   * @desc Checks if the ScenarioPanel is currently visible on screen
   * @param page - Playwright Page instance
   * @returns {Promise<boolean>} True if the scenario panel root is visible
   */
  static async isVisible(page: Page): Promise<boolean> {
    try {
      const root = page.locator(ScenarioPanelPOM_StandardSelector);
      return await root.isVisible();
    } catch {
      return false;
    }
  }

  /**
   * @desc Factory method — validates visibility and returns a ScenarioPanelPOM instance
   * @param page - Playwright Page instance
   * @returns {Promise<ScenarioPanelPOM>} ScenarioPanelPOM instance
   * @throws {Error} When the scenario panel root element is not visible
   */
  static async getPOM(page: Page): Promise<ScenarioPanelPOM> {
    const isVisible = await ScenarioPanelPOM.isVisible(page);

    if (!isVisible) {
      throw new Error(
        'ScenarioPanelPOM: Cannot instantiate — panel is not visible. ' +
          `Expected element [${ScenarioPanelPOM_StandardSelector}] to be visible.`
      );
    }

    return new ScenarioPanelPOM(page);
  }

  // ========================================================================
  // VISIBILITY AND STATE METHODS
  // ========================================================================

  /**
   * @desc Check whether the ScenarioPanel root container is visible on screen
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the root panel is visible
   */
  async isScenarioPanelRootVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_scenarioPanelRoot).isVisible({ timeout });
  }

  /**
   * @desc Check whether the loading state message is visible (rendered when loading === true)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the loading indicator is visible
   */
  async isDecisionPathsLoadingVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_decisionPathsLoading).isVisible({ timeout });
  }

  /**
   * @desc Check whether the empty-state 'No decision paths' message is visible
   * (rendered when allDecisionPaths.length === 0)
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the empty-state message is visible
   */
  async isNoDecisionPathsVisible(timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_noDecisionPaths).isVisible({ timeout });
  }

  /**
   * @desc Check whether a specific decision path row is visible on screen
   * @param {string} id - The decision path ID
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the decision path item is visible
   */
  async isDecisionPathItemVisible(id: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_decisionPathItem(id)).isVisible({ timeout });
  }

  /**
   * @desc Check whether the description div is rendered for a specific decision path
   * (only present when decisionPath.description is truthy)
   * @param {string} id - The decision path ID
   * @param {number} [timeout=1500] - Timeout in milliseconds
   * @returns {Promise<boolean>} True if the description element is visible
   */
  async isDecisionPathDescriptionVisible(id: string, timeout: number = 1500): Promise<boolean> {
    return await this.page.locator(this.selector_decisionPathDescription(id)).isVisible({ timeout });
  }

  // ========================================================================
  // ACTION METHODS
  // ========================================================================

  /**
   * @desc Clicks the 'Save Current as New Scenario' button to dispatch openSaveModal()
   * Expected outcome is that the SaveScenarioModal will open
   */
  async clickSaveScenarioButton(): Promise<void> {
    await this.page.locator(this.selector_saveScenarioButton).click();
  }

  /**
   * @desc Selects an active scenario set from the dropdown, triggering loadScenarioSet dispatch
   * Expected outcome is that the selected scenario set becomes active
   * @param {string} scenarioSetId - The ID value of the scenario set to select
   */
  async selectScenarioById(scenarioSetId: string): Promise<void> {
    await this.page.locator(this.selector_scenarioSelector).selectOption({ value: scenarioSetId });
  }

  /**
   * @desc Selects an active scenario set from the dropdown by its visible label text
   * Expected outcome is that the selected scenario set becomes active
   * @param {string} label - The visible text label of the scenario option to select
   */
  async selectScenarioByLabel(label: string): Promise<void> {
    await this.page.locator(this.selector_scenarioSelector).selectOption({ label });
  }

  /**
   * @desc Clicks a decision path label row to toggle its checkbox state
   * Expected outcome is that the decision path enabled state is toggled
   * @param {string} id - The decision path ID
   */
  async clickDecisionPathItem(id: string): Promise<void> {
    await this.page.locator(this.selector_decisionPathItem(id)).click();
  }

  /**
   * @desc Checks a decision path checkbox to enable the decision path
   * Expected outcome is that the decision path becomes enabled
   * @param {string} id - The decision path ID
   */
  async checkDecisionPathCheckbox(id: string): Promise<void> {
    await this.page.locator(this.selector_decisionPathCheckbox(id)).check();
  }

  /**
   * @desc Unchecks a decision path checkbox to disable the decision path
   * Expected outcome is that the decision path becomes disabled
   * @param {string} id - The decision path ID
   */
  async uncheckDecisionPathCheckbox(id: string): Promise<void> {
    await this.page.locator(this.selector_decisionPathCheckbox(id)).uncheck();
  }

  /**
   * @desc Scrolls within the decision paths list container (flex-1 overflow-y-auto)
   * Expected outcome is that the list scrolls to reveal more decision paths
   * @param {number} deltaY - Pixels to scroll vertically (positive = down)
   */
  async scrollDecisionPathsList(deltaY: number): Promise<void> {
    await this.page.locator(this.selector_scenarioPanelRoot).hover();
    await this.page.mouse.wheel(0, deltaY);
  }

  // ========================================================================
  // DATA RETRIEVAL METHODS
  // ========================================================================

  /**
   * @desc Gets the visible text of the 'Scenario Planning' H2 title
   * @returns {Promise<string>} The title text exactly as it appears in the UI
   * @throws {Error} When the title text content is null or not accessible
   */
  async getScenarioPanelTitleText(): Promise<string> {
    await this.page.locator(this.selector_scenarioPanelTitle).isVisible();
    const text = await this.page.locator(this.selector_scenarioPanelTitle).textContent();

    if (text === null) {
      throw new Error(
        `ScenarioPanelPOM: Scenario panel title text content is null. Selector: ${this.selector_scenarioPanelTitle}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text label of the 'Decision Paths' H3 section heading
   * @returns {Promise<string>} The heading text exactly as it appears in the UI
   * @throws {Error} When the heading text content is null or not accessible
   */
  async getDecisionPathsHeaderText(): Promise<string> {
    await this.page.locator(this.selector_decisionPathsHeader).isVisible();
    const text = await this.page.locator(this.selector_decisionPathsHeader).textContent();

    if (text === null) {
      throw new Error(
        `ScenarioPanelPOM: Decision paths header text content is null. Selector: ${this.selector_decisionPathsHeader}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text content of the 'Save Current as New Scenario' button
   * @returns {Promise<string>} The button text exactly as it appears in the UI
   * @throws {Error} When the button text content is null or not accessible
   */
  async getSaveScenarioButtonText(): Promise<string> {
    await this.page.locator(this.selector_saveScenarioButton).isVisible();
    const text = await this.page.locator(this.selector_saveScenarioButton).textContent();

    if (text === null) {
      throw new Error(
        `ScenarioPanelPOM: Save scenario button text content is null. Selector: ${this.selector_saveScenarioButton}`
      );
    }

    return text;
  }

  /**
   * @desc Check whether the 'Save Current as New Scenario' button is enabled
   * @returns {Promise<boolean>} True if the button is enabled
   */
  async isSaveScenarioButtonEnabled(): Promise<boolean> {
    return await this.page.locator(this.selector_saveScenarioButton).isEnabled();
  }

  /**
   * @desc Gets the text content of the loading state message
   * @returns {Promise<string>} The loading message text exactly as it appears in the UI
   * @throws {Error} When the loading message text content is null or not accessible
   */
  async getDecisionPathsLoadingText(): Promise<string> {
    await this.page.locator(this.selector_decisionPathsLoading).isVisible();
    const text = await this.page.locator(this.selector_decisionPathsLoading).textContent();

    if (text === null) {
      throw new Error(
        `ScenarioPanelPOM: Decision paths loading text content is null. Selector: ${this.selector_decisionPathsLoading}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the text content of the empty-state message when no decision paths exist
   * @returns {Promise<string>} The empty-state message text exactly as it appears in the UI
   * @throws {Error} When the empty-state message text content is null or not accessible
   */
  async getNoDecisionPathsText(): Promise<string> {
    await this.page.locator(this.selector_noDecisionPaths).isVisible();
    const text = await this.page.locator(this.selector_noDecisionPaths).textContent();

    if (text === null) {
      throw new Error(
        `ScenarioPanelPOM: No decision paths message text content is null. Selector: ${this.selector_noDecisionPaths}`
      );
    }

    return text;
  }

  /**
   * @desc Gets CSS classes on the root panel div to determine right-margin state
   * (mr-96 vs mr-12) based on recurringPanelExpanded prop
   * @returns {Promise<string>} The full class attribute string of the root panel element
   * @throws {Error} When the class attribute is not accessible
   */
  async getScenarioPanelRootClassList(): Promise<string> {
    await this.page.locator(this.selector_scenarioPanelRoot).isVisible();
    const classList = await this.page.locator(this.selector_scenarioPanelRoot).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `ScenarioPanelPOM: Root panel class attribute is null. Selector: ${this.selector_scenarioPanelRoot}`
      );
    }

    return classList;
  }

  /**
   * @desc Gets the currently selected scenario set ID (activeScenarioSetId or empty string)
   * from the select element's value attribute
   * @returns {Promise<string>} The current value of the scenario selector element
   * @throws {Error} When the input value is not accessible
   */
  async getScenarioSelectorValue(): Promise<string> {
    await this.page.locator(this.selector_scenarioSelector).isVisible();
    const value = await this.page.locator(this.selector_scenarioSelector).inputValue();
    return value;
  }

  /**
   * @desc Counts the number of scenario option elements rendered inside the selector
   * @returns {Promise<number>} The count of scenario option elements
   */
  async getScenarioOptionCount(): Promise<number> {
    return await this.page.locator(this.selector_allScenarioOptions).count();
  }

  /**
   * @desc Gets the value attribute of a specific scenario option element to retrieve its scenario ID
   * @param {string} id - The scenario option ID
   * @returns {Promise<string>} The value attribute of the scenario option
   * @throws {Error} When the value attribute is null or not accessible
   */
  async getScenarioOptionValue(id: string): Promise<string> {
    await this.page.locator(this.selector_scenarioOption(id)).isVisible();
    const value = await this.page.locator(this.selector_scenarioOption(id)).getAttribute('value');

    if (value === null) {
      throw new Error(
        `ScenarioPanelPOM: Scenario option value attribute is null for id "${id}". Selector: ${this.selector_scenarioOption(id)}`
      );
    }

    return value;
  }

  /**
   * @desc Gets a list of all scenario option text labels rendered in the dropdown
   * @returns {Promise<string[]>} Array of scenario option label texts exactly as they appear
   */
  async getAllScenarioOptionLabels(): Promise<string[]> {
    const options = this.page.locator(this.selector_allScenarioOptions);
    const count = await options.count();
    const labels: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await options.nth(i).textContent();
      labels.push(text ?? '');
    }

    return labels;
  }

  /**
   * @desc Gets the name text of a specific decision path
   * @param {string} id - The decision path ID
   * @returns {Promise<string>} The decision path name text exactly as it appears in the UI
   * @throws {Error} When the name text content is null or not accessible
   */
  async getDecisionPathNameText(id: string): Promise<string> {
    await this.page.locator(this.selector_decisionPathName(id)).isVisible();
    const text = await this.page.locator(this.selector_decisionPathName(id)).textContent();

    if (text === null) {
      throw new Error(
        `ScenarioPanelPOM: Decision path name text content is null for id "${id}". Selector: ${this.selector_decisionPathName(id)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the description text of a specific decision path
   * (only present when decisionPath.description is truthy)
   * @param {string} id - The decision path ID
   * @returns {Promise<string>} The decision path description text exactly as it appears in the UI
   * @throws {Error} When the description text content is null or not accessible
   */
  async getDecisionPathDescriptionText(id: string): Promise<string> {
    await this.page.locator(this.selector_decisionPathDescription(id)).isVisible();
    const text = await this.page.locator(this.selector_decisionPathDescription(id)).textContent();

    if (text === null) {
      throw new Error(
        `ScenarioPanelPOM: Decision path description text content is null for id "${id}". Selector: ${this.selector_decisionPathDescription(id)}`
      );
    }

    return text;
  }

  /**
   * @desc Gets the checked state of a specific decision path checkbox,
   * reflecting currentDecisionPathStates[decisionPath.id] (defaults to true)
   * @param {string} id - The decision path ID
   * @returns {Promise<boolean>} True if the checkbox is checked
   */
  async isDecisionPathCheckboxChecked(id: string): Promise<boolean> {
    return await this.page.locator(this.selector_decisionPathCheckbox(id)).isChecked();
  }

  /**
   * @desc Gets CSS classes on the decision path label to determine its enabled/disabled
   * visual state (blue vs gray styling)
   * @param {string} id - The decision path ID
   * @returns {Promise<string>} The full class attribute string of the decision path item element
   * @throws {Error} When the class attribute is not accessible
   */
  async getDecisionPathItemClassList(id: string): Promise<string> {
    await this.page.locator(this.selector_decisionPathItem(id)).isVisible();
    const classList = await this.page.locator(this.selector_decisionPathItem(id)).getAttribute('class');

    if (classList === null) {
      throw new Error(
        `ScenarioPanelPOM: Decision path item class attribute is null for id "${id}". Selector: ${this.selector_decisionPathItem(id)}`
      );
    }

    return classList;
  }

  /**
   * @desc Counts the total number of decision path checkbox inputs rendered in the list
   * @returns {Promise<number>} The count of decision path checkbox elements
   */
  async getDecisionPathCheckboxCount(): Promise<number> {
    return await this.page.locator(this.selector_allDecisionPathCheckboxes).count();
  }

  /**
   * @desc Gets a list of all decision path name texts rendered in the panel
   * @returns {Promise<string[]>} Array of decision path name texts exactly as they appear
   */
  async getAllDecisionPathNameTexts(): Promise<string[]> {
    const nameElements = this.page.locator(this.selector_allDecisionPathNames);
    const count = await nameElements.count();
    const names: string[] = [];

    for (let i = 0; i < count; i++) {
      const text = await nameElements.nth(i).textContent();
      names.push(text ?? '');
    }

    return names;
  }
}