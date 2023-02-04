class practice {
    // Constructor
    elementsLogin = {
        usernameInput: () => cy.get('[name="username"]'),
        passwordInput: () => cy.get('[name="password"]'),
        submitButton: () => cy.get('[type="submit"]')
    }
    // Funciones / Metodos
    enterUsername(type) {
        this.elementsLogin.usernameInput().type(type)
    }
    enterPassword(type) {
        this.elementsLogin.passwordInput().type(type)
    }
    submitLogin() {
        this.elementsLogin.submitButton().click()
    }
}

export const Practice = new practice;