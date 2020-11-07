import { Before } from 'cucumber';
import { browser } from 'protractor';

Before(() => {
    browser.waitForAngularEnabled(false);
});