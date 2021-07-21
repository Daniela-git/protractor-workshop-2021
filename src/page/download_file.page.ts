import { $, ElementFinder } from 'protractor';
import { DownloadService } from '../service/download.service';
export class DownloadFile {
  private downloadLink: ElementFinder;
  private downloadService: DownloadService;
  constructor() {
    this.downloadLink = $('#downloadButton');
    this.downloadService = new DownloadService();
  }

  public async download(): Promise<void> {
    const link: string = await this.downloadLink.getAttribute('href');
    this.downloadService.downloadFile(link, 'test.jpeg');
  }

  public read(): number {
    return this.downloadService.readFileFromTemp('test.jpeg').byteLength;
  }
}
