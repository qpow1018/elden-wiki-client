import APIRequester from './APIRequester';

class APIService extends APIRequester {
  public async getItemMainCategories() {
    try {
      const resData = await APIRequester.get('/api/item/item-categories');
      console.log('resData', resData);
      return resData;

    } catch (error) {
      console.error('error - getItemMainCategories', error);
    }
  }
}


const _inst = new APIService();
export default _inst;