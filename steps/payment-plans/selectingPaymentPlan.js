import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then(
  "the {string} payment plan accordion is highlighted",
  async function (paymentPlan) {
    const planFrame = paymentPlan.toLowerCase().includes("upfront")
      ? paymentPlanPage.upfrontPaymentFrame
      : paymentPlanPage.installmentsPaymentFrame;

    await expect(planFrame).toHaveAttribute("aria-expanded", "true");
  },
);

Then(
  "the {string} payment plan accordion is not highlighted",
  async function (paymentPlan) {
    const planFrame = paymentPlan.toLowerCase().includes("upfront")
      ? paymentPlanPage.upfrontPaymentFrame
      : paymentPlanPage.installmentsPaymentFrame;

    await expect(planFrame).toHaveAttribute("aria-expanded", "false");
  },
);