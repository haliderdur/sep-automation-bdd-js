@sep09
Feature: Display the product information

    As a customer, I should be able to see the product information.

    #* AC1: The product name should be displayed on the information card.
    #* AC2: The product name on the information card matches the product name on the left side of the screen.
    #* AC3: The price of the product should be displayed.
    #* AC4: The text indicating a flexible payment plan should be available and displayed.
    #* AC5: The program start date should be displayed.
    #* AC6: The return policy and the final date for returns should be displayed.

    Background:
        Given user is on the enrollment page

    @sep09-1
    Scenario: Verify the product name is displayed on the information card
        Then the product name is displayed on the information card

    @sep09-2
    Scenario: Verify the information card and left-side product names match
        Then the information card product name matches the left-side product name

    @sep09-3
    Scenario: Verify the product price is displayed
        Then the product price is displayed

    @sep09-4
    Scenario: Verify flexible payment plan text is displayed
        Then flexible payment plan text is displayed

    @sep09-5
    Scenario: Verify the program start date is displayed
        Then the product information program start date is displayed

    @sep09-6
    Scenario: Verify the return policy and final return date are displayed
        Then the return policy is displayed
        And the final return date is displayed