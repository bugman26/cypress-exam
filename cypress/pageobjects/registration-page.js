class RegistrationPage {

    elements = {
        field: (fieldName) => cy.get("input[name='" + fieldName + "']"),
        exploreMembershibLink: () => cy.contains("EXPLORE LIFETIME MEMBERSHIP"),
        lifetimeMembershipClubHeader: () => cy.get("div[data-id='1335ab6']")
    }

    enterName(name) {
        this.elements.field("name").clear();
        this.elements.field("name").type(name);
    }

    enterPhone(phone) {
        this.elements.field("phone").clear();
        this.elements.field("phone").type(phone);
    }

    enterEmail(email) {
        this.elements.field("email").clear();
        this.elements.field("email").type(email);
    }

    enterCity(city) {
        this.elements.field("city").clear();
        this.elements.field("city").type(city);
    }

    enterUsername(username) {
        this.elements.field("username").eq(1).clear({ force: true });
        this.elements.field("username").eq(1).type(username, { force: true });
    }

    enterPassword(password) {
        this.elements.field("password").eq(1).clear({ force: true });
        this.elements.field("password").eq(1).type(password, { force: true });
    }

    clickExploreLifeTimeMembership() {
        this.elements.exploreMembershibLink().click({ force: true });
        this.elements.lifetimeMembershipClubHeader({ timeout: 10000 }).should('be.visible');
    }

}
export default RegistrationPage;

