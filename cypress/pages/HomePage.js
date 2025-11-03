class HomePage {

    // Selectors
    logoSelector = 'a[href="/"] img';
    signupLoginSelector = 'Signup / Login';
    searchProductInputSelector = '#search_product';
    submitSearchButtonSelector = '#submit_search';

    // Actions
    visitHomePage() {
        cy.visit('/');
    }

    get getLogo() {
        return cy.get(this.logoSelector).first();
    }

    goToSignupLogin() {
        cy.contains(this.signupLoginSelector).click();
    }

    searchProduct(product) {
        cy.get(this.searchProductInputSelector).clear().type(product);
        cy.get(this.submitSearchButtonSelector).click();
    }
}

export default new HomePage();