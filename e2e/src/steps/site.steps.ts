import { expect } from 'chai';
import { Then, When } from 'cucumber';
import { browser } from 'protractor';
import { GooglePo } from '../pages/google.po';

const UNIFACISA_URL = 'https://www.unifacisa.edu.br/home';
const ANAC_URL = 'https://www.anac.gov.br/';
const BOOTSTRAP_URL = 'https://getbootstrap.com/';

const googlePage: GooglePo = new GooglePo();

When('o usuário acessar o link {string}', async function (site) {
    await googlePage.getPrimeiroResultado().click();
});

Then('o site {string} será exibido', async function (site) {
    let currentUrl;
    if (site === 'Unifacisa') {
        currentUrl = UNIFACISA_URL;
    } else if (site === 'Anac') {
        currentUrl = ANAC_URL
    } else {
        currentUrl = BOOTSTRAP_URL;
    }
    expect(await browser.getCurrentUrl()).equal(currentUrl);
});