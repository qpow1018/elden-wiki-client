'use client';

import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import theme from '@/styles/theme';

import define from '@/define';
import checkListDB from '@/tempDb/checkList/checkListDB';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import Text from '@/components/Base/Text';
import Button, { ButtonTheme } from '@/components/Button';

export default function CheckListAddition() {

  return (
    <Layout>
      <Container
        sx={{
          padding: '16px'
        }}
      >
        생성 폼
      </Container>
    </Layout>
  );
}