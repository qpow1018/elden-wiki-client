'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import checkListDB, { ResCheckListDetail } from '@/tempDb/checkList/checkListDB';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';

import StickyTopMenuBar from './StickyTopMenuBar';
import DetailItemByArea from './DetailItemByArea';

export default function CheckListDetail(
  props: {
    checkListId: string;
  }
) {
  const router = useRouter();

  const [checkListDetail, setCheckListDetail] = useState<ResCheckListDetail[]>([]);

  useEffect(() => {
    setupTest();
  }, []);

  function setupTest() {
    const resData = checkListDB.getCheckListInitialData();
    console.log('resData', resData);
    setCheckListDetail(resData);
  }

  return (
    <Layout>
      <Container>
        <StickyTopMenuBar
        
        />

        { checkListDetail.map(item =>
          <DetailItemByArea
            key={item.areaId}
            areaId={item.areaId}
            name={item.name}
            todoList={item.list}
            isOpen={item.isOpen}
          />
        )}
      </Container>
    </Layout>
  );
}