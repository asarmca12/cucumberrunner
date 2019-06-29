
@tag
Feature: Addcustomer.feature
  @tag1
  Scenario: Title of your scenario
    Given The user is in telecom home page
    And The user click on add customer  
    When The user filling all details 
     |test|selenium|test@gmail.com|Chennai|123456|
    
    And The user click on submit button
    Then The user should be displayed id
   
   