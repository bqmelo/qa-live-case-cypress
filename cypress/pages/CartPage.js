class CartPage {
  get cartItem() { return '.cart_item'; }
  get itemName() { return '.inventory_item_name'; }
  get checkoutButton() { return '[data-test="checkout"]'; }

  checkout() {
    cy.get(this.checkoutButton).click();
  }
}

export default new CartPage();
