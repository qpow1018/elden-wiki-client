import { useRef } from 'react';
import { Box } from '@mui/material';

import useWindowSize from '@/hooks/useWindowSize';
import { utils } from '@/libs';
import { TypeMovementCoord } from './types';

export default function MovementComponent(
  props: {
    movementCoord: TypeMovementCoord;
    onChangeMovementCoord: (value: TypeMovementCoord) => void;
    children?: React.ReactNode;
  }
) {
  const { isDesktop } = useWindowSize();

  const { movementCoord, onChangeMovementCoord } = props;

  const MIN_MOVE_DISTANCE = 4;

  const refMoveStartPointX = useRef<number>(0);
  const refMoveStartPointY = useRef<number>(0);
  const refMovePointX = useRef<number>(0);
  const refMovePointY = useRef<number>(0);
  const refLastMovePointX = useRef<number>(0);
  const refLastMovePointY = useRef<number>(0);

  function setupEventInitInfo(clientX: number, clientY: number) {
    refMoveStartPointX.current = clientX;
    refMoveStartPointY.current = clientY;
    refLastMovePointX.current = movementCoord.x;
    refLastMovePointY.current = movementCoord.y;
  }

  function updateMovementCoord(clientX: number, clientY: number) {
    const movePointX = refMoveStartPointX.current - clientX;
    const movePointY = refMoveStartPointY.current - clientY;

    // 움직인 거리가 아주 작은 값일 경우 click miss 로 판단
    if (Math.abs(movePointX) < MIN_MOVE_DISTANCE && Math.abs(movePointY) < MIN_MOVE_DISTANCE) {
      return;
    }

    // TODO 이미지가 맵 영역 끝에 도달하면 더 이상 이동되면 안된다.
    // 추가 작업 필요

    refMovePointX.current = utils.convertNumberWithDecimal(refLastMovePointX.current - movePointX, 2);
    refMovePointY.current = utils.convertNumberWithDecimal(refLastMovePointY.current - movePointY, 2);

    onChangeMovementCoord({
      x: refMovePointX.current,
      y: refMovePointY.current
    });
  }

  function clearMovePoints() {
    refMoveStartPointX.current = 0;
    refMoveStartPointY.current = 0;
    refMovePointX.current = 0;
    refMovePointY.current = 0;
    refLastMovePointX.current = 0;
    refLastMovePointY.current = 0;
  }

  // TODO 이동 관련해서 생각해 봐야할 이슈
  // addEventListener, removeEventListener 적절하게 작동하는지 확인 필요 - 필요한만큼(1개겠지) 추가되고 삭제된다.
  // mouseMove는 아주 많은 이벤트를 발생 시킨다. - 성능 이슈 발생하려나?? + 이를 해결하기 위해 Throttling을 사용한다면... 매끄럽게 보일까?
  function handleMouseDownMovementContainer(e: React.MouseEvent) {
    console.log('mouseDown');
    setupEventInitInfo(e.clientX, e.clientY);

    // 맵에서 해당 이벤트 위치가 맵크기를 넘어갈 수 있기 때문에 window에 이벤트를 건다.
    window.addEventListener('mousemove', handleMouseMoveWindow);
    window.addEventListener('mouseup', handleMouseUpWindow);
  }

  function handleMouseMoveWindow(e: MouseEvent) {
    updateMovementCoord(e.clientX, e.clientY);
  }

  function handleMouseUpWindow(e: MouseEvent) {
    clearMovePoints();

    // 관련된 이벤트를 제거해야 한다.
    window.removeEventListener('mousemove', handleMouseMoveWindow);
    window.removeEventListener('mouseup', handleMouseUpWindow);
  }



  function handleTouchStartMoveContainer(e: React.TouchEvent) {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];

    setupEventInitInfo(touch.clientX, touch.clientY);

    // 맵에서 해당 이벤트 위치가 맵크기를 넘어갈 수 있기 때문에 window에 이벤트를 건다.
    window.addEventListener('touchmove', handleTouchMoveMoveContainer);
    window.addEventListener('touchend', handleTouchEndMoveContainer);
  }

  function handleTouchMoveMoveContainer(e: TouchEvent) {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];

    updateMovementCoord(touch.clientX, touch.clientY);
  }

  function handleTouchEndMoveContainer(e: TouchEvent) {
    clearMovePoints();

    // 관련된 이벤트를 제거해야 한다.
    window.removeEventListener('touchmove', handleTouchMoveMoveContainer);
    window.removeEventListener('touchend', handleTouchEndMoveContainer);
  }

  return (
    <>
      { isDesktop === false ? (
        <Box
          onTouchStart={handleTouchStartMoveContainer}
          sx={{
            width: '100%',
            height: '100%'
          }}
        >
          { props.children }
        </Box>
      ) : (
        <Box
          onMouseDown={handleMouseDownMovementContainer}
          sx={{
            width: '100%',
            height: '100%'
          }}
        >
          { props.children }
        </Box>
      )}
    </>
  );
}