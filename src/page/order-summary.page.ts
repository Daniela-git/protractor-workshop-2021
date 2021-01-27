import { $, ElementFinder } from "protractor";

export class OrderSummaryPage {
  private orderSummary: ElementFinder;

  constructor() {
    this.orderSummary = $("#center_column .cheque-indent > strong");
  }

  public async result(): Promise<string> {
    return await this.orderSummary.getText();
  }
}
