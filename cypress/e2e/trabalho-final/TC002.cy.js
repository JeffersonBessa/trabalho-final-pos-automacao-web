import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import AccountPage from "../../pages/AccountPage";

describe('Test Case 2', () => {
    it('Login User with correct email and password', () => {
        const user = {
            name: 'Jefferson QA',
            email: 'jefferson.qa01.test@example.com',
            password: '12345'
        };
        
        HomePage.visitHomePage();
        HomePage.getLogo.should('be.visible');
        HomePage.goToSignupLogin();
        LoginPage.verifyLoginVisible();
        LoginPage.login(user.email, user.password);
        
        AccountPage.verifyLoggedInAs(user.name);
    });
});