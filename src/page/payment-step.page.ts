import { $, ElementFinder } from "protractor";

export class PaymentStepPage {
  private paymentStep: ElementFinder;

  constructor() {
    this.paymentStep = $("#HOOK_PAYMENT a.bankwire");
  }

  public async selectPay(): Promise<void> {
    await this.paymentStep.click();
  }
}
