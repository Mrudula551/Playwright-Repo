import{test,expect}from '@playwright/test'
import { LoginPage } from '../Pages/login.js'
import testData from '../Utils/testDataCredentials.json' with {type:'json'}

test.only('verify user login with valid credentials',async({page})=>{
   // await page.goto('https://www.saucedemo.com/');
    //const usernamefield=page.locator("#user-name")
    //await usernamefield.fill("standard_user")
    //const passwordfield=page.locator("//input[@name='password']")
    //await passwordfield.fill('secret_sauce')
    //const loginbutton=page.locator('#login-button')
    //await loginbutton.click()
    const username=testData.validUsername
    const password=testData.validPassword
    const login =new LoginPage(page)//constructor invoking,page by page test,this for current page
    await login.navigateToApplication()
    //await login.applicationLogin()
    await login.applicationLogin(username,password)//for json file reading
    


})
test('Verify user login with invalid credentials',async({page})=>{
    const invalidusername=testData.invalidUsername
    const invalidpassword=testData.invalidPassword
    const login =new LoginPage(page)//constructor invoking,page by page test,this for current page
    await login.navigateToApplication()
    await login.applicationLogin(invalidusername,invalidpassword)

})