import { StaticImageData } from 'next/image';

import MapImg1 from '@/assets/images/maps/1_limgrave.webp';
import MapImg2 from '@/assets/images/maps/2_weeping_peninsula.webp';
import MapImg3 from '@/assets/images/maps/3_stormveil_castle.webp';
import MapImg4 from '@/assets/images/maps/4_liurnia_east_west.webp';
import MapImg5 from '@/assets/images/maps/5_liurnia_north.webp';
import MapImg6 from '@/assets/images/maps/6_ainsel_river.webp';
import MapImg7 from '@/assets/images/maps/7_siofra_river.webp';
import MapImg8 from '@/assets/images/maps/8_caelid.webp';
import MapImg9 from '@/assets/images/maps/9_nokron.webp';
import MapImg10 from '@/assets/images/maps/10_deeproot_depths.webp';
import MapImg11 from '@/assets/images/maps/11_altus_plateau.webp';
import MapImg12 from '@/assets/images/maps/12_mt_gelmir.webp';
import MapImg13 from '@/assets/images/maps/13_leyndell_outskirts.webp';
import MapImg14 from '@/assets/images/maps/14_leyndell_royal_capital.webp';
import MapImg15 from '@/assets/images/maps/15_ainsel_river_main.webp';
import MapImg16 from '@/assets/images/maps/16_lake_of_rot.webp';
import MapImg17 from '@/assets/images/maps/17_moonlight_altar.webp';
import MapImg19 from '@/assets/images/maps/19_greyoll_dragonbarrow.webp';
import MapImg20 from '@/assets/images/maps/20_forbidden_lands.webp';
import MapImg21 from '@/assets/images/maps/21_mountaintops_of_the_giants.webp';
import MapImg22 from '@/assets/images/maps/22_consecrated_snowfield.webp';
import MapImg23 from '@/assets/images/maps/23_crumbling_farum_azula.webp';
import MapImg24 from '@/assets/images/maps/24_mohgwyn_palace.webp';
import MapImg25 from '@/assets/images/maps/25_miquella_haligtree.webp';

export type ResMap = {
  id: number;
  mapNo: number;
  name: string;
  imageUrl: StaticImageData;
  width: number;
  height: number;
}

// 림그레이브
const resMapData1 = {
  id: 1,
  mapNo: 1,
  name: '림그레이브',
  imageUrl: MapImg1,
  width: 5100,
  height: 4860,
}

// 흐느낌의 반도
const resMapData2 = {
  id: 2,
  mapNo: 2,
  name: '흐느낌의 반도',
  imageUrl: MapImg2,
  width: 4200,
  height: 4200,
}

// 스톰빌 성
const resMapData3 = {
  id: 3,
  mapNo: 3,
  name: '스톰빌 성',
  imageUrl: MapImg3,
  width: 4350,
  height: 2160,
}

// 리에니에 동, 서부
const resMapData4 = {
  id: 4,
  mapNo: 4,
  name: '리에니에 동, 서부',
  imageUrl: MapImg4,
  width: 6000,
  height: 8400,
}

// 리에니에 북부
const resMapData5 = {
  id: 5,
  mapNo: 5,
  name: '리에니에 북부',
  imageUrl: MapImg5,
  width: 4590,
  height: 2850,
}

// 에인세르 강
const resMapData6 = {
  id: 6,
  mapNo: 6,
  name: '에인세르 강',
  imageUrl: MapImg6,
  width: 2010,
  height: 1350,
}

// 시프라 강
const resMapData7 = {
  id: 7,
  mapNo: 7,
  name: '시프라 강',
  imageUrl: MapImg7,
  width: 2880,
  height: 2850,
}

// 케일리드
const resMapData8 = {
  id: 8,
  mapNo: 8,
  name: '케일리드',
  imageUrl: MapImg8,
  width: 6300,
  height: 5340,
}

// 영원한 도읍 노크론
const resMapData9 = {
  id: 9,
  mapNo: 9,
  name: '영원한 도읍 노크론',
  imageUrl: MapImg9,
  width: 2730,
  height: 3000,
}

// 깊은 뿌리 밑바닥
const resMapData10 = {
  id: 10,
  mapNo: 10,
  name: '깊은 뿌리 밑바닥',
  imageUrl: MapImg10,
  width: 4500,
  height: 2700,
}

// 알터 고원
const resMapData11 = {
  id: 11,
  mapNo: 11,
  name: '알터 고원',
  imageUrl: MapImg11,
  width: 6000,
  height: 4770,
}

// 겔미어 화산
const resMapData12 = {
  id: 12,
  mapNo: 12,
  name: '겔미어 화산',
  imageUrl: MapImg12,
  width: 3270,
  height: 2940,
}

// 로데일 외곽
const resMapData13 = {
  id: 13,
  mapNo: 13,
  name: '로데일 외곽',
  imageUrl: MapImg13,
  width: 3600,
  height: 3300,
}

// 도읍 로데일
const resMapData14 = {
  id: 14,
  mapNo: 14,
  name: '도읍 로데일',
  imageUrl: MapImg14,
  width: 2400,
  height: 2100,
}

// 에인세르 강 본류
const resMapData15 = {
  id: 15,
  mapNo: 15,
  name: '도읍 로데일',
  imageUrl: MapImg15,
  width: 2550,
  height: 1440,
}

// 부패한 호수
const resMapData16 = {
  id: 16,
  mapNo: 16,
  name: '부패한 호수',
  imageUrl: MapImg16,
  width: 2160,
  height: 2550,
}

// 월광의 제단
const resMapData17 = {
  id: 17,
  mapNo: 17,
  name: '월광의 제단',
  imageUrl: MapImg17,
  width: 2700,
  height: 2160,
}

// 흉조가 버려진 지하
const resMapData18 = {
  id: 18,
  mapNo: 18,
  name: '흉조가 버려진 지하',
  imageUrl: MapImg14,
  width: 2400,
  height: 2100,
}

// 그레이오르의 용총
const resMapData19 = {
  id: 19,
  mapNo: 19,
  name: '그레이오르의 용총',
  imageUrl: MapImg19,
  width: 4200,
  height: 3750,
}

// 금역
const resMapData20 = {
  id: 20,
  mapNo: 20,
  name: '금역',
  imageUrl: MapImg20,
  width: 3750,
  height: 3300,
}

// 거인들의 산령
const resMapData21 = {
  id: 21,
  mapNo: 21,
  name: '거인들의 산령',
  imageUrl: MapImg21,
  width: 4800,
  height: 5160,
}

// 구별된 설원
const resMapData22 = {
  id: 22,
  mapNo: 22,
  name: '거인들의 산령',
  imageUrl: MapImg22,
  width: 3330,
  height: 4230,
}

// 무너지는 파름 아즈라
const resMapData23 = {
  id: 23,
  mapNo: 23,
  name: '무너지는 파름 아즈라',
  imageUrl: MapImg23,
  width: 1950,
  height: 2085,
}

// 모그윈 왕조
const resMapData24 = {
  id: 24,
  mapNo: 24,
  name: '모그윈 왕조',
  imageUrl: MapImg24,
  width: 2220,
  height: 1950,
}

// 미켈라의 성수
const resMapData25 = {
  id: 25,
  mapNo: 25,
  name: '미켈라의 성수',
  imageUrl: MapImg25,
  width: 2400,
  height: 2400,
}

// 재의 도읍 로데일
const resMapData26 = {
  id: 26,
  mapNo: 26,
  name: '재의 도읍 로데일',
  imageUrl: MapImg14,
  width: 2400,
  height: 2100,
}

const resMapList: ResMap[] = [
  resMapData1,
  resMapData2,
  resMapData3,
  resMapData4,
  resMapData5,
  resMapData6,
  resMapData7,
  resMapData8,
  resMapData9,
  resMapData10,
  resMapData11,
  resMapData12,
  resMapData13,
  resMapData14,
  resMapData15,
  resMapData16,
  resMapData17,
  resMapData18,
  resMapData19,
  resMapData20,
  resMapData21,
  resMapData22,
  resMapData23,
  resMapData24,
  resMapData25,
  resMapData26,
];

export default resMapList;