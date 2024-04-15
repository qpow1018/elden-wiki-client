'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

import { utils } from '@/libs';
import { MapViewerInfo } from './types';

import MapViewer from './MapViewer';

import MapTestImage from '@/assets/images/map-test-img.jpg';
import MapTest1 from '@/assets/images/map-test1.jpg';
import MapTest2 from '@/assets/images/map-test2.jpg';
import MapTest3 from '@/assets/images/map-test3.jpg';

export default function MapPage() {
  const MAP_DATA = {
    //   staticImageData: MapTest1,
    //   width: 1965,
    //   height: 1275,

    //   staticImageData: MapTest2,
    //   width: 3401,
    //   height: 8192,

    staticImageData: MapTest3,
    width: 5292,
    height: 4926,
  }

  const refMapViewerContainer = useRef<HTMLElement | null>(null);

  const [mapViewerInfo, setMapViewerInfo] = useState<MapViewerInfo | null>(null);

  // mapViewer의 기본 정보 세팅
  // 구성하고 있는 Container와 Image 관련 정보
  useEffect(() => {
    const mapViewerContainerElm = refMapViewerContainer.current;
    if (mapViewerContainerElm === null) return;

    // Container 정보
    const containerWidth = mapViewerContainerElm.clientWidth;
    const containerHeight = mapViewerContainerElm.clientHeight;
    const containerOffsetTop = mapViewerContainerElm.offsetTop;
    const containerOffsetLeft = mapViewerContainerElm.offsetLeft;

    // Image 정보
    // TODO 서버에서 내려준 정보로 변경
    const imageUrl = MAP_DATA.staticImageData;
    const originImageWidth = MAP_DATA.width;
    const originImageHeight = MAP_DATA.height;

    const minImageScale = 1; // 최소 이미지 scale은 1 - container에 contain 처럼 보이는 이미지의 크기 배율을 1로 정의
    const { minImageWidth, minImageHeight } = getMinImageSize(originImageWidth, originImageHeight, containerWidth, containerHeight);
    const maxImageScale = getMaxImageScale(originImageWidth, originImageHeight, containerWidth, containerHeight);
    const maxImageWidth = utils.convertNumberWithDecimal(minImageWidth * maxImageScale, 2);
    const maxImageHeight = utils.convertNumberWithDecimal(minImageHeight * maxImageScale, 2);
    const imageScaleUnit = 0.5; // scale 변경 단위
    const diffImageWidthByScale = minImageWidth * imageScaleUnit;
    const diffImageHeightByScale = minImageHeight * imageScaleUnit;

    setMapViewerInfo({
      containerWidth,
      containerHeight,
      containerOffsetTop,
      containerOffsetLeft,
      imageUrl,
      originImageWidth,
      originImageHeight,
      minImageScale,
      minImageWidth,
      minImageHeight,
      maxImageScale,
      maxImageWidth,
      maxImageHeight,
      imageScaleUnit,
      diffImageWidthByScale,
      diffImageHeightByScale,
    });
  }, [MAP_DATA.staticImageData, MAP_DATA.width, MAP_DATA.height]);

  function getMinImageSize(
    originImageWidth: number,
    originImageHeight: number,
    containerWidth: number,
    containerHeight: number
  ) {
    const largestRatio = Math.max(originImageWidth / containerWidth, originImageHeight / containerHeight);

    const minImageWidth = utils.convertNumberWithDecimal(originImageWidth / largestRatio, 2);
    const minImageHeight = utils.convertNumberWithDecimal(originImageHeight / largestRatio, 2);

    return { minImageWidth, minImageHeight }
  }

  function getMaxImageScale(
    originImageWidth: number,
    originImageHeight: number,
    containerWidth: number,
    containerHeight: number
  ) {
    const largestRatio = Math.max(originImageWidth / containerWidth, originImageHeight / containerHeight);
    return utils.convertNumberWithDecimal(largestRatio, 1);
  }

  return (
    <Box
      sx={{
        width: '100%',
        padding: '120px 0',
        background: '#ddd',
      }}
    >
      <Box
        sx={{
          margin: 'auto',
          maxWidth: 1004,
          border: '2px solid red',
        }}
      >
        <Box
          ref={refMapViewerContainer}
          sx={{
            width: '100%',
            height: '400px',
            overflow: 'hidden',
          }}
        >
          { mapViewerInfo !== null &&
            <MapViewer
              mapViewerInfo={mapViewerInfo}
            />
          }
        </Box>
      </Box>
    </Box>
  );
}