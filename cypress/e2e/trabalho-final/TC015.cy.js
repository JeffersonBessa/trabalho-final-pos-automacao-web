import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import AccountPage from "../../pages/AccountPage";

describe('Test Case 15', () => {
    it('Place Order: Register before Checkout', () => {
        const user = {
            name: 'Jefferson QA',
            email: `jefferson.qa+${Date.now()}@example.com`,
            password: 'Pass@1234'
        };

        HomePage.visitHomePage();
        HomePage.getLogo.should('be.visible');
        HomePage.goToSignupLogin();
        LoginPage.signup(user.name, user.email);
        
        SignupPage.fillInForm(
            user.password,
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
        );
        SignupPage.submitForm();
        
        AccountPage.verifyAccountCreated();
        AccountPage.clickContinue();
        AccountPage.verifyLoggedInAs(user.name);
        
        cy.contains('Add to cart').first().click();
        cy.contains('Continue Shopping').click();
        cy.contains('Cart').click();
        cy.get('.btn-default.check_out').click();
        
        cy.get('.checkout-information').should('be.visible');
        cy.get('.form-control').type('Test order comment');
        cy.contains('Place Order').click();
        
        cy.get('[data-qa="name-on-card"]').type('Jefferson QA');
        cy.get('[data-qa="card-number"]').type('4111111111111111');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('[data-qa="expiry-month"]').type('12');
        cy.get('[data-qa="expiry-year"]').type('2025');
        cy.get('[data-qa="pay-button"]').click();
        cy.get('[data-qa="order-placed"]').should('be.visible');
        
        AccountPage.deleteAccount();
        AccountPage.verifyAccountDeleted();
        AccountPage.clickContinue();
    });
});