import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

describe('Shopping Cart', () => {
  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce');
  });

  it('should add a product to the cart', () => {
    cy.addItemToCart('Sauce Labs Backpack');
    cy.get(InventoryPage.cartBadge).should('have.text', '1');
  });

  it('should add multiple products to the cart', () => {
    cy.addItemToCart('Sauce Labs Backpack');
    cy.addItemToCart('Sauce Labs Bike Light');
    cy.get(InventoryPage.cartBadge).should('have.text', '2');
  });

  it('should remove a product from the cart', () => {
    cy.addItemToCart('Sauce Labs Backpack');
    InventoryPage.removeItemFromCart('Sauce Labs Backpack');
    cy.get(InventoryPage.cartBadge).should('not.exist');
  });

  it('should display added products on the cart page', () => {
    cy.addItemToCart('Sauce Labs Backpack');
    InventoryPage.openCart();
    cy.url().should('include', '/cart.html');
    cy.get(CartPage.cartItem).should('have.length', 1);
    cy.get(CartPage.itemName).should('have.text', 'Sauce Labs Backpack');
  });
});
