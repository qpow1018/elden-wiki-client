'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import theme from '@/styles/theme';

import checkListDB, { ResCheckList, ResCheckListDetailArea } from '@/tempDb/checkList/checkListDB';

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

  const [characterInfo, setCharacterInfo] = useState<ResCheckList | null>(null);
  const [checkListData, setCheckListData] = useState<ResCheckListDetailArea[] | null>([]);
  const [shortcutMenuElm, setShortcutMenuElm] = useState<HTMLElement | null>(null);
  const [subMenuElm, setSubMenuElm] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setupCheckListDataFromStorage(checkListId);
  }, [checkListId]);

  function setupCheckListDataFromStorage(checkListId: string) {
    const resCheckList = checkListDB.getCheckList(checkListId);
    setCharacterInfo(resCheckList);
    const resresCheckListDetail = checkListDB.getCheckListDetail(checkListId);
    setCheckListData(resresCheckListDetail);
  }

  function appendRefAreaElms(areaId: number, elm: HTMLElement) {
    const prevData = refAreaElms.current;
    refAreaElms.current = { ...prevData, [areaId]: elm };
  }

  function openShortCutMenu(elm: HTMLElement) {
    setShortcutMenuElm(elm);
  }

  function closeShortCutMenu() {
    setShortcutMenuElm(null);
  }

  function handleClickShortcutAreaButton(areaId: number) {
    const targetElm = refAreaElms.current[areaId];
    const elmOffsetTop = targetElm.offsetTop;
    const top = elmOffsetTop - theme.size.checkListStickyHeaderHeight + 1;
    window.scrollTo(0, top);
  }

  function openSubMenu(elm: HTMLElement) {
    setSubMenuElm(elm);
  }

  function closeSubMenu() {
    setSubMenuElm(null);
  }













  return (
    <Layout>
      <Container>
        { (characterInfo !== null && checkListData !== null) &&
          <>
            <StickyTopMenuBar
              characterInfo={characterInfo}
              shortcutMenuElm={shortcutMenuElm}
              openShortCutMenu={openShortCutMenu}
              closeShortCutMenu={closeShortCutMenu}
              onClickShortcutAreaButton={handleClickShortcutAreaButton}
              checkListData={checkListData}
              subMenuElm={subMenuElm}
              openSubMenu={openSubMenu}
              closeSubMenu={closeSubMenu}
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