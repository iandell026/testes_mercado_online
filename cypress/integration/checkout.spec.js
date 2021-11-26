/// <reference types="cypress" />

import Carrinho from '../pages/mercado_carrinho.page'
import Login from '../pages/mercado_login.page'
import Checkout from '../pages/mercado_checkout.page'

describe('Testes Front-end Mercado Online - CHECKOUT', () => {
    describe('Testes de checkout - Válido', () => {
        beforeEach(() => {
            Login.acessarMercadoOnline()
            Login.realizarLogin()
            Carrinho.adicionarItemCarrinho()
        })
        it('Deve adicionar itens ao carrinho e realizar checkout com sucesso', () => {
            Checkout.finalizarCompra()
            Checkout.realizarCheckout()
        })
    })

    /************************************************************************************************************************/

    describe('Testes de checkout - Inválido', () => {
        beforeEach(() => {
            Login.acessarMercadoOnline()
            Login.realizarLogin()
            Carrinho.adicionarItemCarrinho()
        })
        it('Deve adicionar itens ao carrinho e inserir email inexistente no checkout', () => {
            Checkout.emailInexistente()
        })
    })
})