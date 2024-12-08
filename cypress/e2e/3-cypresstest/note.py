"""
describe("My First Test", ()=> {
    it("Visit the page", ()= > {
        cy.visit("https://www.facebook.com/")
        // Untuk mendapatkan karakter yang ada pada halaman tersebut
        // cy.contains("type")
    })

    it("success login", ()= > {
        // //get element ID
        // cy.get("#user-name")
        // //get element by class name
        // cy.get(".user-name")
        // //get element by CSS Selector
        // cy.get('[data-test="username"]')
        cy.get("#username").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get(".submit-button.btn_action").click
        //using title
        cy.get('a[title="Argus All-Weather Tank"]').click(); //a is html tag
    })
})

// describe("My First Test", ()=> {
    //   it("Does not do much!", ()= > {
        // expect(true).to.equal(false)
        // })
    // });
    
"""

"""
describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("https://google.com/");
  });
  //{enter} to enter button on search option
  it("Visit the page", () => {
    cy.get("#APjFqb").type("weather today {enter}"); => function for click {enter}
    cy.get("#wob_tm");
  });
});

"""
