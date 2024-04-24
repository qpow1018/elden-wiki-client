import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { ResCheckListDetailItem } from '@/tempDb/checkList/checkListDB';

import Text from '@/components/Base/Text';
import TodoItem from './TodoItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function DetailItemByArea(
  props: {
    areaId: number;
    name: string;
    todoList: ResCheckListDetailItem[];
    isOpen: boolean;
  }
) {
  // TODO props.isOpen을 쓰지말고 skip을 제외한 모든 todo가 완료되어 있으면 초기값 닫힘
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // TODO 갯수 체크 필요

  // TODO Skip 모드가 필요하겠다

  return (
    <Box
      sx={{
        borderBottom: `4px solid ${theme.color.border.dark}`,
        '&:last-of-type': {
          borderBottom: 'none'
        }
      }}
    >
      <ItemHeader
        isOpen={isOpen}
        onClickHeader={() => setIsOpen(prev => !prev)}
        areaName={props.name}
      />

      { isOpen === true && (
        props.todoList.map(item =>
          <TodoItem
            key={item.todoId}
            todoId={item.todoId}
            isBoss={item.isBoss}
            locationName={item.locationName}
            targetName={item.targetName}
            rune={item.rune}
            bossRewards={item.bossRewards}
            additionalInfo={item.additionalInfo}
            isComplete={item.isComplete}
            isSkip={item.isSkip}
          />
        )
      )}
    </Box>
  );
}

function ItemHeader(
  props: {
    isOpen: boolean;
    onClickHeader: () => void;
    areaName: string;
  }
) {
  return (
    <Box
      onClick={props.onClickHeader}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        padding: '0 16px',
        cursor: 'pointer'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Text
          sx={{
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          { props.areaName }
        </Text>

        <Text
          sx={{
            fontSize: '12px',
            fontWeight: 500,
            marginLeft: '4px'
          }}
        >
          (0/22) todo
        </Text>
      </Box>

      <KeyboardArrowDownIcon
        sx={{
          fontSize: '18px',
          transform: `rotate(${props.isOpen === true ? 180 : 0}deg)`
        }}
      />
    </Box>
  );
}