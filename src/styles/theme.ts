const theme = {
  color: {
    primary: {
      main: '#008f88', // rgb(0, 143, 136)
      light: 'rgba(0, 143, 136, 0.8)',
      faint: 'rgba(0, 143, 136, 0.08)',
    },
    secondary: {
      main: '#ca000a', // rgb(202, 0, 10)
      light: 'rgba(202, 0, 10, 0.8)',
      faint: 'rgba(202, 0, 10, 0.08)',
    },
    dark: {
      gray0: '#0b0b0b',
      gray1: '#1f1f1f',
      gray2: '#292929',
      gray3: '#3c3c3c',
      gray4: '#464646',
      gray5: '#505050',
    },
    background: {
      default: '#292929',
      base: '#1f1f1f',
      overlay: 'rgba(0, 0, 0, 0.4)',
      popover: '#464646',
    },
    text: {
      primary: '#d4d4d4',
      secondary: '#b6b6b6',
      dark: '#999999',
      light: '#e7e7e7',
    },
    border: {
      default: '#414141',
      light: '#686868',
      dark: '#2d2d2d',
    },
  },
  size: {
    headerHeight: 56,
    bottomNaviHeight: 64,
    maxContainerWidth: 1000,
    buttonHeight: 40,
    iconButtonSize: 36,
    inputHeight: 48,
    checkListStickyHeaderHeight: 52,
    modalHeaderHeight: 52,
  },
  common: {
    fontFamily: `'Noto Sans KR', sans-serif`,
    letterSpacing: '-0.3px',
    borderRadius: '4px',
    transition: '0.25s ease',
  },
  zIndex: {
    fixedLoading: 1000,
  },
}

export default theme;