import APIRequester from './APIRequester';

import * as Types from '@/types/api';

class APIService extends APIRequester {
  public async getItemMainCategories(): Promise<Types.ResItemMainCategory[]> {
    try {
      return await APIRequester.get('/api/item/main-categories');
    } catch (error) {
      throw error;
    }
  }

  public async getItemSubCategory(categoryNo: number): Promise<Types.ResItemSubCategory> {
    try {
      return await APIRequester.get(`/api/item/sub-categories/${categoryNo}`);
    } catch (error) {
      throw error;
    }
  }

  public async getItemWeapons(): Promise<Types.ResWeaponWithSubCategory[]> {
    try {
      return await APIRequester.get(`/api/item/weapons`);
    } catch (error) {
      throw error;
    }
  }
}

const _inst = new APIService();
export default _inst;