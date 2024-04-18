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

type TypeMovementCoord = {
  x: number;
  y: number;
}

export type {
  TypeMapViewer,
  TypeMapImageSize,
  TypeZoomPoint,
  TypeMovementCoord,
}