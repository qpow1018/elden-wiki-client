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
      name: '적사자성',
      coord: { x: 4330, y: 4550 }
    },
    {
      id: 2,
      name: '밀리센트교회',
      coord: { x: 3490, y: 2420 }
    },
    {
      id: 3,
      name: '노장오닐',
      coord: { x: 2583.64, y: 2667.27 }
    },
    {
      id: 4,
      name: '게르 요새',
      coord: { x: 773.33, y: 2915 }
    },
    {
      id: 5,
      name: '시작교회',
      coord: { x: 140, y: 1243.33 }
    },
    {
      id: 6,
      name: '키렘폐허',
      coord: { x: 1501.67, y: 1591.67 }
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

      {/* <TestView /> */}
    </Box>
  );
}

function TestView() {
  const testPoints = [
    {
      id: 1,
      x: 25,
      y: 25
    },
    {
      id: 2,
      x: 50,
      y: 50
    },
    {
      id: 3,
      x: 75,
      y: 75
    },
    {
      id: 4,
      x: 25,
      y: 75
    },
    {
      id: 5,
      x: 75,
      y: 25
    },
  ]

  const offsetLeft = 468;
  const offsetTop = 108;
  const defaultWidth = 200;
  const defaultHeight = 200;

  const containerRef = useRef<HTMLElement>();

  const refCurScale = useRef<number>(1);

  const [viewBoxWidth, setViewBoxWidth] = useState(defaultWidth);
  const [viewBoxHeight, setViewBoxHeight] = useState(defaultHeight);

  const [moveCoord, setMoveCoord] = useState({ x: 100, y: 100 });

  function testClick(e: React.MouseEvent) {
    const mouseX = e.clientX - offsetLeft;
    const mouseY = e.clientY - offsetTop;
    console.log(mouseX, mouseY);
  }

  function updateScaleUp(mouseX: number, mouseY: number) {
    const curScale = refCurScale.current;
    refCurScale.current = curScale + 0.5;
    setViewBoxWidth(defaultWidth * refCurScale.current);
    setViewBoxHeight(defaultHeight * refCurScale.current);


    const resultX = moveCoord.x - (mouseX * 0.5);
    const resultY = moveCoord.y - (mouseY * 0.5);

    setMoveCoord({
      x: resultX,
      y: resultY
    });
  }

  function updateScaleDown(mouseX: number, mouseY: number) {
    const curScale = refCurScale.current;
    refCurScale.current = curScale - 0.5;
    setViewBoxWidth(defaultWidth * refCurScale.current);
    setViewBoxHeight(defaultHeight * refCurScale.current);


    const resultX = moveCoord.x + (mouseX * 0.5);
    const resultY = moveCoord.y + (mouseY * 0.5);

    setMoveCoord({
      x: resultX,
      y: resultY
    });
  }


  return (
    <>
      <Box
        ref={containerRef}
        onClick={testClick}
        sx={{
          marginTop: '100px',
          width: 400,
          height: 400,
          boxShadow: '0 0 1px black',
          margin: 'auto',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            background: 'rgba(255, 0, 0, 0.3)',
            width: viewBoxWidth,
            height: viewBoxHeight,
            transformOrigin: '0 0',
            transform: `translate(${moveCoord.x}px, ${moveCoord.y}px)`
          }}
        >
          { testPoints.map(item =>
            <Box
              key={item.id}
              sx={{
                position: 'absolute',
                top: `calc(${item.y}% - 4px)`,
                left: `calc(${item.x}% - 4px)`,
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'blue'
              }}
            >
            </Box>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          position: 'relative',
          zIndex: 40
        }}
      >
        <Box>
          test1의 마우스 포인트는? - 100, 100 / 200, 200 / 300, 300
        </Box>

        <Box>
          100,100 포인트
          <button onClick={() => updateScaleUp(50, 50)}>스케일 업</button>
          <button onClick={() => updateScaleDown(50, 50)}>스케일 다운</button>
        </Box>

        <Box>
          200,200 포인트
          <button onClick={() => updateScaleUp(200, 200)}>스케일 업</button>
          <button onClick={() => updateScaleDown(200, 200)}>스케일 다운</button>
        </Box>

        <Box>
          300,300 포인트
          <button onClick={() => updateScaleUp(300, 300)}>스케일 업</button>
          <button onClick={() => updateScaleDown(300, 300)}>스케일 다운</button>
        </Box>
        -----------------------------------
        <Box>
          100,300 포인트
          <button onClick={() => updateScaleUp(100, 300)}>스케일 업</button>
          <button onClick={() => updateScaleDown(100, 300)}>스케일 다운</button>
        </Box>



      </Box>
    </>
  );
}