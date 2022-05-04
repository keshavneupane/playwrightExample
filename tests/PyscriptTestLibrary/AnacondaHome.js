const { expect } = require('@playwright/test');
const ANACONDA_HOME = require('../ObjectLibrary/AnacondaHome');




class HomePage {

    /**
        * @param {import('playwright').Page} page 
        */
    constructor(page) {
        this.page = page;
    }

    /* verify logo and Sigin in Button is present */

    async verifyLogoSignInPresent(page) {

        await page.goto('https://anaconda.cloud/');     // This can be added to common utils so that can be resused
        
        await expect(page.locator(ANACONDA_HOME.ANACONDA_LOGO)).toBeVisible();
        await expect(page.locator(ANACONDA_HOME.SIGNIN_BUTTON)).toBeVisible();
    }

}


module.exports = { HomePage };