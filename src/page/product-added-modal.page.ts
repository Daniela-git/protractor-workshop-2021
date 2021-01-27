import { $, ElementFinder } from "protractor";

export class ProductAddedModal {
  private productAdded: ElementFinder;

  constructor() {
    this.productAdded = $("#layer_cart .button-container > a");
  }
  public async addProduct(): Promise<void> {
    await this.productAdded.click();
  }
}
