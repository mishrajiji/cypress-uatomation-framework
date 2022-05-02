class SA_Step_3_PO {
  get10thBoard() {
    return cy.get("#leadtenth_board");
  }
  enter10thBoard() {
    cy.xpath(
      "//li[normalize-space()='CBSE - Central Board of Secondary Education']"
    ).click();
  }
  get10thPassYr() {
    return cy.get("#leadtenth_year");
  }
  enter10thPassYr() {
    cy.xpath("//li[normalize-space()='2015']").click();
  }
  enter10thPer(tenthPer) {
    cy.get("#leadtenth_percentage").clear().type(tenthPer);
  }
  get10thSchool(tenthSchoolName) {
    cy.get("#leadtenth_school").type(tenthSchoolName);
  }
  get12thBoard() {
    return cy.get("#leadtwelfth_board");
  }
  enter12thBoard() {
    cy.xpath(
      "//li[normalize-space()='CBSE - Central Board of Secondary Education']"
    ).click();
  }
  get12thPassYr() {
    return cy.get("#leadtwelfth_year");
  }
  enter12thPassYr() {
    cy.xpath("//li[normalize-space()='2017']").click();
  }
  enter12thPer(twelthPer) {
    cy.get("#leadtwelfth_percentage").clear().type(twelthPer);
  }
  enter12thSchool(twelthSchoolName) {
    cy.get("#leadtwelfth_school").type(twelthSchoolName);
  }
  get12thSpecialization() {
    return cy.get("#leadtwelfth_specialization");
  }
  enter12thSpecialization() {
    cy.xpath("//li[normalize-space()='Sciences']").click();
  }

  selPassportRadioBtn() {
    cy.get("label[for='passport-2']").click();
  }
  clickNextBtn() {
    cy.xpath("//button[normalize-space()='Next']").click();
  }

  thirdStepSubmission(
    tenthBoard,
    tenthPer,
    tenthSchoolName,
    twelthBoard,
    twelthPer,
    twelthSchoolName,
    twelthSpecialization
  ) {
    this.get10thBoard().type(tenthBoard);
    this.enter10thBoard();
    this.get10thPassYr().click();
    this.enter10thPassYr();
    cy.get("#leadtenth_percentage").clear().type(tenthPer);
    cy.get("#leadtenth_school").type(tenthSchoolName);
    this.get12thBoard().type(twelthBoard);
    this.enter12thBoard();
    this.get12thPassYr().click();
    this.enter12thPassYr();
    cy.get("#leadtwelfth_percentage").clear().type(twelthPer);
    cy.get("#leadtwelfth_school").type(twelthSchoolName);
    this.get12thSpecialization().type(twelthSpecialization);
    this.enter12thSpecialization();
    this.selPassportRadioBtn();
    this.clickNextBtn();
  }
}
export default SA_Step_3_PO;
