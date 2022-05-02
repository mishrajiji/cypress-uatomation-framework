class OTP_PO {
  enterOTP() {
    cy.xpath("//input[contains(@name,'otp')][1]").click().type("1");
    cy.xpath("//input[contains(@name,'otp')][2]").click().type("2");
    cy.xpath("//input[contains(@name,'otp')][3]").click().type("3");
    cy.xpath("//input[contains(@name,'otp')][4]").click().type("4");

    cy.xpath("//button[normalize-space()='Submit OTP']").click();
  }
}
export default OTP_PO;
