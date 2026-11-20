import { DataTable, Then, When } from "@cucumber/cucumber";
import {
  startApplicationPage,
  paymentPlanPage,
} from "../../globalPagesSetup.js";
import { expect } from "playwright/test";

When(
  "the user enters {string} in first name field",
  async function (firstName) {
    await expect(startApplicationPage.firstNameInputBox).toBeEditable();
    await startApplicationPage.firstNameInputBox.fill(firstName);
    this.enteredFirstName = firstName;
  },
);

When("the user enters {string} in last name field", async function (lastName) {
  await expect(startApplicationPage.lastNameInputBox).toBeEditable();
  await startApplicationPage.lastNameInputBox.fill(lastName);
  this.enteredLastName = lastName;
});

When("the user enters {string} in email field", async function (emailAddress) {
  await expect(startApplicationPage.emailInputBox).toBeEditable();
  await startApplicationPage.emailInputBox.fill(emailAddress);
  this.enteredEmail = emailAddress;
});

When("the user enters {string} in phone field", async function (phoneNumber) {
  await expect(startApplicationPage.phoneNumberInputBox).toBeEditable();
  await startApplicationPage.phoneNumberInputBox.fill(phoneNumber);
  this.enteredPhoneNumber = phoneNumber;
});

Then(
  "Entered texts are displayed in correct fields as they are",
  async function () {
    await expect(startApplicationPage.firstNameInputBox).toHaveValue(
      this.enteredFirstName,
    );
    await expect(startApplicationPage.lastNameInputBox).toHaveValue(
      this.enteredLastName,
    );
    await expect(startApplicationPage.emailInputBox).toHaveValue(
      this.enteredEmail,
    );
    await expect(startApplicationPage.phoneNumberInputBox).toHaveValue(
      this.enteredPhoneNumber,
    );
  },
);

When(
  "the user clicks on How did you hear about us dropdown",
  async function () {
    await startApplicationPage.howDidYouHearAboutUsDropDown.click();
  },
);

Then(
  "the system should display dropdown options as",
  /**
   * @param {DataTable} dataTable
   */
  async function (dataTable) {
    const expectedOptions = dataTable.rows().flat();
    const actualOptions = (
      await startApplicationPage.howDidYouHearAboutUsDropDownOptionsList.allInnerTexts()
    ).slice(1);

    for (let i = 0; i < actualOptions.length; i++) {
      expect(actualOptions[i]).toBe(expectedOptions[i]);
      console.log(
        "Actual: " + actualOptions[i] + ", Expected: " + expectedOptions[i],
      );
    }
  },
);

Then("the Next button should be disabled", async function () {
  await expect(startApplicationPage.step1).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );

  await expect(startApplicationPage.firstNameInputBox).toHaveCSS(
    "--mat-stepper-header-selected-state-label-text-color",
    "rgba(0, 0, 0, .87)",
  );

  await startApplicationPage.nextButton.click();

  await expect(paymentPlanPage.step2).toHaveCSS(
    "border-color",
    "rgb(217, 226, 236)",
  );

  await expect(startApplicationPage.firstNameInputBox).toHaveCSS(
    "--mat-stepper-header-error-state-label-text-color",
    "#f44336",
  );
});


