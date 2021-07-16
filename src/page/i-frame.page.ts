import { $, browser, ElementFinder, promise } from 'protractor';

export class Iframe {
  private iframe1: ElementFinder;

  constructor() {
    this.iframe1 = $('#frame1');
  }
  public setFormFrameHeight(height: number): Promise<void> {
    return browser.executeScript(
      `arguments[0].height = ${height};`,
      this.iframe1
    );
  }
  public getFormFrameHeight(): promise.Promise<void> {
    return browser.executeScript('arguments[0].height', this.iframe1);
  }
}
