# Environment Configuration

This directory contains environment-specific configuration for Playwright tests.

## Architecture Overview

### Current Implementation
- **Framework**: Playwright Test (NOT Jest)
- **Page Fixture**: The `page` object in tests comes from Playwright Test's built-in fixture system
- **Configuration**: Environment-based using `environments.json`

### How It Works

1. **playwright.config.ts** imports `getBaseURL()` to dynamically set the base URL
2. **Tests** import `getUser()` to get environment-specific credentials
3. **Environment selection** via `TEST_ENV` environment variable

## Files

- `environment.ts` - TypeScript module for loading configuration
- `environments.json` - **Active configuration** (gitignored for security)
- `environments.template.json` - Template for creating your own config
- `.gitignore` - Prevents committing sensitive credentials

## Setup

### First Time Setup

1. Copy the template to create your configuration:
   ```bash
   cp environments.template.json environments.json
   ```

2. Edit `environments.json` with your actual credentials:
   ```json
   {
     "dev": {
       "baseURL": "http://localhost:3000",
       "users": {
         "testUser": {
           "username": "hugh",
           "password": "boggie"
         }
       }
     }
   }
   ```

## Usage

### Running Tests Against Different Environments

```bash
# Run against dev (default)
npx playwright test

# Run against QA
TEST_ENV=qa npx playwright test

# Run against staging
TEST_ENV=staging npx playwright test

# Run against production
TEST_ENV=prod npx playwright test
```

### Using Credentials in Tests

```typescript
import { getUser } from '../config/environment';

test('user can login', async ({ page }) => {
  const testUser = getUser('testUser');
  await loginPage.performLogin(testUser.username, testUser.password);
});
```

### Available Helper Functions

```typescript
import {
  getConfig,          // Get entire environment config
  getUser,           // Get user credentials by type
  getBaseURL,        // Get base URL for current environment
  getApiURL,         // Get API URL for current environment
  getCurrentEnvironment  // Get current environment name
} from './environment';
```

## Configuration Schema

```typescript
interface EnvironmentConfig {
  baseURL: string;      // Base URL for the application
  apiURL: string;       // API endpoint URL
  users: {
    testUser: User;     // Standard test user
    adminUser: User;    // Admin user
    [key: string]: User; // Additional custom users
  };
}

interface User {
  username: string;
  password: string;
}
```

## Security Best Practices

1. **Never commit `environments.json`** - It's gitignored for security
2. **Use environment variables** for CI/CD pipelines
3. **Rotate credentials regularly** - Update in all environments
4. **Limit production access** - Only authorized team members

## Future: TestNexusMCP Integration

This configuration system is designed to eventually integrate with **TestNexusMCP** for:

- Centralized configuration management
- Encrypted credential storage
- Dynamic server configuration
- Database-backed environment configs
- Automated credential rotation

The current file-based system is a stepping stone to this architecture.

## Troubleshooting

### Environment not found error
```
Error: Environment 'xyz' not found in configuration
```
**Solution**: Check that the environment exists in `environments.json` or set `TEST_ENV` to a valid environment (dev, qa, staging, prod)

### User type not found error
```
Error: User type 'xyz' not found in dev environment
```
**Solution**: Add the user type to your environment configuration or use an existing type (testUser, adminUser)

### Module not found error
```
Error: Cannot find module './config/environment'
```
**Solution**: Ensure you're running tests from the `playwright/` directory where the config is located
