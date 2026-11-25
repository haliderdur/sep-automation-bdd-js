@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields

    Background:
        Given user is on the enrollment page

    @sep19-1
    Scenario Outline: Move to step 2 with valid personal details
        When the user provides "<field_set>" valid personal details
        And the user clicks the step 1 Next button
        Then the system should display the payment plan step

        Examples:
            | field_set      |
            | all fields     |
            | required fields |