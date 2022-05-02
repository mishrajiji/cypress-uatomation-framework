/// <reference types="Cypress" />

describe("handiling js alert", () => {
  //only
  it("validate text of alert", () => {
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button1").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("validate js alert box when click on ok", () => {
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button4").click({ force: true });
    cy.on("window:confirm", (str) => {
      return true;
    });
    cy.get("#confirm-alert-text").contains("You pressed OK");
  });

  it("validate js alert box when click on cancel", () => {
    //cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");

    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#button4").click({ force: true });
    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get("#confirm-alert-text").contains("You pressed Cancel");
  });

  it("validate js alert box when using stub", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    const stub = cy.stub();

    cy.on("window:confirm", stub);

    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK");
      });
  });
});
