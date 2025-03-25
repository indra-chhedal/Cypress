describe('login credincial', () => {
    it('login to the user', () => {
        cy.visit('https://meroshare.cdsc.com.np/#/login')

        // //this is for login testing in parabank
        cy.get('#select2-fefu-container').select(5)
        cy.get("input#username[name='username']").type('indra')
        cy.get("input#username[name='username']").type('rav123')
        cy.get("body > app-login > div > div > div > div > div > div > div.card.login-app--card > div > form > div > div:nth-child(4) > div > button").click()

        //this is for dropdown account activity for parabank

        

        
        
    })
  })