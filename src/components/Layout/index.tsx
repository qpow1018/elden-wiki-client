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
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />

      <Box
        sx={{
          flex: 1,
          marginBottom: `${theme.size.bottomNaviHeight}px`,
        }}
      >
        { props.children }
      </Box>

      <BottomNavigation />
    </Box>
  );
}