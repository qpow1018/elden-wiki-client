class DataStorage {
  private convertJsonToString(jsonData: any) {
    try {
      const stringData = JSON.stringify(jsonData);
      return stringData;

    } catch (error) {
      console.error(error);
      throw new Error('storage convertJsonToString error');
    }
  }

  private convertsStringToJson(stringData: string) {
    try {
      const jsonData = JSON.parse(stringData);
      return jsonData;

    } catch (error) {
      console.error(error);
      throw new Error('storage convertsStringToJson error');
    }
  }

  public session = {
    set: (key: string, jsonData: any) => {
      const stringData = this.convertJsonToString(jsonData);
      window.sessionStorage.setItem(key, stringData);
    },
    get: (key: string, defaultValue: any) => {
      const _data = window.sessionStorage.getItem(key);
      if (_data === null) return defaultValue;
      return this.convertsStringToJson(_data);
    },
    remove: (key: string) => {
      window.sessionStorage.getItem(key);
    }
  }

  public local = {
    set: (key: string, jsonData: any) => {
      const stringData = this.convertJsonToString(jsonData);
      window.localStorage.setItem(key, stringData);
    },
    get: (key: string, defaultValue: any) => {
      const _data = window.localStorage.getItem(key);
      if (_data === null) return defaultValue;
      return this.convertsStringToJson(_data);
    },
    remove: (key: string) => {
      window.localStorage.getItem(key);
    }
  }
}

enum DataStorageKey {

}

const dataStorage = new DataStorage();

export {
  dataStorage,
  DataStorageKey
}
