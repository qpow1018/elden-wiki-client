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

  public async getItemWeapons(): Promise<Types.ResItemMainCategory[]> {
    try {
      return await APIRequester.get(`/api/item/weapons`);
    } catch (error) {
      throw error;
    }
  }
}


const _inst = new APIService();
export default _inst;