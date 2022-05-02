describe("verify autocomplete dropdown", () => {
  //only
  it("select specific element in autocomplete dropdwon", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myInput").type("A");

    cy.get("#myInputautocomplete-list >*")
      .each(($el, index, $list) => {
        const prod = $el.text();
        const prodToSelect = "Avacado";

        if (prod === prodToSelect) {
          //$el.click();
          $el.trigger("click");

          cy.get("#submit-button").click();
          cy.url().should("include", prodToSelect);
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");

        cy.get("#myInputautocomplete-list >*").each(($el, index, $list) => {
          const prod = $el.text();
          const prodToSelect = "Grapes";

          if (prod === prodToSelect) {
            //$el.click();
            $el.trigger("click");

            cy.get("#submit-button").click();
            cy.url().should("include", prodToSelect);
          }
        });
      });
  });
});
