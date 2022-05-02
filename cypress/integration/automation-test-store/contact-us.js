/// <reference types="Cypress" />

describe("test group contact us form", () => {
  before(function () {
    cy.fixture("user-details").as("user");
  });
  it(
    "should be able to submit contact us form",
    {
      retries: {
        runMode: 3,

        openMode: 3,
      },
    },
    () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href$=contact]")
        .click()
        .then(function (text) {
          cy.log(text.text());
        });
      ////a[contains(@href,'contact')]
      //cy.xpath("//a[contains(@href, 'contact')]").click();

      cy.get("@user").then((user) => {
        cy.get("#ContactUsFrm_first_name").type(user.first_name);
        cy.get("#ContactUsFrm_email").type(user.email);
      });
      cy.get("#ContactUsFrm_enquiry").type("enquiry");
      cy.get("button[title='Submit']").click();
      cy.get(".mb40 > :nth-child(3)").should(
        "have.text",
        "Your enquiry has been successfully sent to the store owner!"
      );

      //cy.log()
      cy.log("logs");
    }
  );
});
