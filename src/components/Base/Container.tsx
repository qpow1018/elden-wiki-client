import { Box, SxProps } from '@mui/material';

import theme from '@/styles/theme';

export default function BaseContainer(
  props: {
    useFullPage?: boolean;
    children?: React.ReactNode;
    sx?: SxProps;
  }
) {
  return (
    <Box
      sx={[
        {
          margin: 'auto',
          width: '100%',
          maxWidth: theme.size.maxContainerWidth,
        },
        props.useFullPage === true && {
          height: `calc(100svh - ${theme.size.headerHeight}px - ${theme.size.bottomNaviHeight}px)`,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
      ]}
    >
      { props.children }
    </Box>
  );
}