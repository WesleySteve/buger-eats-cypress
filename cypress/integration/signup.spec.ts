import SignupPage from '../pages/SignupPage'

describe('Signup', () => {
  it('User should be register as delivery', () => {
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
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'

    }

    SignupPage.go()

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

    cy.contains('.delivery-method li', deliver.delivery_method).click()

    cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    cy.get('form button[type=submit]').click()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    cy.get('.swal2-container .swal2-html-container')
      .should('have.text', expectedMessage)
  })
})
