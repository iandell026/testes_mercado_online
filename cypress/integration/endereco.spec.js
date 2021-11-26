/// <reference types="cypress" />

import CadastrarEnderecos from '../pages/mercado_endereco.page'
import Login from '../pages/mercado_login.page'

describe('Testes Front-end Mercado Online - CADASTRO DE ENDERECOS', () => {
    describe('Testes cadastro de enderecos - Válido', () => {
        beforeEach(() => {
            Login.acessarMercadoOnline()  
            Login.realizarLogin() 
        })
        it('Deve adicionar um endereco com sucesso', () => {
            CadastrarEnderecos.verificaEndereco()
            CadastrarEnderecos.cadastroEndereco()
        })
    })

    /************************************************************************************************************************/

    describe('Testes cadastro de enderecos - Inválido', () => {
        beforeEach(() => {
            Login.acessarMercadoOnline()  
            Login.realizarLogin() 
        })
        it('Deve adicionar um endereco com cep invalido', () => {
            CadastrarEnderecos.verificaEndereco()
            CadastrarEnderecos.cadastroEnderecoInvalido()
        })
    })
})