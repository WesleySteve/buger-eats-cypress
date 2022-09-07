
describe('home page', () => {
  it('app deve estar online', () => {
    cy.visit('/')
    // para garantir que essa função esteja ok podemos pegar um texto na tela
    // utilizando este selector garantimos que estamos pegando o seletor exato
    cy.get('#page-home main h1')
      .should('have.text', 'Seja um parceiro entregador pela Buger Eats')
  })
})
