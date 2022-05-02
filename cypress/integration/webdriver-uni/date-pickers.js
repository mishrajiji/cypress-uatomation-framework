/// <reference types="Cypress" />

describe("date-picker", () => {
  //only
  it("select date", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });

    cy.get("#datepicker").click();

    // let date = new Date();
    // date.setDate(date.getDate()); // current date
    // cy.log(date.getDate());

    // let date2 = new Date();
    // date2.setDate(date2.getDate() + 5);
    // cy.log(date2.getDate());

    var date = new Date();
    date.setDate(date.getDate() + 1);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });
    var futureDay = date.getDate();

    cy.log(futureYear);
    cy.log(futureMonth);
    cy.log(futureDay);

    function selectMonthAndyear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndyear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndyear();
              }
            });
        });
    }

    function selectFutureDate() {
      cy.get("[class='day']").contains(futureDay).click();
    }
    selectMonthAndyear();
    selectFutureDate();
  });
});
