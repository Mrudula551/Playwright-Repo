import{test,expect}from'@playwright/test'
test('dynamic visual test',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
    //await page.waitForLoadState('networkidle')
    await page.locator('.carousel').evaluate((element)=>{
        element.style.display='none'
    })
    await expect(page).toHaveScreenshot('obsquera.png',{
        threshold:0.2
    })
})



