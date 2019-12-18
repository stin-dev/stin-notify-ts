import { INotifyGarbageDayService, INotifyService, IGarbageDayService } from "../interfaces";

export class NotifyGarbageDayService implements INotifyGarbageDayService {
  constructor(
    private notifyService: INotifyService,
    private garbageDayService: IGarbageDayService,
  ) { }
  notifyGarbageDay = (date: Date) => {
    const nthDayOfWeek = date.getNthDayOfWeek();
    const garbageType = this.garbageDayService.getGarbageType(nthDayOfWeek.nth, nthDayOfWeek.day);

    if (!garbageType) { return; }

    const message = this.garbageDayService.getMessage(garbageType);

    this.notifyService.sendNotification(message);
  }
}