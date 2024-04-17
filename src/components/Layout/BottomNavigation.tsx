import Link from 'next/link';
import { Box, ButtonBase, Typography } from '@mui/material';

import theme from '@/styles/theme';

import {
  Home as HomeIcon,
  Map as MapIcon,
  Dataset as GameDbIcon,
} from '@mui/icons-material';

export default function BottomNavigation() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: theme.size.bottomNaviHeight,
        backgroundColor: theme.color.background.default,
      }}
    >
      {/* <BottomNavigationButton
        iconComponent={<HomeIcon />}
        text='홈'
        routerLink='/'
      />
      <BottomNavigationButton
        iconComponent={<GameDbIcon />}
        text='DB'
        routerLink='/db'
      /> */}
      <BottomNavigationButton
        iconComponent={<MapIcon />}
        text='지도'
        routerLink='/map'
      />
      {/* <BottomNavigationButton
        iconComponent={<MapIcon />}
        text='체크리스트'
        routerLink='/map'
      />
      <BottomNavigationButton
        iconComponent={<MapIcon />}
        text='내 정보'
        routerLink='/map'
      /> */}
    </Box>
  );
}

function BottomNavigationButton(
  props: {
    iconComponent: React.ReactNode;
    text: string;
    routerLink: string;
  }
) {
  return (
    <Link
      href={props.routerLink}
    >
      <ButtonBase
        sx={{
          background: 'red',
          flex: 1,
        }}
      >
        <Box>
          { props.iconComponent }
        </Box>

        <Typography>
          { props.text }
        </Typography>

      </ButtonBase>
    </Link>
  );
}