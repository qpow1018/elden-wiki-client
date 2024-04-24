'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { DEFINE } from '@/define';
import checkListDB, { ResCheckList } from '@/tempDb/checkList/checkListDB';
import checkListUtils from '@/containers/CheckList/checkListUtils';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import Text from '@/components/Base/Text';
import Link from '@/components/Base/Link';
import Button, { ButtonTheme } from '@/components/Button';
import EmptyBox from '@/components/EmptyBox';

export default function CheckList() {
  const router = useRouter();

  const [checkLists, setCheckLists] = useState<ResCheckList[]>([]);

  useEffect(() => {
    setupCheckListsFromStorage();
  }, []);

  function setupCheckListsFromStorage() {
    const result = checkListDB.getAllCheckLists();
    setCheckLists(result);
  }

  function handleClickCreateButton() {
    const isUnderMaxCheckListCount = checkListUtils.isUnderMaxCheckListCount(checkLists.length);
    if (isUnderMaxCheckListCount === false) {
      alert('이미 5개가 넘음');
      return;
    }

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
            체크리스트는 최대 { DEFINE.maxCheckListCount }개까지 생성할 수 있습니다.
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

        { checkLists.length !== 0 ? (
          checkLists.map(item =>
            <CheckListItem
              key={item.id}
              id={item.id}
              characterName={item.characterName}
              ngPlus={item.ngPlus}
              memo={item.memo}
            />
          )
        ) : (
          <EmptyBox
            text='체크리스트 목록이 없습니다.'
            height={360}
          />
        )}

        {/* <Button
          onClick={() => {
            checkListDB.deleteAllCheckLists();
          }}
          theme={ButtonTheme.bgSec}
        >
          전체 삭제
        </Button> */}
      </Container>
    </Layout>
  );
}

function CheckListItem(
  props: {
    id: string;
    characterName: string;
    ngPlus: number;
    memo: string;
  }
) {
  return (
    <Box
      sx={{
        marginBottom: '8px',
        '&:last-of-type': {
          marginBottom: '0'
        }
      }}
    >
      <Link
        href={`/check-list/${props.id}`}
        sx={{
          borderRadius: theme.common.borderRadius,
          width: '100%',
          padding: '12px',
          backgroundColor: theme.color.background.default,
        }}
      >
        <Text
          sx={{
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          { props.characterName }
        </Text>

        <Box
          sx={{
            marginTop: '4px',
            fontSize: '12px',
            color: theme.color.text.secondary,
          }}
        >
          <Text>
            회차 정보 : { props.ngPlus !== 0 ? `${props.ngPlus}회차` : '-' }
          </Text>
          <Text>
            { props.memo.length !== 0 ? props.memo : '-' }
          </Text>
        </Box>
      </Link>
    </Box>
  );
}