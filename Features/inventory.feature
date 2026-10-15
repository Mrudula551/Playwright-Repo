Feature: inventoryPage

Scenario:Verify inventory iteam count for different users

Given User is on application login page
When user logs in with "<username>" and "<password>"
Then user should see "<Result>"
And inventory iteam count should be "<count>"


Examples:
    | username       | password      |Result              |count |
    | standard_user  | secret_sauce  |InventoryPage       |6     |
    | locked_out_user| secret_sauce  |Error message       |0     |
    | problem_user   | secret_sauce  |InventoryPage       |6     |