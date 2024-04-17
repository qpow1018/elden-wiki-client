'use client';

import { Box } from '@mui/material';

import { ResMap } from '@/api/types';

import Layout from '@/components/Layout';
import Link from '@/components/Base/Link';

export default function Map(
  props: {
    mapList: ResMap[];
  }
) {
  return (
    <Layout>
      <Box
        sx={{
          padding: '16px'
        }}
      >
        <Box
          sx={{
            marginBottom: '12px'
          }}
        >
          지역 목록
        </Box>

        { props.mapList.map(item =>
          <Link
            key={item.id}
            href={`/map/${item.id}`}
            sx={{
              background: '#555',
              padding: '12px 0',
              marginBottom: '8px'
            }}
          >
            { item.name }
          </Link>
        )}
      </Box>
    </Layout>
  );
}


