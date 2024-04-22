import Link from 'next/link';

import { Box, ButtonBase, SxProps } from '@mui/material';
import React from 'react';

export default function BaseLink(
  props: {
    href: string;
    children: React.ReactNode;
    sx?: SxProps;
  }
) {
  return (
    <Link href={props.href} className='el-base-link'>
      <Box
        sx={[
          ...(Array.isArray(props.sx) ? props.sx : [props.sx])
        ]}
      >
        { props.children }
      </Box>
    </Link>
  );
}