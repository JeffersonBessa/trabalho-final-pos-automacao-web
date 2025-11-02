
class LoginPage {

    // Selectors
    signupNameSelector = 'input[name="name"]';
    signupEmailSelector = 'input[data-qa="signup-email"]';
    signupButtonSelector = 'button[data-qa="signup-button"]';
    loginEmailSelector = 'input[data-qa="login-email"]';
    loginPasswordSelector = 'input[data-qa="login-password"]';
    loginButtonSelector = 'button[data-qa="login-button"]';
    loginToAccountSelector = 'h2:contains("Login to your account")';
    newUserSignupSelector = 'h2:contains("New User Signup!")';
    loginErrorSelector = 'p[style*="color: red"]';
    emailExistsErrorSelector = 'p[style*="color: red"]';

    // Actions
    get signupName() {
        return cy.get(this.signupNameSelector); 
    }

    get signupEmail() { 
        return cy.get(this.signupEmailSelector); 
    }

    get signupButton() {
        return cy.get(this.signupButtonSelector); 
    }

    get loginEmail() {
        return cy.get(this.loginEmailSelector); 
    }

    get loginPassword() {
        return cy.get(this.loginPasswordSelector);
    }

    get loginButton() { 
        return cy.get(this.loginButtonSelector); 
    }

    signup(name, email) {
        this.signupName.type(name);
        this.signupEmail.type(email);
        this.signupButton.click();
    }

    login(email, password) {
        this.loginEmail.type(email);
        this.loginPassword.type(password);
        this.loginButton.click();
    }

    verifyLoginVisible() {
        return cy.get(this.loginToAccountSelector).should('be.visible');
    }

    verifySignupVisible() {
        return cy.get(this.newUserSignupSelector).should('be.visible');
    }

    verifyLoginError() {
        cy.get(this.loginErrorSelector).should('contain', 'Your email or password is incorrect!');
    }

    verifyEmailAlreadyExistsError() {
        cy.get(this.emailExistsErrorSelector).should('contain', 'Email Address already exist!');
    }
}

export default new LoginPage();
