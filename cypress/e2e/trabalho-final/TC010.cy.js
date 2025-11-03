import HomePage from "../../pages/HomePage";

describe('Test Case 10', () => {
    it('Verify Subscription in home page', () => {
        const email = 'jeffersonQA@example.com';

        HomePage.visitHomePage();
        HomePage.getLogo.should('be.visible');
        cy.scrollTo('bottom');
        cy.get('h2').contains('Subscription').should('be.visible');
        cy.get('#susbscribe_email').type(email);
        cy.get('#subscribe').click();
        
        cy.get('.alert-success').should('contain', 'You have been successfully subscribed!');
    });
});