import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage } from "../../globalPagesSetup.js";

When(
  "the user enters {string} in the expiration date field",
  async function (expiryDate) {
    await expect(reviewPaymentPage.expiryDateInput).toBeEditable();
    await reviewPaymentPage.enterExpiryDate(expiryDate);
    await reviewPaymentPage.expiryDateInput.press("Tab");
  },
);

Then(
  "the expiration date error message should be {string}",
  async function (errorMessage) {
    await expect(reviewPaymentPage.cardExpiryErrorMessage).toHaveText(errorMessage);
  },
);