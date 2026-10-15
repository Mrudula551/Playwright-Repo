import{test,expect}from'@playwright/test'
test('handling dropdown in playwright',async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //await page.waitForLoadState('networkidle')
    const dropdown1=page.locator('#dropdowm-menu-1')
    //await dropdown1.selectOption({index:1})//select by index
   // await dropdown1.selectOption({value:'java'})//select by value
   await dropdown1.selectOption({label:'SQL'})

})

test('handling checkbox in playwright',async({page})=>{
    await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const checkbox1=page.locator("//input[@value='option-1']")
    await checkbox1.check()
    const checkbox2=page.locator("//input[@value='option-2']")
    await checkbox2.check()
    await checkbox2.uncheck()
})

test.only('handling radiobutton in playwright',async({page})=>{
   await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html') 
   const radio1=page.locator("//input[@value='green']")
   await radio1.click()
})