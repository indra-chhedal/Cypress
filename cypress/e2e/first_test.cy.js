
describe('login credincial', () => {
    it('login to the user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        // //this is for login testing in parabank
        // cy.get("input.input[name='username']").type('indra')
        // cy.get("input.input[name='password']").type('rav123')
        // cy.get("input.button[type='submit']").click();

        cy.get("#loginPanel > form > div:nth-child(2) > input").type('rcv')
        cy.get("#loginPanel > form > div:nth-child(4) > input").type('rcv123')
        cy.get("#loginPanel > form > div:nth-child(5) > input").click();
        cy.get("#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a").click();
        cy.get("#month").select("January")
        // cy.get("#month").select(3)
        cy.get('#transactionType').select('Credit')

        //this is for dropdown account activity for parabank

        

        
        
    })
  })