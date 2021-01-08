Feature: Home
  Scenario: Homepage Women items click on check
    Given I am on home page
    And  User click on Women Category
    Then Page title should be "Women - My Store"