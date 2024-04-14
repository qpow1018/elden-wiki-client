import { useState, useRef, useEffect } from 'react';

import { utils } from '@/libs';

// MapViewer Container 크기에 contain 하게 보일 크기를 scale 1로 정의

export default function useMapZoom(data: {
  originImageWidth: number;
  originImageHeight: number;
  containerWidth: number;
  containerHeight: number;
}) {
  const { originImageWidth, originImageHeight, containerWidth, containerHeight } = data;

  const MAP_SCALE_UNIT = 0.5;
  const MIN_MAP_SCALE = 1;
  const refMaxMapScale = useRef<number>(0);

  const refMapScale = useRef<number>(MIN_MAP_SCALE);
  const refInitMapWidth = useRef<number>(0);
  const refInitMapHeight = useRef<number>(0);
  const refMapWidth = useRef<number>(0);
  const refMapHeight = useRef<number>(0);

  const [mapSize, setMapSize] = useState<{ scale: number, width: number, height: number } | null>(null);

  useEffect(() => {
    setupInitMapSize(originImageWidth, originImageHeight, containerWidth, containerHeight);
    setupMaxImageScale(originImageWidth, originImageHeight, containerWidth, containerHeight);
  }, [originImageWidth, originImageHeight, containerWidth, containerHeight]);

  function setupInitMapSize(originImageWidth: number, originImageHeight: number, containerWidth: number, containerHeight: number) {
    const largestRatio = Math.max(originImageWidth / containerWidth, originImageHeight / containerHeight);

    const initMapWidth = utils.convertNumberWithDecimal(originImageWidth / largestRatio, 2);
    const initMapHeight = utils.convertNumberWithDecimal(originImageHeight / largestRatio, 2);

    refInitMapWidth.current = initMapWidth;
    refInitMapHeight.current = initMapHeight;
    refMapWidth.current = initMapWidth;
    refMapHeight.current = initMapHeight;

    setMapSize({
      scale: MIN_MAP_SCALE,
      width: initMapWidth,
      height: initMapHeight,
    });
  }

  // TODO 원본 크기 만큼인데 살짝 줄여도 될듯?? - 이건 실제 사용 후에 확인 해보자
  function setupMaxImageScale(originImageWidth: number, originImageHeight: number, containerWidth: number, containerHeight: number) {
    const largestRatio = Math.max(originImageWidth / containerWidth, originImageHeight / containerHeight);
    refMaxMapScale.current = utils.convertNumberWithDecimal(largestRatio, 1);
  }

  function handleWheelMap(e: React.WheelEvent) {
    const curMapScale = refMapScale.current;

    // TODO 소수점 계산시 오차 발생
    if (e.deltaY < 0 && curMapScale < refMaxMapScale.current) {
      refMapScale.current = utils.convertNumberWithDecimal(curMapScale + MAP_SCALE_UNIT, 2);
    } else if (e.deltaY > 0 && curMapScale > MIN_MAP_SCALE) {
      refMapScale.current = utils.convertNumberWithDecimal(curMapScale - MAP_SCALE_UNIT, 2);
    } else {
      return;
    }

    const newMapScale = refMapScale.current;
    refMapWidth.current = utils.convertNumberWithDecimal(refInitMapWidth.current * newMapScale, 2);
    refMapHeight.current = utils.convertNumberWithDecimal(refInitMapHeight.current * newMapScale, 2);

    setMapSize({
      scale: newMapScale,
      width: refMapWidth.current,
      height: refMapHeight.current
    });
  }

  return {
    handleWheelMap,
    mapSize,
  };
}