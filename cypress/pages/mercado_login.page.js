import Base from './_base.page'
import {LOGIN as LG} from './components/mercado_login.elements'

export default class Login extends Base {
    static acessarMercadoOnline(){
        cy.visit('/')
    }
    static verificarLogin(){
        super.verifyElement(LG.BTN_ENTRAR)
        super.clickOnElement(LG.BTN_ENTRAR)
        super.validateElementText(LG.TXT_LOGIN, 'Já sou cadastrado')
        super.validateElementText(LG.TXT_AUTENTICAR, 'Informe seu e-mail ou CPF/CNPJ para se autenticar.')
        super.verifyElement(LG.BTN_LOGIN)
    }
    static realizarLogin(){
        super.clickOnElement(LG.BTN_ENTRAR)
        super.validarUrl(LG.URL)
        super.clickOnElement(LG.BTN_LOGIN)
        cy.fixture(`../fixtures/cadastro_usuario/userValido`).then((usuarioNovo) => {
            super.typeValue(LG.INP_EMAIL, usuarioNovo.valido.email)
        })
        super.verifyElement(LG.BTN_CONTINUE)
        super.clickOnElement(LG.BTN_CONTINUE)
        super.verifyElement(LG.INP_SENHA)
        cy.fixture(`../fixtures/cadastro_usuario/userValido`).then((usuarioNovo) => {
            super.typeValue(LG.INP_SENHA, usuarioNovo.valido.senha)
        })
        super.verifyElement(LG.BTN_LOGAR)
        super.clickOnElement(LG.BTN_LOGAR)
    }

    /****************************************************************************/

    static falhaLogin(){
        super.clickOnElement(LG.BTN_ENTRAR)
        super.clickOnElement(LG.BTN_LOGIN)
        cy.fixture(`../fixtures/cadastro_usuario/userInvalido`).then((usuarioNovo) => {
            super.typeValue(LG.INP_EMAIL, usuarioNovo.invalido.email)
        })
        super.clickOnElement(LG.BTN_CONTINUE)
        super.verifyElement(LG.INP_SENHA)
        cy.fixture(`../fixtures/cadastro_usuario/userInvalido`).then((usuarioNovo) => {
            super.typeValue(LG.INP_SENHA, usuarioNovo.invalido.senha)
        })
        super.verifyElement(LG.BTN_LOGAR)
        super.clickOnElement(LG.BTN_LOGAR)
        super.validarUrl('/central-do-cliente')
    }
}