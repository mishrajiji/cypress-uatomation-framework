class SA_Step_2_PO {
  selLangRadioBtn() {
    cy.get("label[for='lang_test-2']").click();
  }
  selExamRadioBtn() {
    cy.get("label[for='entrance_test-2']").click();
  }

  clickNextBtn() {
    cy.xpath("//button[normalize-space()='Next']").click();
  }

  secondStepSubmissionMinIp() {
    this.selLangRadioBtn();
    this.selExamRadioBtn();
    this.clickNextBtn();
  }
}
export default SA_Step_2_PO;
