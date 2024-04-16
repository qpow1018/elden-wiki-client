'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

import { utils } from '@/libs';
import { Map, Item, MapContainer } from './types';

import MapViewer from './MapViewer';

import MapTestImage from '@/assets/images/map-test-img.jpg';
import MapTest1 from '@/assets/images/map-test1.jpg';
import MapTest2 from '@/assets/images/map-test2.jpg';
import MapTest3 from '@/assets/images/map-test3.jpg';

export default function MapPage() {
  const MAP_DATA: Map = {
    // imageUrl: MapTest1,
    // width: 1965,
    // height: 1275,

    // imageUrl: MapTest2,
    // width: 3401,
    // height: 8192,

    imageUrl: MapTest3,
    width: 5292,
    height: 4926,
  }

  const ITEM_DATA: Item[] = [
    {
      id: 1,
      name: 'test1',
      coord: { x: 0, y: 0 }
    },
    {
      id: 2,
      name: 'test2',
      coord: { x: 0, y: 0 }
    },
    {
      id: 3,
      name: 'test3',
      coord: { x: 0, y: 0 }
    },
    {
      id: 4,
      name: 'test4',
      coord: { x: 0, y: 0 }
    },
    {
      id: 5,
      name: 'test5',
      coord: { x: 0, y: 0 }
    },
    {
      id: 6,
      name: 'test6',
      coord: { x: 0, y: 0 }
    },
  ];

  const refMapContainer = useRef<HTMLElement | null>(null);

  const [mapContainer, setMapContainer] = useState<MapContainer | null>(null);

  useEffect(() => {
    const mapContainerElm = refMapContainer.current;
    if (mapContainerElm === null) return;

    setMapContainer({
      width: mapContainerElm.clientWidth,
      height: mapContainerElm.clientHeight,
      offsetTop: mapContainerElm.offsetTop,
      offsetLeft: mapContainerElm.offsetLeft
    });
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        padding: '100px 0',
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
          ref={refMapContainer}
          sx={{
            width: '100%',
            height: '600px',
            overflow: 'hidden',
          }}
        >
          { mapContainer !== null &&
            <MapViewer
              map={MAP_DATA}
              items={ITEM_DATA}
              mapContainer={mapContainer}
            />
          }
        </Box>
      </Box>
    </Box>
  );
}