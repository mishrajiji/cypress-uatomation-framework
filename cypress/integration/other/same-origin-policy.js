/// <reference types="Cypress" />

describe("cypress web security", () => {
  //only
  it("navigate two different domain", () => {
    cy.visit("https://automationteststore.com/");
    cy.visit("https://webdriveruniversity.com/");
  });

  it("validate two different domain via user action", () => {
    cy.visit("https://webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
});
