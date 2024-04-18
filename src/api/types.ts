import { StaticImageData } from 'next/image';

type ResMap = {
  id: number;
  name: string;
  imageUrl: StaticImageData;
  width: number;
  height: number;
}

export type {
  ResMap,
}