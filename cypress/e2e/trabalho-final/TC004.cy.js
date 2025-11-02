import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import AccountPage from "../../pages/AccountPage";

describe('Test Case 4', () => {
    it('Logout User', () => {
        const user = {
            name: 'Jefferson QA',
            email: `jefferson.qa+${Date.now()}@example.com`,
            password: 'Pass@1234'
        };

        HomePage.visitHomePage();
        HomePage.getLogo.should('be.visible');
        
        HomePage.goToSignupLogin();
        LoginPage.signup(user.name, user.email);
        
        SignupPage.fillInForm(
            user.password,
            '1',
            'January',
            '1990',
            'John',
            'Doe',
            '123 Main St',
            'India',
            'Maharashtra',
            'Mumbai',
            '400001',
            '9876543210'
        );
        SignupPage.submitForm();
        AccountPage.verifyAccountCreated();
        AccountPage.clickContinue();
        AccountPage.verifyLoggedInAs(user.name);
        
        AccountPage.logout();
        LoginPage.verifyLoginVisible();
    });
});