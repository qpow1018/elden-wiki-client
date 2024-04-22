type TypeScale = {
  unit: number;
  min: number;
  max: number;
}

type TypeMapViewer = {
  width: number;
  height: number;
  left: number;
  top: number;
}

type TypeMapImageSize = {
  scale: number;
  width: number;
  height: number;
}

type TypeZoomPoint = {
  x: number;
  y: number;
  oldScale: number;
  newScale: number;
}

type TypeCoord = {
  x: number;
  y: number;
}

export type {
  TypeScale,
  TypeMapViewer,
  TypeMapImageSize,
  TypeZoomPoint,
  TypeCoord,
}