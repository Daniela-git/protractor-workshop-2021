import { browser } from 'protractor';
import { Iframe } from '../src/page';

describe(" let's chage the iframe", () => {
  const iframe: Iframe = new Iframe();
  beforeEach(async () => {
    await browser.get('https://demoqa.com/frames');
  });
  it('the height must change', async () => {
    iframe.setFormFrameHeight(10);
    console.log(iframe.getFormFrameHeight());
    await expect(iframe.getFormFrameHeight()).toBe(10);
  });
});
