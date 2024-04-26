'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { utils } from '@/libs';
import checkListDB from '@/tempDb/checkList/checkListDB';
import checkListUtils from '@/containers/CheckList/checkListUtils';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import Text from '@/components/Base/Text';
import FormRow from '@/components/Form/FormRow';
import FormLabel from '@/components/Form/FormLabel';
import TextInput from '@/components/Form/TextInput';

import Button, { ButtonTheme } from '@/components/Button';

export default function CheckListEditing(
  props: {
    checkListId: string;
  }
) {
  const { checkListId } = props;

  const router = useRouter();

  const [characterName, setCharacterName] = useState<string>('');
  const [ngPlus, setNgPlus] = useState<string>('');
  const [memo, setMemo] = useState<string>('');

  useEffect(() => {
    setupPrevValueFromStorage(checkListId);
  }, [checkListId]);

  function setupPrevValueFromStorage(checkListId: string) {
    const resData = checkListDB.getCheckList(checkListId);
    if (resData === null) return;

    setCharacterName(resData.characterName);
    setNgPlus(String(resData.ngPlus));
    setMemo(resData.memo);
  }

  function handleChangeNgPlusInput(value: string) {
    const _value = utils.removeStringExcludingInteger(value);
    setNgPlus(_value);
  }

  function handleClickCreateButton() {
    const _characterName = characterName.trim();
    const isValidCharacterName = checkListUtils.isValidCharacterName(_characterName);
    if (isValidCharacterName === false) {
      alert('유효하지 않은 캐릭터 이름');
      return;
    }

    const _ngPlus = Number(ngPlus);
    const isValidNgPlus = checkListUtils.isValidNgPlus(_ngPlus);
    if (isValidNgPlus === false) {
      alert('유효하지 않은 회차');
      return;
    }

    checkListDB.updateCheckList(checkListId, {
      id: checkListId,
      characterName: _characterName,
      ngPlus: _ngPlus,
      memo: memo
    });

    router.back();
  }

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
          체크리스트 수정
        </Text>

        <Box
          sx={{
            marginBottom: '24px'
          }}
        >
          <FormRow>
            <FormLabel>캐릭터 이름</FormLabel>
            <TextInput
              value={characterName}
              onChange={(value) => setCharacterName(value)}
              placeholder='캐릭터 이름'
            />
          </FormRow>
          <FormRow>
            <FormLabel>회차</FormLabel>
            <TextInput
              value={ngPlus}
              onChange={(value) => handleChangeNgPlusInput(value)}
              placeholder='회차 정보 - 숫자 또는 빈칸'
            />
          </FormRow>
          <FormRow>
            <FormLabel>간단 메모</FormLabel>
            <TextInput
              value={memo}
              onChange={(value) => setMemo(value)}
              placeholder='간단한 메모'
            />
          </FormRow>
        </Box>

        <Button
          onClick={handleClickCreateButton}
          theme={ButtonTheme.bgPri}
          sx={{
            width: '100%',
            height: 48,
            fontSize: '15px'
          }}
        >
          수정하기
        </Button>
      </Container>
    </Layout>
  );
}