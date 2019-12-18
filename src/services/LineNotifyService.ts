import { INotifyService, ILoggerService, ICredentialService } from "../interfaces";

export class LineNotifyService implements INotifyService {
  private lineNotifyUrl = `https://notify-api.line.me/api`;

  constructor(
    private credentialService: ICredentialService,
    private loggerService: ILoggerService,
  ) { }

  sendNotification = (message: string): boolean => {
    const lineToken = this.credentialService.getCredential("LINE_NOTIFY_TOKEN");
    if (!lineToken) {
      this.loggerService.warn("LINE_NOTIFY_TOKEN not found.");
      return false;
    }

    const response = UrlFetchApp.fetch(`${this.lineNotifyUrl}/notify`,
      {
        method: "post",
        headers: {
          Authorization: `Bearer ${lineToken}`
        },
        payload: {
          message: message,
        },
        muteHttpExceptions: true,
      });

    switch (response.getResponseCode()) {
      case 200:
        this.loggerService.info(`A notification have been posted successfully.`);
        return true;

      case 400:
        this.loggerService.error(`Invalid request.`);
        break;

      case 401:
        this.loggerService.error(`Invalid token.`);
        break;

      case 500:
        this.loggerService.error(`LINE Notify server error.`);
        break;

      default:
        this.loggerService.error(`Unknown error.`);
        break;
    }

    return false;
  };
}