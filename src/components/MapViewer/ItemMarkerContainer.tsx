import Image, { StaticImageData } from 'next/image';
import { Box } from '@mui/material';

import theme from '@/styles/theme';

import { utils } from '@/libs';
import { ResMap, ResMapItem } from '@/api/types';
import { TypeMapViewer, TypeMapImageSize, TypeMovementCoord } from './types';

export default function ItemMarkerContainer(
  props: {
    scale: number;
    itemsData: ResMapItem[];
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
      }}
    >
      {/* { props.itemsData.map((data, index) =>
        <ItemMarker
          key={index}
          scale={props.scale}
          data={data}
        />
      )} */}
    </Box>
  );
}

function ItemMarker(
  props: {
    scale: number;
    data: ResMapItem;
  }
) {
  const { data, scale } = props;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: `calc(${data.location.y * scale}px - 4px)`,
        left: `calc(${data.location.x * scale}px - 4px)`,
        // background: 'red',
      }}
    >
      <Box>
        <MarkerDot
        
        />
      </Box>

      
      {/* testjseotjosejto */}

      {/* <Box
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
        test
      </Box> */}
    </Box>
  );
}

function MarkerDot() {
  return (
    <Box
      sx={{
        borderRadius: '50%',
        width: '12px',
        height: '12px',
        backgroundColor: '#fff',
        border: `1px solid ${theme.color.primary.main}`
      }}
    />
  );
}