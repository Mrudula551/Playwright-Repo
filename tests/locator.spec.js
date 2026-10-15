/*Locators are the central piece of Playwright's auto-waiting and retry-ability. In a nutshell, locators represent a way to find element(s) on the page at any moment.

Quick Guide
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute 
(other attributes can be configured).
*/ 


import{test,expect}from'@playwright/test'
test('locators in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/simple-form-demo.php');
    const messagebox = page.locator('#single-input-field')//id locator represent by #
    const messagebox2 = page.locator('.form-control')
    const showmessagebutton =page.locator("//button[@id='button-one']")
    const gettotal =page.locator("//button[text()='Get Total']")//xpath using text instead of attribute and attribute value
})

test.only('Special locator in playwright',async({page})=>{
    await page.goto('https://groceryapp.uniqueassociates.com/admin/login');
    const usernamefield =page.locator("//input[@name='username']")
    await usernamefield.fill('admin');
    const passwordfield =page.locator("//input[@name='password']")
    await passwordfield.fill(admin)
    const signinbutton =page.locator("//button[text()='Sign In']")
    await signinbutton.click();
    await page.goto('');
    await page.getByRole('button').nth(0).click();
    await page.getByRole('button').nth(1).click();


})