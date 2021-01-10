Feature: Home

  Scenario Outline: Homepage Women items click on check
    Given I am on home page
    And User click on Women Category
    Then Page title should be <title>
    Examples:
      | title              |
      | "Women - My Store" |

  Scenario Outline: Homepage Dresses items click on check
    Given I am on home page
    And User click on Dresses Category
    Then Page title should be <title>
    Examples:
      | title              |
      | "Women - My Store" |

  Scenario Outline: Homepage TShirts items click on check
    Given I am on home page
    And User click on T-Shirts Category
    Then Page title should be <title>
    Examples:
      | title              |
      | "Women - My Store" |
