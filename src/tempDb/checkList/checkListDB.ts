import { dataStorage, DataStorageKey } from '@/libs';

import initialData from './initialData';

type ResCheckList = {
  id: string;
  characterName: string;
  ngPlus: number;
  memo: string;
}

type ResCheckListDetail = {
  areaId: number;
  name: string;
  list: ResCheckListDetailItem[];
  isOpen: boolean;
}

type ResCheckListDetailItem = {
  todoId: number;
  isBoss: boolean;
  locationName: string;
  targetName: string;
  rune: number;
  bossRewards: string[];
  additionalInfo: string[];
  isComplete: boolean;
  isSkip: boolean;
}

class CheckListDB {
  public getAllCheckLists(): ResCheckList[] {
    return dataStorage.local.get(DataStorageKey.allCheckLists, []);
  }

  public addCheckList(value: ResCheckList) {
    const prevCheckLists = this.getAllCheckLists();
    const newList = [ ...prevCheckLists, value ];
    dataStorage.local.set(DataStorageKey.allCheckLists, newList);

    // TODO detail 데이터 생성 필요
  }

  public deleteAllCheckLists() {
    dataStorage.local.remove(DataStorageKey.allCheckLists);
  }

  public getCheckListInitialData(): ResCheckListDetail[] {
    return initialData;
  }

}

export type {
  ResCheckList,
  ResCheckListDetail,
  ResCheckListDetailItem,
}

const _instance = new CheckListDB();
export default _instance;