'use client';

import { useEffect } from 'react';
import { Box } from '@mui/material';

import { useQuery } from '@tanstack/react-query';

import api from '@/api';

import Layout from '@/components/Layout';

export default function Item() {
  // const { data } = useQuery({ queryKey: ['testFn'], queryFn: getTestFn });
  // console.log('data', data);

  // async function getTestFn() {
  //   try {
  //     const response = await fetch('http://localhost:27017/api/item/item-categories');
  //     if (!response.ok) {
  //       throw new Error(response.statusText)
  //     }
  //     const jsonData = await response.json();
  //     // console.log('jsonData', jsonData);
  //     return 'reFetch 한 데이터';
  //   } catch (error) {
  //     console.log('에러 체크', error);
  //   }
  // }


  // TODO key 관리방법 고민, useQuery 공통 훅 설계
  const { data, isLoading, isError } = useQuery({ queryKey: ['testKey'], queryFn: api.getItemMainCategories });
  // console.log('허허허 data', data);
  // console.log('허허허 isLoading', isLoading);
  // console.log('허허허 isError', isError);

  return (
    <Layout>
      <Box sx={{ padding: '16px' }}>
        <Box sx={{ marginBottom: '8px' }}>아이템 DB</Box>


      </Box>
    </Layout>
  );
}