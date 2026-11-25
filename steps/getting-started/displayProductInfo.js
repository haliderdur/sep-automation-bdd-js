import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  leftMainPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("the product name is displayed on the information card", async function () {
  await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
  await expect(startApplicationPage.programNameOnInfoCard).toHaveText(
    productInfo.productName,
  );
});

Then(
  "the information card product name matches the left-side product name",
  async function () {
    await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
    await expect(leftMainPage.programName).toBeVisible();
    await expect(startApplicationPage.programNameOnInfoCard).toHaveText(
      productInfo.productName,
    );
    await expect(leftMainPage.programName).toHaveText(productInfo.productName);
  },
);

Then("the product price is displayed", async function () {
  await expect(startApplicationPage.programPrice).toBeVisible();
  await expect(startApplicationPage.programPrice).not.toBeEmpty();
});

Then("flexible payment plan text is displayed", async function () {
  await expect(
    startApplicationPage.flexiblePaymentsPlanAvailableText,
  ).toBeVisible();
});

Then(
  "the product information program start date is displayed",
  async function () {
  await expect(startApplicationPage.programStartDate).toBeVisible();
  await expect(startApplicationPage.programStartDate).toHaveText(
    productInfo.startDate,
  );
  },
);

Then("the return policy is displayed", async function () {
  await expect(startApplicationPage.returnPolicyText).toBeVisible();
});

Then("the final return date is displayed", async function () {
  await expect(startApplicationPage.refundEndDate).toBeVisible();
  await expect(startApplicationPage.refundEndDate).toHaveText(
    productInfo.refundDate,
  );
});
