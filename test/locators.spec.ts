import { browser } from 'protractor';
import { PersonalInformation } from '../src/page';

describe('fill form', () => {
  const personalInformationPage: PersonalInformation =
    new PersonalInformation();
  beforeEach(async () => {
    await browser.get(
      'https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm '
    );
  });

  describe('fill form without file', () => {
    it('then should be registered', async () => {
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
        file: '',
      });
      await personalInformationPage.submit();
      await expect(personalInformationPage.confirm()).toBe(
        'Selenium - Automation Practice Form'
      );
    });
  });
  describe('fill form with file', () => {
    it('then should be registered', async () => {
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
      const files: number = await personalInformationPage.getFiles();
      await personalInformationPage.submit();
      expect(files).toBe(1);
    });
  });
});
