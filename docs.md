## プログラムの実行が開始される

## 各処理毎にログを取得する

### ILoggerService
- info(): void

    正常に動作していることをログに記録する。

- warn(): void

    警告をログに記録する。

- error(): void

    エラーをログに記録する。

- log(): void

    デバッグレベルのログを記録する。


## 明日の日付を取得する

### Dateクラス拡張
- Date.prototype.tomorrow: () => Date

## 明日の日付の第nM曜日を確認する

### Dateクラス拡張
- Date.prototype.getNthDayOfWeek: () => { nth: number, day: number }

## 第nM曜日がなんのゴミの日かを確認する

### IGarbageDayService
- getGarbageType(nth: number, dayOfWeek: number): GarbageType

## ゴミの日ではないならばプログラムを終了する


## ゴミの種類に該当するメッセージを取得する

### IGarbageDayService
- getMessage(type: GarbageType): string

## メッセージを送信する

### INotifyService
- sendNotification(message: string): boolean