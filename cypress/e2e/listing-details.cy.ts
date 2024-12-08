describe('Listing Details Page', () => {
  beforeEach(() => {
    // First visit listings page to get a valid ID
    cy.visit('/listings');
    // cy.get('[data-testid="listing-card"]').first().click();
    cy.injectAxe();
  });

  // it('should load the listing details page', () => {
  //   cy.get('[data-testid="listing-details"]').should('exist');
  //   cy.get('[data-testid="listing-title"]').should('be.visible');
  // });

  it('should have no accessibility violations', () => {
    cy.checkA11y();
  });

  // it('should show contact form', () => {
  //   cy.get('[data-testid="contact-form"]').should('be.visible');
  // });
});
