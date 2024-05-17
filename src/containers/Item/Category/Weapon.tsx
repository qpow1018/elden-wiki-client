'use client';

import { useRouter } from 'next/navigation';
import React, { Box } from '@mui/material';
import theme from '@/styles/theme';

import { useGetItemWeapons } from '@/queries';
import { ResWeaponWithSubCategory, ResItemWeaponDetail } from '@/types/api';
import { TypeItemIndexContents } from '@/types';

import Layout from '@/components/Layout';
import Container from '@/components/Base/Container';
import EssentialDataError from '@/components/EssentialDataError';
import Text from '@/components/Base/Text';

import ItemIndex from './Common/ItemIndex';
import CategoryInfo from './Common/CategoryInfo';
import ItemDetailHeader from './Common/ItemDetailHeader';

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
  const router = useRouter();

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

  // TODO 맨 위로 버튼

  // TODO
  function handleClickItemIndex() {
    alert('목차 이동, anchor 활용?');
  }

  function goToCSubategoryEditPage(subCategoryNo: number) {
    router.push(`/item/category/sub-category-edit/${subCategoryNo}`);
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
          onClickItemIndex={handleClickItemIndex}
        />
      </Box>

      <Box
        sx={{
          padding: '16px 0 60px 0',
        }}
      >
        { props.data.map((category, categoryIndex) =>
          <Box
            key={category.id}
            sx={{
              marginBottom: '32px',
              '&:last-of-type': {
                marginBottom: 0,
              }
            }}
          >
            <CategoryInfo
              index={`${categoryIndex + 1}.`}
              name={category.name}
              description={category.description}
              onClickEditButton={() => goToCSubategoryEditPage(category.subCategoryNo)}
            />

            { category.weapons.map((weapon, weaponIndex) =>
              <WeaponDetail
                key={weapon.itemId}
                index={`${categoryIndex + 1}.${weaponIndex + 1}`}
                itemId={weapon.itemId}
                itemName={weapon.itemName}
                detail={weapon.detail}
              />
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
}

function WeaponDetail(
  props: {
    index: string;
    itemId: number;
    itemName: string;
    detail: ResItemWeaponDetail | null;
  }
) {
  return (
    <Box
      sx={{
        marginTop: '24px',
        padding: '0 16px',
      }}
    >
      <ItemDetailHeader
        index={props.index}
        itemName={props.itemName}
      />

      <Box>
        TODO 내용
      </Box>
    </Box>
  );
}