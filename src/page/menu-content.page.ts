import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor() {
    this.tShirtMenu = $(
      "#block_top_menu .menu-content > li > a[title='T-shirts']"
    );
  }

  public async goToTShirtMenu(): Promise<void> {
    await browser.wait(
      ExpectedConditions.elementToBeClickable(this.tShirtMenu),
      5000
    );
    await this.tShirtMenu.click();
  }
}
