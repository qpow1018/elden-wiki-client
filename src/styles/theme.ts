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
    },
    text: {
      primary: '#f1f1f1',
      secondary: '#cacaca',
      dark: '#a3a3a3',
    },
    border: {
      default: '#505050',
      light: '#818181',
      dark: '#3c3c3c',
    },
  },
  size: {
    headerHeight: 56,
    bottomNaviHeight: 64,
    maxContainerWidth: 1000,
    buttonHeight: 40,
    inputHeight: 48,


    modalHeaderHeight: 48,
    iconButtonSize: 36,
  },
  common: {
    fontFamily: `'Noto Sans KR', sans-serif`,
    letterSpacing: '-0.3px',
    borderRadius: '4px',
    transition: '0.25s ease',
  },
  zIndex: {
    fixedLoading: 5000,
  },
}

export default theme;