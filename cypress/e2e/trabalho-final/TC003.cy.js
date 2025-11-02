import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";

describe('Test Case 3', () => {
    it('Login User with incorrect email and password', () => {
        const user = {
            email: 'invalid_email@example.com',
            password: 'wrongPassword'
        };
        
        HomePage.visitHomePage();
        HomePage.getLogo.should('be.visible');
        HomePage.goToSignupLogin();
        LoginPage.verifyLoginVisible();
        LoginPage.login(user.email, user.password);
        
        LoginPage.verifyLoginError();
    });
});