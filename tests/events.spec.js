import{test,expect}from '@playwright/test'
test('handling frames in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
    await page.locator('#others').hover()
}
)