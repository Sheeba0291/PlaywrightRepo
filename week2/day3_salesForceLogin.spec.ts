/*
Assignment Details:
Your task is to print the title and url of a web page using Playwright.

Precondition:
- Launch Chromium in non-headless mode
- Create a new browser context.
- Open a new page within the browser context.
- Load the url https://login.salesforce.com/
- Use your Salesforce credentials that you’ve created

Requirements:
- Enter the username.
- Enter the password.
- Click the Login button.
- Wait for 10 seconds
- Print the page title and the current url of the page
- Close the browser  */

import {chromium, test} from "@playwright/test"

test ("Login to SalesForce", async () => {

    const browser = await chromium.launch({headless : false});

    const browserContext = await browser.newContext();

    const page = await browserContext.newPage();

    await page.goto("https://vir-c-dev-ed.develop.my.salesforce.com/?ec=302&startURL=%2Fvisualforce%2Fsession%3Furl%3Dhttps%253A%252F%252Fvir-c-dev-ed.develop.lightning.force.com%252Flightning%252Fsetup%252FEnhancedProfiles%252Fpage%253Faddress%253D%25252F00eIT000002Jw9Y");

    await page.fill("#username","sheeba@vir.sandbox");

    await page.fill("#password","LakshMagi@2023");

    await page.click("#Login");

    await page.waitForTimeout(10000);

    const title = await page.title();
    const url = page.url();

    console.log("Title of the page is "+title);
    console.log("URL of the page is "+url);

    await page.close();

    await browserContext.close();

    await browser.close();
    
})


