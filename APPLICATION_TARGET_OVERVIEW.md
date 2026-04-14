# Application Target Overview

## Application

**Name:** Financial Projections (Vivid Insights)
**Repository:** [PeterCassell92/Vivid-Account-Insights](https://github.com/PeterCassell92/Vivid-Account-Insights)
**Local path:** `../FinancialProjection/financial-projections`

## What It Does

A personal finance forecasting tool that lets users project their bank balance forward through time. Users track expected expenses and income across a 6-month rolling window, import real bank statements, and compare "what-if" scenarios to make financial decisions.

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript, React 18+ |
| UI | shadcn/ui (Radix UI + Tailwind CSS v4) |
| Database | PostgreSQL 14+ |
| ORM | Prisma |
| State | Redux Toolkit |
| Calendar | FullCalendar |
| Charts | Recharts |
| Validation | Zod |

## How to Run It

The application runs locally at `http://localhost:3000` (API at the same origin under `/api/`).

```bash
cd ../FinancialProjection/financial-projections
yarn dev
```

Requires a running PostgreSQL instance with `DATABASE_URL` configured in `.env.local`.

## Key Features & Pages

### Dashboard (`/`)
- Monthly summary widgets
- Recent transactions widget
- Account summary with balances
- Navigation to all other sections

### Monthly Projections (`/projections/[month]`)
- Calendar-based view of the current month
- Click a day to add expenses or income (projection events)
- Each event has a certainty level: unlikely, possible, likely, certain
- Events marked "unlikely" are excluded from balance calculations
- Actual balance override per day (recalculates forward from that point)
- Scenario panel in the sidebar for toggling decision paths

### Accounts
- Multiple bank accounts
- Account setup modal for creating new accounts
- Account settings modal for editing
- Account detail panel showing history
- Initial balance configuration

### Transactions / Bank Records
- Import bank statements via CSV upload (Halifax format)
- Filterable, paginated transaction records table
- Transaction detail modal
- Category breakdown table and pie chart
- Spending over time chart
- Reprocess CSVs stepper for re-importing

### Recurring Events (Settings)
- Create rules that auto-generate events (daily, weekly, monthly, annual)
- Start/end dates, all standard event fields
- Steady costs manager for fixed recurring expenses
- "This month's events" manager for one-off monthly items

### Trips (`/trips`)
- Year view grid showing all months
- Month view with calendar and trip details
- Trip form for creating/editing trips
- Trip detail modal
- Navigate between months

### Analytics
- Spending analysis and data visualisation
- Category breakdown
- Coverage date range input and visualisation

### Scenario Planning
- Decision paths (e.g. "Buy House" vs "Keep Renting")
- Scenario sets combining multiple decision path states
- Save/load scenarios
- Toggle scenarios on/off to compare outcomes

### Settings
- Currency (GBP/USD), date format (UK/US)
- Default bank account
- Categorisation rules management
- Spending type management
- Full-screen settings modal

### API Documentation (`/api-docs`)
- Built-in Swagger/OpenAPI documentation
- Interactive API explorer (ReactSwagger)

## API Structure

All API routes live under `/api/` and return a standard JSON envelope:

```json
{ "success": true, "data": { ... } }
```

Key endpoint groups:
- `/api/projection-events` — CRUD for financial events
- `/api/recurring-event-rules` — CRUD for recurring rules
- `/api/daily-balance` — Balance queries and actual balance overrides
- `/api/bank-accounts` — Account management
- `/api/settings` — App configuration
- `/api/transaction-records` — Transaction queries and CSV upload
- `/api/spending-types` — Category management
- `/api/decision-paths` — Scenario planning
- `/api/scenario-sets` — Scenario set management

## Testing Considerations

### Component Testability
All components include `data-testid` attributes, which the POMs in this test suite use for element selection.

### Authentication
The application currently has **no authentication** — it is a single-user local app. Tests do not need to handle login flows.

### State Dependencies
- Balance calculations are cumulative and order-dependent. Tests that verify balances must account for existing events.
- Recurring event rules generate events on creation. Tests that create rules will see events appear immediately.
- Actual balance overrides cascade forward. Setting an actual balance on a day recalculates all subsequent days.

### Environment
- Default dev server: `http://localhost:3000`
- Requires a running PostgreSQL database with migrations applied
- Database can be seeded with `npx prisma db seed` for consistent test data
