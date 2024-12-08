let isAccountCreated = false;

describe("SAUCE_DEMO", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  it("Register", () => {
    if (!isAccountCreated) {
      cy.get(".panel > .header > :nth-child(3) > a").click();
      cy.get("#firstname").type("Juan");
      cy.get("#lastname").type("Carlos");
      cy.get("#email_address").type("ichsanup@gmail.com");
      cy.get("#password").type("Password123");
      cy.get("#password-confirmation").type("Password123");
      cy.get(
        "#form-validate > .actions-toolbar > div.primary > .action"
      ).click();

      isAccountCreated = true;
    } else {
      cy.log("Account already created. Skipping signup.");
    }
  });

  it("Sign Out", () => {
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-name > .action"
    ).click();
    cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a"
    ).click();
    cy.wait(3000);
  });
});
