class InventoryPage {
  get title() { return '.title'; }
  get inventoryItem() { return '.inventory_item'; }
  get cartBadge() { return '.shopping_cart_badge'; }
  get cartLink() { return '.shopping_cart_link'; }
  get menuButton() { return '#react-burger-menu-btn'; }
  get logoutLink() { return '#logout_sidebar_link'; }

  addItemToCart(itemName) {
    cy.contains(this.inventoryItem, itemName).find('button').click();
  }

  removeItemFromCart(itemName) {
    cy.contains(this.inventoryItem, itemName).find('button').click();
  }

  openCart() {
    cy.get(this.cartLink).click();
  }

  logout() {
    cy.get(this.menuButton).click();
    cy.get(this.logoutLink).click();
  }
}

export default new InventoryPage();
