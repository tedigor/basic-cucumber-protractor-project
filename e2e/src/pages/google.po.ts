import { by, element, ElementFinder } from "protractor";
import { testHelpers } from '../utils/test-helpers';

export class GooglePo {
    
    url = 'https://www.google.com/';
    
    logo: ElementFinder = element(by.id('hplogo'));
    searchInput: ElementFinder = element(by.css('input[title="Pesquisar"]'));
    searchButton: ElementFinder = element(by.name('btnK'));
    luckyButton: ElementFinder = element(by.name('btnI'));


    async preencherCampoDePesquisa(valor: string) {
        await this.searchInput.sendKeys(valor);
    }

    async realizarBusca() {
        await testHelpers.visibilityOf(this.searchButton);
        await this.searchButton.click();
    }

    getPrimeiroResultado() {
        return element.all(by.css('.g a h3')).first();
    }
}