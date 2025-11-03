class SignupPage {

    // Selectors
    static titleSelector = 'h2.title.text-center';
    static nameInputSelector = '#name';
    static emailInputSelector = '#email';
    static passwordInputSelector = '#password';
    static daySelectSelector = '#days';
    static monthSelectSelector = '#months';
    static yearSelectSelector = '#years';
    static firstNameInputSelector = '#first_name';
    static lastNameInputSelector = '#last_name';
    static addressInputSelector = '#address1';
    static countrySelectSelector = '#country';
    static stateInputSelector = '#state';
    static cityInputSelector = '#city';
    static zipcodeInputSelector = '#zipcode';
    static mobileNumberInputSelector = '#mobile_number';
    static createAccountButtonSelector = 'button[data-qa=create-account]';

    // Actions
    get title() {
        return SignupPage.titleSelector;
    }

    get nameInput() {
        return SignupPage.nameInputSelector;
    }

    get emailInput() {
        return SignupPage.emailInputSelector;
    }

    get passwordInput() {
        return SignupPage.passwordInputSelector;
    }

    get daySelect() {
        return SignupPage.daySelectSelector;
    }

    get monthSelect() {
        return SignupPage.monthSelectSelector;
    }

    get yearSelect() {
        return SignupPage.yearSelectSelector;
    }

    get firstNameInput() {
        return SignupPage.firstNameInputSelector;
    }

    get lastNameInput() {
        return SignupPage.lastNameInputSelector;
    }

    get addressInput() {
        return SignupPage.addressInputSelector;
    }

    get countrySelect() {
        return SignupPage.countrySelectSelector;
    }

    get stateInput() {
        return SignupPage.stateInputSelector;
    }

    get cityInput() {
        return SignupPage.cityInputSelector;
    }

    get zipcodeInput() {
        return SignupPage.zipcodeInputSelector;
    }

    get mobileNumberInput() {
        return SignupPage.mobileNumberInputSelector;
    }

    get createAccountButton() {
        return SignupPage.createAccountButtonSelector;
    }

    fillInForm(password, day, month, year, firstName, lastName, address, country, state, city, zipcode, mobileNumber) {
        cy.get(this.passwordInput).type(password);
        cy.get(this.daySelect).select(day);
        cy.get(this.monthSelect).select(month);
        cy.get(this.yearSelect).select(year);
        cy.get(this.firstNameInput).type(firstName);
        cy.get(this.lastNameInput).type(lastName);
        cy.get(this.addressInput).type(address);
        cy.get(this.countrySelect).select(country);
        cy.get(this.stateInput).type(state);
        cy.get(this.cityInput).type(city);
        cy.get(this.zipcodeInput).type(zipcode);
        cy.get(this.mobileNumberInput).type(mobileNumber);
    }

    submitForm() {
        cy.get(this.createAccountButton).click();
    }
}

export default new SignupPage();