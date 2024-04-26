'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box } from '@mui/material';

import theme from '@/styles/theme';
import useWindowSize from '@/hooks/useWindowSize';
import resMapList, { ResMap } from '@/tempDb/map';
import resMapItems, { ResMapItem } from '@/tempDb/mapItem';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import MapViewer from '@/components/MapViewer';

export default function MapDetail() {
  const { isDesktop } = useWindowSize();

  const searchParams = useSearchParams();
  const mapId = Number(searchParams.get('id'));

  const [mapData, setMapData] = useState<ResMap | null>(null);
  const [itemsData, setItemsData] = useState<ResMapItem[] | null>(null);

  useEffect(() => {
    setupMapData(mapId);
    setupMapItemData(mapId);
  }, [mapId]);

  function setupMapData(mapId: number) {
    const _mapData = resMapList.find(item => item.id === mapId);
    if (_mapData === undefined) return;
    setMapData(_mapData);
  }

  function setupMapItemData(mapId: number) {
    const itemsData = resMapItems[mapId];
    setItemsData(itemsData);
  }

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
          { (mapData !== null && itemsData !== null) &&
            <MapViewer
              mapData={mapData}
              itemsData={itemsData}
            />
          }
        </Box>
      </Container>
    </Layout>
  );
}