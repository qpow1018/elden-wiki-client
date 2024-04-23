import { Box } from '@mui/material';
import theme from '@/styles/theme';

import Text from '@/components/Base/Text';

export default function EmptyBox(
  props: {
    text?: string;
    height?: string | number;
  }
) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: props.height !== undefined ? props.height : 180,
      }}
    >
      <Text
        sx={{
          fontSize: '13px',
          color: theme.color.text.secondary,
        }}
      >
        { props.text !== undefined
          ? props.text
          : '내용이 없습니다.'
        }
      </Text>
    </Box>
  );
}