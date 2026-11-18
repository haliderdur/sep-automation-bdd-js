import { Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, leftMainPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

Then("The system displays Cydeo {string} text", async function (string) {
  const actualSecureCheckoutText = leftMainPage.secureCheckout;
  const expectedSecureCheckoutText = string;
  const expectedCydeoImageOnSecureCheckout =
    leftMainPage.cydeoImageAtLeftWindow;

  await expect(actualSecureCheckoutText).toBeVisible();
  expect((await actualSecureCheckoutText.innerText()).trimEnd()).toBe(
    expectedSecureCheckoutText,
  );
  await expect(expectedCydeoImageOnSecureCheckout).toBeVisible();
});

Then("The system displays the program name", async function () {
  await expect(leftMainPage.programName).toBeVisible();
  expect(await leftMainPage.programName.innerText()).toBe(
    productInfo.programName,
  );
});

Then(
  "the footer items should appear in this order:",
  /**
   * @param {DataTable} dataTable
   */
  async function (dataTable) {
    const rows = dataTable.raw().slice(1); // drop header row
    const actualLeftFooterLinks = await leftMainPage.footerElements.all();

    for (const [order, footerItem] of rows) {
      const index = Number(order) - 1;
      const actualLink = actualLeftFooterLinks[index];

      await expect(actualLink).toBeVisible();

      if (footerItem.toLowerCase() !== "Logo") {
        expect((await actualLink.innerText()).trim()).toBe(footerItem);
      }
    }
  },
);

Then("The system displays {string} on the right page", async function (string) {
  const actualRightFooterText =
    await startApplicationPage.footer.allInnerTexts();
  const expectedRightFooterText = string;

  expect(actualRightFooterText[1]).toBe(expectedRightFooterText);
});
