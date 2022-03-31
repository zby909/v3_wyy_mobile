// 自动引入api
interface modulesValues {
  [key: string]: any;
}

const modulesFiles = require.context('./modules', true, /\.api\.js/);
const apiModules = modulesFiles.keys().reduce((modules: modulesValues, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/([A-Za-z]+).*$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});
export default apiModules;
