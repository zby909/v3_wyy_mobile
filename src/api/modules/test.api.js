import { BaseService } from '@/api/request';

const api = {};
//测试get请求
api.getTest = function (params = {}) {
  return BaseService.getRequest('playlist/detail', params, { showMsg: true });
};

//测试post请求 application/json
api.postTest = function (params = {}) {
  return BaseService.postRequest('playlist/detail', params, { showMsg: false });
};

//测试post请求 application/x-www-form-urlencoded
api.postFormTest = function (params = {}) {
  return BaseService.postRequest('playlist/detail', params, { showMsg: false, isJson: false });
};

export default api;
