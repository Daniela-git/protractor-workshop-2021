import { browser } from 'protractor';
import { Iframe } from '../src/page';

describe(" let's play with the iframe", () => {
  const iframe: Iframe = new Iframe();
  beforeEach(async () => {
    await browser.get('https://demoqa.com/frames');
  });

  describe(" let's change the iframe", () => {
    it('the height must change', async () => {
      await iframe.setFormFrameHeight(30);
      expect(await iframe.getFormFrameHeight()).toBe('30');
    });
  });

  describe(" let's change between the page and iframe", () => {
    describe(' check the title', () => {
      it('must have the Frames title', async () => {
        const title: string = await iframe.getTitle();
        expect(title).toBe('Frames');
      });
    });
    describe('change to the frame', () => {
      it('must have a title', async () => {
        await iframe.switchToFrame();
        expect(await iframe.getFrameTitle()).toBe('This is a sample page');
      });
    });
    describe('change to the window', () => {
      it('must have a title', async () => {
        await iframe.switchToFrame();
        await iframe.switchToMainPage();
        expect(await iframe.getTitle()).toBe('Frames');
      });
    });
  });
});
