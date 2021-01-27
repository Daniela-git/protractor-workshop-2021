import { browser } from "protractor";
import { PersonalInformation } from "../src/page";

describe("fill form", () => {
  const personalInformationPage: PersonalInformation = new PersonalInformation();

  it("then should be registered", async () => {
    await browser.get(
      "https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm "
    );

    await personalInformationPage.fillForm({
      firstName: "Alejandro",
      lastName: "Perdomo",
      sex: "Male",
      experience: 7,
      profession: ["Automation Tester"],
      tools: ["Selenium Webdriver"],
      continent: "Africa",
      commands: [
        "Browser Commands",
        "Navigation Commands",
        "Switch Commands",
        "Wait Commands",
        "WebElement Commands",
      ],
    });
    await expect(personalInformationPage.confirm()).toBe(
      "Selenium - Automation Practice Form"
    );
  });
});
