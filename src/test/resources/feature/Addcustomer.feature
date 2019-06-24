
@tag
Feature: Addcustomer.feature
  @tag1
  Scenario Outline: Title of your scenario
    Given The user is in telecom home page
    And The user click on add customer  
    When The user filling all details  
    And The user click on submit button
    Then The user should be displayed id
   
   Examples:
    |test|selenium|test@gmail.com|Chennai|123456|
     |asar|selenium1|as@gmail.com |omr    |654321|