import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
    cy.addItemToCart('Sauce Labs Backpack');
    InventoryPage.openCart();
  });

  it('should complete the checkout flow successfully', () => {
    CartPage.checkout();
    cy.url().should('include', '/checkout-step-one.html');

    CheckoutPage.fillInfo('John', 'Doe', '12345');
    CheckoutPage.continue();

    cy.url().should('include', '/checkout-step-two.html');
    cy.get(CheckoutPage.itemName).should('have.text', 'Sauce Labs Backpack');

    CheckoutPage.finish();
    cy.url().should('include', '/checkout-complete.html');
    cy.get(CheckoutPage.completeHeader).should('have.text', 'Thank you for your order!');
  });

  it('should show error when checkout info is missing', () => {
    CartPage.checkout();
    CheckoutPage.continue();
    cy.get(CheckoutPage.errorMessage).should('be.visible');
    cy.get(CheckoutPage.errorMessage).should('contain', 'First Name is required');
  });

  it('should allow returning to cart from checkout', () => {
    CartPage.checkout();
    CheckoutPage.cancel();
    cy.url().should('include', '/cart.html');
  });
});
