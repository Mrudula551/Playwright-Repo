Feature:Saucedemo Login
@ValidLogin
Scenario:Successful login with valid credentials

Given user is on login page
When user enters username and password
And when clicks login button
Then user should see inventory page




