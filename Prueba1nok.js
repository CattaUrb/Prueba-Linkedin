const playwright = require('playwright');

const url ='https://www.linkedin.com/';

(async () => {

    for (const browserType of ['chromium']){//, 'firefox', 'webkit']) {
        const browser = await playwright[browserType].launch({ headless: false })
        const context = await browser.newContext();
        const page = await context.newPage()
        await page.goto(url);
        await new Promise(r => setTimeout(r, 7000));
        await page.screenshot({path: './pag1.png'}) 
        await page.waitForSelector('a.nav__button-secondary', { state: 'visible' });
        await page.click('a.nav__button-secondary');
        await new Promise(r => setTimeout(r, 7000));
        await page.screenshot({path: './pag2.png'});
        await page.waitForSelector('#username', { state: 'visible' });
        await page.fill('input#username', '3192521931');
        await page.fill('input#password', 'dhnr7hmy29');

        await page.screenshot({path: './pag3.png'});
        await page.click('css=button');
        await page.screenshot({path: './pag4.png'});

    }
})();