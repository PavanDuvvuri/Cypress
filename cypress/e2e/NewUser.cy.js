import random_generator from "../util/random_generator";
import { signupPageSelectors } from "../support/selectors/singup/signupPage";

describe('New user Workflow', () =>{

    it('SignUp',() =>{
        const firstName = random_generator.getRandomName();
        const email = random_generator.getRandomEmail();

        cy.visit("https://freelance-learn-automation.vercel.app/login")
        cy.get(signupPageSelectors.signup).contains('Signup').click()
        cy.get(signupPageSelectors.firstname).type(firstName)
        cy.get(signupPageSelectors.email).type(email)
        cy.get(signupPageSelectors.password).type('Password123')
        cy.get(signupPageSelectors.interest).contains('Cypress').click()
        cy.get(signupPageSelectors.interest).contains('java').click()
        cy.get(signupPageSelectors.gender).check().should('be.checked')
        cy.get(signupPageSelectors.state).select('Andhra Pradesh')
                        .should('have.value','Andhra Pradesh')
        cy.get(signupPageSelectors.hobbies).select('Dancing')
                           
        cy.get(signupPageSelectors.subbtn).click()
        cy.get(signupPageSelectors.header).contains('Sign In')

       
    })
})