'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { utils } from '@/libs';
import checkListDB from '@/tempDb/checkList/checkListDB';
import checkListUtils from '@/containers/CheckList/checkListUtils';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import Text from '@/components/Base/Text';

import Button, { ButtonTheme } from '@/components/Button';

export default function CheckListDetail(
  props: {
    checkListId: string;
  }
) {
  const router = useRouter();

  return (
    <Layout>
      <Container
        sx={{
          padding: '16px'
        }}
      >
        <Text
          sx={{
            fontSize: '15px',
            fontWeight: 500,
            color: theme.color.text.dark,
            marginBottom: '24px',
          }}
        >
          체크리스트 디테일
        </Text>

        수정, 삭제, 초기화(모든 데이터를 초기값으로)

        리스트
        아코디언 형태
        체크박스 / 스킵




      </Container>
    </Layout>
  );
}