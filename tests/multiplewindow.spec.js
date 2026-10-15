import{test,expect}from'@playwright/test'

test('handling multiple windows in playwright',async({page,context})=>{
    await page.goto('https://demo.guru99.com/popup.php');
    //page context fixture - handling incognito window 
    const popup=context.waitForEvent('page')
    const mul=page.locator("//a[text()='Click Here']")
    await mul.click();
    const newpopup=await popup
    await newpopup.waitForLoadState();
    await newpopup.locator("//input[@name='emailid']").fill("mrudu123@gmail.com");
    await newpopup.locator("//input[@name='btnLogin']").click();


    })