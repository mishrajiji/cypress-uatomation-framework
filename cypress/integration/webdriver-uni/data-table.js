/// <reference types="Cypress" />
describe("handling data-table", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("calculate and assert the totla of all users", () => {
    var userDeatils = [];
    let num = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDeatils[index] = $el.text();
      })
      .then(() => {
        var i;
        for (i = 0; i < userDeatils.length; i++) {
          if (Number(userDeatils[i])) {
            num += Number(userDeatils[i]);
          }

          //cy.log(userDeatils[i]);
        }
        cy.log(num);
        expect(num).to.eq(322);
      });
  });

  it("calculate and assert the age of users on the basis of last nam", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (age) {
            const userAge = age.text();
            expect(userAge).to.equal("80");
          });
      }
    });
  });
});
