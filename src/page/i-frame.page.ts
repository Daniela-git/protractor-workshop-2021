import { $, browser, ElementFinder } from 'protractor';

export class Iframe {
  private iframe1: ElementFinder;

  constructor() {
    this.iframe1 = $('#frame1');
  }
  public async setFormFrameHeight(height: number): Promise<void> {
    return await browser.executeScript(
      `arguments[0].height = ${height};`,
      this.iframe1
    );
  }
  public async getFormFrameHeight(): Promise<string> {
    return await browser.executeScript(
      'return arguments[0].height',
      this.iframe1
    );
  }

  public async switchToFrame(): Promise<void> {
    await browser.switchTo().frame(this.iframe1.getWebElement());
  }

  public async getFrameTitle(): Promise<string> {
    const titulo: ElementFinder = await browser.$('h1');
    return await titulo.getText();
  }
}
