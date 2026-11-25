import { faker } from "@faker-js/faker";
import { expect } from "@playwright/test";
import { When, Then } from "@cucumber/cucumber";
import { startApplicationPage, page } from "../../globalPagesSetup.js";

When(
  "the user provides {string} valid personal details",
  async function (fieldSet) {
    await startApplicationPage.enterFirstName(faker.person.firstName());
    await startApplicationPage.enterLastName(faker.person.lastName());
    await startApplicationPage.enterEmail(faker.internet.email());
    await startApplicationPage.enterPhoneNumber(faker.string.numeric(10));

    if (fieldSet === "all fields") {
      await startApplicationPage.selectHowDidYouHearAboutUs("Email");
    }
  },
);

When("the user clicks the step 1 Next button", async function () {
  await expect(startApplicationPage.nextButton).toBeEnabled();
  await startApplicationPage.clickNextButton();
});

Then("the system should display the payment plan step", async function () {
  await expect(page.getByText("Choose a payment plan")).toBeVisible();
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});

