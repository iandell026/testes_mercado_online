import Base from '../pages/_base.page'
import faker from "faker"
import fakerbr from "faker-br"
const {fakerBr} = require('js-brasil')

export default class autFixtures extends Base {
    static usuarioValido() {
      cy.writeFile('cypress/fixtures/cadastro_usuario/userValido.json', {
        'valido' : 
        {
          "nome"      : `${fakerbr.name.firstName()} ${fakerbr.name.lastName()}`,
          "nascimento": `${fakerBr.data()}`,
          "cpf"       : `${fakerBr.cpf()}`,
          "telefone"  : `${fakerBr.telefone()}`,
          "celular"   : `${fakerBr.celular()}`,
          "email"     : `${fakerbr.internet.email()}`,
          "senha"     : `${faker.internet.password()}`
        }
      })
    }
    static usuarioInvalido() {
      cy.writeFile('cypress/fixtures/cadastro_usuario/userInvalido.json',  {
        'invalido' : 
        {
          "nome"      : `${fakerbr.name.firstName()} ${fakerbr.name.lastName()}`,
          "nascimento": `${fakerBr.data()}`,
          "cpf"       : `${fakerBr.telefone()}`,
          "telefone"  : `${fakerBr.telefone()}`,
          "celular"   : `${fakerBr.celular()}`,
          "email"     : `${fakerbr.internet.email()}`,
          "senha"     : `${faker.internet.password()}` 
        }
      })
    } 
    static numeroEndereco(){
      cy.writeFile('cypress/fixtures/cadastro_endereco/endereco.json',  {
        'valido' : 
        {
          "cep"     : "30130-003",
          "numero"  : `${faker.datatype.number()}`,
          "rua"     : "Avenida Afonso Pena"
        }
      })
    }
}