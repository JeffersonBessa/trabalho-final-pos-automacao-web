import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";

describe('Test Case 5', () => {
    it('Register User with existing email', () => {
        const user = {
            name: 'Jefferson QA',
            email: 'jefferson.qa.existingEmail@example.com'
        };
        
        HomePage.visitHomePage();
        HomePage.getLogo.should('be.visible');
        HomePage.goToSignupLogin();
        LoginPage.verifySignupVisible();
        LoginPage.signup(user.name, user.email);
        
        LoginPage.verifyEmailAlreadyExistsError();
    });
});