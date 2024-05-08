'use client';

import { useEffect } from 'react';
import { Box } from '@mui/material';

import { useQuery } from '@tanstack/react-query';

import Layout from '@/components/Layout';

export default function Home() {
  const { data } = useQuery({ queryKey: ['testFn'], queryFn: getTestFn });
  console.log('Home', data);

  async function getTestFn() {
    try {
      const response = await fetch('http://localhost:27017/api/item/item-categories');
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const jsonData = await response.json();
      // console.log('jsonData', jsonData);
      return 'reFetch 한 데이터';
    } catch (error) {
      console.log('에러 체크', error);
    }
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

      </Box>
    </Layout>
  );
}