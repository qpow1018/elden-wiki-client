import { useState, useEffect } from 'react';
import { Box, ButtonBase } from '@mui/material';
import theme from '@/styles/theme';

import Text from '@/components/Base/Text';

import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

export default function TodoItem(
  props: {
    todoId: number;
    isBoss: boolean;
    locationName: string;
    targetName: string;
    rune: number;
    bossRewards: string[];
    additionalInfo: string[];
    isComplete: boolean;
    isSkip: boolean;
    onClickTodoItemCheckButton: (isComplete: boolean) => void;
  }
) {
  const [isComplete, setIsComplete] = useState<boolean>(props.isComplete);

  return (
    <Box
      sx={{
        display: 'flex',
        borderTop: `1px solid ${theme.color.border.dark}`,
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          minHeight: 48,
        }}
      >
        <CheckButton
          isComplete={isComplete}
          onClick={() => setIsComplete(prev => {
            const newValue = !prev;
            props.onClickTodoItemCheckButton(newValue);
            return newValue;
          })}
        />

        <InfomationPanel
          isBoss={props.isBoss}
          locationName={props.locationName}
          targetName={props.targetName}
          rune={props.rune}
          bossRewards={props.bossRewards}
          additionalInfo={props.additionalInfo}
        />
      </Box>
    </Box>
  );
}

function CheckButton(
  props: {
    isComplete: boolean;
    onClick: () => void;
  }
) {
  return (
    <ButtonBase
      onClick={props.onClick}
      sx={{
        backgroundColor: props.isComplete === true ? theme.color.primary.faint : theme.color.dark.gray2,
        width: '64px',
        height: '100%',
      }}
    >
      <CheckBoxOutlinedIcon
        sx={{
          fontSize: '20px',
          color: props.isComplete === true ? theme.color.primary.main : theme.color.text.secondary,
        }}
      />
    </ButtonBase>
  );
}

function InfomationPanel(
  props: {
    isBoss: boolean;
    locationName: string;
    targetName: string;
    rune: number;
    bossRewards: string[];
    additionalInfo: string[];
  }
) {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '12px',
      }}
    >
      <Text
        sx={{
          fontSize: '11px',
          color: theme.color.text.secondary,
          marginBottom: '2px',
        }}
      >
        { props.locationName }
      </Text>

      <Box
        sx={{
          fontWeight: 700,
          color: theme.color.primary.main,
        }}
      >
        <Text sx={{ fontSize: '13px' }}>
          { props.targetName }
        </Text>
        { props.rune !== 0 &&
          <Text sx={{ fontSize: '12px' }}>
            { props.rune.toLocaleString() } 룬
          </Text>
        }
      </Box>

      { (props.bossRewards.length !== 0 || props.additionalInfo.length !== 0) &&
        <Box
          sx={{
            marginTop: '4px',
            display: 'flex',
            fontSize: '11px',
          }}
        >
          <Box sx={{ flex: 1 }}>
            { props.bossRewards.map((str, index) =>
              <Text key={index}>
                { str }
              </Text>
            )}
          </Box>
          <Box sx={{ flex: 1 }}>
            { props.additionalInfo.map((str, index) =>
              <Text key={index}>
                { str }
              </Text>
            )}
          </Box>
        </Box>
      }
    </Box>
  );
}