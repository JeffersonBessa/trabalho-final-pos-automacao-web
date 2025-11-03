import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";

describe('Test Case 8', () => {
    it('Verify All Products and product detail page', () => {
        HomePage.visitHomePage();
        HomePage.getLogo.should('be.visible');
        cy.contains('Products').click();
        ProductsPage.verifyProductsPageVisible();
        ProductsPage.verifyProductsList();

        ProductsPage.clickViewFirstProduct();
        cy.url().should('include', '/product_details/');
        cy.get('.product-information').should('be.visible');
        cy.get('.product-information h2').should('be.visible');
        cy.get('.product-information p').should('have.length.greaterThan', 0);
    });
});