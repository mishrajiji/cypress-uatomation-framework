describe("Test mouse actions", () => {
  //only
  it("scroll element into view", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });

  it("drag and drop", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#draggable").trigger("mousedown", { which: 1 });

    cy.get("#droppable")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  it("double click", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#double-click").dblclick();
  });

  it("hold down the left mouse key on a given item", () => {
    cy.visit("https://webdriveruniversity.com");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($elemnet) => {
        expect($elemnet).to.have.css("background-color", "rgb(0, 255, 0)");
      });
  });
});
