import{test,expect}from'@playwright/test'
/*
//first capture screenshot - baseline screenshot
//and it compare with second screenshot and if it is equal then case passes
//Assertion - expect keyword has to get imported 
// tobevisible, 
// tohavetext-- checks texts
tocontaintext-to partially check
tobeenabled - checks button is enabled
tohaveurl- to checks expected url
tohavetitle-page titile verification 

*/

test('static visual test',async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    //await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('saucedemo.png',{
        threshold:0.2//pixel colour difference tolertance 0-no colour 0.1, 0.2 more , not ,more than 0.2
    })

})