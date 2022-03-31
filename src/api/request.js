import axios from 'axios';
import Qs from 'qs';
// import { Toast } from 'vant';

const BaseServiceApi = process.env.VUE_APP_SERVICE_BASE_URL;
// 一个axios请求实例
const BaseService = axios.create({
  baseURL: BaseServiceApi, // url = base url + request url
  timeout: 5000, // request timeout
});

let g_showMsg = [];

BaseService.getRequest = async (url, params = {}, { showMsg = true } = {}) => {
  showMsg && !g_showMsg.includes(url) && g_showMsg.push(url);
  try {
    const res = await BaseService.get(url, { params });
    return [res?.data?.data, res?.data, res];
  } catch (error) {
    return [null, error?.data, error];
  }
};

BaseService.postRequest = async (url, params = {}, { showMsg = true, isJson = true } = {}) => {
  showMsg && !g_showMsg.includes(url) && g_showMsg.push(url);
  try {
    const res = await BaseService.post(url, isJson ? params : Qs.stringify(params));
    return [res?.data?.data, res?.data, res];
  } catch (error) {
    return [null, error?.data, error];
  }
};

// 添加请求拦截器
BaseService.interceptors.request.use(
  config => {
    //后续可以在这进行token的传递
    config.headers['Auth-Code'] = 'wsnbb';
    // 请求发送前进行处理
    console.log('请求拦截BaseService', config);
    return config;
  },
  error => {
    // 请求错误处理
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
BaseService.interceptors.response.use(
  response => {
    console.log('响应拦截BaseService', response);
    return response;
  },
  error => {
    // 响应错误处理
    if (g_showMsg.includes(error.config.url)) {
      console.log(error.response?.data?.message || error.message || '请求错误');
      // Toast({
      //   message: error.response?.data?.message || error.message || '请求错误',
      //   type: 'fail',
      //   duration: 5 * 1000,
      // });
    }
    //处理错误信息
    console.log(error.request);
    console.log(error.response);
    console.log(error.message);
    console.log(error.config);
    return Promise.reject(error.response);
  }
);

//----------------------------------下一个实例----------------------------------

export { BaseService };
