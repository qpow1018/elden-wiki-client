'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { useGetSubCategory } from '@/queries';
import { ResItemSubCategory, ReqUpdateSubCategory } from '@/types/api';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import EssentialDataError from '@/components/EssentialDataError';
import Text from '@/components/Base/Text';
import FormRow from '@/components/Form/FormRow';
import FormLabel from '@/components/Form/FormLabel';
import Textarea from '@/components/Form/Textarea';
import Button, { ButtonTheme } from '@/components/Button';



import api from '@/api';
import { useMutation } from '@tanstack/react-query';



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
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (param: ReqUpdateSubCategory) => {
      return api.updateItemSubCategory(param);
    },
    onSuccess: () => {
      // TODO 기존 데이터 refetch 처리
      router.back();
    },
    onError: (error, variables, context) => {
      // TODO
      console.log('카테고리 수정 에러 처리');
      console.log('카테고리 수정 에러', error);
    },
  });

  const [description, setDescription] = useState<string>(props.data.description !== null ? props.data.description : '');

  function handleSubmit() {
    let _description: string | null = description.trim();
    if (_description.length === 0) {
      _description = null;
    }

    mutation.mutate({
      subCategoryNo: props.data.subCategoryNo,
      description: _description
    });
  }

  return (
    <Container
      sx={{
        padding: '16px'
      }}
    >
      <Box
        sx={{
          marginBottom: '12px',
        }}
      >
        <Text
          sx={{
            color: theme.color.primary.main,
            fontSize: '16px',
            fontWeight: 700,
          }}
        >
          { props.data.name }
        </Text>
      </Box>

      <FormRow>
        <FormLabel>카테고리 내용</FormLabel>
        <Textarea
          value={description}
          onChange={(value) => setDescription(value)}
          placeholder='카테고리 내용을 입력하세요.'
        />
      </FormRow>

      <Button
        onClick={handleSubmit}
        theme={ButtonTheme.bgPri}
        sx={{
          width: '100%',
          height: 48,
          fontSize: '15px',
          marginTop: '24px'
        }}
      >
        수정하기
      </Button>
    </Container>
  );
}
