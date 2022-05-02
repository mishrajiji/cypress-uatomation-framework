describe("verify checkbox", () => {
  beforeEach(function () {
    cy.log(Cypress.env("name"));
    cy.navigate_to_webuni_homepage();
    cy.navigate_to_webuni_checkbox_page();
  });
  //only
  it("select checkbox", () => {
    //cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");

    cy.get("#checkboxes > :nth-child(1) > input").as("option1");
    cy.get("@option1").check().should("be.checked");
  });

  it("deselct checkbox", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    //cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");

    cy.get(":nth-child(5) > input").uncheck().should("not.be.checked");
  });

  it("multiple checkbox", () => {
    //cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");

    cy.get("input[type='checkbox']")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
