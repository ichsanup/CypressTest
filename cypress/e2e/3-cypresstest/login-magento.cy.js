const globalvar = require("../../support/Page Object Model/globalvar");
const loginjson = require("../../fixtures/login.json");

describe("LOGIN", () => {
  beforeEach(() => {
    // cy.visit("https://magento.softwaretestingboard.com/");
    //call base url from other file
    cy.visit(Cypress.config("baseUrl"));
  });

  it("Positive Login", () => {
    cy.get(".panel > .header > .authorization-link > a").click();
    cy.get("#email").type(loginjson.email);
    // cy.get(
    //   ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    // ).type("Password123");
    globalvar.inputPassword("Password123");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2"
    ).click();
    cy.get(".logged-in").should("be.visible");
    cy.wait(3000);

    //Edit Account
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-name > .action"
    ).click();
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a"
    ).click();
    cy.get(
      ".block-dashboard-info > .block-content > .box > .box-actions > .edit > span"
    ).click();
    cy.get("#firstname").type(" Sihabuan");
    // const emailPasswordLoop = ["#change-email", "#change-password"];
    // emailPasswordLoop.forEach((selector) => {
    //   cy.get(selector).click();
    // });
    const toggleEmail = "#change-email";
    const togglePassword = "#change-password";
    for (let i = 0; i < 4; i++) {
      // Change `4` to the number of times you want to toggle
      cy.get(toggleEmail).click();
      cy.get(togglePassword).click();
    }
    cy.get(".action.save.primary").click();
    cy.get(".message-success > div").should("exist"); //expected result
    cy.wait(3000);
  });

  it("Failed Login", () => {
    cy.get(".panel > .header > .authorization-link > a").click();
    // cy.get("#email").type("ichsanpu@gmail.com");
    // cy.get(
    cy.get(globalvar.email).type("ichsanpu@gmail.com"); //using page object model, call the file and initialize the value in the class
    //   ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass"
    // ).type("Password123");
    cy.get(globalvar.password).type("Password123");
    cy.get(
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2"
    ).click();
    cy.get(".message-error.error.message").should("be.visible");
    cy.wait(3000);
  });
});
