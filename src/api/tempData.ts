// TODO 서버 구현 전까지 사용할 테스트용 데이터

import { ResMap } from './types';

import MapTest1 from '@/assets/images/map-test-1.jpg';
// import MapTest2 from '@/assets/images/map-test2.jpg';
// import MapTest3 from '@/assets/images/map-test3.jpg';

// Map 관련
const resMapData1 = {
  id: 1,
  name: '테스트 - 림그레이브 서부',
  imageUrl: MapTest1,
  width: 3304,
  height: 4642,
}

// const resMapData2 = {
//   id: 2,
//   name: '테스트 - 리에니에',
//   imageUrl: MapTest2,
//   width: 3401,
//   height: 8192,
// }

// const resMapData3 = {
//   id: 3,
//   name: '테스트 - 케일리드',
//   imageUrl: MapTest3,
//   width: 5292,
//   height: 4926,
// }

const resMapList: ResMap[] = [
  resMapData1,
  // resMapData2,
  // resMapData3,
];

// Item 관련
const resTestItems = [
  {
    // id: 1,
    locationType: '던전',
    icon: '던전아이콘',
    name: '높은 길 아래 동굴',
    coord: {
      x: 19,
      y: 50
    },
    items: [
      {
        itemType: '강화재료? 단석?',
        name: '단석[1]',
        count: 3,
      },
      {
        itemType: '강화재료? 단석?',
        name: '단석[2]',
        count: 1,
      },
      {
        itemType: '무기? 곡검?',
        name: '샴시르',
        count: 1,
      },
      {
        itemType: '탈리스만 - 필수? / 반필수?',
        name: '푸른 무희',
        count: 1,
      },
    ]
  }
];

export {
  resMapData1,
  // resMapData2,
  // resMapData3,
  resMapList,
  resTestItems,
}