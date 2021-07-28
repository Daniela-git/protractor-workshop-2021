import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
export class DownloadService {
  private temp: string;

  constructor() {
    this.temp = resolve('temp');
  }

  public downloadFile(link: string, filename: string): void {
    const linkToUse: string = link.replace(/^data:image\/jpeg;base64,/, '');
    writeFileSync(resolve(this.temp, filename), linkToUse, 'base64');
  }

  public readFileFromTemp(filename: string): Buffer {
    return readFileSync(resolve(this.temp, filename));
  }
}
