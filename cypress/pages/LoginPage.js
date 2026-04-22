class LoginPage {
  get usernameInput() { return '[data-test="username"]'; }
  get passwordInput() { return '[data-test="password"]'; }
  get loginButton() { return '[data-test="login-button"]'; }
  get errorMessage() { return '[data-test="error"]'; }

  visit() {
    cy.visit('/');
  }

  fillUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  fillPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  submit() {
    cy.get(this.loginButton).click();
  }

  login(username, password) {
    this.visit();
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }
}

export default new LoginPage();
