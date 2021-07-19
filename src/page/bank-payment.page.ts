import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private bankPayment: ElementFinder;

  constructor() {
    this.bankPayment = $("#cart_navigation button[type='submit']");
  }

  public async confirmOrder(): Promise<void> {
    await this.bankPayment.click();
  }
}
