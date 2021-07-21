import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/download.spec.js'],
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000,
  },
  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    chromeOptions: {
      args: [
        '--disable-popup-blocking',
        '--no-default-browser-check',
        '--window-size=800,600',
      ],
      prefs: { credentials_enable_service: false },
    },
  },
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    reporter();
    browser.manage().timeouts().implicitlyWait(0);
    browser.ignoreSynchronization = true;
  },
};
