@sep16
Feature: Click on the next button on payment plans page

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed after a payment plan is selected.
    #* AC5: The back button should be displayed and enabled.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user has completed start application step



    #Scenario: Clicking on the upfront payment plan activates the next button
    #    Then the next button on payment plan step is disabled by default
    #    When user selects the upfront payment plan
    #    Then the next button on payment plan step is enabled

    #Scenario: Clicking on the installments payment plan activates the next button
    #    Then the next button on payment plan step is disabled by default
    #    When user selects the installments payment plan
    #    Then the next button on payment plan step is enabled


    @sep16-1
    Scenario Outline: Clicking on any payment plan activates the next button
        Then the next button on payment plan step is disabled by default
        When user selects the "<payment_plan>" payment plan
        Then the next button on payment plan step is enabled

        Examples:
            | payment_plan |
            | Upfront      |
            | installments |


    @sep16-2
    Scenario: After clicking the next button, step3 stepper color is blue, step1 and step2 stepper circles are green
        Then the start application step stepper circle is green
        And the payment plan step stepper circle is blue
        When user selects the "Upfront" payment plan
        And clicks the next button on payment plan page
        Then the review step stepper circle is blue
        And the start application step stepper circle is green
        And  the payment plan step stepper circle is green


    @sep16-3
    Scenario: Payment summary is displayed after a payment plan is selected
        When user selects the "Upfront" payment plan
        Then the upfront payment summary is displayed
        When user selects the "Installments" payment plan
        Then the installments payment summary is displayed


    @sep16-4
    Scenario: The back button is displayed and takes the user back to step1 when clicked
        Then the start application step stepper circle is green
        And the back button is displayed
        When user clicks the back button on payment plan page
        Then the start application step stepper circle is blue