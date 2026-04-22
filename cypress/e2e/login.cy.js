import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
    cy.get(InventoryPage.title).should('have.text', 'Products');
  });

  it('should show error for invalid credentials', () => {
    cy.login('invalid_user', 'wrong_password');
    cy.get(LoginPage.errorMessage).should('be.visible');
    cy.get(LoginPage.errorMessage).should('contain', 'Username and password do not match');
  });

  it('should show error for locked out user', () => {
    cy.login('locked_out_user', 'secret_sauce');
    cy.get(LoginPage.errorMessage).should('be.visible');
    cy.get(LoginPage.errorMessage).should('contain', 'Sorry, this user has been locked out');
  });

  it('should logout successfully', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.logout();
    cy.url().should('eq', Cypress.config('baseUrl') + '/');
  });
});
