/**
 * Test: Trips Month View - Backward Navigation
 *
 * Verifies that a user can navigate to the trips page, enter a month detail view,
 * and navigate backwards through months using the previous month link.
 *
 * @test-writing-version 1.0.0
 * @generated-date 2026-04-11T12:20:00Z
 * @profile default
 */

import { test, expect } from '@playwright/test';
import { LeftSidebarPOM } from '../../POMs/LeftSidebarPOM';
import { TripsYearViewPagePOM } from '../../POMs/TripsYearViewPagePOM';
import { TripsMonthViewPagePOM } from '../../POMs/TripsMonthViewPagePOM';

test.describe('Feature: Trips Month Backward Navigation', () => {

  test('should navigate backward through months from April to January', async ({ page }) => {
    // Step 1: Navigate to the trips year view
    await page.goto('/trips');

    // Step 2: Verify the year view page is visible
    const yearViewPage = await TripsYearViewPagePOM.getPOM(page);
    expect(await yearViewPage.isTripsYearGridVisible()).toBe(true);

    // Step 3: Click April 2026 month box to navigate to the month detail view
    await yearViewPage.clickMonthBox('2026-04');

    // Step 4: Verify the month view page is visible and the calendar has loaded
    const monthViewPage = await TripsMonthViewPagePOM.getPOM(page);
    expect(await monthViewPage.isCalendarWrapperVisible()).toBe(true);

    // Step 5: Verify the month title reads "April 2026"
    expect(await monthViewPage.getMonthTitleText()).toBe('April 2026');

    // Step 6-8: Click previous month and verify navigation to March 2026
    await monthViewPage.clickPrevMonthLink();
    await expect(page).toHaveURL(/\/trips\/2026-03/);
    const marchPage = await TripsMonthViewPagePOM.getPOM(page);
    expect(await marchPage.getMonthTitleText()).toBe('March 2026');

    // Step 9-11: Click previous month and verify navigation to February 2026
    await marchPage.clickPrevMonthLink();
    await expect(page).toHaveURL(/\/trips\/2026-02/);
    const febPage = await TripsMonthViewPagePOM.getPOM(page);
    expect(await febPage.getMonthTitleText()).toBe('February 2026');

    // Step 12-14: Click previous month and verify navigation to January 2026
    await febPage.clickPrevMonthLink();
    await expect(page).toHaveURL(/\/trips\/2026-01/);
    const janPage = await TripsMonthViewPagePOM.getPOM(page);
    expect(await janPage.getMonthTitleText()).toBe('January 2026');
  });
});
