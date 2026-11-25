import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

When(
  "the user enters {string} in the card number field",
  async function (cardNumber) {
    await expect(reviewPaymentPage.cardNumberInput).toBeEditable();
    await reviewPaymentPage.enterCardNumber(cardNumber);
    await reviewPaymentPage.cardNumberInput.press("Tab");
  },
);

Then(
  "the card number error message should be {string}",
  async function (errorMessage) {
    await expect(reviewPaymentPage.cardNumberErrorMessage).toHaveText(errorMessage);
  },
);