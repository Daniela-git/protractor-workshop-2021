import { browser } from 'protractor';
import { PersonalInformation } from '../src/page';

describe('fill form', () => {
  const personalInformationPage: PersonalInformation =
    new PersonalInformation();
  beforeEach(async () => {
    await browser.get(
      'https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm '
    );
    await personalInformationPage.fillForm({
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      profession: ['Automation Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'Africa',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands',
      ],
      file: 'C:\\Users\\daniela.higuitaa\\Desktop\\protractor-workshop-2021\\resources\\git.jpeg',
    });
  });
  it('then should have a photo', async () => {
    const files: number = await personalInformationPage.getFiles();
    expect(files).toBe(1);
  });
  describe('submit the form', () => {
    it('then should be registered', async () => {
      await personalInformationPage.submit();
      await expect(personalInformationPage.confirm()).toBe(
        'Selenium - Automation Practice Form'
      );
    });
  });
});
