/// <reference types="Cypress" />

describe("handling with iframes and modal", () => {
  //only
  it("handle webdriver uni iframe and modal", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#iframe").invoke("removeAttr", "target").click({ force: true });

    cy.get("#frame").then(($iframe) => {
      const body = $iframe.contents().find("body"); // html body tag
      cy.wrap(body).as("iframe"); // wrap up and giving alias

      cy.get("@iframe").find("#button-find-out-more").click();
      cy.get("@iframe").find("#myModal").as("modal"); // alias for modal

      cy.get("@modal").should(($expecedtext) => {
        const text = $expecedtext.text();
        expect(text).to.include("Welcome");
      });
      cy.get("@modal").contains("Close").click();
    });
  });
});
