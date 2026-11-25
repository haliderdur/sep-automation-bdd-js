@sep29
Feature: Error message for the invalid CVC number

    As a user, I want to be informed when the CVC number I enter is incorrect or too short.

    #* AC1: The Immediate error message should be thrown if the CVC number is too short or wrong. "Your card's security code is incomplete."

    Background:
        Given user is on the enrollment page
        And user has completed start application step
        When user selects the "Upfront" payment plan
        And clicks the next button on payment plan page

    @sep29-1
    Scenario Outline: An incomplete CVC number displays the immediate security code error
        When the user enters "<cvc>" in the CVC field
        Then the CVC error message should be "<error_message>"

        Examples:
            | cvc | error_message                                |
            | 12  | Your security code is incomplete. |