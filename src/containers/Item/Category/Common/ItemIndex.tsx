import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { TypeItemIndexContents } from '@/types';

import Text from '@/components/Base/Text';

export default function ItemIndex(
  props: {
    title: string;
    indexContents: TypeItemIndexContents[];
    onClickItemIndex?: () => void;
  }
) {
  return (
    <Box
      sx={{
        border: `1px solid ${theme.color.border.default}`,
        borderRadius: theme.common.borderRadius,
        padding: '16px 12px',
      }}
    >
      <Text
        sx={{
          fontSize: '15px',
          marginBottom: '12px',
        }}
      >
        { props.title }
      </Text>

      { props.indexContents.map((content, contentIndex) =>
        <Box
          key={content.categoryId}
          sx={{
            fontSize: '14px',
            lineHeight: '22px',
            marginBottom: '12px',
            '&:last-of-type': {
              marginBottom: 0,
            }
          }}
        >
          <UpperText
            index={`${contentIndex + 1}.`}
            text={content.categoryName}
            onClickItemIndex={props.onClickItemIndex}
          />

          { content.subContents.map((item, itemIndex) =>
            <LowerText
              key={item.itemId}
              index={`${contentIndex + 1}.${itemIndex + 1}.`}
              text={item.itemName}
              onClickItemIndex={props.onClickItemIndex}
            />
          )}
        </Box>
      )}
    </Box>
  )
}

function UpperText(
  props: {
    index: string;
    text: string;
    onClickItemIndex?: () => void;
  }
) {
  return (
    <Box
      onClick={props.onClickItemIndex}
      sx={{
        display: 'inline-flex',
        fontWeight: 500,
        paddingRight: '16px',
      }}
    >
      <Text
        sx={{
          color: theme.color.primary.main,
          marginRight: '4px',
        }}
      >
        { props.index }
      </Text>
      <Text>
        { props.text }
      </Text>
    </Box>
  );
}

function LowerText(
  props: {
    index: string;
    text: string;
    onClickItemIndex?: () => void;
  }
) {
  return (
    <Box>
      <Box
        onClick={props.onClickItemIndex}
        sx={{
          display: 'inline-flex',
          padding: '0 16px',
        }}
      >
        <Text
          sx={{
            color: theme.color.primary.main,
            marginRight: '4px',
          }}
        >
          { props.index }
        </Text>
        <Text>
          { props.text }
        </Text>
      </Box>
    </Box>
  );
}