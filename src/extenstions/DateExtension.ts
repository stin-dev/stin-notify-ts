declare global {
  interface Date {
    getNthDayOfWeek: () => { nth: number, day: DayOfWeek };
    tomorrow: () => Date;
    yesterday: () => Date;
  }
}

Date.prototype.getNthDayOfWeek = function () {
  return {
    nth: Math.floor((this.getDate() - 1) / 7) + 1,
    day: this.getDay(),
  }
}

Date.prototype.tomorrow = function () {
  const tomorrow = new Date(this.getTime());
  tomorrow.setDate(this.getDate() + 1);
  return tomorrow;
}

Date.prototype.yesterday = function () {
  const yesterday = new Date(this.getTime());
  yesterday.setDate(this.getDate() - 1);
  return yesterday;
}

export enum DayOfWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}
