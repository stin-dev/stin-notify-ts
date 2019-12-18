import { LineNotifyService, CredentialPropertyService } from "../services";
import { TestTool } from "./TestTool";

export const LineNotifyServiceTest = () => {
  const mockLogger = {
    log: (log: string) => { Logger.log(`Mock.log: ${log}`) },
    info: (log: string) => { Logger.log(`Mock.info: ${log}`) },
    warn: (log: string) => { Logger.log(`Mock.warn: ${log}`) },
    error: (log: string) => { Logger.log(`Mock.error: ${log}`) },
  };

  /*
   * Test without errors.
   */
  const serviceForSuccess = new LineNotifyService(
    new CredentialPropertyService(),
    mockLogger,
  );

  const testSuccess = serviceForSuccess.sendNotification("Module test runs.");

  if (!testSuccess) {
    TestTool.failure("LineNotifyServiceTest");
    return;
  }

  /*
   * Test with an error that a token is not found.
   */
  let serviceForFailure = new LineNotifyService(
    { getCredential: (key: string) => { return null } },
    mockLogger,
  );

  let testFailure = serviceForFailure.sendNotification("Module test runs.");

  if (testFailure) {
    TestTool.failure("LineNotifyServiceTest");
    return;
  }

  /*
   * Test with error that a token is invalid.
   */
  serviceForFailure = new LineNotifyService(
    { getCredential: (key: string) => { return "INVALID_TOKEN" } },
    mockLogger,
  );

  testFailure = serviceForFailure.sendNotification("Module test runs.");

  if (testFailure) {
    TestTool.failure("LineNotifyServiceTest");
    return;
  }

  TestTool.success("LineNotifyServiceTest");
}