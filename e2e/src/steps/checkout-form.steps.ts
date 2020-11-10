import { expect } from 'chai';
import { Given, Then, When } from 'cucumber';
import * as faker from 'faker';
import { CheckoutFormPo } from '../pages/checkout-form.po';
import { testHelpers } from '../utils/test-helpers';


const checkoutFormPage: CheckoutFormPo = new CheckoutFormPo;

faker.locale = 'pt_BR';

Given('que o usuário esteja acessando o fomulário checkout do bootstrap', async function () {
    await testHelpers.navigateTo(checkoutFormPage.url);
});


When('o usuário preencher corretamente todos os campos do formulário', async function () {

    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    await checkoutFormPage.fillInputWithValue('First name', firstName);
    await checkoutFormPage.fillInputWithValue('Last name', lastName);
    await checkoutFormPage.fillInputWithValue('Username', faker.internet.userName());
    await checkoutFormPage.fillInputWithValue('Email', faker.internet.email());
    await checkoutFormPage.fillInputWithValue('Address', faker.address.streetAddress());
    await checkoutFormPage.fillInputWithValue('Address 2', faker.address.streetAddress());
    await checkoutFormPage.selectOption('Country', 'United States');
    await checkoutFormPage.selectOption('State', 'California');
    await checkoutFormPage.fillInputWithValue('Zip', faker.address.zipCode());
    await checkoutFormPage.fillInputWithValue('Name on card', `${firstName + ' ' + lastName}`);
    await checkoutFormPage.fillInputWithValue('Credit card number', faker.finance.creditCardNumber());
    await checkoutFormPage.fillInputWithValue('Expiration', faker.finance.creditCardNumber());
    await checkoutFormPage.fillInputWithValue('CVV', faker.finance.creditCardCVV());
});

When('clicar no botão {string}', async function (botao) {
    await checkoutFormPage.clickOnButton(botao);
});

Then('os campos serão limpos, indicando sucesso na submissão', async function () {
    expect(await checkoutFormPage.getInput('First name').getText()).to.be.empty;
});

When('não preencher o campo {string}', async function (campo) {
    //Assertion apenas para explicação do fluxo. 
});

Then('a mensagem de erro {string} será exibida', async function (mensagem) {
   await checkoutFormPage.getFirstNameErroMessage().then(elmText => expect(elmText).equal(mensagem));
});