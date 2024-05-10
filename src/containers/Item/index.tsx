'use client';

import { useEffect } from 'react';
import { Box } from '@mui/material';

import { ResItemMainCategory } from '@/types/api';
import { useGetMainCategory } from '@/queries';

import { useQuery, QueryKey, QueryFunction } from '@tanstack/react-query';

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


  const { data: testdata, isLoading, isError, error } = useGetMainCategory<ResItemMainCategory[]>();
  console.log('허허허 data', testdata);
  console.log('허허허 isLoading', isLoading);
  console.log('허허허 isError', isError);
  console.log('허허허 error', error);



  return (
    <Layout>
      <Box sx={{ padding: '16px' }}>
        <Box sx={{ marginBottom: '8px' }}>아이템 DB</Box>


      </Box>
    </Layout>
  );
}