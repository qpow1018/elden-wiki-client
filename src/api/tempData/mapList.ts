import { ResMap } from '../types';

import MapTest1 from '@/assets/images/map-test-1.jpg';
// import MapTest2 from '@/assets/images/map-test2.jpg';
// import MapTest3 from '@/assets/images/map-test3.jpg';

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

export default resMapList;