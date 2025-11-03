class AccountPage {
   
    // Selectors
    accountCreatedSelector = 'h2[data-qa="account-created"]';
    continueButtonSelector = 'a[data-qa="continue-button"]';
     accountDeletedSelector = 'h2[data-qa="account-deleted"]';
    loggedInAsSelector = 'li > a > b';
    deleteAccountSelector = 'a[href="/delete_account"]';
    logoutSelector = 'a[href="/logout"]';

    // Actions
    verifyAccountCreated() {
        cy.url().should('include', '/account_created');
        cy.get(this.accountCreatedSelector).should('contain', 'Account Created!');
    }

    verifyLoggedInAs(username) {
        cy.get(this.loggedInAsSelector).should('have.text', username);
    }

    verifyAccountDeleted() {
        cy.url().should('include', '/delete_account');
        cy.get(this.accountDeletedSelector).should('contain', 'Account Deleted!');
    }

    deleteAccount() {
        cy.get(this.deleteAccountSelector).click();
    }

    clickContinue() {
        cy.get(this.continueButtonSelector).click();
    }

    logout() {
        cy.get(this.logoutSelector).click();
    }
}

export default new AccountPage();