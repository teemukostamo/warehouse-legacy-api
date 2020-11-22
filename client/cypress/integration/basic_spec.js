/* eslint-disable no-undef */
describe('client ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('front page can be opened', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Happy coding!');
  });
});
