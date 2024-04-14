/// <reference types="Cypress" />

describe("JSON Object", ()=>{
    it("Json Object Examples", ()=>{
       const exampleObject={"key": "Tim", "key2": "Jones"}
        const exampleArrayOfValues=["Sophie", "Rose", "Howard"]
        const exampleOfArrayOfObjects=[{"key": "Luke", "key2": "Nicholson", "key3": 25},
        {"key5": "Mike", "key2": "Kennedy", "key3": 15},
        {"key": "Isac", "key2": "Bush", "key3": 35}]
        const users={
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }
            ]
        }

        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key2);

        cy.log(exampleArrayOfValues[0])
        cy.log(exampleArrayOfValues[1])

        cy.log(users.Students[0].lastName)
        cy.log(exampleOfArrayOfObjects[0].key, exampleOfArrayOfObjects[0].key2, exampleOfArrayOfObjects[0].key3)
        cy.log(exampleOfArrayOfObjects[1].key5, exampleOfArrayOfObjects[1].key2, exampleOfArrayOfObjects[1].key3)
    });

   
})