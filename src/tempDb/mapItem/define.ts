enum MainCategory {
  weapon, // 무기
  subWeapon, // 지팡이, 성인, 활, 석궁, 토치, 방패
  armor, // 방어구
  talisman, // 탈리스만
  skill, // 전회
  spell, // 주문
  spiritAshes, // 뼛가루
  gesture, // 제스처
  npc, // npc
  generalItem, // 기타 아이템
}

enum SubCategoryInWeapon {
  dagger, // 단검
  straightSword, // 직검
  greatSword, // 대검
  colossalSword, // 특대검
  thrustingSword, // 자검
  heavyThrustingSword, // 대자검
  curvedSword, // 곡검
  curvedGreatSword, // 대곡검
  katana, // 도
  twinBlade, // 쌍날검
  axe, // 도끼
  greatAxe, // 대형 도끼
  hammer, // 망치
  flail, // 철퇴
  greatHammer, // 대형 망치
  colossalWeapon, // 특대형 무기
  spear, // 창
  greatSpear, // 대형 창
  halberd, // 도끼창
  reaper, // 낫
  whip, // 채찍
  fist, // 주먹
  claw, // 손톱
}

enum SubCategoryInSubWeapon {
  staff, // 지팡이
  sacredSeal, // 성인
  lightBow, // 소형 활
  bow, // 활
  greatBow, // 대궁
  crossBow, // 석궁
  ballista, // 대형 석궁
  torch, // 횃불
  smallShield, // 소형 방패
  mediumShield, // 중형 방패
  greatShield, // 대형 방패
}

enum SubCategoryInSkill {
  heavy, // 중후
  keen, // 예리
  quality, // 상질
  magic, // 마력
  fire, // 화염
  flameArt, // 화염술
  lightning, // 벼락
  sacred, // 신성
  poison, // 독
  blood, // 피
  cold, // 냉기
  occult, // 신비
  etc, // 활, 방패용
}

enum SubCategoryInSpell {
  magic, // 마술
  incantation, // 기도
}

enum SubCategoryInSpiritAshes {
  default, // 일반
  special, // 특수
  marionette, // 꼭두각시
}

enum SubCategoryInNpc {
  default, // 일반
  merchant, // 방랑 상인
}

enum SubCategoryIngGeneralItem {
  core, // 영약의 성배병, 도구 가방, 숫돌 소도, 영마의 손가락 피리, 환혼의 종, 부적주머니
  event, // 이벤트 - 퀘스트 관련
  weaponUpgrade, // 단석
  spiritUpgrade, // 은방울꽃
  bellBearing, // 방울
  assistant, // 보조 - 랜턴, 망원경
  cristalTears, // 성배병 물방울
  consumables, // 소모품
  bowl, // 그릇 - 항아리, 조향병
  throw, // 투척물
  enchant, // 인챈트
  multiPlay, // 멀티용
  rune, // 룬
  greatRune, // 거대한 룬
  remembrances, // 추억
  ending, // 수복 룬
  material, // 재료
  recipe, // 제작서
}

enum EnumImportance {
  veryLow = 1,
  low = 2,
  middle = 3,
  high = 4,
  veryHigh = 5,
}

enum EnumStairs {
  up = 1,
  down = -1,
}

enum EnumLocationType {
  field = 1,
  dungeon = 2,
  legacyDungeon = 3,
  siteOfGrace = 4, // 축복
  boss = 5, // 보스 관련 - 필드 보스, 봉인 감옥 등
}

export {
  MainCategory,
  SubCategoryInWeapon,
  SubCategoryInSubWeapon,
  SubCategoryInSkill,
  SubCategoryInSpell,
  SubCategoryInSpiritAshes,
  SubCategoryInNpc,
  SubCategoryIngGeneralItem,
  EnumImportance,
  EnumStairs,
  EnumLocationType,
}