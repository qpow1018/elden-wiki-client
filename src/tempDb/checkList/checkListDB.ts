import { dataStorage, DataStorageKey } from '@/libs';

// type ResCj


class CheckListDB {
  public getAllCheckLists() {
    const testValue = dataStorage.local.get(DataStorageKey.allCheckLists, []);

    return testValue;
  }

  public addCheckList(value: any) {
    dataStorage.local.set(DataStorageKey.allCheckLists, value);
  }




}

const _instance = new CheckListDB();
export default _instance;