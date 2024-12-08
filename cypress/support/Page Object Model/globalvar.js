class loginPage {
  email = "#email";
  password = '[title="Password"]';
  cart = ".showcart";
  btnout = '[title="Proceed to Checkout"]';
  email_address = "#customer-email";
  firstname = "#RB2QOX9";
  btnupdate = ".action.update";

  //use function
  inputPassword(pass) {
    cy.get(this.password).type(pass); //(this.value).type(call parameter)
  }

  inputFirstname(first) {
    cy.commandFirstname(this.firstname, first);
  }
}

module.exports = new loginPage();
