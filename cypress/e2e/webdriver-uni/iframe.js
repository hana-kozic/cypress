/// <reference types="Cypress" />

describe("Handling IFrame & Modals", ()=>{
    it("Handle webdriveruni iframe and modal", ()=>{
       
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force: true})
       
    });

 
})

