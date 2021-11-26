/// <reference types="cypress" />

import Login from '../pages/mercado_login.page'

describe('Testes Front-end Mercado Online - LOGIN', () => {
    describe('Testes de login - Válido', () => {
        beforeEach(() => {
            Login.acessarMercadoOnline()
        })
        it('Deve realizar login no sistema com sucesso', () => {
            Login.verificarLogin()
            Login.realizarLogin()
        })
    })
        
    /************************************************************************************************************************/

    describe('Testes de login - Inválido', () => {
        beforeEach(() => {
            Login.acessarMercadoOnline()
        })
        it('Deve realizar login no sistema com usuário inexistente', () => {
            Login.falhaLogin()
        })
    })
})