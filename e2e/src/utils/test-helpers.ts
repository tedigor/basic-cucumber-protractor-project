import { browser, ElementFinder, ExpectedConditions } from 'protractor'

export const DEFAULT_TIMEOUT = 5000;

export const testHelpers = {
    async navigateTo(url: string) : Promise<void> {
        await browser.get(url);
    },
    async visibilityOf(el: ElementFinder, timeout = DEFAULT_TIMEOUT) : Promise<void> {
        await browser.wait(ExpectedConditions.visibilityOf(el), timeout);
    }
}