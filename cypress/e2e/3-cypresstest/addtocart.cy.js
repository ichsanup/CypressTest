const globalvar = require("../../support/Page Object Model/globalvar");

describe("AddtoCart", () => {
  beforeEach(() => {
    // cy.visit("https://magento.softwaretestingboard.com/");
    //call base url from other file
    cy.visit(Cypress.config("baseUrl"));
    //Call command login
    cy.login("ichsanup@gmail.com", "Password123"); //cy.namacommand(isi parameternya)
  });

  it("Success AddtoCart", () => {
    cy.contains("span", "Men").click();
    cy.get('a[title="Argus All-Weather Tank"]').click();
    cy.get("#option-label-size-143-item-168").click(); //size
    cy.get("#option-label-color-93-item-52").click(); //colour
    cy.get("#product-addtocart-button").click();
    cy.wait(3000);

    //Check Out
    cy.get(globalvar.cart).click();
    cy.get(":nth-child(7) > .secondary > .action > span").click();
    cy.get("#cart-450518-qty").clear();
    cy.get("#cart-450518-qty").should("have.value", ""); //empty value
    cy.get("#cart-450518-qty").type("1");
    cy.get(globalvar.btnupdate).click();
    cy.get(".methods > :nth-child(1) > .action").click();
  });
});
