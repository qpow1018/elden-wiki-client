'use client';

import { useState } from 'react';
import { Box, Button } from '@mui/material';

import Layout from '@/components/Layout';

export default function Home() {

  const [inputValue, setInputValue] = useState<string>('');

  function generateInputQuery() {
    const text = inputValue;

    const arr = text.split('\n').filter(str => str !== '');
    let value = `INSERT INTO items(category_no, sub_category_no, name, order_no)
    VALUES
`;

    for (let i = 0; i < arr.length; i++) {
      const str = arr[i];
      const [mainCategoryNo, subCategoryNo, name, orderNo] = str.split('\t');
      value = value + `        (${mainCategoryNo}, ${subCategoryNo}, '${name}', ${orderNo})`;

      if (i < arr.length - 1) {
        value = value + ',\n';
      } else {
        value = value + ';';
      }
    }

    console.log(value);
    navigator.clipboard.writeText(value);
  }

  return (
    <Layout>
      <Box sx={{ padding: '16px' }}>
        <Box sx={{ marginBottom: '8px' }}>작업 예정</Box>

        <Box>- MAP ITEM data 추가해보고 UI 고민 필요</Box>
        <Box>- alert 처리를 snackBar로 변경</Box>
        <Box>- 유효성 검사 checker 모듈 제작</Box>
        <Box>- 회차 Input - 좀 더 편하게 변경 (현재 TextInput)</Box>
        <Box>- 체크리스트 Skip 기능</Box>
        <Box>- 체크리스트 templete 기능 (1회차, All보스런, Main보스런 등)</Box>
        <Box>- 버튼 disabled, loading 속성 추가</Box>
        <Box>- PC UI 체크</Box>
        <Box>- Window 히스토리 제어 - 추가, 수정, 삭제 등</Box>
        <Box>- 에러 처리</Box>

        <Box
          sx={{
            boxShadow: '0 0 1px red',
            marginTop: '12px'
          }}
        >
          <Box
            sx={{
              marginBottom: '8px'
            }}
          >
            쿼리 제작
          </Box>

          <Box
            component={'textarea'}
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            sx={{
              width: '100%',
              height: '400px'
            }}
          />

          <Button
            onClick={generateInputQuery}
            variant='contained'
          >
            생성하기
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}