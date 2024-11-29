import { enrollPageSelectors } from "../support/selectors/enroll/enrollPage";

describe('Course enrollment',() => {
    it('Login',()=> {
        cy.visit("https://freelance-learn-automation.vercel.app/login")
        cy.get(enrollPageSelectors.email).type('testuser@automation.com')
        cy.get(enrollPageSelectors.pwd).type('Password123')
        cy.get(enrollPageSelectors.submit).click()
        cy.get(enrollPageSelectors.add2cart).eq(0).click()
        cy.get(enrollPageSelectors.add2cart).eq(1).click()
        cy.get(enrollPageSelectors.add2cart).eq(2).click()
        cy.get(enrollPageSelectors.cartbtn).click()
        cy.get(enrollPageSelectors.enrollbtn).click()
        cy.get(enrollPageSelectors.address).type('test address')
        cy.get(enrollPageSelectors.phone).type('1234567890')
        cy.get(enrollPageSelectors.modal).should('be.visible').then(($dialog)=>{
            cy.wrap($dialog).find(enrollPageSelectors.enrollbtn).click()  });
      

    })
   

})