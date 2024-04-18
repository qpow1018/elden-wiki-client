import { Box } from '@mui/material';

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
        width: props.width,
        height: props.height,
        transformOrigin: '0 0',
        transform: `translate(${props.movementX}px, ${props.movementY}px)`,
        background: 'red'
      }}
    >
      { props.children }
    </Box>
  );
}