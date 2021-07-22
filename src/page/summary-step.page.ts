import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class SummaryStepPage {
  private summaryStep: ElementFinder;

  constructor() {
    this.summaryStep = $('.cart_navigation > a[title="Proceed to checkout"]');
  }

  public async nextStep(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.summaryStep),
      5000
    );
    await this.summaryStep.click();
  }
}
