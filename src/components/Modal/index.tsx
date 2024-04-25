import { Box, ButtonBase } from '@mui/material';
import theme from '@/styles/theme';

import Text from '@/components/Base/Text';
import ModalBase from './ModalBase';

import CloseIcon from '@mui/icons-material/Close';

export default function Modal(
  props: {
    isOpen: boolean;
    onClose: () => void;
    width?: number | string;
    title: string;
    children?: React.ReactNode;
  }
) {
  return (
    <ModalBase
      isOpen={props.isOpen}
      onClose={props.onClose}
      width={props.width}
    >
      <ModalHeader
        title={props.title}
        onClose={props.onClose}
      />

      { props.children }
    </ModalBase>
  );
}

function ModalHeader(
  props: {
    title: string;
    onClose: () => void;
  }
) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 8px 0 16px',
        height: `${theme.size.modalHeaderHeight}px`,
        borderBottom: `1px solid ${theme.color.border.default}`,
      }}
    >
      <Text
        sx={{
          fontSize: '15px',
          fontWeight: 500,
        }}
      >
        {props.title}
      </Text>

      <ButtonBase
        onClick={props.onClose}
        sx={{
          borderRadius: '50%',
          transition: theme.common.transition,
          width: 36,
          height: 36,
          '&:hover': {
            color: theme.color.text.primary,
          }
        }}
      >
        <CloseIcon
          sx={{
            fontSize: '20px'
          }}
        />
      </ButtonBase>
    </Box>
  );
}