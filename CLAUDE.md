# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a scaffold project test automation codebase for an application. It uses **Playwright** for end-to-end browser testing with a **Page Object Model (POM)** architecture pattern. Tests are written in TypeScript and can run with both Playwright and Jest test runners.

## Project Structure

```
exampleTestCodeBase/
├── POMs/                    # Page Object Models
│   ├── BasePage.ts         # Base class with common utilities
│   ├── LoginPage.ts        # Login page interactions
│   ├── DashboardPage.ts    # Dashboard page interactions
│   ├── AccountsPage.ts     # Accounts page interactions
│   ├── TransactionsPage.ts # Transactions table interactions
│   └── index.ts            # Barrel export file
├── playwright/             # Playwright test directory
│   ├── tests/              # Test specifications (.spec.ts files)
│   └── playwright.config.ts # Playwright configuration
└── utils/                  # Utility modules
    └── pageUtils.ts        # Page interaction utilities
```

## Commands

This project uses **Yarn** as the package manager. Use `yarn` (or `yarnpkg` if `yarn` maps to `cmdtest` on your system).

### Running Tests

```bash
# Run all Playwright tests
yarn test

# Run tests with UI mode (interactive debugging)
yarn test:ui

# Run tests in debug mode (step through tests)
yarn test:debug

# Run tests in headed mode (see browser)
yarn test:headed

# Run specific test file
yarn test playwright/tests/example-deposit-flow.spec.ts

# Run tests matching a pattern
cd playwright && yarn playwright test -g "user can deposit"

# Generate test report
yarn test:report

# Use Playwright codegen for recording interactions
yarn test:codegen
```

### TypeScript Compilation

```bash
# Full TypeScript build (type-check all files)
yarn tsc:build

# Generate .d.ts declaration files for POMs only (scoped, fast)
yarn tsc:pomtypes
```

`tsc:pomtypes` uses `tsconfig.types.json` which is scoped to `POMs/**/*.ts` and emits only declaration files. This is used by TestNexus tools (`retrieve_POM_reference`, `write_specified_test_case`) to extract POM method signatures efficiently.

## Architecture Patterns

### Page Object Model (POM) Architecture

All UI interactions are encapsulated in Page Object Models located in the `POMs/` directory:

### Test Organization

Tests are located in `playwright/tests/` and follow these conventions:

- **Descriptive test names**: Test names clearly describe the user action being tested
- **Arrange-Act-Assert pattern**: Tests follow clear setup, action, and verification steps
- **POM usage**: All element interactions go through POM methods, never direct page queries in tests
- **Explicit expectations**: Each test includes `expect()` assertions with clear expected outcomes

### Application Under Test

Upon first entering this project, you should establish what kind of application, the user is aiming to test.

YOu must then suggest writing an APPLICATION_TARGET_OVERVIEW.md based on the information provided



