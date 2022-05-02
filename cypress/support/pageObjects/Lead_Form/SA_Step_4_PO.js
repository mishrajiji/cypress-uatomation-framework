class SA_Step_4_PO {
  clcikStatus() {
    cy.get("#status-0-label").click();
  }
  enterStatus() {
    cy.get("#status-0-label").click();
    cy.xpath("//li[normalize-space()='Interested']").click();
  }
  enterYr() {
    cy.get("#leadstudy_start").click();
    cy.xpath("//li[normalize-space()='2022']").click();
  }
  clickSubmitBtn() {
    cy.xpath("//button[normalize-space()='Submit']").click();
  }

  fourthStepSubmissionMinIp() {
    this.enterStatus();
    this.enterYr();
    this.clickSubmitBtn();
  }
}
export default SA_Step_4_PO;
