@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    Background:
        Given user is on the enrollment page

    @sep10-1
    Scenario Outline: Entering personal details
        When the user enters "<first_name>" in first name field
        And the user enters "<last_name>" in last name field
        And the user enters "<email>" in email field
        And the user enters "<phone>" in phone field
        Then Entered texts are displayed in correct fields as they are

        Examples:
            | first_name | last_name | email            | phone      |
            | Halid      | Erdur     | herdur@web.com   | 1234354356 |
            | John       | Doe       | jdoe@web.com     | 9787637256 |
            | Lena       | Nanu      | nanulena@web.com | 4567833344 |

    @sep10-2
    Scenario: Verify that dropdown list visibility
        When the user clicks on How did you hear about us dropdown
        Then the system should display dropdown options as
            | Select One                        |
            | Email                             |
            | Facebook                          |
            | Google                            |
            | Instagram                         |
            | LinkedIN                          |
            | Twitter                           |
            | Referred by a friend or colleague |
            | Other                             |

    @sep10-3
    Scenario: Verify that next button is disabled when required data is missing
        Then the Next button should be disabled

    @sep10-4
    Scenario Outline: Verify that next button is disabled when a required field is invalid
        When the user enters "<invalid_first_name>" in first name field
        And the user enters "<invalid_last_name>" in last name field
        And the user enters "<invalid_email>" in email field
        And the user enters "<invalid_phone>" in phone field
        Then the Next button should be disabled

        Examples:
            | invalid_first_name | invalid_last_name | invalid_email | invalid_phone |
            |                    |                   | a.com         | Xrt239        |
            |                    |                   | @x.com        | NKtr43        |
            |                    |                   | abc@com       | abc           |
