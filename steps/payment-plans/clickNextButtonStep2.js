import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  page,
  startApplicationPage,
} from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then(
  "the next button on payment plan step is disabled by default",
  async function () {
    await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
  },
);

When("user selects the {string} payment plan", async function (paymentPlan) {
  await paymentPlanPage.selectPaymentPlan(paymentPlan);
});

Then("the next button on payment plan step is enabled", async function () {
  await expect(paymentPlanPage.inactiveNextButton).toBeEnabled();
});

Then("the start application step stepper circle is green", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)",
  );
});

Then("the payment plan step stepper circle is blue", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});

When("clicks the next button on payment plan page", async function () {
  await paymentPlanPage.clickNextButton();
});

Then("the review step stepper circle is blue", async function () {
  await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});

Then("the payment plan step stepper circle is green", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)",
  );
});

Then("the upfront payment summary is displayed", async function () {
  await expect(paymentPlanPage.basePriceAmountUnderUpfront).toBeVisible();
  await expect(paymentPlanPage.upfrontDiscountAmountUnderUpfront).toBeVisible();
  await expect(paymentPlanPage.subtotalAmountUnderUpfront).toBeVisible();
});

Then("the installments payment summary is displayed", async function () {
  await expect(paymentPlanPage.basePriceAmountUnderInstallments).toBeVisible();
  await expect(
    paymentPlanPage.installmentsNumberUnderInstallments,
  ).toBeVisible();
  await expect(
    paymentPlanPage.pricePerInstallmentsAmountUnderInstallments,
  ).toBeVisible();
  await expect(
    paymentPlanPage.firstMonthPaymentAmountUnderInstallments,
  ).toBeVisible();
});

Then("the back button is displayed", async function () {
  await expect(paymentPlanPage.backButton).toBeVisible();
});

When("user clicks the back button on payment plan page", async function () {
  await paymentPlanPage.backButton.click();
});
