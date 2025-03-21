describe('Registration Funcationality', () => {
    it('Register a new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('rav')
        cy.get("input[id='customer.lastName']").type('academy')
        cy.get("input[id='customer.address.street']").type('kathmandu')
        cy.get("input[id='customer.address.city']").type('kathmandu')
        cy.get("input[id='customer.address.state']").type('bagmati')
        cy.get("input[id='customer.address.zipCode']").type('4000')
        cy.get("input[id='customer.phoneNumber']").type('0000000000')
        cy.get("input[id='customer.ssn']").type('111111')
        cy.get("input[id='customer.username']").type('indra')
        cy.get("input[id='customer.password']").type('rav123')
        cy.get('#repeatedPassword').type('rav123')
        cy.get('[colspan="2"] > .button').click()
        
        
        
    })
  })