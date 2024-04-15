import { useState, useRef, useEffect } from 'react';

import { utils } from '@/libs';

export default function useMapZoom(minScale: number, maxScale: number) {
  const IMAGE_SCALE_UNIT = 0.5;

  const refCurImageScale = useRef<number>(minScale);
  const [curImageScale, setCurImageScale] = useState<number>(minScale);

  const refWheelCoord = useRef<{ x: number, y: number, isScaleUp: boolean } | null>(null);
  const [wheelCoord, setWheelCoord] = useState<{ x: number, y: number, isScaleUp: boolean } | null>(null);

  function handleWheelMap(e: React.WheelEvent) {
    const curImageScale = refCurImageScale.current;
    let isScaleUp = true;

    // TODO 소수점 계산시 오차 발생
    if (e.deltaY < 0 && curImageScale < maxScale) {
      refCurImageScale.current = utils.convertNumberWithDecimal(curImageScale + IMAGE_SCALE_UNIT, 2);
    } else if (e.deltaY > 0 && curImageScale > minScale) {
      refCurImageScale.current = utils.convertNumberWithDecimal(curImageScale - IMAGE_SCALE_UNIT, 2);
      isScaleUp = false;
    } else {
      return;
    }

    refWheelCoord.current = { x: e.clientX, y: e.clientY, isScaleUp }
    setWheelCoord(refWheelCoord.current);
    setCurImageScale(refCurImageScale.current);
  }

  return {
    handleWheelMap,
    curImageScale,
    wheelCoord,
  };
}