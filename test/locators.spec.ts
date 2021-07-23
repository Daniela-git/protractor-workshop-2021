import { browser } from 'protractor';
import { PersonalInformation } from '../src/page';

describe('fill form', () => {
  const personalInformationPage: PersonalInformation =
    new PersonalInformation();
  let files: number;
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
      file: 'resources/git.jpeg',
    });
    files = await personalInformationPage.getFiles();
    await personalInformationPage.submit();
  });

  it('then should have a photo', async () => {
    expect(files).toBe(1);
  });

  it('then should be registered', async () => {
    expect(await personalInformationPage.confirm()).toBe(
      'Selenium - Automation Practice Form'
    );
  });
});
