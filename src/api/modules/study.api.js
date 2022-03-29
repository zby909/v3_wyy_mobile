import { BaseService } from '@/api/request';

const api = {};

/**
 * @description:
 * @param  {*attrib 属性名 }
 * @param  {*value 新的值 }
 * @return {*data[]}
 */
//更新study数据
api.studySetValue = function (params = {}) {
  return BaseService.postRequest('', { api: 'study_set_value', params: params });
};
export default api;
