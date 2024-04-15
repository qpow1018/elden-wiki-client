import { useState, useRef, useEffect } from 'react';

import { utils } from '@/libs';

export default function useMapMovement(wheelCoord: { x: number; y: number } | null) {
  const MIN_MOVE_DISTANCE = 4;

  const refMoveStartPointX = useRef<number>(0);
  const refMoveStartPointY = useRef<number>(0);
  const refMovePointX = useRef<number>(0);
  const refMovePointY = useRef<number>(0);
  const refLastMovePointX = useRef<number>(0);
  const refLastMovePointY = useRef<number>(0);

  const [imageMovementCoord, setImageMovementCoord] = useState<{ x: number, y: number }>({ x: 0, y: 0 });


  function updateImageMovementCoord(x: number, y: number) {
    refLastMovePointX.current = x;
    refLastMovePointY.current = y;

    setImageMovementCoord({
      x: refLastMovePointX.current,
      y: refLastMovePointY.current
    });
  }

  // TODO 이동 관련해서 생각해 봐야할 이슈
  // addEventListener, removeEventListener 적절하게 작동하는지 확인 필요 - 필요한만큼(1개겠지) 추가되고 삭제된다.
  // mouseMove는 아주 많은 이벤트를 발생 시킨다. - 성능 이슈 발생하려나?? + 이를 해결하기 위해 Throttling을 사용한다면... 매끄럽게 보일까?
  function handleMouseDownMap(e: React.MouseEvent) {
    console.log('마우스 다운');

    refMoveStartPointX.current = e.clientX;
    refMoveStartPointY.current = e.clientY;

    // 맵에서 mouseMove, mouseUp 위치가 맵크기를 넘어갈 수 있기 때문에 window에 이벤트를 건다.
    window.addEventListener('mousemove', handleMouseMoveWindow);
    window.addEventListener('mouseup', handleMouseUpWindow);
  }

  function handleMouseMoveWindow(e: MouseEvent) {
    console.log('마우스 다운 후 이동');

    const movePointX = refMoveStartPointX.current - e.clientX;
    const movePointY = refMoveStartPointY.current - e.clientY;

    // // 움직인 거리가 아주 작은 값일 경우 click miss 로 판단
    if (Math.abs(movePointX) < MIN_MOVE_DISTANCE && Math.abs(movePointY) < MIN_MOVE_DISTANCE) {
      return;
    }

    // TODO 이미지가 맵 영역 끝에 도달하면 더 이상 이동되면 안된다.
    // 추가 작업 필요

    refMovePointX.current = refLastMovePointX.current - movePointX;
    refMovePointY.current = refLastMovePointY.current - movePointY;

    setImageMovementCoord({
      x: refMovePointX.current,
      y: refMovePointY.current
    });
  }

  function handleMouseUpWindow(e: MouseEvent) {
    console.log('마우스 다운 후 업');

    refMoveStartPointX.current = 0;
    refMoveStartPointY.current = 0;
    refLastMovePointX.current = refMovePointX.current;
    refLastMovePointY.current = refMovePointY.current;

    // 관련된 이벤트를 제거해야 한다.
    window.removeEventListener('mousemove', handleMouseMoveWindow);
    window.removeEventListener('mouseup', handleMouseUpWindow);
  }

  return {
    handleMouseDownMap,
    imageMovementCoord,
    updateImageMovementCoord,
  };
}