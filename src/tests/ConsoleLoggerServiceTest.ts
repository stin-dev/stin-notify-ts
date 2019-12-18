import { ConsoleLoggerService } from "../services";
import { TestTool } from "./TestTool";

export const ConsoleLoggerServiceTest = () => {
  const service = new ConsoleLoggerService();

  service.log("ConsoleLoggerService test log.");
  service.info("ConsoleLoggerService test log.");
  service.warn("ConsoleLoggerService test log.");
  service.error("ConsoleLoggerService test log.");

  TestTool.success("ConsoleLoggerServiceTest");
}