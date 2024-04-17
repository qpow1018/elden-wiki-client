import { Box } from '@mui/material';

import theme from '@/styles/theme';

export default function Header() {
  return (
    <Box
      sx={{
        height: theme.size.headerHeight,
        backgroundColor: theme.color.background.default,
      }}
    >
      헤더영역
    </Box>
  );
}