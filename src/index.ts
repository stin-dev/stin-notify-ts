declare const global: {
  [x: string]: any;
}

import { hello } from "./hello";

global.hello = () => {
  hello();

  hello("GoogleAppsScript");
}

global.doGet = (e: GoogleAppsScript.Events.DoGet) => {
  console.log("GAS got a get request!");

  const params = JSON.stringify(e);
  return HtmlService.createHtmlOutput(params);
}

global.doPost = (e: GoogleAppsScript.Events.DoPost) => {
  console.log("GAS got a post request!");
  const params = JSON.stringify(e);
  return HtmlService.createHtmlOutput(params);
}