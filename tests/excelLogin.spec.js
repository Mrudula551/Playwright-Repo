import{test,expect} from '@playwright/test'
import { getCellData } from '../Utils/excelRead'

test('Login using Excel read',async({page})=>{
    const username=getCellData(4,1)
    const password=getCellData(4,2)

    await page.goto('https://www.saucedemo.com/')
    const usernamefield=page.locator("#user-name")
    await usernamefield.fill(username)
    const passwordfield=page.locator("//input[@name='password']")
    await passwordfield.fill(password)
    const loginbutton=page.locator('#login-button')
    await loginbutton.click()
})