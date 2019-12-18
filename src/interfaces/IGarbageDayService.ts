import { DayOfWeek } from "../extenstions";

export interface IGarbageDayService {
  getGarbageType: (nth: number, dayOfWeek: DayOfWeek) => GarbageType | undefined;
  getMessage: (type: GarbageType) => string;
}

export type GarbageType = "burnable" | "incombustible" | "plastic" | "recyclable";