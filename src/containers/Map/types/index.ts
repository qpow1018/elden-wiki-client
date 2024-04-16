import { StaticImageData } from "next/image";

type Map = {
  imageUrl: StaticImageData;
  width: number;
  height: number;
}

type Item = {
  id: number;
  name: string;
  coord: {
    x: number;
    y: number;
  }
}

type MapContainer = {
  width: number;
  height: number;
  offsetTop: number;
  offsetLeft: number;
}

export type {
  Map,
  Item,
  MapContainer,
}