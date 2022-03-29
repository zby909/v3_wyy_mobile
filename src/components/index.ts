// 自动注册common下的全局组件
import { App } from '@vue/runtime-core';
interface labelValue {
  name: string;
  instance: any;
}

const modulesFiles = require.context('./common', true, /\.vue/);
const components: labelValue[] = modulesFiles.keys().reduce((modules: labelValue[], modulePath) => {
  const value = modulesFiles(modulePath).default;
  modules.push({ name: value.name, instance: value });
  return modules;
}, []);

const install = (Vue: App) => {
  components.forEach(v => {
    Vue.component(v.name, v.instance);
  });
};

export default {
  install,
};
