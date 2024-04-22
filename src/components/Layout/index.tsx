'use client';

import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import theme from '@/styles/theme';

import Header from './Header';
import BottomNavigation from './BottomNavigation';

export default function Layout(
  props: {
    children: React.ReactNode;
  }
) {
  // TODO mapViewerElm.offsetTop 값이 desktop에서도 mobile값을 가져오는 이슈 (useWindowSize)
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  return (
    <>
      { isRender === true && 
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
      }
    </>
  );
}