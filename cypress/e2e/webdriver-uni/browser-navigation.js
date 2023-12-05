/// <reference types="Cypress" />

describe("Validate webdriveruni home page links", ()=>{
    it.only("Confirm links redirect to the correct pages", ()=>{
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true}) //removeAttr, target smo napisali jer hocemo da nam contact us page ostane u istom  browser window, tj. u istom tabu
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload()
        cy.url().should('include', 'http://www.webdriveruniversity.com/')
        //cy.reload(true) //reload without using cache
    
        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force: true})
        cy.url().should('include', 'To-Do-List') //we've asserted the url
        cy.go('back') //we need to go back to the home page
    });


})

