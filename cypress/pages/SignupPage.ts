/* eslint-disable @typescript-eslint/restrict-template-expressions */

class SignupPage {
  go (): void {
    cy.visit('/')

    cy.get('#page-home main a[href="/deliver"]').click()

    // checkpoint
    cy.get('#page-deliver form h1')
      .should('have.text', 'Cadastre-se para  fazer entregas')
  }

  fillForm (deliver: any): void {
    // preenchendo os campos de acordo com a massa definida
    cy.get('input[name=fullName]').type(deliver.name)
    cy.get('input[name=cpf]').type(deliver.cpf)
    cy.get('input[name=email]').type(deliver.email)
    cy.get('input[name=whatsapp]').type(deliver.whatsapp)

    cy.get('input[name=postalcode][placeholder=CEP]').type(deliver.address.postalcode)

    cy.get('input[type=button][value="Buscar CEP"]').click()

    cy.get('input[name=address-number]').type(deliver.address.number)
    cy.get('input[name=address-details]').type(deliver.address.details)

    cy.get('input[name=address]')
      .should('have.value', deliver.address.street)

    cy.get('input[name=district]')
      .should('have.value', deliver.address.district)

    cy.get('input[name=city-uf]')
      .should('have.value', deliver.address.city_uf)

    cy.contains('.delivery-method li', deliver.delivery_method).click()

    cy.get('input[accept^="image"]').attachFile(`/images/${deliver.cnh}`)
  }

  submit (): void {
    cy.get('form button[type=submit]').click()
  }

  modalContentShouldBe (expectedMessage: string): void {
    cy.get('.swal2-container .swal2-html-container')
      .should('have.text', expectedMessage)
  }

  alertMessageShouldBe (expectedMessage: string): void {
    cy.contains('.alert-error', expectedMessage).should('be.visible')
  }
}

export default new SignupPage()
