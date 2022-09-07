
describe('Signup', () => {
  it('User should be register as delivery', () => {
    cy.visit('/')

    cy.get('#page-home main a[href="/deliver"]').click()
  })
})
