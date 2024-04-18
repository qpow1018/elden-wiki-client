import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

import { utils } from '@/libs';
import { ResMap } from '@/api/types';
import { TypeMapViewer, TypeMapImageSize, TypeZoomPoint, TypeMovementCoord } from './types';

import ZoomContainer from './ZoomContainer';
import MovementContainer from './MovementContainer';
import MapDataContainer from './MapDataContainer';
import MapImage from './MapImage';
import ItemMarker from './ItemMarker';
import MapCoordContainer from './MapCoordContainer';

export default function MapViewer(
  props: {
    mapData: ResMap;
    itemsData: any;
  }
) {
  const { mapData, itemsData } = props;

  const SCALE_UNIT = 0.05;
  const MAX_SCALE = 1;

  const refMapViewer = useRef<HTMLElement | null>(null);

  const [mapViewer, setMapViewer] = useState<TypeMapViewer | null>(null);

  const [minScale, setMinScale] = useState<number | null>(null);
  const [imageSizeMap, setImageSizeMap] = useState<Map<number, TypeMapImageSize> | null>(null);
  const [imageSize, setImageSize] = useState<TypeMapImageSize | null>(null);
  const [zoomPoint, setZoomPoint] = useState<TypeZoomPoint | null>(null);
  const [movementCoord, setMovementCoord] = useState<TypeMovementCoord>({ x: 0, y: 0 });

  useEffect(() => {
    const mapViewerElm = refMapViewer.current;
    if (mapViewerElm === null) return;

    // mapViewerElm에 대한 정의
    const mapViewerWidth = mapViewerElm.clientWidth;
    const mapViewerHeight = mapViewerElm.clientHeight;
    const mapViewerTop = mapViewerElm.offsetTop;
    const mapViewerLeft = mapViewerElm.offsetLeft;
    setMapViewer({
      width: mapViewerWidth,
      height: mapViewerHeight,
      top: mapViewerTop,
      left: mapViewerLeft
    });

    // ImageSizeMap 생성
    const _imageSizeMap = getImageSizeMapInfo(mapData, mapViewerWidth, mapViewerHeight);
    setImageSizeMap(_imageSizeMap);

    // 최소, 시작 이미지 크기 정의
    const minImageSize = Array.from(_imageSizeMap)[_imageSizeMap.size-1][1];
    setMinScale(minImageSize.scale);
    setImageSize(minImageSize);
  }, [mapData]);

  function getImageSizeMapInfo(mapData: ResMap, mapViewerWidth: number, mapViewerHeight: number) {
    const _imageSizeMap = new Map<number, TypeMapImageSize>();

    const scale = MAX_SCALE;
    const imageWidth = mapData.width;
    const imageHeight = mapData.height;

    for (let i = 0; i < (scale / SCALE_UNIT) - 1; i++) {
      const curScale = utils.convertNumberWithDecimal(scale - (SCALE_UNIT * i), 2);
      const curImageWidth = utils.convertNumberWithDecimal(imageWidth * curScale, 1);
      const curImageHeight = utils.convertNumberWithDecimal(imageHeight * curScale, 1);

      _imageSizeMap.set(curScale, {
        scale: curScale,
        width: curImageWidth,
        height: curImageHeight,
      });

      if (curImageWidth <= mapViewerWidth && curImageHeight <= mapViewerHeight) {
        break;
      }
    }

    return _imageSizeMap;
  }

  return (
    <Box
      ref={refMapViewer}
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      { (mapViewer !== null && imageSizeMap !== null && minScale !== null) &&
        <ZoomContainer
          mapViewer={mapViewer}
          scaleUnit={SCALE_UNIT}
          maxScale={MAX_SCALE}
          minScale={minScale}
          imageSizeMap={imageSizeMap}
          onChangeImageSize={(value) => setImageSize(value)}
          onChangeZoomPoint={(value) => setZoomPoint(value)}
        >
          { imageSize !== null &&
            <MovementContainer
              mapViewer={mapViewer}
              imageSize={imageSize}
              zoomPoint={zoomPoint}
              movementCoord={movementCoord}
              onChangeMovementCoord={(value) => setMovementCoord(value)}
            >
              <MapDataContainer
                width={imageSize.width}
                height={imageSize.height}
                movementX={movementCoord.x}
                movementY={movementCoord.y}
              >
                <MapImage
                  imageUrl={mapData.imageUrl}
                />
                <ItemMarker
                
                />
                <MapCoordContainer
                  mapViewerTop={mapViewer.top}
                  mapViewerLeft={mapViewer.left}
                  scale={imageSize.scale}
                  movementX={movementCoord.x}
                  movementY={movementCoord.y}
                />
              </MapDataContainer>
            </MovementContainer>
          }
        </ZoomContainer>
      }
    </Box>
  );
}