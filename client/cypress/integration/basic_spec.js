/* eslint-disable no-undef */
describe('Front page has title and links ', () => {
  it('front page has title and links', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Warehouse');
    cy.contains('Show me:');
    cy.contains('Accessories');
    cy.contains('Jackets');
    cy.contains('Shirts');
  });
});
