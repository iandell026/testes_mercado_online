import Base from './_base.page'
import autFixtures from '../dynamics/autFixtures'
import {CADASTRAR as CD} from './components/mercado_cdusuario.elements'
import {CDFISICA as CF} from './components/mercado_cdusuario.elements'

export default class CadastrarUsuario extends Base {
    static acessarCadastro(){
        super.verifyElement(CD.BTN_CADASTRO)
        super.clickOnElement(CD.BTN_CADASTRO)
        super.validarUrl(CD.URL)
        super.validateElementText(CD.TXT_CADASTRO, 'Cadastro de novo cliente')
        super.verifyElement(CD.IMG_SEGURO)
    }
    static verificarCadastroPessoaFisica(){
        super.verifyElement(CF.INP_NOME)
        super.verifyElement(CF.INP_NASCIMENTO)
        super.verifyElement(CF.INP_CPF)
        super.verifyElement(CF.INP_TELEFONE)
        super.verifyElement(CF.INP_CELULAR)
        super.verifyElement(CF.INP_EMAIL)
        super.verifyElement(CF.INP_EMAIL2)
        super.verifyElement(CF.INP_SENHA)
        super.verifyElement(CF.INP_SENHA2)
        super.verifyElement(CD.BTN_AVANCAR)
    }
    static realizarCadastroPessoaFisica(){
        autFixtures.usuarioValido()
        cy.readFile(`cypress/fixtures/cadastro_usuario/userValido.json`).then((usuarioNovo) => {
            super.typeValue(CF.INP_NOME, usuarioNovo.valido.nome)
            super.typeValue(CF.INP_NASCIMENTO, usuarioNovo.valido.nascimento)
            super.typeValue(CF.INP_CPF, usuarioNovo.valido.cpf)
            //super.typeValue(CD.INP_TELEFONE, usuarioNovo.valido.telefone)
            super.typeValue(CF.INP_CELULAR, usuarioNovo.valido.celular)
            super.typeValue(CF.INP_EMAIL, usuarioNovo.valido.email)
            super.typeValue(CF.INP_EMAIL2, usuarioNovo.valido.email)
            super.typeValue(CF.INP_SENHA, usuarioNovo.valido.senha)
            super.typeValue(CF.INP_SENHA2, usuarioNovo.valido.senha)
        })
        super.clickOnElement(CD.BTN_AVANCAR)
        cy.wait(5000)
        cy.url().then((url) => {
            if (url.includes('/cadastro')) {
                cy.reload()
                this.realizarCadastroPessoaFisica()
            }
        })
        super.validarUrl('/loja')
    }

    /****************************************************************************/

    static campoCpfInvalido(){
        autFixtures.usuarioInvalido()
        cy.readFile(`cypress/fixtures/cadastro_usuario/userInvalido.json`).then((usuarioNovo) => {
            super.typeValue(CF.INP_NOME, usuarioNovo.invalido.nome)
            super.typeValue(CF.INP_NASCIMENTO, usuarioNovo.invalido.nascimento)
            super.typeValue(CF.INP_CPF, usuarioNovo.invalido.cpf)
            super.typeValue(CF.INP_TELEFONE, usuarioNovo.invalido.telefone)
            super.typeValue(CF.INP_CELULAR, usuarioNovo.invalido.celular)
            super.typeValue(CF.INP_EMAIL, usuarioNovo.invalido.email)
            super.typeValue(CF.INP_EMAIL2, usuarioNovo.invalido.email)
            super.typeValue(CF.INP_SENHA, usuarioNovo.invalido.senha)
            super.typeValue(CF.INP_SENHA2, usuarioNovo.invalido.senha)
        })
        super.clickOnElement(CD.BTN_AVANCAR)
        super.validateElementText(CD.TXT_ERROCPF, 'CPF inválido! Por favor, digite um número válido.')
    }   
}