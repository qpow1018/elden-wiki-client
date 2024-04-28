import { Box } from '@mui/material';

import theme from '@/styles/theme';

import { utils } from '@/libs';
import { ResMap } from '@/tempDb/map';
import { ResItemLocation } from '@/tempDb/mapItem';
import itemDb from '@/tempDb/mapItem/items';
import { TypeMapViewer, TypeMapImageSize, TypeCoord } from './types';

import Text from '@/components/Base/Text';

export default function ItemMarkerContainer(
  props: {
    scale: number;
    itemsData: ResItemLocation[];
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
      { props.itemsData.map((data, index) =>
        <ItemMarker
          key={index}
          scale={props.scale}
          data={data}
        />
      )}
    </Box>
  );
}

function ItemMarker(
  props: {
    scale: number;
    data: ResItemLocation;
  }
) {
  const { data, scale } = props;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: `calc(${data.coord.y * scale}px - 4px)`,
        left: `calc(${data.coord.x * scale}px - 4px)`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <MarkerDot

        />

        { (data.name !== null || data.displayName !== null) &&
          <Text
            sx={{
              fontSize: '12px',
              height: '8px',
              lineHeight: '8px',
              marginLeft: '4px',
              color: theme.color.primary.main,
              WebkitTextStrokeWidth: '0.1px',
              WebkitTextStrokeColor: '#fff',
            }}
          >
            { data.displayName !== null ? data.displayName : data.name }
          </Text>
        }
      </Box>

      <Box
        sx={{
          marginTop: '2px',
        }}
      >
        { data.items.map((item, index) =>
          <Text
            key={index}
            sx={{
              fontSize: '12px',
              fontWeight: 500,
            }}
          >
            { itemDb[item.itemId].name || 'undefined' }
          </Text>
        )}
      </Box>
    </Box>
  );
}

function MarkerDot() {
  return (
    <Box
      sx={{
        borderRadius: '50%',
        width: '8px',
        height: '8px',
        backgroundColor: theme.color.primary.main,
        border: `1px solid #fff`,
      }}
    />
  );
}