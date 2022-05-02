import SA_Step_1_PO from "../../support/pageObjects/Lead_Form/SA_Step_1_PO";
import SA_Step_2_PO from "../../support/pageObjects/Lead_Form/SA_Step_2_PO";
import SA_Step_3_PO from "../../support/pageObjects/Lead_Form/SA_Step_3_PO";
import SA_Step_4_PO from "../../support/pageObjects/Lead_Form/SA_Step_4_PO";
import OTP_PO from "../../support/pageObjects/Lead_Form/OTP_PO";
import Thank_You_PO from "../../support/pageObjects/Lead_Form/Thank_You_PO";
import SA_College_Home_PO from "../../support/pageObjects/SA_College/SA_College_Home_PO";
/// <reference types="Cypress" />

describe("SA College Home Page Test Suit", () => {
  //Cypress.config("defaultCommandTimeout", 20000);

  const sA_Step_1_PO = new SA_Step_1_PO();
  const sA_Step_2_PO = new SA_Step_2_PO();
  const sA_Step_3_PO = new SA_Step_3_PO();
  const sA_Step_4_PO = new SA_Step_4_PO();
  const otp_PO = new OTP_PO();
  const thank_You_PO = new Thank_You_PO();
  const sA_College_Home_PO = new SA_College_Home_PO();

  before(function () {
    cy.fixture("SA_User").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  }); //only

  beforeEach(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    sA_College_Home_PO.visitPage();
    //cy.pause();
  });
  it.only("Fill lead through sidebar apply now ", () => {
    sA_College_Home_PO.getSidebarAplyNwBtn().click();
    sA_Step_1_PO.firstStepSubmission(
      data.name,
      data.email,
      data.mobile,
      data.city,
      data.course,
      data.specialization
    );
    sA_Step_2_PO.secondStepSubmissionMinIp();
    sA_Step_3_PO.thirdStepSubmission(
      data.tenthBoard,
      data.tenthPer,
      data.tenthSchoolName,
      data.twelthBoard,
      data.twelthPer,
      data.twelthSchoolName,
      data.twelthSpecialization
    );
    sA_Step_4_PO.fourthStepSubmissionMinIp();
    otp_PO.enterOTP();
    thank_You_PO.submitQue(data.que);
  });

  it("should not be able to submit contact us form", () => {
    contact_Us_PO.contactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "no comments",
      "body",
      "Error: Invalid email address"
    );
  });
});
