import SignupPage from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'

describe('Signup', () => {
  it('User should be register as delivery', () => {
    const deliver = SignupFactory.deliver()

    SignupPage.go()
    SignupPage.fillForm(deliver)
    SignupPage.submit()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    SignupPage.modalContentShouldBe(expectedMessage)
  })

  it('Incorrect CPF', () => {
    const deliver = SignupFactory.deliver()

    deliver.cpf = 'x215468792@'

    SignupPage.go()
    SignupPage.fillForm(deliver)
    SignupPage.submit()

    const expectedMessage = 'Oops! CPF inválido'

    SignupPage.alertMessageShouldBe(expectedMessage)
  })

  it('Incorrect Email', () => {
    const deliver = SignupFactory.deliver()

    deliver.email = 'teste.com'

    SignupPage.go()
    SignupPage.fillForm(deliver)
    SignupPage.submit()

    const expectedMessage = 'Oops! Email com formato inválido.'

    SignupPage.alertMessageShouldBe(expectedMessage)
  })

  context('Required fields', function () {
    const messages = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'postalcode', output: 'É necessário informar o CEP' },
      { field: 'number', output: 'É necessário informar o número do endereço' },
      { field: 'delivery_method', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' }

    ]

    before(function () {
      SignupPage.go()
      SignupPage.submit()
    })

    messages.forEach(function (message) {
      it(`${message.field} is required`, function () {
        SignupPage.alertMessageShouldBe(message.output)
      })
    })
  })
})
