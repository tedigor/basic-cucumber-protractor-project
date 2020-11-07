import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor'

export const DEFAULT_TIMEOUT = 5000;

export const testHelpers = {
    async navigateTo(url: string) : Promise<void> {
        await browser.get(url);
    },
    async visibilityOf(el: ElementFinder, timeout = DEFAULT_TIMEOUT) : Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(el), timeout);
    },
    getElementById(id: string): ElementFinder {
        return element(by.id(id));
    }
}