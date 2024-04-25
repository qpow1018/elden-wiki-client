import { useState } from 'react';
import { Box, ButtonBase } from '@mui/material';
import theme from '@/styles/theme';

import { ResCheckListDetailArea } from '@/tempDb/checkList/checkListDB';

import Text from '@/components/Base/Text';
import Menu from '@/components/Menu';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function StickyTopMenuBar(
  props: {
    checkListData: ResCheckListDetailArea[];
    onClickAreaShortcutButton: (areaId: number) => void;
  }
) {
  const [areaShortcutEl, setAreaShortcutEl] = useState<HTMLElement | null>(null);

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
      }}
    >
      <AreaShortcut
        areaShortcutEl={areaShortcutEl}
        onClickOpenButton={(elm) => setAreaShortcutEl(elm)}
        onClose={() => setAreaShortcutEl(null)}
        checkListData={props.checkListData}
        onClickAreaShortcutButton={(areaId) => {
          props.onClickAreaShortcutButton(areaId);
          setAreaShortcutEl(null);
        }}
      />

      <Box>
        초기화 / 수정 / 삭제
      </Box>
    </Box>
  );
}

function AreaShortcut(
  props: {
    areaShortcutEl: HTMLElement | null;
    onClickOpenButton: (elm: HTMLElement) => void;
    onClose: () => void;
    checkListData: ResCheckListDetailArea[];
    onClickAreaShortcutButton: (areaId: number) => void;
  }
) {
  return (
    <>
      <Box
        onClick={(e) => props.onClickOpenButton(e.currentTarget)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '6px 16px',
        }}
      >
        <Text
          sx={{
            fontSize: '13px',
          }}
        >
          지역 바로가기
        </Text>
        <KeyboardArrowRightIcon
          sx={{
            fontSize: '16px',
          }}
        />
      </Box>

      <Menu
        anchorEl={props.areaShortcutEl}
        onClose={props.onClose}
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
            <AreaButton
              key={item.areaId}
              onClick={() => props.onClickAreaShortcutButton(item.areaId)}
              name={item.name}
            />
          )}
        </Box>
      </Menu>
    </>
  );
}

function AreaButton(
  props: {
    onClick: () => void;
    name: string;
  }
) {
  return (
    <ButtonBase
      onClick={props.onClick}
      sx={{
        width: 150,
        height: 32,
        fontSize: '12px',
        justifyContent: 'flex-start',
        paddingLeft: '8px',
      }}
    >
      { props.name }
    </ButtonBase>
  );
}