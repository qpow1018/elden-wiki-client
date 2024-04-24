const list = [
  {
    todoId: 1,
    isBoss: false,
    locationName: '상인 근처 폭포',
    targetName: '새 다리 황금 절임',
    rune: 0,
    bossRewards: [],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 2,
    isBoss: true,
    locationName: '',
    targetName: '선조령',
    rune: 13000,
    bossRewards: ['선조령의 백성의 뼛가루'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
  {
    todoId: 3,
    isBoss: true,
    locationName: '',
    targetName: '용인병',
    rune: 16000,
    bossRewards: ['용 할버드'],
    additionalInfo: [],
    isComplete: false,
    isSkip: false,
  },
]

const resData = {
  areaId: 8,
  name: '시프라 강',
  list: list,
  isOpen: true,
}

export default resData;