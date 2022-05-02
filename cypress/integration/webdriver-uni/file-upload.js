/// <reference types="Cypress" />

describe("file upload", () => {
  //only
  it("upload png file", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.fixture("GAURAV.jpeg", "base64").then((fileContent) => {
      cy.get("#myFile").attachFile(
        {
          fileContent,
          fileName: "GAURAV.jpeg",
          mime: "image / jpeg",
        },
        {
          uploadType: "input",
        }
      );
    });
    cy.get("#submit-button").click();
  });

  it("upload no file", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#submit-button").click();
  });
});
