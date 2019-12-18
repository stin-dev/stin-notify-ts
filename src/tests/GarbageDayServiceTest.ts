import { GarbageDayService } from "../services";
import { TestTool } from "./TestTool";
import { DayOfWeek } from "../extenstions";

export const GarbageDayServiceTest = () => {
  const service = new GarbageDayService();

  const garbageType = service.getGarbageType(4, DayOfWeek.Wednesday);

  if (!garbageType) {
    TestTool.failure("GarbageDayServiceTest");
    return;
  }

  const message = service.getMessage(garbageType);
  if (!message || message === "") {
    TestTool.failure("GarbageDayServiceTest");
    return;
  }

  TestTool.success("GarbageDayServiceTest");
}