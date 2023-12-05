/// <reference types="cypress" />

describe("Handle js alerts", ()=> {
    it("Confirm js alert contains the correct text", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        //we need to click on popup & alerts button
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        //once we've landed to this page, we need to click
        //on this specific button here
        cy.get('#button1').click()
        //I want to manually handle this alert
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('I am an alert box!')
        })
    });

    it("Validate js confirm alert box works correctly when clicking ok", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
        //we need to click on popup & alerts button
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        
        cy.get('#button4').click()

        cy.on('window:confirm', (str)=>{
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
        
       
    });

    it("Validate js confirm alert box works correctly when clicking cancel", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
      
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        
        cy.get('#button4').click()
        cy.on('window:confirm', (str)=>{
            return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    });

    it.only("Validate js confirm alert box using a stub", ()=>{
        cy.visit("http://www.webdriveruniversity.com")
      
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force: true})
        
        const stub = cy.stub()//we created a stub
        cy.on('window:confirm', stub)//we then aligned the stub with the event
        //stub is like a type of storage where, when that event gets fired,
        //the stub is then going to store the result
        cy.get('#button4').click().then(()=>{//then we clicked on the button to trigger the js alert
            //we then created a promise - to je ovo .then(()=>)
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
            //here we added an assertion, then used the result stored in our stub
            //by using getCall with the index of zero, because
            //it only has one result because only one event has been fired
            //then we used to.be.calledWith method to validate whether the
            //event or js alert was fired with the correct message - 'Press a button!'

        }).then(()=>{//then we extended our promise with another then
            //to ensure that we click on the okay button
            //when the js alert appears
            return true;
        }).then(()=>{//we used another then block to assert
            //whether the correct message appeared once we've
            //clicked Ok - 'You pressed OK!'
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
        
    });
})