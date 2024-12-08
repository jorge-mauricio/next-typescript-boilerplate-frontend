describe('Listing Details Page', () => {
  beforeEach(() => {
    cy.visit('/listings/5631');
    cy.injectAxe();
  });

  it('should have no accessibility violations', () => {
    cy.checkA11y(undefined, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa'],
      },
    });
  });
});
