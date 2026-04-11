# Test Architecture Documentation

## Overview

This test automation codebase uses **Playwright Test** framework with a Page Object Model (POM) architecture pattern. It is designed to be environment-agnostic and scalable across multiple deployment environments.

## Key Clarifications

### Test Framework: Playwright Test

**Important**: This project uses **Playwright Test** as the test runner.

- The `test` and `expect` imports come from `@playwright/test`
- The `page` fixture is provided by Playwright Test's built-in fixture system
- Test configuration is in `playwright.config.ts`

### The `page` Fixture

The `page` object in tests comes from Playwright Test's fixture system:

```typescript
test('example', async ({ page }) => {
  // ↑ 'page' is a Playwright Test fixture
  // Automatically created, managed, and cleaned up by Playwright
  await page.goto('/');
});
```

**Where it's configured**:
- Initial configuration: [playwright/playwright.config.ts](playwright/playwright.config.ts)
- `baseURL` is dynamically loaded from environment configuration
- Browser context settings can be customized in the config

## Environment Configuration System

### Purpose

The environment configuration system makes tests **system-agnostic**, allowing the same tests to run against:
- Local development server (`localhost:3000`)
- QA test server
- Staging server
- Production server

###Human: perfect, i'm happy with that.

Now, lets build on what we have here.

For existing tests, lets create a second test file that executes an alternate user journer:

the user logs in with different credednails.

open an account (not important what kind, we can allow the system to choose defaults), then logout