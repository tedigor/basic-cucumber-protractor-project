import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import { GooglePo } from '../pages/google.po';
import { testHelpers } from '../utils/test-helpers';


const googlePage: GooglePo = new GooglePo();
const resultSearch = 'Unifacisa, o melhor Centro Universitário do Norte/Nordeste';

Given('que o usuário esteja no site do google', async function () {
    await testHelpers.navigateTo(googlePage.url);
});

When('ele digitar {string} no campo de busca', async function (valor) {
    await googlePage.preencherCampoDePesquisa(valor);
});

When('submeter a pesquisa', async function () {
    await googlePage.realizarBusca();
});


Then('o link para acessar o site {string} será exibido', async function (resultado) {
    expect(await googlePage.getPrimeiroResultado().getText()).equal(resultSearch);
});