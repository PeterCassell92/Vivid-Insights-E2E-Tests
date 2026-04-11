# Page Object Models (POMs)

This directory contains Page Object Models for the example banking application. POMs encapsulate all selectors and user interactions for each page, providing a clean interface for writing tests.

## Philosophy

The Page Object Model pattern:
- **Encapsulates selectors**: All element selectors are defined privately within the POM
- **Provides action methods**: Public methods represent user actions (e.g., `clickDepositButton()`)
- **Improves maintainability**: If the UI changes, only the POM needs updating, not every test
- **Enhances readability**: Tests read like user stories rather than technical implementations