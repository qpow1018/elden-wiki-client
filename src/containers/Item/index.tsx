'use client';

import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { useGetMainCategories } from '@/queries';
import { ResItemMainCategory } from '@/types/api';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import EssentialDataError from '@/components/EssentialDataError';
import Text from '@/components/Base/Text';
import Link from '@/components/Base/Link';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Item() {
  const { data: itemCategories, isLoading, isError } = useGetMainCategories<ResItemMainCategory[]>();

  return (
    <Layout>
      { (itemCategories !== undefined && isLoading === false && isError === false) ? (
        <MainView
          itemCategories={itemCategories}
        />
      ) : (
        <EssentialDataError
          isLoading={isLoading}
          isError={isError}
        />
      )}
    </Layout>
  );
}

function MainView(
  props: {
    itemCategories: ResItemMainCategory[];
  }
) {
  return (
    <Container>
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

      { props.itemCategories.map((item, index) =>
        <ItemMainCategoryItem
          key={item.id}
          href={`/item/category/${item.categoryNo}`}
          text={`${index + 1}. ${item.name}`}
        />
      )}
    </Container>
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