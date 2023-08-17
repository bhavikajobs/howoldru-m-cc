@smoke
Feature: HomePage Test
  As user I want to calculate my age

  Scenario Outline: User should get their age with valid details
    Given I am on homepage
    When I enter name "<name>"
    And  I enter date of birth "<dateOfBirth>"
    And  I click on submit button
    Then I should see to greeting text "<name>"
    Then I should see to greeting age "<age>"
    Examples:
      | name  | dateOfBirth | age |
      | John  | 05/08/2000  | 23  |
      | Messi | 07/09/1980  | 42  |
      | Sima  | 15/04/1978  | 45  |
      | Mira  | 15/04/1908  | 115 |

  Scenario Outline: User should get error message with invalid details
    Given I am on homepage
    When I enter name "<name>"
    And  I enter date of birth "<dateOfBirth>"
    And  I click on submit button
    Then I should see the error message "<error>"
    Examples:
      | name   | dateOfBirth | error                             |
      | Sima   | 15/04/1808  | you are too old to use it         |
      | Mira   | 15/03/2026  | your birthday must be in the past |
      | Silvia | 31/02/2000  | wrong date                        |
      | Tom    | 29/02/1982  | wrong date                        |