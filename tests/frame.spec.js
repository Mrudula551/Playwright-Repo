import{test,expect}from '@playwright/test'
test('handling frames in playwright',async({page})=>{
    await page.goto('https://demoqa.com/frames')
    const frame1 = page.frameLocator('#frame1')
    console.log(await frame1.locator('#sampleHeading').textContent())
})