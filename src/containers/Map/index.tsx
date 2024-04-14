'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

import MapViewer from './MapViewer';

import MapTestImage from '@/assets/images/map-test-img.jpg';
import MapTest1 from '@/assets/images/map-test1.jpg';
import MapTest2 from '@/assets/images/map-test2.jpg';
import MapTest3 from '@/assets/images/map-test3.jpg';

type MapViewerElmInfo = {
  width: number;
  height: number;
  offsetTop: number;
  offsetLeft: number;
}

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

  const [mapViewerContainerElmInfo, setMapViewerContainerElmInfo] = useState<MapViewerElmInfo | null>(null);

  // mapViewer의 기본 정보 세팅
  useEffect(() => {
    const mapViewerContainerElm = refMapViewerContainer.current;
    if (mapViewerContainerElm === null) return;

    setMapViewerContainerElmInfo({
      width: mapViewerContainerElm.clientWidth,
      height: mapViewerContainerElm.clientHeight,
      offsetTop: mapViewerContainerElm.offsetTop,
      offsetLeft: mapViewerContainerElm.offsetLeft,
    });
  }, []);

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
          { mapViewerContainerElmInfo !== null &&
            <MapViewer
              mapImageUrl={MAP_DATA.staticImageData}
              originImageWidth={MAP_DATA.width}
              originImageHeight={MAP_DATA.height}
              containerWidth={mapViewerContainerElmInfo.width}
              containerHeight={mapViewerContainerElmInfo.height}
              containerOffsetLeft={mapViewerContainerElmInfo.offsetLeft}
              containerOffsetTop={mapViewerContainerElmInfo.offsetTop}
            />
          }
        </Box>
      </Box>
    </Box>
  );
}