class ProductDetailPage {
    
    // Selectors
    productNameSelector = '.product-information h2';
    categorySelector = '.product-information p:contains("Category")';
    priceSelector = '.product-information span span';
    availabilitySelector = '.product-information p:contains("Availability")';
    conditionSelector = '.product-information p:contains("Condition")';
    brandSelector = '.product-information p:contains("Brand")';

    // Actions
    verifyProductDetails() {
        cy.get(this.productNameSelector).should('be.visible');
        cy.get(this.categorySelector).should('be.visible');
        cy.get(this.priceSelector).should('be.visible');
        cy.get(this.availabilitySelector).should('be.visible');
        cy.get(this.conditionSelector).should('be.visible');
        cy.get(this.brandSelector).should('be.visible');
    }
}

export default new ProductDetailPage();