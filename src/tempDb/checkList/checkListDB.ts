import { dataStorage, DataStorageKey } from '@/libs';

type ResCheckList = {
  id: string;
  characterName: string;
  ngPlus: number;
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




}

const _instance = new CheckListDB();
export default _instance;