import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { ResCheckListDetailAreaItem } from '@/tempDb/checkList/checkListDB';

import Text from '@/components/Base/Text';
import TodoItem from './TodoItem';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function DetailItemByArea(
  props: {
    appendRefAreaElms: (elm: HTMLElement) => void;
    areaId: number;
    name: string;
    todoList: ResCheckListDetailAreaItem[];
    getAllTodoCount: () => number;
    getCompletedTodoCount: () => number;
    updateTodoItemCompleteFromStorage: (todoId: number, isComplete: boolean) => void;
  }
) {
  const [allTodoCount, setAllTodoCount] = useState<number>(() => props.getAllTodoCount());
  const [completedTodoCount, setCompletedTodoCount] = useState<number>(() => props.getCompletedTodoCount());
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    const _allTodoCount = props.getAllTodoCount();
    const _completedTodoCount = props.getCompletedTodoCount();
    return _allTodoCount === _completedTodoCount ? false : true;
  });

  function handleClickTodoItemCheckButton(todoId: number, isComplete: boolean) {
    setCompletedTodoCount(prev => isComplete === true ? prev + 1 : prev - 1);
    props.updateTodoItemCompleteFromStorage(todoId, isComplete);
  }

  return (
    <Box
      ref={(elm: HTMLElement) => props.appendRefAreaElms(elm)}
      sx={{
        borderBottom: `2px solid ${theme.color.border.dark}`,
        '&:last-of-type': {
          borderBottom: 'none'
        }
      }}
    >
      <ItemHeader
        isOpen={isOpen}
        onClickHeader={() => setIsOpen(prev => !prev)}
        areaName={props.name}
        allTodoCount={allTodoCount}
        completedTodoCount={completedTodoCount}
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
            onClickTodoItemCheckButton={(isComplete) => handleClickTodoItemCheckButton(item.todoId, isComplete)}
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
    allTodoCount: number;
    completedTodoCount: number;
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
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Text
          sx={{
            marginRight: '12px',
            width: '64px',
            textAlign: 'center',
            fontSize: '11px',
            fontWeight: 500,
            color: props.completedTodoCount !== props.allTodoCount ? theme.color.text.dark : theme.color.text.primary,
          }}
        >
          { props.completedTodoCount } / { props.allTodoCount }
        </Text>
        <Text
          sx={{
            fontSize: '13px',
            fontWeight: 500,
          }}
        >
          { props.areaName }
        </Text>
      </Box>

      <KeyboardArrowDownIcon
        sx={{
          marginRight: '18px',
          fontSize: '18px',
          transform: `rotate(${props.isOpen === true ? 180 : 0}deg)`,
        }}
      />
    </Box>
  );
}