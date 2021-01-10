Feature: Login with ThisHeart

  Scenario: Successful Login with Valid credentials
    Given User Launch Chrome browser
    When User open URL "http://automationpractice.com/index.php"
    And  User click on Sign In Button
    And User enter Email as "demot@yopmail.com" and Password as "hasib12345"
    And Click on Login
    And close browser