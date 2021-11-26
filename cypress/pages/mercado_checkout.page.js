import Base from './_base.page'
import {CHECKOUT as CK} from './components/mercado_checkout.elements'
import {MODAL} from './components/mercado_carrinho.elements'
import fakerbr from "faker-br"

var selecionar

export default class MOCheckout extends Base {
    static finalizarCompra(){
        super.clickOnElement(MODAL.CART_MODAL)
        cy.wait(2000)
        super.clickOnElement(MODAL.BTN_FINALIZAR)
        super.validarUrl('/checkout/cart')
        super.verifyElement(CK.BTN_CONTINUAR)
        super.clickOnElement(CK.BTN_CONTINUAR)
        cy.fixture(`../fixtures/cadastro_usuario/userValido`).then((usuarioNovo) => {
            super.typeValue(CK.CHECK_LOGIN, usuarioNovo.valido.email)
        })
        super.verifyElement(CK.BTN_SEGUIR)
        super.clickOnElement(CK.BTN_SEGUIR)
    }
    static realizarCheckout(){
        cy.readFile('cypress/fixtures/cadastro_endereco/endereco.json').then(endereco =>{ 
            cy.get(CK.CHECK_MODAL).should('not.be.visible')
                cy.readFile('cypress/fixtures/cadastro_usuario/userValido.json').then(usuario => {
                cy.get(CK.CHECK_PGT).then($security => {
                    if ($security.find("p:contains('Qual seu endereço de entrega?')").length > 0){
                        selecionar = endereco.valido.rua.split(' ')[1]
                    } else if ($security.find("p:contains('Quais os primeiros digitos do seu CPF?')").length > 0) {
                        selecionar = usuario.valido.cpf.substring(0,6)
                    } else if ($security.find("p:contains('Quais os últimos digitos do seu CPF?')").length > 0){
                        selecionar = usuario.valido.cpf.slice(-6) 
                    } else if ($security.find("p:contains('Qual o seu sobrenome?')").length > 0){
                        selecionar = usuario.valido.nome.split(' ')[1]   
                    }
                    cy.wait(3000)
                    super.verifyElement(CK.BTN_SELECIONAR)                    
                    super.getElement(CK.BTN_SELECIONAR).contains(selecionar).click()
                })
            })
        })
    }

    /****************************************************************************/

    static emailInexistente(){
        super.clickOnElement(MODAL.CART_MODAL)
        cy.wait(2000)
        super.clickOnElement(MODAL.BTN_FINALIZAR)
        super.clickOnElement(CK.BTN_CONTINUAR)
        super.typeValue(CK.CHECK_LOGIN, `${fakerbr.internet.email()}`)
        super.clickOnElement(CK.BTN_SEGUIR)
        super.verifyElement(CK.CHECK_NOME)
        super.verifyElement(CK.CHECK_CPF)
        super.verifyElement(CK.CHECK_CELULAR)
        super.verifyElement(CK.CAMPO_INFO)
    }
}