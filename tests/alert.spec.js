import{test,expect} from '@playwright/test'

test('Handling alerts in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe('I am a Javascript alert box!')
        await dialog.accept();//for ok button in alert
        //await dialog.dismiss();//for cancel button
    })
    const alert= page.locator("//button[@class= 'btn btn-success']")
    await alert.click()

})