'use client';

import { Box } from '@mui/material';

import theme from '@/styles/theme';
import useWindowSize from '@/hooks/useWindowSize';

import { ResMap } from '@/tempDb/map';
import { ResMapItem } from '@/api/types';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import MapViewer from '@/components/MapViewer';

export default function MapDetail(
  props: {
    mapData: ResMap;
    itemsData: ResMapItem[];
  }
) {
  const { isDesktop } = useWindowSize();

  return (
    <Layout>
      <Container
        useFullPage={isDesktop === false ? true : false}
        sx={[
          isDesktop && {
            paddingTop: '24px',
          },
        ]}
      >
        <Box
          sx={[
            {
              width: '100%',
              height: '100%'
            },
            isDesktop && {
              border: `1px solid ${theme.color.border.default}`,
              height: 680,
            }
          ]}
        >
          <MapViewer
            mapData={props.mapData}
            itemsData={props.itemsData}
          />
        </Box>
      </Container>
    </Layout>
  );
}