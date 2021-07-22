import { browser } from 'protractor';
import { Iframe, FrameMain } from '../src/page';

describe(" let's play with the iframe", () => {
  const iframe: Iframe = new Iframe();
  const mainPage: FrameMain = new FrameMain();
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
    describe(' check the main page title', () => {
      it('must have the "Frames" title', async () => {
        const title: string = await mainPage.getTitle();
        expect(title).toBe('Frames');
      });
      describe('change to the frame', () => {
        it('must have a title', async () => {
          await iframe.switchToFrame();
          expect(await iframe.getFrameTitle()).toBe('This is a sample page');
        });
        it('should go back to the main', async () => {
          await mainPage.switchToMainPage();
          expect(await mainPage.getTitle()).toBe('Frames');
        });
      });
    });
  });
});
