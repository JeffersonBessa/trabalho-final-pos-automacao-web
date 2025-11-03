import HomePage from "../../pages/HomePage";
import ContactUsPage from "../../pages/ContactUsPage";

describe('Test Case 6', () => {
    it('Contact Us Form', () => {
        const contactData = {
            name: 'Jefferson QA',
            email: 'jefferson.qa@example.com',
            subject: 'Test Subject',
            message: 'This is a test message for an automation test'
        };

        HomePage.visitHomePage();
        HomePage.getLogo.should('be.visible');
    
        cy.contains('Contact us').click();
        ContactUsPage.verifyContactUsPageVisible();
        ContactUsPage.fillContactForm(
            contactData.name,
            contactData.email,
            contactData.subject,
            contactData.message
        );
        
        ContactUsPage.uploadFile('cypress/fixtures/example.json');
        ContactUsPage.acceptAlert();
        ContactUsPage.submitForm();
        ContactUsPage.verifySuccessMessage();
        ContactUsPage.clickHomeButton();
        
        HomePage.getLogo.should('be.visible');
    });
});