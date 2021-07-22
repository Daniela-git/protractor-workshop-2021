import { $, browser, ElementFinder } from 'protractor';

export class FrameMain {
  private title: ElementFinder;

  constructor() {
    this.title = $('.main-header');
  }
  public async getTitle(): Promise<string> {
    return await this.title.getText();
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }
}
