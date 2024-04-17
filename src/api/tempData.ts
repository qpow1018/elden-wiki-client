// TODO 서버 구현 전까지 사용할 테스트용 데이터

import { ResMap } from './types';

import MapTest1 from '@/assets/images/map-test1.jpg';
import MapTest2 from '@/assets/images/map-test2.jpg';
import MapTest3 from '@/assets/images/map-test3.jpg';

const resMapData1 = {
  id: 1,
  name: '테스트 - 에인세르 강',
  imageUrl: MapTest1,
  width: 1965,
  height: 1275,
}

const resMapData2 = {
  id: 2,
  name: '테스트 - 리에니에',
  imageUrl: MapTest2,
  width: 3401,
  height: 8192,
}

const resMapData3 = {
  id: 3,
  name: '테스트 - 케일리드',
  imageUrl: MapTest3,
  width: 5292,
  height: 4926,
}

const resMapList: ResMap[] = [
  resMapData1,
  resMapData2,
  resMapData3,
];

export {
  resMapData1,
  resMapData2,
  resMapData3,
  resMapList,
}