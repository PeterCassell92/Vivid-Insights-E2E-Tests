# Vivid Insights Financial Projections - E2E Tests

End-to-end test suite for the [Vivid Insights Financial Projections](https://github.com/PeterCassell92/FinancialProjection) application, built with **Playwright** and **TypeScript** using the **Page Object Model (POM)** architecture pattern.

## Prerequisites

- **Node.js** (v18+)
- **Yarn** (v4.9+) — this project uses Yarn Berry via `.yarnrc.yml`
- The Financial Projections application running locally (default: `http://localhost:3000`)

> **Note:** On some Linux systems (e.g. Ubuntu), `yarn` may resolve to `cmdtest`. Use `yarnpkg` instead, or install Yarn via `corepack enable`.

## Getting Started

```bash
# Install dependencies
yarn install

# Install Playwright browsers
yarn playwright install

# Run all tests
yarn test
```

## Project Structure

```
├── POMs/                       # Page Object Models (~70+ components)
│   ├── LeftSidebarPOM.ts       # Sidebar navigation
│   ├── DashboardPagePOM.ts     # Dashboard interactions
│   ├── AccountsPagePOM.ts      # Accounts management
│   ├── TransactionsPagePOM.ts  # Transactions views
│   ├── TripsYearViewPagePOM.ts # Trips year grid
│   └── ...                     # Full component coverage
├── playwright/
│   ├── tests/                  # Test specifications (.spec.ts)
│   └── playwright.config.ts    # Playwright configuration
├── config/
│   ├── environment.ts          # Environment config loader
│   └── environments.template.json  # Template for env-specific settings
├── utils/
│   └── pageUtils.ts            # Shared page interaction utilities
└── types/
    └── global.d.ts.old         # Legacy type definitions
```

## Running Tests

| Command | Description |
|---------|-------------|
| `yarn test` | Run all tests (headless) |
| `yarn test:headed` | Run tests with visible browser |
| `yarn test:ui` | Interactive UI mode for debugging |
| `yarn test:debug` | Step-through debug mode |
| `yarn test:report` | View the HTML test report |
| `yarn test:codegen` | Launch Playwright codegen recorder |

### Running Specific Tests

```bash
# Run a single test file
yarn test playwright/tests/trips-month-backward-navigation.spec.ts

# Run tests matching a name pattern
cd playwright && npx playwright test -g "navigate backward"
```

## Environment Configuration

Tests support multiple environments via the `TEST_ENV` variable. Copy the template and fill in your credentials:

```bash
cp config/environments.template.json config/environments.json
```

Then run against a specific environment:

```bash
TEST_ENV=qa yarn test
```

Available environments: `dev` (default), `qa`, `staging`, `prod`.

> **Important:** `config/environments.json` is gitignored — never commit credentials.

## Architecture

### Page Object Model (POM)

All UI interactions are encapsulated in POM classes under `POMs/`. Tests never query the page directly — they call POM methods instead. This means:

- **UI changes** only require updating the relevant POM, not every test
- **Tests read like user stories**, not implementation details
- **Selectors are private** to the POM; public methods represent user actions

### Test Conventions

- Descriptive test names that explain the user journey
- **Arrange-Act-Assert** pattern in every test
- All element interactions go through POMs
- Explicit `expect()` assertions with clear expected outcomes

## TypeScript

```bash
# Full type-check
yarn tsc:build

# Generate .d.ts declarations for POMs only (used by TestNexus tooling)
yarn tsc:pomtypes
```

## Tooling

This project is scaffolded and maintained with the help of [TestNexus](https://github.com/TestNexusOfficial), an MCP-based test automation toolchain that generates POMs, writes test cases, and manages the test graph database. See [.testnexus.config.json](.testnexus.config.json) for the linked application configuration.

## License

Private repository — not licensed for redistribution.
