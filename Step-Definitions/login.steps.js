import { Given,When,Then,setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright";
import assert from 'assert'
setDefaultTimeout(30000)
let browser 
let page

Given('user is on login page',async function(){
    browser= await chromium.launch({headless:false,slowMo:1000})
    page=await browser.newPage()
    await page.goto('https://www.saucedemo.com/');

})

When('user enters username and password',async function(){
    const usernamefield=page.locator("#user-name")
    await usernamefield.fill("standard_user")
    const passwordfield=page.locator("//input[@name='password']")
    await passwordfield.fill("secret_sauce")
})
When('when clicks login button',async function(){
    const loginbutton=page.locator('#login-button')
    await loginbutton.click()
})
Then('user should see inventory page',async function(){
    assert (await page.url().includes('https://www.saucedemo.com/inventory.html'))
    await browser.close()
    
})


When('user enters invalid username and invalid password',async function(){
    const usernamefield=page.locator("#user-name")
    await usernamefield.fill("invalid user")
    const passwordfield=page.locator("//input[@name='password']")
    await passwordfield.fill('invalid password')
})

Then('user should see an error message',async function(){
    const errormessage=page.locator('["data-test=error"]')
    await browser.close()
    
})
