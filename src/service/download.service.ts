import { writeFileSync } from 'fs';
import { resolve } from 'path';
export class DownloadService {
  private temp: string;

  constructor() {
    this.temp = resolve('temp');
  }

  public async downloadFile(link: string, filename: string): Promise<void> {
    const linkToUse: string = link.replace(/^data:image\/jpeg;base64,/, '');
    writeFileSync(resolve(this.temp, filename), linkToUse, 'base64');
  }
}
