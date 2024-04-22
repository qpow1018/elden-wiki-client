import { Box, ButtonBase, SxProps } from '@mui/material';

import theme from '@/styles/theme';

export default function BaseText(
  props: {
    children?: React.ReactNode;
    sx?: SxProps;
  }
) {
  return (
    <Box
      component={'p'}
      sx={[
        {
          fontFamily: theme.common.fontFamily,
          letterSpacing: theme.common.letterSpacing,
          color: theme.color.text.primary,
          fontSize: '14px',
          lineHeight: 1.5,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
      ]}
    >
      { props.children }
    </Box>
  );
}