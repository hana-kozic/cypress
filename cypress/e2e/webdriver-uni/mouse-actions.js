/// <reference types="cypress" />

describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })
    });

    it("I should be able to drag and drop a draggable item", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#draggable').trigger('mousedown', { which: 1 }) //which: 1 is oging to click on the center of that given element
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true }) //force:true to ensure that it does release the mouse
    });

    it("I should be able to perform a double mouse click", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#double-click').dblclick();
    });

    it("I should be able to hold down the left mouse click button on a given element", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true })

        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })
    });
})