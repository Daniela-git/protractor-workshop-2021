import { browser } from 'protractor';
import { Iframe } from '../src/page';

describe(" let's chage the iframe", () => {
  const iframe: Iframe = new Iframe();
  beforeEach(async () => {
    await browser.get('https://demoqa.com/frames');
  });
  it('the height must change', async () => {
    await iframe.setFormFrameHeight(30);
    expect(await iframe.getFormFrameHeight()).toBe('30');
  });
});
