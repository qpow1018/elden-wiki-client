import { useState, useRef, useEffect } from 'react';

import { utils } from '@/libs';

type ImageSize = {
  scale: number;
  width: number;
  height: number;
}

export default function useMapZoom(params: {
  originImageWidth: number;
  originImageHeigth: number;
  containerWidth: number;
  containerHeight: number;
}) {
  const { originImageWidth, originImageHeigth, containerWidth, containerHeight } = params;

  const SCALE_UNIT = 0.05;
  const MAX_SCALE = 1;

  const refImageSizeMap = useRef<Map<number, ImageSize> | null>(null);
  const refMinScale = useRef<number>(0);
  const refCurScale = useRef<number>(MAX_SCALE);
  const refWheelCoord = useRef<{ x: number, y: number, isScaleUp: boolean } | null>(null);

  const [imageSize, setImageSize] = useState<ImageSize | null>(null);
  const [wheelCoord, setWheelCoord] = useState<{ x: number, y: number, isScaleUp: boolean } | null>(null);

  // TODO 함수 naming 변경, useEffect deps 체크
  useEffect(() => {
    init();
  }, []);

  // 초기 이미지 사이즈에 대한 정의
  function init() {
    const imageSizeMap = new Map<number, ImageSize>();

    const scale = MAX_SCALE;
    const imageWidth = originImageWidth;
    const imageHeight = originImageHeigth;

    for (let i = 0; i < (scale / SCALE_UNIT) - 1; i++) {
      const curScale = utils.convertNumberWithDecimal(scale - (SCALE_UNIT * i), 2);
      const curImageWidth = utils.convertNumberWithDecimal(imageWidth * curScale, 1);
      const curImageHeight = utils.convertNumberWithDecimal(imageHeight * curScale, 1);

      imageSizeMap.set(curScale, {
        scale: curScale,
        width: curImageWidth,
        height: curImageHeight,
      });

      if (curImageWidth <= containerWidth && curImageHeight <= containerHeight) {
        break;
      }
    }

    refImageSizeMap.current = imageSizeMap;

    const minImageSize = Array.from(imageSizeMap)[imageSizeMap.size-1][1];
    refMinScale.current = minImageSize.scale;
    refCurScale.current = minImageSize.scale;
    setImageSize(minImageSize);
  }

  function getImageSizeByScale(scale: number) {
    if (refImageSizeMap.current === null) {
      return null;
    }

    return refImageSizeMap.current.get(scale);
  }

  function handleWheelMap(e: React.WheelEvent) {
    const isScaleUp = e.deltaY < 0 ? true : false;
    const curScale = refCurScale.current;

    // TODO 소수점 계산시 오차 발생
    if (isScaleUp === true && curScale < MAX_SCALE) {
      refCurScale.current = utils.convertNumberWithDecimal(curScale + SCALE_UNIT, 2);
    } else if (isScaleUp === false && curScale > refMinScale.current) {
      refCurScale.current = utils.convertNumberWithDecimal(curScale - SCALE_UNIT, 2);
    } else {
      return;
    }

    const imageSize = getImageSizeByScale(refCurScale.current) || null;
    setImageSize(imageSize);

    refWheelCoord.current = { x: e.clientX, y: e.clientY, isScaleUp }
    setWheelCoord(refWheelCoord.current);
  }

  return {
    handleWheelMap,
    imageSize,
    wheelCoord,
  };
}