
class LoginPage {

    // Selectors
    signupNameSelector = 'input[name="name"]';
    signupEmailSelector = 'input[data-qa="signup-email"]';
    signupButtonSelector = 'button[data-qa="signup-button"]';
    loginEmailSelector = 'input[data-qa="login-email"]';
    loginPasswordSelector = 'input[data-qa="login-password"]';
    loginButtonSelector = 'button[data-qa="login-button"]';

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
}

export default new LoginPage();
