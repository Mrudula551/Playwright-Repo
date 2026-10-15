export class LoginPage{
    constructor(page){
        this.page=page
        this.usernamefield=page.locator("#user-name")
        this.passwordfield=page.locator("//input[@name='password']")
        this.loginbutton=page.locator('#login-button')
        this.errormessage=page.getByRole('alert')
    }
    async navigateToApplication(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    /*async applicationLogin(){
        await this.usernamefield.fill("standard_user")
        await this.passwordfield.fill('secret_sauce')
        await this.loginbutton.click()
    }*/
   //for json file reading
   /*async applicationLogin(username,password){
        await this.usernamefield.fill(username)
        await this.passwordfield.fill(password)
        await this.loginbutton.click()
    }*/
   //invalid user
   async applicationLogin(invalidusername,invalidpassword){
        await this.usernamefield.fill(invalidusername)
        await this.passwordfield.fill(invalidpassword)
        await this.loginbutton.click()
   }
}