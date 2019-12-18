export class TestTool {
  static success = (testName: string) => {
    Logger.log(`${testName} was successful.`);
  }

  static failure = (testName: string) => {
    Logger.log(`${testName} failed.`);
    throw new Error("Tests failed.");
  }
}