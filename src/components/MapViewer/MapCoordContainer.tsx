import React, { useState } from 'react';
import { Box } from '@mui/material';

import { utils } from '@/libs';
import { TypeCoord } from './types';

export default function MapCoordContainer(
  props: {
    mapViewerTop: number;
    mapViewerLeft: number;
    scale: number;
    movementX: number;
    movementY: number;
    isMoving: boolean;
  }
) {
  const [clickPointCoord, setClickPointCoord] = useState<TypeCoord | null>(null);

  function createClickPointCoordAndCoordCopy(e: React.MouseEvent) {
    if (props.isMoving === true) return;

    const x = e.clientX - props.mapViewerLeft;
    const y = e.clientY - props.mapViewerTop;

    // movementCoord 값의 소수점을 버리는 이유는
    // e.clientX 와 offsetLeft는 정수지만 movementCoord값은 소수점이 포함이 됨
    // mouseX 계산식에서 최소값은 0이지만 해당 소수점이 있기때문에 음수가 나오는 경우가 생김
    // 음수는 해당 좌표 정의상 존재 할 수 없음
    const mouseX = x - Math.floor(props.movementX);
    const mouseY = y - Math.floor(props.movementY);

    const resultX = utils.convertNumberWithDecimal(mouseX / props.scale, 2);
    const resultY = utils.convertNumberWithDecimal(mouseY / props.scale, 2);

    console.log(resultX, resultY);

    setClickPointCoord({
      x: resultX,
      y: resultY
    });

    copyClipBoard('카피 테스트');
  }

  function copyClipBoard(text: string) {
    navigator.clipboard.writeText(text);
  }

  function removeClickPointCoord(e: React.MouseEvent) {
    e.stopPropagation();
    setClickPointCoord(null);
  }

  return (
    <Box
      onClick={createClickPointCoordAndCoordCopy}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    >
      { clickPointCoord !== null &&
        <Box
          onClick={removeClickPointCoord}
          sx={{
            position: 'absolute',
            top: `calc(${clickPointCoord.y * props.scale}px - 6px)`,
            left: `calc(${clickPointCoord.x * props.scale}px - 6px)`,
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: 'red'
          }}
        />
      }
    </Box>
  );
}