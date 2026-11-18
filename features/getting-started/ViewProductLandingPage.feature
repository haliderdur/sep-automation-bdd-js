@sep07
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    #* AC1: The system displays the text "Cydeo Secure Checkout".
    #* AC2: The system should display the program name.
    #* AC3: Users should see a footer on the left side of the page that includes by order:
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy

    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep07-1
    Scenario: Verify that system displays Cydeo Secure Checkout text
        Then The system displays Cydeo "Secure checkout" text

    @sep07-2
    Scenario: Verify that system displays program name
        Then The system displays the program name

    @sep07-3
    Scenario: Verify that system displays footer on the left page
        Then the footer items should appear in this order:
            | order | footer items         |
         #   | 1     | Logo                 |
            | 2     | Terms and conditions |
            | 3     | Privacy Policy       |
            | 4     | Disclaimer           |
            | 5     | Cookie Policy        |

    @sep07-4
    Scenario: Verify that system displays Contact Us information on the right page
        Then The system displays "Need help? Contact us at enrollment@cydeo.com" on the right page
