import { test,expect } from'@playwright/test'
test('calender validation in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/date-picker.php');
    const dateinput1 =page.locator('#single-input-field')
    await dateinput1.click()
    const targetyear =1997;
    await expect(page.locator('.datepicker-dropdown')).toBeVisible();
    const switchbutton =page.locator('.datepicker-switch:visible')
    await switchbutton.click();
    await switchbutton.click();
    let attempts=10;
    while(attempts--)
    {
        const decadetext=await switchbutton.innerText();
        const startyear=parseInt(decadetext.split('-')[0].trim())
        if(targetyear>=startyear &&targetyear<=startyear +9)break;
        await page.locator('.prev:visible').click();
    }
        await page.locator('.year:visible').filter({hasText:'1997'}).click();
        await page.locator('.month:visible').filter({hasText:'Sep'}).click();
        await page.locator('.day:not(.old):not(.new)',{hasText:/^14$/}).click();
        const showdate=page.locator('#button-one');
        await showdate.click();


    



}
)
