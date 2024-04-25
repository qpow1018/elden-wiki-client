import { Popover } from '@mui/material';
import theme from '@/styles/theme';

export default function Menu(
  props: {
    anchorEl: HTMLElement | null;
    onClose: () => void;
    vertical?: 'bottom' | 'top';
    horizontal?: 'left' | 'right';
    children?: React.ReactNode;
  }
) {
  return (
    <Popover
      open={Boolean(props.anchorEl)}
      anchorEl={props.anchorEl}
      onClose={props.onClose}
      anchorOrigin={{
        vertical: props.vertical !== undefined ? props.vertical : 'bottom',
        horizontal: props.horizontal !== undefined ? props.horizontal : 'left',
      }}
      sx={{
        '& > .MuiPaper-root': {
          backgroundColor: theme.color.background.popover,
          color: theme.color.text.primary,
        }
      }}
    >
      { props.children }
    </Popover>
  );
}