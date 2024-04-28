import { ResItemLocation } from './index';
import {
  EnumImportance,
  EnumStairs,
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
    name: '이건 name',
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
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: '이건 displayName',
    description: null,
    coord: { x: 3688.33, y: 2791.67 },
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
    name: '둘다 있음',
    displayName: '둘다 있음',
    description: null,
    coord: { x: 3145, y: 3011.67 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 1, count: 1, isVisible: true },
    ],
  },
]

export default limgraveItems;