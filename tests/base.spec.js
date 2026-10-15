//for making executable file we need to write in test folder 
//importing test runner
import{test}from'@playwright/test'


test('browser context playwrighttest',async({browser})=>{
    const context=await browser.newContext()
    const page =await context.newPage()
    await page.goto('https://selenium.qabible.in/')
})


//page fixture
test.only('page playwrighttest',async({page})=>{
    await page.goto('https://selenium.qabible.in/')

})