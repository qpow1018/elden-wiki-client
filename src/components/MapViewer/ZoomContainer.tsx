import { useRef, useState } from 'react';
import { Box } from '@mui/material';

import useWindowSize from '@/hooks/useWindowSize';
import { utils } from '@/libs';
import { TypeZoomPoint } from './types';

export default function MapZoomContainer(
  props: {
    scaleUnit: number;
    maxScale: number;
    minScale: number;
    currentScale: number;
    onChangeImageSizeByScale: (scale: number) => void;
    onChangeZoomPoint: (value: TypeZoomPoint | null) => void;
    mapViewerTop: number;
    mapViewerLeft: number;
    children?: React.ReactNode;
  }
) {
  const { isDesktop } = useWindowSize();

  const { scaleUnit, maxScale, minScale, currentScale, onChangeImageSizeByScale, onChangeZoomPoint, mapViewerTop, mapViewerLeft } = props;

  const MIN_ZOOM_DISTANCE = 20;

  const refStartDiff = useRef<number>(0);

  function getNewScale(isScaleUp: boolean) {
    const curScale = currentScale;
    let newScale: number | null = null;

    if (isScaleUp === true && curScale < maxScale) {
      newScale = utils.convertNumberWithDecimal(curScale + scaleUnit, 2);
    } else if (isScaleUp === false && curScale > minScale) {
      newScale = utils.convertNumberWithDecimal(curScale - scaleUnit, 2);
    }

    return newScale;
  }

  function getDiffWithTwoPoints(x1: number, x2: number, y1: number, y2: number) {
    const xDiff = x1 - x2;
    const yDiff = y1 - y2;
    return Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
  }

  function handleWheelZoomContainer(e: React.WheelEvent) {
    const isScaleUp = e.deltaY < 0 ? true : false;
    const newScale = getNewScale(isScaleUp);
    if (newScale === null) return;

    onChangeImageSizeByScale(newScale);

    onChangeZoomPoint({
      x: e.clientX - mapViewerLeft,
      y: e.clientY - mapViewerTop,
      oldScale: currentScale,
      newScale: newScale
    });
  }

  function handleTouchStart(e: React.TouchEvent) {
    if (e.touches.length !== 2) return;
    const t1 = e.touches[0];
    const t2 = e.touches[1];

    const diff = getDiffWithTwoPoints(t1.clientX, t2.clientX, t1.clientY, t2.clientY);
    refStartDiff.current = diff;
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (e.touches.length !== 2) return;
    const t1 = e.touches[0];
    const t2 = e.touches[1];

    const diff = getDiffWithTwoPoints(t1.clientX, t2.clientX, t1.clientY, t2.clientY);
    const moveDiff = diff - refStartDiff.current;

    if (Math.abs(moveDiff) < MIN_ZOOM_DISTANCE) {
      return;
    }

    const isScaleUp = moveDiff > 0 ? true : false;
    const newScale = getNewScale(isScaleUp);
    if (newScale === null) return;

    onChangeImageSizeByScale(newScale);
    refStartDiff.current = diff;

    const x1 = t1.clientX - mapViewerLeft;
    const x2 = t2.clientX - mapViewerLeft;
    const y1 = t1.clientY - mapViewerTop;
    const y2 = t2.clientY - mapViewerTop;
    const centerX = (x1 + x2) / 2;
    const centerY = (y1 + y2) / 2;

    onChangeZoomPoint({
      x: centerX,
      y: centerY,
      oldScale: currentScale,
      newScale: newScale
    });
  }

  return (
    <>
      { isDesktop === false ? (
        <Box
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          sx={{
            width: '100%',
            height: '100%'
          }}
        >
          { props.children }
        </Box>
      ) : (
        <Box
          onWheel={handleWheelZoomContainer}
          sx={{
            width: '100%',
            height: '100%'
          }}
        >
          { props.children }
        </Box>
      )}
    </>
  );
}
