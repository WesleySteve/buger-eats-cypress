
describe('Signup', () => {
  it('User should be register as delivery', () => {
    cy.visit('/')

    cy.get('#page-home main a[href="/deliver"]').click()

    // checkpoint
    cy.get('#page-deliver form h1')
      .should('have.text', 'Cadastre-se para  fazer entregas')
  })
})
