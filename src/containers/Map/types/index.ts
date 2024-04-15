import { StaticImageData } from "next/image";

type MapViewerInfo = {
  containerWidth: number;
  containerHeight: number;
  containerOffsetTop: number;
  containerOffsetLeft: number;
  imageUrl: StaticImageData;
  originImageWidth: number;
  originImageHeight: number;
  minImageScale: number;
  minImageWidth: number;
  minImageHeight: number;
  maxImageScale: number;
  maxImageWidth: number;
  maxImageHeight: number;
  imageScaleUnit: number;
  diffImageWidthByScale: number;
  diffImageHeightByScale: number;
}

export type {
  MapViewerInfo
}