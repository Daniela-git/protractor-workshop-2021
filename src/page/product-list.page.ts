import { $, ElementFinder } from "protractor";

export class ProductListPage {
  private productList: ElementFinder;

  constructor() {
    this.productList = $(".product-container a[title='Add to cart']");
  }

  public async goToItem(): Promise<void> {
    await this.productList.click();
  }
}
