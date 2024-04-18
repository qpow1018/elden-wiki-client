import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

import { utils } from '@/libs';
import { TypeMapViewer, TypeMapImageSize, TypeZoomPoint, TypeMovementCoord } from './types';

export default function MovementComponent(
  props: {
    mapViewer: TypeMapViewer;
    imageSize: TypeMapImageSize;
    zoomPoint: TypeZoomPoint | null;
    movementCoord: TypeMovementCoord;
    onChangeMovementCoord: (value: TypeMovementCoord) => void;
    children?: React.ReactNode;
  }
) {
  const MIN_MOVE_DISTANCE = 4;

  const refMoveStartPointX = useRef<number>(0);
  const refMoveStartPointY = useRef<number>(0);
  const refMovePointX = useRef<number>(0);
  const refMovePointY = useRef<number>(0);
  const refLastMovePointX = useRef<number>(0);
  const refLastMovePointY = useRef<number>(0);

  // TODO Deps warning 해결 필요
  useEffect(() => {
    initImageAlignCenter();
  }, []);

  useEffect(() => {
    if (props.zoomPoint === null) return;
    setupMovementCoordByZoomPoint(props.zoomPoint);
  }, [props.zoomPoint]);

  function updateMovementCoord(x: number, y: number) {
    refLastMovePointX.current = x;
    refLastMovePointY.current = y;

    props.onChangeMovementCoord({
      x: refLastMovePointX.current,
      y: refLastMovePointY.current
    });
  }

  function initImageAlignCenter() {
    const conWidth = props.mapViewer.width;
    const conHeight = props.mapViewer.height;
    const imgWidth = props.imageSize.width;
    const imgHeight = props.imageSize.height;
    const centerX = utils.convertNumberWithDecimal((conWidth - imgWidth) / 2, 2);
    const centerY = utils.convertNumberWithDecimal((conHeight - imgHeight) / 2, 2);

    updateMovementCoord(centerX, centerY);
  }

  // TODO 깜빡거리는 이슈 체크
  function setupMovementCoordByZoomPoint(zoomPoint: TypeZoomPoint) {
    const mouseX = zoomPoint.x;
    const mouseY = zoomPoint.y;

    const testNewX = (-props.movementCoord.x + mouseX) * (zoomPoint.newScale / zoomPoint.oldScale) - mouseX;
    const testNewY = (-props.movementCoord.y + mouseY) * (zoomPoint.newScale / zoomPoint.oldScale) - mouseY;

    updateMovementCoord(-testNewX, -testNewY);
  }

  // TODO 이동 관련해서 생각해 봐야할 이슈
  // addEventListener, removeEventListener 적절하게 작동하는지 확인 필요 - 필요한만큼(1개겠지) 추가되고 삭제된다.
  // mouseMove는 아주 많은 이벤트를 발생 시킨다. - 성능 이슈 발생하려나?? + 이를 해결하기 위해 Throttling을 사용한다면... 매끄럽게 보일까?
  function handleMouseDownMovementContainer(e: React.MouseEvent) {
    refMoveStartPointX.current = e.clientX;
    refMoveStartPointY.current = e.clientY;

    // 맵에서 mouseMove, mouseUp 위치가 맵크기를 넘어갈 수 있기 때문에 window에 이벤트를 건다.
    window.addEventListener('mousemove', handleMouseMoveWindow);
    window.addEventListener('mouseup', handleMouseUpWindow);
  }

  function handleMouseMoveWindow(e: MouseEvent) {
    const movePointX = refMoveStartPointX.current - e.clientX;
    const movePointY = refMoveStartPointY.current - e.clientY;

    // // 움직인 거리가 아주 작은 값일 경우 click miss 로 판단
    if (Math.abs(movePointX) < MIN_MOVE_DISTANCE && Math.abs(movePointY) < MIN_MOVE_DISTANCE) {
      return;
    }

    // TODO 이미지가 맵 영역 끝에 도달하면 더 이상 이동되면 안된다.
    // 추가 작업 필요

    refMovePointX.current = utils.convertNumberWithDecimal(refLastMovePointX.current - movePointX, 2);
    refMovePointY.current = utils.convertNumberWithDecimal(refLastMovePointY.current - movePointY, 2);

    props.onChangeMovementCoord({
      x: refMovePointX.current,
      y: refMovePointY.current
    });
  }

  function handleMouseUpWindow(e: MouseEvent) {
    refMoveStartPointX.current = 0;
    refMoveStartPointY.current = 0;
    refLastMovePointX.current = refMovePointX.current;
    refLastMovePointY.current = refMovePointY.current;

    // 관련된 이벤트를 제거해야 한다.
    window.removeEventListener('mousemove', handleMouseMoveWindow);
    window.removeEventListener('mouseup', handleMouseUpWindow);
  }

  return (
    <Box
      onMouseDown={handleMouseDownMovementContainer}
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      { props.children }
    </Box>
  );
}