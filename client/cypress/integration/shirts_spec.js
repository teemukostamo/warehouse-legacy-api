/* eslint-disable no-undef */
describe('Shirts list loads', () => {
  it('Shirts page can be opened & data has loaded in 10 seconds', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Shirts').click();

    cy.url().should('include', '/shirts');

    cy.contains('Loading products...');

    // wait for data to fetch
    cy.wait(10000);

    cy.contains('Data fetched on');
    cy.contains('Item#');
    cy.contains('Product Name');
    cy.contains('Manufacturer');
    cy.contains('Availability');
    cy.contains('Color(s)');
    cy.contains('Price');

    cy.get('.product-index').contains(/1 of [0-9]*/);
    cy.get('.product-name').contains(/[A-Za-z]*/);
    cy.get('.product-manufacturer').contains(/[A-Za-z]*/);
    cy.get('.product-availability')
      .children()
      .should('have.attr', 'stroke', 'currentColor');
    cy.get('.product-colors')
      .children()
      .should('have.attr', 'stroke', 'currentColor');
    cy.get('.product-price').contains(/[0-9]*,[0-9]*€/);
  });
});
