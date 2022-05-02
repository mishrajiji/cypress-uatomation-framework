class SA_College_Home_PO {
  getSidebarAplyNwBtn() {
    return cy.xpath("//span[normalize-space()='Apply Now']");
  }
  visitPage() {
    cy.visit(
      "https://s1.collegedunia.com/canada/college/104-university-of-toronto-toronto"
    );
  }
}
export default SA_College_Home_PO;
