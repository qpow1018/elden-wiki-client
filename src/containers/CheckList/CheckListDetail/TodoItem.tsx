import { useState, useEffect } from 'react';
import { Box, ButtonBase } from '@mui/material';
import theme from '@/styles/theme';

import Text from '@/components/Base/Text';

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
  }
) {
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
        <InfomationPanel
          isBoss={props.isBoss}
          locationName={props.locationName}
          targetName={props.targetName}
          rune={props.rune}
          bossRewards={props.bossRewards}
          additionalInfo={props.additionalInfo}
        />
      </Box>

      <CheckButton
      
      />
    </Box>
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
        padding: '12px 8px 12px 16px',
      }}
    >
      <Text
        sx={{
          fontSize: '11px',
          marginBottom: '2px'
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
            color: theme.color.text.secondary,
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

function CheckButton(
  props: {

  }
) {
  return (
    <ButtonBase
      sx={{
        // backgroundColor: theme.color.primary.main,
        backgroundColor: theme.color.dark.gray2,
        width: '80px',
      }}
    >

      체크
    </ButtonBase>
  );
}