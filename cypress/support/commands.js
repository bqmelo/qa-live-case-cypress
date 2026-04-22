import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

Cypress.Commands.add('login', (username, password) => {
  LoginPage.login(username, password);
})

Cypress.Commands.add('addItemToCart', (itemName) => {
  InventoryPage.addItemToCart(itemName);
  cy.get(InventoryPage.cartBadge).should('exist');
})

Cypress.Commands.add('logout', () => {
  InventoryPage.logout();
})
