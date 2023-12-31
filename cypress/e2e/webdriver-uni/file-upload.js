/// <reference types="cypress" />

describe('Test File Upload via webdriveru', ()=> {
    it('Upload a file....', ()=> {
        cy.visit("http://webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true});
    
        cy.get("#myFile").selectFile("cypress/fixtures/laptop.png");
        cy.get("#submit-button").click();
    })

    it('Upload No file...', ()=>
    {
        cy.visit("http://webdriveruniversity.com");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force: true});
        cy.get("#submit-button").click();
    })
})