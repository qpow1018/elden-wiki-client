import { Box } from '@mui/material';
import theme from '@/styles/theme';

import IconButton from '@/components/Button/IconButton';
import Text from '@/components/Base/Text';

import EditIcon from '@mui/icons-material/Edit';

export default function CategoryInfo(
  props: {
    index: string;
    name: string;
    description: string | null;
    onClickEditButton: () => void;
  }
) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: theme.color.background.default,
          height: 56,
          padding: '0 12px 0 16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            fontWeight: 700,
          }}
        >
          <Text
            sx={{
              color: theme.color.primary.main,
              marginRight: '6px',
            }}
          >
            { props.index }
          </Text>
          <Text>
            { props.name }
          </Text>
        </Box>

        <EditButton
          onClick={props.onClickEditButton}
        />
      </Box>

      <Box
        sx={{
          padding: '16px 16px 24px 16px',
          borderBottom: `1px solid ${theme.color.border.default}`,
        }}
      >
        <Text
          sx={{
            fontSize: '14px',
            whiteSpace: 'pre-wrap',
          }}
        >
          { props.description !== null ? props.description : '카테고리 설명이 없습니다.' }
        </Text>
      </Box>
    </>
  );
}

function EditButton(
  props: {
    onClick: () => void;
  }
) {
  return (
    <IconButton
      onClick={props.onClick}
      sx={{
        width: '40px',
        height: '40px',
        fontSize: '22px'
      }}
    >
      <EditIcon />
    </IconButton>
  );
}