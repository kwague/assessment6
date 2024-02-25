const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Adding a bot m", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.wait(until.elementLocated(By.id("player-duo")), 1000);
    expect(await driver.findElement(By.id("player-duo")).innerText).toContain("Robot Name");
  });

  test("Choices visible", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.elementLocated(By.id("choices")), 1000);
    expect(await driver.findElement(By.id("choices"))).toBeTruthy();
  });


});