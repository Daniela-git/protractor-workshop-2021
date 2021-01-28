import { browser, Config } from "protractor";
import { reporter } from "./helpers/reporter";
const firefoxConfig = {
  browserName: "firefox",
  name: "firefox-tests",
  shardTestFiles: true,
  maxInstances: 1,
  "moz:firefoxOptions": {
    args: [
      "--disable-popup-blocking",
      "--no-default-browser-check",
      "--window-size=800,600",
    ],
  },
};

const chromeConfig = {
  browserName: "chrome",
  name: "chrome-tests",
  shardTestFiles: true,
  maxInstances: 1,
  chromeOptions: {
    args: [
      "--disable-popup-blocking",
      "--no-default-browser-check",
      "--window-size=800,600",
    ],
    prefs: { credentials_enable_service: false },
  },
};

const multiCapabilities = [firefoxConfig, chromeConfig];

export const config: Config = {
  multiCapabilities,
  framework: "jasmine",
  specs: ["../test/**/*.spec.js"],
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000,
  },
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    reporter();
    browser.manage().timeouts().implicitlyWait(0);
    browser.ignoreSynchronization = true;
  },
};
