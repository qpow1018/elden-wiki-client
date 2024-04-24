'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    setupTest();
  }, []);

  function setupTest() {
    checkListDB.makeCheckListInitialData();
  }


  return (
    <Layout>
      <Container>
        <Box
          sx={{
            background: 'red'
          }}
        >
          목록 바로가기 기능 / 초기화 / 수정 / 삭제
        </Box>

        {/* <Text
          sx={{
            fontSize: '15px',
            fontWeight: 500,
            color: theme.color.text.dark,
            marginBottom: '24px',
          }}
        >
          체크리스트 디테일
        </Text> */}

        <Box>
          수정, 삭제, 초기화(모든 데이터를 초기값으로)

          리스트
          체크박스 / 스킵


          Data 형태를 어떻게 할까
          수정이 자주 발생할 것
          Map을 사용하려면
          구조는 2중배열 형태
          맵 - 체크목록
          맵 - 체크목록 이렇게

        </Box>


        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>
        test<br/>


      </Container>
    </Layout>
  );
}