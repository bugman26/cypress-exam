class LifetimeMembershipClubPage {

    elements = {
        carouselCourseTitleAndDescription: () => cy.get("[data-id='dcd562e']"),
    }

    scrollToThirtyPlusCoursesVideoLibraryFreeAccess() {
        this.elements.carouselCourseTitleAndDescription().scrollIntoView();
    }

    clickTutorialFromCarousel(tutoriallName) {
        let elementFound = false;
        cy.contains(tutoriallName).then($element => {
            if ($element.length > 0) {
                cy.wrap($element).parents('.pp-info-box-content').find('a').click();
                elementFound = true;
            } else {
                cy.get("div[aria-label='Next slide']").click();
            }
        })
    }



}

export default LifetimeMembershipClubPage