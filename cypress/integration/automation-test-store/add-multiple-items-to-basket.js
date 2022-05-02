import AutoStore_HomePage_PO from "../../support/pageObjects/automationTestStore/AutoStore_HomePage_PO";
import AutoStore_HairCare_PO from "../../support/pageObjects/automationTestStore/AutoStore_HairCare_PO";
/// <reference types="Cypress" />

describe("add multiple items to basket", () => {
  const autoStore_HomePage_PO = new AutoStore_HomePage_PO();
  const autoStore_HairCare_PO = new AutoStore_HairCare_PO();

  before(function () {
    cy.fixture("product").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(function () {
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    cy.clearLocalStorage();
    cy.clearCookies();
    autoStore_HomePage_PO.accessHomePage();
    autoStore_HomePage_PO.clickOn_HairCare_Link();
  });

  it("add specific items to  the basket", () => {
    // globalThis.data.productName.forEach(function (element) {
    //   cy.addProductToBasket(element);
    // });
    // cy.get(".dropdown-toggle > .fa").click();
    autoStore_HairCare_PO.addHairCareProdcutsTobasket();
  });
});
