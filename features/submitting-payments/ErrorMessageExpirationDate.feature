@sep27
Feature: Error messages for the invalid expiration number

    As a user, I want to be informed when my card's expiration date has failed. 


    #* AC1: 1. An immediate error message should be thrown if the expiration number is too short or wrong:
    #*                  Your card's expiration date is incomplete.
    #*                  Your card's expiration year is in the past.


    Background:
        Given user is on the enrollment page
        And user has completed start application step
        When user selects the "Upfront" payment plan
        And clicks the next button on payment plan page

    @sep27-1
    Scenario Outline: An invalid expiration date displays the corresponding immediate error
        When the user enters "<expiry_date>" in the expiration date field
        Then the expiration date error message should be "<error_message>"

        Examples:
            | expiry_date | error_message                                |
            | 12          | Your expiration date is incomplete.          |
            | 12/20       | Your card’s expiration year is in the past.  |