import { GarbageType } from "../interfaces";

interface GarbageDayConfig {
  [dayOfWeek: string]: {
    nth: number;
    garbagetype: GarbageType;
  }[];
};

interface GarbageMessage {
  burnable: string;
  incombustible: string;
  plastic: string;
  recyclable: string;
}

export const garbageDayConfig: GarbageDayConfig = {
  Sunday: [],
  Monday: [
    {
      nth: 1,
      garbagetype: "plastic"
    },
    {
      nth: 2,
      garbagetype: "incombustible"
    },
    {
      nth: 3,
      garbagetype: "plastic"
    }
  ],
  Tuesday: [
    {
      nth: 1,
      garbagetype: "burnable"
    },
    {
      nth: 2,
      garbagetype: "burnable"
    },
    {
      nth: 3,
      garbagetype: "burnable"
    },
    {
      nth: 4,
      garbagetype: "burnable"
    },
    {
      nth: 5,
      garbagetype: "burnable"
    }
  ],
  Wednesday: [
    {
      nth: 4,
      garbagetype: "recyclable"
    }
  ],
  Thursday: [],
  Friday: [
    {
      nth: 1,
      garbagetype: "burnable"
    },
    {
      nth: 2,
      garbagetype: "burnable"
    },
    {
      nth: 3,
      garbagetype: "burnable"
    },
    {
      nth: 4,
      garbagetype: "burnable"
    },
    {
      nth: 5,
      garbagetype: "burnable"
    }
  ],
  Saturday: []
}

const burnableMessage =
  `燃えるゴミの日です`;

const incombustibleMessage =
  `
 燃えないゴミ日です。下記の物が処分できます。
 
 ・ペットボトル
 ・乾電池
 ・ガラス類
 ・陶器
 `

const plasticMessage =
  `プラスチック製容器包装の日です。`

const recyclableMessage =
  `
資源ごみの日です。下記の物が処分できます。

・ビン
・カン
`

export const garbageDayMessage: GarbageMessage = {
  burnable: burnableMessage,
  incombustible: incombustibleMessage,
  plastic: plasticMessage,
  recyclable: recyclableMessage,
}
