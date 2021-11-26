import Base from './_base.page'

import { CHECKOUT } from './components/checkout.elements'

export default class FazerCheckout extends Base {
    static realizarCheckoutCorreto() {
        cy.readFile("cypress/fixtures/example.json").then((user) => {
            super.typeValue(CHECKOUT.FORM_CPF, user.CPF)
            super.clickOnElement(CHECKOUT.BOTAO_CPF)

            cy.get(CHECKOUT.PERGUNTA).then(security => {
                super.getElementText(security)

                var botao

                if (security.find("p:contains('Quais os primeiros dígitos do seu CPF?')").lenght > 0) {
                    cy.log(botao)
                    botao = user.CPF.substring(0, 6)
                    cy.log(botao)
                }

                else if (security.find("p:contains('Qual o seu sobrenome?')").lenght > 0) {
                    cy.log(botao)
                    botao = user.nome.split(' ')[1]
                    cy.log(botao)
                }

                else if (security.find("p:contains('Quais os últimos dígitos do seu CPF?')").lenght > 0) {
                    cy.log(botao)
                    botao = user.CPF.slice(-6)
                    cy.log(botao)
                }

                else if (security.find("p:contains('Qual o seu endereço de entrega?')").length > 0) {
                    cy.log(botao)
                    botao = user.nome.split(' ')[3]
                    cy.log(botao)
                }

                else if (security.find("p:contains('Quais os primeiros digitos do seu telefone?')").length > 0) {
                    cy.log(botao)
                    botao = user.celular.substring(1, 6)
                    cy.log(botao)
                }

                cy.wait(4000)
                super.getElement(CHECKOUT.RESPOSTA).contains(botao).click()
                cy.wait(4000)
                super.typeValue(CHECKOUT.FORM_SENHA, user.senha)
                super.clickOnElement(CHECKOUT.BOTAO_FINALIZAR)
            })
        })
    }

    static checkoutInvalido() {
        cy.readFile("cypress/fixtures/example.json").then((user) => {
            super.typeValue(CHECKOUT.FORM_CPF, user.CPF)
            super.clickOnElement(CHECKOUT.BOTAO_CPF)

            super.getElement(CHECKOUT.MENSAGEM_ERRO).should('contain', 'CPF inválido')
        })
    }
}