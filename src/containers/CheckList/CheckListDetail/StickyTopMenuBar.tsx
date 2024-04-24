import { Box } from '@mui/material';
import theme from '@/styles/theme';

export default function StickyTopMenuBar() {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: '-1px',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        padding: '0 16px',
        height: '52px',
        borderBottom: `1px solid ${theme.color.border.default}`,
        fontSize: '14px',
        backgroundColor: theme.color.background.base,
      }}
    >
      목록 바로가기 기능 / 스킵 표시 비표시 / 초기화 / 수정 / 삭제
    </Box>
  );
}