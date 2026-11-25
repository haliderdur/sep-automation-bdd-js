import { Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  page,
  paymentPlanPage,
  reviewPaymentPage,
} from "../../globalPagesSetup.js";

Then(
  "The user should see the steps as",
  /**
   * @param {DataTable} dataTable
   */
  async function (dataTable) {
    // store datatable in array
    const expectedStepNames = dataTable.raw().flat();
    const actualStepNames = await page
      .locator("//div[@class = 'step-title']")
      .allInnerTexts();

    for (let i = 0; i < expectedStepNames.length; i++) {
      expect(actualStepNames[i] === expectedStepNames[i]);
    }
  },
);

Then("the start application step stepper circle is blue", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});

Then("The user should see Payment Plan step in grey", async function () {
  await expect(paymentPlanPage.step2).toHaveCSS(
    "border-color",
    "rgb(217, 226, 236)",
  );
});

Then("The user should see Review step in grey", async function () {
  await expect(reviewPaymentPage.step3).toHaveCSS(
    "border-color",
    "rgb(217, 226, 236)",
  );
});
