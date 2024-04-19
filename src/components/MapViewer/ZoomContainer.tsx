import { Box } from '@mui/material';

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
  const { scaleUnit, maxScale, minScale, currentScale, onChangeImageSizeByScale, onChangeZoomPoint, mapViewerTop, mapViewerLeft } = props;

  function handleWheelZoomContainer(e: React.WheelEvent) {
    const isScaleUp = e.deltaY < 0 ? true : false;

    const curScale = currentScale;
    let newScale: number | null = null;

    if (isScaleUp === true && curScale < maxScale) {
      newScale = utils.convertNumberWithDecimal(curScale + scaleUnit, 2);
    } else if (isScaleUp === false && curScale > minScale) {
      newScale = utils.convertNumberWithDecimal(curScale - scaleUnit, 2);
    } else {
      return;
    }

    onChangeImageSizeByScale(newScale);
    onChangeZoomPoint({
      x: e.clientX - mapViewerLeft,
      y: e.clientY - mapViewerTop,
      oldScale: curScale,
      newScale: newScale
    });
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
