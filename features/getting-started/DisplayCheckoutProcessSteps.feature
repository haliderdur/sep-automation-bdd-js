@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.

    Background:
        Given user is on the enrollment page

    @sep08-1
    Scenario: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review"
        Then The user should see the steps as
            | Start Application |
            | Payment Plan      |
            | Review            |

    @sep08-2
    Scenario: The system should highlight "Start Application" in blue
        Then the start application step stepper circle is blue

    @sep08-3
    Scenario: The system should display "Payment Plan" and "Review" in grey
        Then The user should see Payment Plan step in grey
        And The user should see Review step in grey
