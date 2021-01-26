import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private productList: ElementFinder;

  constructor () {
    this.productList = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToItem(): Promise<void> {
    await this.productList.click();
  }
}
