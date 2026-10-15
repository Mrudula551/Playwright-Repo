import{test}from'@playwright/test'


test('wait',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
    await page.waitForLoadState('networkidle')
})
