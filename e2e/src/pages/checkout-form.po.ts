import { browser, by, element, ElementFinder } from 'protractor';
import { testHelpers } from '../utils/test-helpers';

export class CheckoutFormPo {
    
    url = 'https://getbootstrap.com/docs/4.5/examples/checkout/';
    
    labels = {
        'First name': 'firstName',
        'Last name': 'lastName',
        'Username': 'username',
        'Email': 'email',
        'Address': 'address',
        'Address 2': 'address2',
        'Country': 'country',
        'State': 'state',
        'Zip': 'zip',
        'Name on card': 'nameOnCard',
        'Credit card number': 'creditCardNumber',
        'Expiration': 'expiration',
        'CVV': 'cvv',
        'Promo code': 'promoCode',
        'Continue to checkout': 'continueButton',
        'Redeem': 'redeem',
    };

    buttons = {
        continueButton: element(by.buttonText('Continue to checkout')),
        redeem: element(by.buttonText('Redeem'))
    };

    inputs = {
        firstName: testHelpers.getElementById('firstName'),
        lastName: testHelpers.getElementById('lastName'),
        username: testHelpers.getElementById('username'),
        email: testHelpers.getElementById('email'),
        address: testHelpers.getElementById('address'),
        address2: testHelpers.getElementById('address2'),
        zip: testHelpers.getElementById('zip'),
        nameOnCard: testHelpers.getElementById('cc-name'),
        creditCardNumber: testHelpers.getElementById('cc-number'),
        expiration: testHelpers.getElementById('cc-expiration'),
        cvv: testHelpers.getElementById('cc-cvv'),
        promoCode: element(by.css('input[placeholder="Promo code"]'))
    };

    selects = {
        country : testHelpers.getElementById('country'),
        state : testHelpers.getElementById('state')
    };

    checkBox = {
        sameAdress: testHelpers.getElementById('same-address'),
        saveInfo: testHelpers.getElementById('save-info')
    };

    paymentType = {
        credit: testHelpers.getElementById('credit'),
        debit: testHelpers.getElementById('debit'),
        paypal: testHelpers.getElementById('paypal')
    };

    getButton(name: string): ElementFinder {
        return this.buttons[this.labels[name]];
    };

    getInput(name: string): ElementFinder {
        return this.inputs[this.labels[name]];
    };

    getSelect(name: string): ElementFinder {
        return this.selects[this.labels[name]];
    };

    getCheckBox(name: string): ElementFinder {
        return name === 'Same Adress'? this.checkBox.sameAdress : this.checkBox.saveInfo;
    };

    getPayment(name: string): ElementFinder {
        switch (name) {
            case 'Credit':
                return this.paymentType.credit;
            case 'Debit':
                return this.paymentType.debit;
            case 'Paypal':
                return this.paymentType.paypal;
            default:
                break;
        }
    }

    async fillInputWithValue(inputName: string, value: string) {
        await this.getInput(inputName).sendKeys(value);
    }

    async selectOption(selectName: string, value: string) {
        await this.getSelect(selectName).click();
        await testHelpers.visibilityOf(element.all(by.tagName('option')).first());
        await testHelpers.getElementByText('option', value);
    }

    async clickOnButton(buttonName: string) {
        await this.getButton(buttonName).click();
    }

    async selectCheckBox(checkBoxName: string) {
        await this.getCheckBox(checkBoxName).click();
    }

    async selectPayment(paymentType: string) {
        await this.getPayment(paymentType).click();
    }

    getFirstNameErroMessage() {
        // await testHelpers.visibilityOf(element.all(by.className('invalid-feedback')).first());
        return element.all(by.css('.invalid-feedback')).first().getText();
        // await testHelpers.visibilityOf(testHelpers.getElementByText('.invalid-feedback', message));
    }
}