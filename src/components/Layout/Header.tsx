import { Box } from '@mui/material';

import theme from '@/styles/theme';

import Text from '@/components/Base/Text';

export default function Header() {
  return (
    <Box
      sx={{
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        height: theme.size.headerHeight,
        backgroundColor: theme.color.background.default,
        padding: '0 16px',
      }}
    >
      <Text
        sx={{
          fontWeight: 500,
          fontSize: '16px',
        }}
      >
        EldenWiki
      </Text>
    </Box>
  );
}