import limgraveItems from './limgrave';

export type ResItemLocation = {
  // id: number;
  importance: number;
  type: number;
  name: string | null;
  displayName: string | null;
  description: string | null;
  coord: { x: number; y: number; };
  stairs: number | null;
  bossName: string | null;
  bossRune: number | null;
  items: {
    itemId: number;
    count: number;
    isVisible: boolean;
  }[];
}

type ResItemLocations = {
  [n: number]: ResItemLocation[];
};

const emptyArr: ResItemLocation[] = [];

const resMapItems: ResItemLocations = {
  1: limgraveItems,
  2: emptyArr,
  3: emptyArr,
  4: emptyArr,
  5: emptyArr,
  6: emptyArr,
  7: emptyArr,
  8: emptyArr,
  9: emptyArr,
  10: emptyArr,
  11: emptyArr,
  12: emptyArr,
  13: emptyArr,
  14: emptyArr,
  15: emptyArr,
  16: emptyArr,
  17: emptyArr,
  18: emptyArr,
  19: emptyArr,
  20: emptyArr,
  21: emptyArr,
  22: emptyArr,
  23: emptyArr,
  24: emptyArr,
  25: emptyArr,
}

export default resMapItems;