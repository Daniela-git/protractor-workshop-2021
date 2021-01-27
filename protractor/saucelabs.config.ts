import { browser, Config } from "protractor";
import { reporter } from "./helpers/reporter";

const firefoxConfig = {
  browserName: "firefox",
  platform: "linux",
  name: "firefox-tests",
  shardTestFiles: true,
  maxInstances: 1,
};

const chromeConfig = {
  browserName: "chrome",
  name: "chrome-tests",
  shardTestFiles: true,
  maxInstances: 1,
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