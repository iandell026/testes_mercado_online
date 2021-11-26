import Base from './_base.page'

import { MERCADORIA } from './components/carrinho.elements'

export default class ConferirMercadoria extends Base {
    static acessarSite() {
        cy.visit(MERCADORIA.URL_PRODUTOS)
    }

    static conferirProdutoNoCarrinho() {
        super.getElement(MERCADORIA.BOTAO_ADD).first().click({ force: true })
        super.getElement(MERCADORIA.NUM_PRODUTOS_CARRINHO).first().should('contain', '1')

        super.clickOnElement(MERCADORIA.BOTAO_MENU_CARINHO)
        super.getElement(MERCADORIA.ITEM_MENU_CARRINHO)

        super.clickOnElement(MERCADORIA.BOTAO_FINALIZAR)
    }

    static compraFinalizada() {
        super.validarUrl(MERCADORIA.URL_COMPRA_FINAL)
    }

    static carrinhoVazio() {
        super.getElement(MERCADORIA.NUM_PRODUTOS_CARRINHO).first().should('contain', '0')

        super.clickOnElement(MERCADORIA.BOTAO_MENU_CARINHO)

        super.getElement(MERCADORIA.MSG_CARRINHO_VAZIO).should('contain', 'Opss! Não há produtos em seu carrinho :/')
    }

}