import Base from './_base.page'
import autFixtures from '../dynamics/autFixtures'
import {ENDERECO as ED} from './components/mercado_endereco.elements'

export default class MOCadastrarEnderecos extends Base {
    static verificaEndereco(){
        cy.wait(2000)
        super.validarUrl('/my-account')
        cy.wait(2000)
        super.clickOnElement(ED.MENU_CONTA, 3)
        cy.wait(2000)
        super.clickOnElement(ED.MENU_CONTA, 3)
        super.clickOnElement(ED.BTN_EDITAR, 0)
    }
    static cadastroEndereco() {
        cy.wait(2000)
        cy.readFile(`cypress/fixtures/cadastro_endereco/endereco.json`).then((enderecoNovo) => {
            super.typeValue(ED.FORM_CEP, enderecoNovo.valido.cep)
        })
        cy.wait(2000)
        cy.get(ED.FORM_NOMEENDERECO).clear()
        super.typeValue(ED.FORM_NOMEENDERECO, "Endereco Principal")
        autFixtures.numeroEndereco()
        cy.readFile(`cypress/fixtures/cadastro_endereco/endereco.json`).then((enderecoNovo) => {
            super.typeValue(ED.FORM_NUMERO, enderecoNovo.valido.numero)
        })
        cy.wait(2000)
        super.verifyElement(ED.BTN_SALVAR)
        super.clickOnElement(ED.BTN_SALVAR)
        cy.wait(2000)
        super.validarUrl('/my-account/addresses')
    }

    /****************************************************************************/

    static cadastroEnderecoInvalido(){
        cy.wait(2000)
        cy.get(ED.FORM_CEP).clear()
        super.typeValue(ED.FORM_CEP, "11111-001")
        cy.wait(2000)
        cy.get(ED.FORM_NOMEENDERECO).clear()
        super.typeValue(ED.FORM_NOMEENDERECO, "Endereco Invalido")
        super.typeValue(ED.FORM_NUMERO, "s/n")
        cy.wait(2000)
        super.clickOnElement(ED.BTN_SALVAR)
        super.validateElementText(ED.TXT_ERROR, "O endereço não foi salvo! Tente novamente em alguns instantes.")
    }
}