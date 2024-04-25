'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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

  const [checkListData, setCheckListData] = useState<ResCheckListDetailArea[] | null>([]);

  useEffect(() => {
    setupCheckListDataFromStorage(checkListId);
  }, [checkListId]);

  function setupCheckListDataFromStorage(checkListId: string) {
    const resData = checkListDB.getCheckListDetail(checkListId);
    setCheckListData(resData);
  }


  return (
    <Layout>
      <Container>
        { checkListData !== null &&
          <>
            <StickyTopMenuBar
            
            />

            { checkListData.map(item =>
              <DetailItemByArea
                key={item.areaId}
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