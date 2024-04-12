import {chromium, firefox, test, webkit} from "@playwright/test"

test("Test to Launch Browser in different browsers", async () => {

    // Launch in Chrome
    const browser = await chromium.launch({headless: false, channel : "chrome"});

    const browserVersion = await browser.newContext();

    const page = await browserVersion.newPage();

    await page.goto("https://developer.salesforce.com/")

    await page.waitForTimeout(2000);

    await page.close();

    await browserVersion.close();

    await browser.close();

    // Launch in MSEdge
    const browser2 = await chromium.launch({headless: false, channel : "msedge"});

    const browserVersion2 = await browser2.newContext();

    const page2 = await browserVersion2.newPage();

    await page2.goto("https://developer.salesforce.com/")

    await page2.waitForTimeout(2000);

    await page2.close();

    await browserVersion2.close();

    await browser2.close();

    // Launch in Firefox
    const browser3 = await firefox.launch({headless: false});

    const browserVersion3 = await browser3.newContext();

    const page3 = await browserVersion3.newPage();

    await page3.goto("https://developer.salesforce.com/")

    await page3.waitForTimeout(2000);

    await page3.close();

    await browserVersion3.close();

    await browser3.close();

    // Launch in Safari
    const browser4 = await webkit.launch({headless: false});

    const browserVersion4 = await browser4.newContext();

    const page4 = await browserVersion4.newPage();

    await page4.goto("https://developer.salesforce.com/")

    await page4.waitForTimeout(2000);

    await page4.close();

    await browserVersion4.close();

    await browser4.close();
    
})