import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class BankPaymentPage {
  private bankPayment: ElementFinder;

  constructor() {
    this.bankPayment = $("#cart_navigation button[type='submit']");
  }

  public async confirmOrder(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.bankPayment),
      5000
    );
    await this.bankPayment.click();
  }
}
