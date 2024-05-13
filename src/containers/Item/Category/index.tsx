'use client';

import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { useGetMainCategory } from '@/queries';
import { ResItemMainCategory, ResItemSubCategory } from '@/types/api';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import EssentialDataErrorBoundary from '@/components/EssentialDataErrorBoundary';
import Text from '@/components/Base/Text';
import Link from '@/components/Base/Link';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ItemByCategory(
  props: {
    categoryNo: number;
  }
) {


  return (
    <Layout>
      <Container>
        categoryNo 가 유효하지 않을 경우 처리

        서브 카테고리랑 아이템 같이 가져오기

        상단에 목차

        하단에 디테일

        test: { props.categoryNo }
        {/* <EssentialDataErrorBoundary isLoading={isLoading} isError={isError}>

        </EssentialDataErrorBoundary> */}
      </Container>
    </Layout>
  );
}