@sep17
Feature: View payment plan options in Step 2   #! test only

    As a customer, I should be able to see payment plan options in Step 2.

    #* AC1: Upfront payment:
    #*      There should be only one upfront price
    #*      Text should be:
    #*              Upfront  (first row)
    #*              $ <upfont_price> pay once (second row)

    #* AC2: Installment plans:
    #*      There must be total <num> Payment Plans
    #*      There can be <number_of_installments> installments
    #*      If there are installments:
    #*            Text should be
    #*            <number_of_installments> Installments (first row)
    #*           $ <monthly_price> per month (second row)
    #*            Installment plans should be unique
    Background:
        Given user is on the enrollment page
        And user has completed start application step


    @sep17-1
    Scenario: Only one upfront payment price is displayed
        Then only one upfront payment option is displayed
        And the upfront payment option shows the discount price


    @sep17-2
    Scenario: Installment payment plan options are unique and complete
        Then the available payment plan count matches the active product prices
        And each available payment plan has unique text
        And the installment payment option shows its installment count and monthly price
