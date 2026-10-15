import { Given,When,Then,setDefaultTimeout,Before,After,BeforeAll,AfterAll,BeforeStep,AfterStep,Status } from "@cucumber/cucumber";
import { chromium } from "playwright";
import assert from 'assert'

setDefaultTimeout(30000)

let browser
let context
let page

BeforeAll(async function(){
    browser=await chromium.launch({headless:false,slomo:300})
})

AfterAll(async function(){
    if(browser){
        await browser.close()
    }
})

Before(async function(){
    context=await browser.newContext()
    page= await context.newPage()
})

After(async function(scenario){
    try{
        if (scenario.result.status===Status.FAILED){
            const screenshot=await page.screenshot()
            this.attach(screenshot,'image/png')
        }
    }
    catch(error){
        console.log('After hook error',error.message)
    }
    finally{
        if (context){
            await context.close()
        }
    }
})

BeforeStep(async function(){
    console.log('Step Starting')
})

AfterStep(async function(){
    console.log('Step Ending')

})

Given('User is on application login page',async function(){
    await page.goto('https://www.saucedemo.com/',{
        waitUntil:'load',
        timeout:30000
    })
})

When('user logs in with {string} and {string}',async function(username,password){
    const usernamefield=page.locator("#user-name")
    await usernamefield.fill(username)
    const passwordfield=page.locator("//input[@name='password']")
    await passwordfield.fill(password)
    const loginbutton=page.locator('#login-button')
    await loginbutton.click()

})

Then('Then user should see {string}',async function(Result){
    if(Result==='InventoryPage'){
        await page.waitForURL('**/inventory.html',{timeout:10000})
    }
    else if(Result==='Error message'){
        const error =await page.locator('[data-test="error"]').textContent()
        assert.ok(error.includes('Epic sadface'))

    }
})

Then('inventory iteam count should be {string}',async function(count){
    if(count==='0')
        return
    const iteam= await page.locator('.inventory_iteam').count()
    assert.strictEqual(iteam,Number(count))
})
    
