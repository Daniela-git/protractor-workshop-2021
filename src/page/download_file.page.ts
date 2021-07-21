import { $, browser, ElementFinder } from 'protractor';

export class DownloadFile {
  private downloadLink: ElementFinder;
  constructor() {
    this.downloadLink = $('#downloadButton');
  }

  public async download(): Promise<void> {
    const link: string = await this.downloadLink.getAttribute('href');
    console.log(link);
  }
}
