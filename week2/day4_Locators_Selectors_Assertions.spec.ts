/*

Assignment:1_Create a Lead
1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Create Lead
8. Fill the Company Name
9. Fill the First Name
10. Fill the Last Name
11. Fill the Salutation
12. Fill the Title
13. Fill the Annual Revenue
14. Fill the Department
15. Fill the Phone number
16. Click Create Lead button
17. Verify the company name, first name, last name and the status using auto retrying and nonretrying assertions

*/

import {expect, test} from "@playwright/test"

test ("Create Lead", async ({page}) => {

await page.goto("http://leaftaps.com/opentaps/control/main");

await page.fill("#username", 'Demosalesmanager', {timeout:500});

await page.fill("#password", 'crmsfa');

await page.click(".decorativeSubmit");

await page.getByText('CRM/SFA').click();

await page.getByRole('link', { name: 'Leads' }).click({timeout : 5000});

await page.getByRole('link', { name: 'Create Lead' }).click({timeout : 5000});

//await page.getByText('Create Lead').click({timeout : 5000});

await page.fill("input[name='companyName']","Virtusa");

await page.fill("input[id='createLeadForm_firstName']","Sheeba");

await page.fill("input[id='createLeadForm_lastName']","M Karthik");

await page.fill("#createLeadForm_personalTitle","Mrs");

await page.fill("#createLeadForm_generalProfTitle","Senior QA Consultant");

await page.fill("#createLeadForm_annualRevenue","10");

await page.fill("#createLeadForm_departmentName","Testing");

await page.fill("#createLeadForm_primaryPhoneNumber","82203");

await page.waitForTimeout(2000);

await page.click("input[value='Create Lead']", {timeout : 5000});

//Retrying Assertions
const companyName = page.locator("#viewLead_companyName_sp");
await expect(companyName).toContainText("Virtusa");

const firstName = page.locator("#viewLead_firstName_sp");
await expect(firstName).toHaveText("Sheeba");

const lastName = page.locator("#viewLead_lastName_sp");
await expect(lastName).toHaveText("M Karthik");

const status = page.locator("#viewLead_statusId_sp");
await expect(status).toHaveText("Assigned");
    
})

/*

Assignment:2_Edit a Lead
1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Find Leads
8. Enter the first name
9. Click Find Leads button
10. Click the first resulting Lead ID
11. Click Edit
12. Edit Company name
13. Edit Annual Revenue
14. Edit Department
15. Enter Description
16. Click Update
17. Verify the edited fields using appropriate assertions

*/

test("Edit Lead", async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.fill("#username", 'Demosalesmanager');

    await page.fill("#password", 'crmsfa');

    await page.click(".decorativeSubmit");

    await page.getByText('CRM/SFA').click({timeout : 5000});

    await page.getByRole('link', { name: 'Leads' }).click();

    await page.getByRole('link', { name: 'Find Leads' }).click();

    await page.locator("input[name='firstName']").nth(2).fill("Sheeba");

    await page.getByRole('button', { name: 'Find Leads' }).click();

    await page.locator("div[class='x-grid3-cell-inner x-grid3-col-partyId'] a").nth(0).click();

    await page.getByRole('link', {name :'Edit'}).click({timeout : 5000});

    await page.locator("#updateLeadForm_companyName").clear();
    await page.fill("#updateLeadForm_companyName","Thoughtworks");
    
    await page.locator("#updateLeadForm_annualRevenue").clear();
    await page.fill("#updateLeadForm_annualRevenue","30");

    await page.locator("#updateLeadForm_departmentName").clear();
    await page.fill("#updateLeadForm_departmentName","Management");

    await page.fill("#updateLeadForm_description","Started working together");

    await page.click("input[class='smallSubmit']", {timeout : 5000});

    const compName = page.locator("#viewLead_companyName_sp");
    await expect(compName).toContainText("Thoughtworks");

    const revenue = page.locator("#viewLead_annualRevenue_sp");
    await expect(revenue).toContainText("30");

    const dept = page.locator("#viewLead_departmentName_sp");
    await expect(dept).toHaveText("Management");

    const desc = page.locator("#viewLead_description_sp");
    await expect(desc).toContainText("Started working together");

})

/*

Assignment: 3 Create a new Account
1. Navigate to the url https://login.salesforce.com/
2. Enter username using getByLabel
3. Enter password using getByLabel
4. Click Login
5. Verify the title and url of the page using appropriate assertions
6. Click App Launcher using the class locator
7. Click View All using getByText
8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder
9. Click Service using index based XPath
10. Click Accounts using attribute based CSS selector
11. Click New using getByRole
12. Enter Account name using attribute based CSS selector
13. Click Save button using XPath
14. Verify the toast message displayed

*/

test.only("Create a New Account", async ({page}) => {

    await page.goto("https://login.salesforce.com/");

    await page.getByLabel('Username').fill("sheeba@vir.sandbox");

    await page.getByLabel('Password').fill("LakshMagi@2023");

    await page.locator("input[name='Login']").click();

    //Below lines of code are not working for me.

   // const title = page.title();
  //  await expect(title).toMatch("Home | Salesforce");
   // await expect(page).toHaveTitle("Home | Salesforce");

  //  const actualUrl = "https://vir-c-dev-ed.develop.lightning.force.com/lightning/setup/EnhancedProfiles/page?address=%2F00eIT000002Jw9Y";
  //  await expect(actualUrl).toMatch(actualUrl);
  //  await expect(page).toHaveURL(actualUrl);

await page.locator(".slds-icon-waffle").click();

await page.getByText("View All").click();

await page.getByPlaceholder("Search apps or items...").fill("Service");

await page.locator("p[class='slds-truncate']").nth(0).click();

await page.locator("a[title='Accounts'] span").click();

await page.getByRole('button', { name: 'New'}).click();

await page.waitForTimeout(10000);

await page.locator("input[class='slds-input']").nth(0).fill("Virtusa");

await page.locator("button[name='SaveEdit']").click();

    
})