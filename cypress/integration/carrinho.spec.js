/// <reference types="cypress" />

import Carrinho from '../pages/mercado_carrinho.page'
import Login from '../pages/mercado_login.page'

describe('Testes Front-end Mercado Online - CARRINHO', () => {
    describe('Testes de carrinho - Válido', () => {
        beforeEach(() => {
            Login.acessarMercadoOnline()
        })
        it('Deve adicionar itens ao carrinho e realizar validações no modal e na página do carrinho com sucesso', () => {
            Carrinho.adicionarItemCarrinho()
            Carrinho.modalCarrinho()
            Carrinho.paginaCarrinho()
        })
    })

    /************************************************************************************************************************/

    describe('Testes de carrinho - Inválido', () => {
        beforeEach(() => {
            Login.acessarMercadoOnline()
        })
        it('Deve adicionar itens ao carrinho e inserir um CEP inválido no frete', () => {
            Carrinho.compraCepInvalido()
        })
    })    
})