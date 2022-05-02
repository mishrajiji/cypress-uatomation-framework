import HomePage_PO from "../../support/pageObjects/webdriverUni/homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriverUni/Contact_Us_PO";
/// <reference types="Cypress" />

describe("test group contact us form", () => {
  Cypress.config("defaultCommandTimeout", 20000);
  const hompage_PO = new HomePage_PO();
  const contact_Us_PO = new Contact_Us_PO();

  before(function () {
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  }); //only

  beforeEach(function () {
    // cy.visit(
    //   Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html"
    // );
    //const hompage_PO = new HomePage_PO();
    hompage_PO.visitHomepage();
    cy.wait(3000);
    hompage_PO.clickOn_ContactUs_Button();
    //cy.pause();
  });
  it("should be able to submit contact us form", () => {
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.visit("https://webdriveruniversity.com");

    // //handling child window
    // cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });

    //cy documents, and
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    //force
    //cy.get("#contact-us").click({ force: true });

    //cy.title()
    cy.title().should("include", "WebDriver");

    //cy.url()
    cy.url().should("include", "contactus");

    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email);
    // cy.get("textarea.feedback-input").type("no comments");
    // cy.get('[type="submit"]').click();

    // cy.webdriveruni_contact_us_form_submission(
    // Cypress.env("first_name"),
    //   data.last_name,
    //   data.email,
    //   "no comments",
    //   "h1",
    //   "Thank You for your Message!";
    // );

    // const contact_Us_PO = new Contact_Us_PO();
    contact_Us_PO.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "no comments",
      "h1",
      "Thank You for your Message!2"
    );

    //should
    // cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("should not be able to submit contact us form", () => {
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.visit("https://webdriveruniversity.com");
    // cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get("textarea.feedback-input").type("no comments");
    // cy.get('[type="submit"]').click();

    // //contains
    // cy.get("body").contains("Error: all fields are required");
    // const contact_Us_PO = new Contact_Us_PO();
    contact_Us_PO.contactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "no comments",
      "body",
      "Error: Invalid email address"
    );

    // cy.webdriveruni_contact_us_form_submission(
    //   data.first_name,
    //   data.last_name,
    //   " ",
    //   "no comments",
    //   "body",
    //   "Error: Invalid email address"
    // );
  });
});
