class ContactUsPage {
    // Selectors
    getInTouchSelector = 'h2:contains("Get In Touch")';
    nameInputSelector = 'input[data-qa="name"]';
    emailInputSelector = 'input[data-qa="email"]';
    subjectInputSelector = 'input[data-qa="subject"]';
    messageInputSelector = 'textarea[data-qa="message"]';
    uploadFileSelector = 'input[name="upload_file"]';
    submitButtonSelector = 'input[data-qa="submit-button"]';
    successMessageSelector = '.status.alert.alert-success';
    homeButtonSelector = '#form-section a.btn';

    // Actions
    verifyContactUsPageVisible() {
        cy.get(this.getInTouchSelector).should('be.visible');
    }

    fillContactForm(name, email, subject, message) {
        cy.get(this.nameInputSelector).type(name);
        cy.get(this.emailInputSelector).type(email);
        cy.get(this.subjectInputSelector).type(subject);
        cy.get(this.messageInputSelector).type(message);
    }

    uploadFile(filePath) {
        cy.get(this.uploadFileSelector).selectFile(filePath);
    }

    submitForm() {
        cy.get(this.submitButtonSelector).click();
    }

    acceptAlert() {
        cy.on('window:confirm', () => true);
    }

    verifySuccessMessage() {
        cy.get(this.successMessageSelector).should('contain', 'Success! Your details have been submitted successfully.');
    }

    clickHomeButton() {
        cy.get(this.homeButtonSelector).click();
    }
}

export default new ContactUsPage();