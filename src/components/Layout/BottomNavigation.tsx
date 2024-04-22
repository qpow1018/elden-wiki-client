import { Box } from '@mui/material';

import theme from '@/styles/theme';

import Link from '@/components/Base/Link';
import Text from '@/components/Base/Text';

import {
  Home as HomeIcon,
  Map as MapIcon,
  Dataset as GameDbIcon,
  Checklist as ChecklistIcon,
  Feed as BoardIcon,
} from '@mui/icons-material';

export default function BottomNavigation() {
  return (
    <Box
      sx={{
        position: 'sticky',
        bottom: 0,
        width: '100%',
        flexShrink: 0,
        height: theme.size.bottomNaviHeight,
        backgroundColor: theme.color.background.default,
        display: 'flex',
      }}
    >
      <BottomNavigationButton
        iconComponent={<HomeIcon />}
        text='홈'
        routerLink='/'
      />
      {/* <BottomNavigationButton
        iconComponent={<GameDbIcon />}
        text='DB'
        routerLink='/db'
      /> */}
      <BottomNavigationButton
        iconComponent={<MapIcon />}
        text='지도'
        routerLink='/map'
      />
      <BottomNavigationButton
        iconComponent={<ChecklistIcon />}
        text='체크리스트'
        routerLink='/check-list'
      />
      {/* <BottomNavigationButton
        iconComponent={<BoardIcon />}
        text='게시판'
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
      sx={{
        flex: 1,
        height: '100%',
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: theme.color.text.secondary,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            marginBottom: '2px',
            '& > .MuiSvgIcon-root': {
              fontSize: '28px',
            }
          }}
        >
          { props.iconComponent }
        </Box>
        <Text
          sx={{
            fontSize: '10px',
            fontWeight: 500,
          }}
        >
          { props.text }
        </Text>
      </Box>
    </Link>
  );
}