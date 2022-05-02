class Thank_You_PO {
  clickAskAQue() {
    cy.get("#js-ask-a-question").click();
  }
  submitQue(que) {
    cy.get("#js-ask-a-question").click();
    cy.xpath("//textarea[@placeholder='Ask a question']").click().type(que);
    cy.get("#js-ask-a-question-submit").click();
    cy.get(".thankyou-modal-container .close-btn").click();
  }
}
export default Thank_You_PO;
