describe('Listings Page', () => {
  beforeEach(() => {
    cy.visit('/listings');
    cy.injectAxe();
  });

  it('should load the listings page', () => {
    cy.get('h1').should('contain', 'Listings');
    // cy.get('[data-testid="listing-card"]').should('have.length.at.least', 1);
  });

  it('should have no accessibility violations', () => {
    cy.checkA11y();
  });
});
