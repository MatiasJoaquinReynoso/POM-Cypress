const {Practice} = require('../Pages/pomCypress');
const {username, password} = Cypress.env('adminUser')
const {authLogin, dashboardIndex} = Cypress.env('endpoint')

describe('User Login', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.url().should('contain', authLogin)
    });
    it('Validate Login Successfully', () => {
        Practice.enterUsername(username)
        Practice.enterPassword(password)
        Practice.submitLogin()

        cy.url().should('contain', dashboardIndex)
    })
});