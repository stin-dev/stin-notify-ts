import { DayOfWeek } from "../extenstions";
import { IGarbageDayService, GarbageType, } from "../interfaces";
import { garbageDayConfig, garbageDayMessage } from "./GarbageDay.config";

export class GarbageDayService implements IGarbageDayService {
  constructor() { }

  getGarbageType = (nth: number, dayOfWeek: DayOfWeek): GarbageType | undefined => {
    const config = garbageDayConfig[DayOfWeek[dayOfWeek]].find(c => c.nth === nth);

    if (config) {
      return config.garbagetype;
    } else {
      return;
    }
  };

  getMessage = (type: GarbageType): string => {
    return garbageDayMessage[type];
  };
}

