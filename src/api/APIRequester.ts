import axios from 'axios';

// TODO URL 설정 / env 활용 / dev, prod 나누기
const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:27017/',
  timeout: 5000,
});

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

class APIRequester {
  private static axios = axiosInstance;

  private static async callApi(method: HttpMethod, url: string, requestBody?: Object) {
    const config = {
      method: method,
      url: url,
      data: requestBody,
    }

    try {
      const response = await this.axios(config);
      console.log('callApi', response); // TODO 서버 데이터 정제하기
      return response;

    } catch (error) { // TODO 공통 api 에러 핸들링
      console.error('error - callApi', error);
      throw error;
    }
  }

  protected static async get(url: string) {
    try {
      return await this.callApi(HttpMethod.GET, url);
    } catch (error) {
      throw error;
    }
  }

  protected static async post(url: string, data?: Object) {
    try {
      return await this.callApi(HttpMethod.POST, url, data);
    } catch (error) {
      throw error;
    }
  }

  protected static async put(url: string, data?: Object) {
    try {
      return await this.callApi(HttpMethod.PUT, url, data);
    } catch (error) {
      throw error;
    }
  }

  protected static async delete(url: string) {
    try {
      return await this.callApi(HttpMethod.DELETE, url);
    } catch (error) {
      throw error;
    }
  }
}

export default APIRequester;