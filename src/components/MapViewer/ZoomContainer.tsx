import { useRef } from 'react';
import { Box } from '@mui/material';

import { utils } from '@/libs';
import { TypeMapViewer, TypeMapImageSize, TypeZoomPoint } from './types';

export default function MapZoomContainer(
  props: {
    mapViewer: TypeMapViewer;
    scaleUnit: number;
    maxScale: number;
    minScale: number;
    imageSizeMap: Map<number, TypeMapImageSize>;
    onChangeImageSize: (value: TypeMapImageSize | null) => void;
    onChangeZoomPoint: (value: TypeZoomPoint | null) => void;
    children?: React.ReactNode;
  }
) {
  const { mapViewer, scaleUnit, maxScale, minScale, imageSizeMap, onChangeImageSize, onChangeZoomPoint } = props;

  const refCurScale = useRef<number>(minScale);
  const refZoomPoint = useRef<TypeZoomPoint | null>(null);

  function handleWheelZoomContainer(e: React.WheelEvent) {
    const isScaleUp = e.deltaY < 0 ? true : false;
    const curScale = refCurScale.current;

    // TODO 소수점 계산시 오차 발생
    if (isScaleUp === true && curScale < maxScale) {
      refCurScale.current = utils.convertNumberWithDecimal(curScale + scaleUnit, 2);
    } else if (isScaleUp === false && curScale > minScale) {
      refCurScale.current = utils.convertNumberWithDecimal(curScale - scaleUnit, 2);
    } else {
      return;
    }

    updateImageSizeByScale(refCurScale.current);

    refZoomPoint.current = {
      x: e.clientX - mapViewer.left,
      y: e.clientY - mapViewer.top,
      oldScale: curScale,
      newScale: refCurScale.current
    }
    onChangeZoomPoint(refZoomPoint.current);
  }

  function updateImageSizeByScale(scale: number) {
    const imageSize = imageSizeMap.get(scale) || null;
    onChangeImageSize(imageSize);
  }

  return (
    <Box
      onWheel={handleWheelZoomContainer}
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      { props.children }
    </Box>
  );
}
