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

  public getCheckList(id: string): ResCheckList | null {
    const allData = this.getAllCheckLists();
    const data = allData.find(item => item.id === id);

    if (data === undefined || data === null) {
      return null;
    }

    return data;
  }

  public addCheckList(value: ResCheckList) {
    const prevCheckLists = this.getAllCheckLists();
    const newList = [ ...prevCheckLists, value ];
    dataStorage.local.set(DataStorageKey.allCheckLists, newList);

    this.addCheckListDetail(value.id);
  }

  public getCheckListInitialData(): ResCheckListDetailArea[] {
    return initialData;
  }

  public getAllCheckListDetails(): ResCheckListDetail {
    return dataStorage.local.get(DataStorageKey.checkListDetails, {});
  }

  public getCheckListDetail(id: string): ResCheckListDetailArea[] | null {
    const allData = this.getAllCheckListDetails();
    const data = allData[id];

    if (data === undefined || data === null) {
      return null;
    }

    return data;
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







  public clearAllLocalStorage() {
    dataStorage.local.remove(DataStorageKey.allCheckLists);
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