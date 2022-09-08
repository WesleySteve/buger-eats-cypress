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
})
