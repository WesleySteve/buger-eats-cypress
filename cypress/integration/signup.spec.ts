
describe('Signup', () => {
  it('User should be register as delivery', () => {
    cy.visit('/')

    cy.get('#page-home main a[href="/deliver"]').click()

    // checkpoint
    cy.get('#page-deliver form h1')
      .should('have.text', 'Cadastre-se para  fazer entregas')

    const deliver = {
      name: 'Wesley',
      cpf: '00000022254',
      email: 'wesley@teste.com',
      whatsapp: '11887445532',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '800',
        datails: 'Ap 100',
        district: 'Itaim Bibi',
        city_uf: 'São Paulo/SP'
      }
    }

    // preenchendo os campos de acordo com a massa definida
    cy.get('input[name=fullName]').type(deliver.name)
    cy.get('input[name=cpf]').type(deliver.cpf)
    cy.get('input[name=email]').type(deliver.email)
    cy.get('input[name=whatsapp]').type(deliver.whatsapp)

    cy.get('input[name=postalcode][placeholder=CEP]').type(deliver.address.postalcode)

    cy.get('input[type=button][value="Buscar CEP"]').click()

    cy.get('input[name=address-number]').type(deliver.address.number)
    cy.get('input[name=address-details]').type(deliver.address.datails)

    cy.get('input[name=address]')
      .should('have.value', deliver.address.street)

    cy.get('input[name=district]')
      .should('have.value', deliver.address.district)

    cy.get('input[name=city-uf]')
      .should('have.value', deliver.address.city_uf)
  })
})
