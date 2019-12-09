# GAS project Template with TypeScript

This repository is a template to develop a GoogleAppsScript project with TypeScript.

## Usage

Clone from Github.

```
git clone https://github.com/stin-dev/gas-ts-template <your-project-name>
cd <your-project-name>
npm install
```

Install clasp with npm, and login with Google.
```
npm install @google/clasp -g
clasp login
```

Create new GoogleAppsScript project. (Check [the referrence](https://github.com/google/clasp#create).)
```
clasp create --type standalone --title "Your GAS Project Name" --parentId "1D_Gxyv*****************************NXO7o" --rootDir ./dist
```

Inject Your functions to `global` variable in `index.ts` like this:
```ts
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
```

Once your development is done, push your codes to GAS project.
```
npm run deploy
```

Visit https://script.google.com/d/{your-script-id}/edit, and try to run your code.

Have a nice hack !