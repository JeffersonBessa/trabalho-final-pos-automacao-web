import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";

describe('Test Case 9', () => {
    it('Search Product', () => {
        const productName = 'Men Tshirt';

        HomePage.visitHomePage();
        HomePage.getLogo.should('be.visible');
        cy.contains('Products').click();
        ProductsPage.verifyProductsPageVisible();

        ProductsPage.searchProduct(productName);
        cy.get('h2.title').should('contain', 'Searched Products');
        ProductsPage.verifySearchedProducts();
    });
});