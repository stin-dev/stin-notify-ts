import { ConsoleLoggerServiceTest } from "./ConsoleLoggerServiceTest";
import { CredentialPropertyServiceTest } from "./CredentialPropertyServiceTest";
import { GarbageDayServiceTest } from "./GarbageDayServiceTest";
import { LineNotifyServiceTest } from "./LineNotifyServiceTest";

export const test = () => {
  ConsoleLoggerServiceTest();

  CredentialPropertyServiceTest();

  GarbageDayServiceTest();

  LineNotifyServiceTest();
}