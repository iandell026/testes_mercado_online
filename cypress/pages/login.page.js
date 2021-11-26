import Base from './_base.page'

import { LOGIN } from './components/login.elements'

export default class Login extends Base {
    static acessarSite() {
        cy.visit(LOGIN.URL_LOGIN)
    }

    static loginCorreto() {
        cy.fixture("example").then((user) => {
            super.clickOnElement(LOGIN.BOTAO_LOGIN)

            super.typeValue(LOGIN.FORM_CPF, user.CPF)
            super.clickOnElement(LOGIN.BOTAO_CONTINUAR_CPF)

            super.typeValue(LOGIN.FORM_SENHA, user.senha)
            super.clickOnElement(LOGIN.BOTAO_CONTINUAR_SENHA)
        })
    }

    static loginInvalido() {
        super.clickOnElement(LOGIN.BOTAO_LOGIN)

        super.typeValue(LOGIN.FORM_CPF, '452.275.743-32')
        super.clickOnElement(LOGIN.BOTAO_CONTINUAR_CPF)

        super.typeValue(LOGIN.FORM_SENHA, 'senha_random')
        super.clickOnElement(LOGIN.BOTAO_CONTINUAR_SENHA)

        super.getElement(LOGIN.MSG_ERRO).should('contain', 'Autenticação incorreta.')
    }
}