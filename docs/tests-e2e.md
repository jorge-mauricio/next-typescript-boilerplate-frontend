### E2E Testing

#### Running Tests

**Recommended:**
```bash
# Run with dev server / headless
npm run test:e2e:headless
```
Note: If the test doesn't run, turn down the dev server.

**Further test commands:**
```bash
# Open Cypress UI
npm run cypress

# Run tests headless
npm run cypress:headless

# Run with dev server
npm run test:e2e
```

#### Test Structure

Tests are located in the `cypress/e2e` directory. Each test file follows this pattern:
```typescript
describe('Component Name', () => {
  beforeEach(() => {
    cy.visit('/path');
    cy.injectAxe();
  });

  it('should [expected behavior]', () => {
    // Test code
  });

  it('should have no accessibility violations', () => {
    cy.checkA11y();
  });
});
```

#### Test Files Organization
```
cypress/
├── e2e/                 # Test files
│   ├── listings.cy.ts
│   └── listing-details.cy.ts
├── fixtures/            # Test data
├── support/            # Support files
│   ├── commands.ts     # Custom commands
│   └── e2e.ts         # Global configuration
└── cypress.config.ts   # Cypress configuration
```

#### Writing Tests

Components should include data-testid attributes for testing:
```typescript
<div data-testid="listing-card">
```

Use data-testid in tests:
```typescript
cy.get('[data-testid="listing-card"]').should('exist');
```

#### Accessibility Testing

Every page test should include accessibility checks:
```typescript
it('should have no accessibility violations', () => {
  cy.checkA11y();
});
```
