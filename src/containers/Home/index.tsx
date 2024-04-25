import { Box } from '@mui/material';

import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Box sx={{ padding: '16px' }}>
        <Box sx={{ marginBottom: '8px' }}>작업 예정</Box>

        <Box>- MAP ITEM data 추가해보고 UI 고민 필요</Box>
        <Box>- alert 처리를 snackBar로 변경</Box>
        <Box>- 유효성 검사 checker 모듈 제작</Box>
        <Box>- 회차 Input - 좀 더 편하게 변경 (현재 TextInput)</Box>
        <Box>- 체크리스트 Skip 기능</Box>
        <Box>- 체크리스트 templete 기능 (1회차, All보스런, Main보스런 등)</Box>
        <Box>- 버튼 disabled, loading 속성 추가</Box>

      </Box>
    </Layout>
  );
}