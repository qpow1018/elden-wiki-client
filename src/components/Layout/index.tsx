import { Box } from '@mui/material';

import theme from '@/styles/theme';

import Header from './Header';
import BottomNavigation from './BottomNavigation';

export default function Layout(
  props: {
    children: React.ReactNode;
  }
) {
  return (
    <Box>
      <Header />

      <Box
        sx={{
          minHeight: `calc(100svh - ${theme.size.headerHeight}px - ${theme.size.bottomNaviHeight}px)`,
        }}
      >
        { props.children }
      </Box>

      <BottomNavigation />
    </Box>
  );
}