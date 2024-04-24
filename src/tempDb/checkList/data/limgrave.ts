const list = [
  {
    todoId: 1,
    isBoss: false,
    locationName: '관문 앞 폐허',
    targetName: '숫돌 소도',
    rune: 0,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 2,
    isBoss: false,
    locationName: '하이트 요새',
    targetName: '황금 종자, 덱타스의 부절',
    rune: 0,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 3,
    isBoss: false,
    locationName: '케네스 하이트',
    targetName: '황금 종자',
    rune: 0,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 4,
    isBoss: false,
    locationName: '안개 낀 숲의 폐허',
    targetName: '도끼의 탈리스만',
    rune: 0,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 5,
    isBoss: false,
    locationName: '동부 황금 나무',
    targetName: '큰 가시 깨진 물방울, 넘친 초록 결정 물방울',
    rune: 0,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 6,
    isBoss: false,
    locationName: '제3 마리카 교회',
    targetName: '성배의 물방울, 영약병',
    rune: 0,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 7,
    isBoss: false,
    locationName: '',
    targetName: '유라',
    rune: 0,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 8,
    isBoss: false,
    locationName: '흐린 강 동굴',
    targetName: '패치',
    rune: 0,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 9,
    isBoss: false,
    locationName: '해안 동굴 근처',
    targetName: '새 다리 황금 절임',
    rune: 0,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 10,
    isBoss: false,
    locationName: '아길 호수 남쪽',
    targetName: '물방울 유생, 왕가의 스크롤',
    rune: 0,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 11,
    isBoss: true,
    locationName: '숲 옆 동굴',
    targetName: '파름 아즈라의 수인',
    rune: 1000,
    bossRewards: ['염룡 표식의 탈리스만'],
    additionalInfo: ['금 간 항아리'],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 12,
    isBoss: true,
    locationName: '역참터',
    targetName: '호박머리 광병',
    rune: 1100,
    bossRewards: [],
    additionalInfo: ['셀렌'],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 13,
    isBoss: true,
    locationName: '해안 동굴',
    targetName: '아인 두목',
    rune: 1200,
    bossRewards: ['재봉 도구'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 14,
    isBoss: true,
    locationName: '폭풍 기슭의 지하 묘지',
    targetName: '환수의 파수견',
    rune: 1300,
    bossRewards: ['귀인 마술사의 뼛가루'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 15,
    isBoss: true,
    locationName: '죽음에 닿은 지하 묘지',
    targetName: '검은 칼날의 자객',
    rune: 1600,
    bossRewards: ['붉은 흉악한 칼날', '사근'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 16,
    isBoss: true,
    locationName: '흐린 강의 지하 묘지',
    targetName: '묘지기 투사',
    rune: 1700,
    bossRewards: ['땅 잃은 기사 잉바르'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 17,
    isBoss: true,
    locationName: '높은 길 아래 동굴',
    targetName: '가디언 골렘',
    rune: 1700,
    bossRewards: ['푸른 무희'],
    additionalInfo: ['단석[1] x3', '단석[2]'],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 18,
    isBoss: true,
    locationName: '림그레이브 갱도',
    targetName: '채석꾼 트롤',
    rune: 1800,
    bossRewards: ['포효의 메달리온'],
    additionalInfo: ['단석[1] x9', '색 잃은 단석[1]'],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 19,
    isBoss: true,
    locationName: '주인 잃은 사냥개의 봉인감옥',
    targetName: '사냥개기사 대리윌',
    rune: 1900,
    bossRewards: ['사냥개의 긴 이빨'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 20,
    isBoss: true,
    locationName: '폭풍 언덕의 봉인감옥',
    targetName: '도가니의 기사',
    rune: 2100,
    bossRewards: ['도가니의 모습'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 21,
    isBoss: true,
    locationName: '',
    targetName: '밤 기병',
    rune: 2400,
    bossRewards: ['연속 찌르기'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 22,
    isBoss: true,
    locationName: '마중물 마을 변두리',
    targetName: '티비아의 배',
    rune: 2400,
    bossRewards: ['민병 스켈레톤의 뼛가루', '사근'],
    additionalInfo: ['녹색 거북 탈리스만'],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 23,
    isBoss: true,
    locationName: '전쟁 배움의 낡은 집',
    targetName: '방울 사냥꾼',
    rune: 2700,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 24,
    isBoss: true,
    locationName: '전쟁 배움의 낡은 집',
    targetName: '죽음의 새',
    rune: 2800,
    bossRewards: ['푸른 날개 칠지인'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 25,
    isBoss: true,
    locationName: '',
    targetName: '트리 가드',
    rune: 3200,
    bossRewards: ['황금 할버드'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 26,
    isBoss: true,
    locationName: '아길 호수',
    targetName: '비룡 아길',
    rune: 5000,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 27,
    isBoss: true,
    locationName: '',
    targetName: '끔찍한 흉조 멀기트',
    rune: 12000,
    bossRewards: ['부적 주머니'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 28,
    isBoss: true,
    locationName: '변경의 영웅 묘지',
    targetName: '문드러진 나무령',
    rune: 15000,
    bossRewards: ['황금 종자', '땅 잃은 기사 오레그'],
    additionalInfo: ['황금 나무의 은총', '용찬의 표식'],
    isComplete: false,
    isSkip: false,
  },
]

const limgraveData = {
  areaId: 1,
  name: '림그레이브',
  list: list,
  isOpen: true,
}

export default limgraveData;