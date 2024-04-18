'use client';

import { Box } from '@mui/material';

import theme from '@/styles/theme';

import { ResMap, ResMapItem } from '@/api/types';

import Layout from '@/components/Layout';
import MapViewer from '@/components/MapViewer';

export default function MapDetail(
  props: {
    mapData: ResMap;
    itemsData: ResMapItem[];
  }
) {
  return (
    <Layout>
      <Box
        sx={{
          padding: '16px',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
            maxWidth: 1002,
            height: 602,
            border: `1px solid ${theme.color.border.dark}`,
          }}
        >
          <MapViewer
            mapData={props.mapData}
            itemsData={props.itemsData}
          />
        </Box>
      </Box>
    </Layout>
  );
}