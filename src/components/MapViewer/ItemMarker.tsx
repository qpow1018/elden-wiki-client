import Image, { StaticImageData } from 'next/image';
import { Box } from '@mui/material';

import { utils } from '@/libs';
import { TypeMapViewer, TypeMapImageSize, TypeMovementCoord } from './types';

export default function ItemMarker(
  props: {
    // children?: React.ReactNode;
  }
) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        // width: props.imageSize.width,
        // height: props.imageSize.height,
        // transformOrigin: '0 0',
        // transform: `translate(${props.movementCoord.x}px, ${props.movementCoord.y}px)`,
      }}
    >
      {/* { props.items.map(item =>
        <Box
          key={item.id}
          sx={{
            position: 'absolute',
            top: `calc(${item.coord.y * props.scale}px - 4px)`,
            left: `calc(${item.coord.x * props.scale}px - 4px)`,
            background: 'red',
            borderRadius: '50%',
            width: '8px',
            height: '8px'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              left: 0,
              width: '80px',
              fontSize: '10px',
              fontWeight: 700,
              color: 'red'
            }}
          >
            { item.name }
          </Box>
        </Box>
      )} */}
    </Box>
  );
}