// 自动引入api
import { uuid } from '@/api/request';
import Vue from 'vue';
Vue.prototype.$uuid = uuid;

const modulesFiles = require.context('./modules', true, /\.api\.js/);
const apiModules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/([A-Za-z]+).*$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});
// console.log(apiModules);
export default apiModules;
