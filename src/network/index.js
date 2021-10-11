import ReactRequest from './request';
import { BASE_URL, TIMEOUT } from './config';

const reactRequest = new ReactRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      //该实例所有的请求拦截器
      console.log('单个实例请求成功的拦截');
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截');
      return err;
    },
    responseInterceptor: (config) => {
      console.log('单个实例响应成功的拦截');
      return config;
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截');
      return err;
    }
  }
});

export default reactRequest;
