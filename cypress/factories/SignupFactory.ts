import { faker } from '@faker-js/faker'
import { generate } from 'gerador-validador-cpf'

export default {
  deliver: function () {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    const data = {
      name: `${firstName} ${lastName}`,
      cpf: generate(),
      email: faker.internet.email(firstName),
      whatsapp: faker.phone.number(),
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: faker.random.numeric(),
        details: 'Ap 140',
        district: 'Itaim Bibi',
        city_uf: 'São Paulo/SP'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    return data
  }
}
