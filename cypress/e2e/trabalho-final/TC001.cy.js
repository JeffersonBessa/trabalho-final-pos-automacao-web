import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";

describe('Test Case 1', () => {
    it('Register User', () => {
        HomePage.visitHomePage();
        HomePage.getLogo.should('be.visible');
        cy.title().should('include', 'Automation Exercise');
        
        HomePage.goToSignupLogin();

        const user = {
            name: 'Jefferson QA',
            email: `jefferson.qa+${Date.now()}@example.com`,
            password: 'Pass@1234'
        };

        LoginPage.signup(user.name, user.email);
        SignupPage.fillInForm(
            'password123',
            '1',
            'January',
            '1990',
            'John',
            'Doe',
            '123 Main St',
            'India',
            'Maharashtra',
            'Mumbai',
            '400001',
            '9876543210'
        )
        SignupPage.submitForm();
        cy.url().should('include', '/account_created');
        cy.get('h2[data-qa=account-created]').should('contain', 'Account Created!');
        cy.get('a[data-qa="continue-button"]').click();
        cy.get('li > a > b').should('have.text', user.name);
    })
})