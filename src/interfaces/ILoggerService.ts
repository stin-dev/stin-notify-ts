export interface ILoggerService {
  log: (log: string) => void,
  info: (log: string) => void,
  error: (log: string) => void,
  warn: (log: string) => void,
}
