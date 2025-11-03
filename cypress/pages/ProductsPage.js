class ProductsPage {
    // Selectors
    productsListSelector = '.features_items';
    productSelector = '.single-products';
    viewProductSelector = 'a[href*="/product_details/"]';
    searchProductInputSelector = '#search_product';
    submitSearchSelector = '#submit_search';
    searchedProductsSelector = '.features_items';

    // Actions
    verifyProductsPageVisible() {
        cy.url().should('include', '/products');
        cy.get(this.productsListSelector).should('be.visible');
    }

    verifyProductsList() {
        cy.get(this.productSelector).should('have.length.greaterThan', 0);
    }

    clickViewFirstProduct() {
        cy.get(this.viewProductSelector).first().click();
    }

    searchProduct(productName) {
        cy.get(this.searchProductInputSelector).type(productName);
        cy.get(this.submitSearchSelector).click();
    }

    verifySearchedProducts() {
        cy.get(this.searchedProductsSelector).should('be.visible');
        cy.get(this.productSelector).should('have.length.greaterThan', 0);
    }
}

export default new ProductsPage();