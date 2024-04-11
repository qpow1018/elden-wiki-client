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
    // {
    //   id: 1,
    //   staticImageData: MapTest1,
    //   imageWidth: 1965,
    //   imageHeight: 1275,
    // },
    // {
    //   id: 2,
    //   staticImageData: MapTest2,
    //   imageWidth: 3401,
    //   imageHeight: 8192,
    // },
    {
      id: 3,
      staticImageData: MapTest3,
      imageWidth: 5292,
      imageHeight: 4926,
    },
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
  // Zoom 기능 - scale, wheel 관련
  const IMAGE_SCALE_UNIT = 0.4;
  const MIN_IMAGE_SCALE = 1;

  const mapViewerRef = useRef<HTMLElement | null>(null);
  const maxImageScaleRef = useRef<number>(4);
  const imageScaleRef = useRef<number>(MIN_IMAGE_SCALE);

  const [imageScale, setImageScale] = useState<number>(MIN_IMAGE_SCALE);

  // Move 기능 - mouseDown, mouseMove, mouseUp 관련
  const MIN_MOVE_DISTANCE = 4;

  const moveStartPointX = useRef<number>(0);
  const moveStartPointY = useRef<number>(0);
  const finalMovePointX = useRef<number>(0);
  const finalMovePointY = useRef<number>(0);
  const prevImagePointX = useRef<number>(0);
  const prevImagePointY = useRef<number>(0);

  const [imageMovePointX, setImageMovePointX] = useState<number>(0);
  const [imageMovePointY, setImageMovePointY] = useState<number>(0);


  useEffect(() => {
    const mapViewerElm = mapViewerRef.current;
    if (mapViewerElm === null) return;

    setupMaxImageScale(mapViewerElm);

    // TODO onWheel로는 처리 안됨(preventDefault가 안먹힘) / 왜 이 형식으로만 되는거지??
    mapViewerElm.addEventListener('wheel', handleWheelMapViewer);

    return () => {
      mapViewerElm.removeEventListener('wheel', handleWheelMapViewer);
    }
  }, []);

  function setupMaxImageScale(viewerElm: HTMLElement) {
    const num1 = props.imageWidth / viewerElm.clientWidth;
    const num2 = props.imageHeight / viewerElm.clientHeight;
    const largestNum = Math.max(num1, num2);
    maxImageScaleRef.current = Number(largestNum.toFixed(1));
  }

  // TODO 추가로 생각해야할 이슈
  // 첫 Scale 변경 시 느림 - 원인 파악 필요
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

  // TODO 이동 관련해서 생각해 봐야할 이슈
  // addEventListener, removeEventListener 적절하게 작동하는지 확인 필요 - 필요한만큼(1개겠지) 추가되고 삭제된다.
  // mouseMove는 아주 많은 이벤트를 발생 시킨다. - 성능 이슈 발생하려나?? + 이를 해결하기 위해 Throttling을 사용한다면... 매끄럽게 보일까?
  function handleMouseDownMapViewer(e: React.MouseEvent) {
    moveStartPointX.current = e.clientX;
    moveStartPointY.current = e.clientY;

    // 맵뷰어에서 mouseMove, mouseUp 위치가 맵뷰어를 넘어갈 수 있기 때문에 window에 이벤트를 건다.
    window.addEventListener('mousemove', handleMouseMoveWindow);
    window.addEventListener('mouseup', handleMouseUpWindow);
  }

  function handleMouseMoveWindow(e: MouseEvent) {
    const movePointX = Math.round((moveStartPointX.current - e.clientX) / imageScale);
    const movePointY = Math.round((moveStartPointY.current - e.clientY) / imageScale);

    // 움직인 거리가 아주 작은 값일 경우 click miss 로 판단
    if (Math.abs(movePointX) < MIN_MOVE_DISTANCE && Math.abs(movePointY) < MIN_MOVE_DISTANCE) {
      return;
    }

    // TODO 이미지가 맵 영역 끝에 도달하면 더 이상 이동되면 안된다.
    // 추가 작업 필요

    finalMovePointX.current = prevImagePointX.current - movePointX;
    finalMovePointY.current = prevImagePointY.current - movePointY;

    setImageMovePointX(finalMovePointX.current);
    setImageMovePointY(finalMovePointY.current);
  }

  function handleMouseUpWindow(e: MouseEvent) {
    moveStartPointX.current = 0;
    moveStartPointY.current = 0;
    prevImagePointX.current = finalMovePointX.current;
    prevImagePointY.current = finalMovePointY.current;
    finalMovePointX.current = 0;
    finalMovePointY.current = 0;

    // 관련된 이벤트를 제거해야 한다.
    window.removeEventListener('mousemove', handleMouseMoveWindow);
    window.removeEventListener('mouseup', handleMouseUpWindow);
  }



  // TODO 좌표 기능


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
          onMouseDown={handleMouseDownMapViewer}
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
                transform: `scale(${imageScale}) translate(${imageMovePointX}px, ${imageMovePointY}px)`,
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: '8px',
          marginBottom: '16px',
          display: 'flex',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box>현재 이미지 scale : { imageScale }</Box>
          <Box>이미지 가로 : { props.imageWidth }px</Box>
          <Box>이미지 세로 : { props.imageHeight }px</Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box>imageMovePointX : { imageMovePointX }px</Box>
          <Box>imageMovePointY : { imageMovePointY }px</Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          좌표 시스템
        </Box>
      </Box>
    </>
  );
}