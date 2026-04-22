class CheckoutPage {
  get firstNameInput() { return '[data-test="firstName"]'; }
  get lastNameInput() { return '[data-test="lastName"]'; }
  get postalCodeInput() { return '[data-test="postalCode"]'; }
  get continueButton() { return '[data-test="continue"]'; }
  get cancelButton() { return '[data-test="cancel"]'; }
  get finishButton() { return '[data-test="finish"]'; }
  get errorMessage() { return '[data-test="error"]'; }
  get itemName() { return '.inventory_item_name'; }
  get completeHeader() { return '.complete-header'; }

  fillInfo(firstName, lastName, postalCode) {
    cy.get(this.firstNameInput).type(firstName);
    cy.get(this.lastNameInput).type(lastName);
    cy.get(this.postalCodeInput).type(postalCode);
  }

  continue() {
    cy.get(this.continueButton).click();
  }

  cancel() {
    cy.get(this.cancelButton).click();
  }

  finish() {
    cy.get(this.finishButton).click();
  }
}

export default new CheckoutPage();
