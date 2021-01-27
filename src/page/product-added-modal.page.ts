import { $, ElementFinder, ExpectedConditions, browser } from "protractor";

export class ProductAddedModal {
  private productAdded: ElementFinder;

  constructor() {
    this.productAdded = $("#layer_cart .button-container > a");
  }
  public async addProduct(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.productAdded),
      5000
    );
    await this.productAdded.click();
  }
}
