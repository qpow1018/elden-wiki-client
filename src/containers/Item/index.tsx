'use client';

import { Box } from '@mui/material';

import { useGetMainCategory } from '@/queries';
import { ResItemMainCategory, ResItemSubCategory } from '@/types/api';

import Layout from '@/components/Layout';
import EssentialDataErrorBoundary from '@/components/EssentialDataErrorBoundary';

export default function Item() {
  const { data: itemCategories, isLoading, isError } = useGetMainCategory<ResItemMainCategory[]>([]);

  return (
    <Layout>
      <EssentialDataErrorBoundary isLoading={isLoading} isError={isError}>
        <Box sx={{ padding: '16px' }}>
          <Box sx={{ marginBottom: '8px' }}>아이템 DB 목록</Box>
          { itemCategories.map(item =>
            <ItemMainCategoryItem
              key={item.id}
              name={item.name}
              subCategories={item.subCategories}
            />
          )}
        </Box>
      </EssentialDataErrorBoundary>
    </Layout>
  );
}

function ItemMainCategoryItem(
  props: {
    name: string;
    subCategories: ResItemSubCategory[];
  }
) {
  return (
    <Box
      sx={{
        boxShadow: '0 0 1px red'
      }}
    >
      <Box>이름 : { props.name }</Box>

      { props.subCategories.map(item =>
        <Box
          key={item.id}
        >
          서브 - { item.name } - 라우팅 필요
        </Box>
      )}
    </Box>
  );
}