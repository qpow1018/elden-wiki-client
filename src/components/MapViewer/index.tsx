import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

import { utils } from '@/libs';
import { ResMap, ResMapItem } from '@/api/types';
import {
  TypeScale,
  TypeMapViewer,
  TypeMapImageSize,
  TypeZoomPoint,
  TypeCoord,
} from './types';

import ZoomContainer from './ZoomContainer';
import MovementContainer from './MovementContainer';
import MapDataContainer from './MapDataContainer';
import MapImage from './MapImage';
import ItemMarkerContainer from './ItemMarkerContainer';
import MapCoordContainer from './MapCoordContainer';

export default function MapViewer(
  props: {
    mapData: ResMap;
    itemsData: ResMapItem[];
  }
) {
  const { mapData, itemsData } = props;

  const refMapViewer = useRef<HTMLElement | null>(null);
  const refScale = useRef<TypeScale>({ unit: 0.05, max: 1, min: 0 });

  const [mapViewer, setMapViewer] = useState<TypeMapViewer | null>(null);
  const [imageSizeMap, setImageSizeMap] = useState<Map<number, TypeMapImageSize> | null>(null);

  const [imageSize, setImageSize] = useState<TypeMapImageSize | null>(null);
  const [zoomPoint, setZoomPoint] = useState<TypeZoomPoint | null>(null);
  const [movementCoord, setMovementCoord] = useState<TypeCoord>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState<boolean>(false);

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
    refScale.current.min = minImageSize.scale;
    setImageSize(minImageSize);

    // 시작 이미지 중앙 정렬
    initImageAlignCenter(mapViewerWidth, mapViewerHeight, minImageSize.width, minImageSize.height);

  }, [mapData]);

  function getImageSizeMapInfo(mapData: ResMap, mapViewerWidth: number, mapViewerHeight: number) {
    const _imageSizeMap = new Map<number, TypeMapImageSize>();

    const maxScale = refScale.current.max;
    const scaleUnit = refScale.current.unit;
    const imageWidth = mapData.width;
    const imageHeight = mapData.height;

    for (let i = 0; i < (maxScale / scaleUnit) - 1; i++) {
      const curScale = utils.convertNumberWithDecimal(maxScale - (scaleUnit * i), 2);
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

  function changeImageSizeByScale(scale: number) {
    if (imageSizeMap === null) return;
    const imageSize = imageSizeMap.get(scale) || null;
    setImageSize(imageSize);
  }

  function initImageAlignCenter(conWidth: number, conHeight: number, imgWidth: number, imgHeight: number) {
    const centerX = utils.convertNumberWithDecimal((conWidth - imgWidth) / 2, 2);
    const centerY = utils.convertNumberWithDecimal((conHeight - imgHeight) / 2, 2);
    setMovementCoord({
      x: centerX,
      y: centerY
    });
  }

  useEffect(() => {
    if (zoomPoint === null || mapViewer === null) return;
    setupMovementCoordByZoomPoint(zoomPoint, mapViewer);
  }, [zoomPoint, mapViewer]);

  // TODO 덜컹거리는 원인 체크
  function setupMovementCoordByZoomPoint(zoomPoint: TypeZoomPoint, mapViewer: TypeMapViewer) {
    const mouseX = zoomPoint.x;
    const mouseY = zoomPoint.y;

    setMovementCoord(prev => {
      const newX = (-prev.x + mouseX) * (zoomPoint.newScale / zoomPoint.oldScale) - mouseX;
      const newY = (-prev.y + mouseY) * (zoomPoint.newScale / zoomPoint.oldScale) - mouseY;
      return {
        x: -newX,
        y: -newY,
      };
    });
  }

  return (
    <Box
      ref={refMapViewer}
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        touchAction: 'none',
        userSelect: 'none',
      }}
    >
      { (mapViewer !== null && imageSizeMap !== null && imageSize !== null) &&
        <ZoomContainer
          scaleUnit={refScale.current.unit}
          maxScale={refScale.current.max}
          minScale={refScale.current.min}
          currentScale={imageSize.scale}
          onChangeImageSizeByScale={(value) => changeImageSizeByScale(value)}
          onChangeZoomPoint={(value) => setZoomPoint(value)}
          mapViewerTop={mapViewer.top}
          mapViewerLeft={mapViewer.left}
        >
          <MovementContainer
            movementCoord={movementCoord}
            onChangeMovementCoord={(value) => setMovementCoord(value)}
            onChangeIsMoving={(value) => setIsMoving(value)}
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
              <ItemMarkerContainer
                scale={imageSize.scale}
                itemsData={itemsData}
              />
              <MapCoordContainer
                mapViewerTop={mapViewer.top}
                mapViewerLeft={mapViewer.left}
                scale={imageSize.scale}
                movementX={movementCoord.x}
                movementY={movementCoord.y}
                isMoving={isMoving}
              />
            </MapDataContainer>
          </MovementContainer>
        </ZoomContainer>
      }
    </Box>
  );
}