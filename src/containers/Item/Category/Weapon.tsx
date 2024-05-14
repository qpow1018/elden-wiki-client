'use client';

import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { useGetItemWeapons } from '@/queries';
import { ResItemMainCategory, ResItemSubCategory } from '@/types/api';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import EssentialDataError from '@/components/EssentialDataError';
import Text from '@/components/Base/Text';
import Link from '@/components/Base/Link';

export default function Weapon() {
  const { data: testData, isLoading, isError } = useGetItemWeapons<ResItemMainCategory[]>();
  console.log('testData', testData);

  return (
    <Layout>
      Weapon
      {/* { (itemCategories !== undefined && isLoading === false && isError === false) ? (
        <MainView
          itemCategories={itemCategories}
        />
      ) : (
        <EssentialDataError
          isLoading={isLoading}
          isError={isError}
        />
      )} */}
    </Layout>
  );
}

function MainView() {
  return (
    <Container>
      무기 목록

    </Container>
  );
}