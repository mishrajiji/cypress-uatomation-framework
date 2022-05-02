/// <reference types="Cypress" />

describe("iterate over elemets", () => {
  beforeEach(function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
  });

  it("log info of all haircare products", () => {
    //iteration
    cy.get(".fixed_wrapper").each(($el, index, $list) => {
      cy.log(index + " : " + $el.text());
    });
  });

  it("click on specific product of haircare list", () => {
    // cy.get(".fixed_wrapper").each(($el, index, $list) => {
    //   if ($el.text().includes("Eau Parfumee au The Vert Shampoo")) {
    //     //$el.click(); //jquery method
    //     cy.log($el.text());
    //     cy.wrap($el).click();
    //   }
    // });
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });

  it("click on second specific product of haircare list", () => {
    cy.selectProduct("Seaweed Conditioner");
  });
});
