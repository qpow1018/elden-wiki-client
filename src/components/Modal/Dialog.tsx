import { Box } from '@mui/material';
import theme from '@/styles/theme';

import Text from '@/components/Base/Text';
import Button, { ButtonTheme } from '@/components/Button';
import ModalBase from './ModalBase';

export default function Dialog(
  props: {
    isOpen: boolean;
    onClose: () => void;
    width?: number | string;
    title?: string;
    message: string;
    submitButtonText?: string;
    submitButtonTheme?: ButtonTheme;
    onSubmit: () => void;
  }
) {
  return (
    <ModalBase
      isOpen={props.isOpen}
      onClose={props.onClose}
      width={props.width}
    >
      <Box
        sx={{
          padding: '24px 16px 36px 16px'
        }}
      >
        { props.title !== undefined &&
          <Text
            sx={{
              fontSize: '15px',
              fontWeight: 700,
              marginBottom: '12px'
            }}
          >
            { props.title }
          </Text>
        }
        <Text
          sx={{
            fontSize: '14px',
            color: theme.color.text.secondary
          }}
        >
          { props.message }
        </Text>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          borderTop: `1px solid ${theme.color.border.dark}`,
          padding: '12px',
        }}
      >
        <Button
          onClick={props.onClose}
          theme={ButtonTheme.bdGray}
          sx={{ marginRight: '12px', }}
        >
          취소
        </Button>

        <Button
          onClick={props.onSubmit}
          theme={props.submitButtonTheme !== undefined ? props.submitButtonTheme : ButtonTheme.bgPri}
        >
          { props.submitButtonText !== undefined ? props.submitButtonText : '확인' }
        </Button>
      </Box>
    </ModalBase>
  );
}