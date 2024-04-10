'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box } from '@mui/material';

import MapTestImage from '@/assets/images/map-test-img.jpg';
import MapTest1 from '@/assets/images/map-test1.jpg';
import MapTest2 from '@/assets/images/map-test2.jpg';
import MapTest3 from '@/assets/images/map-test3.jpg';

export default function Map() {
  const mapTestData = [
    {
      id: 1,
      staticImageData: MapTest1,
      imageWidth: 1965,
      imageHeight: 1275,
    },
    {
      id: 2,
      staticImageData: MapTest2,
      imageWidth: 3401,
      imageHeight: 8192,
    },
    // {
    //   id: 3,
    //   staticImageData: MapTest3,
    //   imageWidth: 5292,
    //   imageHeight: 4926,
    // },
  ];

  return (
    <Box
      sx={{
        padding: '120px 280px',
        background: '#ddd'
      }}
    >
      { mapTestData.map(data =>
        <MapAreaTest
          key={data.id}
          staticImageData={data.staticImageData}
          imageWidth={data.imageWidth}
          imageHeight={data.imageHeight}
        />
      )}

      <Box
        sx={{
          marginTop: '20px'
        }}
      >
        고민해야 하는 이슈
        <div>
          지도 마다 크기가 다르다 - map 영역은 가능한 크게 보게 하는게 좋고 고정된 크기를 가질텐데 빈 영역을 어떻게 처리할까
        </div>
        <div>
          동일한 지도를 사용하는 경우가 있다 - 에인세르강 / 에인세르강 본류
        </div>
        <div>
          글씨나 요소 이미지를 굉장히 작게 보여줘야 할거같다
        </div>
        <div>
          축소, 확대, 이동 기능을 어떻게 구현할 것인가? - PC, MO 구분 해야한다
        </div>
        <div>
          지도 자료를 어떻게 구할까?
        </div>
        <div>
          지도 이미지가 클텐데 로딩 부담을 줄이는 방법 찾기
        </div>
      </Box>
    </Box>
  );
}

function MapAreaTest (
  props: {
    staticImageData: StaticImageData;
    imageWidth: number;
    imageHeight: number;
  }
) {
  const IMAGE_SCALE_UNIT = 0.2; // TODO 스케일 단위를 고정? or 가변? / 어떤게 좋으려나?
  const MIN_IMAGE_SCALE = 1;

  const mapViewerRef = useRef<HTMLElement | null>(null);
  const maxImageScaleRef = useRef<number>(4); // TODO
  const imageScaleRef = useRef<number>(MIN_IMAGE_SCALE);

  const [mapViewerWidth, setMapViewerWidth] = useState<number>(0);
  const [mapViewerHeight, setMapViewerHeight] = useState<number>(0);
  const [imageScale, setImageScale] = useState<number>(MIN_IMAGE_SCALE);

  useEffect(() => {
    const mapViewerElm = mapViewerRef.current;
    if (mapViewerElm === null) return;

    // TODO maxScale을 어떻게 정할까??
    const mapViewerWidth = mapViewerElm.clientWidth;
    const mapViewerHeight = mapViewerElm.clientHeight;
    setMapViewerWidth(mapViewerWidth);
    setMapViewerHeight(mapViewerHeight);

    // TODO onWheel로는 처리 안됨(preventDefault가 안먹힘) / 왜 이 형식으로만 되는거지??
    mapViewerElm.addEventListener('wheel', handleWheelMapViewer);
    
    return () => {
      mapViewerElm.removeEventListener('wheel', handleWheelMapViewer);
    }
  }, []);

  function handleWheelMapViewer(e: WheelEvent) {
    e.preventDefault();

    const curImageScale = imageScaleRef.current;

    // TODO 소수점 계산시 오차 발생
    if (e.deltaY < 0 && curImageScale < maxImageScaleRef.current) {
      imageScaleRef.current = Number((curImageScale + IMAGE_SCALE_UNIT).toFixed(2));

    } else if (e.deltaY > 0 && curImageScale > MIN_IMAGE_SCALE) {
      imageScaleRef.current = Number((curImageScale - IMAGE_SCALE_UNIT).toFixed(2));

    } else {
      return;
    }

    setImageScale(imageScaleRef.current);
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '400px',
          border: '2px solid red',
        }}
      >
        <Box
          ref={mapViewerRef}
          // onWheelCapture={handleWheelMapViewer}
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Image
              src={props.staticImageData}
              alt='test-map'
              // priority={true}
              draggable={false}
              width={props.imageWidth}
              height={props.imageHeight}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transform: `scale(${imageScale})`
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: '8px',
          marginBottom: '16px'
        }}
      >
        <Box>현재 이미지 scale : { imageScale }</Box>
        <Box>이미지 가로 : { props.imageWidth }px</Box>
        <Box>이미지 세로 : { props.imageHeight }px</Box>
        <Box>맵뷰어 가로 : { mapViewerWidth }px</Box>
        <Box>맵뷰어 세로 : { mapViewerHeight }px</Box>
      </Box>
    </>
  );
}