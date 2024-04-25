import { Box, Modal } from '@mui/material';
import theme from '@/styles/theme';

export default function ModalBase(
  props: {
    isOpen: boolean;
    onClose: () => void;
    width?: number | string;
    children?: React.ReactNode;
  }
) {
  return (
    <Modal
      open={props.isOpen}
      onClose={props.onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '.MuiBackdrop-root': {
          backgroundColor: theme.color.background.overlay,
        },
      }}
    >
      <div style={{ outline: 'none', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              borderRadius: theme.common.borderRadius,
              backgroundColor: theme.color.background.default,
              marginBottom: '60px',
              width: '90%',
              maxWidth: props.width !== undefined ? props.width : 480,
            }}
          >
            { props.children }
          </Box>
        </Box>
      </div>
    </Modal>
  );
}