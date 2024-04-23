import { Box, SxProps } from '@mui/material';

import theme from '@/styles/theme';

import Text from '@/components/Base/Text';

export default function FormLabel(
  props: {
    children?: React.ReactNode;
    sx?: SxProps;
  }
) {
  return (
    <Text
      sx={[
        {
          fontSize: '13px',
          color: theme.color.text.secondary,
          marginBottom: '8px',
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
      ]}
    >
      { props.children }
    </Text>
  );
}