/// <reference types="Cypress" />

describe("alias and invoke", () => {
  it("validate a specidic haircare product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    cy.get(".fixed_wrapper").eq(0).invoke("text").as("productThumbnail");

    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("calculate total of normal and discounted product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get("@productThumbnail")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("discountedPrice");

    var itemTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      var itemPriceTotal = 0;
      var itemPrice = $linkText.split("$");
      console.log(itemPrice);
      for (var i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemPriceTotal += Number(itemPrice[i]);
      }
      itemTotal += itemPriceTotal;
      cy.log("normal price total = " + itemPriceTotal);
    });

    cy.get("@discountedPrice")
      .then(($linkText) => {
        var dicountedPriceTotal = 0;
        var discountedPrice = $linkText.split("$");
        console.log(discountedPrice);
        for (var i = 0; i < discountedPrice.length; i++) {
          cy.log(discountedPrice[i]);
          dicountedPriceTotal += Number(discountedPrice[i]);
        }
        itemTotal += dicountedPriceTotal;
        cy.log("discounted price total = " + dicountedPriceTotal);

        cy.log("total: " + itemTotal);
      })
      .then(() => {
        expect(itemTotal).to.equal(648.5);
      });
  });
});
