import { ResItemLocation } from './index';
import {
  EnumImportance,
  EnumStairs,
  EnumLocationType,
} from './define';

const limgraveItems: ResItemLocation[] = [
  {
    importance: EnumImportance.high,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: null,
    coord: { x: 1505, y: 3365 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 1404, count: 1, isVisible: true }, // 백면 바레
    ],
  },
  {
    importance: EnumImportance.veryHigh,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: null,
    coord: { x: 1400, y: 2962 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 1431, count: 1, isVisible: true }, // 방랑 상인 칼레
      { itemId: 2201, count: 1, isVisible: true }, // 단석 [1]
      { itemId: 2048, count: 1, isVisible: true }, // 환혼의 종
      { itemId: 1292, count: 1, isVisible: true }, // 낙오된 늑대의 뼛가루
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '엘레의 교회에서 관문 쪽으로',
    coord: { x: 1593, y: 2597 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2855, count: 4, isVisible: false }, // 쿠쿠리
    ],
  },
  {
    importance: EnumImportance.veryHigh,
    type: EnumLocationType.field,
    name: '관문 앞 폐허',
    displayName: '관문 앞 폐허',
    description: null,
    coord: { x: 1786, y: 2211 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2003, count: 1, isVisible: true }, // 숫돌 소도
      { itemId: 868, count: 1, isVisible: true }, // 남각
      { itemId: 44, count: 1, isVisible: true }, // 군주군의 대검
      { itemId: 221, count: 1, isVisible: true }, // 철퇴
      { itemId: 2870, count: 3, isVisible: false }, // 유적석
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '보크 근처',
    coord: { x: 2325, y: 2519 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3346, count: 1, isVisible: false }, // 아르테리아의 잎
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.dungeon,
    name: '숲 옆 동굴',
    displayName: '숲 옆 동굴',
    description: '엘레의 교회 북쪽',
    coord: { x: 1404, y: 2512 },
    stairs: null,
    bossName: '파름 아즈라의 수인',
    bossRune: 1000,
    items: [
      { itemId: 2701, count: 1, isVisible: true }, // 금 간 항아리
      { itemId: 2875, count: 3, isVisible: false }, // 등불 돌
      { itemId: 3101, count: 1, isVisible: false }, // 황금의 룬 [1]
      { itemId: 724, count: 1, isVisible: true }, // 보스 - 염룡 표식의 탈리스만
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.dungeon,
    name: '폭풍 기슭의 지하 묘지',
    displayName: '폭풍 기슭의 지하 묘지',
    description: '엘레의 교회 북서쪽',
    coord: { x: 907, y: 2504 },
    stairs: null,
    bossName: '환수의 파수견',
    bossRune: 1300,
    items: [
      { itemId: 3367, count: 2, isVisible: false }, // 뿌리기름
      { itemId: 2221, count: 5, isVisible: true }, // 묘 은방울꽃
      { itemId: 3021, count: 1, isVisible: false }, // 말하는 머리 안녕
      { itemId: 2231, count: 1, isVisible: true }, // 영혼 묘 은방울꽃 [1]
      { itemId: 3323, count: 3, isVisible: false }, // 연기나비
      { itemId: 1281, count: 1, isVisible: true }, // 헤매는 귀인의 뼛가루
      { itemId: 1282, count: 1, isVisible: true }, // 보스 - 귀인 마술사의 뼛가루
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '해안가 북쪽 끝',
    coord: { x: 501, y: 2326 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3302, count: 1, isVisible: false }, // 흰 저민 고기
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '해안가 중간',
    coord: { x: 621, y: 3003 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3315, count: 1, isVisible: false }, // 문어알
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '해안가',
    coord: { x: 1105, y: 3518 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 1432, count: 1, isVisible: true }, // 방랑 민족 상인
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '해안가 맨 아래',
    coord: { x: 1571, y: 3703 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2606, count: 1, isVisible: true }, // 새 다리 황금 절임
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.dungeon,
    name: '해안 동굴',
    displayName: '해안 동굴',
    description: '해안가 / 용찬 교회 길뚫',
    coord: { x: 916, y: 3345 },
    stairs: null,
    bossName: '아인 두목 x2',
    bossRune: 900,
    items: [
      { itemId: 1401, count: 1, isVisible: true }, // 보크
      { itemId: 3315, count: 1, isVisible: false }, // 문어알
      { itemId: 2101, count: 1, isVisible: true }, // 재봉도구 + 재봉바늘
      { itemId: 3323, count: 1, isVisible: false }, // 연기나비
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '용찬 교회 쪽',
    coord: { x: 400, y: 4108 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3319, count: 4, isVisible: false }, // 큰 잠자리 머리
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '용찬 교회 쪽',
    coord: { x: 574, y: 4267 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2604, count: 1, isVisible: false }, // 용사의 고깃덩어리
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: '스카라베',
    description: '용찬 교회 쪽',
    coord: { x: 543, y: 4343 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2211, count: 1, isVisible: true }, // 색 잃은 단석 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '용찬 교회 쪽',
    coord: { x: 693, y: 4350 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2202, count: 1, isVisible: true }, // 단석 [2]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '다리 위',
    coord: { x: 2573, y: 2769 },
    stairs: EnumStairs.up,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2201, count: 1, isVisible: true }, // 단석 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '다리 옆',
    coord: { x: 2483, y: 2717 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 871, count: 1, isVisible: true }, // 디터미네이션
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.boss,
    name: null,
    displayName: '밤 기병',
    description: '다리 위',
    coord: { x: 2604, y: 2734 },
    stairs: null,
    bossName: '밤 기병',
    bossRune: 2400,
    items: [
      { itemId: 844, count: 1, isVisible: true }, // 연속 찌르기
    ],
  },
  {
    importance: EnumImportance.veryHigh,
    type: EnumLocationType.field,
    name: '제3 마리카 교회',
    displayName: null,
    description: '동부 교회',
    coord: { x: 4322, y: 1469 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2001, count: 1, isVisible: true }, // 영약의 성배병
      { itemId: 2501, count: 1, isVisible: true }, // 붉은 결정 물방울
      { itemId: 2009, count: 1, isVisible: true }, // 성배의 물방울
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '남쪽 해안가',
    coord: { x: 3947, y: 3634 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3101, count: 1, isVisible: false }, // 황금의 룬 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '남쪽 해안가 무덤',
    coord: { x: 3733, y: 3628 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3101, count: 4, isVisible: true }, // 황금의 룬 [1]
      { itemId: 3102, count: 2, isVisible: true }, // 황금의 룬 [2]
      { itemId: 3103, count: 1, isVisible: true }, // 황금의 룬 [3]
      { itemId: 3104, count: 1, isVisible: true }, // 황금의 룬 [4]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: '하이트 요새',
    displayName: null,
    description: '하이트 요새',
    coord: { x: 4556, y: 3251 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2010, count: 1, isVisible: true }, // 황금 종자
      { itemId: 3356, count: 8, isVisible: false }, // 피의 장미
      { itemId: 3206, count: 1, isVisible: true }, // 방랑 전사의 제작서 [6]
      { itemId: 942, count: 1, isVisible: true }, // 피의 참격
      { itemId: 2039, count: 1, isVisible: true }, // 덱타스의 부절 좌
      { itemId: 2201, count: 1, isVisible: true }, // 단석 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '하이트 요새 위',
    coord: { x: 4081, y: 2873 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 1433, count: 1, isVisible: true }, // 방랑 민족 상인
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: '작은 황금 나무',
    displayName: null,
    description: '작은 황금 나무',
    coord: { x: 4061, y: 2595 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2519, count: 1, isVisible: true }, // 큰 가시 깨진 물방울
      { itemId: 2505, count: 1, isVisible: true }, // 넘친 초록 결정 물방울
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: '시프라 강 우물',
    description: '시프라 강 우물',
    coord: { x: 4150, y: 2413 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '시프라 강 우물 동쪽',
    coord: { x: 4398, y: 2349 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3302, count: 3, isVisible: false }, // 흰 저민 고기
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '작은 황금 나무 근처',
    coord: { x: 3904, y: 2619 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 828, count: 1, isVisible: true }, // 드롭 어택
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '작은 황금 나무 근처',
    coord: { x: 3870, y: 2535 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3316, count: 3, isVisible: false }, // 가는 짐승 뼈
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '룬베어 나무',
    coord: { x: 3905, y: 2421 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3204, count: 1, isVisible: true }, // 방랑 전사의 제작서 [4]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '룬베어 많은 웅덩이',
    coord: { x: 3769, y: 2304 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2854, count: 5, isVisible: false }, // 투척 단검
      { itemId: 3105, count: 1, isVisible: true }, // 황금의 룬 [5]
      { itemId: 3329, count: 5, isVisible: false }, // 금 배설물
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '룬베어 많은 웅덩이 밑에',
    coord: { x: 3651, y: 2494 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3101, count: 1, isVisible: false }, // 황금의 룬 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '안개 낀 숲의 폐허 서쪽',
    coord: { x: 3482, y: 2819 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 818, count: 1, isVisible: false }, // 희생의 가는 가지
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: '안개 낀 숲의 폐허',
    displayName: '안개 낀 숲의 폐허',
    description: '안개 낀 숲의 폐허',
    coord: { x: 3687, y: 2793 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 744, count: 1, isVisible: true }, // 도끼의 탈리스만
      { itemId: 2202, count: 1, isVisible: true }, // 단석 [2]
      { itemId: 1405, count: 1, isVisible: true }, // 블라이드
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '케네스 하이트 남서쪽',
    coord: { x: 3102, y: 2368 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3101, count: 1, isVisible: false }, // 황금의 룬 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '케네스 하이트 밑에',
    coord: { x: 3590, y: 1797 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2902, count: 1, isVisible: false }, // 마력기름
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '케네스 하이트',
    coord: { x: 3619, y: 1743 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 1406, count: 1, isVisible: true }, // 케네스 하이트
      { itemId: 2010, count: 1, isVisible: true }, // 황금 종자
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '케네스 하이트 북쪽 무덤',
    coord: { x: 3658, y: 1438 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3281, count: 1, isVisible: true }, // 파리스의 제작서 [1]
      { itemId: 3101, count: 3, isVisible: true }, // 황금의 룬 [1]
      { itemId: 3102, count: 1, isVisible: true }, // 황금의 룬 [2]
      { itemId: 3104, count: 2, isVisible: true }, // 황금의 룬 [4]
      { itemId: 3106, count: 1, isVisible: true }, // 황금의 룬 [6]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: '전송문 (용총)',
    description: '마리카 교회 위',
    coord: { x: 4442, y: 1314 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: '스카라베',
    description: '마리카 교회 위',
    coord: { x: 4293, y: 1142 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 921, count: 1, isVisible: true }, // 신성한 칼날
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '마리카 교회 위',
    coord: { x: 4703, y: 1312 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2612, count: 1, isVisible: false }, // 독 이끼약
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '마리카 교회 왼쪽',
    coord: { x: 3830, y: 1146 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2202, count: 1, isVisible: false }, // 단석 [2]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '사냥개 가는 길',
    coord: { x: 2983, y: 3999 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3102, count: 1, isVisible: false }, // 황금의 룬 [2]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.boss,
    name: '주인 잃은 사냥개의 봉인감옥',
    displayName: '사냥개기사 대리윌',
    description: '주인 잃은 사냥개의 봉인감옥',
    coord: { x: 3041, y: 4327 },
    stairs: null,
    bossName: '사냥개기사 대리윌',
    bossRune: 1900,
    items: [
      { itemId: 135, count: 1, isVisible: true }, // 사냥개의 긴 이빨
      { itemId: 1405, count: 1, isVisible: true }, // 블라이드
      { itemId: 2212, count: 1, isVisible: true }, // 색 잃은 단석 [2]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '사냥개 밑에',
    coord: { x: 2979, y: 4631 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 231, count: 1, isVisible: true }, // 라지 클럽
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '사냥개 밑에',
    coord: { x: 2849, y: 4656 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2870, count: 3, isVisible: false }, // 유적석
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '룬베어로 변하는 애',
    coord: { x: 3138, y: 3878 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2045, count: 1, isVisible: true }, // 물방울 유생
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '왕가의 스크롤 요새',
    coord: { x: 3313, y: 3891 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2016, count: 1, isVisible: true }, // 왕가의 스크롤
      { itemId: 101, count: 1, isVisible: true }, // 그레이트 에페
      { itemId: 3101, count: 1, isVisible: false }, // 황금의 룬 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '왕가의 스크롤 요새',
    coord: { x: 3460, y: 4086 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2602, count: 1, isVisible: false }, // 별빛 조각
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '왕가의 스크롤 요새',
    coord: { x: 3297, y: 4178 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3101, count: 1, isVisible: false }, // 황금의 룬 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '아길 호수 아래',
    coord: { x: 2853, y: 3647 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3314, count: 1, isVisible: false }, // 게알
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: '스카라베',
    description: '아길 호수 아래',
    coord: { x: 2808, y: 3593 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 847, count: 1, isVisible: true }, // 거합
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '아길 호수 아래',
    coord: { x: 2746, y: 3800 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3301, count: 1, isVisible: false }, // 저민 고기
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '아길 호수 아래',
    coord: { x: 2385, y: 4235 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3314, count: 1, isVisible: false }, // 게알
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '아길 호수 아래',
    coord: { x: 2064, y: 3755 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 887, count: 1, isVisible: true }, // 그라비타스
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '아길 호수 아래',
    coord: { x: 1908, y: 3841 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3304, count: 3, isVisible: false }, // 짐승 고기 덩어리
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '아길 호수 아래',
    coord: { x: 1963, y: 3649 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 726, count: 1, isVisible: true }, // 성룡 표식의 탈리스만
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '아길 호수 아래',
    coord: { x: 2197, y: 3642 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3101, count: 1, isVisible: false }, // 황금의 룬 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.painting,
    name: null,
    displayName: '그림 - 귀소',
    description: '아길 호수 아래 - 그림 귀소 - 기도 스카라베',
    coord: { x: 2060, y: 3523 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 531, count: 1, isVisible: true }, // 그림 귀소 - 기도 스카라베
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '표류 묘지 뒤',
    coord: { x: 1850, y: 3469 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2201, count: 1, isVisible: false }, // 단석 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.boss,
    name: null,
    displayName: '트리가드',
    description: '트리가드',
    coord: { x: 1555, y: 3143 },
    stairs: null,
    bossName: '트리가드',
    bossRune: 3200,
    items: [
      { itemId: 313, count: 1, isVisible: true }, // 황금 할버드
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: '용이 불태운 폐허',
    displayName: '용이 불태운 폐허',
    description: '용이 불태운 폐허 - 전송문 있음',
    coord: { x: 2232, y: 3357 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3314, count: 1, isVisible: false }, // 게알
      { itemId: 2031, count: 1, isVisible: true }, // 석검 열쇠
      { itemId: 3102, count: 1, isVisible: false }, // 황금의 룬 [2]
      { itemId: 151, count: 1, isVisible: true }, // 트윈 블레이드
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '아길 호수',
    coord: { x: 2409, y: 3171 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3346, count: 1, isVisible: false }, // 아르테리아의 잎
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.boss,
    name: '비룡 아길',
    displayName: '비룡 아길',
    description: '아길 호수',
    coord: { x: 2103, y: 3027 },
    stairs: null,
    bossName: '비룡 아길',
    bossRune: 5000,
    items: [
      { itemId: 2025, count: 1, isVisible: true }, // 용의 심장
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.dungeon,
    name: '림그레이브 갱도',
    displayName: '림그레이브 갱도',
    description: '아길 호수 위쪽',
    coord: { x: 1956, y: 2522 },
    stairs: null,
    bossName: '채석꾼 트롤',
    bossRune: 1800,
    items: [
      { itemId: 3101, count: 1, isVisible: false }, // 황금의 룬 [1]
      { itemId: 3104, count: 1, isVisible: false }, // 황금의 룬 [4]
      { itemId: 2201, count: 9, isVisible: true }, // 단석 [1]
      { itemId: 2211, count: 1, isVisible: true }, // 색 잃은 단석 [1]
      { itemId: 2866, count: 5, isVisible: false }, // 큰 부스러기 휘석
      { itemId: 2865, count: 3, isVisible: false }, // 부스러기 휘석
      { itemId: 771, count: 1, isVisible: true }, // 보스 - 포효의 메달리온
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '다리 밑',
    coord: { x: 2634, y: 2714 },
    stairs: EnumStairs.down,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2901, count: 1, isVisible: false }, // 불기름
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.boss,
    name: null,
    displayName: '피 묻은 손가락 네리우스',
    description: '피 묻은 손가락 네리우스',
    coord: { x: 2641, y: 2202 },
    stairs: null,
    bossName: '피 묻은 손가락 네리우스',
    bossRune: 1294,
    items: [
      { itemId: 14, count: 1, isVisible: true }, // 레두비아
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.dungeon,
    name: '흐린 강 동굴',
    displayName: '흐린 강 동굴',
    description: '패치 동굴',
    coord: { x: 2590, y: 2262 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3347, count: 5, isVisible: false }, // 버섯
      { itemId: 531, count: 1, isVisible: true }, // 천옷 세트
      { itemId: 1407, count: 1, isVisible: true }, // 패치
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '유라',
    coord: { x: 2719, y: 1840 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 1403, count: 1, isVisible: true }, // 유라
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '유라 위',
    coord: { x: 2815, y: 1673 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3353, count: 2, isVisible: false }, // 독꽃
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '유라 왼쪽',
    coord: { x: 2479, y: 2022 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3231, count: 1, isVisible: true }, // 무구 장인의 제작서 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '유라 왼쪽',
    coord: { x: 2251, y: 1491 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2201, count: 1, isVisible: false }, // 단석 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '유라 왼쪽',
    coord: { x: 2450, y: 1744 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3102, count: 1, isVisible: false }, // 황금의 룬 [2]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.dungeon,
    name: '흐린 강의 지하 묘지',
    displayName: null,
    description: '유라 위쪽',
    coord: { x: 2617, y: 1476 },
    stairs: null,
    bossName: '묘지기 투사',
    bossRune: 1700,
    items: [
      { itemId: 2221, count: 2, isVisible: true }, // 묘 은방울꽃 [1]
      { itemId: 2231, count: 1, isVisible: true }, // 영혼 묘 은방울꽃 [1]
      { itemId: 3367, count: 5, isVisible: false }, // 뿌리기름
      { itemId: 1333, count: 1, isVisible: true }, // 땅 잃은 기사 잉바르
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '폭풍의 관문',
    coord: { x: 1483, y: 2082 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3304, count: 1, isVisible: false }, // 짐승 고기 덩어리
      { itemId: 3101, count: 1, isVisible: false }, // 황금의 룬 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '로데리카 밑',
    coord: { x: 918, y: 1899 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2010, count: 1, isVisible: true }, // 황금 종자
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: '폭풍 언덕의 낡은 집',
    displayName: '폭풍 언덕의 낡은 집',
    description: '로데리카 오두막',
    coord: { x: 869, y: 1653 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2031, count: 1, isVisible: true }, // 석검 열쇠
      { itemId: 1408, count: 1, isVisible: true }, // 로데리카
      { itemId: 1297, count: 1, isVisible: true }, // 영해파리의 뼛가루
      { itemId: 2010, count: 1, isVisible: true }, // 황금 종자
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '로데리카 오두막 남동쪽',
    coord: { x: 1099, y: 1820 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2201, count: 3, isVisible: true }, // 단석 [1]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '로데리카 오두막 남동쪽 무덤',
    coord: { x: 1414, y: 1615 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3101, count: 4, isVisible: true }, // 황금의 룬 [1]
      { itemId: 3102, count: 2, isVisible: true }, // 황금의 룬 [2]
      { itemId: 3103, count: 1, isVisible: true }, // 황금의 룬 [3]
      { itemId: 3105, count: 1, isVisible: true }, // 황금의 룬 [5]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '폭풍의 관문 위',
    coord: { x: 1323, y: 2028 },
    stairs: EnumStairs.up,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3102, count: 1, isVisible: false }, // 황금의 룬 [2]
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '폭풍의 관문 위',
    coord: { x: 1396, y: 1962 },
    stairs: EnumStairs.up,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 3323, count: 5, isVisible: false }, // 연기나비
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '폭풍의 관문 위',
    coord: { x: 1545, y: 2103 },
    stairs: EnumStairs.up,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 751, count: 1, isVisible: true }, // 먼 화살의 탈리스만
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.boss,
    name: '폭풍 언덕의 봉인감옥',
    displayName: '도가니의 기사',
    description: '도가니 감옥',
    coord: { x: 1359, y: 2320 },
    stairs: null,
    bossName: '도가니의 기사',
    bossRune: 2100,
    items: [
      { itemId: 1155, count: 1, isVisible: true }, // 도가니의 모습/꼬리
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '도가니 감옥 왼쪽',
    coord: { x: 720, y: 2570 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2602, count: 1, isVisible: false }, // 별빛 조각
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '베르나르집 북서',
    coord: { x: 1309, y: 1192 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2507, count: 1, isVisible: true }, // 근력의 혹 결정 물방울
    ],
  },
  {
    importance: EnumImportance.middle,
    type: EnumLocationType.field,
    name: null,
    displayName: null,
    description: '베르나르집 북서',
    coord: { x: 1289, y: 1428 },
    stairs: null,
    bossName: null,
    bossRune: null,
    items: [
      { itemId: 2641, count: 5, isVisible: false }, // 불화살
    ],
  },

  // {
  //   importance: EnumImportance.middle,
  //   type: EnumLocationType.siteOfGrace,
  //   name: null,
  //   displayName: null,
  //   description: null,
  //   coord: { x: 0, y: 0 },
  //   stairs: null,
  //   bossName: null,
  //   bossRune: null,
  //   items: [],
  // },
]




export default limgraveItems;