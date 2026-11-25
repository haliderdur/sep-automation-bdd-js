@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed. 

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


    Background:
        Given user is on the enrollment page
        And user has completed start application step
        When user selects the "Upfront" payment plan
        And clicks the next button on payment plan page


    @sep25-1
    Scenario Outline: An invalid card number displays the corresponding immediate error
        When the user enters "<card_number>" in the card number field
        Then the card number error message should be "<error_message>"

        Examples:
            | card_number | error_message                    |
            | 4242        | Your card number is incomplete.  |
            | 1234567890123456 | Your card number is invalid. |