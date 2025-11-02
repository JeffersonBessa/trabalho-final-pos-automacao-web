class AccountPage {
   
    // Selectors
    accountCreatedSelector = 'h2[data-qa="account-created"]';
    continueButtonSelector = 'a[data-qa="continue-button"]';
    loggedInAsSelector = 'li > a > b';
    logoutSelector = 'a[href="/logout"]';

    // Actions
    verifyAccountCreated() {
        cy.url().should('include', '/account_created');
        cy.get(this.accountCreatedSelector).should('contain', 'Account Created!');
    }
    
    clickContinue() {
        cy.get(this.continueButtonSelector).click();
    }

    verifyLoggedInAs(username) {
        cy.get(this.loggedInAsSelector).should('have.text', username);
    }

    logout() {
        cy.get(this.logoutSelector).click();
    }
}

export default new AccountPage();