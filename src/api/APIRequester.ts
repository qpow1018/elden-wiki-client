import axios from 'axios';

import { AppError } from '@/types/api';

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
      return response.data.bgData;

    } catch (error: any) {
      // TODO Dev일경우 출력
      console.error('api error', method, url)
      console.error('api error', error);

      const appError = APIRequester.makeAppError(error);
      throw appError;
    }
  }

  private static makeAppError(error: any): AppError {
    // 서버에서 정의된 error를 응답
    if (error.response?.data !== undefined) {
      return {
        httpResponseCode: error.response.status,
        code: error.response.data.code,
        message: error.response.data.msg,
        detailMessage: error.response.data.detailMessage,
      }

    } else {
      return {
        httpResponseCode: null,
        code: error.code || null,
        message: error.message,
        name: error.name || 'undefined error',
      }
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