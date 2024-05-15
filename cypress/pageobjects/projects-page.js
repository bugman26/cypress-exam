class ProjectsPage {


    url = "";

    geturl() {
        return this.url
    }

    seturl(url) {
        this.url = url;
    }


    verifyProjectURLIsCorrect(expectedURL) {
        this.seturl(expectedURL);
        cy.origin(expectedURL, { args: { expectedURL } }, ({ expectedURL }) => {
            cy.url().should('eq', expectedURL)
        })
    }


    navigateToProjectLesson(lessonName) {
        let elementFound = false;

        cy.origin(this.geturl(), { args: { lessonName } }, ({ lessonName }) => {
            cy.contains(lessonName).then($element => {
                if ($element.length > 0) {
                    cy.wrap($element).parents('.section-item').find('a').click({ force: true });
                    elementFound = true;
                } else {
                    cy.get("#more_lecture_sections").click({ force: true });
                }
            })
        })
    }

    selectPayment(paymentMethod) {
        cy.origin(this.geturl(), { args: { paymentMethod } }, ({ paymentMethod }) => {
            cy.get("label.checkout-button-group").contains(paymentMethod).click();

        })
    }

    verifyPaymentPriceIsCorrect(paymentPrice) {
        cy.origin(this.geturl(), { args: { paymentPrice } }, ({ paymentPrice }) => {
            cy.get("label.active").find("span.default-product-price").invoke('text').then(actualText => {
                expect(actualText.trim()).to.equal(paymentPrice);
            });
        })

    }

    clickEnrollInCourseButton() {
        cy.origin(this.geturl(), () => {
            cy.get("#enroll-button").click();
            cy.get("#enroll-button").invoke('text').then(actualText => {
                expect(actualText.trim()).to.equal('Processing...');
            })
        })
    }

    verifyOrderSummaryIsPresent() {
        cy.origin(this.geturl(), () => {
            cy.get("[data-testid='order-summary-section']").should('be.visible');
        })
    }

    verifyRequiredFieldsHaveErrorMessage() {
        cy.origin(this.geturl(), () => {
            cy.get('input[required]').each(($requiredField) => {
                cy.wrap($requiredField).should('be.visible');
                cy.wrap($requiredField).click();
                cy.get('body').click();
                cy.get("span[role='alert']").should('have.attr', 'data-testid', 'error')
                cy.reload();
            })
        })
    }


}

export default ProjectsPage