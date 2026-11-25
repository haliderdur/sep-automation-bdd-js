@sep14
Feature: Selecting a price plan

    As a customer, I want to be able to Choose a payment plan from the available options 
    so that I can choose the one that best suits my needs.

    #* AC1: When the user selects any payment plan (Accordion) that option should be highlighted to indicate selection.
    #* AC2: Upon selecting any pricing option, the 'Next' button should become active (indicating the user can proceed).
    #* AC3: Users should be able to change their plan selections at any time before finalizing their choice.


    Background:
        Given user is on the enrollment page
        And user has completed start application step


    @sep14-1
    Scenario Outline: Selecting a payment plan highlights the selected accordion
        When user selects the "<payment_plan>" payment plan
        Then the "<payment_plan>" payment plan accordion is highlighted

        Examples:
            | payment_plan |
            | Upfront      |
            | Installments |


    @sep14-2
    Scenario Outline: Selecting a payment plan activates the Next button
        Then the next button on payment plan step is disabled by default
        When user selects the "<payment_plan>" payment plan
        Then the next button on payment plan step is enabled

        Examples:
            | payment_plan |
            | Upfront      |
            | Installments |


    @sep14-3
    Scenario: A customer can change the selected payment plan
        When user selects the "Upfront" payment plan
        And user selects the "Installments" payment plan
        Then the "Upfront" payment plan accordion is not highlighted
        And the "Installments" payment plan accordion is highlighted