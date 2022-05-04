const {HomePage} = require('../PyscriptTestLibrary/AnacondaHome');
const { test } = require('@playwright/test');
const {logger} = require('../BrowserTestLogger');

const opts = {
    ssIdx: 1,
    name: 'SampleTest'
};


test.describe(opts.name, () => {

/*
    test.beforeEach(async () => {
        await page.goto('https://anaconda.cloud/'); 
    });
*/


    test(
        'logo is present',
        async ({ page }) => {
            const homePage = new HomePage(page);

            try {
            
                logger.info('\x1b[32;01mRunning ' + opts.name + ' tests...' + 'BIT\x1b[0m');
                logger.info('navigating to homepage ');
                await homePage.verifyLogoSignInPresent(page);

            } catch (err) {

                // await TestUtils.takeScreenshot(opts, 'sample test');
                logger.error(err.stack);
                throw err;
            } finally {
                try {
                    logger.info('Tearing down test ....');
                } catch (error) { }
            }
        }
    );

});


