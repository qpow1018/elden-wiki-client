import { Box } from '@mui/material';

import theme from '@/styles/theme';

import { utils } from '@/libs';
import { ResItemLocation } from '@/tempDb/mapItem';
import itemDb from '@/tempDb/mapItem/items';
import {
  MainCategory,
  SubCategoryIngGeneralItem,
  // EnumImportance,
  // EnumStairs,
  EnumLocationType,
} from '@/tempDb/mapItem/define';

import Text from '@/components/Base/Text';

type ItemUiInfo = {
  name: string;
  color: string;
}

export default function ItemMarkerContainer(
  props: {
    scale: number;
    itemsData: ResItemLocation[];
  }
) {
  const markerDotSize = 14;

  function getMarkerScale(imageScale: number) {
    const scale = imageScale + (imageScale * (1 - imageScale));
    return utils.convertNumberWithDecimal(scale, 4);
  }

  function getTitleColorByLocationType(type: EnumLocationType) {
    switch (type) {
      case EnumLocationType.field: {
        return '#008f88';
      }
      case EnumLocationType.dungeon:
      case EnumLocationType.legacyDungeon:
      case EnumLocationType.boss: {
        return '#dd000b';
      }
      case EnumLocationType.painting: {
        return '#f16c00';
      }
      default: {
        return '#000'
      }
    }
  }

  function getItemUiInfo(itemId: number, count: number) {
    const itemInfo = itemDb[itemId];
    let name = itemInfo.name;
    if (count > 1) name = `${name}x${count}`;

    const color = getItemColorByCategory(itemInfo.mainCategory, itemInfo.subCategory);

    return {
      name: name,
      color: color,
    }
  }

  function getItemColorByCategory(mainCategory: number, subCategory: number | null) {
    switch (mainCategory) {
      case MainCategory.weapon:
      case MainCategory.subWeapon:
      case MainCategory.armor:
      case MainCategory.talisman: { // 무기, 방어구, 탈리스만
        return '#0079FF';
      }
      case MainCategory.generalItem: { // 일반 아이템
        return getGeneralItemColorBySubCategory(subCategory);
      }
      case MainCategory.skill: { // 전회
        return '#DB30EF';
      }
      case MainCategory.spiritAshes: { // 뼛가루
        return '#B31312';
      }
      case MainCategory.npc: { // NPC, 상인
        return '#008f88';
      }
      default: {
        return '#000';
      }
    }
  }

  function getGeneralItemColorBySubCategory(subCategory: number | null) {
    switch (subCategory) {
      case SubCategoryIngGeneralItem.weaponUpgrade:
      case SubCategoryIngGeneralItem.spiritUpgrade: { // 단석, 은방울꽃
        return '#520120';
      }
      case SubCategoryIngGeneralItem.core:
      case SubCategoryIngGeneralItem.event:
      case SubCategoryIngGeneralItem.cristalTears: { // 중요 아이템
        return '#F07D11';
      }
      default: {
        return '#000';
      }
    }
  }

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
    >
      { props.itemsData.map((data, index) =>
        <ItemMarker
          key={index}
          scale={props.scale}
          markerDotSize={markerDotSize}
          markerScale={getMarkerScale(props.scale)}
          coordX={data.coord.x}
          coordY={data.coord.y}
          title={data.displayName}
          titleColor={getTitleColorByLocationType(data.type)}
          items={data.items}
          getItemUiInfo={getItemUiInfo}
        />
      )}
    </Box>
  );
}

function ItemMarker(
  props: {
    scale: number;
    markerDotSize: number;
    markerScale: number;
    coordX: number;
    coordY: number;
    title: string | null;
    titleColor: string;
    items: { itemId: number; count: number; isVisible: boolean; }[];
    getItemUiInfo: (itemId: number, count: number) => ItemUiInfo;
  }
) {
  const { scale, markerDotSize, markerScale, coordX, coordY, title, titleColor, items, getItemUiInfo } = props;

  return (
    <Box
      sx={{
        position: 'absolute',
        transformOrigin: `${markerDotSize / 2}px ${markerDotSize / 2}px`,
      }}
      style={{
        top: `calc(${coordY * scale}px - ${markerDotSize / 2}px)`,
        left: `calc(${coordX * scale}px - ${markerDotSize / 2}px)`,
        transform: `scale(${markerScale})`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <MarkerDot
          titleColor={titleColor}
          markerDotSize={markerDotSize}
        />

        { (title !== null) &&
          <Text
            sx={{
              fontSize: '14px',
              fontWeight: 700,
              height: `${markerDotSize}px`,
              lineHeight: `${markerDotSize}px`,
              marginLeft: '4px',
              color: titleColor,
              textShadow: '-0.8px -0.8px 0 #fff, 0.8px -0.8px 0 #fff, -0.8px 0.8px 0 #fff, 0.8px 0.8px 0 #fff',
            }}
          >
            { title }
          </Text>
        }
      </Box>

      { items.length > 0 &&
        <Box
          sx={{
            marginTop: '2px',
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '16px',
            textShadow: '-0.8px -0.8px 0 #fff, 0.8px -0.8px 0 #fff, -0.8px 0.8px 0 #fff, 0.8px 0.8px 0 #fff',
          }}
        >
          { items.map((item, index) => {
            const itemInfo = getItemUiInfo(item.itemId, item.count);

            return (
              <Text
                key={index}
                sx={{
                  display: item.isVisible === true ? 'block' : 'none',
                  color: itemInfo.color,
                }}
              >
                { itemInfo.name }
              </Text>
            )
          })}
        </Box>
      }
    </Box>
  );
}

function MarkerDot(
  props: {
    titleColor: string;
    markerDotSize: number;
  }
) {
  return (
    <Box
      sx={{
        borderRadius: '50%',
        width: props.markerDotSize,
        height: props.markerDotSize,
        backgroundColor: props.titleColor,
        border: `2px solid #fff`,
      }}
    />
  );
}