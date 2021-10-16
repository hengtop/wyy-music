import axios from 'axios';

export default class ReactRequest {
  constructor(config) {
    //创建一个axios实例
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;

    //配置拦截器
    //请求
    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch
    );
    //响应
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    );
  }
  request(config) {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        //执行下自定义的拦截器
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            //执行自定义的拦截器
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
