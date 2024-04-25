'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import theme from '@/styles/theme';

import checkListDB, { ResCheckListDetailArea } from '@/tempDb/checkList/checkListDB';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';

import StickyTopMenuBar from './StickyTopMenuBar';
import DetailItemByArea from './DetailItemByArea';

export default function CheckListDetail(
  props: {
    checkListId: string;
  }
) {
  const { checkListId } = props;

  const router = useRouter();

  const refAreaElms = useRef<{ [areaId: number]: HTMLElement }>({});

  const [checkListData, setCheckListData] = useState<ResCheckListDetailArea[] | null>([]);

  useEffect(() => {
    setupCheckListDataFromStorage(checkListId);
  }, [checkListId]);

  function setupCheckListDataFromStorage(checkListId: string) {
    const resData = checkListDB.getCheckListDetail(checkListId);
    setCheckListData(resData);
  }

  function appendRefAreaElms(areaId: number, elm: HTMLElement) {
    const prevData = refAreaElms.current;
    refAreaElms.current = { ...prevData, [areaId]: elm };
  }

  function handleClickAreaShortcutButton(areaId: number) {
    const targetElm = refAreaElms.current[areaId];
    const elmOffsetTop = targetElm.offsetTop;
    const top = elmOffsetTop - theme.size.checkListStickyHeaderHeight + 1;
    window.scrollTo(0, top);
  }


  return (
    <Layout>
      <Container>
        { checkListData !== null &&
          <>
            <StickyTopMenuBar
              checkListData={checkListData}
              onClickAreaShortcutButton={handleClickAreaShortcutButton}
            />

            { checkListData.map(item =>
              <DetailItemByArea
                key={item.areaId}
                appendRefAreaElms={(elm) => appendRefAreaElms(item.areaId, elm)}
                areaId={item.areaId}
                name={item.name}
                todoList={item.list}
                isOpen={item.isOpen}
              />
            )}
          </>
        }
      </Container>
    </Layout>
  );
}