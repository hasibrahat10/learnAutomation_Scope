Feature: Home
  Scenario: Homepage different items click on check
    Given User Launch Chrome browser
    When User open URL "http://automationpractice.com/index.php"
    And  User click on Women Category
    And User click on Dresses Category
    And User click on T-Shirts Category
    And close browser