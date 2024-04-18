import { StaticImageData } from 'next/image';

type ResMap = {
  id: number;
  name: string;
  imageUrl: StaticImageData;
  width: number;
  height: number;
}

type ResMapItem = {
  location: {
    type: string;
    name: string;
    nickname?: string;
    x: number;
    y: number;
    desc: string;
    additionalIcon: string;
  };
  items: {
    itemType: string;
    name: string;
    count: number;
  }[];
}

export type {
  ResMap,
  ResMapItem,
}