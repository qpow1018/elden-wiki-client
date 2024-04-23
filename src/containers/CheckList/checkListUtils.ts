import define from '@/define';

class CheckListUtils {
  public isUnderMaxCheckListCount(arrLength: number) {
    if (arrLength >= define.maxCheckListCount) {
      return false;
    }

    return true;
  }

  public isValidCharacterName(characterName: string) {
    if (characterName.length === 0 || characterName.length > 20) {
      return false;
    }

    const regex = /^[A-Za-z0-9+]*$/;
    if (regex.test(characterName) === false) {
      return false;
    }

    return true;
  }

  public isValidNgPlus(ngPlus: number) {
    if (ngPlus < 0 || ngPlus > 1000) {
      return false;
    }

    return true;
  }
}

const _instance = new CheckListUtils();
export default _instance;