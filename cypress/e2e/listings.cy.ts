describe('Listings Page', () => {
  beforeEach(() => {
    cy.visit('/listings');
    cy.injectAxe();
  });

  it('should load the listings page', () => {
    // NOTE: Prototype shortcut - just to validate the test configuration.
    // Ideally, the tests would be much more extensive and interactive.
    cy.get('h1').should('be.visible');
  });

  it('should have no detectable a11y violations', () => {
    cy.checkA11y(undefined, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa'],
      },
    });
  });
});
