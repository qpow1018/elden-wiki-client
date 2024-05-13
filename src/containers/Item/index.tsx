'use client';

import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { useGetMainCategory } from '@/queries';
import { ResItemMainCategory, ResItemSubCategory } from '@/types/api';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import EssentialDataErrorBoundary from '@/components/EssentialDataErrorBoundary';
import Text from '@/components/Base/Text';
import Link from '@/components/Base/Link';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Item() {
  const { data: itemCategories, isLoading, isError } = useGetMainCategory<ResItemMainCategory[]>([]);

  return (
    <Layout>
      <Container>
        <EssentialDataErrorBoundary isLoading={isLoading} isError={isError}>
          <Box
            sx={{
              borderBottom: `1px solid ${theme.color.border.default}`,
              padding: '16px',
            }}
          >
            <Text
              sx={{
                fontSize: '12px',
                color: theme.color.text.dark,
              }}
            >
              아이템 DB 목록
            </Text>
          </Box>

          { itemCategories.map((item, index) =>
            <ItemMainCategoryItem
              key={item.id}
              href={`/item/category/${item.categoryNo}`}
              text={`${index + 1}. ${item.name}`}
            />
          )}
        </EssentialDataErrorBoundary>
      </Container>
    </Layout>
  );
}

function ItemMainCategoryItem(
  props: {
    href: string;
    text: string;
  }
) {
  return (
    <Link
      href={props.href}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${theme.color.border.dark}`,
        paddingRight: '4px',
        height: 44,
        padding: '0 16px',
      }}
    >
      <Text
        sx={{
          fontSize: '13px',
        }}
      >
        { props.text }
      </Text>
      <KeyboardArrowRightIcon
        sx={{
          fontSize: '18px',
          color: theme.color.text.dark,
        }}
      />
    </Link>
  );
}