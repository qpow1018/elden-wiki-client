import { dataStorage, DataStorageKey } from '@/libs';

import initialData from './initialData';

type ResCheckList = {
  id: string;
  characterName: string;
  ngPlus: number;
  memo: string;
}

type ResCheckListDetail = {
  [id: string]: ResCheckListDetailArea[];
}

type ResCheckListDetailArea = {
  areaId: number;
  name: string;
  list: ResCheckListDetailAreaItem[];
  isOpen: boolean;
}

type ResCheckListDetailAreaItem = {
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

    this.addCheckListDetail(value.id);
  }

  public getAllCheckListDetails(): ResCheckListDetail {
    return dataStorage.local.get(DataStorageKey.checkListDetails, {});
  }

  public getCheckListInitialData(): ResCheckListDetailArea[] {
    return initialData;
  }

  public addCheckListDetail(id: string) {
    const prevData = this.getAllCheckListDetails();
    const initData = this.getCheckListInitialData();

    const newData = {
      ...prevData,
      [id]: initData,
    }

    dataStorage.local.set(DataStorageKey.checkListDetails, newData);
  }

  public getCheckListDetail(id: string): ResCheckListDetailArea[] | null {
    const allData = this.getAllCheckListDetails();
    const data = allData[id];

    if (data === undefined || data === null) {
      return null;
    }

    return data;
  }





  public deleteAllCheckLists() {
    dataStorage.local.remove(DataStorageKey.allCheckLists);
  }
}

export type {
  ResCheckList,
  ResCheckListDetail,
  ResCheckListDetailArea,
  ResCheckListDetailAreaItem,
}

const _instance = new CheckListDB();
export default _instance;