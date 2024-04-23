'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';

import theme from '@/styles/theme';

import define from '@/define';
import checkListDB from '@/tempDb/checkList/checkListDB';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import Text from '@/components/Base/Text';
import Button, { ButtonTheme } from '@/components/Button';

export default function CheckList() {
  const router = useRouter();

  function handleClickCreateButton() {
    // TODO 갯수 체크


    router.push('/check-list/addition');
  }


  return (
    <Layout>
      <Container
        sx={{
          padding: '16px'
        }}
      >
        <Box
          sx={{
            paddingBottom: '12px',
            borderBottom: `1px solid ${theme.color.border.default}`,
            marginBottom: '12px',
          }}
        >
          <Button
            onClick={handleClickCreateButton}
            theme={ButtonTheme.bdPri}
            sx={{
              width: '100%',
              height: 46,
            }}
          >
            체크리스트 생성하기
          </Button>

          <Text
            sx={{
              marginTop: '8px',
              fontSize: '12px',
              color: theme.color.text.dark,
            }}
          >
            체크리스트는 최대 { define.maxCheckListCount }개까지 생성할 수 있습니다.
          </Text>
        </Box>

        <Text
          sx={{
            fontSize: '12px',
            color: theme.color.text.dark,
            marginBottom: '12px',
          }}
        >
          체크리스트 목록
        </Text>

        CheckList 목록 map

      </Container>
    </Layout>
  );
}