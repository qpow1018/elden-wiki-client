import { ResItemLocation } from './index';
import {
  EnumImportance,

  EnumLocationType,
} from './define';

const limgraveItems: ResItemLocation[] = [
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: null,
    coord: { x: 0, y: 0 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 1, count: 1, isVisible: true },
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: 'test',
    displayName: null,
    description: null,
    coord: { x: 4009.23, y: 2604.62 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 1, count: 1, isVisible: true },
    ],
  },
]

// 림그레이브 서쪽 아이템
// const testMap1: ResMapItem[] = [
//   {
//     // id: 1,
//     location: {
//       type: '지하 묘지? 던전?',
//       name: '높은 길 아래 동굴',
//       x: 2210,
//       y: 485.71,
//       desc:'설명',
//       additionalIcon: '위? 아래?'
//     },
//     items: [
//       {
//         itemType: '강화재료? 단석?',
//         name: '단석[1]',
//         count: 3,
//       },
//       {
//         itemType: '강화재료? 단석?',
//         name: '단석[2]',
//         count: 1,
//       },
//       {
//         itemType: '무기? 곡검?',
//         name: '샴시르',
//         count: 1,
//       },
//       {
//         itemType: '탈리스만 - 필수? / 반필수?',
//         name: '푸른 무희',
//         count: 1,
//       },
//     ]
//   },
//   {
//     // id: 1,
//     location: {
//       type: '필드?',
//       name: '없음',
//       nickname: '흠??',
//       x: 1953,
//       y: 1358,
//       desc:'설명',
//       additionalIcon: '위? 아래?'
//     },
//     items: [
//       {
//         itemType: '강화재료? 단석?',
//         name: '단석[1]',
//         count: 1,
//       },
//     ]
//   },
//   {
//     // id: 1,
//     location: {
//       type: '필드?',
//       name: '없음',
//       nickname: '흠??',
//       x: 1088,
//       y: 2796,
//       desc:'설명',
//       additionalIcon: '위? 아래?'
//     },
//     items: [
//       {
//         itemType: '강화재료? 단석?',
//         name: '단석[1]',
//         count: 1,
//       },
//     ]
//   },
// ];


export default limgraveItems;