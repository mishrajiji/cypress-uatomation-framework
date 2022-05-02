/// <reference types="Cypress" />

describe("validate webdriveruni links", () => {
  //only
  it("confirm link redirections", () => {
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://webdriveruniversity.com");

    //handling child window
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

    cy.url().should("include", "Contact-Us");

    cy.go("back");
    cy.reload();
    //cy.reload(true); without using cache

    cy.go("forward");
    cy.url().should("include", "Contact-Us");
  });
});
