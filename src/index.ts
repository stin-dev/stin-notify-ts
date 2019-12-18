import "./extenstions";
import { test } from "./tests";
import {container} from "./containers";

declare const global: {
  [x: string]: any;
}

global.notifyGarbageDay = () => {
  const service = container.NotifyGarbageDayService;
  service.notifyGarbageDay((new Date()).tomorrow());
}

global.test = () => { test(); }