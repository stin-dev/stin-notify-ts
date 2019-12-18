import { CredentialPropertyService } from "../services";
import { TestTool } from "./TestTool";

export const CredentialPropertyServiceTest = () => {
  const service = new CredentialPropertyService();

  const value = service.getCredential("TEST_PROPERTY");

  if (value && value === "TEST_PROPERTY_VALUE") {
    TestTool.success("CredentialPropertyServiceTest");
  } else {
    TestTool.failure("CredentialPropertyServiceTest");
  }
}