import { Box, ButtonBase } from '@mui/material';
import theme from '@/styles/theme';

import { ResCheckList, ResCheckListDetailArea } from '@/tempDb/checkList/checkListDB';

import Text from '@/components/Base/Text';
import Menu from '@/components/Menu';

import {
  LowPriority as LowPriorityIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';

export default function StickyTopMenuBar(
  props: {
    characterInfo: ResCheckList;
    shortcutMenuElm: HTMLElement | null;
    openShortCutMenu: (elm: HTMLElement) => void;
    closeShortCutMenu: () => void;
    onClickShortcutAreaButton: (areaId: number) => void;
    checkListData: ResCheckListDetailArea[];
    subMenuElm: HTMLElement | null;
    openSubMenu: (elm: HTMLElement) => void;
    closeSubMenu: () => void;
    onClickResetButton: () => void;
    onClickEditButton: () => void;
    onClickDeleteButton: () => void;
  }
) {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: '-1px',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: theme.size.checkListStickyHeaderHeight,
        backgroundColor: theme.color.background.default,
        borderTop: `1px solid ${theme.color.border.default}`,
        borderBottom: `1px solid ${theme.color.border.default}`,
        padding: '0 8px 0 16px',
      }}
    >
      <CharacterInfo
        characterName={props.characterInfo.characterName}
        ngPlus={props.characterInfo.ngPlus}
        memo={props.characterInfo.memo}
      />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <>
          <ButtonBase
            onClick={(e) => props.openShortCutMenu(e.currentTarget)}
            sx={{
              borderRadius: '50%',
              width: 40,
              height: 40,
              marginRight: '8px'
            }}
          >
            <LowPriorityIcon sx={{ fontSize: '24px' }} />
          </ButtonBase>

          <ShortcutMenu
            shortcutMenuElm={props.shortcutMenuElm}
            closeShortCutMenu={props.closeShortCutMenu}
            onClickShortcutAreaButton={props.onClickShortcutAreaButton}
            checkListData={props.checkListData}
          />
        </>

        <>
          <ButtonBase
            onClick={(e) => props.openSubMenu(e.currentTarget)}
            sx={{
              borderRadius: '50%',
              width: 40,
              height: 40,
            }}
          >
            <MoreVertIcon sx={{ fontSize: '24px' }} />
          </ButtonBase>

          <SubMenu
            subMenuElm={props.subMenuElm}
            closeSubMenu={props.closeSubMenu}
            onClickResetButton={props.onClickResetButton}
            onClickEditButton={props.onClickEditButton}
            onClickDeleteButton={props.onClickDeleteButton}
          />
        </>
      </Box>
    </Box>
  );
}

function CharacterInfo(
  props: {
    characterName: string;
    ngPlus: number;
    memo: string;
  }
) {
  return (
    <Box>
      <Text
        sx={{
          fontSize: '12px',
        }}
      >
        { `${props.characterName} (${props.ngPlus}회차)` }
      </Text>
      <Text
        sx={{
          fontSize: '11px',
          color: theme.color.text.dark,
        }}
      >
        { props.memo.length !== 0 ? props.memo : '-' }
      </Text>
    </Box>
  );
}

function ShortcutMenu(
  props: {
    shortcutMenuElm: HTMLElement | null;
    closeShortCutMenu: () => void;
    onClickShortcutAreaButton: (areaId: number) => void;
    checkListData: ResCheckListDetailArea[];
  }
) {
  return (
    <Menu
      anchorEl={props.shortcutMenuElm}
      onClose={props.closeShortCutMenu}
      horizontal='right'
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          width: 300,
          height: 464,
          padding: '8px 0',
        }}
      >
        { props.checkListData.map(item =>
          <ButtonBase
            key={item.areaId}
            onClick={() => {
              props.closeShortCutMenu();
              props.onClickShortcutAreaButton(item.areaId);
            }}
            sx={{
              width: 150,
              height: 32,
              fontSize: '12px',
              justifyContent: 'flex-start',
              paddingLeft: '8px',
            }}
          >
            { item.name }
          </ButtonBase>
        )}
      </Box>
    </Menu>
  );
}

function SubMenu(
  props: {
    subMenuElm: HTMLElement | null;
    closeSubMenu: () => void;
    onClickResetButton: () => void;
    onClickEditButton: () => void;
    onClickDeleteButton: () => void;
  }
) {
  return (
    <Menu
      anchorEl={props.subMenuElm}
      onClose={props.closeSubMenu}
      horizontal='right'
    >
      <Box
        sx={{
          width: 120,
          padding: '8px 0',
        }}
      >
        <SubMenuButton
          onClick={props.onClickResetButton}
          text='초기화하기'
        />
        <SubMenuButton
          onClick={props.onClickEditButton}
          text='수정하기'
        />
        <SubMenuButton
          onClick={props.onClickDeleteButton}
          text='삭제하기'
        />
      </Box>
    </Menu>
  );
}

function SubMenuButton(
  props: {
    onClick?: () => void;
    text: string;
  }
) {
  return (
    <ButtonBase
      onClick={props.onClick}
      sx={{
        width: '100%',
        height: 36,
        fontSize: '13px',
        borderBottom: `1px solid ${theme.color.border.default}`,
        '&:last-of-type': {
          borderBottom: 'none'
        }
      }}
    >
      { props.text }
    </ButtonBase>
  );
}