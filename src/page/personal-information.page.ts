import {
  element,
  by,
  ElementFinder,
  ElementArrayFinder,
  ExpectedConditions,
  browser,
} from 'protractor';
import { PersonalInfo } from '../interfaces/personalInfo';
import * as remote from 'selenium-webdriver/remote';
import { resolve } from 'path';
export class PersonalInformation {
  private firstName: ElementFinder;
  private lastName: ElementFinder;
  private sex: ElementArrayFinder;
  private experience: ElementArrayFinder;
  private profession: ElementArrayFinder;
  private tools: ElementArrayFinder;
  private continent: ElementFinder;
  private button: ElementFinder;
  private profile: ElementFinder;
  private title: ElementFinder;
  constructor() {
    this.firstName = element(by.name('firstname'));
    this.lastName = element(by.name('lastname'));
    this.sex = element.all(by.name('sex'));
    this.experience = element.all(by.name('exp'));
    this.profession = element.all(by.name('profession'));
    this.profile = element(by.name('photo'));
    this.tools = element.all(by.name('tool'));
    this.continent = element(by.name('continents'));
    this.button = element(by.name('submit'));
    this.title = element(by.css('h1'));
  }
  private async selectRadio(
    elem: ElementArrayFinder,
    select: string
  ): Promise<void> {
    await elem
      .filter(async (item) => {
        return await item
          .getAttribute('value')
          .then((txt: string) => txt === select);
      })
      .first()
      .click();
  }

  private async okAlert(): Promise<void> {
    await browser.wait(ExpectedConditions.alertIsPresent(), 10000);
    const alert = await browser.switchTo().alert();
    await alert.accept();
  }

  private async upload(file: string): Promise<void> {
    const absolutePath: string = resolve(process.cwd(), file);
    await browser.setFileDetector(new remote.FileDetector());
    await this.profile.sendKeys(absolutePath);
    await browser.setFileDetector(undefined);
  }

  public async fillForm(data: PersonalInfo): Promise<void> {
    await this.firstName.sendKeys(data.firstName);
    await this.lastName.sendKeys(data.lastName);
    await this.selectRadio(this.sex, data.sex);
    await this.selectRadio(this.experience, String(data.experience));
    await this.selectRadio(this.profession, data.profession[0]);
    await this.upload(data.file);
    await this.selectRadio(this.tools, data.tools[0]);
    await this.continent.sendKeys(data.continent);
  }

  public async submit(): Promise<void> {
    await this.button.click();
  }

  public async confirm(): Promise<string> {
    await this.okAlert();
    return await this.title.getText();
  }

  public async getFiles(): Promise<number> {
    const numberOfFiles: number = await browser.executeScript(
      ' return arguments[0].files.length;',
      this.profile
    );
    return numberOfFiles;
  }
}
