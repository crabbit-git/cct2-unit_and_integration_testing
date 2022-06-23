describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('should update running total on display when a number is pressed', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
  });

  it('should update running total on display when an operation is done', () => {
    cy.get('#number5').click();
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7');
  });

  it('should be able to chain different operations together', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number5').click();
    cy.get('#operator-add').click();
    cy.get('.display').should('contain', '9.5');
  });

  it('should be able to arrive at negative results', () => {
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5.8');
  });

  it('should return valid results for exceptionally large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '99950009999000040000');
  });

  it('should return "Undefined" if user attempts to divide by 0', () => {
    cy.get('#number1').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Undefined');
  });

});
