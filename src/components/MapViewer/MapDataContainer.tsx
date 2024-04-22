import { Box } from '@mui/material';

import theme from '@/styles/theme';

export default function MapDataContainer(
  props: {
    width: number;
    height: number;
    movementX: number;
    movementY: number;
    children?: React.ReactNode;
  }
) {
  return (
    <Box
      sx={{
        position: 'relative',
        transformOrigin: '0 0',
        background: theme.color.background.default,
        // transitionProperty: 'transform',
        // transition: '0.4s ease'
      }}
      style={{
        width: props.width,
        height: props.height,
        transform: `translate(${props.movementX}px, ${props.movementY}px)`,
      }}
    >
      { props.children }
    </Box>
  );
}