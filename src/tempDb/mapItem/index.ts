import limgraveItems from './limgrave';

export type ResMapItem = {
  // id: number;
  importance: number;
  location: {
    type: string;
    name: string | null;
    displayName: string | null;
    coord: {
      x: number;
      y: number;
    };
    description: string | null;
    stairs: number | null;
  };
  boss: {
    name: string;
    rune: number;
  };
  items: {
    type: string;
    name: string;
    count: number;
  }[];
}

type ResMapItems = {
  [n: number]: ResMapItem[];
};

const resMapItems: ResMapItems = {
  1: limgraveItems,
  2: limgraveItems,
  3: limgraveItems,
  4: limgraveItems,
  5: limgraveItems,
  6: limgraveItems,
  7: limgraveItems,
  8: limgraveItems,
  9: limgraveItems,
  10: limgraveItems,
  11: limgraveItems,
  12: limgraveItems,
  13: limgraveItems,
  14: limgraveItems,
  15: limgraveItems,
  16: limgraveItems,
  17: limgraveItems,
  18: limgraveItems,
  19: limgraveItems,
  20: limgraveItems,
  21: limgraveItems,
  22: limgraveItems,
  23: limgraveItems,
  24: limgraveItems,
  25: limgraveItems,
}

export default resMapItems;