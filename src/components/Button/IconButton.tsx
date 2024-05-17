import { ButtonBase, SxProps } from '@mui/material';
import theme from '@/styles/theme';

export default function IconButton(
  props: {
    onClick?: () => void;
    children: React.ReactNode;
    sx?: SxProps;
  }
) {
  return (
    <ButtonBase
      onClick={props.onClick}
      sx={[
        {
          flexShrink: 0,
          borderRadius: '50%',
          transition: theme.common.transition,
          width: `${theme.size.iconButtonSize}px`,
          height: `${theme.size.iconButtonSize}px`,
          backgroundColor: theme.color.dark.gray2,
          color: theme.color.text.primary,
          fontSize: '20px',
          '&:hover': {
            backgroundColor: theme.color.dark.gray3,
          },
          '& > .MuiSvgIcon-root': {
            fontSize: 'inherit',
          }
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
      ]}
    >
      { props.children }
    </ButtonBase>
  );
}