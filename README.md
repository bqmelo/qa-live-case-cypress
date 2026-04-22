# QA Live Case – Cypress

End-to-end test suite for [SauceDemo](https://www.saucedemo.com) built with [Cypress](https://www.cypress.io/).

## Prerequisites

- Node.js 18 or higher

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd qa-live-case-cypress
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the tests

**Headless** (terminal output only):
```bash
npx cypress run
```

**Interactive** (opens the Cypress UI):
```bash
npx cypress open
```

**Chrome browser**:
```bash
npm run cy:run:chrome
```

## Project structure

```
cypress/
  e2e/            # Test specs
  pages/          # Pages
  support/
    commands.js   # Custom commands
    e2e.js        # Support file loaded before each spec
```