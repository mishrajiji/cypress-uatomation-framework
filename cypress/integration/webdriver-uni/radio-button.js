describe("verify radio button", () => {
  //only
  it("select radio button", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#radio-buttons").find("input[type='radio']").first().check();
    cy.get("#radio-buttons").find("input[type='radio']").eq(1).check();
  });

  it("validate state of radio button", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get('input[value = "lettuce"]').should("not.be.checked");
    cy.get('input[value = "pumpkin"]').should("be.checked");
    cy.get('input[value = "cabbage"]').should("be.disabled");
  });
});
