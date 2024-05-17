'use client';

import React, { Box } from '@mui/material';
import theme from '@/styles/theme';

import { useGetSubCategory } from '@/queries';
import { ResItemSubCategory } from '@/types/api';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import EssentialDataError from '@/components/EssentialDataError';
import Text from '@/components/Base/Text';

export default function SubCategoryEdit(
  props: {
    subCategoryNo: number;
  }
) {
  const { data, isLoading, isError } = useGetSubCategory<ResItemSubCategory>(props.subCategoryNo);
  console.log('data', data);

  return (
    <Layout>
      { (data !== undefined && isLoading === false && isError === false) ? (
        <MainView
          data={data}
        />
      ) : (
        <EssentialDataError
          isLoading={isLoading}
          isError={isError}
        />
      )}
    </Layout>
  );
}

function MainView(
  props: {
    data: ResItemSubCategory;
  }
) {
  return (
    <Container>
      에딧 폼
    </Container>
  );
}
