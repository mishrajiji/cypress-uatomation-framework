class SA_Step_1_PO {
  getName() {
    return cy.get("#leadname");
  }
  getEmail() {
    return cy.get("#leademail");
  }
  getMobile() {
    return cy.get("#leadphone_no");
  }
  getCity() {
    return cy.get("#leadcity");
  }

  getCourse() {
    return cy.xpath("//input[@id='leadsa_course_group']");
  }
  getSpecialization() {
    return cy.xpath("//input[@id='leadsa_course_mapper_id']");
  }
  clickSubmitBtn() {
    return cy.get("button[class*='btn btn-primary btn']").click();
  }
  enterCity() {
    cy.xpath("//li[normalize-space()='New Delhi']").click();
  }
  enterCourse() {
    cy.xpath("//li[normalize-space()='Bachelors']").click();
  }
  enterSpecialization() {
    cy.xpath("//li[normalize-space()='Sciences']").click();
  }

  firstStepSubmission(name, email, mobile, city, course, specialization) {
    this.getName().type(name);
    this.getEmail().type(email);
    this.getMobile().type(mobile);
    this.getCity().type(city);
    this.enterCity();
    this.getCourse().type(course);
    this.enterCourse();
    this.getSpecialization().type(specialization);
    this.enterSpecialization();
    this.clickSubmitBtn();
  }
}
export default SA_Step_1_PO;
