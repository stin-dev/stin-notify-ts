import * as Services from "../services";
import * as Interfaces from "../interfaces";

class DIContainer {
  get CredentialService(): Interfaces.ICredentialService {
    return new Services.CredentialPropertyService();
  }

  get LoggerService(): Interfaces.ILoggerService {
    return new Services.ConsoleLoggerService();
  }

  get NotifyService(): Interfaces.INotifyService {
    return new Services.LineNotifyService(
      this.CredentialService,
      this.LoggerService,
    );
  }

  get GarbageDayService(): Interfaces.IGarbageDayService {
    return new Services.GarbageDayService();
  }

  get NotifyGarbageDayService(): Interfaces.INotifyGarbageDayService {
    return new Services.NotifyGarbageDayService(
      this.NotifyService,
      this.GarbageDayService,
    );
  }
}

export const container = new DIContainer();
