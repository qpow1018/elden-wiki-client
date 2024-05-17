import { useState } from 'react';
import { Box, SxProps } from '@mui/material';

import theme from '@/styles/theme';

export default function Textarea(
  props: {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    sx?: SxProps;
  }
) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Box
      sx={[
        {
          overflow: 'hidden',
          borderRadius: theme.common.borderRadius,
          width: '100%',
          height: 360,
          border: `1px solid ${theme.color.border.default}`,
          color: theme.color.text.primary,
          fontSize: '14px',
          lineHeight: theme.common.lineHeight,
          '& > textarea': {
            padding: '10px 12px',
            resize: 'none',
            width: '100%',
            height: '100%',
            fontFamily: theme.common.fontFamily,
            letterSpacing: theme.common.letterSpacing,
            fontSize: 'inherit',
            color: 'inherit',
            background: 'transparent',
            border: 'none',
            '&:focus': {
              outline: 'none'
            }
          }
        },
        isFocused === true && {
          borderColor: theme.color.border.light,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx])
      ]}
    >
      <textarea
        spellCheck={'false'}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </Box>
  );
}