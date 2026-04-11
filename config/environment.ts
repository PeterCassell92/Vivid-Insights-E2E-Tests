/**
 * Environment Configuration Module
 *
 * This module provides environment-specific configuration for tests including:
 * - Base URLs for different environments (dev, qa, staging, prod)
 * - API endpoints
 * - User credentials for authentication
 *
 * Usage:
 *   Set TEST_ENV environment variable to select environment:
 *   TEST_ENV=qa npx playwright test
 *
 * Future: This will integrate with TestNexusMCP for centralized configuration
 * and encrypted credential management.
 */

import * as fs from 'fs';
import * as path from 'path';

export interface User {
  username: string;
  password: string;
}

export interface EnvironmentConfig {
  baseURL: string;
  apiURL: string;
  users: {
    testUser: User;
    adminUser: User;
    [key: string]: User;
  };
}

export interface Environments {
  dev: EnvironmentConfig;
  qa: EnvironmentConfig;
  staging: EnvironmentConfig;
  prod: EnvironmentConfig;
  [key: string]: EnvironmentConfig;
}

/**
 * Load environment configurations from JSON file
 */
function loadEnvironments(): Environments {
  const configPath = path.join(__dirname, 'environments.json');
  const configFile = fs.readFileSync(configPath, 'utf-8');
  return JSON.parse(configFile);
}

/**
 * Get the current environment name from TEST_ENV environment variable
 * Defaults to 'dev' if not set
 */
export function getCurrentEnvironment(): string {
  return process.env.TEST_ENV || 'dev';
}

/**
 * Get configuration for the current environment
 */
export function getConfig(): EnvironmentConfig {
  const environments = loadEnvironments();
  const currentEnv = getCurrentEnvironment();

  if (!environments[currentEnv]) {
    throw new Error(
      `Environment '${currentEnv}' not found in configuration. ` +
      `Available environments: ${Object.keys(environments).join(', ')}`
    );
  }

  return environments[currentEnv];
}

/**
 * Get a specific user's credentials from the current environment
 */
export function getUser(userType: string = 'testUser'): User {
  const config = getConfig();

  if (!config.users[userType]) {
    throw new Error(
      `User type '${userType}' not found in ${getCurrentEnvironment()} environment. ` +
      `Available users: ${Object.keys(config.users).join(', ')}`
    );
  }

  return config.users[userType];
}

/**
 * Get the base URL for the current environment
 */
export function getBaseURL(): string {
  return getConfig().baseURL;
}

/**
 * Get the API URL for the current environment
 */
export function getApiURL(): string {
  return getConfig().apiURL;
}

// Log current environment on module load
console.log(`🌍 Test Environment: ${getCurrentEnvironment()}`);
console.log(`🔗 Base URL: ${getBaseURL()}`);
