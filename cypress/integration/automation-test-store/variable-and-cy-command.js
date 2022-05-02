/// <reference types="Cypress" />

describe("variable, cypress command and jquery command", () => {
  it("navigated to specific product page", () => {
    cy.visit("https://automationteststore.com/");

    //pass
    // const makeupLink = cy
    //   .get("a[href*='product/category&path']")
    //   .contains("Makeup");
    // makeupLink.click();
    // const skincareLink = cy
    //   .get("a[href*='product/category&path']")
    //   .contains("Skincare");
    // skincareLink.click();

    // //fail, deatachtched from dom
    // const makeupLink = cy
    //   .get("a[href*='product/category&path']")
    //   .contains("Makeup");
    // const skincareLink = cy
    //   .get("a[href*='product/category&path']")
    //   .contains("Skincare");
    // makeupLink.click();
    // skincareLink.click();

    //recommended
    cy.get("a[href*='product/category&path']").contains("Makeup").click();
    //cy.get("a[href*='product/category&path']")
    //   .contains("Skincare")
    //   .click();

    //incorrect way not working
    // const header = cy.get("h1 .maintext");
    // cy.log(header.text());

    cy.get("h1 .maintext").then((text) => {
      const headerText = text.text();
      cy.log(headerText);
      expect(headerText).is.eq("Makeup");
    });
  });

  it.only("validate property of contact us page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    //use cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    //jquery approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      expect(firstNameText).to.contain("First name");
      cy.log(firstNameText);

      //embedded command
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
