import { Box } from '@mui/material';
import theme from '@/styles/theme';

import IconButton from '@/components/Button/IconButton';
import Text from '@/components/Base/Text';

import EditIcon from '@mui/icons-material/Edit';

export default function ItemDetailHeader(
  props: {
    index: string;
    itemName: string;
  }
) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '6px',
        borderBottom: `1px solid ${theme.color.border.default}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '16px',
          fontWeight: 700,
        }}
      >
        <Text
          sx={{
            color: theme.color.primary.main,
            marginRight: '8px',
          }}
        >
          { props.index }
        </Text>
        <Text>
          { props.itemName }
        </Text>
      </Box>

      <EditButton
      
      />
    </Box>
  );
}

function EditButton(
  props: {
    // onClick: () => void;
  }
) {
  return (
    <IconButton
      // onClick={props.onClick}
      sx={{
        width: '28px',
        height: '28px',
        fontSize: '16px',
        backgroundColor: 'transparent',
      }}
    >
      <EditIcon />
    </IconButton>
  );
}