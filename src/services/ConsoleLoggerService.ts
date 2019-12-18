import { ILoggerService } from "../interfaces"

export class ConsoleLoggerService implements ILoggerService {
  constructor() { }

  log = (log: string) => {
    console.log(log);
  }

  info = (log: string) => {
    console.info(log);
  }

  error = (log: string) => {
    console.error(log);
  }

  warn = (log: string) => {
    console.warn(log);
  }
}