import { App } from '@vue/runtime-core';

import { Button, Icon, Tabbar, TabbarItem } from 'vant';

const install = (Vue: App) => {
  Vue.use(Button);
  Vue.use(Icon);
  Vue.use(Tabbar);
  Vue.use(TabbarItem);
};

export default {
  install,
};
