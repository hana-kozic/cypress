/// <reference types="Cypress" />
describe("Handling data via web driveru uni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    })

    it("Caculate and assert the total age of all users", () => {
        
    });
  
 
  });
  