'use client';

import { Box } from '@mui/material';

import theme from '@/styles/theme';

import { ResMap } from '@/tempDb/map';

import Layout from '@/components/Layout';
import Link from '@/components/Base/Link';
import Text from '@/components/Base/Text';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
        <Text
          sx={{
            fontSize: '12px',
            color: theme.color.text.dark,
            marginBottom: '12px',
          }}
        >
          지역 목록
        </Text>

        { props.mapList.map(item =>
          <Link
            key={item.id}
            href={`/map/${item.id}`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: `1px solid ${theme.color.border.dark}`,
              paddingRight: '4px',
              height: 48,
            }}
          >
            <Text
              sx={{
                fontSize: '14px',
              }}
            >
              { `${item.mapNo}. ${item.name}` }
            </Text>
            <KeyboardArrowRightIcon
              sx={{
                fontSize: '18px',
                color: theme.color.text.dark,
              }}
            />
          </Link>
        )}
      </Box>
    </Layout>
  );
}


