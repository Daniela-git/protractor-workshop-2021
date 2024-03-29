import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000,
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  capabilities: {
    name: 'UI Workshop',
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
