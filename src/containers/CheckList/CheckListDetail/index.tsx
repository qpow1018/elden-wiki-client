'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import theme from '@/styles/theme';

import { utils } from '@/libs';
import checkListDB, { ResCheckList, ResCheckListDetailArea, ResCheckListDetailAreaItem } from '@/tempDb/checkList/checkListDB';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import Dialog from '@/components/Modal/Dialog';
import { ButtonTheme } from '@/components/Button';
import BoxLoading from '@/components/Loading/BoxLoading';
import FixedLoading from '@/components/Loading/FixedLoading';

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
  const [checkListData, setCheckListData] = useState<ResCheckListDetailArea[] | null>(null);

  const [shortcutMenuElm, setShortcutMenuElm] = useState<HTMLElement | null>(null);
  const [subMenuElm, setSubMenuElm] = useState<HTMLElement | null>(null);
  const [isResetDialogOpen, setIsResetDialogOpen] = useState<boolean>(false);
  const [isResetLoading, setIsResetLoading] = useState<boolean>(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

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

  async function resetCheckListDetailFromStorage() {
    setIsResetLoading(true);
    checkListDB.resetCheckListDetail(checkListId);

    setCheckListData(null);
    setIsResetDialogOpen(false);
    closeSubMenu();

    await utils.waitFor(250);

    setupCheckListDataFromStorage(checkListId);
    setIsResetLoading(false);
  }

  // TODO WORK 수정 기능
  function goToCheckListEditPage() {
    alert('수정 페이지 제작 필요 todo');
  }

  async function deleteCheckListFromStorage() {
    setIsDeleteLoading(true);
    checkListDB.deleteCheckListAndDetail(checkListId);

    setIsDeleteDialogOpen(false);
    closeSubMenu();

    await utils.waitFor(250);

    setIsDeleteLoading(false);

    // 목록으로 라우팅
    router.push('/check-list');
  }


  function getAllTodoCount(todoList: ResCheckListDetailAreaItem[]) {
    const res = todoList.filter(item => item.isSkip === false);
    return res.length;
  }

  function getCompletedTodoCount(todoList: ResCheckListDetailAreaItem[]) {
    const res = todoList.filter(item => item.isSkip === false && item.isComplete === true);
    return res.length;
  }

  function updateTodoItemCompleteFromStorage(areaId: number, todoId: number, isComplete: boolean) {
    checkListDB.updateCheckListTodoItemComplete(checkListId, areaId, todoId, isComplete);
  }


  return (
    <Layout>
      <Container>
        { isResetLoading === true &&
          <BoxLoading sx={{ height: 480 }} />
        }

        { (isResetLoading === false && characterInfo !== null && checkListData !== null) &&
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
              onClickResetButton={() => setIsResetDialogOpen(true)}
              onClickEditButton={goToCheckListEditPage}
              onClickDeleteButton={() => setIsDeleteDialogOpen(true)}
            />

            { checkListData.map(item =>
              <DetailItemByArea
                key={item.areaId}
                appendRefAreaElms={(elm) => appendRefAreaElms(item.areaId, elm)}
                areaId={item.areaId}
                name={item.name}
                todoList={item.list}
                getAllTodoCount={() => getAllTodoCount(item.list)}
                getCompletedTodoCount={() => getCompletedTodoCount(item.list)}
                updateTodoItemCompleteFromStorage={(todoId, isComplete) => updateTodoItemCompleteFromStorage(item.areaId, todoId, isComplete)}
              />
            )}

            { isResetDialogOpen === true &&
              <Dialog
                isOpen={isResetDialogOpen}
                onClose={() => setIsResetDialogOpen(false)}
                title='체크리스트 초기화'
                message='정말 체크리스트를 초기화 하시겠습니까?'
                submitButtonText='초기화하기'
                onSubmit={resetCheckListDetailFromStorage}
              />
            }

            { isDeleteDialogOpen === true &&
              <Dialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setIsDeleteDialogOpen(false)}
                title='체크리스트 삭제'
                message='정말 체크리스트를 삭제 하시겠습니까?'
                submitButtonText='삭제하기'
                submitButtonTheme={ButtonTheme.bgSec}
                onSubmit={deleteCheckListFromStorage}
              />
            }
          </>
        }

        { isDeleteLoading === true &&
          <FixedLoading />
        }
      </Container>
    </Layout>
  );
}