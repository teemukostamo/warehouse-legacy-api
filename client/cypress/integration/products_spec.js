/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-undef */

describe('Product lists load', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
  });

  it('Accessories page can be opened & data has loaded in 10 seconds', function () {
    cy.contains('Accessories').click();

    cy.url().should('include', '/accessories');

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
    cy.get('.product-colors>div')
      .children()
      .should('have.attr', 'stroke', 'currentColor');
    cy.get('.product-price').contains(/[0-9]*,[0-9]*€/);
  });

  it('Jackets page can be opened & data has loaded in 10 seconds', function () {
    cy.contains('Jackets').click();

    cy.url().should('include', '/jackets');

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
    cy.get('.product-colors>div')
      .children()
      .should('have.attr', 'stroke', 'currentColor');
    cy.get('.product-price').contains(/[0-9]*,[0-9]*€/);
  });

  it('Shirts page can be opened & data has loaded in 10 seconds', function () {
    cy.contains('Jackets').click();

    cy.url().should('include', '/jackets');

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
    cy.get('.product-colors>div')
      .children()
      .should('have.attr', 'stroke', 'currentColor');
    cy.get('.product-price').contains(/[0-9]*,[0-9]*€/);
  });
});
