'use client';

import { Box } from '@mui/material';
import theme from '@/styles/theme';

import { useGetItemWeapons } from '@/queries';
import { ResWeaponWithSubCategory } from '@/types/api';
import { TypeItemIndexContents } from '@/types';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import EssentialDataError from '@/components/EssentialDataError';
import Text from '@/components/Base/Text';

import ItemIndex from './ItemIndex';

export default function Weapon() {
  const { data, isLoading, isError } = useGetItemWeapons<ResWeaponWithSubCategory[]>();

  return (
    <Layout>
      { (data !== undefined && isLoading === false && isError === false) ? (
        <MainView
          data={data}
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
    data: ResWeaponWithSubCategory[];
  }
) {

  function makeItemIndexContents() {
    const arr = [ ...props.data ];

    const newArr = arr.map(category => {
      const subContents = category.weapons.map(weapon => ({
        itemId: weapon.itemId,
        itemName: weapon.itemName,
      }));

      return {
        categoryId: category.id,
        categoryName: category.name,
        subContents: subContents,
      }
    });

    return newArr;
  }

  return (
    <Container>
      <Box
        sx={{
          padding: '16px'
        }}
      >
        <ItemIndex
          title='무기 목록'
          indexContents={makeItemIndexContents()}
        />
      </Box>

      <Box
        sx={{
          boxShadow: '0 0 1px red'
        }}
      >
        { props.data.map((category, categoryIndex) =>
          <Box
            key={category.id}
            sx={{
              borderBottom: '2px solid red',
              padding: '16px',
            }}
          >
            <CategoryInfoPanel
              index={`${categoryIndex + 1}.`}
              name={category.name}
              description={category.description}
            />

            <Box
              sx={{
                padding: '0 16px'
              }}
            >
              내부 목록
              { category.weapons.map(weapon =>
                <Box
                  key={weapon.itemId}
                >
                  { weapon.itemName }
                </Box>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </Container>
  );
}

function CategoryInfoPanel(
  props: {
    index: string;
    name: string;
    description: string | null;
  }
) {
  return (
    <Box>
      카테고리 정보

    </Box>
  );
}