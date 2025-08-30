describe('ProcessFlowInsights App', () => {
  it('uploads file and shows dashboard', () => {
    cy.visit('/upload');
    cy.get('input[type="file"]').attachFile('sample.csv');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.get('.dashboard').should('exist');
  });
});