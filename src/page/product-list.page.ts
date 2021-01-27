import { $, ElementFinder, ExpectedConditions, browser } from "protractor";

export class ProductListPage {
  private productList: ElementFinder;

  constructor() {
    this.productList = $(".product-container a[title='Add to cart']");
  }

  public async goToItem(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.productList),
      5000
    );
    await this.productList.click();
  }
}
