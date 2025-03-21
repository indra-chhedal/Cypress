
describe('login credincial', () => {
    it('login to the user', () => {
        cy.visit('https://meroshare.cdsc.com.np/#/login')
        // cy.get("input.input[name='username']").type('indra')
        // cy.get("input.input[name='password']").type('rav123')
        // cy.get("input.button[type='submit']").click()
        cy.get('#select2-ywgs-container').type('19000')
        cy.get("input#username[name='username']").type('098764')
        cy.get("input#password[name='password']").type('kglsdo874')
        cy.get('.btn').click()

        
        
    })
  })