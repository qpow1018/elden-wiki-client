import { Box, SxProps } from '@mui/material';

export default function FormRow(
  props: {
    children?: React.ReactNode;
    sx?: SxProps;
  }
) {
  return (
    <Box
      sx={[
        {
          marginBottom: '20px',
          '&:last-of-type': {
            marginBottom: '0',
          }
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
      ]}
    >
      { props.children }
    </Box>
  );
}