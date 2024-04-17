import React, { useState, useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Box } from '@mui/material';

import { utils } from '@/libs';
import useMapZoom, { WheelCoord } from '@/hooks/useMapZoom';
import useMapMovement from '@/hooks/useMapMovement';
import { Map, Item, MapContainer } from './types';

import MapTestImage from '@/assets/images/map-test-img.jpg';
import MapTest1 from '@/assets/images/map-test1.jpg';
import MapTest2 from '@/assets/images/map-test2.jpg';
import MapTest3 from '@/assets/images/map-test3.jpg';

export default function MapViewer(
  props: {
    map: Map;
    items: Item[];
    mapContainer: MapContainer;
  }
) {
  const refMapViewer = useRef<HTMLDivElement | null>(null);

  const { handleWheelMap, initImageSize, imageSize, wheelCoord } = useMapZoom({
    originImageWidth: props.map.width,
    originImageHeigth: props.map.height,
    containerWidth: props.mapContainer.width,
    containerHeight: props.mapContainer.height
  });
  const { handleMouseDownMap, movementCoord, updateImageMovementCoord } = useMapMovement(wheelCoord);

  useEffect(() => {
    if (initImageSize === null) return;
    setupImageAlignCenter(initImageSize.width, initImageSize.height);
  }, [initImageSize]);

  useEffect(() => {
    console.log('wheelCoord 변경 테스트', wheelCoord);
    if (wheelCoord === null) return;
    setupImageMovementByWheelCoord(wheelCoord);
  }, [wheelCoord]);

  function setupImageAlignCenter(imageWidth: number, imageHeight: number) {
    const centerX = utils.convertNumberWithDecimal((props.mapContainer.width - imageWidth) / 2, 2);
    const centerY = utils.convertNumberWithDecimal((props.mapContainer.height - imageHeight) / 2, 2);
    updateImageMovementCoord(centerX, centerY);
  }

  function setupImageMovementByWheelCoord(wheelCoord: WheelCoord) {
    const mouseX = wheelCoord.x - props.mapContainer.offsetLeft;
    const mouseY = wheelCoord.y - props.mapContainer.offsetTop;

    const testNewX = (-movementCoord.x + mouseX) * (wheelCoord.newScale / wheelCoord.oldScale) - mouseX;
    const testNewY = (-movementCoord.y + mouseY) * (wheelCoord.newScale / wheelCoord.oldScale) - mouseY;

    updateImageMovementCoord(-testNewX, -testNewY);
  }

  function handleMouseMoveImage(e: React.MouseEvent, curScale: number) {
    const x = e.clientX - props.mapContainer.offsetLeft;
    const y = e.clientY - props.mapContainer.offsetTop;

    // movementCoord 값의 소수점을 버리는 이유는
    // e.clientX 와 offsetLeft는 정수지만 movementCoord값은 소수점이 포함이 됨
    // mouseX 계산식에서 최소값은 0이지만 해당 소수점이 있기때문에 음수가 나오는 경우가 생김
    // 음수는 해당 좌표 정의상 존재 할 수 없음
    const mouseX = x - Math.floor(movementCoord.x);
    const mouseY = y - Math.floor(movementCoord.y);

    const resultX = utils.convertNumberWithDecimal(mouseX / curScale, 2);
    const resultY = utils.convertNumberWithDecimal(mouseY / curScale, 2);

    setMapCoord({
      x: resultX,
      y: resultY
    });
  }

  // -------- Test용
  const [mapCoord, setMapCoord] = useState({ x: 0, y: 0 });
  const [markerCoord, setMarkerCoord] = useState<{ x: number, y: number } | null>(null);

  return (
    <>
      <Box
        ref={refMapViewer}
        onWheel={handleWheelMap}
        onMouseDown={handleMouseDownMap}
        // onMouseMove={handleMouseMoveMap}
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        { imageSize !== null &&
          <MapImage
            imageUrl={props.map.imageUrl}
            width={imageSize.width}
            height={imageSize.height}
            scale={imageSize.scale}
            movementCoord={movementCoord}
            // imageMovementCoord={imageMovementCoord}
            handleMouseMoveImage={(e) => handleMouseMoveImage(e, imageSize.scale)}
            // onClickImage={testMarkUp}
            // markerCoord={markerCoord}
            items={props.items}
          />
        }
      </Box>

      {/* 개발 참고 영역 */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 60,
          left: 180,
          width: '100%',
          maxWidth: '1000px',
          display: 'flex',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Box>원본 이미지 가로 : { props.map.width }px</Box>
          <Box>원본 이미지 세로 : { props.map.height }px</Box>
          { imageSize !== null &&
            <>
              <Box>현재 배율 : { imageSize.scale }</Box>
              <Box>현재 이미지 가로 : { imageSize.width }px</Box>
              <Box>현재 이미지 세로 : { imageSize.height }px</Box>
            </>
          }
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box>이미지 이동 X : { movementCoord.x }px</Box>
          <Box>이미지 이동 Y : { movementCoord.y }px</Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box>이미지 마우스 좌표 X : { mapCoord.x }px</Box>
          <Box>이미지 마우스 좌표 Y : { mapCoord.y }px</Box>
          {/* <Box>마커 X : { markerCoord !== null ? `${markerCoord.x}px` : 'null' }</Box>
          <Box>마커 Y : { markerCoord !== null ? `${markerCoord.y}px` : 'null' }</Box> */}
        </Box>
      </Box>
    </>
  );
}

function MapImage(
  props: {
    imageUrl: StaticImageData;
    width: number;
    height: number;
    scale: number;
    movementCoord: { x: number; y: number };
    handleMouseMoveImage: (e: React.MouseEvent) => void;
    // onClickImage: (e: React.MouseEvent) => void;
    // markerCoord: { x: number, y: number } | null;
    items: Item[];
  }
) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: props.width,
        height: props.height,
        transformOrigin: '0 0',
        transform: `translate(${props.movementCoord.x}px, ${props.movementCoord.y}px)`,
        background: 'red'
      }}
    >
      <Image
        // onClick={props.onClickImage}
        onMouseMove={props.handleMouseMoveImage}
        src={props.imageUrl}
        alt='map-image'
        draggable={false}
        priority={true}
        // quality={100}
        style={{
          display: 'block',
          transformOrigin: '0 0',
          transform: `scale(${props.scale})`,
        }}
      />

      { props.items.map(item =>
        <Box
          key={item.id}
          sx={{
            position: 'absolute',
            top: `calc(${item.coord.y * props.scale}px - 4px)`,
            left: `calc(${item.coord.x * props.scale}px - 4px)`,
            background: 'red',
            borderRadius: '50%',
            width: '8px',
            height: '8px'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              left: 0,
              width: '80px',
              fontSize: '10px',
              fontWeight: 700,
              color: 'red'
            }}
          >
            { item.name }
          </Box>
        </Box>
      )}
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
  const refMapViewer = useRef<HTMLElement | null>(null);

  // Zoom 기능 - scale, wheel 관련
  const IMAGE_SCALE_UNIT = 0.5;
  const MIN_IMAGE_SCALE = 1;

  const refMaxImageScale = useRef<number>(4.2);
  const refImageScale = useRef<number>(MIN_IMAGE_SCALE);

  const [minScaleImageSize, setMinScaleImageSize] = useState<{ width: number, height: number } | null>(null);
  const [imageScale, setImageScale] = useState<number>(MIN_IMAGE_SCALE);

  // Move 기능 - mouseDown, mouseMove, mouseUp 관련
  const MIN_MOVE_DISTANCE = 4;

  const refMoveStartPointX = useRef<number>(0);
  const refMoveStartPointY = useRef<number>(0);
  const refFinalMovePointX = useRef<number>(0);
  const refFinalMovePointY = useRef<number>(0);
  const refImageMovePointX = useRef<number>(0);
  const refImageMovePointY = useRef<number>(0);

  const [imageMovePointX, setImageMovePointX] = useState<number>(0);
  const [imageMovePointY, setImageMovePointY] = useState<number>(0);

  // 좌표 기능
  const [coordinateX, setCoordinateX] = useState<number>(0);
  const [coordinateY, setCoordinateY] = useState<number>(0);


  useEffect(() => {
    const mapViewerElm = refMapViewer.current;
    if (mapViewerElm === null) return;

    setupMinScaleImageSizeAndAlignCenter(mapViewerElm);
    setupMaxImageScale(mapViewerElm);

    // TODO onWheel로는 처리 안됨(preventDefault가 안먹힘) / 왜 이 형식으로만 되는거지??
    mapViewerElm.addEventListener('wheel', handleWheelMapViewer);

    return () => {
      mapViewerElm.removeEventListener('wheel', handleWheelMapViewer);
    }
  }, []);

  function setupMinScaleImageSizeAndAlignCenter(viewerElm: HTMLElement) {
    const originImageWidth = props.imageWidth;
    const originImageHeight = props.imageHeight;
    const viewerWidth = viewerElm.clientWidth;
    const viewerHeight = viewerElm.clientHeight;

    const largestRatio = Math.max(originImageWidth / viewerWidth, originImageHeight / viewerHeight);

  // TODO test용
    // const minScaleImageWidth = utils.convertNumberWithDecimal(originImageWidth / largestRatio, 2);
    const minScaleImageWidth = 400;
    const minScaleImageHeight = utils.convertNumberWithDecimal(originImageHeight / largestRatio, 2);

    setMinScaleImageSize({
      width: minScaleImageWidth,
      height: minScaleImageHeight,
    });

    refImageMovePointX.current = (viewerWidth - minScaleImageWidth) / 2;
    refImageMovePointY.current = (viewerHeight - minScaleImageHeight) / 2;
    setImageMovePointX(refImageMovePointX.current);
    setImageMovePointY(refImageMovePointY.current);
  }

  function setupMaxImageScale(viewerElm: HTMLElement) {
    const originImageWidth = props.imageWidth;
    const originImageHeight = props.imageHeight;

    const largestRatio = Math.max(originImageWidth / viewerElm.clientWidth, originImageHeight / viewerElm.clientHeight);
    refMaxImageScale.current = utils.convertNumberWithDecimal(largestRatio, 1);
  }

  // TODO 추가로 생각해야할 이슈
  // 첫 Scale 변경 시 느림 - 원인 파악 필요
  function handleWheelMapViewer(e: WheelEvent) {
    e.preventDefault();

    const curImageScale = refImageScale.current;

    // TODO 소수점 계산시 오차 발생
    if (e.deltaY < 0 && curImageScale < refMaxImageScale.current) {
      refImageScale.current = utils.convertNumberWithDecimal(curImageScale + IMAGE_SCALE_UNIT, 2);
    } else if (e.deltaY > 0 && curImageScale > MIN_IMAGE_SCALE) {
      refImageScale.current = utils.convertNumberWithDecimal(curImageScale - IMAGE_SCALE_UNIT, 2);
    } else {
      return;
    }

    setImageScale(refImageScale.current);

    const viewerElm = refMapViewer.current;
    if (viewerElm === null) {
      return;
    }


    const halfX = viewerElm.clientWidth / 2;
    const halfY = viewerElm.clientHeight / 2;

    const mouseX = e.clientX - (refMapViewer.current?.offsetLeft || 0);
    const mouseY = e.clientY - (refMapViewer.current?.offsetTop || 0);

    const x = mouseX - halfX;
    const y = mouseY - halfY;

    const perX = (x / halfX);
    const perY = (y / halfY);

    const testX = (halfX * perX) / 2;
    const testY = (halfY * perY) / 2;

    const value = 100;

    const resultX = 100 + testX;
    const resultY = 100 + testY;


    refImageMovePointX.current = refImageMovePointX.current - resultX;
    refImageMovePointY.current = refImageMovePointY.current - resultY;

    // 일단 임시
    setImageMovePointX(refImageMovePointX.current);
    setImageMovePointY(refImageMovePointY.current);
    // setImageMovePointY(refImageMovePointY.current - (-y * 2));
  }






  // TODO 이동 관련해서 생각해 봐야할 이슈
  // addEventListener, removeEventListener 적절하게 작동하는지 확인 필요 - 필요한만큼(1개겠지) 추가되고 삭제된다.
  // mouseMove는 아주 많은 이벤트를 발생 시킨다. - 성능 이슈 발생하려나?? + 이를 해결하기 위해 Throttling을 사용한다면... 매끄럽게 보일까?
  function handleMouseDownMapViewer(e: React.MouseEvent) {
    refMoveStartPointX.current = e.clientX;
    refMoveStartPointY.current = e.clientY;

    // 맵뷰어에서 mouseMove, mouseUp 위치가 맵뷰어를 넘어갈 수 있기 때문에 window에 이벤트를 건다.
    window.addEventListener('mousemove', handleMouseMoveWindow);
    window.addEventListener('mouseup', handleMouseUpWindow);
  }

  function handleMouseMoveWindow(e: MouseEvent) {
    const movePointX = Math.round((refMoveStartPointX.current - e.clientX) / imageScale);
    const movePointY = Math.round((refMoveStartPointY.current - e.clientY) / imageScale);

    // 움직인 거리가 아주 작은 값일 경우 click miss 로 판단
    if (Math.abs(movePointX) < MIN_MOVE_DISTANCE && Math.abs(movePointY) < MIN_MOVE_DISTANCE) {
      return;
    }

    // TODO 이미지가 맵 영역 끝에 도달하면 더 이상 이동되면 안된다.
    // 추가 작업 필요

    refFinalMovePointX.current = utils.convertNumberWithDecimal(refImageMovePointX.current - movePointX, 2);
    refFinalMovePointY.current = utils.convertNumberWithDecimal(refImageMovePointY.current - movePointY, 2);

    setImageMovePointX(refFinalMovePointX.current);
    setImageMovePointY(refFinalMovePointY.current);
  }

  function handleMouseUpWindow(e: MouseEvent) {
    refMoveStartPointX.current = 0;
    refMoveStartPointY.current = 0;
    refImageMovePointX.current = refFinalMovePointX.current;
    refImageMovePointY.current = refFinalMovePointY.current;
    // refFinalMovePointX.current = 0;
    // refFinalMovePointY.current = 0;

    // 관련된 이벤트를 제거해야 한다.
    window.removeEventListener('mousemove', handleMouseMoveWindow);
    window.removeEventListener('mouseup', handleMouseUpWindow);
  }


  // TODO 좌표 기능
  function handleMouseMoveMapImage(e: React.MouseEvent) {
    const baseX = e.clientX - (refMapViewer.current?.offsetLeft || 0);
    const baseY = e.clientY - (refMapViewer.current?.offsetTop || 0);

    const coordX = baseX - refImageMovePointX.current;
    const coordY = baseY - refImageMovePointY.current;

    // 스케일 - 3일때
    // X - 539
    // Y - 251

    // 454 - 539 == 대략 85차이

    // const test = 454

    setCoordinateX(baseX);
    setCoordinateY(baseY);
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '404px',
          border: '2px solid red',
        }}
      >
        <Box
          ref={refMapViewer}
          onMouseDown={handleMouseDownMapViewer}
          onMouseMove={handleMouseMoveMapImage}
          sx={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          { minScaleImageSize !== null &&
            <Image
              // onMouseMove={handleMouseMoveMapImage}
              src={props.staticImageData}
              alt='map-image'
              draggable={false}
              priority={true}
              // quality={100}

              style={{
                display: 'block',
                width: minScaleImageSize.width,
                height: minScaleImageSize.height,
                // objectFit: 'contain',
                transformOrigin: '0 0',
                transform: `translate(${imageMovePointX}px, ${imageMovePointY}px) scale(${imageScale})`,
              }}
            />
          }
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
          <Box>coordinateX : { coordinateX }</Box>
          <Box>coordinateY : { coordinateY }</Box>
          <Box>테스트 좌표 : 고리 오두막</Box>
          <Box>테스트 좌표 X: 454 언저리</Box>
          <Box>테스트 좌표 Y: 216 언저리</Box>
        </Box>
      </Box>
    </>
  );
}