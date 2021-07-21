import { browser } from 'protractor';
import { DownloadFile } from '../src/page';

describe('let´s download a file', () => {
  const downloadFile: DownloadFile = new DownloadFile();
  beforeEach(async () => {
    await browser.get('https://demoqa.com/upload-download');
  });

  it('it should be download', async () => {
    await downloadFile.download();
    expect(downloadFile.read()).toBeGreaterThanOrEqual(4000);
  });
});
