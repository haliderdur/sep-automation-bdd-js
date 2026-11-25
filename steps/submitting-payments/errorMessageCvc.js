import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage } from "../../globalPagesSetup.js";

When(
  "the user enters {string} in the CVC field",
  async function (cvc) {
    await expect(reviewPaymentPage.cvcInput).toBeEditable();
    await reviewPaymentPage.enterCVC(cvc);
    await reviewPaymentPage.cvcInput.press("Tab");
  },
);

Then(
  "the CVC error message should be {string}",
  async function (errorMessage) {
    await expect(reviewPaymentPage.cardCVCErrorMessage).toHaveText(errorMessage);
  },
);