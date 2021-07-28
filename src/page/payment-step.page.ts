import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class PaymentStepPage {
  private paymentStep: ElementFinder;

  constructor() {
    this.paymentStep = $('#HOOK_PAYMENT a.bankwire');
  }

  public async selectPay(): Promise<void> {
    await browser.wait(
<<<<<<< HEAD
      ExpectedConditions.elementToBeClickable(this.paymentStep),
      5000
=======
      ExpectedConditions.elementToBeClickable(this.paymentStep)
>>>>>>> d804a7185b1e4b88853bbad7a41076feabaccaf4
    );
    await this.paymentStep.click();
  }
}
