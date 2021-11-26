/// <reference types="cypress" />

import CadastrarUsuario from '../pages/mercado_cdusuario.page'
import Login from '../pages/mercado_login.page'

describe('Testes Front-end Mercado Online - CADASTRO DE USUARIO', () => {
    describe('Testes cadastro de usuário - Válido', () => {
        beforeEach(() => {
            Login.acessarMercadoOnline()
            CadastrarUsuario.acessarCadastro()
        })
        it('Deve verificar se os campos para cadastro de pessoa física estão adequados', () => {
            CadastrarUsuario.verificarCadastroPessoaFisica()
        })
        it('Deve realizar o cadastro de uma pessoa física com sucesso', () => {
            CadastrarUsuario.realizarCadastroPessoaFisica()
            cy.wait(5000)
        })
    }) 

    /************************************************************************************************************************/

    describe('Testes cadastro de usuário - Inválido', () => {
        beforeEach(() => {
            Login.acessarMercadoOnline()
            CadastrarUsuario.acessarCadastro()
        })
        it('Deve realizar o cadastro de uma pessoa com cpf inválido', () => {
            CadastrarUsuario.campoCpfInvalido()
        })
    })
})