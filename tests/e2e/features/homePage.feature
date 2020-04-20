Feature: User Accounts

@CucumberScenario
Scenario: Creating a new valid user account
    Given I am on the Way2Automation web tables page
    When I click the Add User button
    When I fill in the required fields
    When I click Save
    Then I should see the new account has been added

@CucumberScenario
Scenario: Deleting a user account
    Given I am on the Way2Automation web tables page
    When I click the x to remove an account
    When I confirm I want to delete the user
    Then I should see the account has been deleted
    