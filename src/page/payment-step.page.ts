import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class PaymentStepPage {
  private paymentStep: ElementFinder;

  constructor() {
    this.paymentStep = $('#HOOK_PAYMENT a.bankwire');
  }

  public async selectPay(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.paymentStep),
      5000
    );
    await this.paymentStep.click();
  }
}
