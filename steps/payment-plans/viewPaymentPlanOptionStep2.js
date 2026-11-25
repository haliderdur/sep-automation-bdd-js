import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("only one upfront payment option is displayed", async function () {
  await expect(paymentPlanPage.upfrontPaymentFrame).toHaveCount(1);
});

Then("the upfront payment option shows the discount price", async function () {
  const upfrontPrice = productInfo.prices.find(
    (price) => price.type === "one-time",
  );
  const upfrontAmount = upfrontPrice.baseAmount - upfrontPrice.upfrontDiscountAmount;

  await expect(paymentPlanPage.upfrontPaymentOption).toBeVisible();
  await expect(paymentPlanPage.upfrontPaymentOption).toContainText("Upfront");
  await expect(paymentPlanPage.upfrontPaymentAmount).toContainText(
    `$${upfrontAmount}`,
  );
  await expect(paymentPlanPage.payOnceTextUpFront).toContainText("pay once");
});

Then(
  "the available payment plan count matches the active product prices",
  async function () {
    const activePriceCount = productInfo.prices.filter(
      (price) => price.active,
    ).length;

    await expect(paymentPlanPage.paymentPlanBoxes).toHaveCount(activePriceCount);
  },
);

Then("each available payment plan has unique text", async function () {
  const optionTexts = await paymentPlanPage.paymentPlanBoxes.allTextContents();
  const uniqueTexts = new Set(optionTexts.map((text) => text.trim()).filter(Boolean));

  expect(uniqueTexts.size).toBe(optionTexts.length);
});

Then(
  "the installment payment option shows its installment count and monthly price",
  async function () {
    const installmentPrice = productInfo.prices.find(
      (price) => price.type === "recurring",
    );
    const monthlyPrice =
      installmentPrice.baseAmount / installmentPrice.numberOfInstallments;

    await expect(paymentPlanPage.installmentsPaymentOption).toBeVisible();
    await expect(paymentPlanPage.installmentsPaymentOption).toContainText(
      `${installmentPrice.numberOfInstallments} Installments`,
    );
    await expect(paymentPlanPage.installmentsPaymentAmount).toContainText(
      `$${monthlyPrice}`,
    );
    await expect(paymentPlanPage.perMonthTextInstallments).toContainText(
      "per month",
    );
  },
);