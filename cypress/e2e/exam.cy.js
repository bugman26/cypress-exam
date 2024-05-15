import LandingPage from "../pageobjects/landing-page";
import RegistrationPage from "../pageobjects/registration-page";
import LifetimeMembershipClubPage from "../pageobjects/lifetime-membership-club-page";
import ProjectsPage from "../pageobjects/projects-page";

const lp = new LandingPage();
const rp = new RegistrationPage();
const lmcp = new LifetimeMembershipClubPage();
const pp = new ProjectsPage();

describe('Exam Steps Feature', () => {
  it('Exam Steps', () => {

    //STEP 1
    cy.visit('https://www.way2automation.com/demo.html#');

    cy.fixture('exam.json').then((data) => {
      //STEP 2
      lp.logCategoriesAndActions();
      //STEP 3
      lp.visitTheURLOfActionsItem("Submit Button Clicked");
      //STEP 4 to 6
      rp.enterName(data.name);
      rp.enterPhone(data.phone)
      rp.enterEmail(data.email);
      rp.enterCity(data.city)
      rp.enterUsername(data.username)
      rp.enterPassword(data.password)
      rp.clickExploreLifeTimeMembership();
      //STEP 7
      lmcp.scrollToThirtyPlusCoursesVideoLibraryFreeAccess();
      //STEP 8 and 9
      lmcp.clickTutorialFromCarousel(data.tutorialCourse);
      //STEP 10
      pp.verifyProjectURLIsCorrect(data.tutorialCourseUrl);
      // //STEP 11 and 13
      pp.navigateToProjectLesson(data.lessonName);
      //STEP 14
      let url = pp.geturl()
      cy.visit(url);
      //STEP 15
      pp.selectPayment(data.paymentMethod);
      //STEP 16
      pp.verifyPaymentPriceIsCorrect(data.paymentPrice)
      //STEP 17 and 18
      pp.clickEnrollInCourseButton();
      //STEP 19
      pp.verifyOrderSummaryIsPresent();
      cy.screenshot();
      //STEP 20-21
      pp.verifyRequiredFieldsHaveErrorMessage();
      cy.screenshot();
    })


  });
});